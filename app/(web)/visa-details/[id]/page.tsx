import Banner from "@/components/shared/Banner";
import React from "react";
import VisaDetailsPage from "../_components/VisaDetailsPage";

const page = () => {
  return (
    <div>
      <Banner
        title="Visa Services"
        description="Professional visa processing services for over 50 countries. High success rate
      with expert guidance."
        imageUrl="/assets/visaservices.png"
      />
      <VisaDetailsPage/>
    </div>
  );
};

export default page;
