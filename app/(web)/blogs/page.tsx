import Banner from '@/components/shared/Banner'
import React from 'react'
import BlogGrid from './_components/BlogGrid'

const page = () => {
  return (
    <div>
      <Banner
        title="Blogs"
        description="Choose your country, check your eligibility, upload documents, and pay securely — all in one place"
        imageUrl="/assets/babble.png"
        overlayColor="#00000066;"
      />
      <BlogGrid/>
    </div>
  )
}

export default page
