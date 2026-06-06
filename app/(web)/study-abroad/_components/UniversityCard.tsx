"use client";

import { useState } from "react";
import Image from "next/image";
import { GraduationCap, MapPin } from "lucide-react";

import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import ApplicationModal from "./ApplicationModal";

interface Program {
  title: string;
  duration: string;
  scholarship: string;
  price: string;
}

interface UniversityCardProps {
  image: string;
  university: string;
  country: string;
  description: string;
  programs: Program[];
}

export default function UniversityCard({
  image,
  university,
  country,
  description,
  programs,
}: UniversityCardProps) {
  const [open, setOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState("");

  const handleApply = (programName: string) => {
    setSelectedProgram(programName);
    setOpen(true);
  };

  return (
    <>
      <div className="rounded-xl bg-white p-4 shadow-md">
        <div className="flex flex-col gap-4 lg:flex-row">
          {/* University Image */}
          <div className="relative h-[180px] w-full shrink-0 overflow-hidden rounded-lg lg:h-[260px] lg:w-[220px]">
            <Image
              src={image}
              alt={university}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-[#131313]">
              {university}
            </h2>

            <div className="mt-1 flex items-center gap-1 text-base text-[#757677]">
              <MapPin size={14} />
              {country}
            </div>

            <p className="mt-3 text-base text-[#757677]">
              {description}
            </p>

            <h3 className="mb-3 mt-4 text-[22px] font-medium text-[#131313]">
              Available Programs
            </h3>

            <div className="grid gap-3 md:grid-cols-2">
              {programs.map((program, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg bg-[#EEEEEE] p-3"
                >
                  <div>
                    <h4 className="text-base font-medium text-[#616161]">
                      {program.title}
                    </h4>

                    <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-[#616161]">
                      <span>Master</span>
                      <span>|</span>
                      <span>{program.duration}</span>
                      <span>|</span>

                      <span className="flex items-center gap-1">
                        <GraduationCap size={12} />
                        {program.scholarship}
                      </span>
                    </div>

                    <p className="mt-1 text-base font-semibold text-[#336FCA]">
                      {program.price}
                    </p>
                  </div>

                  <button
                    onClick={() => handleApply(program.title)}
                    className="rounded-[8px] bg-[#CD9B46] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#CD9B46]/90"
                  >
                    Apply
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

        {/* Application Modal */}   
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-[700px] !bg-white overflow-hidden !rounded-[16px] p-0">
            <ApplicationModal
              open={open}
              onOpenChange={setOpen}
              university={university}
              program={selectedProgram}
            />
          </DialogContent>
        </Dialog>
    </>
  );
}