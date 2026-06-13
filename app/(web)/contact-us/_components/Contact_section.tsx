"use client";

import Image from "next/image";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

interface ContactFormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
}

const initialForm: ContactFormData = {
  fullName: "",
  email: "",
  phoneNumber: "",
  subject: "",
  message: "",
};

async function submitContactForm(data: ContactFormData) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error?.message || "Something went wrong. Please try again.");
  }

  return res.json();
}

export default function ContactSection() {
  const [form, setForm] = useState<ContactFormData>(initialForm);

  const { mutate, isPending } = useMutation({
    mutationFn: submitContactForm,
    onSuccess: () => {
      toast.success("Message sent!", {
        description: "We'll get back to you as soon as possible.",
      });
      setForm(initialForm);
    },
    onError: (error: Error) => {
      toast.error("Failed to send message", {
        description: error.message,
      });
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(form);
  };

  const inputClass =
    "w-full rounded border border-gray-300 px-4 py-3 outline-none focus:border-[#4F7FD3] disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <section className="py-10 lg:py-16 bg-[#f4f1eb]">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden rounded-[24px] bg-white shadow-sm">
          <div className="grid lg:grid-cols-2">
            {/* Left Side */}
            <div className="p-6 md:p-10 lg:p-12">
              <h2 className="text-[34px] lg:text-[40px] font-bold text-[#5A8BD4] leading-tight">
                Get in Touch
              </h2>

              <p className="mt-2 text-[#6C757D] text-base">
                Our friendly team would love to hear from you.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label className="mb-2 block text-base font-medium text-[#343A40]">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="Name Here"
                    required
                    disabled={isPending}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-base font-medium text-[#343A40]">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="hello@example.com"
                    required
                    disabled={isPending}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-base font-medium text-[#343A40]">
                    Phone Number *
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={form.phoneNumber}
                    onChange={handleChange}
                    placeholder="+1234567890"
                    required
                    disabled={isPending}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-base font-medium text-[#343A40]">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Enter Subject"
                    required
                    disabled={isPending}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-base font-medium text-[#343A40]">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Write your message here..."
                    required
                    disabled={isPending}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full rounded-[8px] bg-[#CD9B46] py-4 text-base font-semibold text-white transition hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isPending ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Right Side */}
            <div className="relative min-h-[350px] lg:min-h-full">
              <div className="relative h-full w-full">
                <Image
                  src="/assets/contactus.png"
                  alt="Travel"
                  fill
                  priority
                  className="object-contain object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}