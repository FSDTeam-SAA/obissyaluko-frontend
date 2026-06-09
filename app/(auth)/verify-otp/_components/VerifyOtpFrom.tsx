'use client'

import { useState, useRef } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import AuthLayout from '../../_components/AuthLayout'
import { authButtonClass, authLinkClass } from '../../_components/auth-styles'

interface VerifyOtpResponse {
  statusCode?: number
  success?: boolean
  message?: string
}

const verifyOtp = async (email: string, otp: string): Promise<VerifyOtpResponse> => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  const res = await fetch(`${baseUrl?.replace(/\/+$/, '')}/auth/verify`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, otp }),
  })

  const data: VerifyOtpResponse = await res.json()

  if (!res.ok || data?.success === false) {
    throw new Error(data?.message ?? 'OTP verification failed')
  }

  return data
}

export default function VerifyOtpForm() {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(''))
  const router = useRouter()
  const searchParams = useSearchParams()
  const email = searchParams.get('email') ?? ''
  const inputRefs = useRef<(HTMLInputElement | null)[]>(Array(6).fill(null))

  const { mutate, isPending } = useMutation({
    mutationFn: (otpCode: string) => verifyOtp(email, otpCode),
    onSuccess: (data) => {
      toast.success(data?.message ?? 'OTP verified successfully!')
      router.push(`/reset-password?email=${encodeURIComponent(email)}`)
    },
    onError: (error: Error) => {
      toast.error(error.message ?? 'Something went wrong. Please try again.')
    },
  })

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return

    const newOtp = [...otp]
    newOtp[index] = value.slice(-1)
    setOtp(newOtp)

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      if (!otp[index] && index > 0) {
        inputRefs.current[index - 1]?.focus()
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus()
    } else if (e.key === 'ArrowRight' && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const pasted = e.clipboardData.getData('text').trim()
    if (!/^\d+$/.test(pasted)) return

    const digits = pasted.slice(0, 6).split('')
    const newOtp = [...otp]
    digits.forEach((d, i) => { newOtp[i] = d })
    setOtp(newOtp)

    const lastIndex = Math.min(digits.length - 1, 5)
    inputRefs.current[lastIndex]?.focus()
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) return toast.error('Email not found. Please restart the process.')

    const otpCode = otp.join('')
    if (otpCode.length < 6) return toast.error('Please enter the complete 6-digit OTP')

    mutate(otpCode)
  }

  const handleResend = () => {
    toast.info('Resend OTP feature coming soon.')
  }

  const otpFilled = otp.every((digit) => digit !== '')

  return (
    <AuthLayout
      title="Enter OTP"
      subtitle={
        email
          ? `An OTP has been sent to ${email}, please verify it below`
          : 'An OTP has been sent to your email address please verify it below'
      }
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* OTP Input Fields */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => { inputRefs.current[index] = el }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              className="h-12 w-10 rounded-[8px] bg-[#E4F6FF] text-center text-lg font-semibold text-gray-900 transition focus:outline-none focus:ring-2 focus:ring-[#CD9B46]/40 focus:border-transparent sm:w-12"
            />
          ))}
        </div>

        <div className="text-center text-sm text-gray-700">
          <span>Didn&apos;t Receive OTP? </span>
          <button
            type="button"
            onClick={handleResend}
            className={authLinkClass}
          >
            Resend OTP
          </button>
        </div>

        <button
          type="submit"
          disabled={!otpFilled || isPending}
          className={authButtonClass}
        >
          {isPending ? 'Verifying...' : 'Verify'}
        </button>
      </form>
    </AuthLayout>
  )
}