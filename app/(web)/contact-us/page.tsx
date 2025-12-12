import React from 'react'
import ContactSection from './_components/Contact_section'
import Hero from '@/components/shared/Hero'

const page = () => {
  return (
    <div>
         <Hero title="Contact Us" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever " imageUrl="/assets/contactbg.jpg" height="583px"/>
      <ContactSection/>
    </div>
  )
}

export default page
