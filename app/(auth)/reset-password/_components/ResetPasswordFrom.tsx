'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import AuthLayout from '../../_components/AuthLayout'
import {
  authButtonClass,
  authEyeButtonClass,
  authLabelClass,
  authPasswordInputClass,
} from '../../_components/auth-styles'

interface ResetPasswordResponse {
  statusCode?: number
  success?: boolean
  message?: string
}

const resetPassword = async (email: string, newPassword: string): Promise<ResetPasswordResponse> => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  const res = await fetch(`${baseUrl?.replace(/\/+$/, '')}/auth/reset-password`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, newPassword }),
  })

  const data: ResetPasswordResponse = await res.json()

  if (!res.ok || data?.success === false) {
    throw new Error(data?.message ?? 'Failed to reset password')
  }

  return data
}

export default function ResetPasswordForm() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const email = searchParams.get('email') ?? ''

  const { mutate, isPending } = useMutation({
    mutationFn: (newPassword: string) => resetPassword(email, newPassword),
    onSuccess: (data) => {
      toast.success(data?.message ?? 'Password reset successfully!')
      router.push('/login')
    },
    onError: (error: Error) => {
      toast.error(error.message ?? 'Something went wrong. Please try again.')
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) return toast.error('Email not found. Please restart the process.')
    if (!password) return toast.error('Password is required')
    if (password.length < 6) return toast.error('Password must be at least 6 characters')
    if (password !== confirmPassword) return toast.error('Passwords do not match')

    mutate(password)
  }

  return (
    <AuthLayout
      title="New Password"
      subtitle="Please create your new password"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* New Password Input */}
        <div className="mb-4">
          <label className={authLabelClass}>New Password</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter Password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={authPasswordInputClass}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className={authEyeButtonClass}
            >
              {showPassword ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-4.803m5.596-3.856a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Re-enter Password Input */}
        <div className="mb-4">
          <label className={authLabelClass}>Re-enter Password</label>
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Enter Password..."
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={authPasswordInputClass}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className={authEyeButtonClass}
            >
              {showConfirmPassword ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-4.803m5.596-3.856a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={isPending}
          className={authButtonClass}
        >
          {isPending ? 'Resetting...' : 'Continue'}
        </button>
      </form>
    </AuthLayout>
  )
}