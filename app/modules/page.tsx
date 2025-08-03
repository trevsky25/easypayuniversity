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
import trainingModules from '@/data/modules'

export default function ModulesPage() {
  // Calculate dynamic stats based on module data
  const moduleStats = trainingModules.map((module, index) => {
    const totalLessons = module.lessons.length
    // Mock completion for demo - first 2 modules completed, 3rd in progress
    const completedLessons = index === 0 ? totalLessons : index === 1 ? totalLessons : index === 2 ? Math.floor(totalLessons * 0.35) : 0
    const progress = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0
    
    let status: 'completed' | 'in-progress' | 'not-started' = 'not-started'
    if (progress === 100) status = 'completed'
    else if (progress > 0) status = 'in-progress'
    
    const moduleIdNumber = parseInt(module.id.split('-')[1])
    
    return {
      id: moduleIdNumber,
      title: module.title,
      description: module.description,
      progress,
      status,
      duration: module.estimatedTime,
      lessons: totalLessons,
      quiz: module.quiz.questions.length > 0,
      locked: false, // Unlock all modules for easy access
      rating: 4.5 + (Math.random() * 0.5), // Mock rating
      learners: Math.floor(Math.random() * 500) + 500 // Mock learner count
    }
  })

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
        {moduleStats.slice(0, 7).map((module) => (
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
                   module.status === 'in-progress' ? 'In Progress' : 'Not Started'}
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
                  <span className="text-gray-500">{module.rating.toFixed(1)}</span>
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
            <div className="text-3xl font-bold">2/7</div>
            <div className="text-sm opacity-90">Modules Complete</div>
          </div>
        </div>
      </Card>
    </div>
  )
}