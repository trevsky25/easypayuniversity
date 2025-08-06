'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/Card'
import { 
  Calculator, 
  DollarSign, 
  TrendingUp, 
  Users, 
  CheckCircle,
  Award,
  Target,
  Zap,
  Star,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Sparkles,
  ThumbsUp,
  Crown,
  Trophy
} from 'lucide-react'

interface InteractiveContentProps {
  type: string
  data: any
  onComplete?: () => void
}

export function InteractiveContent({ type, data, onComplete }: InteractiveContentProps) {
  switch (type) {
    case 'financing-calculator':
      return <FinancingCalculator data={data} onComplete={onComplete} />
    case 'program-comparison':
      return <ProgramComparison data={data} onComplete={onComplete} />
    case 'customer-matching':
      return <CustomerMatching data={data} onComplete={onComplete} />
    case 'objection-trainer':
      return <ObjectionTrainer data={data} onComplete={onComplete} />
    case 'application-simulator':
      return <ApplicationSimulator data={data} onComplete={onComplete} />
    case 'credit-culture-builder':
      return <CreditCultureBuilder data={data} onComplete={onComplete} />
    case 'knowledge-quiz':
      return <KnowledgeQuiz data={data} onComplete={onComplete} />
    case 'StateProductMatcher':
      return <StateProductMatcher data={data} onComplete={onComplete} />
    default:
      return <div>Interactive content loading...</div>
  }
}

