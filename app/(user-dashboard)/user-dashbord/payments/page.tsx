import { AlertCircle, CreditCard } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div>
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
    </div>
  )
}

export default page
