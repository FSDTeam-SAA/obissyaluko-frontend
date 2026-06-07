'use client'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import AuthLayout from '../_components/AuthLayout'
import { authButtonClass, authLinkClass } from '../_components/auth-styles'

export default function VerifyOTPPage() {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(''))
  const router = useRouter()
  const inputRefs = useRef<(HTMLInputElement | null)[]>(Array(6).fill(null))

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return

    const newOtp = [...otp]
    newOtp[index] = value.slice(-1)
    setOtp(newOtp)

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const otpCode = otp.join('')
    console.log('[v0] OTP verification:', { otp: otpCode })
    router.push('/reset-password')
  }

  const handleResend = () => {
    console.log('[v0] Resend OTP')
  }

  const otpFilled = otp.every((digit) => digit !== '')

  return (
    <AuthLayout
      title="Enter OTP"
      subtitle="An OTP has been sent to your email address please verify it below"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* OTP Input Fields */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => {
                inputRefs.current[index] = el
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
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
          disabled={!otpFilled}
          className={authButtonClass}
        >
          Verify
        </button>
      </form>
    </AuthLayout>
  )
}
