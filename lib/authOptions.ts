// authOptions.ts
import CredentialsProvider from "next-auth/providers/credentials";
import type { AuthOptions } from "next-auth";

const parseAccessTokenExpiry = (accessToken?: string): number | undefined => {
  if (!accessToken) return undefined;
  const parts = accessToken.split(".");
  if (parts.length !== 3) return undefined;
  try {
    const payload = parts[1]
      .replace(/-/g, "+")
      .replace(/_/g, "/")
      .padEnd(Math.ceil(parts[1].length / 4) * 4, "=");
    const decoded = JSON.parse(
      Buffer.from(payload, "base64").toString("utf-8")
    ) as { exp?: number };
    if (typeof decoded.exp !== "number") return undefined;
    return decoded.exp * 1000;
  } catch {
    return undefined;
  }
};

const isAccessTokenExpired = (expiresAt?: number): boolean =>
  typeof expiresAt === "number" && Date.now() >= expiresAt;

// ✅ Matches your actual API response shape
export interface LoginResponse {
  statusCode?: number;
  success?: boolean;
  message?: string;
  data?: {
    accessToken?: string;
    user?: {
      _id: string;
      firstName?: string;
      lastName?: string;
      email: string;
      role: string;
      status?: string;
      profileImage?: string;
      refreshToken?: string;
      accessRoutes?: string[];
      createdAt?: string;
      updatedAt?: string;
    };
  };
}

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

          if (!baseUrl) {
            throw new Error("Authentication service URL is not configured");
          }

          const email =
            typeof credentials?.email === "string"
              ? credentials.email.trim().toLowerCase()
              : "";
          const password =
            typeof credentials?.password === "string"
              ? credentials.password
              : "";

          if (!email || !password) {
            throw new Error("Email and password are required");
          }

          // ✅ Fixed endpoint to match your API
          const res = await fetch(
            `${baseUrl.replace(/\/+$/, "")}/auth/login`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email, password }),
            }
          );

          const data: LoginResponse | null = await res.json().catch(() => null);

          const accessToken = data?.data?.accessToken;
          const user = data?.data?.user;
          const hasExplicitFailure = data?.success === false;

          if (!res.ok || hasExplicitFailure || !accessToken || !user) {
            throw new Error(data?.message ?? "Invalid email or password");
          }

          const normalizedRole =
            typeof user.role === "string" ? user.role.toLowerCase() : "user";

          const firstName = user.firstName;
          const lastName = user.lastName;
          const fullName =
            [firstName, lastName].filter(Boolean).join(" ") || user.email;

          return {
            id: user._id,
            userId: user._id,
            email: user.email,
            role: normalizedRole,
            firstName,
            lastName,
            name: fullName,
            image: user.profileImage ?? null,
            profileImage: user.profileImage,
            status: user.status,
            accessRoutes: user.accessRoutes ?? [],
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
            accessToken,
            // ✅ Your API doesn't return refreshToken at top-level, fallback to user.refreshToken
            refreshToken: user.refreshToken,
            message: data?.message,
            success: data?.success,
            statusCode: data?.statusCode,
          };
        } catch (error) {
          if (error instanceof Error) {
            console.error("[auth][authorize] login failed:", error.message);
            throw error;
          }
          console.error("[auth][authorize] login failed with unknown error");
          throw new Error("Login failed. Please try again.");
        }
      },
    }),
  ],

  callbacks: {
    async signIn() {
      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.userId = user.userId ?? (user as { id?: string }).id;
        token.email = user.email;
        token.role = user.role;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.name = user.name;
        token.image = user.image;
        // token.profileImage = user.profileImage ?? user.image;
        token.status = user.status;
        token.accessRoutes = user.accessRoutes ?? [];
        token.createdAt = user.createdAt;
        token.updatedAt = user.updatedAt;
        token.message = user.message;
        token.success = user.success;
        token.statusCode = user.statusCode;
        token.accessTokenExpires = parseAccessTokenExpiry(
          user.accessToken as string | undefined
        );
        token.error = undefined;
      }

      if (isAccessTokenExpired(token.accessTokenExpires as number | undefined)) {
        token.error = "AccessTokenExpired";
      }

      return token;
    },

    async session({ session, token }) {
      session.user = {
        userId: token.userId as string,
        email: token.email as string,
        role: token.role as string,
        firstName: token.firstName as string | undefined,
        lastName: token.lastName as string | undefined,
        name: token.name as string | undefined,
        image: token.image as string | undefined,
        profileImage: token.profileImage as string | undefined,
        status: token.status as string | undefined,
        accessRoutes: (token.accessRoutes as string[]) ?? [],
        createdAt: token.createdAt as string | undefined,
        updatedAt: token.updatedAt as string | undefined,
      };
      session.accessToken = token.accessToken as string | undefined;
      session.refreshToken = token.refreshToken as string | undefined;
      session.accessTokenExpires =
        typeof token.accessTokenExpires === "number"
          ? token.accessTokenExpires
          : undefined;
      session.message = token.message as string | undefined;
      session.success = token.success as boolean | undefined;
      session.statusCode = token.statusCode as number | undefined;
      session.error = token.error as string | undefined;
      return session;
    },
  },

  pages: {
    signIn: "/login",
  },

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,
};