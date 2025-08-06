'use client'

import { QuizComponent } from '@/components/quiz/QuizComponent'
import trainingModules from '@/data/modules'
import { useParams, useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'

export default function QuizPage() {
  const params = useParams()
  const router = useRouter()
  const moduleId = params.id as string
  
  const module = trainingModules.find(m => m.id === `module-${moduleId}`)
  const quizData = module?.quiz
  const moduleName = module?.title

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

  // Transform module quiz data to QuizComponent format
  const transformedQuestions = quizData.questions.map((q, index) => ({
    id: index + 1,
    type: q.type as 'multiple-choice' | 'true-false' | 'text-input' | 'scenario',
    question: q.question,
    options: q.options,
    correctAnswer: q.type === 'select-multiple' 
      ? (q.options?.map((opt, i) => (q.correctAnswer as string[]).includes(opt) ? i : -1).filter(i => i !== -1) || [])
      : (q.options?.indexOf(q.correctAnswer as string) ?? 0),
    explanation: q.explanation,
    points: q.points || 10
  }));

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
        questions={transformedQuestions}
        timeLimit={quizData.timeLimit}
        passingScore={quizData.passingScore}
        onComplete={handleQuizComplete}
      />
    </div>
  )
}