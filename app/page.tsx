'use client'

import { Card } from '@/components/ui/Card'
import { Progress } from '@/components/ui/Progress'
import { Badge } from '@/components/ui/Badge'
import { 
  BookOpen, 
  Users, 
  Trophy, 
  Clock,
  TrendingUp,
  Award
} from 'lucide-react'

export default function Dashboard() {
  const stats = [
    { label: 'Modules Completed', value: '2/4', icon: BookOpen, color: 'text-easypay-green' },
    { label: 'Team Members Trained', value: '8/12', icon: Users, color: 'text-blue-600' },
    { label: 'Current Streak', value: '5 days', icon: Trophy, color: 'text-yellow-600' },
    { label: 'Time Invested', value: '4.5 hrs', icon: Clock, color: 'text-purple-600' },
  ]

  const modules = [
    { 
      id: 1, 
      title: 'Welcome to EasyPay Finance', 
      description: 'Learn about our mission, programs, and portal navigation',
      progress: 100, 
      status: 'completed' as const,
      duration: '45 min'
    },
    { 
      id: 2, 
      title: 'How to Submit Applications', 
      description: 'Master the application process and best practices',
      progress: 100, 
      status: 'completed' as const,
      duration: '60 min'
    },
    { 
      id: 3, 
      title: 'Establishing a Credit Culture', 
      description: 'Build credit awareness across your organization',
      progress: 35, 
      status: 'in-progress' as const,
      duration: '90 min'
    },
    { 
      id: 4, 
      title: 'Advanced Topics', 
      description: 'Handle complex scenarios and ensure compliance',
      progress: 0, 
      status: 'not-started' as const,
      duration: '120 min'
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-easypay-gray-900">Overview</h1>
      </div>

      {/* Status Overview */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-easypay-gray-200">
          <div className="w-3 h-3 bg-easypay-gray-400 rounded-full"></div>
          <span className="text-sm text-easypay-gray-700">Not Started</span>
        </div>
        <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-easypay-gray-200">
          <div className="w-3 h-3 bg-easypay-green rounded-full"></div>
          <span className="text-sm text-easypay-gray-700">In Progress</span>
        </div>
        <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-easypay-gray-200">
          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
          <span className="text-sm text-easypay-gray-700">Assessment</span>
        </div>
        <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-easypay-gray-200">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span className="text-sm text-easypay-gray-700">Review</span>
        </div>
        <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-easypay-gray-200">
          <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
          <span className="text-sm text-easypay-gray-700">Completed</span>
        </div>
        <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-easypay-gray-200">
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <span className="text-sm text-easypay-gray-700">Certificate</span>
        </div>
      </div>

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
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Training Modules</h2>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-easypay-green" />
            <span className="text-sm text-gray-600">50% Complete</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {modules.map((module) => (
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
      </div>

      <Card className="bg-easypay-green text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold">Ready to grow your business?</h3>
            <p className="mt-2 opacity-90">
              Complete all modules to unlock advanced features and exclusive merchant benefits
            </p>
          </div>
          <button className="bg-white text-easypay-green px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            View Benefits
          </button>
        </div>
      </Card>
    </div>
  )
}