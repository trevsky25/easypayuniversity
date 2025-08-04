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
  Award,
  Star,
  Trophy
} from 'lucide-react'
import React, { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import trainingModules from '@/data/modules'
import { useEBucks } from '@/lib/eBucks'
import { InteractiveContent } from '@/components/interactive/InteractiveContent'


export default function ModulePage() {
  const params = useParams()
  const router = useRouter()
  const moduleId = params.id as string
  
  // Add error handling for module lookup
  let module
  try {
    module = trainingModules.find(m => m.id === `module-${moduleId}`)
  } catch (error) {
    console.error('Error finding module:', error)
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900">Error loading module</h1>
        <button 
          onClick={() => window.location.href = '/modules'}
          className="mt-4 text-easypay-green hover:underline"
        >
          Back to modules
        </button>
      </div>
    )
  }
  
  const { awardEBucks } = useEBucks()
  
  const [selectedLesson, setSelectedLesson] = useState(0)
  const [showLessonContent, setShowLessonContent] = useState(false)
  
  // Reset lesson selection when module changes
  React.useEffect(() => {
    setSelectedLesson(0)
    setShowLessonContent(false)
  }, [moduleId])

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

  // Mock completion status for now
  const completedLessons = Math.floor(module.lessons.length * 0.6) // 60% completed for demo
  const progressPercentage = Math.round((completedLessons / module.lessons.length) * 100)
  
  // Use estimated time from module
  const duration = module.estimatedTime
  
  const handleLessonComplete = () => {
    try {
      if (currentLesson && currentLesson.title) {
        awardEBucks(25, `Completed lesson: "${currentLesson.title}"`)
        // In a real app, you'd update the lesson completion status
      }
    } catch (error) {
      console.error('Error completing lesson:', error)
    }
  }
  
  const getTypeIcon = (lesson: any) => {
    if (!lesson || !lesson.content || !Array.isArray(lesson.content)) {
      return <FileText className="w-4 h-4" />
    }
    try {
      const hasInteractive = lesson.content.some((c: any) => c && c.type === 'interactive')
      if (hasInteractive) return <PlayCircle className="w-4 h-4" />
      return <FileText className="w-4 h-4" />
    } catch (error) {
      return <FileText className="w-4 h-4" />
    }
  }

  // Ensure selectedLesson is within bounds
  const safeSelectedLesson = Math.max(0, Math.min(selectedLesson, module.lessons.length - 1))
  const currentLesson = module.lessons[safeSelectedLesson]
  
  if (!currentLesson) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900">Lesson not found</h1>
        <button 
          onClick={() => router.push('/modules')}
          className="mt-4 text-easypay-green hover:underline"
        >
          Back to modules
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <button 
          onClick={() => {
            try {
              router.push('/modules')
            } catch (error) {
              window.location.href = '/modules'
            }
          }}
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
          <Card className="min-h-96">
            {!showLessonContent ? (
              <div className="flex items-center justify-center h-96 bg-gray-50">
                <div className="text-center">
                  {getTypeIcon(currentLesson)}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">{currentLesson.title}</h3>
                  <p className="text-gray-600 mb-4">Duration: {currentLesson.duration}</p>
                  <button 
                    onClick={() => setShowLessonContent(true)}
                    className="bg-easypay-green text-white px-6 py-3 rounded-lg hover:bg-easypay-green-dark transition-colors"
                  >
                    {currentLesson.type === 'video' ? 'Play Video' : 
                     currentLesson.type === 'interactive' ? 'Start Interactive' : 'Read Content'}
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">{currentLesson.title}</h3>
                  <button 
                    onClick={() => setShowLessonContent(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>
                </div>
                
                <div className="prose max-w-none">
                  {currentLesson.content && currentLesson.content.length > 0 ? (
                    <div className="space-y-6">
                      {currentLesson.content.map((section, index) => (
                        <div key={index}>
                          {section.type === 'interactive' ? (
                            <InteractiveContent 
                              type={section.interactiveType || 'knowledge-quiz'} 
                              data={section}
                              onComplete={() => handleLessonComplete()}
                            />
                          ) : (
                            <div className={`
                              ${section.type === 'example' ? 'bg-blue-50 border-l-4 border-blue-400 p-4' :
                                section.type === 'tip' ? 'bg-green-50 border-l-4 border-green-400 p-4' :
                                section.type === 'warning' ? 'bg-yellow-50 border-l-4 border-yellow-400 p-4' :
                                ''}
                            `}>
                              {section.title && (
                                <h4 className="font-semibold text-gray-900 mb-2">{section.title}</h4>
                              )}
                              <div className="whitespace-pre-line text-gray-700">{section.content}</div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 text-gray-500">
                      <p>Lesson content would be displayed here.</p>
                      <p className="mt-2">This is a preview of the lesson structure.</p>
                    </div>
                  )}
                </div>
                
                {currentLesson.keyTakeaways && currentLesson.keyTakeaways.length > 0 && (
                  <div className="mt-8 p-4 bg-emerald-50 rounded-lg">
                    <h4 className="font-semibold text-emerald-900 mb-3">Key Takeaways</h4>
                    <div className="space-y-2">
                      {currentLesson.keyTakeaways.map((takeaway, index) => (
                        <div key={index} className="flex items-start gap-2 text-emerald-800">
                          <Star className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{takeaway}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex justify-between mt-8 pt-6 border-t">
                  <button 
                    onClick={() => setShowLessonContent(false)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800"
                  >
                    ← Back to Overview
                  </button>
                  <button 
                    onClick={handleLessonComplete}
                    className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
                  >
                    <Trophy className="w-4 h-4" />
                    Mark Complete (+25 eBucks)
                  </button>
                </div>
              </div>
            )}
          </Card>

          <div className="flex justify-between mt-6">
            <button 
              onClick={() => {
                setSelectedLesson(Math.max(0, selectedLesson - 1))
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              disabled={selectedLesson === 0}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </button>
            
            <button 
              onClick={() => {
                setSelectedLesson(Math.min(module.lessons.length - 1, selectedLesson + 1))
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
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
                <span>{duration} total</span>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Lessons</h3>
            <div className="space-y-2">
              {module.lessons.map((lesson, index) => (
                <div
                  key={lesson.id}
                  onClick={() => {
                    setSelectedLesson(index)
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  className={`p-3 rounded-lg cursor-pointer transition-colors ${
                    selectedLesson === index 
                      ? 'bg-easypay-green text-white' 
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {index < completedLessons ? (
                      <CheckCircle className={`w-5 h-5 ${
                        selectedLesson === index ? 'text-white' : 'text-green-500'
                      }`} />
                    ) : (
                      <div className={selectedLesson === index ? 'text-white' : 'text-gray-400'}>
                        {getTypeIcon(lesson)}
                      </div>
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
                <span>{module.quiz.questions.length}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Passing Score:</span>
                <span>{module.quiz.passingScore}%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">eBucks Reward:</span>
                <span className="text-easypay-green font-semibold">{module.ebucksReward}</span>
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