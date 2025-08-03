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
        loginStreak: 0
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
      loginStreak: 0
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
      }
    ]
    
    // Select 3 challenges for today based on day of week
    const todaysChallenges = [
      allChallenges[(dayOfWeek * 2) % allChallenges.length],
      allChallenges[(dayOfWeek * 2 + 1) % allChallenges.length],
      allChallenges[(dayOfWeek * 3) % allChallenges.length]
    ]
    
    return todaysChallenges.filter(
      challenge => !completedToday.includes(challenge.id)
    )
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
      getTodaysChallengesCompleted: () => []
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
    getTodaysChallengesCompleted: eBucksManager.getTodaysChallengesCompleted.bind(eBucksManager)
  }
}