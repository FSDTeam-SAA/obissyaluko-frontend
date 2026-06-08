import React, { Suspense } from 'react'
import ResetPasswordForm from './_components/ResetPasswordFrom'

const page = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
      <ResetPasswordForm/>
      </Suspense>
    </div>
  )
}

export default page
