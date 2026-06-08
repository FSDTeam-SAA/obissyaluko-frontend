import React, { Suspense } from 'react'
import VerifyOtpForm from './_components/VerifyOtpFrom'

const page = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
      <VerifyOtpForm/>
      </Suspense>
    </div>
  )
}

export default page
