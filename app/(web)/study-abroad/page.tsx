import Banner from "@/components/shared/Banner";
import React from "react";
import UniversitySection from "./_components/UniversitySection";

const page = () => {
  return (
    <div>
      <Banner
        title="Visa Services"
        description="Choose your country, check your eligibility, upload documents, and pay securely — all in one place"
        imageUrl="/assets/study.png"
        overlayColor="#00000066;"

      />
      <UniversitySection/>
    </div>
  );
};

export default page;
