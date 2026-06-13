import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BlogDetailsSkeleton() {
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

        <div className="overflow-hidden rounded-xl bg-white shadow-sm">
          <div className="h-[240px] animate-pulse bg-gray-200 sm:h-[360px] lg:h-[480px]" />

          <div className="mx-auto max-w-4xl px-5 py-8 md:px-8 lg:py-10">
            <div className="mb-5 flex flex-wrap gap-3">
              <div className="h-8 w-24 animate-pulse rounded-[8px] bg-gray-200" />
              <div className="h-8 w-36 animate-pulse rounded bg-gray-200" />
            </div>

            <div className="h-10 w-4/5 animate-pulse rounded bg-gray-200" />
            <div className="mt-4 h-6 w-full animate-pulse rounded bg-gray-200" />
            <div className="mt-2 h-6 w-2/3 animate-pulse rounded bg-gray-200" />

            <div className="mt-8 space-y-3">
              <div className="h-5 w-full animate-pulse rounded bg-gray-200" />
              <div className="h-5 w-full animate-pulse rounded bg-gray-200" />
              <div className="h-5 w-11/12 animate-pulse rounded bg-gray-200" />
              <div className="h-5 w-4/5 animate-pulse rounded bg-gray-200" />
              <div className="h-5 w-full animate-pulse rounded bg-gray-200" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
