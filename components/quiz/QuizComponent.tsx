'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/Card'
import { Progress } from '@/components/ui/Progress'
import { eBucksManager } from '@/lib/eBucks'
import { EBucksDisplay } from '@/components/ui/eBucksIcon'
import { CertificateModal } from '@/components/ui/Certificate'
import { 
  CheckCircle, 
  XCircle, 
  Clock, 
  ArrowRight, 
  ArrowLeft,
  Trophy,
  AlertCircle,
  RotateCcw,
  Coins,
  Award,
  Star,
  Sparkles
} from 'lucide-react'

export interface QuizQuestion {
  id: number
  type: 'multiple-choice' | 'true-false' | 'text-input' | 'scenario' | 'select-multiple'
  question: string
  options?: string[]
  correctAnswer: number | number[] | string
  explanation: string
  points: number
  scenario?: string
}

interface QuizComponentProps {
  moduleId: number
  moduleName: string
  questions: QuizQuestion[]
  timeLimit?: number // in minutes
  passingScore: number
  onComplete: (score: number, passed: boolean, answers: any[]) => void
}

export function QuizComponent({ 
  moduleId, 
  moduleName, 
  questions, 
  timeLimit = 15, 
  passingScore = 80,
  onComplete 
}: QuizComponentProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<any[]>(new Array(questions.length).fill(null))
  const [showResults, setShowResults] = useState(false)
  const [showCertificate, setShowCertificate] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(timeLimit * 60)
  const [quizStarted, setQuizStarted] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)

  const currentQuestion = questions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100

  // Timer functionality
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (quizStarted && timeRemaining > 0 && !showResults) {
      interval = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            // Time's up! Auto-submit the quiz
            handleTimeUp()
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [quizStarted, showResults, timeRemaining])

  const handleTimeUp = () => {
    // Auto-submit quiz when time runs out
    const score = calculateScore()
    const passed = score >= passingScore
    
    if (passed) {
      eBucksManager.markModuleCompleted(moduleId)
    }
    
    setShowResults(true)
    onComplete(score, passed, answers)
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  const getTimeColor = () => {
    const percentage = (timeRemaining / (timeLimit * 60)) * 100
    if (percentage <= 10) return 'text-red-600'
    if (percentage <= 25) return 'text-yellow-600'
    return 'text-green-600'
  }

  const handleAnswerSelect = (answer: any) => {
    const newAnswers = [...answers]
    
    // Handle multi-select questions
    if (currentQuestion.type === 'select-multiple') {
      const currentSelections = newAnswers[currentQuestionIndex] || []
      if (currentSelections.includes(answer)) {
        // Remove if already selected
        newAnswers[currentQuestionIndex] = currentSelections.filter((a: any) => a !== answer)
      } else {
        // Add to selections
        newAnswers[currentQuestionIndex] = [...currentSelections, answer]
      }
    } else {
      // Single answer questions
      newAnswers[currentQuestionIndex] = answer
    }
    
    setAnswers(newAnswers)
    
    // Auto-show explanation for all quizzes (only for single-select questions)
    if (currentQuestion.type !== 'select-multiple') {
      setShowExplanation(true)
    }
  }

  const isCorrectAnswer = (questionIndex: number) => {
    const question = questions[questionIndex]
    const userAnswer = answers[questionIndex]
    
    if (question.type === 'multiple-choice' || question.type === 'true-false' || question.type === 'scenario') {
      return userAnswer === question.correctAnswer
    }
    
    if (question.type === 'select-multiple') {
      if (!userAnswer || !Array.isArray(userAnswer) || !Array.isArray(question.correctAnswer)) {
        return false
      }
      // Check if arrays are equal (same elements, same length)
      const sortedUser = [...userAnswer].sort()
      const sortedCorrect = [...(question.correctAnswer as number[])].sort()
      return sortedUser.length === sortedCorrect.length && 
             sortedUser.every((val, index) => val === sortedCorrect[index])
    }
    
    if (question.type === 'text-input') {
      // For text input, we'll consider it correct if they provided an answer
      // In a real system, this would need more sophisticated evaluation
      return userAnswer && userAnswer.trim().length > 10
    }
    
    return false
  }

  const calculateScore = () => {
    let correctAnswers = 0
    questions.forEach((_, index) => {
      if (isCorrectAnswer(index)) {
        correctAnswers++
      }
    })
    return Math.round((correctAnswers / questions.length) * 100)
  }

  const hasAnswer = (questionIndex: number) => {
    const answer = answers[questionIndex]
    const question = questions[questionIndex]
    
    if (question.type === 'text-input') {
      return answer && typeof answer === 'string' && answer.trim().length > 0
    }
    
    if (question.type === 'select-multiple') {
      return answer && Array.isArray(answer) && answer.length > 0
    }
    
    return answer !== null && answer !== undefined
  }

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setShowExplanation(false)
      // Scroll to top when moving to next question
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      // Quiz complete
      const score = calculateScore()
      const passed = score >= passingScore
      
      // Award eBucks for passing the quiz
      if (passed) {
        eBucksManager.markModuleCompleted(moduleId)
        
        // Check for daily challenges
        if (score >= 80) {
          eBucksManager.completeDailyChallenge('quiz-master', 25, 'Completed a quiz with 80% or higher')
        }
        if (timeLimit * 60 - timeRemaining < 300) { // Under 5 minutes
          eBucksManager.completeDailyChallenge('speed-demon', 30, 'Completed a quiz in under 5 minutes')
        }
      }
      
      setShowResults(true)
      onComplete(score, passed, answers)
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
      setShowExplanation(false)
      // Scroll to top when moving to previous question
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const startQuiz = () => {
    setQuizStarted(true)
    // Scroll to top when starting quiz
    window.scrollTo({ top: 0, behavior: 'smooth' })
    // Start timer if needed
  }

  const retakeQuiz = () => {
    setCurrentQuestionIndex(0)
    setAnswers(new Array(questions.length).fill(null))
    setShowResults(false)
    setShowExplanation(false)
    setShowCertificate(false)
    setTimeRemaining(timeLimit * 60)
    setQuizStarted(false) // Return to start screen
    // Scroll to top when retaking quiz
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Certificate Modal - At very top level, always rendered
  const certificateModal = showCertificate ? (
    <div 
      className="fixed inset-0 flex items-center justify-center p-4" 
      style={{ zIndex: 9999 }}
    >
      <div 
        className="bg-white rounded-xl max-w-4xl w-full max-h-[95vh] overflow-y-auto shadow-2xl border-2 border-easypay-green"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 pb-4 border-b border-gray-200 flex-shrink-0">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
            <div className="w-12 h-12 bg-easypay-green/10 rounded-full flex items-center justify-center">
              <Trophy className="w-6 h-6 text-easypay-green" />
            </div>
            Certificate Earned
          </h2>
          <button
            onClick={() => setShowCertificate(false)}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Certificate Content */}
        <div className="p-6">
          <div className="bg-gradient-to-br from-easypay-green/5 to-teal-50 border-2 border-easypay-green/20 rounded-lg p-6 relative">
            {/* Decorative corners */}
            <div className="absolute top-3 left-3 w-6 h-6 border-l-4 border-t-4 border-easypay-green/30 rounded-tl-lg"></div>
            <div className="absolute top-3 right-3 w-6 h-6 border-r-4 border-t-4 border-easypay-green/30 rounded-tr-lg"></div>
            <div className="absolute bottom-3 left-3 w-6 h-6 border-l-4 border-b-4 border-easypay-green/30 rounded-bl-lg"></div>
            <div className="absolute bottom-3 right-3 w-6 h-6 border-r-4 border-b-4 border-easypay-green/30 rounded-br-lg"></div>
            
            {/* Header */}
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-3 mb-3">
                <img 
                  src="/easypay-logo.svg" 
                  alt="EasyPay Finance" 
                  className="h-6 w-auto"
                />
                <Trophy className="w-6 h-6 text-easypay-green" />
              </div>
              <h1 className="text-2xl font-bold text-easypay-green mb-1">EasyPay University</h1>
              <h2 className="text-lg font-semibold text-gray-800">Certificate of Completion</h2>
            </div>

            {/* Certificate Content */}
            <div className="text-center space-y-4">
              <div>
                <p className="text-base text-gray-700 mb-2">This certifies that</p>
                <div className="bg-white rounded-lg p-3 border-2 border-dotted border-easypay-green/40 mx-4">
                  <p className="text-xl font-bold text-gray-900">Merchant Representative</p>
                </div>
                <p className="text-sm text-gray-600 mt-2">has successfully completed</p>
              </div>

              <div className="bg-white rounded-lg p-3 border-2 border-easypay-green shadow-sm">
                <p className="text-lg font-bold text-gray-900">{moduleName}</p>
              </div>

              {/* Score Badge */}
              <div className="bg-gradient-to-r from-easypay-green to-teal-600 text-white px-6 py-3 rounded-full inline-flex items-center gap-2 shadow-lg">
                <Star className="w-5 h-5 fill-current" />
                <span className="text-lg font-bold">Score: {calculateScore()}%</span>
                <Star className="w-5 h-5 fill-current" />
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 flex justify-between items-center text-xs">
              <div className="text-left">
                <p className="text-gray-600 font-medium">Completed</p>
                <p className="font-semibold text-gray-800">
                  {new Date().toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-10 h-10 bg-easypay-green/10 rounded-full flex items-center justify-center border border-easypay-green/20">
                  <img 
                    src="/easypay-logo.svg" 
                    alt="EasyPay Finance" 
                    className="h-5 w-auto"
                  />
                </div>
              </div>
              
              <div className="text-right">
                <p className="text-gray-600 font-medium">Certificate ID</p>
                <p className="font-mono text-xs text-gray-800 font-semibold">
                  EP-{moduleId}-{Date.now().toString(36).toUpperCase().slice(-6)}
                </p>
              </div>
            </div>

            {/* Bottom tagline */}
            <div className="text-center mt-4 pt-3 border-t border-easypay-green/20">
              <p className="text-xs text-gray-600 italic">
                "Easy Payment Solutions - No Perfect Credit Required"
              </p>
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-4 p-6 pt-4 border-t border-gray-200 justify-center">
          <button
            onClick={() => window.print()}
            className="bg-easypay-green text-white px-6 py-3 rounded-lg hover:bg-easypay-green-dark transition-colors font-medium flex items-center gap-2 shadow-lg hover:shadow-xl"
          >
            <Award className="w-5 h-5" />
            Save Certificate
          </button>
          <button
            onClick={() => setShowCertificate(false)}
            className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  ) : null

  // Quiz Start Screen
  if (!quizStarted) {
    return (
      <>
        {certificateModal}
        <Card className="max-w-2xl mx-auto text-center py-12">
        <div className="mb-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <img 
              src="/easypay-logo.svg" 
              alt="EasyPay Finance" 
              className="h-8 w-auto"
            />
            <div className="w-12 h-12 bg-easypay-green/10 rounded-full flex items-center justify-center">
              <Trophy className="w-6 h-6 text-easypay-green" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {moduleName} Quiz
          </h2>
          <p className="text-gray-600">
            Test your knowledge and earn your certificate
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-easypay-green">{questions.length}</div>
            <div className="text-sm text-gray-600">Questions</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-easypay-green">{timeLimit}</div>
            <div className="text-sm text-gray-600">Minutes</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-easypay-green">{passingScore}%</div>
            <div className="text-sm text-gray-600">Passing Score</div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
            <div className="text-left">
              <h3 className="font-semibold text-blue-900 mb-2">Quiz Instructions:</h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Read each question carefully before selecting your answer</li>
                <li>• You can navigate back to previous questions</li>
                <li>• You need {passingScore}% to pass and earn your certificate</li>
                <li>• You can retake the quiz if needed</li>
              </ul>
            </div>
          </div>
        </div>

        <button
          onClick={startQuiz}
          className="bg-easypay-green text-white px-8 py-3 rounded-lg font-medium hover:bg-easypay-green-dark transition-colors"
        >
          Start Quiz
        </button>
      </Card>
      </>
    )
  }

  // Quiz Results Screen
  if (showResults) {
    const score = calculateScore()
    const passed = score >= passingScore
    const correctAnswers = questions.filter((_, index) => isCorrectAnswer(index)).length

    return (
      <>
        {certificateModal}
        <Card className="max-w-2xl mx-auto text-center py-12">
        <div className="mb-8">
          <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
            passed ? 'bg-green-100' : 'bg-red-100'
          }`}>
            {passed ? (
              <Trophy className="w-8 h-8 text-green-600" />
            ) : (
              <XCircle className="w-8 h-8 text-red-600" />
            )}
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {passed ? 'Congratulations!' : 'Quiz Complete'}
          </h2>
          <p className="text-gray-600">
            {passed 
              ? 'You passed the quiz and earned your certificate!' 
              : `You need ${passingScore}% to pass. You can retake the quiz anytime.`
            }
          </p>
          {passed && (
            <div className="mt-4 bg-easypay-green/10 border border-easypay-green/20 rounded-lg p-4">
              <div className="flex items-center justify-center gap-2 text-easypay-green font-semibold">
                <EBucksDisplay amount={100} size="large" showAnimation />
                <span>Earned!</span>
              </div>
              <p className="text-sm text-easypay-green/80 text-center mt-1">
                Congratulations! You've earned 100 eBucks for completing this module.
              </p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <div className={`text-3xl font-bold ${passed ? 'text-green-600' : 'text-red-600'}`}>
              {score}%
            </div>
            <div className="text-sm text-gray-600">Your Score</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">{correctAnswers}/{questions.length}</div>
            <div className="text-sm text-gray-600">Correct Answers</div>
          </div>
          <div className="text-center">
            <div className={`text-3xl font-bold ${passed ? 'text-green-600' : 'text-red-600'}`}>
              {passed ? 'PASS' : 'RETRY'}
            </div>
            <div className="text-sm text-gray-600">Result</div>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <button
            onClick={retakeQuiz}
            className="flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Retake Quiz
          </button>
          {passed && (
            <button 
              onClick={() => setShowCertificate(true)}
              className="bg-easypay-green text-white px-6 py-3 rounded-lg hover:bg-easypay-green-dark transition-colors flex items-center gap-2"
            >
              <Award className="w-4 h-4" />
              View Certificate
            </button>
          )}
        </div>
      </Card>
      </>
    )
  }

  // Main Quiz Component Return
  return (
    <>
      {certificateModal}
      {/* Quiz Question Screen */}
      {!showResults && (
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Progress Header */}
          <Card>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">{moduleName} Quiz</h2>
                <p className="text-sm text-gray-600">
                  Question {currentQuestionIndex + 1} of {questions.length}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">
                  {Math.floor(timeRemaining / 60)}:{(timeRemaining % 60).toString().padStart(2, '0')}
                </span>
              </div>
            </div>
            <Progress value={progress} />
          </Card>

      {/* Question Card */}
      <Card className="p-8">
        {currentQuestion.scenario && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-blue-900 mb-2">Scenario:</h3>
            <p className="text-blue-800">{currentQuestion.scenario}</p>
          </div>
        )}

        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          {currentQuestion.question}
        </h3>

        {/* Multiple Choice */}
        {currentQuestion.type === 'multiple-choice' && currentQuestion.options && (
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  answers[currentQuestionIndex] === index
                    ? 'border-easypay-green bg-easypay-green/5'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    answers[currentQuestionIndex] === index
                      ? 'border-easypay-green bg-easypay-green'
                      : 'border-gray-300'
                  }`}>
                    {answers[currentQuestionIndex] === index && (
                      <div className="w-2 h-2 bg-white rounded-full" />
                    )}
                  </div>
                  <span className="font-medium text-gray-700">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  <span className="flex-1">{option}</span>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* True/False */}
        {currentQuestion.type === 'true-false' && (
          <div className="space-y-3">
            {['True', 'False'].map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  answers[currentQuestionIndex] === index
                    ? 'border-easypay-green bg-easypay-green/5'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    answers[currentQuestionIndex] === index
                      ? 'border-easypay-green bg-easypay-green'
                      : 'border-gray-300'
                  }`}>
                    {answers[currentQuestionIndex] === index && (
                      <div className="w-2 h-2 bg-white rounded-full" />
                    )}
                  </div>
                  <span className="flex-1 font-medium">{option}</span>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Scenario Questions with Multiple Choice */}
        {currentQuestion.type === 'scenario' && currentQuestion.options && (
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  answers[currentQuestionIndex] === index
                    ? 'border-easypay-green bg-easypay-green/5'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    answers[currentQuestionIndex] === index
                      ? 'border-easypay-green bg-easypay-green'
                      : 'border-gray-300'
                  }`}>
                    {answers[currentQuestionIndex] === index && (
                      <div className="w-2 h-2 bg-white rounded-full" />
                    )}
                  </div>
                  <span className="font-medium text-gray-700">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  <span className="flex-1">{option}</span>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Text Input for Open-Ended Questions */}
        {currentQuestion.type === 'text-input' && (
          <div className="space-y-4">
            <textarea
              value={answers[currentQuestionIndex] || ''}
              onChange={(e) => handleAnswerSelect(e.target.value)}
              placeholder="Enter your response here..."
              className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-easypay-green focus:outline-none resize-none"
              rows={4}
            />
            <p className="text-sm text-gray-500">
              Provide a thoughtful response demonstrating your understanding of the concepts.
            </p>
          </div>
        )}

        {/* Multi-Select Questions */}
        {currentQuestion.type === 'select-multiple' && currentQuestion.options && (
          <div className="space-y-3">
            <div className="text-sm text-gray-600 mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <strong>Instructions:</strong> Select all options that apply. You can select multiple answers.
            </div>
            {currentQuestion.options.map((option, index) => {
              const isSelected = (answers[currentQuestionIndex] || []).includes(index)
              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    isSelected
                      ? 'border-easypay-green bg-easypay-green/5'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 border-2 flex items-center justify-center ${
                      isSelected
                        ? 'border-easypay-green bg-easypay-green'
                        : 'border-gray-300'
                    }`}>
                      {isSelected && (
                        <CheckCircle className="w-3 h-3 text-white" />
                      )}
                    </div>
                    <span className="font-medium text-gray-700">
                      {String.fromCharCode(65 + index)}.
                    </span>
                    <span className="flex-1">{option}</span>
                  </div>
                </button>
              )
            })}
            <div className="mt-4 p-3 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-600">
                <strong>Selected:</strong> {(answers[currentQuestionIndex] || []).length} of {currentQuestion.options.length} options
              </div>
              <button
                onClick={() => setShowExplanation(true)}
                disabled={!hasAnswer(currentQuestionIndex)}
                className="mt-2 px-4 py-2 bg-easypay-green text-white rounded-lg hover:bg-easypay-green-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm"
              >
                Check My Answers
              </button>
            </div>
          </div>
        )}

        {/* Show Explanation */}
        {showExplanation && (
          <div className={`mt-6 p-4 rounded-lg border-2 ${
            isCorrectAnswer(currentQuestionIndex)
              ? 'border-green-200 bg-green-50'
              : 'border-red-200 bg-red-50'
          }`}>
            <div className="flex items-start gap-3">
              {isCorrectAnswer(currentQuestionIndex) ? (
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
              ) : (
                <XCircle className="w-5 h-5 text-red-600 mt-0.5" />
              )}
              <div>
                <h4 className={`font-semibold mb-2 ${
                  isCorrectAnswer(currentQuestionIndex) ? 'text-green-800' : 'text-red-800'
                }`}>
                  {isCorrectAnswer(currentQuestionIndex) ? 'Correct!' : 'Incorrect'}
                </h4>
                <p className={`text-sm ${
                  isCorrectAnswer(currentQuestionIndex) ? 'text-green-700' : 'text-red-700'
                }`}>
                  {currentQuestion.explanation}
                </p>
              </div>
            </div>
          </div>
        )}
      </Card>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
          className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Previous
        </button>

        <div className="flex gap-3">
          {hasAnswer(currentQuestionIndex) && !showExplanation && (
            <button
              onClick={() => setShowExplanation(true)}
              className="px-4 py-2 border border-easypay-green text-easypay-green rounded-lg hover:bg-easypay-green/5 transition-colors"
            >
              Show Explanation
            </button>
          )}
          
          <button
            onClick={handleNext}
            disabled={!hasAnswer(currentQuestionIndex)}
            className="flex items-center gap-2 px-6 py-2 bg-easypay-green text-white rounded-lg hover:bg-easypay-green-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {currentQuestionIndex === questions.length - 1 ? 'Finish Quiz' : 'Next'}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
      )}
    </>
  )
}