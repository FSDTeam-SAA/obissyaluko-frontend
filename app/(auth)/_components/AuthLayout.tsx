'use client'

import Image from 'next/image'
import React from 'react'

interface AuthLayoutProps {
  children: React.ReactNode
  title?: string
  subtitle?: string
}

export default function AuthLayout({
  children,
  title,
  subtitle,
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white">
      {/* Image Section - Left Side */}
      <div className="w-full lg:w-1/2 relative hidden lg:flex items-center justify-center bg-gray-200">
        <Image
          src="/assets/auth.png"
          alt="Beach with airplane"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Form Section - Right Side */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-6 py-12 sm:px-12 lg:px-16">
        <div className="w-full max-w-md">
          {title && (
            <div className="mb-8 text-center">
              <h1 className="text-3xl lg:text-4xl font-semibold text-[#131313] mb-2">
                {title}
              </h1>
              {subtitle && (
                <p className="text-[#787878] text-sm lg:text-base">
                  {subtitle}
                </p>
              )}
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  )
}
