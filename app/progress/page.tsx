'use client'

import { Card } from '@/components/ui/Card'
import { Progress } from '@/components/ui/Progress'
import { Badge } from '@/components/ui/Badge'
import { 
  Award, 
  Trophy, 
  Star,
  Calendar,
  Clock,
  Target,
  TrendingUp,
  BookOpen,
  Users,
  Flame,
  Medal,
  Zap,
  CheckCircle
} from 'lucide-react'

export default function ProgressPage() {
  const userStats = {
    totalModules: 4,
    completedModules: 2,
    totalLessons: 23,
    completedLessons: 14,
    totalTime: '4.5 hours',
    currentStreak: 5,
    longestStreak: 12,
    certificatesEarned: 2,
    overallProgress: 60
  }

  const achievements = [
    {
      id: 1,
      title: 'First Steps',
      description: 'Complete your first module',
      icon: BookOpen,
      earned: true,
      earnedDate: '2024-01-15',
      rarity: 'common',
      points: 50
    },
    {
      id: 2,
      title: 'Knowledge Seeker',
      description: 'Complete 2 modules',
      icon: Award,
      earned: true,
      earnedDate: '2024-01-18',
      rarity: 'common',
      points: 100
    },
    {
      id: 3,
      title: 'Streak Master',
      description: 'Maintain a 5-day learning streak',
      icon: Flame,
      earned: true,
      earnedDate: '2024-01-20',
      rarity: 'uncommon',
      points: 150
    },
    {
      id: 4,
      title: 'Perfect Score',
      description: 'Score 100% on any quiz',
      icon: Target,
      earned: true,
      earnedDate: '2024-01-16',
      rarity: 'rare',
      points: 200
    },
    {
      id: 5,
      title: 'Expert Certified',
      description: 'Complete all 4 modules',
      icon: Medal,
      earned: false,
      earnedDate: null,
      rarity: 'legendary',
      points: 500
    },
    {
      id: 6,
      title: 'Lightning Learner',
      description: 'Complete a module in under 30 minutes',
      icon: Zap,
      earned: false,
      earnedDate: null,
      rarity: 'uncommon',
      points: 125
    },
    {
      id: 7,
      title: 'Dedication',
      description: 'Maintain a 10-day learning streak',
      icon: Trophy,
      earned: false,
      earnedDate: null,
      rarity: 'rare',
      points: 300
    },
    {
      id: 8,
      title: 'Perfectionist',
      description: 'Score 100% on all quizzes',
      icon: Star,
      earned: false,
      earnedDate: null,
      rarity: 'legendary',
      points: 750
    }
  ]

  const recentActivity = [
    {
      date: '2024-01-20',
      action: 'Completed lesson: "Interactive Role-Play"',
      module: 'How to Submit Applications',
      points: 25
    },
    {
      date: '2024-01-20',
      action: 'Earned achievement: "Streak Master"',
      module: null,
      points: 150
    },
    {
      date: '2024-01-19',
      action: 'Started module: "Establishing a Credit Culture"',
      module: 'Establishing a Credit Culture',
      points: 10
    },
    {
      date: '2024-01-18',
      action: 'Earned certificate for: "How to Submit Applications"',
      module: 'How to Submit Applications',
      points: 100
    },
    {
      date: '2024-01-18',
      action: 'Completed quiz with 95% score',
      module: 'How to Submit Applications',
      points: 75
    }
  ]

  const moduleProgress = [
    {
      id: 1,
      title: 'Welcome to EasyPay Finance',
      progress: 100,
      status: 'completed' as const,
      certificate: true,
      score: 92
    },
    {
      id: 2,
      title: 'How to Submit Applications',
      progress: 100,
      status: 'completed' as const,
      certificate: true,
      score: 95
    },
    {
      id: 3,
      title: 'Establishing a Credit Culture',
      progress: 35,
      status: 'in-progress' as const,
      certificate: false,
      score: null
    },
    {
      id: 4,
      title: 'Advanced Topics',
      progress: 0,
      status: 'not-started' as const,
      certificate: false,
      score: null
    }
  ]

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'border-gray-300 bg-gray-50'
      case 'uncommon': return 'border-green-300 bg-green-50'
      case 'rare': return 'border-blue-300 bg-blue-50'
      case 'legendary': return 'border-purple-300 bg-purple-50'
      default: return 'border-gray-300 bg-gray-50'
    }
  }

  const getRarityTextColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'text-gray-700'
      case 'uncommon': return 'text-green-700'
      case 'rare': return 'text-blue-700'
      case 'legendary': return 'text-purple-700'
      default: return 'text-gray-700'
    }
  }

  const totalPoints = achievements
    .filter(achievement => achievement.earned)
    .reduce((sum, achievement) => sum + achievement.points, 0)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">My Progress</h1>
        <p className="text-gray-600 mt-2">
          Track your learning journey and celebrate your achievements
        </p>
      </div>

      {/* Learning Stats Tiles */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{userStats.overallProgress}%</p>
              <p className="text-sm text-gray-600">Overall Progress</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{userStats.completedModules}/{userStats.totalModules}</p>
              <p className="text-sm text-gray-600">Modules Complete</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
              <Award className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{userStats.certificatesEarned}</p>
              <p className="text-sm text-gray-600">Certificates Earned</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <Star className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{totalPoints}</p>
              <p className="text-sm text-gray-600">Achievement Points</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Overall Progress Bar */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Learning Progress</h3>
        <div className="bg-gray-200 rounded-full p-1">
          <div 
            className="bg-gradient-to-r from-emerald-500 to-blue-500 h-6 rounded-full transition-all duration-1000 ease-out relative overflow-hidden shadow-md"
            style={{ width: `${userStats.overallProgress}%` }}
          >
            <div className="absolute inset-0 bg-white/30 animate-pulse rounded-full" />
          </div>
        </div>
        <div className="text-center mt-4">
          <span className="text-gray-700 font-semibold">Progress: {userStats.overallProgress}% Complete</span>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Learning Stats */}
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Learning Stats</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span className="text-sm text-gray-700">Time Invested</span>
                </div>
                <span className="font-semibold">{userStats.totalTime}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Flame className="w-5 h-5 text-orange-600" />
                  <span className="text-sm text-gray-700">Current Streak</span>
                </div>
                <span className="font-semibold">{userStats.currentStreak} days</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-700">Longest Streak</span>
                </div>
                <span className="font-semibold">{userStats.longestStreak} days</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  <span className="text-sm text-gray-700">Lessons Completed</span>
                </div>
                <span className="font-semibold">{userStats.completedLessons}/{userStats.totalLessons}</span>
              </div>
            </div>
          </Card>

          {/* Recent Activity */}
          <Card>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-3">
              {recentActivity.slice(0, 5).map((activity, index) => (
                <div key={index} className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-b-0">
                  <div className="w-2 h-2 bg-easypay-green rounded-full mt-2 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">{activity.action}</p>
                    {activity.module && (
                      <p className="text-xs text-gray-500 mt-1">{activity.module}</p>
                    )}
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-gray-400">
                        {new Date(activity.date).toLocaleDateString()}
                      </span>
                      <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-medium">
                        +{activity.points} pts
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Achievements */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Achievements</h3>
            <span className="text-sm text-gray-500">
              {achievements.filter(a => a.earned).length} of {achievements.length} earned
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement) => (
              <Card 
                key={achievement.id} 
                className={`relative ${getRarityColor(achievement.rarity)} ${
                  achievement.earned 
                    ? `border-2 ${achievement.rarity === 'legendary' ? 'shadow-lg' : ''}` 
                    : 'opacity-60 grayscale'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full ${
                    achievement.earned 
                      ? 'bg-white shadow-md' 
                      : 'bg-gray-200'
                  }`}>
                    <achievement.icon className={`w-6 h-6 ${
                      achievement.earned 
                        ? getRarityTextColor(achievement.rarity)
                        : 'text-gray-400'
                    }`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
                      {achievement.earned && (
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{achievement.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        achievement.rarity === 'common' ? 'bg-gray-200 text-gray-700' :
                        achievement.rarity === 'uncommon' ? 'bg-green-200 text-green-700' :
                        achievement.rarity === 'rare' ? 'bg-blue-200 text-blue-700' :
                        'bg-purple-200 text-purple-700'
                      }`}>
                        {achievement.rarity}
                      </span>
                      <span className="text-sm font-bold bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">
                        {achievement.points} pts
                      </span>
                    </div>
                    
                    {achievement.earned && achievement.earnedDate && (
                      <div className="mt-2 text-xs text-gray-500">
                        Earned {new Date(achievement.earnedDate).toLocaleDateString()}
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Module Progress */}
      <Card>
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Module Progress</h3>
        <div className="space-y-6">
          {moduleProgress.map((module) => (
            <div key={module.id} className="flex items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{module.title}</h4>
                  <div className="flex items-center gap-3">
                    {module.certificate && (
                      <div className="flex items-center gap-1 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">
                        <Award className="w-4 h-4" />
                        <span className="text-sm font-bold">Certified</span>
                      </div>
                    )}
                    {module.score && (
                      <span className="text-sm text-gray-600">Score: {module.score}%</span>
                    )}
                    <Badge status={module.status}>
                      {module.status === 'completed' ? 'Completed' : 
                       module.status === 'in-progress' ? 'In Progress' : 'Not Started'}
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Progress value={module.progress} className="flex-1" />
                  <span className="text-sm font-medium text-gray-700 min-w-0">
                    {module.progress}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}