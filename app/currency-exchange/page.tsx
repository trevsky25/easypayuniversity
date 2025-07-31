'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/Card'
import { useEasyPayBucks } from '@/lib/easypayBucks'
import Link from 'next/link'
import { 
  Coins, 
  Gift, 
  CheckCircle, 
  AlertCircle,
  Zap,
  ShoppingBag,
  Clock,
  Award
} from 'lucide-react'

export default function CurrencyExchangePage() {
  const { 
    balance, 
    transactions, 
    totalEarned, 
    spendBucks, 
    canAffordGiftCard, 
    getGiftCardOptions 
  } = useEasyPayBucks()
  
  const [redeeming, setRedeeming] = useState<string | null>(null)
  const [redeemed, setRedeemed] = useState<string[]>([])

  const giftCardOptions = getGiftCardOptions()
  const recentTransactions = transactions.slice(0, 5)

  const handleRedeem = (giftCardId: string, bucksRequired: number, value: number) => {
    if (!canAffordGiftCard(bucksRequired)) {
      return
    }

    setRedeeming(giftCardId)
    
    setTimeout(() => {
      const success = spendBucks(bucksRequired, `Redeemed $${value} Amazon Gift Card`)
      
      if (success) {
        setRedeemed([...redeemed, giftCardId])
      }
      
      setRedeeming(null)
    }, 2000)
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Currency Exchange</h1>
        <p className="text-gray-600">
          Exchange your EasyPay Bucks for Amazon gift cards and other rewards
        </p>
      </div>

      {/* Balance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-easypay-green/10 rounded-full flex items-center justify-center">
              <Coins className="w-6 h-6 text-easypay-green" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{balance}</p>
              <p className="text-sm text-gray-600">Available Bucks</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Award className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{totalEarned}</p>
              <p className="text-sm text-gray-600">Total Earned</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <ShoppingBag className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{redeemed.length}</p>
              <p className="text-sm text-gray-600">Cards Redeemed</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <Zap className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{Math.floor(balance / 100)}</p>
              <p className="text-sm text-gray-600">Cards Available</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Exchange Rate Info */}
      <Card className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-easypay-green/10 rounded-full flex items-center justify-center">
            <Gift className="w-6 h-6 text-easypay-green" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How EasyPay Bucks Work</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>• Complete training modules to earn 100 EasyPay Bucks each</p>
              <p>• Exchange 100 EasyPay Bucks for a $5 Amazon gift card</p>
              <p>• Higher value cards offer better exchange rates</p>
              <p>• Gift cards are delivered electronically within 24 hours</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Gift Card Options */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Available Gift Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {giftCardOptions.map((option) => {
            const canAfford = canAffordGiftCard(option.bucksRequired)
            const isRedeeming = redeeming === option.id
            const hasRedeemed = redeemed.includes(option.id)

            return (
              <Card key={option.id} className="p-6">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <Gift className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{option.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{option.description}</p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Cost:</span>
                    <div className="flex items-center gap-1">
                      <Coins className="w-4 h-4 text-easypay-green" />
                      <span className="font-semibold">{option.bucksRequired}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Value:</span>
                    <span className="font-semibold text-green-600">${option.value}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Exchange Rate:</span>
                    <span className="font-semibold">{(option.value / (option.bucksRequired / 100)).toFixed(2)}x</span>
                  </div>
                </div>

                {hasRedeemed && (
                  <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center gap-2 text-green-700 text-sm">
                      <CheckCircle className="w-4 h-4" />
                      <span>Redeemed! Check your email for the gift card.</span>
                    </div>
                  </div>
                )}

                <button
                  onClick={() => handleRedeem(option.id, option.bucksRequired, option.value)}
                  disabled={!canAfford || isRedeeming || hasRedeemed}
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-all ${
                    hasRedeemed
                      ? 'bg-green-100 text-green-700 cursor-not-allowed'
                      : canAfford && !isRedeeming
                      ? 'bg-easypay-green text-white hover:bg-easypay-green-dark'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {hasRedeemed ? (
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Redeemed
                    </div>
                  ) : isRedeeming ? (
                    <div className="flex items-center justify-center gap-2">
                      <Clock className="w-4 h-4 animate-spin" />
                      Processing...
                    </div>
                  ) : canAfford ? (
                    'Redeem Now'
                  ) : (
                    `Need ${option.bucksRequired - balance} more bucks`
                  )}
                </button>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Recent Transactions */}
      {recentTransactions.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h2>
          <Card>
            <div className="divide-y divide-gray-100">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      transaction.type === 'earned' 
                        ? 'bg-green-100' 
                        : 'bg-red-100'
                    }`}>
                      {transaction.type === 'earned' ? (
                        <Coins className="w-4 h-4 text-green-600" />
                      ) : (
                        <Gift className="w-4 h-4 text-red-600" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{transaction.description}</p>
                      <p className="text-sm text-gray-500">
                        {transaction.timestamp.toLocaleDateString()} at {transaction.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                  <div className={`font-semibold ${
                    transaction.type === 'earned' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {transaction.type === 'earned' ? '+' : '-'}{transaction.amount}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}

      {/* Earn More Section */}
      {balance < 100 && (
        <Card className="p-6 bg-gradient-to-r from-easypay-green/5 to-blue-50 border-easypay-green/20">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-easypay-green/10 rounded-full flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-easypay-green" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Need More EasyPay Bucks?</h3>
              <p className="text-gray-600 mb-4">
                Complete training modules to earn more EasyPay Bucks. Each module completion earns you 100 bucks!
              </p>
              <Link 
                href="/modules"
                className="inline-flex items-center gap-2 bg-easypay-green text-white px-4 py-2 rounded-lg hover:bg-easypay-green-dark transition-colors"
              >
                <Award className="w-4 h-4" />
                View Training Modules
              </Link>
            </div>
          </div>
        </Card>
      )}
    </div>
  )
}