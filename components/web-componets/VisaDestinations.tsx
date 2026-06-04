"use client";

import { ArrowRight } from "lucide-react";

interface Destination {
  id: number;
  name: string;
  distance: string;
  processingTime: string;
  dates: string;
  image: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: "Switzerland",
    distance: "UK 5km, Direct",
    processingTime: "Sun 4:1, Sun 11:11",
    dates: "15 Mar - 30 Apr",
    image: "/assets/visa.png",
  },
  {
    id: 2,
    name: "Switzerland",
    distance: "UK 5km, Direct",
    processingTime: "Sun 4:1, Sun 11:11",
    dates: "15 Mar - 30 Apr",
    image: "/assets/visa.png",
  },
  {
    id: 3,
    name: "Switzerland",
    distance: "UK 20km, Direct",
    processingTime: "Sun 4:1, Sun 11:11",
    dates: "15 Mar - 30 Apr",
    image: "/assets/visa.png",
  },
  {
    id: 4,
    name: "Switzerland",
    distance: "UK 5km, Direct",
    processingTime: "Sun 4:1, Sun 11:11",
    dates: "15 Mar - 30 Apr",
    image: "/assets/visa.png",
  },
  {
    id: 5,
    name: "Switzerland",
    distance: "UK 15km, Direct",
    processingTime: "Sun 4:1, Sun 11:11",
    dates: "15 Mar - 30 Apr",
    image: "/assets/visa.png",
  },
  {
    id: 6,
    name: "Italy",
    distance: "UK 20km, Connecting",
    processingTime: "Mon 1:2, Mon 1:12",
    dates: "15 Mar - 30 Apr",
    image: "/assets/visa.png",
  },
  {
    id: 7,
    name: "France",
    distance: "UK 25km, Direct",
    processingTime: "Sun 4:1, Sun 11:11",
    dates: "15 Mar - 30 Apr",
    image: "/assets/visa.png",
  },
  {
    id: 8,
    name: "Germany",
    distance: "UK 15km, Direct",
    processingTime: "Sun 4:1, Sun 11:11",
    dates: "15 Mar - 30 Apr",
    image: "/assets/visa.png",
  },
];

export default function VisaDestinations() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#FFFFFF]">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#11204C] mb-2">
            Popular Visa Destinations
          </h2>
          <p className="text-[#616161]">
            Explore visa options for your dream destination
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              className="group relative h-[228px] overflow-hidden rounded-2xl cursor-pointer transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-xl"
              style={{
                backgroundImage: `url(${dest.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <h3 className="mb-1 text-2xl font-extrabold text-[#FFFFFF]">
                  {dest.name}
                </h3>
                <p className="mb-1 text-base font-bold  text-[#FFFFFF]">{dest.distance}</p>
                <p className="text-base text-[#FFFFFF] font-bold">{dest.processingTime}</p>
                {/* <p className="mt-2 text-xs text-gray-300">{dest.dates}</p> */}
              </div>
            </div>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="flex justify-center">
          <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#CD9B46] text-[#CD9B46] rounded-[8px] hover:scale-105  duration-300 font-medium">
            Explore More
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
