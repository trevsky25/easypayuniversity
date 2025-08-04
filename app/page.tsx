'use client'

import { Card } from '@/components/ui/Card'
import { Progress } from '@/components/ui/Progress'
import { Badge } from '@/components/ui/Badge'
import { useEBucks } from '@/lib/eBucks'
import { EBucksDisplay } from '@/components/ui/eBucksIcon'
import Link from 'next/link'
import { 
  BookOpen, 
  Users, 
  Trophy, 
  Clock,
  TrendingUp,
  Award,
  Sparkles,
  Target,
  CheckCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import { trainingModules } from '@/data/modules'
import { useEffect, useState } from 'react'

export default function Dashboard() {
  const { balance, loginStreak, getDailyChallenges } = useEBucks()
  const dailyChallenges = getDailyChallenges()
  const [completedModules, setCompletedModules] = useState(0)
  const [showReferralModal, setShowReferralModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [moduleCompletions, setModuleCompletions] = useState<Record<number, boolean>>({})
  const [referralCode, setReferralCode] = useState<string>(() => {
    // Initialize referral code immediately
    if (typeof window !== 'undefined') {
      const savedCode = localStorage.getItem('merchantReferralCode')
      if (savedCode) {
        return savedCode
      } else {
        // Generate a unique referral code (format: EP-XXXX-XXXX)
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
        let code = 'EP-'
        for (let i = 0; i < 8; i++) {
          if (i === 4) code += '-'
          code += chars.charAt(Math.floor(Math.random() * chars.length))
        }
        localStorage.setItem('merchantReferralCode', code)
        return code
      }
    }
    return ''
  })
  
  useEffect(() => {
    // Get module completion status from localStorage
    const completions = localStorage.getItem('module-completions')
    if (completions) {
      const completionData = JSON.parse(completions)
      setModuleCompletions(completionData)
      // Count how many modules are marked as completed
      const completedCount = Object.values(completionData).filter(Boolean).length
      setCompletedModules(completedCount)
    } else {
      // If no data exists, initialize with modules 1 and 2 completed (matching the modules page)
      const initialCompletions = { 1: true, 2: true }
      localStorage.setItem('module-completions', JSON.stringify(initialCompletions))
      setModuleCompletions(initialCompletions)
      setCompletedModules(2)
    }
  }, [])
  
  const stats = [
    { label: 'Modules Completed', value: `${completedModules}/${trainingModules.length}`, icon: BookOpen, color: 'text-easypay-green' },
    { label: 'Team Members Trained', value: '8/12', icon: Users, color: 'text-blue-600' },
    { label: 'Login Streak', value: `${loginStreak} days`, icon: Trophy, color: 'text-yellow-600' },
    { label: 'Time Invested', value: '4.5 hrs', icon: Clock, color: 'text-purple-600' },
  ]

  const MODULES_PER_PAGE = 4
  
  // Convert training modules to dashboard format with progress data
  const modules = trainingModules.map((module, index) => {
    const moduleId = parseInt(module.id.split('-')[1])
    const isCompleted = moduleCompletions[moduleId] || (moduleId <= 2) // Default first 2 as completed
    const progress = isCompleted ? 100 : (moduleId === 3 ? 35 : 0)
    const status = isCompleted ? 'completed' as const : 
                  (moduleId === 3 ? 'in-progress' as const : 'not-started' as const)
    
    return {
      id: moduleId,
      title: module.title,
      description: module.description,
      progress,
      status,
      duration: module.estimatedTime
    }
  })

  const totalPages = Math.ceil(modules.length / MODULES_PER_PAGE)
  const startIndex = currentPage * MODULES_PER_PAGE
  const endIndex = startIndex + MODULES_PER_PAGE
  const currentModules = modules.slice(startIndex, endIndex)

  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const goToPrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrevPage()
      } else if (e.key === 'ArrowRight') {
        goToNextPage()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [currentPage, totalPages])

  // Touch/swipe navigation for mobile
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      goToNextPage()
    } else if (isRightSwipe) {
      goToPrevPage()
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Welcome to EasyPay University - Track your progress and continue your merchant training journey
        </p>
      </div>

      {/* Daily Challenges Banner */}
      {dailyChallenges.length > 0 && (
        <Card className="p-6 bg-gradient-to-r from-teal-50 to-green-50 border-teal-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-teal-600" />
                Today's Challenges
              </h2>
              <p className="text-gray-600 mb-3">
                Complete {dailyChallenges.length} challenges to earn up to{' '}
                <span className="font-semibold text-teal-600">
                  {dailyChallenges.reduce((sum, c) => sum + c.reward, 0)} eBucks
                </span>
              </p>
              <div className="flex gap-2">
                {dailyChallenges.slice(0, 3).map((challenge) => (
                  <Badge key={challenge.id} variant="secondary" className="text-xs">
                    {challenge.title} (+{challenge.reward})
                  </Badge>
                ))}
              </div>
            </div>
            <Link
              href="/daily-challenges"
              className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
            >
              View Challenges
            </Link>
          </div>
        </Card>
      )}


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.label} className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{stat.label}</p>
              <p className="text-2xl font-bold mt-1">{stat.value}</p>
            </div>
            <stat.icon className={`w-8 h-8 ${stat.color}`} />
          </Card>
        ))}
      </div>

      <div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Training Modules</h2>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-easypay-green" />
              <span className="text-sm text-gray-600">
                {Math.round((completedModules / trainingModules.length) * 100)}% Complete
              </span>
            </div>
            
            {/* Carousel Navigation */}
            {totalPages > 1 && (
              <div className="flex items-center gap-2">
                <button
                  onClick={goToPrevPage}
                  disabled={currentPage === 0}
                  className="p-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Previous page"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                
                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        i === currentPage ? 'bg-easypay-green' : 'bg-gray-300'
                      }`}
                      aria-label={`Go to page ${i + 1}`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages - 1}
                  className="p-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Next page"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        <div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {currentModules.map((module) => (
            <Card 
              key={module.id}
              className="cursor-pointer hover:shadow-xl transition-all"
              onClick={() => window.location.href = `/modules/${module.id}`}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{module.title}</h3>
                <Badge status={module.status}>
                  {module.status === 'completed' ? 'Completed' : 
                   module.status === 'in-progress' ? 'In Progress' : 'Not Started'}
                </Badge>
              </div>
              
              <p className="text-sm text-gray-600 mb-4">{module.description}</p>
              
              <div className="space-y-3">
                <Progress value={module.progress} />
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">{module.progress}% Complete</span>
                  <span className="text-gray-500">{module.duration}</span>
                </div>
              </div>
              
              {module.status === 'completed' && (
                <div className="mt-4 flex items-center gap-2 text-easypay-green">
                  <Award className="w-4 h-4" />
                  <span className="text-sm font-medium">Certificate Earned</span>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Page Info */}
        {totalPages > 1 && (
          <div className="text-center text-sm text-gray-500 mt-4">
            Showing {startIndex + 1}-{Math.min(endIndex, modules.length)} of {modules.length} modules
          </div>
        )}
      </div>

      {/* Refer a Business CTA */}
      <Card className="bg-gradient-to-r from-teal-500 to-easypay-green text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/20 rounded-lg">
              <Users className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Refer a New Business</h3>
              <p className="mt-1 opacity-90">
                Earn 1000 eBucks when they enroll with EasyPay Finance and start training!
              </p>
            </div>
          </div>
          <button 
            onClick={() => setShowReferralModal(true)}
            className="bg-white text-easypay-green px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            Refer Now
          </button>
        </div>
      </Card>

      {/* Referral Modal */}
      {showReferralModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Refer a New Business to EasyPay</h2>
                <button
                  onClick={() => setShowReferralModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Referral Code Display */}
              <div className="bg-teal-50 border-2 border-teal-200 rounded-lg p-6 mb-6 text-center">
                <p className="text-sm text-gray-600 mb-2">Your Unique Referral Code</p>
                <p className="text-3xl font-bold text-teal-600 mb-4">{referralCode}</p>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(referralCode)
                    alert('Referral code copied to clipboard!')
                  }}
                  className="text-sm text-teal-600 hover:text-teal-700 underline"
                >
                  Copy to Clipboard
                </button>
              </div>

              {/* Instructions */}
              <div className="space-y-4 mb-6">
                <h3 className="font-semibold text-gray-900">How It Works:</h3>
                <ol className="space-y-3 text-sm text-gray-600">
                  <li className="flex gap-2">
                    <span className="font-semibold text-teal-600">1.</span>
                    Share your referral code with businesses that could benefit from offering customer financing
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-teal-600">2.</span>
                    They provide your code when enrolling as a new EasyPay Finance merchant partner
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-teal-600">3.</span>
                    When they're approved and complete their first training module, you earn 1000 eBucks!
                  </li>
                </ol>
              </div>

              {/* Benefits Section */}
              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Why Businesses Love EasyPay:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Instant approvals with financing up to $5,000</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Same-day funding for approved applications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>No merchant fees - EasyPay handles everything</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Increase sales by offering flexible payment options</span>
                  </li>
                </ul>
              </div>

              {/* Rewards Section */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Your Referral Reward:</h4>
                <div className="text-center py-2">
                  <EBucksDisplay amount={1000} size="large" />
                  <p className="text-xs text-gray-600 mt-2">
                    Earned when they enroll and complete Module 1
                  </p>
                </div>
              </div>

              {/* Share Options */}
              <div className="space-y-3">
                <button
                  onClick={() => {
                    const message = `I've been using EasyPay Finance to offer customer financing at my business and it's been great! They offer instant approvals up to $5,000 with same-day funding. If you're interested in growing your sales, you should check them out. Use my referral code ${referralCode} when you enroll. Contact EasyPay at (866) 337-2537 or visit easypayfinance.com`
                    navigator.clipboard.writeText(message)
                    alert('Message copied! You can now paste it in an email or text.')
                  }}
                  className="w-full bg-easypay-green text-white px-4 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                >
                  Copy Referral Message
                </button>
                <button
                  onClick={() => setShowReferralModal(false)}
                  className="w-full bg-gray-200 text-gray-700 px-4 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}