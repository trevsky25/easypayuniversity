'use client'

import { useState, useEffect } from 'react'

export interface eBucksState {
  balance: number
  transactions: Transaction[]
  totalEarned: number
  totalSpent: number
  dailyChallengesCompleted: string[]
  lastLoginDate: string | null
  loginStreak: number
  lastWheelSpinDate: string | null
  wheelSpinsToday: number
}

export interface Transaction {
  id: string
  type: 'earned' | 'spent'
  amount: number
  description: string
  moduleId?: number
  timestamp: Date
  category?: 'module' | 'daily' | 'challenge' | 'review' | 'scenario' | 'streak' | 'reward'
}

export interface GiftCardRedemption {
  id: string
  bucksSpent: number
  giftCardValue: number
  status: 'pending' | 'processed' | 'delivered'
  timestamp: Date
}

export interface DailyChallenge {
  id: string
  title: string
  description: string
  reward: number
  category: string
  difficulty: 'easy' | 'medium' | 'hard'
  action?: () => void
}

export interface WheelSlot {
  id: number
  label: string
  value: number
  type: 'win' | 'blank' | 'lose'
  color: string
  probability: number
}

class EBucksManager {
  private static instance: EBucksManager
  private listeners: (() => void)[] = []

  private constructor() {
    if (typeof window !== 'undefined') {
      this.checkDailyLogin()
    }
  }

  static getInstance(): EBucksManager {
    if (!EBucksManager.instance) {
      EBucksManager.instance = new EBucksManager()
    }
    return EBucksManager.instance
  }

  getState(): eBucksState {
    if (typeof window === 'undefined') {
      return {
        balance: 0,
        transactions: [],
        totalEarned: 0,
        totalSpent: 0,
        dailyChallengesCompleted: [],
        lastLoginDate: null,
        loginStreak: 0,
        lastWheelSpinDate: null,
        wheelSpinsToday: 0
      }
    }

    const stored = localStorage.getItem('ebucks')
    if (stored) {
      const data = JSON.parse(stored)
      return {
        ...data,
        transactions: data.transactions.map((t: { timestamp: string }) => ({
          ...t,
          timestamp: new Date(t.timestamp)
        }))
      }
    }

    return {
      balance: 0,
      transactions: [],
      totalEarned: 0,
      totalSpent: 0,
      dailyChallengesCompleted: [],
      lastLoginDate: null,
      loginStreak: 0,
      lastWheelSpinDate: null,
      wheelSpinsToday: 0
    }
  }

