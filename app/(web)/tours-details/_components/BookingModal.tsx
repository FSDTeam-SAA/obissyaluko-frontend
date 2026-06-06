"use client";

import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  tourName: string;
  price: string;
}

export default function BookingModal({
  open,
  onOpenChange,
  tourName,
  price,
}: BookingModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="
          max-w-[700px]
          overflow-hidden
          !rounded-[16px]
          border-0
          p-0
          [&>button]:hidden
          bg-white
        "
      >
        <div className="bg-[#CD9B46] px-8 py-8">
          <h2 className="text-3xl font-semibold text-white">
            Book {tourName}
          </h2>
        </div>

        <div className="p-8">
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Eleanor Grace Thompson"
                className="h-12 w-full rounded border px-4"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="tanya.hill@example.com"
                  className="h-12 w-full rounded border px-4"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm">
                  Phone
                </label>

                <input
                  type="text"
                  placeholder="(808) 555-0111"
                  className="h-12 w-full rounded border px-4"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm">
                Travel Date
              </label>

              <input
                type="date"
                className="h-12 w-full rounded border px-4"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm">
                Number of Persons
              </label>

              <input
                type="number"
                defaultValue={1}
                min={1}
                className="h-12 w-full rounded border px-4"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm">
                Total
              </label>

              <input
                value={price}
                readOnly
                className="h-12 w-full rounded border bg-gray-50 px-4"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm">
                Special Requests
              </label>

              <textarea
                rows={2}
                className="w-full rounded border p-4"
                placeholder="Write your request..."
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => onOpenChange(false)}
                className="h-12 rounded-[8px] bg-gray-100"
              >
                Cancel
              </button>

              <button className="h-12 rounded-[8px] bg-[#CD9B46] text-white">
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}