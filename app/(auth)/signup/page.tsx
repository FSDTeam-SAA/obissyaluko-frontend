'use client'

import { useState } from 'react'
import Link from 'next/link'
import AuthLayout from '../_components/AuthLayout'
import {
  authButtonClass,
  authCheckboxClass,
  authEyeButtonClass,
  authInputClass,
  authLabelClass,
  authLinkClass,
  authPasswordInputClass,
} from '../_components/auth-styles'
export default function SignUpPage() {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('[v0] Sign up attempt:', formData)
  }

  return (
    <AuthLayout title="Create an account" subtitle="Enter your details to start your journey">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* First Name Input */}
        <div className="mb-4">
          <label className={authLabelClass}>First Name</label>
          <input
            type="text"
            placeholder="Enter your name..."
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className={authInputClass}
          />
        </div>

        {/* Last Name Input */}
        <div className="mb-4">
          <label className={authLabelClass}>Last Name</label>
          <input
            type="text"
            placeholder="Enter your name..."
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className={authInputClass}
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className={authLabelClass}>Email</label>
          <input
            type="email"
            placeholder="Enter your mail address..."
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={authInputClass}
          />
        </div>

        {/* Address Input */}
        <div className="mb-4">
          <label className={authLabelClass}>Address</label>
          <input
            type="text"
            placeholder="Enter your Pickup Address..."
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className={authInputClass}
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label className={authLabelClass}>Password</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter Password..."
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
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

        {/* Confirm Password Input */}
        <div className="mb-4">
          <label className={authLabelClass}>Confirm Password</label>
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Enter Password..."
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
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

        <div className="flex items-center gap-2 mb-6">
          <input
            type="checkbox"
            id="terms"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            className={authCheckboxClass}
            required
          />
          <label htmlFor="terms" className="text-sm text-gray-700">
            I agree to the{' '}
            <Link href="#" className={authLinkClass}>
              terms & conditions
            </Link>
          </label>
        </div>

        <button
          type="submit"
          className={authButtonClass}
        >
          Create Account
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
