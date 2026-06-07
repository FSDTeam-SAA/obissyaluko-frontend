import Banner from "@/components/shared/Banner";
import React from "react";
import TourGrid from "./_components/TourGrid";

const page = () => {
  return (
    <div>
      <Banner
        title="Tour Packages"
        description="Choose your country, check your eligibility, upload documents, and pay securely — all in one place"
        imageUrl="/assets/tourbg.png"
        overlayColor="#00000066;"
      />
      <TourGrid/>
    </div>
  );
};

export default page;
