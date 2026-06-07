'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import AuthLayout from '../_components/AuthLayout'
import {
  authButtonClass,
  authInputClass,
  authLabelClass,
  authLinkClass,
} from '../_components/auth-styles'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('[v0] Forgot password request:', { email })
    router.push('/verify-otp')
  }

  return (
    <AuthLayout
      title="Forget Password"
      subtitle="Please enter the email address linked to your account. We'll send a one-time password (OTP) to your email for verification."
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email Input */}
        <div className="mb-4">
          <label className={authLabelClass}>Email</label>
          <input
            type="email"
            placeholder="Enter your mail address..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={authInputClass}
          />
        </div>

        <button
          type="submit"
          className={authButtonClass}
        >
          Send OTP
        </button>

        <p className="text-center text-sm text-gray-700 mt-4">
          Back to{' '}
          <Link href="/login" className={authLinkClass}>
            Log in
          </Link>
        </p>
      </form>
    </AuthLayout>
  )
}
