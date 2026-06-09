

"use client";

import { useState } from "react";
import Banner from "@/components/shared/Banner";
import ConsultationCard from "./_components/ConsultationCard";
import ConsultationBookingModal from "./_components/ConsultationBookingModal";

export default function Page() {
  const [open, setOpen] = useState(false);

  const [selectedConsultation, setSelectedConsultation] =
    useState({
      title: "",
      price: "",
    });

  const handleSelect = (
    title: string,
    price: string
  ) => {
    setSelectedConsultation({
      title,
      price,
    });

    setOpen(true);
  };

  return (
    <>
      <section className=" ">
            <Banner title='Consult an Expert'
        description='Choose your country, check your eligibility, upload documents, and pay securely — all in one place' 
        imageUrl='/assets/consulting.png'
        overlayColor='#00000066;'
      />
        <div className="container mx-auto py-12">
          <h2 className="mb-10 text-center text-4xl font-semibold">
            Consultation Type
          </h2>

          <div className="space-y-5">
            <ConsultationCard
              title="1 Hour"
              description="1 hour session, priority booking with detailed guidance"
              price="$40"
              selected={
                selectedConsultation.title === "1 Hour"
              }
              onClick={() =>
                handleSelect("1 Hour", "$40")
              }
            />

            <ConsultationCard
              title="30 Minutes"
              description="30 min priority booking with detailed guidance"
              price="$20"
              selected={
                selectedConsultation.title ===
                "30 Minutes"
              }
              onClick={() =>
                handleSelect("30 Minutes", "$20")
              }
            />
          </div>
        </div>
      </section>

      <ConsultationBookingModal
        open={open}
        onOpenChange={setOpen}
        consultationType={
          selectedConsultation.title
        }
        price={selectedConsultation.price}
      />
    </>
  );
}