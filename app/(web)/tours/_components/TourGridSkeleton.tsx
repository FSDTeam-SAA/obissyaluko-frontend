const skeletonTours = Array.from({ length: 3 }, (_, index) => index);

export default function TourGridSkeleton() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-10 h-12 w-full animate-pulse rounded-md bg-gray-200" />

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {skeletonTours.map((item) => (
            <div
              key={item}
              className="overflow-hidden rounded-2xl bg-white p-2 shadow-[0_8px_20px_rgba(0,0,0,0.08)]"
            >
              <div className="h-[247px] animate-pulse rounded-xl bg-gray-200" />

              <div className="p-2">
                <div className="mt-2 h-8 w-3/4 animate-pulse rounded bg-gray-200" />

                <div className="mt-3 flex flex-wrap gap-3">
                  <div className="h-5 w-28 animate-pulse rounded bg-gray-200" />
                  <div className="h-5 w-20 animate-pulse rounded bg-gray-200" />
                  <div className="h-5 w-16 animate-pulse rounded bg-gray-200" />
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  <div className="h-7 w-28 animate-pulse rounded-[8px] bg-gray-200" />
                  <div className="h-7 w-32 animate-pulse rounded-[8px] bg-gray-200" />
                  <div className="h-7 w-24 animate-pulse rounded-[8px] bg-gray-200" />
                </div>

                <div className="mt-6 h-[48px] w-full animate-pulse rounded-[8px] bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
