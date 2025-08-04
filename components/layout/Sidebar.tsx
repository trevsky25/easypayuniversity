'use client'

import { 
  LayoutDashboard, 
  BookOpen, 
  FileText, 
  Trophy, 
  HeadphonesIcon,
  Menu,
  X,
  Users,
  Coins,
  Sparkles
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Training Modules', href: '/modules', icon: BookOpen },
  { name: 'Daily Challenges', href: '/daily-challenges', icon: Sparkles },
  { name: 'Practice Scenarios', href: '/practice-scenarios', icon: FileText },
  { name: 'My Progress', href: '/progress', icon: Trophy },
  { name: 'eBucks Exchange', href: '/currency-exchange', icon: Coins },
  { name: 'Resources', href: '/resources', icon: FileText },
  { name: 'Support', href: '/support', icon: HeadphonesIcon },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="lg:hidden fixed top-20 left-4 z-50 p-2 bg-easypay-gray-dark text-white rounded-lg"
      >
        {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <aside className={cn(
        "fixed inset-y-0 left-0 z-20 w-64 bg-white border-r border-easypay-gray-200 transform transition-transform duration-300 pt-16",
        isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        <div className="px-4 pt-6 pb-2">
          <h3 className="text-sm font-medium text-easypay-gray-600 mb-4">Menu</h3>
          <nav className="space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm",
                    isActive 
                      ? "text-easypay-green font-medium bg-easypay-green/5 border border-easypay-green/20" 
                      : "text-easypay-gray-700 hover:text-easypay-gray-900 hover:bg-easypay-gray-50"
                  )}
                >
                  <item.icon className={cn(
                    "w-5 h-5",
                    isActive ? "text-easypay-green" : "text-easypay-gray-500"
                  )} />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </nav>
        </div>
        
        {/* Admin Section */}
        <div className="px-4 pt-6 pb-2 border-t border-easypay-gray-100 mt-6">
          <h3 className="text-sm font-medium text-easypay-gray-600 mb-4">Admin</h3>
          <nav className="space-y-1">
            <Link
              href="/admin"
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm",
                pathname === '/admin'
                  ? "text-easypay-green font-medium bg-easypay-green/5 border border-easypay-green/20"
                  : "text-easypay-gray-700 hover:text-easypay-gray-900 hover:bg-easypay-gray-50"
              )}
            >
              <Users className={cn(
                "w-5 h-5",
                pathname === '/admin' ? "text-easypay-green" : "text-easypay-gray-500"
              )} />
              <span>Platform Analytics</span>
            </Link>
          </nav>
        </div>
      </aside>

      {isMobileOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  )
}