'use client'

import { Card } from '@/components/ui/Card'
import { Progress } from '@/components/ui/Progress'
import { Badge } from '@/components/ui/Badge'
import { 
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  PlayCircle,
  Users,
  Target,
  TrendingUp,
  Award,
  BookOpen,
  Video,
  FileText,
  MessageSquare,
  Lightbulb,
  Star,
  Clock
} from 'lucide-react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface LessonContent {
  id: number
  title: string
  type: 'video' | 'reading' | 'interactive' | 'checklist'
  duration: string
  completed: boolean
  content: {
    overview: string
    keyPoints: string[]
    actionItems?: string[]
    examples?: string[]
  }
}

const module3Lessons: LessonContent[] = [
  {
    id: 1,
    title: 'Credit Culture Foundation',
    type: 'video',
    duration: '15 min',
    completed: true,
    content: {
      overview: 'Understanding the four pillars of credit culture and how they work together to create a financing-focused organization.',
      keyPoints: [
        'Communication: Consistent messaging about financing benefits',
        'Training: Ongoing skill development for all team members',
        'Incentives: Reward systems that encourage financing discussions',
        'Leadership: Management commitment and modeling of behaviors'
      ],
      actionItems: [
        'Assess your current culture using the four pillars framework',
        'Identify gaps in communication, training, incentives, or leadership',
        'Create a baseline measurement of current financing penetration'
      ]
    }
  },
  {
    id: 2,
    title: 'Staff Training Framework',
    type: 'interactive',
    duration: '20 min',
    completed: true,
    content: {
      overview: 'Developing a comprehensive training program that builds confidence and consistency in financing conversations.',
      keyPoints: [
        'Onboarding process for new employees',
        'Regular skill refreshers and updates',
        'Role-playing and scenario practice',
        'Performance tracking and feedback'
      ],
      examples: [
        'New hire 30-day financing training curriculum',
        'Monthly team financing skill workshops',
        'Quarterly role-play scenarios with customer objections',
        'Individual coaching sessions for improvement areas'
      ],
      actionItems: [
        'Design your onboarding financing curriculum',
        'Schedule regular training refresher sessions',
        'Create role-play scenarios specific to your business'
      ]
    }
  },
  {
    id: 3,
    title: 'Customer Conversation Guide',
    type: 'reading',
    duration: '25 min',
    completed: false,
    content: {
      overview: 'Master the art of introducing financing naturally and effectively throughout the sales process.',
      keyPoints: [
        'Timing: When to introduce financing in the sales conversation',
        'Language: How to frame financing as a benefit, not a burden',
        'Objection handling: Addressing common customer concerns',
        'Closing techniques: Making financing the natural next step'
      ],
      examples: [
        '"This allows you to get what you need today while keeping your cash available for emergencies"',
        '"Many of our customers prefer financing because it helps them afford a better solution"',
        '"Let me show you how affordable this becomes with our financing options"',
        '"Would you like to see what your monthly investment would be?"'
      ],
      actionItems: [
        'Practice financing introduction scripts with your team',
        'Develop responses to your most common customer objections',
        'Create payment calculator demonstrations for various price points'
      ]
    }
  },
  {
    id: 4,
    title: 'Building Accountability Systems',
    type: 'interactive',
    duration: '15 min',
    completed: false,
    content: {
      overview: 'Creating systems that track, measure, and improve financing performance across your organization.',
      keyPoints: [
        'KPI tracking: Measuring financing penetration rates',
        'Individual performance metrics and coaching',
        'Team goals and recognition programs',
        'Regular review and improvement processes'
      ],
      actionItems: [
        'Set up tracking systems for financing metrics',
        'Establish individual and team performance goals',
        'Create recognition programs for financing success',
        'Schedule regular performance review meetings'
      ]
    }
  },
  {
    id: 5,
    title: 'Overcoming Common Objections',
    type: 'video',
    duration: '18 min',
    completed: false,
    content: {
      overview: 'Professional techniques for addressing customer hesitations and building confidence in financing solutions.',
      keyPoints: [
        'Understanding the psychology behind customer objections',
        'Reframing financing as a financial tool, not debt',
        'Building trust through transparency and education',
        'Closing with confidence after addressing concerns'
      ],
      examples: [
        'Objection: "I don\'t believe in financing" → "I understand. Many customers feel that way initially..."',
        'Objection: "The payments are too high" → "Let me show you some different options..."',
        'Objection: "I\'ll think about it" → "What specific concerns can I address for you today?"',
        'Objection: "My credit isn\'t good" → "We work with customers in all credit situations..."'
      ]
    }
  },
  {
    id: 6,
    title: 'Implementation Roadmap',
    type: 'checklist',
    duration: '12 min',
    completed: false,
    content: {
      overview: 'A step-by-step 90-day plan for implementing a strong credit culture in your organization.',
      keyPoints: [
        '30-Day Foundation: Team training and system setup',
        '60-Day Development: Process refinement and coaching',
        '90-Day Optimization: Performance analysis and improvements'
      ],
      actionItems: [
        'Week 1-2: Conduct initial team training and assessment',
        'Week 3-4: Implement tracking systems and set goals',
        'Month 2: Focus on individual coaching and skill development',
        'Month 3: Analyze results and optimize processes',
        'Ongoing: Regular reviews and continuous improvement'
      ]
    }
  }
]

