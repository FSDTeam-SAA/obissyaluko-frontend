"use client";

import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Farhan Malik",
    role: "Business Visa – Singapore",
    avatar: "/testimonial-user.png",
    review:
      "As a business owner, my travel schedule is very tight and I needed my visa processed quickly and correctly. The team handled my business visa application with great professionalism. They reviewed my company documents, invitation letter, and financial papers very carefully. I was also guided on interview preparation and entry requirements. Because of their expert support, my visa was approved on time and my business trip went exactly as planned. Their service is reliable, fast, and truly business-friendly.",
  },
  {
    id: 2,
    name: "Imran Hossain",
    role: "Visit Visa – UAE",
    avatar: "/testimonial-user.png",
    review:
      "I had applied for a visit visa before with another agency and got rejected, so I was very nervous to apply again. This team carefully checked all my documents, corrected every mistake, and explained why my previous application failed. They gave me full guidance on financial proof, travel history, and sponsor documents. Because of their detailed support and professional handling, my visit visa was approved smoothly this time. I truly trust their service and highly recommend them to anyone applying for a visa.",
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-16 md:py-20 bg-[#F7F5F1]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-[#131313] md:text-4xl">
            What Our Customers Say
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm text-[#131313] md:text-sm">
            Don&lsquo;t just take our word for it. Here&lsquo;s what real customers have to
            say about their AutoIntel inspection experience.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-14 grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Side - 4 Columns */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/assets/review.png"
                alt="Customer Review"
                width={1000}
                height={1000}
                className="h-[350px] w-full object-cover md:h-[500px] lg:h-[620px]"
              />
            </div>
          </div>

          {/* Right Side - 8 Columns */}
          <div className="space-y-10 lg:col-span-7">
            {testimonials.map((item) => (
              <div key={item.id}>
                {/* User Card */}
                <div className="inline-flex items-center gap-4 rounded-xl bg-white px-4 py-3 shadow-md">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded-md object-cover"
                  />

                  <div>
                    <h3 className="text-lg font-semibold text-[#24345C] md:text-xl">
                      {item.name}
                    </h3>

                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>

                {/* Review Text */}
                <p className="mt-5 text-sm leading-7 text-[#475569] md:text-[15px]">
                  {item.review}
                </p>

                {/* Rating */}
                <div className="mt-5 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className="h-5 w-5 fill-[#F5B544] text-[#F5B544]"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}