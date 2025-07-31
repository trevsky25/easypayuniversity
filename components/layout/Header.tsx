'use client'

import { ChevronDown, User } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  return (
    <header className="bg-white border-b border-easypay-gray-200 h-16 flex items-center justify-between px-6">
      <div className="flex items-center gap-6">
        <img 
          src="/easypay-logo.svg" 
          alt="EasyPay Finance" 
          className="h-8 w-auto"
        />
        <div className="text-sm text-easypay-gray-600">Merchant Training Platform</div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="text-sm text-easypay-gray-600">12841 - 1835 Gqk Team Inc DBA Big Discount Tire Pros</div>
        
        <div className="relative">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-2 p-2 hover:bg-easypay-gray-50 rounded-lg transition-colors"
          >
            <div className="w-8 h-8 bg-easypay-gray-100 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-easypay-gray-600" />
            </div>
            <span className="text-sm text-easypay-gray-700">John Merchant</span>
            <ChevronDown className="w-4 h-4 text-easypay-gray-500" />
          </button>
          
          {isProfileOpen && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-white text-easypay-gray-800 rounded-lg shadow-lg py-2 border border-easypay-gray-200">
              <a href="#" className="block px-4 py-2 hover:bg-easypay-gray-50 text-easypay-gray-700">My Profile</a>
              <a href="#" className="block px-4 py-2 hover:bg-easypay-gray-50 text-easypay-gray-700">Settings</a>
              <hr className="my-2 border-easypay-gray-200" />
              <a href="#" className="block px-4 py-2 hover:bg-easypay-gray-50 text-easypay-gray-700">Sign Out</a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}