export default function Module3Page() {
  const router = useRouter()
  const [selectedLesson, setSelectedLesson] = useState(0)
  const [expandedSections, setExpandedSections] = useState<number[]>([])

  const completedLessons = module3Lessons.filter(lesson => lesson.completed).length
  const progressPercentage = Math.round((completedLessons / module3Lessons.length) * 100)
  const currentLesson = module3Lessons[selectedLesson]

  const toggleSection = (sectionId: number) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    )
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video className="w-4 h-4" />
      case 'reading': return <FileText className="w-4 h-4" />
      case 'interactive': return <PlayCircle className="w-4 h-4" />
      case 'checklist': return <CheckCircle className="w-4 h-4" />
      default: return <BookOpen className="w-4 h-4" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'video': return 'text-blue-600'
      case 'reading': return 'text-green-600'
      case 'interactive': return 'text-purple-600'
      case 'checklist': return 'text-orange-600'
      default: return 'text-gray-600'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button 
          onClick={() => router.push('/modules')}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Establishing a Credit Culture</h1>
          <p className="text-gray-600 mt-1">Build credit awareness and implement best practices across your organization</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Module Overview */}
          <Card className="mb-6 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Module Overview</h2>
                <p className="text-gray-700 mb-4">
                  Creating a credit culture isn't about pressuring customers—it's about building an organization 
                  that consistently offers financing as a valuable service. This module teaches you to develop 
                  systems, train teams, and create accountability that makes financing conversations natural and effective.
                </p>
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span>90 minutes total</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-blue-600" />
                    <span>6 lessons</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-blue-600" />
                    <span>Certificate available</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Current Lesson Content */}
          <Card>
            <div className="border-b border-gray-200 pb-4 mb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-2 bg-gray-100 rounded-lg ${getTypeColor(currentLesson.type)}`}>
                  {getTypeIcon(currentLesson.type)}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{currentLesson.title}</h3>
                  <p className="text-sm text-gray-600">{currentLesson.duration} • {currentLesson.type}</p>
                </div>
                {currentLesson.completed && (
                  <CheckCircle className="w-6 h-6 text-green-600 ml-auto" />
                )}
              </div>
            </div>

            <div className="space-y-6">
              {/* Overview */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Overview</h4>
                <p className="text-gray-700 leading-relaxed">{currentLesson.content.overview}</p>
              </div>

              {/* Key Points */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  Key Learning Points
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {currentLesson.content.keyPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-6 h-6 bg-easypay-green text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-sm text-gray-700">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Examples */}
              {currentLesson.content.examples && (
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-blue-500" />
                    Examples & Scripts
                  </h4>
                  <div className="space-y-3">
                    {currentLesson.content.examples.map((example, index) => (
                      <div key={index} className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                        <p className="text-blue-800 italic">"{example}"</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Items */}
              {currentLesson.content.actionItems && (
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-yellow-500" />
                    Action Items
                  </h4>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <ul className="space-y-2">
                      {currentLesson.content.actionItems.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-5 h-5 border-2 border-yellow-400 rounded mt-0.5 flex-shrink-0" />
                          <span className="text-yellow-800">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Interactive Elements */}
              {currentLesson.type === 'interactive' && (
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 text-center">
                  <PlayCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-purple-900 mb-2">Interactive Exercise</h4>
                  <p className="text-purple-700 mb-4">
                    Practice scenarios and role-playing exercises to build your skills
                  </p>
                  <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                    Start Interactive Exercise
                  </button>
                </div>
              )}

              {/* Video Player */}
              {currentLesson.type === 'video' && (
                <div className="bg-gray-900 rounded-lg p-8 text-center">
                  <Video className="w-16 h-16 text-white mx-auto mb-4" />
                  <h4 className="text-white font-semibold mb-2">Video Content</h4>
                  <p className="text-gray-300 mb-4">High-quality video training content</p>
                  <button className="bg-easypay-green text-white px-6 py-3 rounded-lg hover:bg-easypay-green-dark transition-colors flex items-center gap-2 mx-auto">
                    <PlayCircle className="w-5 h-5" />
                    Play Video
                  </button>
                </div>
              )}
            </div>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between mt-6">
            <button 
              onClick={() => setSelectedLesson(Math.max(0, selectedLesson - 1))}
              disabled={selectedLesson === 0}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous Lesson
            </button>
            
            <button 
              onClick={() => setSelectedLesson(Math.min(module3Lessons.length - 1, selectedLesson + 1))}
              disabled={selectedLesson === module3Lessons.length - 1}
              className="flex items-center gap-2 px-4 py-2 bg-easypay-green text-white rounded-lg hover:bg-easypay-green-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next Lesson
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Progress Card */}
          <Card>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Module Progress</h3>
            <div className="space-y-4">
              <Progress value={progressPercentage} />
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">{completedLessons}/{module3Lessons.length} lessons</span>
                <span className="text-gray-600">{progressPercentage}% complete</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span>90 min total</span>
              </div>
            </div>
          </Card>

          {/* Lessons List */}
          <Card>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Lessons</h3>
            <div className="space-y-2">
              {module3Lessons.map((lesson, index) => (
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
                      <div className={`${getTypeColor(lesson.type)}`}>
                        {getTypeIcon(lesson.type)}
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

          {/* Quiz Card */}
          <Card>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Module Quiz</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Questions:</span>
                <span>12</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Passing Score:</span>
                <span>80%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Time Limit:</span>
                <span>18 min</span>
              </div>
              <button 
                onClick={() => router.push('/modules/3/quiz')}
                className="w-full mt-4 bg-easypay-green text-white py-2 rounded-lg hover:bg-easypay-green-dark transition-colors"
              >
                Take Quiz
              </button>
            </div>
          </Card>

          {/* Completion Status */}
          {progressPercentage === 100 && (
            <Card className="bg-green-50 border-green-200">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-green-600" />
                <div>
                  <h3 className="font-semibold text-green-800">Module Complete!</h3>
                  <p className="text-sm text-green-600">Ready to take the quiz</p>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}