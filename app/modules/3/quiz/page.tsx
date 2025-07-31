'use client'

import { QuizComponent } from '@/components/quiz/QuizComponent'
import { allQuizzes } from '@/data/quizData'
import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'

export default function Module3QuizPage() {
  const router = useRouter()
  const moduleId = '3'
  const moduleName = 'Establishing a Credit Culture'
  
  const quizData = allQuizzes[3]

  const handleQuizComplete = (score: number, passed: boolean, answers: any[]) => {
    console.log('Module 3 Quiz completed:', { score, passed, answers })
    // In a real app, you would save this to a database or state management system
    
    if (passed) {
      // Update module completion status
      // Award certificate for Module 3
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
        moduleId={3}
        moduleName={moduleName}
        questions={quizData.questions}
        timeLimit={quizData.timeLimit}
        passingScore={quizData.passingScore}
        onComplete={handleQuizComplete}
      />
    </div>
  )
}