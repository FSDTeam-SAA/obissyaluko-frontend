import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function GrowthStory() {
  return (
    <section className="mx-auto container px-4 sm:px-6 lg:px-8 py-0  lg:py-[100px]">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 gap-y-14 lg:gap-12 ">
        {/* Left Side - Images */}
        <div className="relative flex justify-center lg:justify-start">
          <div className="relative">
            {/* Mountain climber image - larger, positioned to the left */}
            <div className="relative h-[482px] w-[342px]  rounded-3xl shadow-xl ">
              <Image src="/assets/groth1.jpg" alt="Mountain climber" width={1000} height={1000} className=" object-cover rounded-[24px]" />
            </div>

            {/* Sunset image - smaller, overlapping on the right */}
            <div className="absolute -bottom-8 -right-[370px] h-[482px] w-[342px]  rounded-3xl shadow-2xl ">
              <Image src="/assets/groth2.jpg" alt="Sunset celebration" width={1000} height={1000} className="object-cover rounded-[24px]" />
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="flex flex-col  text-center lg:text-left ">
          <h2 className="text-balance text-4xl font-semibold text-[#11204C] sm:text-[60px] ">Our Growth Story</h2>
          <p className="text-pretty text-base leading-relaxed text-[#616263] sm:text-[22px] pt-[36px]">
            Our growth story is built on passion, dedication, and a commitment to excellence. What began as a small
            travel service has grown into a trusted agency serving thousands of travelers. Over the years, we expanded
            our services, strengthened our global partnerships, and invested in technology to deliver fast, seamless,
            and transparent travel solutions. Today, we continue to grow with one mission: to make every journey easier,
            safer, and more enjoyable for our customers.
          </p>
          <div className="flex justify-center lg:justify-start pt-[74px]">
            <Button className="bg-[#F5B547] px-8 h-[50px] text-base font-bold rounded-[8px] text-[#282828] hover:bg-[#e6a535]">
              Read more
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
