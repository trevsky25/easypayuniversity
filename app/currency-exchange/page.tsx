'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Card } from '@/components/ui/Card'
import { useEBucks } from '@/lib/eBucks'
import { EBucksIcon, EBucksDisplay } from '@/components/ui/eBucksIcon'
import Link from 'next/link'
import { 
  Coins, 
  Gift, 
  CheckCircle, 
  AlertCircle,
  Zap,
  ShoppingBag,
  Clock,
  Award,
  Users,
  Sparkles
} from 'lucide-react'

export default function CurrencyExchangePage() {
  const { 
    balance, 
    transactions, 
    totalEarned, 
    totalSpent,
    spendBucks, 
    canAffordGiftCard, 
    getGiftCardOptions 
  } = useEBucks()
  
  const [redeeming, setRedeeming] = useState<string | null>(null)
  const [redeemed, setRedeemed] = useState<string[]>([])
  const [showReferralModal, setShowReferralModal] = useState(false)
  const [referralCode, setReferralCode] = useState('')
  const [mounted, setMounted] = useState(false)

  const giftCardOptions = getGiftCardOptions()
  const recentTransactions = transactions.slice(0, 5)
  
  useEffect(() => {
    setMounted(true)
    // Generate or retrieve referral code
    const savedCode = localStorage.getItem('merchantReferralCode')
    if (savedCode) {
      setReferralCode(savedCode)
    } else {
      // Generate a unique referral code (format: EP-XXXX-XXXX)
      const generateCode = () => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
        let code = 'EP-'
        for (let i = 0; i < 8; i++) {
          if (i === 4) code += '-'
          code += chars.charAt(Math.floor(Math.random() * chars.length))
        }
        return code
      }
      const newCode = generateCode()
      localStorage.setItem('merchantReferralCode', newCode)
      setReferralCode(newCode)
    }
  }, [])

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
        <h1 className="text-3xl font-bold text-gray-900">eBucks Exchange</h1>
        <p className="text-gray-600 mt-2">
          Exchange your eBucks for Amazon gift cards
        </p>
      </div>

      {/* Balance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-easypay-green/10 rounded-full flex items-center justify-center overflow-hidden">
              <div className="w-14 h-14 flex items-center justify-center ml-2 mt-1">
                <EBucksIcon className="w-14 h-14" />
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{balance.toLocaleString()}</p>
              <p className="text-sm text-gray-600">Available eBucks</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Award className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{totalEarned.toLocaleString()}</p>
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
              <p className="text-2xl font-bold text-gray-900">{Math.floor(balance / 750)}</p>
              <p className="text-sm text-gray-600">Cards Available</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Exchange Rate Info & Referral CTA */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* How eBucks Work */}
        <Card className="p-6 bg-gradient-to-br from-easypay-green/5 to-blue-50 border-2 border-easypay-green/20">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-easypay-green/20 rounded-full flex items-center justify-center">
              <Gift className="w-6 h-6 text-easypay-green" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How eBucks Work</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Complete training modules to earn 100 eBucks each</p>
                <p>• Complete daily challenges for bonus eBucks (20-100 per challenge)</p>
                <p>• Leave a Google review to earn 150 bonus eBucks</p>
                <p>• Exchange 750 eBucks for a $5 Amazon gift card</p>
                <p>• Higher value cards offer better exchange rates (up to 25% bonus)</p>
                <p>• Gift cards are delivered electronically within 24 hours</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Refer a Business CTA */}
        <Card className="p-6 bg-gradient-to-br from-teal-50 to-easypay-green/10 border-2 border-teal-200">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-teal-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Refer a Business</h3>
              <p className="text-sm text-gray-600 mb-4">
                Earn 1000 eBucks when you refer a business that enrolls with EasyPay Finance and completes their first training module!
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Sparkles className="w-4 h-4 text-yellow-500" />
                  <span className="text-gray-700">1000 eBucks per successful referral</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700">Help businesses grow with financing</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Award className="w-4 h-4 text-purple-500" />
                  <span className="text-gray-700">Build your eBucks faster</span>
                </div>
              </div>
              <button 
                onClick={() => setShowReferralModal(true)}
                className="mt-4 w-full bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition-colors font-medium flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Start Referring
              </button>
            </div>
          </div>
        </Card>
      </div>

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
                    <EBucksDisplay amount={option.bucksRequired} size="small" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Value:</span>
                    <span className="font-semibold text-green-600">${option.value}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Exchange Rate:</span>
                    <span className="font-semibold">${(option.value / option.bucksRequired * 100).toFixed(2)} per 100 eBucks</span>
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
                    `Need ${option.bucksRequired - balance} more eBucks`
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
      {balance < 750 && (
        <Card className="p-6 bg-gradient-to-r from-easypay-green/5 to-blue-50 border-easypay-green/20">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-easypay-green/10 rounded-full flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-easypay-green" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Need More eBucks?</h3>
              <p className="text-gray-600 mb-4">
                Complete training modules, daily challenges, and more to earn eBucks!
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

      {/* Referral Modal */}
      {mounted && showReferralModal && createPortal(
        <div className="fixed inset-0 flex items-center justify-center z-[9999] p-4">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] flex flex-col shadow-2xl border-2 border-easypay-green">
            {/* Fixed Modal Header */}
            <div className="flex items-center justify-between p-6 pb-4 border-b border-gray-200 flex-shrink-0">
              <h2 className="text-2xl font-bold text-gray-900">Refer a New Business to EasyPay</h2>
              <button
                onClick={() => setShowReferralModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 pt-4">

              {/* Referral Code Display */}
              <div className="bg-teal-50 border-2 border-teal-200 rounded-lg p-6 mb-6 text-center">
                <p className="text-sm text-gray-600 mb-2">Your Unique Referral Code</p>
                <p className="text-3xl font-bold text-teal-600 mb-4">{referralCode}</p>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(referralCode)
                    alert('Referral code copied to clipboard!')
                  }}
                  className="text-sm text-teal-600 hover:text-teal-700 underline"
                >
                  Copy to Clipboard
                </button>
              </div>

              {/* Instructions */}
              <div className="space-y-4 mb-6">
                <h3 className="font-semibold text-gray-900">How It Works:</h3>
                <ol className="space-y-3 text-sm text-gray-600">
                  <li className="flex gap-2">
                    <span className="font-semibold text-teal-600">1.</span>
                    Share your referral code with businesses that could benefit from offering customer financing
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-teal-600">2.</span>
                    They provide your code when enrolling as a new EasyPay Finance merchant partner
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-teal-600">3.</span>
                    When they're approved and complete their first training module, you earn 1000 eBucks!
                  </li>
                </ol>
              </div>

              {/* Benefits Section */}
              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Why Businesses Love EasyPay:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Instant approvals with financing up to $5,000</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Same-day funding for approved applications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>No merchant fees - EasyPay handles everything</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Increase sales by offering flexible payment options</span>
                  </li>
                </ul>
              </div>

              {/* Rewards Section */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Your Referral Reward:</h4>
                <div className="text-center py-2">
                  <EBucksDisplay amount={1000} size="large" />
                  <p className="text-xs text-gray-600 mt-2">
                    Earned when they enroll and complete Module 1
                  </p>
                </div>
              </div>

              {/* Share Options */}
              <div className="space-y-3">
                <button
                  onClick={() => {
                    const message = `I've been using EasyPay Finance to offer customer financing at my business and it's been great! They offer instant approvals up to $5,000 with same-day funding. If you're interested in growing your sales, you should check them out. Use my referral code ${referralCode} when you enroll. Contact EasyPay at (866) 337-2537 or visit easypayfinance.com`
                    navigator.clipboard.writeText(message)
                    alert('Message copied! You can now paste it in an email or text.')
                  }}
                  className="w-full bg-easypay-green text-white px-4 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                >
                  Copy Referral Message
                </button>
                <button
                  onClick={() => setShowReferralModal(false)}
                  className="w-full bg-gray-200 text-gray-700 px-4 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  )
}