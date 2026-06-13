"use client";

import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import CountryCard from "./CountryCard";
import CountrySectionSkeleton from "./CountrySectionSkeleton";

type Visa = {
  _id: string;
  country?: {
    _id: string;
    countryName: string;
  };
  visaTitle: string;
  category: string;
  description: string;
  eligibility: string[];
  processingSteps: string[];
  requiredDocuments: string[];
  processingTime: string;
  price: number;
};

type VisaResponse = {
  statusCode: number;
  success: boolean;
  message: string;
  data: Visa[];
};

type CountryCardData = {
  id: string;
  image: string;
  country: string;
  code: string;
  description: string;
  categories: string[];
  visas: {
    id: string;
    title: string;
  }[];
};

type CountryGroup = CountryCardData & {
  categoryKeys: Set<string>;
};

const VISA_IMAGE = "/assets/tour.png";

function useDebouncedValue(value: string, delay = 400) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => window.clearTimeout(timeoutId);
  }, [delay, value]);

  return debouncedValue;
}

function getVisaUrl(searchTerm: string) {
  const baseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/+$/, "") || "/api/v1";
  const params = new URLSearchParams({ limit: "100" });
  const trimmedSearch = searchTerm.trim();

  if (trimmedSearch) {
    params.set("searchTerm", trimmedSearch);
  }

  return `${baseUrl}/visa?${params.toString()}`;
}

async function fetchVisas(searchTerm: string) {
  const response = await fetch(getVisaUrl(searchTerm));
  const result = (await response.json().catch(() => null)) as VisaResponse | null;

  if (!response.ok || !result?.success) {
    throw new Error(result?.message || "Failed to fetch visa services.");
  }

  return result.data;
}

function formatCategory(category: string) {
  return category
    .split(/[\s-_]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function getCountryCode(countryName: string) {
  const initials = countryName
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.charAt(0))
    .join("");

  return (initials || countryName).slice(0, 2).toUpperCase();
}

function matchesSearch(visa: Visa, searchTerm: string) {
  if (!searchTerm) {
    return true;
  }

  const searchableText = [
    visa.country?.countryName,
    visa.visaTitle,
    visa.category,
    visa.description,
    visa.processingTime,
    String(visa.price),
    ...(visa.eligibility ?? []),
    ...(visa.processingSteps ?? []),
    ...(visa.requiredDocuments ?? []),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  return searchableText.includes(searchTerm.toLowerCase());
}

function groupVisasByCountry(visas: Visa[], searchTerm: string): CountryCardData[] {
  const countryGroups = new Map<string, CountryGroup>();

  visas
    .filter((visa) => matchesSearch(visa, searchTerm))
    .forEach((visa) => {
      const countryName = visa.country?.countryName || "Unknown Country";
      const countryKey = visa.country?._id || countryName;
      const categoryLabel = formatCategory(visa.category);
      const categoryKey = categoryLabel.toLowerCase();
      const existingCountry = countryGroups.get(countryKey);

      if (existingCountry) {
        if (categoryLabel && !existingCountry.categoryKeys.has(categoryKey)) {
          existingCountry.categories.push(categoryLabel);
          existingCountry.categoryKeys.add(categoryKey);
        }

        existingCountry.visas.push({
          id: visa._id,
          title: visa.visaTitle,
        });

        return;
      }

      countryGroups.set(countryKey, {
        id: countryKey,
        image: VISA_IMAGE,
        country: countryName,
        code: getCountryCode(countryName),
        description: visa.description,
        categories: categoryLabel ? [categoryLabel] : [],
        categoryKeys: categoryLabel ? new Set([categoryKey]) : new Set(),
        visas: [
          {
            id: visa._id,
            title: visa.visaTitle,
          },
        ],
      });
    });

  return Array.from(countryGroups.values()).map((country) => ({
    id: country.id,
    image: country.image,
    country: country.country,
    code: country.code,
    description: country.description,
    categories: country.categories,
    visas: country.visas,
  }));
}

export default function CountrySection() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebouncedValue(searchTerm);

  const {
    data: visas = [],
    error,
    isPlaceholderData,
    isPending,
  } = useQuery<Visa[], Error>({
    queryKey: ["visa-services", debouncedSearchTerm],
    queryFn: () => fetchVisas(debouncedSearchTerm),
    placeholderData: (previousData) => previousData,
    staleTime: 60 * 1000,
  });

  const countries = useMemo(
    () => groupVisasByCountry(visas, debouncedSearchTerm.trim()),
    [debouncedSearchTerm, visas]
  );

  if (isPending && !visas.length) {
    return <CountrySectionSkeleton />;
  }

  return (
    <section className="py-12">
      <div className="mx-auto container px-4">
        {/* Search */}
        <div className="mb-10">
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search Country..."
            className="h-12 w-full rounded-lg border bg-white px-4 text-sm outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>

        {error ? (
          <div className="rounded-lg border border-red-100 bg-red-50 px-4 py-5 text-sm text-red-600">
            {error.message}
          </div>
        ) : null}

        {/* Cards */}
        {!error && isPlaceholderData ? (
          <CountrySectionSkeleton showSearch={false} />
        ) : null}

        {!error && !isPlaceholderData && countries.length ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {countries.map((country) => (
              <CountryCard
                key={country.id}
                {...country}
              />
            ))}
          </div>
        ) : null}

        {!error && !isPlaceholderData && !countries.length ? (
          <div className="rounded-lg border bg-white px-4 py-10 text-center text-sm text-gray-500">
            No visa services found.
          </div>
        ) : null}
      </div>
    </section>
  );
}
