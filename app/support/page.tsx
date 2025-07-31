'use client'

import { Card } from '@/components/ui/Card'
import { 
  HelpCircle, 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock,
  Search,
  ChevronRight,
  BookOpen,
  Video,
  FileText,
  Users,
  ExternalLink,
  ThumbsUp,
  ThumbsDown
} from 'lucide-react'
import { useState } from 'react'

export default function SupportPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const contactInfo = {
    businessSupport: {
      email: 'MerchantServices@easypayfinance.com',
      phone: '(866) 337-2537',
      hours: 'Mon-Fri 5am-6pm PST, Sat 5am-5pm PST'
    }
  }

  const quickLinks = [
    {
      title: 'Getting Started Guide',
      description: 'New to EasyPay? Start here for a complete overview',
      icon: BookOpen,
      href: '#',
      popular: true
    },
    {
      title: 'Application Process Tutorial',
      description: 'Step-by-step guide to submitting customer applications',
      icon: Video,
      href: '#',
      popular: true
    },
    {
      title: 'Troubleshooting Common Issues',
      description: 'Solutions to frequently encountered problems',
      icon: HelpCircle,
      href: '#',
      popular: true
    },
    {
      title: 'Business Center Portal Guide',
      description: 'Navigate the merchant portal like a pro',
      icon: FileText,
      href: '#',
      popular: false
    }
  ]

  const faqCategories = [
    { value: 'all', label: 'All Categories' },
    { value: 'applications', label: 'Applications' },
    { value: 'payments', label: 'Payments' },
    { value: 'portal', label: 'Portal' },
    { value: 'compliance', label: 'Compliance' },
    { value: 'training', label: 'Training' }
  ]

  const faqs = [
    {
      id: 1,
      question: 'How do I access the EasyPay University training platform?',
      answer: 'You can access EasyPay University through your merchant portal or the direct link provided by your account manager. Use your existing merchant credentials to log in.',
      category: 'training',
      helpful: 45,
      notHelpful: 2
    },
    {
      id: 2,
      question: 'Do I need to complete all modules to be certified?',
      answer: 'Yes, you must complete all 4 modules and pass each quiz with at least 80% to earn your EasyPay Finance Merchant Certification.',
      category: 'training',
      helpful: 38,
      notHelpful: 1
    },
    {
      id: 3,
      question: 'How long does it take to complete the training?',
      answer: 'The complete training program takes approximately 5-6 hours total. You can complete it at your own pace and return to where you left off at any time.',
      category: 'training',
      helpful: 42,
      notHelpful: 3
    },
    {
      id: 4,
      question: 'Can I retake a quiz if I don\'t pass?',
      answer: 'Yes, you can retake any quiz as many times as needed. We encourage you to review the module content before retaking to improve your score.',
      category: 'training',
      helpful: 29,
      notHelpful: 1
    },
    {
      id: 5,
      question: 'How do I download my certificate?',
      answer: 'Once you complete all modules and pass all quizzes, your certificate will be available in the "My Progress" section. You can download it as a PDF.',
      category: 'training',
      helpful: 33,
      notHelpful: 2
    },
    {
      id: 6,
      question: 'What if I have technical issues with the platform?',
      answer: 'If you experience technical difficulties, first try refreshing your browser or clearing your cache. If issues persist, contact our support team at MerchantServices@easypayfinance.com.',
      category: 'training',
      helpful: 27,
      notHelpful: 4
    },
    {
      id: 7,
      question: 'Can my team members access the training?',
      answer: 'Yes, you can add team members through your merchant portal. Each team member will need their own account to track individual progress and earn certificates.',
      category: 'training',
      helpful: 35,
      notHelpful: 2
    },
    {
      id: 8,
      question: 'Is the training content updated regularly?',
      answer: 'Yes, we update training content quarterly to reflect program changes, new features, and regulatory updates. You\'ll be notified when new content is available.',
      category: 'training',
      helpful: 22,
      notHelpful: 1
    },
    {
      id: 9,
      question: 'How long does it take to get approval for a customer application?',
      answer: 'Most applications receive instant approval decisions. For applications requiring additional review, you can expect a decision within 24 hours.',
      category: 'applications',
      helpful: 24,
      notHelpful: 2
    },
    {
      id: 10,
      question: 'What is the maximum financing amount available?',
      answer: 'EasyPay Finance offers financing up to $5,000 per transaction. The actual approved amount depends on the customer\'s creditworthiness and the financing program selected.',
      category: 'applications',
      helpful: 18,
      notHelpful: 1
    },
    {
      id: 11,
      question: 'When do I receive payment for completed transactions?',
      answer: 'For contracts received by 4pm EST, same-day funding is available. Contracts received after 4pm EST will be funded the next business day.',
      category: 'payments',
      helpful: 32,
      notHelpful: 0
    },
    {
      id: 12,
      question: 'How do I access the Business Center portal?',
      answer: 'You can access the Business Center portal at portal.easypayfinance.com using the credentials provided during your merchant setup. Contact support if you need assistance with login.',
      category: 'portal',
      helpful: 15,
      notHelpful: 1
    }
  ]

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Support Center</h1>
        <p className="text-gray-600 mt-2">
          Get help, find answers, and connect with our support team
        </p>
      </div>

      {/* Contact Information */}
      <Card className="bg-easypay-green text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/20 rounded-lg">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold">Phone Support</h3>
              <p className="text-sm opacity-90">{contactInfo.businessSupport.phone}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/20 rounded-lg">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold">Email Support</h3>
              <p className="text-sm opacity-90 break-all">{contactInfo.businessSupport.email}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/20 rounded-lg">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold">Business Hours</h3>
              <p className="text-sm opacity-90">{contactInfo.businessSupport.hours}</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Quick Links */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Help</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {quickLinks.map((link, index) => (
            <Card key={index} className="hover:shadow-lg transition-all cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-easypay-green/10 rounded-lg">
                  <link.icon className="w-5 h-5 text-easypay-green" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900">{link.title}</h3>
                    {link.popular && (
                      <span className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{link.description}</p>
                  <div className="flex items-center gap-1 text-easypay-green text-sm">
                    <span>View Guide</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h2>
        
        {/* Search and Filter */}
        <Card className="mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search FAQs..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-easypay-green focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <select
              className="border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-easypay-green focus:border-transparent"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {faqCategories.map(category => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>
        </Card>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => (
            <Card key={faq.id} className="hover:shadow-md transition-all">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-gray-900 flex-1">{faq.question}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    faq.category === 'applications' ? 'bg-blue-100 text-blue-700' :
                    faq.category === 'payments' ? 'bg-green-100 text-green-700' :
                    faq.category === 'portal' ? 'bg-purple-100 text-purple-700' :
                    faq.category === 'compliance' ? 'bg-red-100 text-red-700' :
                    faq.category === 'training' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {faq.category}
                  </span>
                </div>
                
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500">Was this helpful?</span>
                    <div className="flex items-center gap-2">
                      <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-green-600 transition-colors">
                        <ThumbsUp className="w-4 h-4" />
                        <span>{faq.helpful}</span>
                      </button>
                      <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-red-600 transition-colors">
                        <ThumbsDown className="w-4 h-4" />
                        <span>{faq.notHelpful}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredFaqs.length === 0 && (
          <Card className="text-center py-12">
            <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No FAQs found</h3>
            <p className="text-gray-600">Try adjusting your search terms or contact support directly</p>
          </Card>
        )}
      </div>

      {/* Additional Resources */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="text-center py-8">
          <MessageCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
          <p className="text-sm text-gray-600 mb-4">Get instant help from our support team</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Start Chat
          </button>
        </Card>

        <Card className="text-center py-8">
          <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
          <h3 className="font-semibold text-gray-900 mb-2">Community Forum</h3>
          <p className="text-sm text-gray-600 mb-4">Connect with other merchants and share experiences</p>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2 mx-auto">
            <span>Visit Forum</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </Card>

        <Card className="text-center py-8">
          <BookOpen className="w-12 h-12 text-easypay-green mx-auto mb-4" />
          <h3 className="font-semibold text-gray-900 mb-2">Documentation</h3>
          <p className="text-sm text-gray-600 mb-4">Comprehensive guides and API documentation</p>
          <button className="bg-easypay-green text-white px-4 py-2 rounded-lg hover:bg-easypay-green-dark transition-colors flex items-center gap-2 mx-auto">
            <span>View Docs</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </Card>
      </div>
    </div>
  )
}