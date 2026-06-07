"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, Clock3, Users, CheckCircle } from "lucide-react";
import { useState } from "react";
import BookingModal from "../_components/BookingModal";

export default function TourDetailsPage() {
  const [openBooking, setOpenBooking] = useState(false);

  const itinerary = [
    "Day 1 : Arrival and local beach tour",
    "Day 2 : Arrival and local beach tour",
    "Day 3 : Arrival and local beach tour",
    "Day 4 : Arrival and local beach tour",
    "Day 5 : Arrival and local beach tour",
  ];

  const highlights = [
    "Pattaya beach visit",
    "Local beach visit",
    "Shopping mall visit",
    "Food market visit",
    "Local shops visit",
  ];

  return (
    <>
      <section className="bg-[#F4F1EB] min-h-screen py-12">
        <div className="container mx-auto px-4 lg:px-0">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-sm text-gray-600"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          {/* Hero Image */}
          <div className="relative h-[220px] overflow-hidden rounded-xl sm:h-[350px] lg:h-[500px]">
            <Image
              src="/assets/boat.png"
              alt="Tour"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_280px]">
            <div>
              <h1 className="text-3xl font-semibold text-[#222]">
                Magical Thai Experience
              </h1>

              <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-[#767676]">
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  Thailand
                </div>

                <div className="flex items-center gap-1">
                  <Clock3 size={14} />
                  5 Days
                </div>

                <div className="flex items-center gap-1">
                  <Users size={14} />
                  Max 20
                </div>
              </div>

              {/* Description */}
              <div className="mt-8 rounded-xl bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-2xl font-semibold">
                  Description
                </h2>

                <p className="leading-7 text-[#666]">
                  Experience the magic of Thailand with visits to
                  Pattaya Beach, shopping malls and exploring the rich
                  Thai food culture.
                </p>
              </div>

              {/* Itinerary */}
              <div className="mt-6 rounded-xl bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-2xl font-semibold">
                  Itinerary
                </h2>

                <div className="space-y-3">
                  {itinerary.map((item, index) => (
                    <p key={index} className="text-[#666]">
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="mt-6 rounded-xl bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-2xl font-semibold">
                  Highlights
                </h2>

                <div className="space-y-3">
                  {highlights.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle
                        size={18}
                        className="text-green-500"
                      />
                      <span className="text-[#666]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking Card */}
            <div>
              <div className="sticky top-24 rounded-xl bg-white p-5 shadow-md">
                <p className="text-sm text-gray-500">
                  Starting from
                </p>

                <div className="mt-2 flex items-end gap-1">
                  <span className="text-4xl font-bold text-[#336FCA]">
                    $1299
                  </span>

                  <span className="mb-1 text-sm text-gray-500">
                    /Person
                  </span>
                </div>

                <button
                  onClick={() => setOpenBooking(true)}
                  className="mt-5 h-12 w-full rounded-lg bg-[#CD9B46] font-medium text-white"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingModal
        open={openBooking}
        onOpenChange={setOpenBooking}
        tourName="Magical Thai Experience"
        price="$1299"
      />
    </>
  );
}