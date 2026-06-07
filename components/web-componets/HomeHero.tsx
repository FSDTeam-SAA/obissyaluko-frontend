"use client";
import Image from "next/image";
import TravelFilter from "./TravelFilter";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden ">
      <div className="container mx-auto px-4 lg:px-0 py-16 lg:py-[80px]">
        <div className="grid lg:grid-cols-2 gap-[40px] items-center">

          {/* LEFT */}
          <div className=" relative">
            <div className="inline-flex items-center rounded-full border bg-white px-4 py-2 text-base text-gray-600">
              ✈ Scheduler&apos;s all-in-one
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[56px] font-bold !leading-[120%] text-[#131313] ">
              MAKING INTERNATIONAL
              <br />
              <span className="text-[#CD9B46]">
                TRAVEL SIMPLE,
              </span>{" "}
              SAFE &
              <br />
              POSSIBLE
            </h1>

            <p className="mt-8 w-[565px] text-[#424242] text-base">
              Scheduler&apos;s all-in-one task management platform increase
              productivity and maintain team unity task management.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className=" bg-[#C9933F] px-6 py-3 rounded-[8px] text-base font-medium text-white hover:bg-[#CD9B46]/9 hover:scale-105 transition duration-300" >
                Start Application
              </button>

              <button className="rounded-[8px] border border-[#C9933F] px-6 py-3 text-[#CD9B46] hover:scale-105  transition duration-300" >
                Book Consultation
              </button>
            </div>

            <div className="mt-16">
              <TravelFilter />
            </div>
            <div className="w-[160px] h-[160px] absolute top-[80px] right-[-15%] ">
                <Image
                src="/assets/hero2.png"
                alt=""
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative min-h-[580px] hidden lg:block">

            <div className="absolute ">
              <Image
                src="/assets/hero3.png"
                alt=""
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>

            

            {/* Rating Card */}
            <div className="absolute bottom-[-15%] right-[-10%] rounded-[8px] bg-white p-4 ">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Image
                    key={i}
                    src={`/assets/av1.png`}
                    alt=""
                    width={48}
                    height={48}
                    className="rounded-full border-2 border-white"
                  />
                ))}
              </div>

              <div className="mt-3 !text-base text-yellow-500">
                ★★★★★
              </div>

              <p className="text-sm text-gray-500">
                Loved by 200+ Customers
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}