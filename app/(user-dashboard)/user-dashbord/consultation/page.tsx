"use client";

import { MapPin } from "lucide-react";

export default function VisaApplicationsList() {
  return (
    <div className="space-y-4">
      {/* Card 1 */}
      <div className="bg-white rounded-[8px] shadow-sm border border-gray-100 p-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h3 className="text-lg font-medium text-[#1f1f1f]">
              UK Student Visa
            </h3>

            <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
              <MapPin size={12} />
              <span>United Kingdom</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2.5 py-2 text-base font-medium rounded-[8px] bg-[#336FCA3D] text-[#015BBC]">
              Submitted
            </span>

            <span className="px-2.5 py-2 text-base font-medium rounded-[8px] bg-[#5A5F673D] text-[#555A60]">
              Pending
            </span>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-[8px] shadow-sm border border-gray-100 p-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h3 className="text-lg font-medium text-[#1f1f1f]">
              UK Student Visa
            </h3>

            <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
              <MapPin size={12} />
              <span>United Kingdom</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2.5 py-2 text-base font-medium rounded-[8px] bg-[#336FCA3D] text-[#015BBC]">
              Submitted
            </span>

            <span className="px-2.5 py-2 text-base font-medium rounded-[8px] bg-[#5A5F673D] text-[#555A60]">
              Pending
            </span>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-[8px] shadow-sm border border-gray-100 p-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h3 className="text-lg font-medium text-[#1f1f1f]">
              UK Student Visa
            </h3>

            <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
              <MapPin size={12} />
              <span>United Kingdom</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2.5 py-2 text-base font-medium rounded-[8px] bg-[#336FCA3D] text-[#015BBC]">
              Submitted
            </span>

            <span className="px-2.5 py-2 text-base font-medium rounded-[8px] bg-[#5A5F673D] text-[#555A60]">
              Pending
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}