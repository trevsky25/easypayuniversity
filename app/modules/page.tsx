'use client'

import { Card } from '@/components/ui/Card'
import { Progress } from '@/components/ui/Progress'
import { Badge } from '@/components/ui/Badge'
import { 
  PlayCircle, 
  Clock, 
  CheckCircle, 
  Lock,
  Award,
  Star
} from 'lucide-react'
import Link from 'next/link'

export default function ModulesPage() {
  const modules = [
    { 
      id: 1, 
      title: 'Welcome to EasyPay Finance', 
      description: 'Learn about our mission, programs, and portal navigation. Perfect for new merchant partners.',
      progress: 100, 
      status: 'completed' as const,
      duration: '45 min',
      lessons: 4,
      quiz: true,
      locked: false,
      rating: 4.8,
      learners: 1245
    },
    { 
      id: 2, 
      title: 'How to Submit Applications', 
      description: 'Master the customer application process, approval criteria, and troubleshooting.',
      progress: 100, 
      status: 'completed' as const,
      duration: '60 min',
      lessons: 5,
      quiz: true,
      locked: false,
      rating: 4.9,
      learners: 1156
    },
    { 
      id: 3, 
      title: 'Establishing a Credit Culture', 
      description: 'Build credit awareness across your organization and implement best practices.',
      progress: 35, 
      status: 'in-progress' as const,
      duration: '90 min',
      lessons: 6,
      quiz: true,
      locked: false,
      rating: 4.7,
      learners: 987
    },
    { 
      id: 4, 
      title: 'Advanced Topics', 
      description: 'Handle complex financing scenarios, ensure compliance, and maximize program benefits.',
      progress: 0, 
      status: 'not-started' as const,
      duration: '120 min',
      lessons: 8,
      quiz: true,
      locked: true,
      rating: 4.6,
      learners: 756
    },
  ]

  const getStatusIcon = (status: string, progress: number) => {
    if (status === 'completed') return <CheckCircle className="w-5 h-5 text-green-600" />
    if (status === 'in-progress') return <PlayCircle className="w-5 h-5 text-blue-600" />
    return <Lock className="w-5 h-5 text-gray-400" />
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Training Modules</h1>
        <p className="text-gray-600 mt-2">
          Master EasyPay Finance programs through comprehensive, interactive training
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {modules.map((module) => (
          <Card key={module.id} className="relative overflow-hidden">
            {module.locked && (
              <div className="absolute inset-0 bg-gray-100/80 backdrop-blur-sm z-10 flex items-center justify-center">
                <div className="text-center">
                  <Lock className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Complete previous modules to unlock</p>
                </div>
              </div>
            )}
            
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2">
                {getStatusIcon(module.status, module.progress)}
                <Badge status={module.status}>
                  {module.status === 'completed' ? 'Completed' : 
                   module.status === 'in-progress' ? 'In Progress' : 'Locked'}
                </Badge>
              </div>
              {module.status === 'completed' && (
                <Award className="w-5 h-5 text-yellow-500" />
              )}
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">{module.title}</h3>
            <p className="text-sm text-gray-600 mb-4 line-clamp-2">{module.description}</p>

            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {module.duration}
                </span>
                <span>{module.lessons} lessons</span>
              </div>

              <Progress value={module.progress} />
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">{module.progress}% Complete</span>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                  <span className="text-gray-500">{module.rating}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t">
                <span className="text-xs text-gray-500">{module.learners} learners</span>
                <Link 
                  href={module.locked ? '#' : `/modules/${module.id}`}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    module.locked 
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : module.status === 'completed'
                      ? 'bg-green-100 text-green-700 hover:bg-green-200'
                      : 'bg-easypay-green text-white hover:bg-easypay-green-dark'
                  }`}
                >
                  {module.status === 'completed' ? 'Review' : 
                   module.status === 'in-progress' ? 'Continue' : 
                   module.locked ? 'Locked' : 'Start'}
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-r from-easypay-green to-easypay-green-dark text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">Learning Path Progress</h3>
            <p className="opacity-90 mb-4">
              You&apos;re 50% through the EasyPay Finance certification program
            </p>
            <Progress value={50} className="bg-white/20 [&>div]:bg-white" />
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">2/4</div>
            <div className="text-sm opacity-90">Modules Complete</div>
          </div>
        </div>
      </Card>
    </div>
  )
}