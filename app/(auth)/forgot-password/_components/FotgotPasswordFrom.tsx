'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import AuthLayout from '../../_components/AuthLayout'
import {
  authButtonClass,
  authInputClass,
  authLabelClass,
  authLinkClass,
} from '../../_components/auth-styles'

interface ForgotPasswordResponse {
  statusCode?: number
  success?: boolean
  message?: string
}

const forgotPassword = async (email: string): Promise<ForgotPasswordResponse> => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  const res = await fetch(`${baseUrl?.replace(/\/+$/, '')}/auth/forgot-password`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  })

  const data: ForgotPasswordResponse = await res.json()

  if (!res.ok || data?.success === false) {
    throw new Error(data?.message ?? 'Failed to send OTP')
  }

  return data
}

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState('')
  const router = useRouter()

  const { mutate, isPending } = useMutation({
    mutationFn: forgotPassword,
    onSuccess: (data) => {
      toast.success(data?.message ?? 'OTP sent successfully!')
      router.push(`/verify-otp?email=${encodeURIComponent(email)}`)
    },
    onError: (error: Error) => {
      toast.error(error.message ?? 'Something went wrong. Please try again.')
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!email.trim()) return toast.error('Email is required')

    mutate(email.trim().toLowerCase())
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
            className={authInputClass}
          />
        </div>

        <button type="submit" disabled={isPending} className={authButtonClass}>
          {isPending ? 'Sending OTP...' : 'Send OTP'}
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