"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ArrowRight } from "lucide-react";

interface BlogCardProps {
  image: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  slug: string;
}

export default function BlogCard({
  image,
  category,
  date,
  title,
  excerpt,
  slug,
}: BlogCardProps) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[8px] bg-white p-2 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-[247px] w-full shrink-0 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        {/* Meta */}
        <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-[#8A8A8A]">
          <span className="rounded-[8px] bg-[#F0F2F4] px-2 py-[6px] ">
            {category}
          </span>

          <div className="flex items-center gap-1">
            <CalendarDays size={12} />
            {date}
          </div>
        </div>

        {/* Title */}
        <h3 className="line-clamp-2 min-h-[68px] text-[24px] font-semibold leading-[1.4] text-[#222]">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-2 line-clamp-3 min-h-[60px] text-sm leading-5 text-[#8A8A8A]">
          {excerpt}
        </p>

        {/* Button */}
        <Link
          href={`/blogs/${slug}`}
          className="mt-auto flex h-12 w-full items-center justify-center gap-2 rounded-[8px] bg-[#CD9B46] text-sm font-medium text-white transition hover:bg-[#CD9B46]/90"
        >
          Read More
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
