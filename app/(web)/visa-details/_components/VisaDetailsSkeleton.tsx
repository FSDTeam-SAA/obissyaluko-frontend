import Link from "next/link";
import { ArrowLeft } from "lucide-react";

function DetailPanelSkeleton({
  rows = 4,
  iconColor = "bg-blue-200",
}: {
  rows?: number;
  iconColor?: string;
}) {
  return (
    <div className="rounded-lg border bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center gap-2">
        <div className={`h-5 w-5 animate-pulse rounded-full ${iconColor}`} />
        <div className="h-6 w-48 animate-pulse rounded bg-gray-200" />
      </div>

      <div className="space-y-3">
        {Array.from({ length: rows }, (_, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="h-4 w-4 shrink-0 animate-pulse rounded-full bg-gray-200" />
            <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function VisaDetailsSkeleton() {
  return (
    <section className="min-h-screen bg-[#f4f1eb] py-8 lg:py-12">
      <div className="container mx-auto px-4">
        <Link href="/visa-services">
          <button className="mb-6 flex items-center gap-2 text-sm text-gray-600 hover:text-black">
            <ArrowLeft size={16} />
            Back to Visa Services
          </button>
        </Link>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_280px]">
          <div className="space-y-5">
            <div className="rounded-lg border bg-white p-5 shadow-sm">
              <div className="mb-3 h-8 w-2/3 animate-pulse rounded bg-gray-200" />
              <div className="h-7 w-24 animate-pulse rounded-full bg-gray-200" />
            </div>

            <div className="rounded-lg border bg-white p-5 shadow-sm">
              <div className="space-y-2">
                <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
                <div className="h-4 w-11/12 animate-pulse rounded bg-gray-200" />
                <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200" />
              </div>
            </div>

            <DetailPanelSkeleton iconColor="bg-green-200" />
            <DetailPanelSkeleton rows={5} />
            <DetailPanelSkeleton rows={5} />

            <div className="rounded-lg border bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-5 w-5 animate-pulse rounded bg-blue-200" />
                <div className="h-6 w-52 animate-pulse rounded bg-gray-200" />
              </div>

              <div className="space-y-2">
                <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
                <div className="h-4 w-4/5 animate-pulse rounded bg-gray-200" />
              </div>
            </div>
          </div>

          <div>
            <div className="sticky top-24 rounded-xl border bg-white p-5 shadow-md">
              <div className="mb-5">
                <div className="mb-3 h-4 w-28 animate-pulse rounded bg-gray-200" />
                <div className="h-12 w-32 animate-pulse rounded bg-gray-200" />
                <div className="mt-2 h-4 w-16 animate-pulse rounded bg-gray-200" />
              </div>

              <div className="mb-6">
                <div className="mb-3 h-4 w-32 animate-pulse rounded bg-gray-200" />
                <div className="h-9 w-40 animate-pulse rounded bg-gray-200" />
              </div>

              <div className="h-12 w-full animate-pulse rounded-[8px] bg-gray-200" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
