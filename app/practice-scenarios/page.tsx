'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/Card'
import { useEBucks } from '@/lib/eBucks'
import { EBucksDisplay } from '@/components/ui/eBucksIcon'
import { 
  Smartphone, 
  CreditCard, 
  CheckCircle, 
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  User,
  DollarSign,
  FileText,
  Shield,
  Monitor,
  Building,
  Clock,
  Car,
  Home,
  ChevronRight,
  Play,
  Award,
  Target
} from 'lucide-react'
import { ltoCustomerScenarios, ltoApplicationProcess } from '@/data/ltoApplicationScenarios'
import { conversationalScenarios, ConversationalScenario } from '@/data/conversationalScenarios'

export default function PracticeScenariosPage() {
  const { awardBucks, completeDailyChallenge } = useEBucks()
  const [selectedScenario, setSelectedScenario] = useState<any>(null)
  const [currentStep, setCurrentStep] = useState(0)
  const [completedScenarios, setCompletedScenarios] = useState<string[]>([])
  const [showSuccess, setShowSuccess] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'furniture' | 'automotive'>('all')
  const [practiceMode, setPracticeMode] = useState<'step-by-step' | 'conversation'>('step-by-step')
  const [selectedConversation, setSelectedConversation] = useState<ConversationalScenario | null>(null)
  const [conversationStep, setConversationStep] = useState(0)
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null)
  const [conversationHistory, setConversationHistory] = useState<Array<{step: number, choice?: string, feedback?: string}>>([])

  const handleStartScenario = (scenario: any) => {
    setSelectedScenario(scenario)
    setCurrentStep(0)
  }

  const handleStartConversation = (conversation: ConversationalScenario) => {
    setSelectedConversation(conversation)
    setConversationStep(0)
    setConversationHistory([])
    setSelectedChoice(null)
  }

  const handleConversationChoice = (choiceId: string) => {
    if (!selectedConversation || selectedChoice) return
    
    const currentConvStep = selectedConversation.conversation[conversationStep]
    const choice = currentConvStep.choices?.find(c => c.id === choiceId)
    
    if (choice) {
      setSelectedChoice(choiceId)
      
      // Update conversation history
      setConversationHistory(prev => [...prev, {
        step: conversationStep,
        choice: choiceId,
        feedback: choice.feedback
      }])
      
      // Move to next step after showing feedback
      setTimeout(() => {
        setConversationStep(choice.nextStep)
        setSelectedChoice(null)
      }, 3000)
    }
  }

  const handleConversationNext = () => {
    if (!selectedConversation) return
    
    const currentConvStep = selectedConversation.conversation[conversationStep]
    
    if (currentConvStep.nextStep !== undefined) {
      setConversationStep(currentConvStep.nextStep)
      // Scroll to top when moving to next step
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (conversationStep < selectedConversation.conversation.length - 1) {
      setConversationStep(conversationStep + 1)
      // Scroll to top when moving to next step
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      // Complete conversation scenario
      if (!completedScenarios.includes(selectedConversation.id)) {
        awardBucks(
          selectedConversation.reward,
          `Completed conversational scenario: ${selectedConversation.title}`,
          undefined,
          'conversation'
        )
        setCompletedScenarios([...completedScenarios, selectedConversation.id])
        setShowSuccess(true)
        setTimeout(() => {
          setShowSuccess(false)
          setSelectedConversation(null)
          setConversationStep(0)
          setConversationHistory([])
        }, 3000)
      }
    }
  }

  const handleConversationPrevious = () => {
    if (conversationStep > 0) {
      setConversationStep(conversationStep - 1)
      setSelectedChoice(null)
      // Remove last history entry if going back
      setConversationHistory(prev => prev.filter(h => h.step < conversationStep))
      // Scroll to top when going to previous step
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleNextStep = () => {
    if (selectedScenario && currentStep < ltoApplicationProcess.length - 1) {
      setCurrentStep(currentStep + 1)
      // Scroll to top when moving to next step
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (selectedScenario) {
      // Complete scenario
      if (!completedScenarios.includes(selectedScenario.id)) {
        awardBucks(
          selectedScenario.reward, 
          `Completed ${selectedScenario.title} scenario`,
          undefined,
          'scenario'
        )
        setCompletedScenarios([...completedScenarios, selectedScenario.id])
        
        // Check if this completes a daily challenge
        if (completedScenarios.length + 1 >= 3) {
          completeDailyChallenge(
            'practice-perfect',
            40,
            'Completed 3 application scenarios'
          )
        }
        
        setShowSuccess(true)
        setTimeout(() => {
          setShowSuccess(false)
          setSelectedScenario(null)
          setCurrentStep(0)
        }, 3000)
      }
    }
  }

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      // Scroll to top when going to previous step
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const difficultyColors = {
    beginner: 'text-green-600 bg-green-50 border-green-200',
    intermediate: 'text-yellow-600 bg-yellow-50 border-yellow-200',
    advanced: 'text-red-600 bg-red-50 border-red-200'
  }

  // Group scenarios by category - now focused on process types
  const furnitureScenarios = ltoCustomerScenarios.filter(s => 
    s.customerProfile.itemDescription?.toLowerCase().includes('bed') || 
    s.customerProfile.itemDescription?.toLowerCase().includes('computer') ||
    s.customerProfile.itemDescription?.toLowerCase().includes('scooter')
  )
  
  const automotiveScenarios = ltoCustomerScenarios.filter(s => 
    s.customerProfile.itemDescription?.toLowerCase().includes('transmission') ||
    s.customerProfile.itemDescription?.toLowerCase().includes('repair') ||
    s.customerProfile.itemDescription?.toLowerCase().includes('tire') ||
    s.customerProfile.itemDescription?.toLowerCase().includes('engine') ||
    s.customerProfile.itemDescription?.toLowerCase().includes('brake') ||
    s.customerProfile.itemDescription?.toLowerCase().includes('fuel') ||
    s.customerProfile.itemDescription?.toLowerCase().includes('ac') ||
    s.customerProfile.itemDescription?.toLowerCase().includes('electrical')
  )

  const getFilteredScenarios = () => {
    switch(selectedCategory) {
      case 'furniture': return furnitureScenarios
      case 'automotive': return automotiveScenarios
      default: return ltoCustomerScenarios
    }
  }

  // Conversational scenario interface
  if (selectedConversation && !showSuccess) {
    const currentConvStep = selectedConversation.conversation[conversationStep]
    const progress = ((conversationStep + 1) / selectedConversation.conversation.length) * 100
    const choice = selectedChoice ? currentConvStep.choices?.find(c => c.id === selectedChoice) : null

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Fixed Header */}
        <div className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setSelectedConversation(null)}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Scenarios
                </button>
                <div className="h-6 w-px bg-gray-300" />
                <h1 className="text-xl font-semibold text-gray-900">{selectedConversation.title}</h1>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>Step {conversationStep + 1} of {selectedConversation.conversation.length}</span>
                  <div className="w-24 bg-gray-200 rounded-full h-1.5">
                    <div 
                      className="bg-teal-500 h-1.5 rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
                <EBucksDisplay amount={selectedConversation.reward} size="small" />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Customer Profile Sidebar */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-24">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-teal-600" />
                  Customer Profile
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600">Customer</p>
                    <p className="font-medium">{selectedConversation.customerProfile.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Credit Score</p>
                    <p className="font-medium">{selectedConversation.customerProfile.creditScore}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Income</p>
                    <p className="font-medium">{selectedConversation.customerProfile.income}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Purchase Amount</p>
                    <p className="font-medium text-teal-600">{selectedConversation.customerProfile.purchaseAmount}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Item</p>
                    <p className="font-medium text-sm">{selectedConversation.customerProfile.itemDescription}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Personality</p>
                    <p className="text-sm text-gray-700">{selectedConversation.customerProfile.personality}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Concerns</p>
                    <ul className="text-xs text-gray-700 space-y-1">
                      {selectedConversation.customerProfile.concerns.map((concern, index) => (
                        <li key={index}>• {concern}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </div>

            {/* Main Conversation Area */}
            <div className="lg:col-span-3">
              <Card className="p-8 min-h-[600px]">
                {/* Speaker Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-xl ${
                      currentConvStep.speaker === 'merchant' ? 'bg-blue-100' : 
                      currentConvStep.speaker === 'customer' ? 'bg-green-100' : 
                      currentConvStep.speaker === 'narrator' ? 'bg-purple-100' : 'bg-gray-100'
                    }`}>
                      {currentConvStep.speaker === 'merchant' ? <Building className="w-6 h-6 text-blue-600" /> :
                       currentConvStep.speaker === 'customer' ? <User className="w-6 h-6 text-green-600" /> :
                       currentConvStep.speaker === 'narrator' ? <FileText className="w-6 h-6 text-purple-600" /> :
                       <Monitor className="w-6 h-6 text-gray-600" />}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 capitalize">{currentConvStep.speaker}</h2>
                      {currentConvStep.context && (
                        <p className="text-sm text-gray-500">{currentConvStep.context}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Dialogue */}
                <div className="mb-8">
                  <div className={`p-6 rounded-xl border-l-4 ${
                    currentConvStep.speaker === 'merchant' ? 'bg-blue-50 border-blue-500' :
                    currentConvStep.speaker === 'customer' ? 'bg-green-50 border-green-500' :
                    currentConvStep.speaker === 'narrator' ? 'bg-purple-50 border-purple-500' :
                    'bg-gray-50 border-gray-500'
                  }`}>
                    <p className="text-lg text-gray-800 leading-relaxed">
                      {currentConvStep.dialogue || 'Choose your response:'}
                    </p>
                  </div>
                </div>

                {/* Multiple Choice Options */}
                {currentConvStep.choices && !selectedChoice && (
                  <div className="mb-8">
                    <h4 className="font-semibold text-lg mb-4">How do you respond?</h4>
                    <div className="space-y-3">
                      {currentConvStep.choices.map((choice) => (
                        <button
                          key={choice.id}
                          onClick={() => handleConversationChoice(choice.id)}
                          className="w-full p-4 text-left bg-white border border-gray-200 rounded-xl hover:border-teal-300 hover:bg-teal-50 transition-all"
                        >
                          <p className="text-gray-800">{choice.text}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Choice Feedback */}
                {choice && selectedChoice && (
                  <div className="mb-8">
                    <div className={`p-6 rounded-xl ${
                      choice.isCorrect ? 'bg-green-50 border border-green-200' : 'bg-yellow-50 border border-yellow-200'
                    }`}>
                      <h4 className={`font-semibold mb-3 flex items-center gap-2 ${
                        choice.isCorrect ? 'text-green-800' : 'text-yellow-800'
                      }`}>
                        {choice.isCorrect ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                        Customer Response:
                      </h4>
                      <p className="text-gray-800 mb-4 italic">"{choice.response}"</p>
                      <div className={`p-3 rounded-lg ${
                        choice.isCorrect ? 'bg-green-100' : 'bg-yellow-100'
                      }`}>
                        <p className={`text-sm ${
                          choice.isCorrect ? 'text-green-800' : 'text-yellow-800'
                        }`}>
                          <strong>Feedback:</strong> {choice.feedback}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tips */}
                {currentConvStep.tips && (
                  <div className="mb-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
                    <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5" />
                      Pro Tips
                    </h4>
                    <ul className="space-y-2">
                      {currentConvStep.tips.map((tip, index) => (
                        <li key={index} className="text-blue-800 text-sm flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Application Action */}
                {currentConvStep.applicationAction && (
                  <div className="mb-8 bg-purple-50 border border-purple-200 rounded-xl p-6">
                    <h4 className="font-semibold text-purple-900 mb-2 flex items-center gap-2">
                      <Monitor className="w-5 h-5" />
                      System Action
                    </h4>
                    <p className="text-purple-800 text-sm">{currentConvStep.applicationAction}</p>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex justify-between items-center pt-6 border-t border-gray-200">
                  <button
                    onClick={handleConversationPrevious}
                    disabled={conversationStep === 0}
                    className={`px-6 py-3 rounded-xl flex items-center gap-2 font-medium transition-all ${
                      conversationStep === 0 
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Previous
                  </button>
                  
                  <button
                    onClick={handleConversationNext}
                    disabled={currentConvStep.choices && !selectedChoice}
                    className={`px-8 py-3 rounded-xl flex items-center gap-2 font-medium transition-all shadow-lg hover:shadow-xl ${
                      currentConvStep.choices && !selectedChoice
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : conversationStep >= selectedConversation.conversation.length - 1
                        ? 'bg-green-500 text-white hover:bg-green-600'
                        : 'bg-teal-500 text-white hover:bg-teal-600'
                    }`}
                  >
                    {conversationStep >= selectedConversation.conversation.length - 1 ? (
                      <>
                        Complete Scenario
                        <CheckCircle className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        Continue
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (selectedScenario && !showSuccess) {
    const step = ltoApplicationProcess[currentStep]
    const progress = ((currentStep + 1) / ltoApplicationProcess.length) * 100

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Fixed Header */}
        <div className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setSelectedScenario(null)}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Scenarios
                </button>
                <div className="h-6 w-px bg-gray-300" />
                <h1 className="text-xl font-semibold text-gray-900">{selectedScenario.title}</h1>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>Step {currentStep + 1} of {ltoApplicationProcess.length}</span>
                  <div className="w-24 bg-gray-200 rounded-full h-1.5">
                    <div 
                      className="bg-teal-500 h-1.5 rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
                <EBucksDisplay amount={selectedScenario.reward} size="small" />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Customer Profile Sidebar */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-24">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-teal-600" />
                  Customer Profile
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600">Customer</p>
                    <p className="font-medium">{selectedScenario.customerProfile.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Credit Score</p>
                    <p className="font-medium">{selectedScenario.customerProfile.creditScore}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Income</p>
                    <p className="font-medium">{selectedScenario.customerProfile.income}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Purchase Amount</p>
                    <p className="font-medium text-teal-600">{selectedScenario.customerProfile.purchaseAmount}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Item</p>
                    <p className="font-medium text-sm">{selectedScenario.customerProfile.itemDescription}</p>
                  </div>
                  
                  {selectedScenario.specialNotes && (
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-600 mb-2">Special Notes</p>
                      <ul className="text-xs text-gray-700 space-y-1">
                        {selectedScenario.specialNotes.map((note: string, index: number) => (
                          <li key={index}>• {note}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <Card className="p-8 min-h-[600px]">
                {/* Step Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-xl ${
                      step.actor === 'merchant' ? 'bg-blue-100' : 
                      step.actor === 'customer' ? 'bg-green-100' : 'bg-purple-100'
                    }`}>
                      {step.actor === 'merchant' ? <Building className="w-6 h-6 text-blue-600" /> :
                       step.actor === 'customer' ? <User className="w-6 h-6 text-green-600" /> :
                       <Monitor className="w-6 h-6 text-purple-600" />}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{step.title}</h2>
                      <p className="text-teal-600 font-medium capitalize">{step.actor} Action Required</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">{step.description}</p>
                  {step.screenName && (
                    <p className="text-sm text-gray-500 mt-2">Screen: {step.screenName}</p>
                  )}
                </div>

                {/* Actions */}
                {step.actions.length > 0 && (
                  <div className="mb-8">
                    <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                      <Target className="w-5 h-5 text-teal-600" />
                      Actions to Take
                    </h4>
                    <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
                      <ul className="space-y-3">
                        {step.actions.map((action, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-medium mt-0.5">
                              {index + 1}
                            </div>
                            <span className="text-teal-900 leading-relaxed">{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Pro Tips */}
                  {step.tips.length > 0 && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                      <h4 className="font-semibold text-yellow-900 mb-3 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5" />
                        Pro Tips
                      </h4>
                      <ul className="space-y-2">
                        {step.tips.map((tip, index) => (
                          <li key={index} className="text-yellow-800 text-sm flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2 flex-shrink-0" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Important Notes */}
                  {step.importantNotes.length > 0 && (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                      <h4 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
                        <Shield className="w-5 h-5" />
                        Critical Information
                      </h4>
                      <ul className="space-y-2">
                        {step.importantNotes.map((note, index) => (
                          <li key={index} className="text-red-800 text-sm flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                            {note}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Common Mistakes */}
                {step.commonMistakes.length > 0 && (
                  <div className="mb-8 bg-orange-50 border border-orange-200 rounded-xl p-6">
                    <h4 className="font-semibold text-orange-900 mb-3">Common Mistakes to Avoid</h4>
                    <ul className="space-y-2">
                      {step.commonMistakes.map((mistake, index) => (
                        <li key={index} className="text-orange-800 text-sm flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0" />
                          {mistake}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Mock Interface */}
                <div className="mb-8 bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl p-12">
                  <div className="text-center text-gray-500">
                    <Monitor className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                    <p className="text-lg font-medium mb-2">{step.screenName || 'Application Interface'}</p>
                    <p className="text-sm">Interface mockup would appear here</p>
                    <p className="text-xs mt-2">Upload screenshots of actual interface to enhance training</p>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center pt-6 border-t border-gray-200">
                  <button
                    onClick={handlePreviousStep}
                    disabled={currentStep === 0}
                    className={`px-6 py-3 rounded-xl flex items-center gap-2 font-medium transition-all ${
                      currentStep === 0 
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Previous Step
                  </button>
                  
                  <button
                    onClick={handleNextStep}
                    className="px-8 py-3 bg-teal-500 text-white rounded-xl hover:bg-teal-600 flex items-center gap-2 font-medium transition-all shadow-lg hover:shadow-xl"
                  >
                    {currentStep < ltoApplicationProcess.length - 1 ? (
                      <>
                        Next Step 
                        <ArrowRight className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        Complete Scenario
                        <CheckCircle className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const filteredScenarios = getFilteredScenarios()

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Practice Scenarios</h1>
        <p className="text-gray-600 mt-2">
          Master customer interactions and application processes through realistic practice scenarios
        </p>
      </div>

      {/* Practice Mode Toggle */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
            <span className="text-sm font-medium text-gray-700">Practice Mode:</span>
            <div className="flex gap-2 bg-gray-100 rounded-lg p-1 w-full sm:w-auto">
              <button
                onClick={() => setPracticeMode('step-by-step')}
                className={`px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-all flex-1 sm:flex-none ${
                  practiceMode === 'step-by-step'
                    ? 'bg-white text-teal-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Step-by-Step Process
              </button>
              <button
                onClick={() => setPracticeMode('conversation')}
                className={`px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-all flex-1 sm:flex-none ${
                  practiceMode === 'conversation'
                    ? 'bg-white text-teal-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Conversational Practice
              </button>
            </div>
          </div>

          {practiceMode === 'step-by-step' && (
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
              <span className="text-sm font-medium text-gray-700">Filter by category:</span>
              <div className="flex flex-wrap gap-2">
                {[
                  { key: 'all', label: 'All Scenarios', icon: FileText },
                  { key: 'furniture', label: 'Furniture & Home', icon: Home },
                  { key: 'automotive', label: 'Automotive Repairs', icon: Car }
                ].map(({ key, label, icon: Icon }) => (
                  <button
                    key={key}
                    onClick={() => setSelectedCategory(key as any)}
                    className={`px-3 sm:px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-all ${
                      selectedCategory === key
                        ? 'bg-teal-500 text-white shadow-md'
                        : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{label}</span>
                    <span className="sm:hidden">{label.split(' ')[0]}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
        <Card className="p-3 sm:p-4">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3 text-center sm:text-left">
            <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <FileText className="w-5 h-5 text-teal-600" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-gray-900">{filteredScenarios.length}</p>
              <p className="text-xs sm:text-sm text-gray-600">Available Scenarios</p>
            </div>
          </div>
        </Card>
        <Card className="p-3 sm:p-4">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3 text-center sm:text-left">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-gray-900">{completedScenarios.length}</p>
              <p className="text-xs sm:text-sm text-gray-600">Completed</p>
            </div>
          </div>
        </Card>
        <Card className="p-3 sm:p-4">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3 text-center sm:text-left">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-gray-900">{ltoApplicationProcess.length}</p>
              <p className="text-xs sm:text-sm text-gray-600">Process Steps</p>
            </div>
          </div>
        </Card>
        <Card className="p-3 sm:p-4">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3 text-center sm:text-left">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Award className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-gray-900">
                {filteredScenarios.reduce((sum, s) => sum + s.reward, 0)}
              </p>
              <p className="text-xs sm:text-sm text-gray-600">Total eBucks Available</p>
            </div>
          </div>
        </Card>
      </div>


      {/* Scenarios Grid */}
      <div className="grid gap-6">
        {practiceMode === 'step-by-step' ? (
          // Step-by-step scenarios
          filteredScenarios.map((scenario) => {
            const isCompleted = completedScenarios.includes(scenario.id)
            const isAutomotive = automotiveScenarios.some(s => s.id === scenario.id)
            
            return (
              <Card 
                key={scenario.id}
                className={`p-4 sm:p-6 cursor-pointer transition-all hover:shadow-lg hover:scale-[1.01] ${
                  isCompleted ? 'bg-green-50 border-green-200' : 'hover:border-teal-200'
                }`}
                onClick={() => !isCompleted && handleStartScenario(scenario)}
              >
                <div className="flex flex-col sm:flex-row items-start justify-between">
                  <div className="flex-1 w-full">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
                      <div className={`p-2 rounded-lg ${isAutomotive ? 'bg-blue-100' : 'bg-purple-100'}`}>
                        {isAutomotive ? <Car className="w-5 h-5 text-blue-600" /> : <Home className="w-5 h-5 text-purple-600" />}
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold flex-1">{scenario.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                        difficultyColors[scenario.difficulty]
                      }`}>
                        {scenario.difficulty.toUpperCase()}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{scenario.description}</p>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Customer</p>
                        <p className="font-medium">{scenario.customerProfile.name}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Credit Score</p>
                        <p className="font-medium">{scenario.customerProfile.creditScore}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Purchase Amount</p>
                        <p className="font-medium text-teal-600">{scenario.customerProfile.purchaseAmount}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Reward</p>
                        <EBucksDisplay amount={scenario.reward} size="small" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 ml-0 sm:ml-6 mt-4 sm:mt-0">
                    {isCompleted ? (
                      <div className="text-center">
                        <CheckCircle className="w-10 sm:w-12 h-10 sm:h-12 text-green-500 mx-auto mb-1 sm:mb-2" />
                        <span className="text-xs sm:text-sm text-green-600 font-medium">Completed</span>
                      </div>
                    ) : (
                      <button className="px-4 sm:px-6 py-2.5 sm:py-3 bg-teal-500 text-white rounded-xl hover:bg-teal-600 flex items-center gap-2 font-medium transition-all shadow-md hover:shadow-lg text-sm sm:text-base whitespace-nowrap">
                        <Play className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                        <span className="hidden sm:inline">Start Practice</span>
                        <span className="sm:hidden">Start</span>
                      </button>
                    )}
                  </div>
                </div>
              </Card>
            )
          })
        ) : (
          // Conversational scenarios
          conversationalScenarios.map((conversation) => {
            const isCompleted = completedScenarios.includes(conversation.id)
            
            return (
              <Card 
                key={conversation.id}
                className={`p-4 sm:p-6 cursor-pointer transition-all hover:shadow-lg hover:scale-[1.01] ${
                  isCompleted ? 'bg-green-50 border-green-200' : 'hover:border-teal-200'
                }`}
                onClick={() => !isCompleted && handleStartConversation(conversation)}
              >
                <div className="flex flex-col sm:flex-row items-start justify-between">
                  <div className="flex-1 w-full">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-indigo-100">
                        <User className="w-5 h-5 text-indigo-600" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold flex-1">{conversation.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                        difficultyColors[conversation.difficulty]
                      }`}>
                        {conversation.difficulty.toUpperCase()}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                        CONVERSATION
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{conversation.description}</p>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Customer</p>
                        <p className="font-medium">{conversation.customerProfile.name}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Credit Score</p>
                        <p className="font-medium">{conversation.customerProfile.creditScore}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Purchase Amount</p>
                        <p className="font-medium text-teal-600">{conversation.customerProfile.purchaseAmount}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Reward</p>
                        <EBucksDisplay amount={conversation.reward} size="small" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 ml-0 sm:ml-6 mt-4 sm:mt-0">
                    {isCompleted ? (
                      <div className="text-center">
                        <CheckCircle className="w-10 sm:w-12 h-10 sm:h-12 text-green-500 mx-auto mb-1 sm:mb-2" />
                        <span className="text-xs sm:text-sm text-green-600 font-medium">Completed</span>
                      </div>
                    ) : (
                      <button className="px-4 sm:px-6 py-2.5 sm:py-3 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 flex items-center gap-2 font-medium transition-all shadow-md hover:shadow-lg text-sm sm:text-base whitespace-nowrap">
                        <Play className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                        <span className="hidden sm:inline">Start Conversation</span>
                        <span className="sm:hidden">Start</span>
                      </button>
                    )}
                  </div>
                </div>
              </Card>
            )
          })
        )}
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md mx-auto text-center animate-bounce shadow-2xl border-2 border-green-500">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-2">Scenario Complete!</h2>
            <p className="text-gray-600 mb-6">Great job mastering the LTO application process!</p>
            <EBucksDisplay amount={selectedScenario?.reward || selectedConversation?.reward || 0} size="large" showAnimation />
          </div>
        </div>
      )}
    </div>
  )
}