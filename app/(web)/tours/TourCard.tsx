"use client";

import Image from "next/image";
import { MapPin, Clock3, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

interface TourCardProps {
  id: string;
  image: string;
  title: string;
  country: string;
  duration: string;
  maxPeople: number;
  price: string;
  tags: string[];
}

export default function TourCard({
  id,
  image,
  title,
  country,
  duration,
  maxPeople,
  price,
  tags,
}: TourCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white p-2 shadow-[0_8px_20px_rgba(0,0,0,0.08)] transition-all hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-[247px] overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover"
        />

        {/* Price Badge */}
        <div className="absolute right-3 top-3 rounded-[8px] bg-[#336FCA] px-3 py-2 text-sm font-semibold text-white">
          {price}
        </div>
      </div>

      {/* Content */}
      <div className="p-2">
        <h3 className="mt-2 text-[24px] font-semibold text-[#282828]">
          {title}
        </h3>

        <div className="mt-2 flex flex-wrap items-center gap-3 text-base text-[#717171]">
          <div className="flex items-center gap-1">
            <MapPin size={14} />
            <span>{country}</span>
          </div>

          <div className="flex items-center gap-1">
            <Clock3 size={14} />
            <span>{duration}</span>
          </div>

          <div className="flex items-center gap-1">
            <Users size={14} />
            <span>Max {maxPeople}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-[8px] bg-[#F0F2F4] px-2 py-1 text-[12px] text-[#282828]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Button */}
        <Link href={`/tours-details/${id}`}>
          <button className="mt-6 flex h-[48px] w-full items-center justify-center gap-2 rounded-[8px] bg-[#CD9B46] text-sm font-medium text-white transition hover:bg-[#CD9B46]/90">
            View Details
            <ArrowRight size={16} />
          </button>
        </Link>
      </div>
    </div>
  );
}
