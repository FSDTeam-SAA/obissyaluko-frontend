"use client";

import { useState } from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import {
  ArrowLeft,
  CheckCircle,
  FileText,
  ListChecks,
  Circle,
} from "lucide-react";
import VisaApplicationModal from "./visa-application-modal";
import VisaDetailsSkeleton from "./VisaDetailsSkeleton";

type Visa = {
  _id: string;
  country: string;
  visaTitle: string;
  category: string;
  description: string;
  eligibility: string[];
  processingSteps: string[];
  requiredDocuments: string[];
  processingTime: string;
  price: number;
};

type VisaResponse = {
  statusCode: number;
  success: boolean;
  message: string;
  data: Visa;
};

type VisaDetailsPageProps = {
  visaId: string;
};

function getVisaDetailsUrl(visaId: string) {
  const baseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/+$/, "") || "/api/v1";

  return `${baseUrl}/visa/${encodeURIComponent(visaId)}`;
}

async function fetchVisaDetails(visaId: string) {
  const response = await fetch(getVisaDetailsUrl(visaId));
  const result = (await response.json().catch(() => null)) as VisaResponse | null;

  if (!response.ok || !result?.success) {
    throw new Error(result?.message || "Failed to fetch visa details.");
  }

  return result.data;
}

function formatCategory(category: string) {
  return category
    .split(/[\s-_]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function VisaDetailsPage({ visaId }: VisaDetailsPageProps) {
  const [openModal, setOpenModal] = useState(false);

  const {
    data: visa,
    error,
    isPending,
  } = useQuery<Visa, Error>({
    queryKey: ["visa-details", visaId],
    queryFn: () => fetchVisaDetails(visaId),
    enabled: Boolean(visaId),
  });

  if (isPending) {
    return <VisaDetailsSkeleton />;
  }

  if (error || !visa) {
    return (
      <section className="min-h-screen bg-[#f4f1eb] py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <Link href="/visa-services">
            <button className="mb-6 flex items-center gap-2 text-sm text-gray-600 hover:text-black">
              <ArrowLeft size={16} />
              Back to Visa Services
            </button>
          </Link>

          <div className="rounded-lg border border-red-100 bg-red-50 px-4 py-5 text-sm text-red-600">
            {error?.message || "Visa details not found."}
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="min-h-screen bg-[#f4f1eb] py-8 lg:py-12">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link href="/visa-services">
            <button className="mb-6 flex items-center gap-2 text-sm text-gray-600 hover:text-black">
              <ArrowLeft size={16} />
              Back to Visa Services
            </button>
          </Link>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_280px]">
            {/* LEFT CONTENT */}
            <div className="space-y-5">
              <div className="rounded-lg border bg-white p-5 shadow-sm">
                <h1 className="text-2xl font-semibold text-[#131313]">
                  {visa.visaTitle}
                </h1>

                <span className="mt-3 inline-flex rounded-full bg-[#F0F2F4] px-4 py-1 text-sm font-medium text-gray-700">
                  {formatCategory(visa.category)}
                </span>
              </div>

              {/* Description */}
              <div className="rounded-lg border bg-white p-5 shadow-sm">
                <p className="text-gray-600 leading-relaxed">
                  {visa.description}
                </p>
              </div>

              {/* Eligibility */}
              <div className="rounded-lg border bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center gap-2">
                  <CheckCircle
                    size={20}
                    className="text-green-600"
                  />
                  <h2 className="font-semibold text-xl">
                    Eligibility
                  </h2>
                </div>

                <ul className="space-y-2 text-[#616161]">
                  {visa.eligibility.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Documents */}
              <div className="rounded-lg border bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center gap-2">
                  <FileText
                    size={20}
                    className="text-blue-600"
                  />
                  <h2 className="font-semibold text-xl">
                    Required Documents
                  </h2>
                </div>

                <ul className="space-y-3">
                  {visa.requiredDocuments.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle
                        size={18}
                        className="text-green-500"
                      />
                      <span className="text-[#616161]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Processing Steps */}
              <div className="rounded-lg border bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center gap-2">
                  <ListChecks
                    size={20}
                    className="text-blue-600"
                  />
                  <h2 className="font-semibold text-xl">
                    Processing Steps
                  </h2>
                </div>

                <ul className="space-y-3">
                  {visa.processingSteps.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2"
                    >
                      <Circle
                        size={12}
                        className="fill-blue-500 text-blue-500"
                      />
                      <span className="text-[#616161]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Additional Info */}
              <div className="rounded-lg border bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center gap-2">
                  <FileText
                    size={20}
                    className="text-blue-600"
                  />
                  <h2 className="font-semibold text-xl">
                    Additional Information
                  </h2>
                </div>

                <p className="text-[#616161] leading-relaxed">
                  This {formatCategory(visa.category)} visa usually takes{" "}
                  {visa.processingTime} to process. Visa processing times may
                  vary depending on application volume and embassy workload.
                  Applying early is strongly recommended.
                </p>
              </div>
            </div>

            {/* RIGHT SIDEBAR */}
            <div>
              <div className="sticky top-24 rounded-xl border bg-white p-5 shadow-md">
                <div className="mb-5">
                  <p className="text-sm text-gray-500">
                    Processing Fee
                  </p>

                  <h3 className="text-[42px] font-bold text-[#4285F4]">
                    ${visa.price}
                  </h3>

                  <span className="text-sm text-gray-500">
                    /Person
                  </span>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-gray-500">
                    Processing Time
                  </p>

                  <h4 className="text-3xl font-semibold">
                    {visa.processingTime}
                  </h4>
                </div>

                <button
                  onClick={() => setOpenModal(true)}
                  className="w-full rounded-[8px] bg-[#CD9B46] py-3 text-white font-semibold hover:opacity-90"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VisaApplicationModal
        open={openModal}
        onOpenChange={setOpenModal}
        visaTitle={visa.visaTitle}
      />
    </>
  );
}
