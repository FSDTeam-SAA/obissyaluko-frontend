"use client";

import { useState } from "react";

interface Props {
  defaultConsultationType: string;
  defaultDuration: string;
  defaultFee: number;
  defaultPrice: string;
  //eslint-disable-next-line
  onSubmit: (data: any) => void;
  onCancel: () => void;
  isPending: boolean;
}

export default function ConsultationBookingForm({
  defaultConsultationType,
  defaultPrice,
  onSubmit,
  onCancel,
  isPending,
}: Props) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    consultationType: defaultConsultationType,
    preferredDate: "",
    preferredTime: "",
    message: "",
  });
console.log(defaultConsultationType)
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
   
      {/* Full Name */}
      <div>
        <label className="mb-2 block text-sm font-medium">Full Name *</label>
        <input
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="h-12 w-full rounded border px-4 focus:border-[#CD9B46] focus:outline-none focus:ring-1 focus:ring-[#CD9B46]"
          placeholder="Enter your full name"
        />
      </div>

      {/* Email & Phone */}
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="h-12 w-full rounded border px-4 focus:border-[#CD9B46] focus:outline-none focus:ring-1 focus:ring-[#CD9B46]"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Phone *</label>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="h-12 w-full rounded border px-4 focus:border-[#CD9B46] focus:outline-none focus:ring-1 focus:ring-[#CD9B46]"
            placeholder="+880XXXXXXXXX"
          />
        </div>
      </div>

      {/* Consultation Type Dropdown */}
      <div>
        <label className="mb-2 block text-sm font-medium">Consultation Type *</label>
        <select
          name="consultationType"
          value={formData.consultationType}
          onChange={handleChange}
          required
          className="h-12 w-full rounded border px-4 focus:border-[#CD9B46] focus:outline-none focus:ring-1 focus:ring-[#CD9B46]"
        >
          <option value="Visa Consultation">Visa Consultation</option>
          <option value="Study Abroad">Study Abroad</option>
          <option value="Tour Package">Tour Package</option>
          <option value="General">General</option>
        </select>
      </div>

      {/* Date & Time */}
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">Preferred Date *</label>
          <input
            type="date"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            required
            className="h-12 w-full rounded border px-4 focus:border-[#CD9B46] focus:outline-none focus:ring-1 focus:ring-[#CD9B46]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Preferred Time *</label>
          <input
            type="time"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            required
            className="h-12 w-full rounded border px-4 focus:border-[#CD9B46] focus:outline-none focus:ring-1 focus:ring-[#CD9B46]"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="mb-2 block text-sm font-medium">Message (Optional)</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder="Tell us about your requirements..."
          className="w-full rounded border p-4 focus:border-[#CD9B46] focus:outline-none focus:ring-1 focus:ring-[#CD9B46]"
        />
      </div>

      {/* Actions */}
      <div className="grid grid-cols-2 gap-4 pt-4">
        <button
          type="button"
          onClick={onCancel}
          disabled={isPending}
          className="h-12 rounded-md bg-gray-100 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors disabled:opacity-50"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={isPending}
          className="h-12 rounded-[8px] bg-[#CD9B46] text-sm font-semibold text-white hover:bg-[#b8832f] transition-colors disabled:opacity-60"
        >
          {isPending ? "Processing..." : `Proceed to Payment - ${defaultPrice}`}
        </button>
      </div>
    </form>
  );
}