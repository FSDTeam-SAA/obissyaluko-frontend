// types/next-auth.d.ts
import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface User {
    userId?: string;
    role?: string;
    firstName?: string;
    lastName?: string;
    profileImage?: string;
    status?: string;
    accessRoutes?: string[];
    createdAt?: string;
    updatedAt?: string;
    accessToken?: string;
    refreshToken?: string;
    message?: string;
    success?: boolean;
    statusCode?: number;
  }

  interface Session {
    user: {
      userId: string;
      email: string;
      role: string;
      firstName?: string;
      lastName?: string;
      name?: string;
      image?: string;
      profileImage?: string;
      status?: string;
      accessRoutes: string[];
      createdAt?: string;
      updatedAt?: string;
    };
    accessToken?: string;
    refreshToken?: string;
    accessTokenExpires?: number;
    message?: string;
    success?: boolean;
    statusCode?: number;
    error?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    userId?: string;
    role?: string;
    firstName?: string;
    lastName?: string;
    profileImage?: string;
    status?: string;
    accessRoutes?: string[];
    createdAt?: string;
    updatedAt?: string;
    accessToken?: string;
    refreshToken?: string;
    accessTokenExpires?: number;
    message?: string;
    success?: boolean;
    statusCode?: number;
    error?: string;
  }
}