"use client"

import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import Image from "next/image"

export default function TravelAgency() {
  return (
    <section className="mx-auto container px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Left Side - Content */}
        <div className="flex flex-col space-y-6 text-center lg:text-left">
          <h2 className="text-balance text-4xl font-bold text-[#11204C] sm:text-[60px] leading-[1.2]">The Best Travel <br /> Agency</h2>
          <p className="text-pretty text-base leading-relaxed text-[#616263] sm:text-[22px]">
            We are proud to be recognized as one of the best travel agencies, offering reliable service, personalized
            travel planning, and exceptional customer support. From flight bookings to complete holiday packages, we
            ensure your journey is smooth, affordable, and unforgettable.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button className="bg-[#F5B547] px-8 h-[50px] text-base font-bold rounded-[8px] text-[#282828] hover:bg-[#e6a535]">
              Read more
            </Button>
          </div>
        </div>

        {/* Right Side - Video & Images */}
        <div className="flex flex-col gap-4">
          {/* Main Video Thumbnail */}
          <div className="group relative aspect-video w-full overflow-hidden rounded-2xl shadow-xl">
            <Image src="/assets/about-G1.jpg" alt="Travel adventure" fill className="object-cover" />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-all group-hover:bg-black/30">
              <button className="flex h-16 w-16 items-center justify-center rounded-full bg-[#4A9FD8] shadow-lg transition-transform hover:scale-110 sm:h-20 sm:w-20">
                <Play className="h-8 w-8 fill-white text-white sm:h-10 sm:w-10" />
              </button>
            </div>
          </div>

          {/* Thumbnail Gallery */}
          <div className="grid grid-cols-4 gap-3">
            <div className="relative aspect-square overflow-hidden rounded-xl">
              <Image src="/assets/about-G2.jpg" alt="Kayaking" fill className="object-cover" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-xl">
              <Image src="/assets/about-G3.jpg" alt="Rock climbing" fill className="object-cover" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-xl">
              <Image src="/assets/about-G4.jpg" alt="Hiking" fill className="object-cover" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-xl">
              <Image src="/assets/about-G5.jpg" alt="Mountain biking" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
