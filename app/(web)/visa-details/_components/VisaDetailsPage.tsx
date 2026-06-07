"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle,
  FileText,
  ListChecks,
  Circle,
} from "lucide-react";
import VisaApplicationModal from "./visa-application-modal";

export default function VisaDetailsPage() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <section className="bg-[#f4f1eb] min-h-screen py-8 lg:py-12">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link href="/visa-services">
            <button className="mb-6 flex items-center gap-2 text-sm text-gray-600 hover:text-black">
              <ArrowLeft size={16} />
              Back to Visa Services
            </button>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6">
            {/* LEFT CONTENT */}
            <div className="space-y-5">
              {/* Description */}
              <div className="rounded-lg bg-white p-5 shadow-sm border">
                <p className="text-gray-600 leading-relaxed">
                  The UK Student Visa allows international students to study
                  at accredited institutions in the United Kingdom.
                </p>
              </div>

              {/* Eligibility */}
              <div className="rounded-lg bg-white p-5 shadow-sm border">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle
                    size={20}
                    className="text-green-600"
                  />
                  <h2 className="font-semibold text-xl">
                    Eligibility
                  </h2>
                </div>

                <ul className="space-y-2 text-[#616161]">
                  <li>
                    Must have a confirmed place at a UK educational institution
                  </li>
                  <li>
                    Must prove English language proficiency
                  </li>
                  <li>
                    Must show sufficient funds for tuition and living expenses
                  </li>
                  <li>
                    Must be at least 16 years old
                  </li>
                </ul>
              </div>

              {/* Documents */}
              <div className="rounded-lg bg-white p-5 shadow-sm border">
                <div className="flex items-center gap-2 mb-4">
                  <FileText
                    size={20}
                    className="text-blue-600"
                  />
                  <h2 className="font-semibold text-xl">
                    Required Documents
                  </h2>
                </div>

                <ul className="space-y-3">
                  {[
                    "Valid passport",
                    "CAS (Confirmation of Acceptance for Studies)",
                    "Proof of English language proficiency",
                    "Financial evidence",
                    "Passport-size photographs",
                    "TB test results",
                  ].map((item) => (
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
              <div className="rounded-lg bg-white p-5 shadow-sm border">
                <div className="flex items-center gap-2 mb-4">
                  <ListChecks
                    size={20}
                    className="text-blue-600"
                  />
                  <h2 className="font-semibold text-xl">
                    Processing Steps
                  </h2>
                </div>

                <ul className="space-y-3">
                  {[
                    "Gather required documents",
                    "Complete online application",
                    "Pay visa fee",
                    "Book and attend biometrics appointment",
                    "Submit supporting documents",
                    "Wait for decision",
                  ].map((item) => (
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
              <div className="rounded-lg bg-white p-5 shadow-sm border">
                <div className="flex items-center gap-2 mb-4">
                  <FileText
                    size={20}
                    className="text-blue-600"
                  />
                  <h2 className="font-semibold text-xl">
                    Additional Information
                  </h2>
                </div>

                <p className="text-[#616161] leading-relaxed">
                  Visa processing times may vary depending on
                  application volume and embassy workload.
                  Applying early is strongly recommended.
                </p>
              </div>
            </div>

            {/* RIGHT SIDEBAR */}
            <div>
              <div className="sticky top-24 rounded-xl bg-white p-5 shadow-md border">
                <div className="mb-5">
                  <p className="text-sm text-gray-500">
                    Processing Fee
                  </p>

                  <h3 className="text-[42px] font-bold text-[#4285F4]">
                    $490
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
                    3-4 Weeks
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
      />
    </>
  );
}