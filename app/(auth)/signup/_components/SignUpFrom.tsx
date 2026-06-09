'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import AuthLayout from '../../_components/AuthLayout'
import {
  authButtonClass,
  authCheckboxClass,
  authEyeButtonClass,
  authInputClass,
  authLabelClass,
  authLinkClass,
  authPasswordInputClass,
} from '../../_components/auth-styles'

interface RegisterPayload {
  firstName: string
  lastName: string
  email: string
  password: string
}

interface RegisterResponse {
  statusCode?: number
  success?: boolean
  message?: string
}

const registerUser = async (payload: RegisterPayload): Promise<RegisterResponse> => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  const res = await fetch(`${baseUrl?.replace(/\/+$/, '')}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  const data: RegisterResponse = await res.json()

  if (!res.ok || data?.success === false) {
    throw new Error(data?.message ?? 'Registration failed')
  }

  return data
}

export default function SignUpForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const { mutate, isPending } = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      toast.success(data?.message ?? 'Account created successfully!')
      router.push('/login')
    },
    onError: (error: Error) => {
      toast.error(error.message ?? 'Something went wrong. Please try again.')
    },
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      setFormData((prev) => ({ ...prev, [name]: e.target.checked }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.firstName.trim()) return toast.error('First name is required')
    if (!formData.lastName.trim()) return toast.error('Last name is required')
    if (!formData.email.trim()) return toast.error('Email is required')
    if (!formData.password) return toast.error('Password is required')
    if (formData.password.length < 6) return toast.error('Password must be at least 6 characters')
    if (formData.password !== formData.confirmPassword) return toast.error('Passwords do not match')
    if (!formData.agreeToTerms) return toast.error('Please agree to the terms & conditions')

    mutate({
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.trim().toLowerCase(),
      password: formData.password,
    })
  }

  return (
    <AuthLayout title="Create an account" subtitle="Enter your details to start your journey">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* First Name */}
        <div className="mb-4">
          <label className={authLabelClass}>First Name</label>
          <input
            type="text"
            placeholder="Enter your name..."
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={authInputClass}
          />
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <label className={authLabelClass}>Last Name</label>
          <input
            type="text"
            placeholder="Enter your name..."
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={authInputClass}
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className={authLabelClass}>Email</label>
          <input
            type="email"
            placeholder="Enter your mail address..."
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={authInputClass}
          />
        </div>

        {/* Address */}
        <div className="mb-4">
          <label className={authLabelClass}>Address</label>
          <input
            type="text"
            placeholder="Enter your Pickup Address..."
            name="address"
            value={formData.address}
            onChange={handleChange}
            className={authInputClass}
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className={authLabelClass}>Password</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter Password..."
              name="password"
              value={formData.password}
              onChange={handleChange}
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

        {/* Confirm Password */}
        <div className="mb-4">
          <label className={authLabelClass}>Confirm Password</label>
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Enter Password..."
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
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

        {/* Terms */}
        <div className="flex items-center gap-2 mb-6">
          <input
            type="checkbox"
            id="terms"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            className={authCheckboxClass}
          />
          <label htmlFor="terms" className="text-sm text-gray-700">
            I agree to the{' '}
            <Link href="#" className={authLinkClass}>
              terms & conditions
            </Link>
          </label>
        </div>

        <button type="submit" disabled={isPending} className={authButtonClass}>
          {isPending ? 'Creating Account...' : 'Create Account'}
        </button>

        <p className="text-center text-sm text-gray-700 mt-4">
          Already have an account?{' '}
          <Link href="/login" className={authLinkClass}>
            Log in
          </Link>
        </p>
      </form>
    </AuthLayout>
  )
}