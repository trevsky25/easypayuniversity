'use client'

import { Card } from "@/components/ui/Card"
import { useEBucks } from "@/lib/eBucks"
import { EBucksDisplay } from "@/components/ui/eBucksIcon"
import { CheckCircle, Clock, Trophy, Target, Zap, Users } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function DailyChallengesPage() {
  const router = useRouter()
  const { 
    getDailyChallenges, 
    completeDailyChallenge, 
    getTodaysChallengesCompleted,
    loginStreak 
  } = useEBucks()
  
  const [challenges, setChallenges] = useState(getDailyChallenges())
  const [completedToday, setCompletedToday] = useState(getTodaysChallengesCompleted())
  const [showCelebration, setShowCelebration] = useState(false)

  useEffect(() => {
    setChallenges(getDailyChallenges())
    setCompletedToday(getTodaysChallengesCompleted())
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
    engagement: <Trophy className="w-5 h-5" />
  }

  const handleChallengeClick = (challengeId: string) => {
    // Navigate to appropriate page based on challenge
    switch(challengeId) {
      case 'quiz-master':
      case 'speed-demon':
        router.push('/modules')
        break
      case 'helping-hand':
        router.push('/support')
        break
      case 'practice-perfect':
      case 'scenario-star':
        router.push('/practice-scenarios')
        break
      case 'knowledge-refresh':
        router.push('/modules')
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

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Daily Challenges</h1>
        <p className="text-gray-600">Complete daily challenges to earn extra eBucks!</p>
        
        {/* Login Streak */}
        <div className="mt-4 inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-2 rounded-lg">
          <Trophy className="w-5 h-5" />
          <span className="font-semibold">{loginStreak} Day Streak!</span>
          {loginStreak >= 7 && <span className="text-sm">(2x bonus active)</span>}
          {loginStreak >= 14 && <span className="text-sm">(3x bonus active)</span>}
        </div>
      </div>

      {/* Active Challenges */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Today's Challenges</h2>
        <div className="grid gap-4">
          {challenges.map((challenge) => {
            const isCompleted = completedToday.includes(challenge.id)
            
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
                      Start
                    </button>
                  )}
                </div>
              </Card>
            )
          })}
        </div>
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

      {/* Celebration Modal */}
      {showCelebration && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-md mx-auto text-center animate-bounce">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold mb-2">Challenge Complete!</h2>
            <p className="text-gray-600 mb-4">You've earned your reward!</p>
            <EBucksDisplay amount={150} size="large" showAnimation />
          </div>
        </div>
      )}
    </div>
  )
}