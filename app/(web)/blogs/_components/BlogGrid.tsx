"use client";

import { Search } from "lucide-react";
import BlogCard from "./BlogCard";

const blogs = [
  {
    image: "/assets/boat.png",
    category: "General",
    date: "May 30, 2026",
    title: "Magical Thai Experience",
    excerpt: "Quo incididunt sit id",
    slug: "magical-thai-experience",
  },
  {
    image: "/assets/boat.png",
    category: "General",
    date: "May 30, 2026",
    title: "Magical Thai Experience",
    excerpt: "Quo incididunt sit id",
    slug: "magical-thai-experience-2",
  },
  {
    image: "/assets/boat.png",
    category: "General",
    date: "May 30, 2026",
    title: "Magical Thai Experience",
    excerpt: "Quo incididunt sit id",
    slug: "magical-thai-experience-3",
  },
];
export default function BlogGrid() {
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

        {/* Cards */}

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.slug}
              image={blog.image}
              category={blog.category}
              date={blog.date}
              title={blog.title}
              excerpt={blog.excerpt}
              slug={blog.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}