// State-Specific Financing Calculator - COMPLIANCE COMPLIANT
function FinancingCalculator({ data, onComplete }: { data: any, onComplete?: () => void }) {
  const [purchaseAmount, setPurchaseAmount] = useState(1000)
  const [selectedState, setSelectedState] = useState('')
  const [results, setResults] = useState<any>(null)
  const [showCelebration, setShowCelebration] = useState(false)

  // State product mapping - CRITICAL COMPLIANCE
  const RIC_STATES = ['AK', 'AZ', 'CA', 'DE', 'ID', 'KS', 'KY', 'MO', 'NV', 'NH', 'NM', 'ND', 'OR', 'PA', 'SD', 'UT', 'VA', 'WA', 'WI']
  const LTO_STATES = ['FL', 'GA', 'TX']

  const getProductForState = (state: string) => {
    if (RIC_STATES.includes(state)) return 'RIC'
    if (LTO_STATES.includes(state)) return 'LTO'
    return null
  }

  const calculateFinancing = () => {
    const product = getProductForState(selectedState)
    if (!product) {
      setResults({ error: 'EasyPay Finance does not operate in this state' })
      return
    }

    let payment, term, total, program = product
    
    if (product === 'RIC') {
      // RIC calculation with proper terminology
      term = 12
      const financeCharge = purchaseAmount * 0.15
      total = purchaseAmount + financeCharge
      payment = Math.round(total / term)
    } else {
      // LTO calculation with proper terminology  
      term = 18
      const costOfRental = purchaseAmount * 0.8
      total = purchaseAmount + costOfRental
      payment = Math.round(total / term)
    }

    setResults({ 
      payment, 
      term, 
      total, 
      program,
      purchaseAmount,
      additionalCost: total - purchaseAmount,
      state: selectedState
    })
    setShowCelebration(true)
    setTimeout(() => setShowCelebration(false), 2000)
    onComplete?.()
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-4">
          <Calculator className="w-5 h-5 text-green-600" />
          <span className="font-semibold text-green-800">EasyPay State-Specific Calculator</span>
        </div>
        <p className="text-gray-600">Calculate payments for your state&apos;s available product!</p>
      </div>

      <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your State
              </label>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              >
                <option value="">Select your state</option>
                <optgroup label="RIC States (19 states)">
                  {RIC_STATES.map(state => (
                    <option key={state} value={state}>{state} - RIC Available</option>
                  ))}
                </optgroup>
                <optgroup label="LTO States (3 states)">
                  {LTO_STATES.map(state => (
                    <option key={state} value={state}>{state} - LTO Available</option>
                  ))}
                </optgroup>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Purchase Amount
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="range"
                  min="100"
                  max="5000"
                  step="50"
                  value={purchaseAmount}
                  onChange={(e) => setPurchaseAmount(parseInt(e.target.value))}
                  className="w-full mt-2"
                />
                <div className="text-center text-2xl font-bold text-green-600 mt-2">
                  ${purchaseAmount.toLocaleString()}
                </div>
              </div>
            </div>

            {selectedState && (
              <div className="bg-blue-50 rounded-lg p-3">
                <h4 className="font-semibold text-blue-800 mb-1">Available in {selectedState}:</h4>
                <p className="text-sm text-blue-700">
                  {getProductForState(selectedState) === 'RIC' ? 
                    'Retail Installment Contract (RIC) - Credit sales program' : 
                    'Lease-to-Own (LTO) - Rental-purchase program'}
                </p>
              </div>
            )}

            <button
              onClick={calculateFinancing}
              disabled={!selectedState}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:transform-none"
            >
              <Sparkles className="w-5 h-5" />
              Calculate Payment
            </button>
          </div>

          {results && (
            <div className={`space-y-4 transition-all duration-500 ${showCelebration ? 'animate-bounce' : ''}`}>
              {results.error ? (
                <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                  <h3 className="font-semibold text-red-800 mb-2">Service Not Available</h3>
                  <p className="text-red-700">{results.error}</p>
                </div>
              ) : (
                <div className="bg-white rounded-xl p-4 shadow-lg">
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-yellow-500" />
                    {results.program} Payment Results
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        {results.program === 'RIC' ? 'Monthly Payment:' : 'Lease Payment:'}
                      </span>
                      <span className="font-bold text-green-600">${results.payment}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Term:</span>
                      <span className="font-bold">{results.term} months</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        {results.program === 'RIC' ? 'Amount Financed:' : 'Cash Price:'}
                      </span>
                      <span className="font-bold">${results.purchaseAmount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total of Payments:</span>
                      <span className="font-bold">${results.total}</span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span className="text-gray-600">
                        {results.program === 'RIC' ? 'Finance Charges:' : 'Cost of Rental:'}
                      </span>
                      <span className="font-bold text-blue-600">${results.additionalCost}</span>
                    </div>
                  </div>
                  
                  {results.program === 'RIC' && (
                    <div className="mt-3 p-2 bg-yellow-50 rounded border border-yellow-200">
                      <p className="text-xs text-yellow-800">
                        <strong>90-Day Finance Charge Cap:</strong> If paid within 90 days, finance charges capped at $40.
                      </p>
                    </div>
                  )}
                  
                  {results.program === 'LTO' && (
                    <div className="mt-3 p-2 bg-purple-50 rounded border border-purple-200">
                      <p className="text-xs text-purple-800">
                        <strong>90-Day EPO:</strong> Cash Price + $39 processing fee + taxes if paid within 90 days.
                      </p>
                    </div>
                  )}
                </div>
              )}
              
              {showCelebration && !results.error && (
                <div className="text-center bg-yellow-100 rounded-lg p-3">
                  <div className="text-2xl">🎉</div>
                  <div className="text-sm font-semibold text-yellow-800">Great calculation!</div>
                </div>
              )}
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}

// Program Comparison Tool - Interactive Learning Component
function ProgramComparison({ data, onComplete }: { data: any, onComplete?: () => void }) {
  const [currentScenario, setCurrentScenario] = useState(0)
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)

  const scenarios = data?.scenarios || [
    {
      customer: 'Sarah - Credit Score 580, Needs furniture for new apartment',
      item: '$2,500 Living Room Set',
      options: ['RIC', 'LTO'],
      best: 'LTO',
      reason: 'LTO is perfect for credit-challenged customers like Sarah. Lower approval requirements and flexible payment options.'
    },
    {
      customer: 'Mike - Credit Score 720, Emergency car repair',
      item: '$1,800 Auto Repair',
      options: ['RIC', 'LTO'],
      best: 'RIC',
      reason: 'RIC offers immediate ownership and competitive rates for customers with good credit like Mike.'
    },
    {
      customer: 'Jennifer - Credit Score 650, Kitchen renovation',
      item: '$3,200 Kitchen Appliances',
      options: ['RIC', 'LTO'],
      best: 'RIC',
      reason: 'RIC provides traditional financing that works well for medium credit customers seeking larger purchases.'
    }
  ]

  const handleProgramSelection = (program: string) => {
    setSelectedProgram(program)
    setShowResult(true)
    if (program === scenarios[currentScenario].best) {
      setScore(score + 20)
    }
  }

  const nextScenario = () => {
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario(currentScenario + 1)
      setSelectedProgram(null)
      setShowResult(false)
    } else {
      onComplete?.()
    }
  }

  const currentCase = scenarios[currentScenario]

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-4">
          <TrendingUp className="w-5 h-5 text-green-600" />
          <span className="font-semibold text-green-800">Program Comparison Challenge</span>
        </div>
        <p className="text-gray-600">Choose the best EasyPay program for each customer scenario</p>
        <div className="flex items-center justify-center gap-4 mt-2">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500" />
            <span className="font-bold">Score: {score}</span>
          </div>
        </div>
      </div>

      <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-4 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-800">Scenario {currentScenario + 1}</h3>
              <div className="bg-green-100 px-3 py-1 rounded-full text-sm text-green-700">
                {currentScenario + 1} of {scenarios.length}
              </div>
            </div>
            
            <div className="space-y-3 mb-4">
              <div className="text-lg font-medium text-gray-800">{currentCase.customer}</div>
              <div className="text-gray-600">Purchase: {currentCase.item}</div>
            </div>
            
            <div className="text-sm text-gray-600 mb-4">Which EasyPay program would you recommend?</div>
            
            <div className="grid grid-cols-2 gap-3 mb-4">
              {currentCase.options.map((option: string) => (
                <button
                  key={option}
                  onClick={() => handleProgramSelection(option)}
                  disabled={showResult}
                  className={`p-3 text-center rounded-lg border-2 transition-all font-medium ${
                    selectedProgram === option
                      ? option === currentCase.best
                        ? 'border-green-500 bg-green-50 text-green-700'
                        : 'border-red-500 bg-red-50 text-red-700'
                      : 'border-gray-200 bg-white hover:border-green-300'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          
          {showResult && (
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <div className="flex items-start gap-3 mb-3">
                {selectedProgram === currentCase.best ? (
                  <>
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <div className="text-green-700 font-medium">Excellent choice! +20 points</div>
                  </>
                ) : (
                  <>
                    <Target className="w-5 h-5 text-orange-500 mt-1" />
                    <div className="text-orange-700 font-medium">Consider {currentCase.best} for this scenario</div>
                  </>
                )}
              </div>
              <p className="text-gray-700">{currentCase.reason}</p>
              
              {currentScenario < scenarios.length - 1 ? (
                <button
                  onClick={nextScenario}
                  className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
                >
                  Next Scenario <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <div className="mt-4 text-center">
                  <div className="text-lg font-bold text-green-600">Challenge Complete!</div>
                  <div className="text-sm text-gray-600">Final Score: {score} points</div>
                </div>
              )}
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}

// Customer Matching Game
function CustomerMatching({ data, onComplete }: { data: any, onComplete?: () => void }) {
  const [score, setScore] = useState(0)
  const [currentPair, setCurrentPair] = useState(0)
  const [selectedCustomer, setSelectedCustomer] = useState<string | null>(null)
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)

  const customers = [
    { id: 'sarah', name: 'Sarah', credit: 580, needs: 'furniture' },
    { id: 'mike', name: 'Mike', credit: 720, needs: 'auto-repair' },
    { id: 'jen', name: 'Jennifer', credit: 650, needs: 'appliances' }
  ]

  const products = [
    { id: 'furniture', name: 'Living Room Set', amount: 2500, best: 'LTO' },
    { id: 'auto-repair', name: 'Car Repair', amount: 1800, best: 'RIC' },
    { id: 'appliances', name: 'Kitchen Appliances', amount: 3200, best: 'RIC' }
  ]

  const checkMatch = () => {
    if (selectedCustomer && selectedProduct) {
      const customer = customers.find(c => c.id === selectedCustomer)
      const product = products.find(p => p.id === selectedProduct)
      
      if (customer && product && customer.needs === product.id) {
        setScore(score + 10)
        setShowResult(true)
        onComplete?.()
      } else {
        setShowResult(true)
      }
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-4">
          <Users className="w-5 h-5 text-green-600" />
          <span className="font-semibold text-green-800">Customer Matching Game</span>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500" />
            <span className="font-bold text-lg">Score: {score}</span>
          </div>
        </div>
      </div>

      <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Users className="w-5 h-5" />
              Customers
            </h3>
            <div className="space-y-3">
              {customers.map((customer) => (
                <div
                  key={customer.id}
                  onClick={() => setSelectedCustomer(customer.id)}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all transform hover:scale-105 ${
                    selectedCustomer === customer.id
                      ? 'border-green-500 bg-green-100'
                      : 'border-gray-200 bg-white hover:border-green-300'
                  }`}
                >
                  <div className="font-semibold">{customer.name}</div>
                  <div className="text-sm text-gray-600">Credit: {customer.credit}</div>
                  <div className="text-sm text-blue-600 capitalize">{customer.needs.replace('-', ' ')}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <DollarSign className="w-5 h-5" />
              Products
            </h3>
            <div className="space-y-3">
              {products.map((product) => (
                <div
                  key={product.id}
                  onClick={() => setSelectedProduct(product.id)}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all transform hover:scale-105 ${
                    selectedProduct === product.id
                      ? 'border-blue-500 bg-blue-100'
                      : 'border-gray-200 bg-white hover:border-blue-300'
                  }`}
                >
                  <div className="font-semibold">{product.name}</div>
                  <div className="text-sm text-gray-600">${product.amount.toLocaleString()}</div>
                  <div className="text-sm text-purple-600">Best: {product.best}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={checkMatch}
            disabled={!selectedCustomer || !selectedProduct || showResult}
            className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold disabled:opacity-50 hover:shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 mx-auto"
          >
            <Zap className="w-5 h-5" />
            Match Them!
          </button>
        </div>

        {showResult && (
          <div className="mt-6 bg-white rounded-xl p-4 shadow-lg text-center">
            {selectedCustomer && selectedProduct && 
             customers.find(c => c.id === selectedCustomer)?.needs === selectedProduct ? (
              <div className="text-green-600">
                <div className="text-4xl mb-2">🎉</div>
                <div className="font-semibold">Perfect Match! +10 Points</div>
              </div>
            ) : (
              <div className="text-orange-600">
                <div className="text-4xl mb-2">🤔</div>
                <div className="font-semibold">Not quite! Try again</div>
              </div>
            )}
          </div>
        )}
      </Card>
    </div>
  )
}

// Objection Trainer
function ObjectionTrainer({ data, onComplete }: { data: any, onComplete?: () => void }) {
  const [currentObjection, setCurrentObjection] = useState(0)
  const [selectedResponse, setSelectedResponse] = useState<string | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)

  const objections = [
    {
      objection: "I don't want to get into debt",
      responses: [
        { text: "This isn't debt, it's a smart way to spread payments", rating: 'good' },
        { text: "I understand your concern. Our financing helps you get what you need now while managing cash flow", rating: 'excellent' },
        { text: "Everyone uses financing these days", rating: 'poor' }
      ]
    },
    {
      objection: "The payments seem too high",
      responses: [
        { text: "We have different payment options to fit your budget", rating: 'excellent' },
        { text: "The payments are fair for what you're getting", rating: 'poor' },
        { text: "You can always return it if you can't afford it", rating: 'good' }
      ]
    }
  ]

  const handleResponse = (response: any) => {
    setSelectedResponse(response.text)
    setShowFeedback(true)
    if (response.rating === 'excellent') {
      setScore(score + 15)
      onComplete?.()
    } else if (response.rating === 'good') {
      setScore(score + 10)
    } else {
      setScore(score + 5)
    }
  }

  const nextObjection = () => {
    if (currentObjection < objections.length - 1) {
      setCurrentObjection(currentObjection + 1)
      setSelectedResponse(null)
      setShowFeedback(false)
      // Scroll to top when moving to next objection
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full mb-4">
          <ThumbsUp className="w-5 h-5 text-red-600" />
          <span className="font-semibold text-red-800">Objection Handler Training</span>
        </div>
        <div className="text-lg font-semibold">Score: {score} points</div>
      </div>

      <Card className="p-6 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-4 shadow-lg border-l-4 border-red-500">
            <h3 className="font-semibold text-gray-800 mb-2">Customer says:</h3>
            <p className="text-lg italic text-gray-700">"{objections[currentObjection].objection}"</p>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-gray-800">How do you respond?</h3>
            {objections[currentObjection].responses.map((response, index) => (
              <button
                key={index}
                onClick={() => handleResponse(response)}
                disabled={showFeedback}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all hover:scale-102 ${
                  selectedResponse === response.text
                    ? response.rating === 'excellent'
                      ? 'border-green-500 bg-green-50'
                      : response.rating === 'good'
                      ? 'border-yellow-500 bg-yellow-50'
                      : 'border-red-500 bg-red-50'
                    : 'border-gray-200 bg-white hover:border-blue-300'
                }`}
              >
                {response.text}
              </button>
            ))}
          </div>

          {showFeedback && selectedResponse && (
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                {objections[currentObjection].responses.find(r => r.text === selectedResponse)?.rating === 'excellent' ? (
                  <>
                    <Crown className="w-6 h-6 text-yellow-500" />
                    <span className="font-semibold text-green-700">Excellent Response! +15 points</span>
                  </>
                ) : objections[currentObjection].responses.find(r => r.text === selectedResponse)?.rating === 'good' ? (
                  <>
                    <Star className="w-6 h-6 text-blue-500" />
                    <span className="font-semibold text-blue-700">Good Response! +10 points</span>
                  </>
                ) : (
                  <>
                    <Target className="w-6 h-6 text-orange-500" />
                    <span className="font-semibold text-orange-700">Could be better! +5 points</span>
                  </>
                )}
              </div>
              
              {currentObjection < objections.length - 1 && (
                <button
                  onClick={nextObjection}
                  className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2"
                >
                  Next Objection <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}

// Application Simulator
function ApplicationSimulator({ data, onComplete }: { data: any, onComplete?: () => void }) {
  const [step, setStep] = useState(0)
  const [applicationData, setApplicationData] = useState<any>({})
  const [showResult, setShowResult] = useState(false)

  const steps = [
    { title: 'Customer Info', field: 'customerName' },
    { title: 'Purchase Amount', field: 'amount' },
    { title: 'Program Selection', field: 'program' },
    { title: 'Submit Application', field: 'submit' }
  ]

  const handleStepComplete = (data: any) => {
    setApplicationData({ ...applicationData, ...data })
    if (step < steps.length - 1) {
      setStep(step + 1)
      // Scroll to top when moving to next step
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      setShowResult(true)
      onComplete?.()
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-indigo-100 px-4 py-2 rounded-full mb-4">
          <Zap className="w-5 h-5 text-indigo-600" />
          <span className="font-semibold text-indigo-800">Application Simulator</span>
        </div>
        <div className="flex justify-center gap-2">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index <= step ? 'bg-indigo-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      <Card className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50">
        {!showResult ? (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-center">
              Step {step + 1}: {steps[step].title}
            </h3>
            
            {step === 0 && (
              <div className="text-center">
                <input
                  type="text"
                  placeholder="Customer Name"
                  className="w-full max-w-md px-4 py-3 border-2 border-gray-200 rounded-lg text-center text-lg"
                  onBlur={(e) => e.target.value && handleStepComplete({ customerName: e.target.value })}
                />
              </div>
            )}
            
            {step === 1 && (
              <div className="text-center space-y-4">
                <div className="text-2xl font-bold text-indigo-600">
                  ${applicationData.amount || 0}
                </div>
                <input
                  type="range"
                  min="100"
                  max="5000"
                  step="50"
                  className="w-full max-w-md"
                  onChange={(e) => setApplicationData({ ...applicationData, amount: parseInt(e.target.value) })}
                />
                <button
                  onClick={() => handleStepComplete({ amount: applicationData.amount })}
                  className="bg-indigo-600 text-white px-6 py-2 rounded-lg"
                >
                  Continue
                </button>
              </div>
            )}
            
            {step === 2 && (
              <div className="grid grid-cols-2 gap-4">
                {['RIC', 'LTO'].map((program) => (
                  <button
                    key={program}
                    onClick={() => handleStepComplete({ program })}
                    className="p-4 border-2 border-gray-200 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition-all"
                  >
                    <div className="font-semibold">{program}</div>
                  </button>
                ))}
              </div>
            )}
            
            {step === 3 && (
              <div className="text-center">
                <button
                  onClick={() => handleStepComplete({})}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105"
                >
                  Submit Application
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center space-y-4">
            <div className="text-6xl">🎉</div>
            <h3 className="text-2xl font-bold text-green-600">Application Approved!</h3>
            <div className="bg-white rounded-lg p-4 max-w-md mx-auto">
              <div className="space-y-2 text-left">
                <div className="flex justify-between">
                  <span>Customer:</span>
                  <span className="font-semibold">{applicationData.customerName}</span>
                </div>
                <div className="flex justify-between">
                  <span>Amount:</span>
                  <span className="font-semibold">${applicationData.amount}</span>
                </div>
                <div className="flex justify-between">
                  <span>Program:</span>
                  <span className="font-semibold">{applicationData.program}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </Card>
    </div>
  )
}

// Credit Culture Builder
function CreditCultureBuilder({ data, onComplete }: { data: any, onComplete?: () => void }) {
  const [selectedPillars, setSelectedPillars] = useState<string[]>([])
  const [showResult, setShowResult] = useState(false)

  const pillars = [
    { id: 'communication', name: 'Clear Communication', icon: '💬', description: 'Train staff to discuss financing naturally' },
    { id: 'training', name: 'Ongoing Training', icon: '📚', description: 'Regular skill development sessions' },
    { id: 'incentives', name: 'Performance Incentives', icon: '🎯', description: 'Reward successful financing conversations' },
    { id: 'leadership', name: 'Leadership Support', icon: '👑', description: 'Management commitment to credit culture' },
    { id: 'tools', name: 'Proper Tools', icon: '🛠️', description: 'Calculators and materials readily available' },
    { id: 'tracking', name: 'Progress Tracking', icon: '📊', description: 'Monitor and measure success metrics' }
  ]

  const togglePillar = (pillarId: string) => {
    if (selectedPillars.includes(pillarId)) {
      setSelectedPillars(selectedPillars.filter(id => id !== pillarId))
    } else {
      setSelectedPillars([...selectedPillars, pillarId])
    }
  }

  const buildCulture = () => {
    setShowResult(true)
    if (selectedPillars.length >= 4) {
      onComplete?.()
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full mb-4">
          <Award className="w-5 h-5 text-emerald-600" />
          <span className="font-semibold text-emerald-800">Credit Culture Builder</span>
        </div>
        <p className="text-gray-600">Select the pillars for a strong credit culture!</p>
      </div>

      <Card className="p-6 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              onClick={() => togglePillar(pillar.id)}
              className={`p-4 rounded-xl border-2 cursor-pointer transition-all transform hover:scale-105 ${
                selectedPillars.includes(pillar.id)
                  ? 'border-emerald-500 bg-emerald-100 shadow-lg'
                  : 'border-gray-200 bg-white hover:border-emerald-300'
              }`}
            >
              <div className="text-center">
                <div className="text-3xl mb-2">{pillar.icon}</div>
                <div className="font-semibold text-sm mb-1">{pillar.name}</div>
                <div className="text-xs text-gray-600">{pillar.description}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="mb-4">
            <span className="text-lg font-semibold">
              Selected: {selectedPillars.length} / {pillars.length}
            </span>
          </div>
          
          <button
            onClick={buildCulture}
            disabled={selectedPillars.length === 0}
            className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-3 rounded-lg font-semibold disabled:opacity-50 hover:shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 mx-auto"
          >
            <Trophy className="w-5 h-5" />
            Build Your Culture
          </button>
        </div>

        {showResult && (
          <div className="mt-6 bg-white rounded-xl p-4 shadow-lg text-center">
            {selectedPillars.length >= 4 ? (
              <div className="text-emerald-600">
                <div className="text-4xl mb-2">🏆</div>
                <div className="font-semibold text-lg">Excellent Foundation!</div>
                <div className="text-sm">You've selected {selectedPillars.length} pillars for a strong credit culture</div>
              </div>
            ) : (
              <div className="text-orange-600">
                <div className="text-4xl mb-2">🎯</div>
                <div className="font-semibold">Good start!</div>
                <div className="text-sm">Consider adding more pillars for an even stronger foundation</div>
              </div>
            )}
          </div>
        )}
      </Card>
    </div>
  )
}

// Knowledge Quiz
function KnowledgeQuiz({ data, onComplete }: { data: any, onComplete?: () => void }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const questions = data?.questions || [
    {
      question: "What's the maximum financing amount with EasyPay?",
      options: ["$3,000", "$5,000", "$7,500", "$10,000"],
      correct: "$5,000",
      explanation: "EasyPay Finance offers financing up to $5,000 per transaction."
    }
  ]

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer)
    setShowResult(true)
    if (answer === questions[currentQuestion].correct) {
      setScore(score + 1)
    }
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
      // Scroll to top when moving to next question
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      onComplete?.()
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full mb-4">
          <Trophy className="w-5 h-5 text-yellow-600" />
          <span className="font-semibold text-yellow-800">Knowledge Check</span>
        </div>
        <div className="text-lg">
          Question {currentQuestion + 1} of {questions.length} | Score: {score}/{questions.length}
        </div>
      </div>

      <Card className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-4 shadow-lg">
            <h3 className="text-lg font-semibold mb-4">{questions[currentQuestion].question}</h3>
            
            <div className="grid grid-cols-2 gap-3">
              {questions[currentQuestion].options.map((option: string) => (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  disabled={showResult}
                  className={`p-3 text-left rounded-lg border-2 transition-all ${
                    selectedAnswer === option
                      ? option === questions[currentQuestion].correct
                        ? 'border-green-500 bg-green-50 text-green-700'
                        : 'border-red-500 bg-red-50 text-red-700'
                      : 'border-gray-200 bg-white hover:border-yellow-300'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {showResult && (
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                {selectedAnswer === questions[currentQuestion].correct ? (
                  <>
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <span className="font-semibold text-green-700">Correct! 🎉</span>
                  </>
                ) : (
                  <>
                    <Target className="w-6 h-6 text-red-500" />
                    <span className="font-semibold text-red-700">Incorrect. Correct answer: {questions[currentQuestion].correct}</span>
                  </>
                )}
              </div>
              <p className="text-gray-700 mb-4">{questions[currentQuestion].explanation}</p>
              
              {currentQuestion < questions.length - 1 ? (
                <button
                  onClick={nextQuestion}
                  className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors flex items-center gap-2"
                >
                  Next Question <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">
                    Final Score: {score}/{questions.length}
                  </div>
                  <div className="text-sm text-gray-600 mt-2">
                    {score === questions.length ? "Perfect score! 🏆" : 
                     score >= questions.length * 0.8 ? "Great job! 🌟" : 
                     "Keep studying! 📚"}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}

// State-Product Matching Game - Interactive Learning Component
function StateProductMatcher({ data, onComplete }: { data: any, onComplete?: () => void }) {
  const [draggedState, setDraggedState] = useState<any>(null)
  const [droppedStates, setDroppedStates] = useState<{[key: string]: any[]}>({
    RIC: [],
    LTO: [],
    NONE: []
  })
  const [isCompleted, setIsCompleted] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)
  const [showCelebration, setShowCelebration] = useState(false)

  // Access the interaction data correctly
  const interactionData = data.interactionData || data
  const availableStates = interactionData.states?.filter((state: any) => 
    !Object.values(droppedStates).flat().find((s: any) => s.abbr === state.abbr)
  ) || []

  const handleDragStart = (e: React.DragEvent, state: any) => {
    setDraggedState(state)
    e.dataTransfer.effectAllowed = 'move'
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  }

  const handleDrop = (e: React.DragEvent, categoryId: string) => {
    e.preventDefault()
    if (draggedState) {
      setDroppedStates(prev => ({
        ...prev,
        [categoryId]: [...prev[categoryId], draggedState]
      }))
      setDraggedState(null)
    }
  }

  const removeState = (categoryId: string, stateToRemove: any) => {
    setDroppedStates(prev => ({
      ...prev,
      [categoryId]: prev[categoryId].filter(s => s.abbr !== stateToRemove.abbr)
    }))
  }

  const checkAnswers = () => {
    let correctCount = 0
    const totalStates = interactionData.states?.length || 0

    Object.entries(droppedStates).forEach(([category, states]: [string, any[]]) => {
      states.forEach(state => {
        if (state.correct === category) {
          correctCount++
        }
      })
    })

    setScore(correctCount)
    setShowResults(true)
    
    if (correctCount === totalStates) {
      setIsCompleted(true)
      setShowCelebration(true)
      if (onComplete) onComplete()
      
      // Award eBucks for completion
      if (typeof window !== 'undefined') {
        try {
          const currentEBucks = parseInt(localStorage.getItem('totalEBucks') || '0')
          localStorage.setItem('totalEBucks', (currentEBucks + (interactionData.completionReward || 50)).toString())
        } catch (e) {
          console.log('Could not update eBucks')
        }
      }
    }
  }

  const resetGame = () => {
    setDroppedStates({ RIC: [], LTO: [], NONE: [] })
    setShowResults(false)
    setIsCompleted(false)
    setShowCelebration(false)
    setScore(0)
    // Scroll to top when resetting the game
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const getCategoryColor = (color: string) => {
    const colors = {
      green: 'bg-green-50 border-green-200 text-green-800',
      teal: 'bg-teal-50 border-teal-200 text-teal-800',
      gray: 'bg-gray-50 border-gray-200 text-gray-800'
    }
    return colors[color as keyof typeof colors] || colors.gray
  }

  const allStatesPlaced = availableStates.length === 0

  return (
    <div className="w-full">
      <Card className="p-6">
        {showCelebration && (
          <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-lg text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Trophy className="w-6 h-6 text-yellow-600" />
              <Crown className="w-6 h-6 text-yellow-600" />
              <Trophy className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="text-lg font-bold text-green-800">Perfect Score!</div>
            <div className="text-sm text-green-600">+{interactionData.completionReward || 50} eBucks earned! 🪙</div>
          </div>
        )}

        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">State-Product Matching Challenge</h3>
          <p className="text-gray-600 mb-4">{interactionData.instructions}</p>
        </div>

        {/* Available States */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 mb-3">Available States ({availableStates.length})</h4>
          <div className="flex flex-wrap gap-2 min-h-[60px] p-3 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
            {availableStates.map((state: any) => (
              <div
                key={state.abbr}
                draggable
                onDragStart={(e) => handleDragStart(e, state)}
                className="px-3 py-2 bg-blue-500 text-white rounded-lg cursor-move hover:bg-blue-600 transition-colors shadow-sm"
                title={state.name}
              >
                {state.abbr}
              </div>
            ))}
          </div>
        </div>

        {/* Drop Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {(interactionData.categories || []).map((category: any) => (
            <div key={category.id}>
              <div
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, category.id)}
                className={`min-h-[120px] p-4 rounded-lg border-2 border-dashed ${getCategoryColor(category.color)}`}
              >
                <h5 className="font-semibold mb-1">{category.label}</h5>
                <p className="text-xs mb-3 opacity-75">{category.description}</p>
                
                <div className="flex flex-wrap gap-1">
                  {droppedStates[category.id].map((state: any) => (
                    <div
                      key={state.abbr}
                      className="px-2 py-1 bg-white rounded text-xs shadow-sm border flex items-center gap-1"
                    >
                      {state.abbr}
                      <button
                        onClick={() => removeState(category.id, state)}
                        className="text-red-500 hover:text-red-700 text-xs"
                        title="Remove"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
          <button
            onClick={resetGame}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </button>
          
          <div className="flex gap-3 items-center">
            {showResults && (
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                score === (interactionData.states?.length || 0) ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
              }`}>
                Score: {score}/{interactionData.states?.length || 0}
              </div>
            )}
            
            <button
              onClick={checkAnswers}
              disabled={!allStatesPlaced}
              className={`px-6 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                allStatesPlaced
                  ? 'bg-blue-500 hover:bg-blue-600 text-white shadow-sm'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <CheckCircle className="w-4 h-4" />
              Check Answers
            </button>
          </div>
        </div>

        {/* Results */}
        {showResults && (
          <div className="mt-6 p-4 border rounded-lg">
            {isCompleted ? (
              <div className="text-center">
                <div className="text-green-600 font-semibold mb-2">{interactionData.successMessage}</div>
                <div className="text-sm text-gray-600">
                  You've mastered EasyPay's state coverage! Remember: each state offers only ONE product type.
                </div>
              </div>
            ) : (
              <div className="text-center">
                <div className="text-yellow-600 font-semibold mb-2">{interactionData.failureMessage}</div>
                <div className="text-sm text-gray-600">
                  Review the incorrect placements and try again. Each state has exactly one correct category.
                </div>
              </div>
            )}
          </div>
        )}
      </Card>
    </div>
  )
}