import { Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function TeamMembers() {
  const members = [
    { name: "Ariana Collins Parker", image: "/assets/member1.jpg" },
    { name: "Liam Everett Saunders", image: "/assets/member2.jpg" },
    { name: "Maya Leanne Rivers", image: "/assets/member3.jpg" },
    { name: "Julian Carter Whitman", image: "/assets/member5.jpg" },
  ];

  return (
    <section className="mx-auto container px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16 items-start">
        {/* Left Side - Content */}
        <div className="flex flex-col space-y-6 lg:col-span-4 text-center lg:text-left">
          <h2 className="text-3xl sm:text-5xl lg:text-[60px] font-bold text-[#11204C] leading-tight">
            Meet Our Best 4 Members
          </h2>

          <ul className="space-y-4">
            {members.map((member) => (
              <li key={member.name} className="flex items-center gap-10  lg:justify-start">
                <div className="">
                <Check className="!h-10 !w-10 text-[#7FD858]" strokeWidth={3} />
                </div>
                <span className="text-base sm:text-2xl text-[#5F5E5E] font-medium">{member.name}</span>
              </li>
            ))}
          </ul>

          <div className="pt-6 sm:pt-10">
            <Button className="bg-[#F5B344] px-6 sm:px-8 h-[48px] text-base font-bold text-[#131313] rounded-[8px] hover:bg-[#e6a535] w-full sm:w-auto">
              Learn more
            </Button>
          </div>
        </div>

        {/* Right Side - Member Images */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:col-span-8 justify-items-center">
          {members.map((member, index) => (
            <div
              key={index}
              className="relative w-full max-w-[150px] sm:max-w-[170px] md:max-w-[180px] lg:max-w-[190px] h-[260px] sm:h-[330px] md:h-[380px] lg:h-[418px] overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow"
            >
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-16">
        <Button className="flex items-center justify-center w-full sm:w-[260px] lg:w-[525px] gap-2 bg-[#F5B344] px-8 h-[48px] text-base font-bold rounded-[8px] text-[#1a2b4a] hover:bg-[#e6a535]">
          Book Consultation
          <ChevronRight className="h-5 w-5" />
        </Button>

        <Button className="flex items-center justify-center w-full sm:w-[260px] lg:w-[525px] gap-2 bg-[#F5B344] px-8 h-[48px] text-base font-bold rounded-[8px] text-[#1a2b4a] hover:bg-[#e6a535]">
          Visa Application
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}
