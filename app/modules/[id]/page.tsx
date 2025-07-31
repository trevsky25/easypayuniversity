'use client'

import { Card } from '@/components/ui/Card'
import { Progress } from '@/components/ui/Progress'
import { Badge } from '@/components/ui/Badge'
import { 
  PlayCircle, 
  Clock, 
  CheckCircle, 
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Video,
  FileText,
  HelpCircle,
  Award
} from 'lucide-react'
import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'

interface ModuleContent {
  id: number
  title: string
  description: string
  duration: string
  lessons: {
    id: number
    title: string
    type: 'video' | 'reading' | 'interactive' | 'quiz'
    duration: string
    completed: boolean
  }[]
  quiz: {
    questions: number
    passingScore: number
    timeLimit: string
  }
}

const moduleData: Record<string, ModuleContent> = {
  '1': {
    id: 1,
    title: 'Welcome to EasyPay Finance',
    description: 'Learn about our mission, values, and the three financing programs that power merchant success.',
    duration: '45 min',
    lessons: [
      { id: 1, title: 'Company Overview Video', type: 'video', duration: '5 min', completed: true },
      { id: 2, title: 'Program Comparison Tool', type: 'interactive', duration: '15 min', completed: true },
      { id: 3, title: 'Portal Navigation Tutorial', type: 'video', duration: '15 min', completed: true },
      { id: 4, title: 'Getting Started Guide', type: 'reading', duration: '10 min', completed: false }
    ],
    quiz: {
      questions: 10,
      passingScore: 80,
      timeLimit: '15 min'
    }
  },
  '2': {
    id: 2,
    title: 'How to Submit Applications',
    description: 'Master the customer application process, understand approval criteria, and handle various financing scenarios.',
    duration: '60 min',
    lessons: [
      { id: 1, title: 'Application Process Walkthrough', type: 'video', duration: '15 min', completed: true },
      { id: 2, title: 'Scenario-Based Training', type: 'interactive', duration: '20 min', completed: true },
      { id: 3, title: 'Best Practices Checklist', type: 'reading', duration: '10 min', completed: true },
      { id: 4, title: 'Interactive Role-Play', type: 'interactive', duration: '15 min', completed: false }
    ],
    quiz: {
      questions: 12,
      passingScore: 80,
      timeLimit: '20 min'
    }
  },
  '3': {
    id: 3,
    title: 'Establishing a Credit Culture',
    description: 'Build credit awareness across your organization and implement best practices for consistent financing conversations.',
    duration: '90 min',
    lessons: [
      { id: 1, title: 'Credit Culture Foundation', type: 'video', duration: '15 min', completed: true },
      { id: 2, title: 'Staff Training Framework', type: 'interactive', duration: '20 min', completed: true },
      { id: 3, title: 'Customer Conversation Guide', type: 'reading', duration: '25 min', completed: false },
      { id: 4, title: 'Building Accountability Systems', type: 'interactive', duration: '15 min', completed: false },
      { id: 5, title: 'Overcoming Common Objections', type: 'video', duration: '18 min', completed: false },
      { id: 6, title: 'Implementation Roadmap', type: 'reading', duration: '12 min', completed: false }
    ],
    quiz: {
      questions: 12,
      passingScore: 80,
      timeLimit: '18 min'
    }
  },
  '4': {
    id: 4,
    title: 'Advanced Topics',
    description: 'Handle complex financing scenarios, ensure compliance, and maximize program benefits.',
    duration: '120 min',
    lessons: [
      { id: 1, title: 'Regulatory Compliance', type: 'reading', duration: '30 min', completed: false },
      { id: 2, title: 'Advanced Sales Techniques', type: 'interactive', duration: '25 min', completed: false },
      { id: 3, title: 'Technology Integration', type: 'video', duration: '20 min', completed: false },
      { id: 4, title: 'Case Study Analysis', type: 'interactive', duration: '35 min', completed: false },
      { id: 5, title: 'Compliance Documentation', type: 'reading', duration: '20 min', completed: false }
    ],
    quiz: {
      questions: 15,
      passingScore: 80,
      timeLimit: '25 min'
    }
  }
}

