'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/Card'
import { Progress } from '@/components/ui/Progress'
import { easyPayBucksManager } from '@/lib/easypayBucks'
import { 
  CheckCircle, 
  XCircle, 
  Clock, 
  ArrowRight, 
  ArrowLeft,
  Trophy,
  AlertCircle,
  RotateCcw,
  Coins
} from 'lucide-react'

export interface QuizQuestion {
  id: number
  type: 'multiple-choice' | 'true-false' | 'text-input' | 'scenario'
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
  const [timeRemaining, setTimeRemaining] = useState(timeLimit * 60)
  const [quizStarted, setQuizStarted] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)

  const currentQuestion = questions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100

  const handleAnswerSelect = (answer: any) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestionIndex] = answer
    setAnswers(newAnswers)
  }

  const isCorrectAnswer = (questionIndex: number) => {
    const question = questions[questionIndex]
    const userAnswer = answers[questionIndex]
    
    if (question.type === 'multiple-choice' || question.type === 'true-false' || question.type === 'scenario') {
      return userAnswer === question.correctAnswer
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
    
    return answer !== null && answer !== undefined
  }

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setShowExplanation(false)
    } else {
      // Quiz complete
      const score = calculateScore()
      const passed = score >= passingScore
      
      // Award EasyPay Bucks for passing the quiz
      if (passed) {
        easyPayBucksManager.markModuleCompleted(moduleId)
      }
      
      setShowResults(true)
      onComplete(score, passed, answers)
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
      setShowExplanation(false)
    }
  }

  const startQuiz = () => {
    setQuizStarted(true)
    // Start timer if needed
  }

  const retakeQuiz = () => {
    setCurrentQuestionIndex(0)
    setAnswers(new Array(questions.length).fill(null))
    setShowResults(false)
    setShowExplanation(false)
    setTimeRemaining(timeLimit * 60)
  }

  // Quiz Start Screen
  if (!quizStarted) {
    return (
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
    )
  }

  // Quiz Results Screen
  if (showResults) {
    const score = calculateScore()
    const passed = score >= passingScore
    const correctAnswers = questions.filter((_, index) => isCorrectAnswer(index)).length

    return (
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
                <Coins className="w-5 h-5" />
                <span>+100 EasyPay Bucks Earned!</span>
              </div>
              <p className="text-sm text-easypay-green/80 text-center mt-1">
                Congratulations! You've earned 100 EasyPay Bucks for completing this module.
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
            <button className="bg-easypay-green text-white px-6 py-3 rounded-lg hover:bg-easypay-green-dark transition-colors">
              Download Certificate
            </button>
          )}
        </div>
      </Card>
    )
  }

  // Quiz Question Screen
  return (
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
  )
}