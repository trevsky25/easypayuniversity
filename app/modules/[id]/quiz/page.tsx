'use client'

import { QuizComponent } from '@/components/quiz/QuizComponent'
import { allQuizzes } from '@/data/quizData'
import { useParams, useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'

const moduleNames: Record<string, string> = {
  '1': 'Welcome to EasyPay Finance',
  '2': 'How to Submit Applications', 
  '3': 'Establishing a Credit Culture',
  '4': 'Advanced Topics'
}

export default function QuizPage() {
  const params = useParams()
  const router = useRouter()
  const moduleId = params.id as string
  
  const quizData = allQuizzes[moduleId as keyof typeof allQuizzes]
  const moduleName = moduleNames[moduleId]

  if (!quizData || !moduleName) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Quiz not found</h1>
        <button 
          onClick={() => router.push('/modules')}
          className="text-easypay-green hover:underline"
        >
          Back to modules
        </button>
      </div>
    )
  }

  const handleQuizComplete = (score: number, passed: boolean, answers: any[]) => {
    console.log('Quiz completed:', { score, passed, answers })
    // In a real app, you would save this to a database or state management system
    
    // Show success message and potentially update progress
    if (passed) {
      // Update module completion status
      // Award points/certificates
      // Update user progress
    }
  }

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <div className="flex items-center gap-4">
        <button 
          onClick={() => router.push(`/modules/${moduleId}`)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Module
        </button>
      </div>

      {/* Quiz Component */}
      <QuizComponent
        moduleId={parseInt(moduleId)}
        moduleName={moduleName}
        questions={quizData.questions}
        timeLimit={quizData.timeLimit}
        passingScore={quizData.passingScore}
        onComplete={handleQuizComplete}
      />
    </div>
  )
}