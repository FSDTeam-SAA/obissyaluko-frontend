import React from "react";
import ContactSection from "./_components/Contact_section";
import Banner from "@/components/shared/Banner";

const page = () => {
  return (
    <div>
      <Banner
        title="Contact Us by amit"
        description="Choose your country, check your eligibility, upload documents, and pay securely — all in one place"
        imageUrl="/assets/babble.png"
        overlayColor="#00000066;"
      />
      <ContactSection />
    </div>
  );
};

export default page;
