"use client";

import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  consultationType: string;
  price: string;
}

export default function ConsultationBookingModal({
  open,
  onOpenChange,
  consultationType,
  price,
}: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="
        max-w-[700px]
        p-0
        overflow-hidden
        !rounded-[16px]
        border-0
        [&>button]:hidden
        bg-white
      "
      >
        {/* Header */}
        <div className="bg-[#CD9B46] px-8 py-8">
          <h2 className="text-3xl font-semibold text-white">
            Book Magical Thai Experience
          </h2>
        </div>

        <div className="p-8">
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm">
                Full Name
              </label>

              <input
                className="h-12 w-full rounded border px-4"
                placeholder="Eleanor Grace Thompson"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm">
                  Email
                </label>

                <input
                  className="h-12 w-full rounded border px-4"
                  placeholder="tanya.hill@example.com"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm">
                  Phone
                </label>

                <input
                  className="h-12 w-full rounded border px-4"
                  placeholder="(808) 555-0111"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm">
                Consultation Type
              </label>

              <input
                value={consultationType}
                readOnly
                className="h-12 w-full rounded border bg-gray-50 px-4"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm">
                  Preferred Date*
                </label>

                <input
                  type="date"
                  className="h-12 w-full rounded border px-4"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm">
                  Preferred Time*
                </label>

                <input
                  type="time"
                  className="h-12 w-full rounded border px-4"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm">
                Message
              </label>

              <textarea
                rows={4}
                placeholder="Lorem ipsum dolor sit amet..."
                className="w-full rounded border p-4"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm">
                Payment screenshot (optional)
              </label>

              <input
                type="file"
                className="w-full rounded border p-3"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => onOpenChange(false)}
                className="h-12 rounded-md bg-gray-100"
              >
                Cancel
              </button>

              <button className="h-12 rounded-[8px] bg-[#CD9B46] text-white">
                Book consultation - {price}
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}