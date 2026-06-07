import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface VisaItem {
  title: string;
}

interface CountryCardProps {
  image: string;
  country: string;
  code: string;
  description: string;
  categories: string[];
  visas: VisaItem[];
}

export default function CountryCard({
  image,
  country,
  code,
  description,
  categories,
  visas,
}: CountryCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl">
      {/* Image */}
      <div className="relative h-[210px] w-full">
        <Image
          src={image}
          alt={country}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Country */}
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-gray-800">
            {country}
          </h3>

          <span className="text-xs text-gray-400">
            {code}
          </span>
        </div>

        {/* Description */}
        <p className="mb-6 line-clamp-3 text-base text-[#929292]">
          {description}
        </p>

        {/* Tags */}
        <div className="mb-6 flex flex-wrap gap-2">
          {categories.map((item) => (
            <span
              key={item}
              className="rounded-full bg-[#F0F2F4] px-4 py-1 text-base font-medium text-gray-700"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Visa List */}
        <div className="space-y-2">
          {visas.map((visa, index) => (
            <button
              key={index}
              className="flex w-full items-center justify-between rounded-lg border bg-[#F0F2F4] px-3 py-2 text-sm text-gray-600 transition hover:bg-gray-100"
            >
              {visa.title}

              <ArrowRight size={14} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}