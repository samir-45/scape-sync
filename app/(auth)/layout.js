import Image from 'next/image'
import React from 'react'

export default function AuthLayout({ children }) {
  return (
    <div className='min-h-screen relative'>

      {/* Logo */}
      <div className="flex justify-start absolute top-4 left-4">
        <Image
          src="/Logo.svg"
          alt="Logo"
          width={130}
          height={50}
          priority
        />
      </div>

      {children}
    </div>
  )
}