  private saveState(state: eBucksState) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('ebucks', JSON.stringify(state))
      this.notifyListeners()
    }
  }

  private notifyListeners() {
    this.listeners.forEach(listener => listener())
  }

  subscribe(listener: () => void) {
    this.listeners.push(listener)
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener)
    }
  }

  private checkDailyLogin() {
    const today = new Date().toDateString()
    const state = this.getState()
    
    if (state.lastLoginDate !== today) {
      const yesterday = new Date()
      yesterday.setDate(yesterday.getDate() - 1)
      
      let newStreak = 1
      if (state.lastLoginDate === yesterday.toDateString()) {
        newStreak = state.loginStreak + 1
      }
      
      // Award daily login bonus
      const streakMultiplier = Math.min(Math.floor(newStreak / 7) + 1, 3)
      const loginBonus = 10 * streakMultiplier
      
      this.awardBucks(
        loginBonus, 
        `Daily login bonus (${newStreak} day streak)`,
        undefined,
        'streak'
      )
      
      // Update login date and streak
      const updatedState = this.getState()
      this.saveState({
        ...updatedState,
        lastLoginDate: today,
        loginStreak: newStreak
      })
    }
  }

  awardBucks(amount: number, description: string, moduleId?: number, category?: Transaction['category']): void {
    const currentState = this.getState()
    const transaction: Transaction = {
      id: `earn_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      type: 'earned',
      amount,
      description,
      moduleId,
      timestamp: new Date(),
      category: category || 'module'
    }

    const newState: eBucksState = {
      ...currentState,
      balance: currentState.balance + amount,
      transactions: [transaction, ...currentState.transactions],
      totalEarned: currentState.totalEarned + amount
    }

    this.saveState(newState)
  }

  spendBucks(amount: number, description: string): boolean {
    const currentState = this.getState()
    
    if (currentState.balance < amount) {
      return false
    }

    const transaction: Transaction = {
      id: `spend_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      type: 'spent',
      amount,
      description,
      timestamp: new Date(),
      category: 'reward'
    }

    const newState: eBucksState = {
      ...currentState,
      balance: currentState.balance - amount,
      transactions: [transaction, ...currentState.transactions],
      totalSpent: currentState.totalSpent + amount
    }

    this.saveState(newState)
    return true
  }

  completeDailyChallenge(challengeId: string, reward: number, description: string): boolean {
    const today = new Date().toDateString()
    const state = this.getState()
    const challengeKey = `${today}-${challengeId}`
    
    if (state.dailyChallengesCompleted.includes(challengeKey)) {
      return false // Already completed
    }

    this.awardBucks(reward, description, undefined, 'challenge')
    
    const updatedState = this.getState()
    this.saveState({
      ...updatedState,
      dailyChallengesCompleted: [...updatedState.dailyChallengesCompleted, challengeKey]
    })
    
    return true
  }

  getTodaysChallengesCompleted(): string[] {
    const today = new Date().toDateString()
    const state = this.getState()
    return state.dailyChallengesCompleted
      .filter(id => id.startsWith(today))
      .map(id => id.split('-').slice(1).join('-'))
  }

  resetChallengeCompletion(challengeId: string): void {
    const today = new Date().toDateString()
    const state = this.getState()
    const challengeKey = `${today}-${challengeId}`
    
    const updatedCompletions = state.dailyChallengesCompleted.filter(id => id !== challengeKey)
    
    this.saveState({
      ...state,
      dailyChallengesCompleted: updatedCompletions
    })
  }

  private static wheelSlots: WheelSlot[] = [
    // Mixed up arrangement for better visual variety
    { id: 0, label: '25 eBucks', value: 25, type: 'win', color: '#95E1D3', probability: 0.12 },
    { id: 1, label: 'Try Again!', value: 0, type: 'blank', color: '#E8E8E8', probability: 0.08 },
    { id: 2, label: '100 eBucks', value: 100, type: 'win', color: '#4ECDC4', probability: 0.08 },
    { id: 3, label: '5 eBucks', value: 5, type: 'win', color: '#95E1D3', probability: 0.08 },
    { id: 4, label: '200 eBucks!', value: 200, type: 'win', color: '#FF6B35', probability: 0.05 },
    { id: 5, label: '15 eBucks', value: 15, type: 'win', color: '#95E1D3', probability: 0.08 },
    { id: 6, label: 'Almost!', value: 0, type: 'blank', color: '#E8E8E8', probability: 0.07 },
    { id: 7, label: '50 eBucks', value: 50, type: 'win', color: '#4ECDC4', probability: 0.09 },
    { id: 8, label: '10 eBucks', value: 10, type: 'win', color: '#95E1D3', probability: 0.08 },
    { id: 9, label: '500 eBucks!', value: 500, type: 'win', color: '#FFD700', probability: 0.02 },
    { id: 10, label: '20 eBucks', value: 20, type: 'win', color: '#95E1D3', probability: 0.10 },
    { id: 11, label: 'So Close!', value: 0, type: 'blank', color: '#E8E8E8', probability: 0.05 },
    { id: 12, label: '75 eBucks', value: 75, type: 'win', color: '#4ECDC4', probability: 0.08 },
    { id: 13, label: '8 eBucks', value: 8, type: 'win', color: '#95E1D3', probability: 0.05 },
    { id: 14, label: '250 eBucks!', value: 250, type: 'win', color: '#FF6B35', probability: 0.03 },
    { id: 15, label: '12 eBucks', value: 12, type: 'win', color: '#95E1D3', probability: 0.05 },
    { id: 16, label: 'Better Luck!', value: 0, type: 'blank', color: '#E8E8E8', probability: 0.06 },
    { id: 17, label: '40 eBucks', value: 40, type: 'win', color: '#4ECDC4', probability: 0.07 },
    { id: 18, label: '30 eBucks', value: 30, type: 'win', color: '#95E1D3', probability: 0.06 },
    { id: 19, label: 'Next Time!', value: 0, type: 'blank', color: '#E8E8E8', probability: 0.05 }
  ]

  getWheelSlots(): WheelSlot[] {
    return EBucksManager.wheelSlots
  }

  canSpinWheelToday(): boolean {
    const today = new Date().toDateString()
    const state = this.getState()
    return state.lastWheelSpinDate !== today
  }

  spinWheel(): WheelSlot {
    const slots = this.getWheelSlots()
    const random = Math.random()
    let cumulativeProbability = 0
    
    for (const slot of slots) {
      cumulativeProbability += slot.probability
      if (random <= cumulativeProbability) {
        const state = this.getState()
        const today = new Date().toDateString()
        
        // Update balance based on result
        if (slot.value > 0) {
          this.awardBucks(slot.value, `Won ${slot.value} eBucks from wheel spin!`, undefined, 'challenge')
        }
        // No negative outcomes anymore - only wins or blanks
        
        // Update spin tracking
        this.saveState({
          ...this.getState(),
          lastWheelSpinDate: today,
          wheelSpinsToday: state.wheelSpinsToday + 1
        })
        
        return slot
      }
    }
    
    // Fallback to first slot if something goes wrong
    return slots[0]
  }

  resetWheelForToday(): void {
    const state = this.getState()
    this.saveState({
      ...state,
      lastWheelSpinDate: null,
      wheelSpinsToday: 0
    })
  }

  canAffordGiftCard(bucksRequired: number): boolean {
    return this.getState().balance >= bucksRequired
  }

  getModuleCompletionStatus(): Record<number, boolean> {
    if (typeof window === 'undefined') return {}
    
    const stored = localStorage.getItem('module-completions')
    return stored ? JSON.parse(stored) : {}
  }

  markModuleCompleted(moduleId: number): void {
    if (typeof window === 'undefined') return

    const completions = this.getModuleCompletionStatus()
    
    if (!completions[moduleId]) {
      completions[moduleId] = true
      localStorage.setItem('module-completions', JSON.stringify(completions))
      
      this.awardBucks(100, `Completed Training Module ${moduleId}`, moduleId, 'module')
    }
  }

  completeGoogleReview(): boolean {
    const state = this.getState()
    const hasReviewed = state.transactions.some(
      t => t.description.includes('Google review')
    )
    
    if (!hasReviewed) {
      this.awardBucks(150, 'Left Google review testimonial', undefined, 'review')
      return true
    }
    return false
  }

  getGiftCardOptions() {
    return [
      {
        id: 'amazon-5',
        name: '$5 Amazon Gift Card',
        value: 5,
        bucksRequired: 750,
        description: 'Redeem 750 eBucks for a $5 Amazon gift card'
      },
      {
        id: 'amazon-10',
        name: '$10 Amazon Gift Card',
        value: 10,
        bucksRequired: 1400,
        description: 'Redeem 1,400 eBucks for a $10 Amazon gift card (7% bonus value)'
      },
      {
        id: 'amazon-25',
        name: '$25 Amazon Gift Card',
        value: 25,
        bucksRequired: 3000,
        description: 'Redeem 3,000 eBucks for a $25 Amazon gift card (20% bonus value)'
      }
    ]
  }

  getDailyChallenges(): DailyChallenge[] {
    const today = new Date()
    const dayOfWeek = today.getDay()
    const completedToday = this.getTodaysChallengesCompleted()
    
    // Rotate challenges based on day of week
    const allChallenges: DailyChallenge[] = [
      {
        id: 'quiz-master',
        title: 'Quiz Master',
        description: 'Complete any module quiz with 80% or higher',
        reward: 25,
        category: 'learning',
        difficulty: 'easy'
      },
      {
        id: 'speed-demon',
        title: 'Speed Demon',
        description: 'Complete a quiz in under 5 minutes',
        reward: 30,
        category: 'performance',
        difficulty: 'medium'
      },
      {
        id: 'helping-hand',
        title: 'Helping Hand',
        description: 'Answer a question in the support forum',
        reward: 50,
        category: 'community',
        difficulty: 'medium'
      },
      {
        id: 'practice-perfect',
        title: 'Practice Makes Perfect',
        description: 'Complete 3 application scenarios',
        reward: 40,
        category: 'practice',
        difficulty: 'medium'
      },
      {
        id: 'knowledge-refresh',
        title: 'Knowledge Refresh',
        description: 'Review any completed module for 10 minutes',
        reward: 20,
        category: 'review',
        difficulty: 'easy'
      },
      {
        id: 'streak-keeper',
        title: 'Streak Keeper',
        description: 'Maintain a 7-day login streak',
        reward: 100,
        category: 'engagement',
        difficulty: 'hard'
      },
      {
        id: 'scenario-star',
        title: 'Scenario Star',
        description: 'Complete a complex financing scenario perfectly',
        reward: 45,
        category: 'practice',
        difficulty: 'hard'
      },
      {
        id: 'calculator-wizard',
        title: 'Calculator Wizard',
        description: 'Use the financing calculator to compare 5 different scenarios',
        reward: 35,
        category: 'tools',
        difficulty: 'easy'
      },
      {
        id: 'conversation-champion',
        title: 'Conversation Champion',
        description: 'Complete 2 conversational practice scenarios with perfect responses',
        reward: 55,
        category: 'practice',
        difficulty: 'hard'
      },
      {
        id: 'faq-explorer',
        title: 'FAQ Explorer',
        description: 'Visit the support center and read at least 10 FAQs',
        reward: 15,
        category: 'learning',
        difficulty: 'easy'
      },
      {
        id: 'automotive-expert',
        title: 'Automotive Expert',
        description: 'Complete all automotive repair scenarios in practice mode',
        reward: 60,
        category: 'practice',
        difficulty: 'hard'
      },
      {
        id: 'achievement-hunter',
        title: 'Achievement Hunter',
        description: 'Earn any 2 new achievement badges today',
        reward: 50,
        category: 'performance',
        difficulty: 'medium'
      },
      {
        id: 'early-bird',
        title: 'Early Bird',
        description: 'Complete a training module before 9 AM',
        reward: 30,
        category: 'engagement',
        difficulty: 'easy'
      },
      {
        id: 'night-owl',
        title: 'Night Owl',
        description: 'Complete a training activity after 8 PM',
        reward: 30,
        category: 'engagement',
        difficulty: 'easy'
      },
      {
        id: 'perfect-week',
        title: 'Perfect Week',
        description: 'Complete all daily challenges for 5 consecutive days',
        reward: 150,
        category: 'engagement',
        difficulty: 'hard'
      },
      {
        id: 'module-marathon',
        title: 'Module Marathon',
        description: 'Complete 2 full training modules in one day',
        reward: 80,
        category: 'learning',
        difficulty: 'hard'
      },
      {
        id: 'objection-handler',
        title: 'Objection Handler',
        description: 'Practice handling 10 customer objections successfully',
        reward: 45,
        category: 'practice',
        difficulty: 'medium'
      },
      {
        id: 'comparison-pro',
        title: 'Comparison Pro',
        description: 'Use the state coverage quiz to learn about EasyPay geographic availability',
        reward: 25,
        category: 'tools',
        difficulty: 'easy'
      },
      {
        id: 'credit-culture-builder',
        title: 'Credit Culture Builder',
        description: 'Complete the Credit Culture Builder interactive activity',
        reward: 35,
        category: 'learning',
        difficulty: 'medium'
      },
      {
        id: 'referral-rockstar',
        title: 'Referral Rockstar',
        description: 'Refer a business to EasyPay Finance',
        reward: 1000,
        category: 'community',
        difficulty: 'medium'
      },
      {
        id: 'feedback-provider',
        title: 'Feedback Provider',
        description: 'Submit feedback or suggestions for platform improvement',
        reward: 40,
        category: 'community',
        difficulty: 'easy'
      }
    ]
    
    // Select 4 challenges for today with better distribution
    // Use a more complex rotation to ensure variety across the expanded pool
    // Add randomization to ensure new challenges show up
    const seed = dayOfWeek + today.getDate() // Add date to rotation for more variety
    
    // Prioritize showing new challenges (indices 7-20) for better visibility
    const newChallengeOffset = 7 // Start from first new challenge
    const challengeIndices = [
      (seed * 2 + newChallengeOffset) % allChallenges.length,
      (seed * 3 + newChallengeOffset + 3) % allChallenges.length,
      (seed * 5 + newChallengeOffset + 6) % allChallenges.length,
      (seed * 7 + newChallengeOffset + 9) % allChallenges.length
    ]
    
    // Ensure we get unique challenges by filtering duplicates
    const uniqueIndices = [...new Set(challengeIndices)]
    
    // If we have duplicates, add more unique ones
    while (uniqueIndices.length < 4 && uniqueIndices.length < allChallenges.length) {
      const newIndex = (uniqueIndices[uniqueIndices.length - 1] + 5) % allChallenges.length
      if (!uniqueIndices.includes(newIndex)) {
        uniqueIndices.push(newIndex)
      }
    }
    
    const todaysChallenges = uniqueIndices
      .slice(0, 4)
      .map(index => allChallenges[index])
      .filter(Boolean) // Ensure no undefined challenges
    
    // If we somehow have no challenges, return first 4 from the pool
    if (todaysChallenges.length === 0) {
      return allChallenges.slice(0, 4)
    }
    
    // Always include referral-rockstar challenge, even if completed
    const referralChallenge = allChallenges.find(c => c.id === 'referral-rockstar')
    let finalChallenges = todaysChallenges.filter(
      challenge => !completedToday.includes(challenge.id)
    )
    
    // Always ensure referral-rockstar is included
    if (referralChallenge && !finalChallenges.some(c => c.id === 'referral-rockstar')) {
      // Replace the last challenge with referral challenge if not already present
      if (finalChallenges.length >= 4) {
        finalChallenges[finalChallenges.length - 1] = referralChallenge
      } else {
        finalChallenges.push(referralChallenge)
      }
    }
    
    // If all other challenges are completed, still return them but always keep referral
    if (finalChallenges.length === 0) {
      finalChallenges = todaysChallenges
      if (referralChallenge && !finalChallenges.some(c => c.id === 'referral-rockstar')) {
        finalChallenges[finalChallenges.length - 1] = referralChallenge
      }
    }
    
    return finalChallenges
  }
}

