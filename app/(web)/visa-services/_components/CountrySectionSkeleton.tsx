const skeletonCards = Array.from({ length: 8 }, (_, index) => index);

type CountrySectionSkeletonProps = {
  showSearch?: boolean;
};

function CountryCardSkeletonGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {skeletonCards.map((item) => (
        <div
          key={item}
          className="overflow-hidden rounded-2xl bg-white shadow-md"
        >
          <div className="h-[210px] w-full animate-pulse bg-gray-200" />

          <div className="p-4">
            <div className="mb-3 flex items-center justify-between gap-4">
              <div className="h-6 w-36 animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-8 animate-pulse rounded bg-gray-200" />
            </div>

            <div className="mb-6 space-y-2">
              <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-11/12 animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-2/3 animate-pulse rounded bg-gray-200" />
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
              <div className="h-8 w-20 animate-pulse rounded-full bg-gray-200" />
              <div className="h-8 w-24 animate-pulse rounded-full bg-gray-200" />
            </div>

            <div className="space-y-2">
              <div className="h-10 w-full animate-pulse rounded-lg bg-gray-200" />
              <div className="h-10 w-full animate-pulse rounded-lg bg-gray-200" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function CountrySectionSkeleton({
  showSearch = true,
}: CountrySectionSkeletonProps) {
  if (!showSearch) {
    return <CountryCardSkeletonGrid />;
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-10 h-12 w-full animate-pulse rounded-lg bg-gray-200" />

        <CountryCardSkeletonGrid />
      </div>
    </section>
  );
}
