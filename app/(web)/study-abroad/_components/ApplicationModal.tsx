"use client";

import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

interface ApplicationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  university: string;
  program: string;
}

export default function ApplicationModal({
  open,
  onOpenChange,
  university,
  program,
}: ApplicationModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[700px] !bg-white overflow-hidden !rounded-[12px] p-0">
        {/* Header */}
        <div className="bg-[#D4A24B] px-8 py-8 text-white">
          <h2 className="text-3xl font-semibold">
            Apply for {program}
          </h2>

          <p className="mt-1 text-sm text-white/90">
            {university}
          </p>
        </div>

        {/* Form */}
        <div className="p-8">
          <div className="grid gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Eleanor Grace Thompson"
                className="h-11 w-full rounded border px-3 outline-none"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="tonya.hill@example.com"
                  className="h-11 w-full rounded border px-3 outline-none"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium">
                  Phone
                </label>

                <input
                  type="text"
                  placeholder="(808) 555-0111"
                  className="h-11 w-full rounded border px-3 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">
                O Level Results
              </label>

              <input
                type="text"
                placeholder="e.g. GPA 5.0"
                className="h-11 w-full rounded border px-3 outline-none"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">
                A Level Results
              </label>

              <input
                type="text"
                placeholder="e.g. GPA 5.0"
                className="h-11 w-full rounded border px-3 outline-none"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">
                IELTS/TOEFL Score
              </label>

              <input
                type="text"
                placeholder="e.g. 6.0"
                className="h-11 w-full rounded border px-3 outline-none"
              />
            </div>

            {/* Buttons */}
            <div className="mt-3 grid grid-cols-2 gap-4">
              <button
                onClick={() => onOpenChange(false)}
                className="h-11 rounded-[8px] bg-gray-100 font-medium"
              >
                Cancel
              </button>

              <button className="h-11 rounded-[8px] bg-[#D4A24B] font-medium text-white">
                Submit Application
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}