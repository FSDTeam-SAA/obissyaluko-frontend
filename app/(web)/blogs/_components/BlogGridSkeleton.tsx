import { Search } from "lucide-react";

const skeletonBlogs = Array.from({ length: 6 }, (_, index) => index);

export default function BlogGridSkeleton() {
  return (
    <section className="min-h-screen bg-[#F4F1EB] py-12">
      <div className="container mx-auto px-4">
        <div className="relative mb-10">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
          />

          <div className="h-12 w-full animate-pulse rounded-md bg-gray-200" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {skeletonBlogs.map((item) => (
            <div
              key={item}
              className="overflow-hidden rounded-[8px] bg-white p-2 shadow-md"
            >
              <div className="h-[247px] w-full animate-pulse bg-gray-200" />

              <div className="p-4">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <div className="h-7 w-20 animate-pulse rounded-[8px] bg-gray-200" />
                  <div className="h-4 w-28 animate-pulse rounded bg-gray-200" />
                </div>

                <div className="h-8 w-4/5 animate-pulse rounded bg-gray-200" />

                <div className="mt-3 space-y-2">
                  <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
                  <div className="h-4 w-2/3 animate-pulse rounded bg-gray-200" />
                </div>

                <div className="mt-5 h-12 w-full animate-pulse rounded-[8px] bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
