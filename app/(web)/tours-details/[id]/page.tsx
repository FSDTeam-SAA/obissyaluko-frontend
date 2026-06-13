"use client";

import Link from "next/link";
import { ArrowLeft, MapPin, Clock3, Users, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import BookingModal from "../_components/BookingModal";
import TourDetailsSkeleton from "../_components/TourDetailsSkeleton";
import TourImageGallery from "../_components/TourImageGallery";

type Tour = {
  _id: string;
  title: string;
  destination: string;
  price: number;
  duration: string;
  images: string[];
  description: string;
  itinerary: string[];
  hotelInfo: string;
  highlights: string[];
  maxPersons: number;
  isActive: boolean;
};

type TourResponse = {
  statusCode: number;
  success: boolean;
  message: string;
  data: Tour;
};

const FALLBACK_TOUR_IMAGE = "/assets/boat.png";

function getTourDetailsUrl(tourId: string) {
  const baseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/+$/, "") || "/api/v1";

  return `${baseUrl}/tour/${encodeURIComponent(tourId)}`;
}

async function fetchTourDetails(tourId: string) {
  const response = await fetch(getTourDetailsUrl(tourId));
  const result = (await response.json().catch(() => null)) as TourResponse | null;

  if (!response.ok || !result?.success) {
    throw new Error(result?.message || "Failed to fetch tour details.");
  }

  return result.data;
}

function htmlToText(value: string) {
  return value
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function formatDuration(duration: string) {
  const trimmedDuration = duration.trim();

  if (/^\d+$/.test(trimmedDuration)) {
    return `${trimmedDuration} Days`;
  }

  return trimmedDuration;
}

export default function TourDetailsPage() {
  const [openBooking, setOpenBooking] = useState(false);
  const params = useParams<{ id: string }>();
  const tourId = params.id;

  const {
    data: tour,
    error,
    isPending,
  } = useQuery<Tour, Error>({
    queryKey: ["tour-details", tourId],
    queryFn: () => fetchTourDetails(tourId),
    enabled: Boolean(tourId),
  });

  if (isPending) {
    return <TourDetailsSkeleton />;
  }

  if (error || !tour) {
    return (
      <section className="min-h-screen bg-[#F4F1EB] py-12">
        <div className="container mx-auto px-4 lg:px-0">
          <Link
            href="/tours"
            className="mb-6 inline-flex items-center gap-2 text-sm text-gray-600"
          >
            <ArrowLeft size={16} />
            Back to Tours
          </Link>

          <div className="rounded-lg border border-red-100 bg-red-50 px-4 py-5 text-sm text-red-600">
            {error?.message || "Tour details not found."}
          </div>
        </div>
      </section>
    );
  }

  const galleryImages = tour.images.length ? tour.images : [FALLBACK_TOUR_IMAGE];
  const itinerary = tour.itinerary.map(htmlToText).filter(Boolean);
  const highlights = tour.highlights.map(htmlToText).filter(Boolean);

  return (
    <>
      <section className="min-h-screen bg-[#F4F1EB] py-12">
        <div className="container mx-auto px-4 lg:px-0">
          <Link
            href="/tours"
            className="mb-6 inline-flex items-center gap-2 text-sm text-gray-600"
          >
            <ArrowLeft size={16} />
            Back to Tours
          </Link>

          <TourImageGallery images={galleryImages} title={tour.title} />

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_280px]">
            <div>
              <h1 className="text-3xl font-semibold text-[#222]">
                {tour.title}
              </h1>

              <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-[#767676]">
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  {tour.destination}
                </div>

                <div className="flex items-center gap-1">
                  <Clock3 size={14} />
                  {formatDuration(tour.duration)}
                </div>

                <div className="flex items-center gap-1">
                  <Users size={14} />
                  Max {tour.maxPersons}
                </div>
              </div>

              {/* Description */}
              <div className="mt-8 rounded-xl bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-2xl font-semibold">
                  Description
                </h2>

                <p className="leading-7 text-[#666]">
                  {htmlToText(tour.description)}
                </p>
              </div>

              {tour.hotelInfo ? (
                <div className="mt-6 rounded-xl bg-white p-6 shadow-sm">
                  <h2 className="mb-4 text-2xl font-semibold">
                    Hotel Information
                  </h2>

                  <p className="leading-7 text-[#666]">
                    {htmlToText(tour.hotelInfo)}
                  </p>
                </div>
              ) : null}

              {/* Itinerary */}
              {itinerary.length ? (
                <div className="mt-6 rounded-xl bg-white p-6 shadow-sm">
                  <h2 className="mb-4 text-2xl font-semibold">
                    Itinerary
                  </h2>

                  <div className="space-y-3">
                    {itinerary.map((item, index) => (
                      <p key={`${item}-${index}`} className="text-[#666]">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              ) : null}

              {/* Highlights */}
              {highlights.length ? (
                <div className="mt-6 rounded-xl bg-white p-6 shadow-sm">
                  <h2 className="mb-4 text-2xl font-semibold">
                    Highlights
                  </h2>

                  <div className="space-y-3">
                    {highlights.map((item, index) => (
                      <div
                        key={`${item}-${index}`}
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
              ) : null}
            </div>

            {/* Booking Card */}
            <div>
              <div className="sticky top-24 rounded-xl bg-white p-5 shadow-md">
                <p className="text-sm text-gray-500">
                  Starting from
                </p>

                <div className="mt-2 flex items-end gap-1">
                  <span className="text-4xl font-bold text-[#336FCA]">
                    ${tour.price}
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
        tourName={tour.title}
        price={`$${tour.price}`}
      />
    </>
  );
}
