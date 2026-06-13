import Link from "next/link";
import { ArrowLeft } from "lucide-react";

function TextRows({ rows = 3 }: { rows?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: rows }, (_, index) => (
        <div
          key={index}
          className="h-4 w-full animate-pulse rounded bg-gray-200"
        />
      ))}
    </div>
  );
}

export default function TourDetailsSkeleton() {
  return (
    <section className="min-h-screen bg-[#F4F1EB] py-12">
      <div className="container mx-auto px-4 lg:px-0">
        <Link
          href="/tours"
          className="mb-6 inline-flex items-center gap-2 text-sm text-gray-600"
        >
          <ArrowLeft size={16} />
          Back to Tours
        </Link>

        <div className="h-[220px] animate-pulse overflow-hidden rounded-xl bg-gray-200 sm:h-[350px] lg:h-[500px]" />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_280px]">
          <div>
            <div className="h-9 w-2/3 animate-pulse rounded bg-gray-200" />

            <div className="mt-4 flex flex-wrap gap-4">
              <div className="h-5 w-32 animate-pulse rounded bg-gray-200" />
              <div className="h-5 w-24 animate-pulse rounded bg-gray-200" />
              <div className="h-5 w-20 animate-pulse rounded bg-gray-200" />
            </div>

            <div className="mt-8 rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-4 h-8 w-40 animate-pulse rounded bg-gray-200" />
              <TextRows />
            </div>

            <div className="mt-6 rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-4 h-8 w-32 animate-pulse rounded bg-gray-200" />
              <TextRows rows={5} />
            </div>

            <div className="mt-6 rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-4 h-8 w-32 animate-pulse rounded bg-gray-200" />
              <div className="space-y-3">
                {Array.from({ length: 4 }, (_, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="h-5 w-5 animate-pulse rounded-full bg-gray-200" />
                    <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="sticky top-24 rounded-xl bg-white p-5 shadow-md">
              <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
              <div className="mt-3 h-11 w-36 animate-pulse rounded bg-gray-200" />
              <div className="mt-5 h-12 w-full animate-pulse rounded-lg bg-gray-200" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
