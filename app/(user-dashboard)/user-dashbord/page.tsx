"use client";

import {
  BadgeDollarSign,
  GraduationCap,
  Plane,
  CalendarDays,
  CircleDollarSign,
  AlertCircle,
  CreditCard,
} from "lucide-react";

export default function DashboardOverview() {
  return (
    <section className="w-full p-0 lg:p-0 ">
      {/* Top Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {/* Card 1 */}
        <div className="bg-white border-2 border-[#E6E6E6] rounded-[8px] p-5 flex flex-col items-center justify-center">
          <div className="h-10 w-10 rounded-md bg-blue-50 flex items-center justify-center mb-3">
            <BadgeDollarSign className="h-5 w-5 text-blue-500" />
          </div>
          <p className="text-[16px] text-[#616161] text-center">
            Visa Applications
          </p>
          <h3 className="text-3xl font-semibold mt-2 text-[#333]">1</h3>
        </div>

        {/* Card 2 */}
        <div className="bg-white border-2 border-[#E6E6E6] rounded-[8px] p-5 flex flex-col items-center justify-center">
          <div className="h-10 w-10 rounded-md bg-green-50 flex items-center justify-center mb-3">
            <GraduationCap className="h-5 w-5 text-green-500" />
          </div>
          <p className="text-[16px] text-[#616161] text-center">
            Study Applications
          </p>
          <h3 className="text-3xl font-semibold mt-2 text-[#333]">1</h3>
        </div>

        {/* Card 3 */}
        <div className="bg-white border-2 border-[#E6E6E6] rounded-[8px] p-5 flex flex-col items-center justify-center">
          <div className="h-10 w-10 rounded-md bg-orange-50 flex items-center justify-center mb-3">
            <Plane className="h-5 w-5 text-orange-500" />
          </div>
          <p className="text-[16px] text-[#616161] text-center">
            Tour Bookings
          </p>
          <h3 className="text-3xl font-semibold mt-2 text-[#333]">1</h3>
        </div>

        {/* Card 4 */}
        <div className="bg-white border-2 border-[#E6E6E6] rounded-[8px] p-5 flex flex-col items-center justify-center">
          <div className="h-10 w-10 rounded-md bg-purple-50 flex items-center justify-center mb-3">
            <CalendarDays className="h-5 w-5 text-purple-500" />
          </div>
          <p className="text-[16px] text-[#616161] text-center">
            Consultations
          </p>
          <h3 className="text-3xl font-semibold mt-2 text-[#333]">0</h3>
        </div>

        {/* Card 5 */}
        <div className="bg-white border-2 border-[#E6E6E6] rounded-[8px] p-5 flex flex-col items-center justify-center col-span-2 md:col-span-1">
          <div className="h-10 w-10 rounded-md bg-green-50 flex items-center justify-center mb-3">
            <CircleDollarSign className="h-5 w-5 text-green-500" />
          </div>
          <p className="text-[16px] text-[#616161] text-center">
            Total Paid
          </p>
          <h3 className="text-3xl font-semibold mt-2 text-[#333]">$0</h3>
        </div>
      </div>

      {/* Payment Pending Section */}
      <div className="mt-5 border-2 border-[#CD9B46] bg-[#FFFBF4] rounded-[8px] p-4">
        {/* Header */}
        <div className="flex items-center gap-2 text-[#d48d28] mb-4">
          <AlertCircle size={16} />
          <h4 className="text-base font-medium">
            Payment Pending (3 items)
          </h4>
        </div>

        {/* Item 1 */}
        <div className="bg-white border-2 border-[#E6E6E6] rounded-[8px] px-3 py-2 flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="text-[10px] px-2 py-1 rounded bg-[#E8E8E8] text-gray-600">
              Visa
            </span>

            <span className="text-base text-[#131313]">
              UK Student Visa
            </span>
          </div>

          <div className="flex items-center gap-2 text-[#CD9B46] text-base">
            <CreditCard size={18} />
            Awaiting payment confirmation
          </div>
        </div>

        {/* Item 2 */}
        <div className="bg-white border rounded-[8px] px-3 py-2 flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="text-[10px] px-2 py-1 rounded bg-[#E8E8E8] text-gray-600">
              Tour
            </span>

            <span className="text-base text-[#131313]">
              Magical Dubai Experience
            </span>

            <span className="text-sm font-medium text-blue-600">
              $1499
            </span>
          </div>

          <div className="flex items-center gap-2 text-[#CD9B46] text-base">
            <CreditCard size={18} />
            Awaiting payment confirmation
          </div>
        </div>

        {/* Item 3 */}
        <div className="bg-white border rounded-[8px] px-3 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[10px] px-2 py-1 rounded bg-[#E8E8E8] text-gray-600">
              Study
            </span>

            <span className="text-base text-[#131313]">
              Computer Science
            </span>
          </div>

          <div className="flex items-center gap-2 text-[#CD9B46] text-base">
            <CreditCard size={18} />
            Awaiting payment confirmation
          </div>
        </div>

        {/* Footer Text */}
        <p className="mt-3 text-xs text-[#d9a45d]">
          Please contact us to complete your payment. We will update the
          status once confirmed.
        </p>
      </div>
    </section>
  );
}