import Footer from '@/components/shared/Footer'
import { FeaturedTours } from '@/components/web-componets/FeaturedTours'
import HomeHero from '@/components/web-componets/HomeHero'
import OurServices from '@/components/web-componets/OurServices'
import TestimonialSection from '@/components/web-componets/TestimonialSection'
import VisaDestinations from '@/components/web-componets/VisaDestinations'
import WhyChooseUs from '@/components/web-componets/WhyChooseUs'
import React from 'react'

const page = () => {
  return (
    <div>
      <HomeHero/>
       <OurServices />
       <VisaDestinations />
       <WhyChooseUs/>
         <FeaturedTours />
         <TestimonialSection/>
         <Footer/>
    </div>
  )
}

export default page
