"use client";

import { useState } from "react";
import { Plane, Hotel, BadgeCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function TravelFilter() {
  const [active, setActive] = useState("visa");

  return (
    <div
      className="w-full overflow-hidden rounded-[14px] px-3 py-4 sm:px-5 sm:py-6 lg:px-6 lg:py-14"
      style={{
        background: "linear-gradient(90deg, #FFFFFF 0%, #FAF6EE 100%)",
        boxShadow: `
          8px 2px 18px 0px #6666661A,
          33px 7px 33px 0px #66666617,
          73px 16px 45px 0px #6666660D,
          130px 29px 53px 0px #66666603
        `,
      }}
    >
      {/* Tabs */}
      <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:items-start sm:justify-start sm:gap-4">
        {[
          {
            key: "visa",
            label: "Visa",
            icon: BadgeCheck,
          },
          {
            key: "flight",
            label: "Flights",
            icon: Plane,
          },
          {
            key: "hotel",
            label: "Hotels",
            icon: Hotel,
          },
        ].map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.key}
              onClick={() => setActive(item.key)}
              className={`flex h-[56px] w-full flex-col items-center justify-center rounded-[8px] transition-all duration-200 sm:h-[60px] sm:w-[60px] ${
                active === item.key
                  ? "bg-[#CD9B46] text-white"
                  : "text-[#666666]"
              }`}
            >
              <Icon size={16} />
              <span className="mt-1 text-sm font-medium">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* VISA */}
      {active === "visa" && (
        <div className="mt-5 grid grid-cols-1 gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4 lg:grid-cols-[1fr_1fr_130px]">
          <div className="min-w-0">
            <label className="mb-2 block text-sm font-medium text-[#8A8A8A] sm:text-base">
              Choose your country
            </label>

            <Select defaultValue="canada">
              <SelectTrigger className="h-[46px] rounded-lg border-[#D9D9D9] bg-white sm:h-[48px]">
                <SelectValue />
              </SelectTrigger>

              <SelectContent className="bg-white">
                <SelectItem value="canada">Canada</SelectItem>
                <SelectItem value="australia">Australia</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="usa">United States</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="min-w-0">
            <label className="mb-2 block text-sm font-medium text-[#8A8A8A] sm:text-base">
              Visit Purpose
            </label>

            <Select defaultValue="tourism">
              <SelectTrigger className="h-[46px] rounded-lg border-[#D9D9D9] bg-white sm:h-[48px]">
                <SelectValue />
              </SelectTrigger>

              <SelectContent className="bg-white">
                <SelectItem value="tourism">Tourism</SelectItem>
                <SelectItem value="business">Business</SelectItem>
                <SelectItem value="student">Student</SelectItem>
                <SelectItem value="work">Work Permit</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-end sm:col-span-2 lg:col-span-1">
            <Button className="h-[46px] w-full rounded-lg bg-[#CD9B46] text-white hover:bg-[#c28f3d] sm:h-[48px]">
              Search
            </Button>
          </div>
        </div>
      )}

      {/* FLIGHT */}
      {active === "flight" && (
        <div className="mt-5 grid grid-cols-1 gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          <div className="min-w-0">
            <label className="mb-2 block text-xs font-medium text-[#8A8A8A]">
              From
            </label>

            <Select>
              <SelectTrigger className="h-[46px] sm:h-[48px]">
                <SelectValue placeholder="Dhaka" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="dhaka">Dhaka</SelectItem>
                <SelectItem value="london">London</SelectItem>
                <SelectItem value="toronto">Toronto</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="min-w-0">
            <label className="mb-2 block text-xs font-medium text-[#8A8A8A]">
              To
            </label>

            <Select>
              <SelectTrigger className="h-[46px] sm:h-[48px]">
                <SelectValue placeholder="London" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="london">London</SelectItem>
                <SelectItem value="dubai">Dubai</SelectItem>
                <SelectItem value="toronto">Toronto</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="min-w-0">
            <label className="mb-2 block text-xs font-medium text-[#8A8A8A]">
              Travel Date
            </label>

            <input
              type="date"
              className="h-[46px] w-full rounded-lg border border-[#D9D9D9] px-4 sm:h-[48px]"
            />
          </div>

          <div className="flex items-end sm:col-span-2 lg:col-span-1">
            <Button className="h-[46px] w-full rounded-lg bg-[#CD9B46] hover:bg-[#c28f3d] sm:h-[48px]">
              Search Flights
            </Button>
          </div>
        </div>
      )}

      {/* HOTEL */}
      {active === "hotel" && (
        <div className="mt-5 grid grid-cols-1 gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          <div className="min-w-0">
            <label className="mb-2 block text-xs font-medium text-[#8A8A8A]">
              Destination
            </label>

            <Select>
              <SelectTrigger className="h-[46px] sm:h-[48px]">
                <SelectValue placeholder="Dubai" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="dubai">Dubai</SelectItem>
                <SelectItem value="london">London</SelectItem>
                <SelectItem value="toronto">Toronto</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="min-w-0">
            <label className="mb-2 block text-xs font-medium text-[#8A8A8A]">
              Check In
            </label>

            <input
              type="date"
              className="h-[46px] w-full rounded-lg border border-[#D9D9D9] px-4 sm:h-[48px]"
            />
          </div>

          <div className="min-w-0">
            <label className="mb-2 block text-xs font-medium text-[#8A8A8A]">
              Check Out
            </label>

            <input
              type="date"
              className="h-[46px] w-full rounded-lg border border-[#D9D9D9] px-4 sm:h-[48px]"
            />
          </div>

          <div className="flex items-end sm:col-span-2 lg:col-span-1">
            <Button className="h-[46px] w-full rounded-lg bg-[#CD9B46] hover:bg-[#c28f3d] sm:h-[48px]">
              Search Hotels
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
