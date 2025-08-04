'use client'

import { ChevronDown, User, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useEBucks } from '@/lib/eBucks'
import { EBucksIcon } from '@/components/ui/eBucksIcon'
import Link from 'next/link'
import { useMobileMenu } from './MobileMenuProvider'

export function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const { isOpen: isMobileMenuOpen, toggle: toggleMobileMenu } = useMobileMenu()
  const { balance } = useEBucks()

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-easypay-gray-200 h-16 flex items-center justify-between px-4 sm:px-6 z-30">
      <div className="flex items-center gap-3">
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 hover:bg-easypay-gray-50 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
        
        <img 
          src="/easypay-logo.svg" 
          alt="EasyPay Finance" 
          className="h-6 sm:h-8 w-auto"
        />
        <div className="hidden sm:block text-sm text-easypay-gray-600 whitespace-nowrap">Merchant Training Platform</div>
      </div>
      
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Business name - hidden on mobile, truncated on tablet */}
        <div className="hidden md:block text-sm text-easypay-gray-600 max-w-[200px] lg:max-w-none truncate">
          12841 - 1835 Gqk Team Inc DBA Big Discount Tire Pros
        </div>
        
        {/* eBucks Balance - Compact on mobile */}
        <Link 
          href="/currency-exchange"
          className="flex items-center gap-1 sm:gap-2 bg-easypay-green/10 hover:bg-easypay-green/20 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg transition-all hover:scale-105 group"
        >
          <EBucksIcon className="w-4 sm:w-5 h-4 sm:h-5" />
          <span className="text-xs sm:text-sm font-semibold text-easypay-green">{balance.toLocaleString()}</span>
          <span className="hidden sm:inline text-xs text-easypay-green/80 group-hover:text-easypay-green">eBucks</span>
        </Link>
        
        <div className="relative">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-1 sm:gap-2 p-1.5 sm:p-2 hover:bg-easypay-gray-50 rounded-lg transition-colors"
          >
            <div className="w-7 sm:w-8 h-7 sm:h-8 bg-easypay-gray-100 rounded-full flex items-center justify-center">
              <User className="w-4 sm:w-5 h-4 sm:h-5 text-easypay-gray-600" />
            </div>
            <span className="hidden sm:inline text-sm text-easypay-gray-700">John Merchant</span>
            <ChevronDown className="hidden sm:block w-4 h-4 text-easypay-gray-500" />
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