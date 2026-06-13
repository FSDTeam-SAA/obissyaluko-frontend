"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import BlogDetailsSkeleton from "../_components/BlogDetailsSkeleton";

type Blog = {
  _id: string;
  title: string;
  excerpt: string;
  image: string;
  content: string;
  category: string;
  createdAt: string;
  updatedAt: string;
};

type BlogResponse = {
  statusCode: number;
  success: boolean;
  message: string;
  data: Blog;
};

const FALLBACK_BLOG_IMAGE = "/assets/blogimage.png";

function getBlogDetailsUrl(blogId: string) {
  const baseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/+$/, "") || "/api/v1";

  return `${baseUrl}/blog/${encodeURIComponent(blogId)}`;
}

async function fetchBlogDetails(blogId: string) {
  const response = await fetch(getBlogDetailsUrl(blogId));
  const result = (await response.json().catch(() => null)) as BlogResponse | null;

  if (!response.ok || !result?.success) {
    throw new Error(result?.message || "Failed to fetch blog details.");
  }

  return result.data;
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

function formatCategory(category: string) {
  return category
    .split(/[\s-_]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function htmlToText(value: string) {
  return value
    .replace(/<\/p>/gi, "\n\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+\n/g, "\n")
    .replace(/\n\s+/g, "\n")
    .replace(/[ \t]+/g, " ")
    .trim();
}

function getParagraphs(content: string) {
  return htmlToText(content)
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

export default function BlogDetailsPage() {
  const params = useParams<{ id: string }>();
  const blogId = params.id;

  const {
    data: blog,
    error,
    isPending,
  } = useQuery<Blog, Error>({
    queryKey: ["blog-details", blogId],
    queryFn: () => fetchBlogDetails(blogId),
    enabled: Boolean(blogId),
  });

  if (isPending) {
    return <BlogDetailsSkeleton />;
  }

  if (error || !blog) {
    return (
      <section className="min-h-screen bg-[#F4F1EB] py-10 lg:py-12">
        <div className="container mx-auto px-4">
          <Link
            href="/blogs"
            className="mb-6 inline-flex items-center gap-2 text-sm text-gray-600"
          >
            <ArrowLeft size={16} />
            Back to Blogs
          </Link>

          <div className="rounded-lg border border-red-100 bg-red-50 px-4 py-5 text-sm text-red-600">
            {error?.message || "Blog details not found."}
          </div>
        </div>
      </section>
    );
  }

  const paragraphs = getParagraphs(blog.content);

  return (
    <section className="min-h-screen  py-10 lg:py-12">
      <div className="container mx-auto px-4">
        <Link
          href="/blogs"
          className="mb-6 inline-flex items-center gap-2 text-sm text-gray-600"
        >
          <ArrowLeft size={16} />
          Back to Blogs
        </Link>

        <article className="overflow-hidden rounded-xl  shadow-sm">
          <div className="relative h-[240px] w-full overflow-hidden sm:h-[360px] lg:h-[480px]">
            <Image
              src={blog.image || FALLBACK_BLOG_IMAGE}
              alt={blog.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <div className="mx-auto  px-5 py-8 md:px-0 lg:py-10">
            <div className="mb-5 flex flex-wrap items-center gap-3 text-sm text-[#8A8A8A]">
              <span className="rounded-[8px] bg-[#F0F2F4] px-3 py-2 text-[#282828]">
                {formatCategory(blog.category)}
              </span>

              <span className="flex items-center gap-2">
                <CalendarDays size={15} />
                {formatDate(blog.createdAt)}
              </span>
            </div>

            <h1 className="text-3xl font-semibold leading-tight text-[#222] md:text-4xl">
              {blog.title}
            </h1>

            <p className="mt-4 text-lg leading-8 text-[#666]">
              {blog.excerpt}
            </p>

            <div className="mt-8 space-y-5 text-base leading-8 text-[#555]">
              {paragraphs.length ? (
                paragraphs.map((paragraph, index) => (
                  <p key={`${paragraph}-${index}`}>{paragraph}</p>
                ))
              ) : (
                <p>{blog.excerpt}</p>
              )}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
