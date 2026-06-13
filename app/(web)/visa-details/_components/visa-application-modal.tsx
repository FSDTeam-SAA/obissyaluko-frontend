"use client";

import { Upload } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface VisaApplicationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  visaTitle?: string;
}

export default function VisaApplicationModal({
  open,
  onOpenChange,
  visaTitle = "Visa",
}: VisaApplicationModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[900px] bg-white p-0 overflow-hidden !rounded-[12px]">
        {/* Header */}
        <DialogHeader className="bg-[#CD9B46] px-8 py-8 text-left">
          <DialogTitle className="text-white text-3xl font-bold">
            Apply for {visaTitle}
          </DialogTitle>
          <p className="text-white/90 text-sm mt-1">Fill out the form</p>
        </DialogHeader>

        {/* Form */}
        <div
          className="p-8 overflow-y-auto"
          style={{ maxHeight: "75vh" }}
          onWheel={(e) => e.stopPropagation()}
        >
          <form className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Eleanor Grace Thompson"
                className="w-full h-12 rounded-[8px] border border-gray-300 px-4 outline-none focus:ring-2 focus:ring-[#CD9B46]"
              />
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="tanya.hill@example.com"
                  className="w-full h-12 rounded-[8px] border border-gray-300 px-4 outline-none focus:ring-2 focus:ring-[#CD9B46]"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Phone
                </label>
                <input
                  type="text"
                  placeholder="(808) 555-0111"
                  className="w-full h-12 rounded-[8px] border border-gray-300 px-4 outline-none focus:ring-2 focus:ring-[#CD9B46]"
                />
              </div>
            </div>

            {/* Passport Number */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Passport Number
              </label>
              <input
                type="text"
                placeholder="8798********"
                className="w-full h-12 rounded-[8px] border border-gray-300 px-4 outline-none focus:ring-2 focus:ring-[#CD9B46]"
              />
            </div>

            {/* Upload Fields */}
            {["Passport Copy", "Photo", "NID Copy", "Bank Statement"].map(
              (item) => (
                <div key={item}>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    {item}
                  </label>
                  <label className="flex h-12 cursor-pointer items-center gap-2 rounded-[8px] border border-gray-300 px-4 text-gray-500 hover:bg-gray-50">
                    <Upload size={16} />
                    <span>Choose file</span>
                    <input type="file" className="hidden" />
                  </label>
                </div>
              )
            )}

            {/* Actions */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="h-12 rounded-[8px] bg-gray-200 font-medium text-gray-700 hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="h-12 rounded-[8px] bg-[#CD9B46] text-white font-semibold hover:opacity-90"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
