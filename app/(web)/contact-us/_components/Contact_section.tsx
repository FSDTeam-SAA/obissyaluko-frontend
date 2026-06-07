"use client";

import Image from "next/image";

export default function ContactSection() {
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

              <form className="mt-8 space-y-5">
                <div>
                  <label className="mb-2 block text-base font-medium text-[#343A40]">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Name Here"
                    className="w-full rounded border border-gray-300 px-4 py-3 outline-none focus:border-[#4F7FD3]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-base font-medium text-[#343A40]">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="hello@example.com"
                    className="w-full rounded border border-gray-300 px-4 py-3 outline-none focus:border-[#4F7FD3]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-base font-medium text-[#343A40]">
                    Phone Number *
                  </label>
                  <input
                    type="text"
                    placeholder="+1234567890"
                    className="w-full rounded border border-gray-300 px-4 py-3 outline-none focus:border-[#4F7FD3]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-base font-medium text-[#343A40]">
                    Subject *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Subject"
                    className="w-full rounded border border-gray-300 px-4 py-3 outline-none focus:border-[#4F7FD3]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-base font-medium text-[#343A40]">
                    Message *
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Write your message here..."
                    className="w-full resize-none rounded border border-gray-300 px-4 py-3 outline-none focus:border-[#4F7FD3]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-[8px] bg-[#CD9B46] py-4 text-base font-semibold text-white transition hover:opacity-90"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right Side */}
            <div className="relative min-h-[350px] lg:min-h-full ">
              <div className="relative h-full w-full">
                <Image
                  src="/assets/contactus.png"
                  alt="Travel"
                  fill
                  priority
                  className="object-contain object-center "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}