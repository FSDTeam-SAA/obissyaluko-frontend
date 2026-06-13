"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import BlogCard from "./BlogCard";
import BlogGridSkeleton from "./BlogGridSkeleton";

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

type BlogsResponse = {
  statusCode: number;
  success: boolean;
  message: string;
  data: Blog[];
};

const FALLBACK_BLOG_IMAGE = "/assets/blogimage.png";

function getBlogsUrl() {
  const baseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/+$/, "") || "/api/v1";
  const params = new URLSearchParams({ limit: "100" });

  return `${baseUrl}/blog?${params.toString()}`;
}

async function fetchBlogs() {
  const response = await fetch(getBlogsUrl());
  const result = (await response.json().catch(() => null)) as BlogsResponse | null;

  if (!response.ok || !result?.success) {
    throw new Error(result?.message || "Failed to fetch blogs.");
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

function blogMatchesSearch(blog: Blog, searchTerm: string) {
  if (!searchTerm) {
    return true;
  }

  const searchableText = [
    blog.title,
    blog.excerpt,
    blog.content,
    blog.category,
    formatDate(blog.createdAt),
  ]
    .join(" ")
    .toLowerCase();

  return searchableText.includes(searchTerm.toLowerCase());
}

export default function BlogGrid() {
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: blogs = [],
    error,
    isPending,
  } = useQuery<Blog[], Error>({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
    staleTime: 60 * 1000,
  });

  const filteredBlogs = useMemo(
    () => blogs.filter((blog) => blogMatchesSearch(blog, searchTerm.trim())),
    [blogs, searchTerm]
  );

  if (isPending) {
    return <BlogGridSkeleton />;
  }

  return (
    <section className="min-h-screen bg-[#F4F1EB] py-12">
      <div className="container mx-auto px-4">
        {/* Search */}

        <div className="relative mb-10">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search articles..."
            className="
              h-12
              w-full
              rounded-md
              border
              border-gray-200
              bg-white
              pl-11
              pr-4
              outline-none
              focus:border-[#CD9B46]
            "
          />
        </div>

        {error ? (
          <div className="rounded-lg border border-red-100 bg-red-50 px-4 py-5 text-sm text-red-600">
            {error.message}
          </div>
        ) : null}

        {/* Cards */}

        {!error && filteredBlogs.length ? (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredBlogs.map((blog) => (
              <BlogCard
                key={blog._id}
                image={blog.image || FALLBACK_BLOG_IMAGE}
                category={formatCategory(blog.category)}
                date={formatDate(blog.createdAt)}
                title={blog.title}
                excerpt={blog.excerpt}
                slug={blog._id}
              />
            ))}
          </div>
        ) : null}

        {!error && !filteredBlogs.length ? (
          <div className="rounded-lg border bg-white px-4 py-10 text-center text-sm text-gray-500">
            No blogs found.
          </div>
        ) : null}
      </div>
    </section>
  );
}
