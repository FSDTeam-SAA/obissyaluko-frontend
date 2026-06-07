"use client";
import Image from "next/image";
import TravelFilter from "./TravelFilter";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4 py-8 sm:px-6 sm:py-14 lg:px-0 lg:py-[80px]">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-[40px] lg:items-center">

          {/* LEFT */}
          <div className="relative text-center lg:text-left">
            <div className="inline-flex max-w-full items-center justify-center rounded-full border bg-white px-3 py-2 text-xs text-gray-600 sm:px-4 sm:text-base">
              ✈ Scheduler&apos;s all-in-one
            </div>

            <h1 className="mx-auto mt-5 max-w-[720px] text-balance text-[clamp(1.875rem,8.6vw,3rem)] font-bold !leading-[115%] text-[#131313] sm:mt-6 sm:text-5xl lg:mx-0 lg:text-[56px] lg:!leading-[120%]">
              MAKING INTERNATIONAL
              <br className="hidden sm:block" />
              <span className="text-[#CD9B46]">
                TRAVEL SIMPLE,
              </span>{" "}
              SAFE &
              <br className="hidden sm:block" />
              POSSIBLE
            </h1>

            <p className="mx-auto mt-4 w-full max-w-[34rem] text-sm leading-6 text-[#424242] sm:mt-5 sm:text-base lg:mx-0 lg:mt-8 lg:w-[565px] lg:max-w-none">
              Scheduler&apos;s all-in-one task management platform increase
              productivity and maintain team unity task management.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 lg:justify-start">
              <button className="w-full rounded-[8px] bg-[#C9933F] px-6 py-3 text-base font-medium text-white transition duration-300 hover:scale-105 hover:bg-[#CD9B46]/9 sm:w-auto">
                Start Application
              </button>

              <button className="w-full rounded-[8px] border border-[#C9933F] px-6 py-3 text-[#CD9B46] transition duration-300 hover:scale-105 sm:w-auto">
                Book Consultation
              </button>
            </div>

            <div className="relative mx-auto mt-8 w-full max-w-[360px] sm:max-w-[430px] lg:hidden">
              <Image
                src="/assets/hero3.png"
                alt=""
                width={720}
                height={702}
                sizes="(max-width: 640px) 92vw, 430px"
                className="h-auto w-full object-contain"
                priority
              />

              <div className="absolute bottom-2 right-2 rounded-[8px] bg-white/95 p-3 shadow-lg">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <Image
                      key={i}
                      src="/assets/av1.png"
                      alt=""
                      width={34}
                      height={34}
                      className="rounded-full border-2 border-white"
                    />
                  ))}
                </div>

                <div className="mt-2 text-xs text-yellow-500">★★★★★</div>
                <p className="text-[11px] text-gray-500">Loved by 200+ Customers</p>
              </div>
            </div>

            <div className="mt-8 sm:mt-12 lg:mt-16">
              <TravelFilter />
            </div>
            <div className="pointer-events-none absolute right-0 top-[110px] hidden h-24 w-24 opacity-70 md:block lg:right-[-15%] lg:top-[80px] lg:h-[160px] lg:w-[160px] lg:opacity-100">
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
