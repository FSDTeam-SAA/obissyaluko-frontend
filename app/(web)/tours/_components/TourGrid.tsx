"use client";

import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import TourCard from "../TourCard";
import TourGridSkeleton from "./TourGridSkeleton";

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

type ToursResponse = {
  statusCode: number;
  success: boolean;
  message: string;
  data: Tour[];
};

const FALLBACK_TOUR_IMAGE = "/assets/boat.png";

function getToursUrl() {
  const baseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/+$/, "") || "/api/v1";
  const params = new URLSearchParams({ limit: "100" });

  return `${baseUrl}/tour?${params.toString()}`;
}

async function fetchTours() {
  const response = await fetch(getToursUrl());
  const result = (await response.json().catch(() => null)) as ToursResponse | null;

  if (!response.ok || !result?.success) {
    throw new Error(result?.message || "Failed to fetch tours.");
  }

  return result.data;
}

function htmlToText(value: string) {
  if (typeof window === "undefined") {
    return value.replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").trim();
  }

  const doc = new DOMParser().parseFromString(value, "text/html");

  return (doc.body.textContent || value).replace(/\s+/g, " ").trim();
}

function formatDuration(duration: string) {
  const trimmedDuration = duration.trim();

  if (/^\d+$/.test(trimmedDuration)) {
    return `${trimmedDuration} Days`;
  }

  return trimmedDuration;
}

function formatTag(tag: string) {
  const tagText = htmlToText(tag);

  if (tagText.length <= 36) {
    return tagText;
  }

  return `${tagText.slice(0, 33)}...`;
}

function getTourTags(tour: Tour) {
  const tags = tour.highlights.length ? tour.highlights : tour.itinerary;

  return tags.map(formatTag).filter(Boolean).slice(0, 3);
}

function tourMatchesSearch(tour: Tour, searchTerm: string) {
  if (!searchTerm) {
    return true;
  }

  const searchableText = [
    tour.title,
    tour.destination,
    tour.description,
    tour.hotelInfo,
    tour.duration,
    String(tour.price),
    String(tour.maxPersons),
    ...tour.highlights,
    ...tour.itinerary,
  ]
    .map((item) => htmlToText(item))
    .join(" ")
    .toLowerCase();

  return searchableText.includes(searchTerm.toLowerCase());
}

export default function TourGrid() {
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: tours = [],
    error,
    isPending,
  } = useQuery<Tour[], Error>({
    queryKey: ["tours"],
    queryFn: fetchTours,
    staleTime: 60 * 1000,
  });

  const filteredTours = useMemo(
    () => tours.filter((tour) => tourMatchesSearch(tour, searchTerm.trim())),
    [searchTerm, tours]
  );

  if (isPending) {
    return <TourGridSkeleton />;
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Search */}
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search Country..."
          className="mb-10 h-12 w-full rounded-md border border-gray-200 bg-white px-4 outline-none"
        />

        {error ? (
          <div className="rounded-lg border border-red-100 bg-red-50 px-4 py-5 text-sm text-red-600">
            {error.message}
          </div>
        ) : null}

        {/* Cards */}
        {!error && filteredTours.length ? (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredTours.map((tour) => (
              <TourCard
                key={tour._id}
                id={tour._id}
                image={tour.images[0] || FALLBACK_TOUR_IMAGE}
                title={tour.title}
                country={tour.destination}
                duration={formatDuration(tour.duration)}
                maxPeople={tour.maxPersons}
                price={`$${tour.price}`}
                tags={getTourTags(tour)}
              />
            ))}
          </div>
        ) : null}

        {!error && !filteredTours.length ? (
          <div className="rounded-lg border bg-white px-4 py-10 text-center text-sm text-gray-500">
            No tours found.
          </div>
        ) : null}
      </div>
    </section>
  );
}
