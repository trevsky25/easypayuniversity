'use client'

import { Card } from "@/components/ui/Card"
import { useEBucks } from "@/lib/eBucks"
import { EBucksDisplay } from "@/components/ui/eBucksIcon"
import { CheckCircle, Clock, Trophy, Target, Zap, Users, Sparkles, RotateCcw, Coins, DollarSign, Gift, TrendingDown, Star, Gamepad2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function DailyChallengesPage() {
  const router = useRouter()
  const { 
    getDailyChallenges, 
    completeDailyChallenge, 
    getTodaysChallengesCompleted,
    resetChallengeCompletion,
    getWheelSlots,
    canSpinWheelToday,
    spinWheel,
    resetWheelForToday,
    balance,
    spendBucks,
    awardBucks,
    loginStreak 
  } = useEBucks()
  
  const [challenges, setChallenges] = useState<any[]>([])
  const [completedToday, setCompletedToday] = useState<string[]>([])
  const [showCelebration, setShowCelebration] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [showReferralModal, setShowReferralModal] = useState(false)
  const [referralCode, setReferralCode] = useState('')
  
  // Wheel state
  const [isSpinning, setIsSpinning] = useState(false)
  const [wheelResult, setWheelResult] = useState<any>(null)
  const [showWheelResult, setShowWheelResult] = useState(false)
  const [wheelRotation, setWheelRotation] = useState(0)
  const [canSpin, setCanSpin] = useState(false)
  const [showGambleModal, setShowGambleModal] = useState(false)
  const [lastSpinResult, setLastSpinResult] = useState<any>(null)
  const [mounted, setMounted] = useState(false)
  const [wheelExpanded, setWheelExpanded] = useState(false)
  const [showGambleAnimation, setShowGambleAnimation] = useState(false)
  const [gambleCountdown, setGambleCountdown] = useState(5)

  useEffect(() => {
    // Force refresh challenges on mount
    const refreshChallenges = () => {
      const freshChallenges = getDailyChallenges()
      setChallenges(freshChallenges)
      setCompletedToday(getTodaysChallengesCompleted())
      setIsLoading(false)
    }
    
    // Add a small delay to ensure the component is fully mounted
    const timer = setTimeout(() => {
      refreshChallenges()
    }, 100)
    
    // Also refresh when window gains focus (user returns to tab)
    const handleFocus = () => refreshChallenges()
    window.addEventListener('focus', handleFocus)
    
    return () => {
      clearTimeout(timer)
      window.removeEventListener('focus', handleFocus)
    }
  }, [getDailyChallenges, getTodaysChallengesCompleted])

  useEffect(() => {
    // Generate or retrieve referral code
    const savedCode = localStorage.getItem('merchantReferralCode')
    if (savedCode) {
      setReferralCode(savedCode)
    } else {
      // Generate a unique referral code (format: EP-XXXX-XXXX)
      const generateCode = () => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
        let code = 'EP-'
        for (let i = 0; i < 8; i++) {
          if (i === 4) code += '-'
          code += chars.charAt(Math.floor(Math.random() * chars.length))
        }
        return code
      }
      const newCode = generateCode()
      localStorage.setItem('merchantReferralCode', newCode)
      setReferralCode(newCode)
    }
  }, [])

  useEffect(() => {
    // Check if user can spin wheel today
    if (canSpinWheelToday && typeof canSpinWheelToday === 'function') {
      setCanSpin(canSpinWheelToday())
    }
  }, [canSpinWheelToday])


  useEffect(() => {
    // Ensure component is mounted before rendering dynamic content
    setMounted(true)
  }, [])

  const difficultyColors = {
    easy: 'text-green-600 bg-green-50',
    medium: 'text-yellow-600 bg-yellow-50',
    hard: 'text-red-600 bg-red-50'
  }

  const categoryIcons = {
    learning: <Target className="w-5 h-5" />,
    performance: <Zap className="w-5 h-5" />,
    community: <Users className="w-5 h-5" />,
    practice: <Trophy className="w-5 h-5" />,
    review: <Clock className="w-5 h-5" />,
    engagement: <Trophy className="w-5 h-5" />,
    tools: <Zap className="w-5 h-5" />
  }

  const handleChallengeClick = (challengeId: string) => {
    // Navigate to appropriate page based on challenge
    switch(challengeId) {
      case 'quiz-master':
      case 'speed-demon':
      case 'module-marathon':
        router.push('/modules')
        break
      case 'helping-hand':
      case 'faq-explorer':
      case 'feedback-provider':
        router.push('/support')
        break
      case 'practice-perfect':
      case 'scenario-star':
      case 'conversation-champion':
      case 'automotive-expert':
      case 'objection-handler':
        router.push('/practice-scenarios')
        break
      case 'knowledge-refresh':
      case 'credit-culture-builder':
        router.push('/modules')
        break
      case 'calculator-wizard':
      case 'comparison-pro':
        router.push('/modules/1') // Module 1 has these interactive tools
        break
      case 'achievement-hunter':
        router.push('/progress')
        break
      case 'early-bird':
      case 'night-owl':
      case 'streak-keeper':
      case 'perfect-week':
        router.push('/') // Dashboard
        break
      case 'referral-rockstar':
        // Open referral modal - don't award eBucks yet
        setShowReferralModal(true)
        break
      case 'google-review':
        // Simulate completing Google review
        const success = completeDailyChallenge(
          'google-review', 
          150, 
          'Left Google review testimonial'
        )
        if (success) {
          setShowCelebration(true)
          setTimeout(() => {
            setShowCelebration(false)
            setChallenges(getDailyChallenges())
            setCompletedToday(getTodaysChallengesCompleted())
          }, 3000)
          window.open('https://g.page/r/YOUR_GOOGLE_REVIEW_LINK/review', '_blank')
        }
        break
    }
  }

  const handleReferralComplete = () => {
    const referralSuccess = completeDailyChallenge(
      'referral-rockstar', 
      500, 
      'Referred a business partner'
    )
    if (referralSuccess) {
      setShowReferralModal(false)
      setShowCelebration(true)
      setTimeout(() => {
        setShowCelebration(false)
        setChallenges(getDailyChallenges())
        setCompletedToday(getTodaysChallengesCompleted())
      }, 3000)
    }
  }

  const handleWheelSpin = () => {
    if (!canSpin || isSpinning || !spinWheel || typeof spinWheel !== 'function') return
    
    setIsSpinning(true)
    
    // Create spinning animation
    const spins = 5 + Math.random() * 5 // 5-10 full rotations
    const finalRotation = wheelRotation + (spins * 360)
    setWheelRotation(finalRotation)
    
    // Show result after animation
    setTimeout(() => {
      const result = spinWheel()
      setWheelResult(result)
      setLastSpinResult(result)
      setIsSpinning(false)
      setCanSpin(false)
      
      // Show gambling options immediately if applicable
      if ((result.type === 'win' && result.value > 0) || result.type === 'blank') {
        setShowGambleModal(true)
      } else {
        // Only show wheel result modal if no gambling options
        setShowWheelResult(true)
      }
    }, 3000)
  }

  const handleDoubleOrNothing = () => {
    if (!lastSpinResult || balance < lastSpinResult.value) return
    
    // Spend their winnings
    spendBucks(lastSpinResult.value, 'Double or Nothing bet')
    setShowGambleModal(false)
    setShowGambleAnimation(true)
    setGambleCountdown(5)
    
    // Start countdown animation
    const countdownInterval = setInterval(() => {
      setGambleCountdown(prev => {
        if (prev <= 1) {
          clearInterval(countdownInterval)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    
    // 40% chance to win double, 60% chance to lose it all
    const isWin = Math.random() < 0.4
    
    // Show result after 5 seconds
    setTimeout(() => {
      setShowGambleAnimation(false)
      if (isWin) {
        const doubleWinnings = lastSpinResult.value * 2
        awardBucks(doubleWinnings, `Won Double or Nothing! ${doubleWinnings} eBucks!`, undefined, 'challenge')
        setWheelResult({ 
          ...lastSpinResult, 
          label: `Double or Nothing WIN!`, 
          value: doubleWinnings,
          type: 'win'
        })
      } else {
        setWheelResult({ 
          ...lastSpinResult, 
          label: 'Double or Nothing LOSE!', 
          value: 0, 
          type: 'lose'
        })
      }
      setShowWheelResult(true)
      setGambleCountdown(5) // Reset for next time
    }, 5000)
  }

  const handleSpinAgain = () => {
    const cost = 50
    if (balance < cost) return
    
    spendBucks(cost, 'Paid for extra spin')
    setShowGambleModal(false)
    setCanSpin(true)
    
    // Small delay then allow another spin
    setTimeout(() => {
      handleWheelSpin()
    }, 500)
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Daily Challenges</h1>
        <p className="text-gray-600 mt-2">
          Complete daily challenges to earn extra eBucks and maintain your learning streak!
        </p>
      </div>

      {/* Login Streak Banner */}
      <div className="flex items-start justify-between">
        <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-2 rounded-lg">
          <Trophy className="w-5 h-5" />
          <span className="font-semibold">{loginStreak} Day Streak!</span>
          {loginStreak >= 7 && <span className="text-sm">(2x bonus active)</span>}
          {loginStreak >= 14 && <span className="text-sm">(3x bonus active)</span>}
        </div>
        
        {/* Debug info and refresh button */}
        <div className="text-right">
          <button
            onClick={() => {
              setIsLoading(true)
              setTimeout(() => {
                const freshChallenges = getDailyChallenges()
                setChallenges(freshChallenges)
                setCompletedToday(getTodaysChallengesCompleted())
                setIsLoading(false)
              }, 200)
            }}
            className="text-sm text-gray-500 hover:text-gray-700 underline"
          >
            Refresh Challenges
          </button>
          <p className="text-xs text-gray-400 mt-1">
            {challenges.length} challenges available today
          </p>
        </div>
      </div>

      {/* Fortune Wheel Tile */}
      <Card 
        className={`p-6 cursor-pointer transition-all hover:shadow-lg ${
          wheelExpanded ? 'ring-2 ring-purple-200' : 'hover:scale-[1.02]'
        }`}
        onClick={() => setWheelExpanded(!wheelExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Icon */}
            <div className="p-3 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-white" />
              </div>
            </div>
            
            {/* Challenge Info */}
            <div>
              <h3 className="font-semibold text-lg mb-1">Daily Fortune Wheel</h3>
              <p className="text-gray-600 text-sm mb-2">
                Spin for a chance to win big eBucks rewards!
              </p>
              
              <div className="flex items-center gap-3">
                {/* Status Badge */}
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  canSpin 
                    ? 'text-green-600 bg-green-50' 
                    : 'text-gray-600 bg-gray-50'
                }`}>
                  {canSpin ? 'AVAILABLE' : 'USED TODAY'}
                </span>
                
                {/* Potential Reward Range */}
                <div className="flex items-center gap-1">
                  <Coins className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-medium text-gray-700">5-500 eBucks</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Expand/Collapse & Status */}
          <div className="flex items-center gap-3">
            {canSpin ? (
              <div className="flex items-center gap-2 text-green-600 bg-green-50 px-3 py-2 rounded-lg">
                <Sparkles className="w-4 h-4" />
                <span className="font-medium text-sm">Ready to Spin!</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-gray-500 bg-gray-50 px-3 py-2 rounded-lg">
                <Clock className="w-4 h-4" />
                <span className="font-medium text-sm">Tomorrow</span>
              </div>
            )}
            
            <div className={`transform transition-transform ${wheelExpanded ? 'rotate-180' : ''}`}>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Expanded Wheel Section */}
        {wheelExpanded && (
          <div className="mt-6 pt-6 border-t border-gray-100" onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Wheel Visual */}
              <div className="flex-1 flex justify-center">
                {mounted ? (
                  <div className="relative">
                    {/* Downward Pointing Arrow */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 z-20">
                      <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-t-[20px] border-l-transparent border-r-transparent border-t-red-500 drop-shadow-lg"></div>
                    </div>
                    
                    {/* Bigger Wheel with Better Visibility */}
                    <div 
                      className="w-96 h-96 rounded-full relative overflow-hidden transition-all duration-[3000ms] ease-out"
                      style={{ transform: `rotate(${wheelRotation}deg)` }}
                    >
                      {/* Create visible segments with SVG for better text rendering */}
                      <svg width="384" height="384" className="absolute inset-0" viewBox="0 0 384 384">
                        {getWheelSlots().map((slot, index) => {
                          // Scale up for bigger wheel
                          const outerRadius = 189 // Scaled up from 128
                          const innerRadius = 0
                          const centerX = 189 // Adjusted center for bigger wheel
                          const centerY = 192
                          
                          const startAngle = (360 / 20) * index - 90
                          const endAngle = (360 / 20) * (index + 1) - 90
                          const startAngleRad = (startAngle * Math.PI) / 180
                          const endAngleRad = (endAngle * Math.PI) / 180
                          
                          // Outer arc points
                          const x1 = centerX + outerRadius * Math.cos(startAngleRad)
                          const y1 = centerY + outerRadius * Math.sin(startAngleRad)
                          const x2 = centerX + outerRadius * Math.cos(endAngleRad)
                          const y2 = centerY + outerRadius * Math.sin(endAngleRad)
                          
                          const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1"
                          const pathData = [
                            "M", centerX, centerY,
                            "L", x1, y1,
                            "A", outerRadius, outerRadius, 0, largeArcFlag, 1, x2, y2,
                            "Z"
                          ].join(" ")
                          
                          // Text positioning - place text at 70% of radius
                          const textAngle = (startAngle + endAngle) / 2
                          const textRadius = outerRadius * 0.7
                          const textX = centerX + textRadius * Math.cos((textAngle * Math.PI) / 180)
                          const textY = centerY + textRadius * Math.sin((textAngle * Math.PI) / 180)
                          
                          return (
                            <g key={slot.id}>
                              <path
                                d={pathData}
                                fill={slot.color}
                                stroke="#374151"
                                strokeWidth="1"
                              />
                              <text
                                x={textX}
                                y={textY}
                                textAnchor="middle"
                                dominantBaseline="central"
                                fontSize="13"
                                fontWeight="bold"
                                fill="#1f2937"
                                transform={`rotate(${textAngle} ${textX} ${textY})`}
                              >
                                {slot.label}
                              </text>
                            </g>
                          )
                        })}
                      </svg>
                    </div>
                  </div>
                ) : (
                  <div className="w-96 h-96 rounded-full bg-gray-100 flex items-center justify-center">
                    <p className="text-gray-500 font-medium">Loading wheel...</p>
                  </div>
                )}
              </div>
              
              {/* Wheel Info & Controls */}
              <div className="flex-1 space-y-6">
                {/* Prize Breakdown */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    Prize Breakdown
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Jackpot:</span>
                      <span className="font-medium text-yellow-600">200-500 eBucks</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Big Win:</span>
                      <span className="font-medium text-blue-600">40-100 eBucks</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Small Win:</span>
                      <span className="font-medium text-green-600">5-30 eBucks</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">No Luck:</span>
                      <span className="font-medium text-gray-500">Try Again</span>
                    </div>
                  </div>
                </div>
                
                {/* Gambling Features */}
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-4 border border-orange-200">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Gamepad2 className="w-4 h-4" />
                    Bonus Features
                  </h4>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>• <strong>Double or Nothing:</strong> Risk your winnings for 2x payout!</p>
                    <p>• <strong>Extra Spin:</strong> Pay 50 eBucks to spin again</p>
                  </div>
                </div>

                {/* Spin Button */}
                <div className="space-y-3">
                  <button
                    onClick={handleWheelSpin}
                    disabled={!canSpin || isSpinning}
                    className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all shadow-lg ${
                      canSpin && !isSpinning
                        ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white hover:from-purple-600 hover:via-pink-600 hover:to-red-600 transform hover:scale-105 hover:shadow-xl'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {isSpinning ? (
                      <div className="flex items-center justify-center gap-3">
                        <RotateCcw className="w-6 h-6 animate-spin" />
                        <span>Spinning...</span>
                      </div>
                    ) : canSpin ? (
                      <div className="flex items-center justify-center gap-3">
                        <Sparkles className="w-5 h-5" />
                        <span>SPIN THE WHEEL!</span>
                        <Sparkles className="w-5 h-5" />
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <Clock className="w-5 h-5" />
                        <span>Come Back Tomorrow!</span>
                      </div>
                    )}
                  </button>
                  
                  {/* Reset button for testing */}
                  <button
                    onClick={() => {
                      if (resetWheelForToday && typeof resetWheelForToday === 'function') {
                        resetWheelForToday()
                      }
                      setCanSpin(true)
                      setWheelResult(null)
                      setShowWheelResult(false)
                      setLastSpinResult(null)
                    }}
                    className="w-full text-sm text-purple-600 hover:text-purple-700 underline py-2"
                  >
                    🔄 Reset Wheel (Testing)
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Card>

      {/* Active Challenges */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Today's Challenges</h2>
        {isLoading ? (
          <div className="text-center py-8">
            <p className="text-gray-500">Loading challenges...</p>
          </div>
        ) : challenges.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">No challenges available. Try refreshing the page.</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {challenges.map((challenge) => {
            // Special case: referral-rockstar is never shown as completed
            const isCompleted = challenge.id === 'referral-rockstar' ? false : completedToday.includes(challenge.id)
            
            return (
              <Card 
                key={challenge.id}
                className={`p-6 cursor-pointer transition-all hover:shadow-lg ${
                  isCompleted ? 'opacity-50' : 'hover:scale-[1.02]'
                }`}
                onClick={() => !isCompleted && handleChallengeClick(challenge.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <div className="p-3 bg-gray-50 rounded-lg">
                      {categoryIcons[challenge.category]}
                    </div>
                    
                    {/* Challenge Info */}
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{challenge.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">{challenge.description}</p>
                      
                      <div className="flex items-center gap-3">
                        {/* Difficulty Badge */}
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          difficultyColors[challenge.difficulty]
                        }`}>
                          {challenge.difficulty.toUpperCase()}
                        </span>
                        
                        {/* Reward */}
                        <EBucksDisplay amount={challenge.reward} size="small" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Status */}
                  {isCompleted ? (
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  ) : (
                    <button className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors">
                      {challenge.id === 'referral-rockstar' ? 'Refer Business' : 'Start'}
                    </button>
                  )}
                </div>
              </Card>
            )
          })}
          </div>
        )}
      </div>

      {/* Special Offers */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Special Offers</h2>
        <Card className="p-6 bg-gradient-to-r from-teal-50 to-green-50 border-teal-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-lg mb-2">
                🌟 Leave a Google Review
              </h3>
              <p className="text-gray-600 mb-3">
                Share your EasyPay experience and earn bonus eBucks!
              </p>
              <EBucksDisplay amount={150} size="large" showAnimation />
            </div>
            <button
              onClick={() => handleChallengeClick('google-review')}
              className="px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors font-semibold"
            >
              Write Review
            </button>
          </div>
        </Card>
      </div>

      {/* Referral Modal */}
      {showReferralModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] flex flex-col">
            {/* Fixed Modal Header */}
            <div className="flex items-center justify-between p-6 pb-4 border-b border-gray-200 flex-shrink-0">
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
            
            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 pt-4">

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
                
                {/* Complete Referral Button */}
                <button
                  onClick={handleReferralComplete}
                  className="w-full bg-teal-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  I've Successfully Referred a Business!
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

      {/* Wheel Result Modal */}
      {showWheelResult && wheelResult && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-md mx-auto text-center">
            <div className="flex justify-center mb-4">
              {wheelResult.label?.includes('Double or Nothing WIN') ? 
                <DollarSign className="w-16 h-16 text-yellow-500" /> :
               wheelResult.label?.includes('Double or Nothing LOSE') ? 
                <TrendingDown className="w-16 h-16 text-red-500" /> :
               wheelResult.type === 'win' && wheelResult.value > 0 ? 
                <Trophy className="w-16 h-16 text-yellow-500" /> : 
                <Star className="w-16 h-16 text-blue-500" />}
            </div>
            <h2 className="text-2xl font-bold mb-2">
              {wheelResult.label?.includes('Double or Nothing WIN') ? 'JACKPOT!' :
               wheelResult.label?.includes('Double or Nothing LOSE') ? 'House Wins!' :
               wheelResult.type === 'win' && wheelResult.value > 0 ? 'Congratulations!' : 'Ah shoot!'}
            </h2>
            
            {wheelResult.type === 'win' && wheelResult.value > 0 ? (
              <>
                <p className="text-gray-600 mb-4">You won <strong className="text-green-600">{wheelResult.value} eBucks</strong>!</p>
                {/* eBucks amount above Continue button */}
                <div className="mb-6">
                  <EBucksDisplay amount={wheelResult.value} size="large" showAnimation />
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                  <p className="text-sm text-green-700 flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    <strong>{wheelResult.value} eBucks</strong> have been added to your account!
                  </p>
                </div>
              </>
            ) : (
              <div className="mb-6">
                <p className="text-gray-600 mb-4">
                  {wheelResult.label?.includes('Double or Nothing LOSE') ? 'You risked it all and lost! The house always has an edge.' :
                   wheelResult.label === 'Try Again!' ? 'No luck this time, but don\'t give up!' :
                   wheelResult.label === 'Almost!' ? 'So close! You\'ll get it next time!' :
                   wheelResult.label === 'So Close!' ? 'Almost had it! Tomorrow\'s your day!' :
                   wheelResult.label === 'Better Luck!' ? 'Keep your chin up! Try again tomorrow!' :
                   wheelResult.label === 'Next Time!' ? 'The wheel will be kinder tomorrow!' :
                   'Better luck next time!'}
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                  <p className="text-sm text-blue-700 flex items-start gap-2">
                    {wheelResult.label?.includes('Double or Nothing LOSE') ? 
                      <>
                        <Gamepad2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>Remember, gambling is risky! Try earning eBucks through daily challenges instead.</span>
                      </> :
                      <>
                        <Target className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>Come back tomorrow for another free spin! Complete daily challenges to earn more eBucks in the meantime.</span>
                      </>
                    }
                  </p>
                </div>
              </div>
            )}
            
            <button
              onClick={() => setShowWheelResult(false)}
              className="px-8 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors font-medium"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Double or Nothing Suspense Animation */}
      {showGambleAnimation && lastSpinResult && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 relative overflow-hidden">
            {/* Pulsing Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-100/50 via-yellow-100/50 to-green-100/50 animate-pulse"></div>
            
            {/* Main Animation Container */}
            <div className="relative z-10 text-center">
              {/* Countdown Circle */}
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto border-4 border-purple-300 rounded-full flex items-center justify-center animate-spin">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-purple-600 animate-pulse">
                      {gambleCountdown}
                    </span>
                  </div>
                </div>
                {/* Sparkling Effects */}
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
                <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-75"></div>
                <div className="absolute top-2 -right-4 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-75"></div>
                <div className="absolute bottom-4 -left-4 w-3 h-3 bg-purple-400 rounded-full animate-ping opacity-75"></div>
              </div>
              
              {/* Exciting Text */}
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-gray-900 animate-bounce">
                  DOUBLE OR NOTHING!
                </h2>
                <div className="flex items-center justify-center gap-2 text-orange-600">
                  <DollarSign className="w-5 h-5 animate-pulse" />
                  <span className="text-lg font-bold animate-pulse">
                    {lastSpinResult.value}
                  </span>
                  <span className="text-sm animate-pulse">vs</span>
                  <span className="text-lg font-bold animate-pulse">
                    {lastSpinResult.value * 2}
                  </span>
                  <span className="text-sm">eBucks</span>
                  <DollarSign className="w-5 h-5 animate-pulse" />
                </div>
                
                {/* Suspenseful Messages */}
                <div className="text-gray-700 text-base animate-pulse">
                  {gambleCountdown === 5 && "Rolling the dice..."}
                  {gambleCountdown === 4 && "Fortune is deciding..."}
                  {gambleCountdown === 3 && "The stakes are high..."}
                  {gambleCountdown === 2 && "Almost there..."}
                  {gambleCountdown === 1 && "This is it!"}
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2 mx-auto mt-4">
                  <div 
                    className="bg-gradient-to-r from-yellow-400 to-green-400 h-2 rounded-full transition-all duration-1000 ease-linear"
                    style={{ width: `${((5 - gambleCountdown) / 5) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Gambling Modal */}
      {showGambleModal && lastSpinResult && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <h2 className="text-2xl font-bold text-center mb-4 flex items-center justify-center gap-2">
              <Gamepad2 className="w-6 h-6" />
              Feeling Lucky?
            </h2>
            
            {lastSpinResult.type === 'win' && lastSpinResult.value > 0 ? (
              <div className="space-y-4">
                <p className="text-center text-gray-700">
                  You won <strong className="text-green-600">{lastSpinResult.value} eBucks</strong>! 
                  Want to risk it for double or nothing?
                </p>
                <div className="text-center mb-4">
                  <EBucksDisplay amount={lastSpinResult.value} size="medium" />
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-yellow-800">
                    <strong>Double or Nothing:</strong> 40% chance to win <strong>{lastSpinResult.value * 2} eBucks</strong>, 
                    60% chance to lose it all!
                  </p>
                </div>
                <div className="space-y-3">
                  <button
                    onClick={handleDoubleOrNothing}
                    disabled={balance < lastSpinResult.value}
                    className={`w-full py-3 px-4 rounded-lg font-medium ${
                      balance >= lastSpinResult.value
                        ? 'bg-red-500 text-white hover:bg-red-600'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {balance >= lastSpinResult.value 
                      ? `Double or Nothing (Risk ${lastSpinResult.value} eBucks)` 
                      : 'Insufficient eBucks'}
                  </button>
                  <button
                    onClick={() => {
                      setShowGambleModal(false)
                      setShowWheelResult(true)
                    }}
                    className="w-full py-3 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 font-medium"
                  >
                    Keep My Winnings
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-center text-gray-700">
                  No luck this time! Want to spend <strong>50 eBucks</strong> for another spin?
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-800">
                    <strong>Extra Spin:</strong> Pay 50 eBucks for another chance to win!
                  </p>
                </div>
                <div className="space-y-3">
                  <button
                    onClick={handleSpinAgain}
                    disabled={balance < 50}
                    className={`w-full py-3 px-4 rounded-lg font-medium ${
                      balance >= 50
                        ? 'bg-purple-500 text-white hover:bg-purple-600'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {balance >= 50 
                      ? 'Spin Again (50 eBucks)' 
                      : 'Insufficient eBucks'}
                  </button>
                  <button
                    onClick={() => {
                      setShowGambleModal(false)
                      setShowWheelResult(true)
                    }}
                    className="w-full py-3 px-4 bg-gray-500 text-white rounded-lg hover:bg-gray-600 font-medium"
                  >
                    No Thanks
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Celebration Modal */}
      {showCelebration && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-md mx-auto text-center animate-bounce">
            <div className="flex justify-center mb-4">
              <Trophy className="w-16 h-16 text-yellow-500" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Challenge Complete!</h2>
            <p className="text-gray-600 mb-4">You've earned your reward!</p>
            <EBucksDisplay amount={1000} size="large" showAnimation />
          </div>
        </div>
      )}
    </div>
  )
}