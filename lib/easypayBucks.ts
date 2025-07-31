'use client'

export interface EasyPayBucksState {
  balance: number
  transactions: Transaction[]
  totalEarned: number
  totalSpent: number
}

export interface Transaction {
  id: string
  type: 'earned' | 'spent'
  amount: number
  description: string
  moduleId?: number
  timestamp: Date
}

export interface GiftCardRedemption {
  id: string
  bucksSpent: number
  giftCardValue: number
  status: 'pending' | 'processed' | 'delivered'
  timestamp: Date
}

class EasyPayBucksManager {
  private static instance: EasyPayBucksManager
  private listeners: (() => void)[] = []

  private constructor() {}

  static getInstance(): EasyPayBucksManager {
    if (!EasyPayBucksManager.instance) {
      EasyPayBucksManager.instance = new EasyPayBucksManager()
    }
    return EasyPayBucksManager.instance
  }

  getState(): EasyPayBucksState {
    if (typeof window === 'undefined') {
      return {
        balance: 0,
        transactions: [],
        totalEarned: 0,
        totalSpent: 0
      }
    }

    const stored = localStorage.getItem('easypay-bucks')
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
      totalSpent: 0
    }
  }

  private saveState(state: EasyPayBucksState) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('easypay-bucks', JSON.stringify(state))
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

  awardBucks(amount: number, description: string, moduleId?: number): void {
    const currentState = this.getState()
    const transaction: Transaction = {
      id: `earn_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      type: 'earned',
      amount,
      description,
      moduleId,
      timestamp: new Date()
    }

    const newState: EasyPayBucksState = {
      balance: currentState.balance + amount,
      transactions: [transaction, ...currentState.transactions],
      totalEarned: currentState.totalEarned + amount,
      totalSpent: currentState.totalSpent
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
      timestamp: new Date()
    }

    const newState: EasyPayBucksState = {
      balance: currentState.balance - amount,
      transactions: [transaction, ...currentState.transactions],
      totalEarned: currentState.totalEarned,
      totalSpent: currentState.totalSpent + amount
    }

    this.saveState(newState)
    return true
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
      
      this.awardBucks(100, `Completed Training Module ${moduleId}`, moduleId)
    }
  }

  getGiftCardOptions() {
    return [
      {
        id: 'amazon-5',
        name: '$5 Amazon Gift Card',
        value: 5,
        bucksRequired: 100,
        description: 'Redeem 100 EasyPay Bucks for a $5 Amazon gift card'
      },
      {
        id: 'amazon-10',
        name: '$10 Amazon Gift Card',
        value: 10,
        bucksRequired: 200,
        description: 'Redeem 200 EasyPay Bucks for a $10 Amazon gift card'
      },
      {
        id: 'amazon-25',
        name: '$25 Amazon Gift Card',
        value: 25,
        bucksRequired: 500,
        description: 'Redeem 500 EasyPay Bucks for a $25 Amazon gift card'
      }
    ]
  }
}

export const easyPayBucksManager = EasyPayBucksManager.getInstance()

export function useEasyPayBucks() {
  const [state, setState] = useState<EasyPayBucksState>(() => {
    if (typeof window === 'undefined') {
      return {
        balance: 0,
        transactions: [],
        totalEarned: 0,
        totalSpent: 0
      }
    }
    return easyPayBucksManager.getState()
  })

  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const unsubscribe = easyPayBucksManager.subscribe(() => {
      setState(easyPayBucksManager.getState())
    })

    return unsubscribe
  }, [])

  if (typeof window === 'undefined') {
    return {
      ...state,
      awardBucks: () => {},
      spendBucks: () => false,
      canAffordGiftCard: () => false,
      markModuleCompleted: () => {},
      getGiftCardOptions: () => []
    }
  }

  return {
    ...state,
    awardBucks: easyPayBucksManager.awardBucks.bind(easyPayBucksManager),
    spendBucks: easyPayBucksManager.spendBucks.bind(easyPayBucksManager),
    canAffordGiftCard: easyPayBucksManager.canAffordGiftCard.bind(easyPayBucksManager),
    markModuleCompleted: easyPayBucksManager.markModuleCompleted.bind(easyPayBucksManager),
    getGiftCardOptions: easyPayBucksManager.getGiftCardOptions.bind(easyPayBucksManager)
  }
}

import { useState, useEffect } from 'react'