export default function ModulePage() {
  const params = useParams()
  const router = useRouter()
  const moduleId = params.id as string
  const module = moduleData[moduleId]
  
  const [selectedLesson, setSelectedLesson] = useState(0)

  if (!module) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900">Module not found</h1>
        <button 
          onClick={() => router.push('/modules')}
          className="mt-4 text-easypay-green hover:underline"
        >
          Back to modules
        </button>
      </div>
    )
  }

  const completedLessons = module.lessons.filter(lesson => lesson.completed).length
  const progressPercentage = Math.round((completedLessons / module.lessons.length) * 100)
  
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video className="w-4 h-4" />
      case 'reading': return <FileText className="w-4 h-4" />
      case 'interactive': return <PlayCircle className="w-4 h-4" />
      case 'quiz': return <HelpCircle className="w-4 h-4" />
      default: return <BookOpen className="w-4 h-4" />
    }
  }

  const currentLesson = module.lessons[selectedLesson]

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <button 
          onClick={() => router.push('/modules')}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{module.title}</h1>
          <p className="text-gray-600 mt-1">{module.description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="h-96 flex items-center justify-center bg-gray-50">
            {currentLesson.type === 'video' && (
              <div className="text-center">
                <Video className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{currentLesson.title}</h3>
                <p className="text-gray-600 mb-4">Video content would load here</p>
                <button className="bg-easypay-green text-white px-6 py-3 rounded-lg hover:bg-easypay-green-dark transition-colors">
                  Play Video
                </button>
              </div>
            )}
            
            {currentLesson.type === 'interactive' && (
              <div className="text-center">
                <PlayCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{currentLesson.title}</h3>
                <p className="text-gray-600 mb-4">Interactive content would load here</p>
                <button className="bg-easypay-green text-white px-6 py-3 rounded-lg hover:bg-easypay-green-dark transition-colors">
                  Start Interactive
                </button>
              </div>
            )}
            
            {currentLesson.type === 'reading' && (
              <div className="text-center">
                <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{currentLesson.title}</h3>
                <p className="text-gray-600 mb-4">Reading material would load here</p>
                <button className="bg-easypay-green text-white px-6 py-3 rounded-lg hover:bg-easypay-green-dark transition-colors">
                  Read Article
                </button>
              </div>
            )}
          </Card>

          <div className="flex justify-between mt-6">
            <button 
              onClick={() => setSelectedLesson(Math.max(0, selectedLesson - 1))}
              disabled={selectedLesson === 0}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </button>
            
            <button 
              onClick={() => setSelectedLesson(Math.min(module.lessons.length - 1, selectedLesson + 1))}
              disabled={selectedLesson === module.lessons.length - 1}
              className="flex items-center gap-2 px-4 py-2 bg-easypay-green text-white rounded-lg hover:bg-easypay-green-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Module Progress</h3>
            <div className="space-y-4">
              <Progress value={progressPercentage} />
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">{completedLessons}/{module.lessons.length} lessons</span>
                <span className="text-gray-600">{progressPercentage}% complete</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span>{module.duration} total</span>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Lessons</h3>
            <div className="space-y-2">
              {module.lessons.map((lesson, index) => (
                <div
                  key={lesson.id}
                  onClick={() => setSelectedLesson(index)}
                  className={`p-3 rounded-lg cursor-pointer transition-colors ${
                    selectedLesson === index 
                      ? 'bg-easypay-green text-white' 
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {lesson.completed ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      getTypeIcon(lesson.type)
                    )}
                    <div className="flex-1">
                      <div className="font-medium">{lesson.title}</div>
                      <div className={`text-xs ${
                        selectedLesson === index ? 'text-white/80' : 'text-gray-500'
                      }`}>
                        {lesson.duration}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Module Quiz</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Questions:</span>
                <span>{module.quiz.questions}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Passing Score:</span>
                <span>{module.quiz.passingScore}%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Time Limit:</span>
                <span>{module.quiz.timeLimit}</span>
              </div>
              <button 
                onClick={() => router.push(`/modules/${moduleId}/quiz`)}
                className="w-full mt-4 bg-easypay-green text-white py-2 rounded-lg hover:bg-easypay-green-dark transition-colors"
              >
                Take Quiz
              </button>
            </div>
          </Card>

          {progressPercentage === 100 && (
            <Card className="bg-green-50 border-green-200">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-green-600" />
                <div>
                  <h3 className="font-semibold text-green-800">Module Complete!</h3>
                  <p className="text-sm text-green-600">You&apos;ve earned your certificate</p>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}