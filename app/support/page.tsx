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
    { value: 'general', label: 'General Questions' },
    { value: 'applications', label: 'Application Process' },
    { value: 'ric', label: 'Retail Installment Contracts' },
    { value: 'lto', label: 'Lease-to-Own' },
    { value: 'payments', label: 'Customer Payments' },
    { value: 'business', label: 'Business Partners' },
    { value: 'training', label: 'Training Platform' }
  ]

  const faqs = [
    // General Questions
    {
      id: 1,
      question: 'Who is EasyPay?',
      answer: 'EasyPay Finance offers a technology platform through which retailers offer short-term financing products that facilitate the purchase of retail items and services. EasyPay Leasing uses the Platform to offer lease-to-own payment options directly to customers.',
      category: 'general',
      helpful: 85,
      notHelpful: 3
    },
    {
      id: 2,
      question: 'How can I contact EasyPay?',
      answer: 'You can contact us through our live chat feature, by phone, or email. EasyPay Finance: (866) 438-8372, CustomerService@easypayfinance.com, Mon-Fri 5am-7pm PST, Sat 7:30am-4pm PST. EasyPay Leasing: (800) 447-6215, LeasingCustomerService@easypayfinance.com, Mon-Fri 6am-7pm PST, Sat 7:30am-12pm PST.',
      category: 'general',
      helpful: 92,
      notHelpful: 2
    },
    {
      id: 3,
      question: 'Does EasyPay report to credit bureaus?',
      answer: 'Currently, neither EasyPay Finance nor EasyPay Leasing reports new accounts to the credit bureaus.',
      category: 'general',
      helpful: 78,
      notHelpful: 5
    },
    {
      id: 4,
      question: 'Does the application process hurt my FICO credit score?',
      answer: 'The application process is a soft inquiry with two of the three big bureaus which should not impact your FICO credit score. The application process also uses data from secondary and alternative credit reporting agencies and those credit scores may be affected. Since our approval decisions are not based solely on traditional credit scores, customers with poor or no credit may still qualify.',
      category: 'general',
      helpful: 89,
      notHelpful: 4
    },
    {
      id: 5,
      question: 'Which retailers use EasyPay Finance and EasyPay Leasing?',
      answer: 'EasyPay\'s partner retailers and their industries can be found by searching our Find a Store feature on our website.',
      category: 'general',
      helpful: 43,
      notHelpful: 7
    },
    {
      id: 6,
      question: 'Can I have more than one account?',
      answer: 'Yes, existing customers can have more than one account. Certain conditions will apply. Please contact one of our trusted Team Members for more information. EasyPay Finance/RIC: (866) 337-2537, EasyPay Leasing/LTO: (866) 424-7919.',
      category: 'general',
      helpful: 56,
      notHelpful: 3
    },
    {
      id: 7,
      question: 'Does EasyPay have a mobile app?',
      answer: 'EasyPay Finance/Retail Installment Contract: Yes! For RIC customers, you may service your account through the MyEasyPay mobile app available in the App Store and Google Play Store. EasyPay Leasing/Lease-to-Own: Not at this time. However, LTO accounts can be managed through your web browser.',
      category: 'general',
      helpful: 67,
      notHelpful: 8
    },

    // Application Process
    {
      id: 8,
      question: 'How do I apply?',
      answer: 'Applying is simple! You can apply online through our Find a Store page or directly at a participating retail location.',
      category: 'applications',
      helpful: 74,
      notHelpful: 2
    },
    {
      id: 9,
      question: 'What are the requirements to apply?',
      answer: 'Applicants must: be at least 18 years old, have a valid government-issued ID, have a checking account that is in good standing, have a steady source of income earning at least $750 per month, have a valid email address, and have a valid smart phone number.',
      category: 'applications',
      helpful: 81,
      notHelpful: 3
    },

    // Retail Installment Contracts
    {
      id: 10,
      question: 'What is a Retail Installment Contract (RIC)?',
      answer: 'A Retail Installment Contract (also referred to as a closed-end credit agreement) is a financing agreement between the retailer and the customer. It is not a loan. The retailer agrees to sell the product/service to its customer on credit. The customer agrees to pay for the product/service over time through scheduled payments, including any applicable interest and fees. The retailer sells and assigns the RIC to EasyPay Finance, and we then service the account.',
      category: 'ric',
      helpful: 76,
      notHelpful: 4
    },
    {
      id: 11,
      question: 'Can I pay off my contract early?',
      answer: 'Yes, you can pay off your contract early without any prepayment penalties. Paying off early may reduce the total amount of interest owed.',
      category: 'ric',
      helpful: 88,
      notHelpful: 1
    },
    {
      id: 12,
      question: 'What is the 90-Day Finance Charge Cap Promotion?',
      answer: 'Details of the EasyPay Finance FCCP can be found on our website under the Finance Charge Cap Promotion section.',
      category: 'ric',
      helpful: 52,
      notHelpful: 8
    },
    {
      id: 13,
      question: 'If I am approved for a RIC, do you send me money?',
      answer: 'No. The retailer is selling you the product/service on credit; a RIC is not a loan. EasyPay Finance purchases your account from the retailer, and we service the account.',
      category: 'ric',
      helpful: 69,
      notHelpful: 6
    },
    {
      id: 14,
      question: 'How much can I be approved for with a Retail Installment Contract?',
      answer: 'Qualified applicants can be approved for up to $5,000, with a minimum transaction amount of $350. Your approval terms depend on various underwriting criteria and the information provided on your application.',
      category: 'ric',
      helpful: 73,
      notHelpful: 2
    },

    // Lease-to-Own
    {
      id: 15,
      question: 'What is a Lease-to-Own (LTO) product?',
      answer: 'EasyPay Leasing purchases the product/service from the retailer. EasyPay Leasing bundles the product(s) and service(s) and leases the resulting bundle as "personal property" to you. EasyPay Leasing owns the personal property until the lease has been satisfied. This program is designed for customers who prefer flexible payment options without using traditional credit.',
      category: 'lto',
      helpful: 71,
      notHelpful: 5
    },
    {
      id: 16,
      question: 'What types of products or services can I lease with EasyPay Leasing?',
      answer: 'Our lease-to-own financing is available through trusted retailers in various industries that include automotive repair, tires and wheels, furniture, mattresses, and much more. See our Find a Store for more information.',
      category: 'lto',
      helpful: 64,
      notHelpful: 3
    },
    {
      id: 17,
      question: 'Who owns the merchandise I am leasing?',
      answer: 'EasyPay Leasing owns the personal property until you satisfy the terms of the lease.',
      category: 'lto',
      helpful: 82,
      notHelpful: 2
    },
    {
      id: 18,
      question: 'How much can I be approved for with lease-to-own financing?',
      answer: 'Qualified applicants can be approved for up to $5,000 towards the cash price of the lease. Your approval terms depend on various underwriting criteria and the information provided on your application.',
      category: 'lto',
      helpful: 75,
      notHelpful: 4
    },
    {
      id: 19,
      question: 'How do I purchase my leased item early?',
      answer: 'You can choose to purchase your leased item at any time during the lease period. Early purchase options may offer savings. See Early Purchase Option(s) for more details.',
      category: 'lto',
      helpful: 68,
      notHelpful: 3
    },
    {
      id: 20,
      question: 'How do the Early Purchase Option(s) work?',
      answer: 'Details of each of the Early Purchase Option(s) can be found on our website under the Early Purchase Options section.',
      category: 'lto',
      helpful: 55,
      notHelpful: 7
    },

    // Customer Payments
    {
      id: 21,
      question: 'How do I make a payment?',
      answer: 'EasyPay Finance/RIC Customers: Payments can be made through our online customer portal, by phone, or via mail. For detailed instructions and options, please visit your MyEasyPay account. EasyPay Leasing/LTO Customers: Payments can be made through our online customer portal, by phone (800) 447-6215, or via mail at https://easypayleasing.acct-admin.com/',
      category: 'payments',
      helpful: 79,
      notHelpful: 2
    },
    {
      id: 22,
      question: 'Can I change my payment schedule?',
      answer: 'Yes, if you need to adjust your payment schedule, please contact our Customer Service team to discuss available options: EasyPay Finance/RIC: (866) 438-8372, EasyPay Leasing/LTO: (800) 447-6215.',
      category: 'payments',
      helpful: 84,
      notHelpful: 3
    },

    // Business Partners
    {
      id: 23,
      question: 'How do I partner with EasyPay?',
      answer: 'Our enrollment process is quick and easy! You can enroll for free today through our enrollment portal. Our agreement gives you access to our Platform through which you can offer programs available in your area.',
      category: 'business',
      helpful: 91,
      notHelpful: 2
    },
    {
      id: 24,
      question: 'How much does it cost to use EasyPay as a business owner?',
      answer: 'There are no monthly fees or minimum volume requirements. Enroll today and you\'ll be put on a 0% merchant fee.',
      category: 'business',
      helpful: 95,
      notHelpful: 1
    },
    {
      id: 25,
      question: 'How long does the enrollment process take?',
      answer: 'Our enrollment process typically takes around 15 minutes to complete. You may be requested to provide additional documentation from our Business Support team.',
      category: 'business',
      helpful: 87,
      notHelpful: 2
    },
    {
      id: 26,
      question: 'Once I have enrolled, how do I access my Business Center portal?',
      answer: 'After your enrollment application has been reviewed and approved, you will receive an email with information on creating your account. You can log into your Business Center by visiting the portal login page.',
      category: 'business',
      helpful: 83,
      notHelpful: 3
    },
    {
      id: 27,
      question: 'What happens if a customer stops making payments?',
      answer: 'You are not responsible if a customer defaults on their payment obligation. However, you are responsible for handling any warranty or defective merchandise issues, protecting against fraud, and following our guidelines found in your agreement and/or on the Business Center.',
      category: 'business',
      helpful: 89,
      notHelpful: 2
    },
    {
      id: 28,
      question: 'How do I get paid as the business owner?',
      answer: 'EasyPay sends your funds to the account on file via ACH. We send funds Monday-Friday by 4pm PST, not including bank holidays.',
      category: 'business',
      helpful: 92,
      notHelpful: 1
    },
    {
      id: 29,
      question: 'How do I get marketing materials?',
      answer: 'EasyPay provides marketing materials for all of our retail partners for free. You will receive a welcome kit upon enrolling. If you need additional materials, please contact your Merchant Success Manager.',
      category: 'business',
      helpful: 78,
      notHelpful: 4
    },
    {
      id: 30,
      question: 'How do I contact EasyPay\'s Business Support team?',
      answer: 'You can call our team toll free at (866) 337-2537 or use (760) 718-1824 for a direct line. You can also send our team an email to MerchantServices@easypayfinance.com. Hours: Monday-Friday: 5am-6pm PST, Saturday: 5am-5pm PST, Sunday: Closed.',
      category: 'business',
      helpful: 94,
      notHelpful: 1
    },

    // Training Platform
    {
      id: 31,
      question: 'How do I access the EasyPay University training platform?',
      answer: 'You can access EasyPay University through your merchant portal or the direct link provided by your account manager. Use your existing merchant credentials to log in.',
      category: 'training',
      helpful: 45,
      notHelpful: 2
    },
    {
      id: 32,
      question: 'Do I need to complete all modules to be certified?',
      answer: 'Yes, you must complete all 7 modules and pass each quiz with at least 80% to earn your EasyPay Finance Merchant Certification.',
      category: 'training',
      helpful: 38,
      notHelpful: 1
    },
    {
      id: 33,
      question: 'How long does it take to complete the training?',
      answer: 'The complete training program takes approximately 5-6 hours total. You can complete it at your own pace and return to where you left off at any time.',
      category: 'training',
      helpful: 42,
      notHelpful: 3
    },
    {
      id: 34,
      question: 'Can I retake a quiz if I don\'t pass?',
      answer: 'Yes, you can retake any quiz as many times as needed. We encourage you to review the module content before retaking to improve your score.',
      category: 'training',
      helpful: 29,
      notHelpful: 1
    },
    {
      id: 35,
      question: 'What if I have technical issues with the platform?',
      answer: 'If you experience technical difficulties, first try refreshing your browser or clearing your cache. If issues persist, contact our support team at MerchantServices@easypayfinance.com.',
      category: 'training',
      helpful: 27,
      notHelpful: 4
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
      <div className="border-3 border-dashed border-gray-300 rounded-2xl p-8 bg-gray-50/50">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Need Help? We're Here for You</h2>
          <p className="text-gray-600">Multiple ways to get the support you need</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 border border-gray-200 rounded-xl bg-white hover:shadow-md transition-all duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Phone Support</h3>
            <p className="text-gray-600 text-sm mb-3">Speak directly with our support team</p>
            <a 
              href={`tel:${contactInfo.businessSupport.phone.replace(/[^0-9]/g, '')}`}
              className="text-xl font-bold text-blue-600 hover:text-blue-800 transition-colors duration-200 border-b-2 border-transparent hover:border-blue-600"
            >
              {contactInfo.businessSupport.phone}
            </a>
          </div>
          
          <div className="text-center p-6 border border-gray-200 rounded-xl bg-white hover:shadow-md transition-all duration-300">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Email Support</h3>
            <p className="text-gray-600 text-sm mb-3">Send us a detailed message</p>
            <a 
              href={`mailto:${contactInfo.businessSupport.email}`}
              className="text-sm font-semibold text-purple-600 hover:text-purple-800 transition-colors duration-200 border-b-2 border-transparent hover:border-purple-600 break-all"
            >
              {contactInfo.businessSupport.email}
            </a>
          </div>
          
          <div className="text-center p-6 border border-gray-200 rounded-xl bg-white hover:shadow-md transition-all duration-300">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Business Hours</h3>
            <p className="text-gray-600 text-sm mb-3">When we're available to help</p>
            <div className="text-gray-900 font-semibold text-sm leading-relaxed">
              <div>Mon-Fri: 5am-6pm PST</div>
              <div>Sat: 5am-5pm PST</div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-6 py-3">
            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-emerald-700 font-medium">Support team is currently online</span>
          </div>
        </div>
      </div>

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
                    faq.category === 'general' ? 'bg-gray-100 text-gray-700' :
                    faq.category === 'applications' ? 'bg-blue-100 text-blue-700' :
                    faq.category === 'ric' ? 'bg-indigo-100 text-indigo-700' :
                    faq.category === 'lto' ? 'bg-cyan-100 text-cyan-700' :
                    faq.category === 'payments' ? 'bg-green-100 text-green-700' :
                    faq.category === 'business' ? 'bg-purple-100 text-purple-700' :
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
        <Card className="text-center py-8 hover:shadow-lg transition-all duration-300 group">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
            <MessageCircle className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
          <p className="text-sm text-gray-600 mb-4">Get instant help from our support team</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            Start Chat
          </button>
        </Card>

        <Card className="text-center py-8 hover:shadow-lg transition-all duration-300 group">
          <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
            <Users className="w-8 h-8 text-purple-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Community Forum</h3>
          <p className="text-sm text-gray-600 mb-4">Connect with other merchants and share experiences</p>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center gap-2 mx-auto">
            <span>Visit Forum</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </Card>

        <Card className="text-center py-8 hover:shadow-lg transition-all duration-300 group">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
            <BookOpen className="w-8 h-8 text-easypay-green" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Documentation</h3>
          <p className="text-sm text-gray-600 mb-4">Comprehensive guides and API documentation</p>
          <button className="bg-easypay-green text-white px-6 py-3 rounded-xl hover:bg-easypay-green-dark transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center gap-2 mx-auto">
            <span>View Docs</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </Card>
      </div>
    </div>
  )
}