export const eBucksManager = EBucksManager.getInstance()

export function useEBucks() {
  const [mounted, setMounted] = useState(false)
  const [state, setState] = useState<eBucksState>(() => ({
    balance: 0,
    transactions: [],
    totalEarned: 0,
    totalSpent: 0,
    dailyChallengesCompleted: [],
    lastLoginDate: null,
    loginStreak: 0
  }))

  useEffect(() => {
    setMounted(true)
    setState(eBucksManager.getState())
    
    const unsubscribe = eBucksManager.subscribe(() => {
      setState(eBucksManager.getState())
    })

    return unsubscribe
  }, [])

  if (!mounted) {
    return {
      ...state,
      awardBucks: () => {},
      spendBucks: () => false,
      canAffordGiftCard: () => false,
      markModuleCompleted: () => {},
      getGiftCardOptions: () => [],
      completeDailyChallenge: () => false,
      getDailyChallenges: () => [],
      completeGoogleReview: () => false,
      getTodaysChallengesCompleted: () => [],
      resetChallengeCompletion: () => {},
      getWheelSlots: () => [],
      canSpinWheelToday: () => false,
      spinWheel: () => ({ id: 0, label: '', value: 0, type: 'blank' as const, color: '', probability: 0 }),
      resetWheelForToday: () => {}
    }
  }

  return {
    ...state,
    awardBucks: eBucksManager.awardBucks.bind(eBucksManager),
    spendBucks: eBucksManager.spendBucks.bind(eBucksManager),
    canAffordGiftCard: eBucksManager.canAffordGiftCard.bind(eBucksManager),
    markModuleCompleted: eBucksManager.markModuleCompleted.bind(eBucksManager),
    getGiftCardOptions: eBucksManager.getGiftCardOptions.bind(eBucksManager),
    completeDailyChallenge: eBucksManager.completeDailyChallenge.bind(eBucksManager),
    getDailyChallenges: eBucksManager.getDailyChallenges.bind(eBucksManager),
    completeGoogleReview: eBucksManager.completeGoogleReview.bind(eBucksManager),
    getTodaysChallengesCompleted: eBucksManager.getTodaysChallengesCompleted.bind(eBucksManager),
    resetChallengeCompletion: eBucksManager.resetChallengeCompletion.bind(eBucksManager),
    getWheelSlots: eBucksManager.getWheelSlots.bind(eBucksManager),
    canSpinWheelToday: eBucksManager.canSpinWheelToday.bind(eBucksManager),
    spinWheel: eBucksManager.spinWheel.bind(eBucksManager),
    resetWheelForToday: eBucksManager.resetWheelForToday.bind(eBucksManager)
  }
}