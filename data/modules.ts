// Complete EasyPay University Training Modules

export interface Quiz {
  id: string
  title: string
  questions: QuizQuestion[]
  passingScore: number
  timeLimit?: number // in minutes
}

export interface QuizQuestion {
  id: string
  question: string
  type: 'multiple-choice' | 'true-false' | 'select-multiple'
  options: string[]
  correctAnswer: string | string[]
  explanation: string
  points: number
}

export interface Lesson {
  id: string
  title: string
  duration: string
  content: LessonContent[]
  objectives: string[]
  keyTakeaways: string[]
}

export interface LessonContent {
  type: 'text' | 'video' | 'interactive' | 'checklist' | 'example' | 'warning' | 'tip' | 'image'
  title?: string
  content: string
  videoUrl?: string
  interactiveType?: 'calculator' | 'scenario' | 'quiz'
  items?: string[]
  imageUrl?: string
  imageAlt?: string
  imageCaption?: string
}

export interface TrainingModule {
  id: string
  title: string
  description: string
  estimatedTime: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  prerequisites: string[]
  objectives: string[]
  lessons: Lesson[]
  quiz: Quiz
  certificate: boolean
  ebucksReward: number
}

export const trainingModules: TrainingModule[] = [
  {
    id: 'module-1',
    title: 'Welcome to EasyPay Finance',
    description: 'Get introduced to EasyPay Finance, our mission, values, and the programs we offer to help merchants and customers succeed.',
    estimatedTime: '45 minutes',
    difficulty: 'beginner',
    prerequisites: [],
    objectives: [
      'Understand EasyPay Finance\'s history and mission',
      'Learn about our two core financing programs',
      'Identify the benefits for merchants and customers',
      'Navigate the Business Center portal effectively'
    ],
    lessons: [
      {
        id: 'lesson-1-1',
        title: 'Company Overview & Mission',
        duration: '15 minutes',
        objectives: [
          'Learn EasyPay Finance\'s 20+ year history',
          'Understand our core mission and values',
          'Recognize our market presence and reach'
        ],
        content: [
          {
            type: 'text',
            title: 'Welcome to EasyPay Finance',
            content: 'Welcome to EasyPay Finance, where we\'ve been delivering "Easy Payment Solutions - No Perfect Credit Required" for over 20 years. Since our founding in 2001, we\'ve grown to serve over 12,000 locations across the United States, helping merchants like you provide flexible financing solutions to your customers.\n\nBuilt on two decades of customer finance experience, we specialize in serving retailers, auto repair dealers, furniture stores, mattress retailers, and electronics merchants. Our comprehensive approach consolidates the need for multiple finance companies into one easy solution, providing coverage for customers with good, challenged, and poor credit alike.'
          },
          {
            type: 'text',
            title: 'Our Mission',
            content: 'Our mission is simple: Easy Payment Solutions - No Perfect Credit Required. We provide accessible, transparent financing options that help working people get what they need when they need it. We believe everyone deserves access to quality goods and services, regardless of their credit history.\n\nUsing alternative credit assessment that looks beyond just credit scores, we create flexible payment solutions designed to work with customer budgets. Our dedicated sales support and mobile application process allows customers to apply and get decisions quickly, making the purchasing process smooth for both merchants and customers.'
          },
          {
            type: 'text',
            title: 'Company Details',
            content: 'EasyPay Finance operates as Duvera Billing Services, LLC (DBA EasyPay Finance) and is headquartered in Carlsbad, California. Our extensive network covers locations across the United States, providing financing solutions for automotive repairs, tires, furniture, mattresses, appliances, electronics, and more.\n\nWe\'ve built a stable, growing company focused on serving both merchants and customers. Our clear agreements contain no hidden fees, and we provide dedicated business support through multiple channels including phone, email, and our comprehensive Business Center portal.'
          },
          {
            type: 'example',
            title: 'Our Impact by the Numbers',
            content: '• 20+ years in business (since 2001)\n• 12,000+ merchant locations nationwide\n• Comprehensive credit coverage for all credit types\n• Alternative credit assessment beyond just scores\n• Same-day funding available\n• Up to $5,000 financing amounts\n• No hidden fees policy\n• Dedicated sales support team\n• Mobile application process\n• Multiple industry specializations (auto, furniture, electronics, etc.)'
          },
          {
            type: 'tip',
            title: 'Why Merchants Choose EasyPay',
            content: 'Merchants partner with us because we understand that every customer deserves a chance. Our programs are designed to approve customers that traditional financing might decline, helping you increase sales while serving more customers.'
          },
          {
            type: 'interactive',
            title: 'Company Knowledge Challenge',
            interactiveType: 'knowledge-quiz',
            content: '',
            questions: [
              {
                question: 'How many years has EasyPay Finance been in business?',
                options: ['15+ years', '20+ years', '25+ years', '30+ years'],
                correct: '20+ years',
                explanation: 'EasyPay Finance was founded in 2001, giving us over 20 years of experience in consumer financing.'
              },
              {
                question: 'How many merchant locations does EasyPay serve?',
                options: ['8,000+', '10,000+', '12,000+', '15,000+'],
                correct: '12,000+',
                explanation: 'EasyPay Finance serves over 12,000 locations across 21 states.'
              },
              {
                question: 'What is the maximum financing amount available?',
                options: ['$3,000', '$5,000', '$7,500', '$10,000'],
                correct: '$5,000',
                explanation: 'EasyPay Finance offers financing up to $5,000 per transaction.'
              }
            ]
          }
        ],
        keyTakeaways: [
          'EasyPay Finance has over 20 years of experience in consumer financing',
          'We serve 12,000+ locations across 21 states',
          'Our mission focuses on accessible, transparent financing for working people',
          'We specialize in approving customers with challenged credit histories'
        ]
      },
      {
        id: 'lesson-1-2',
        title: 'Understanding Our Three Core Programs',
        duration: '20 minutes',
        objectives: [
          'Understand the three core EasyPay Finance programs',
          'Learn when to use RIC vs LTO for different customers',
          'Master program comparison and selection strategies'
        ],
        content: [
          {
            type: 'text',
            title: 'Three Ways to Finance',
            content: 'EasyPay Finance offers three distinct financing programs, each designed for different customer needs and situations. Understanding when and how to use each program is key to maximizing your sales and customer satisfaction.'
          },
          {
            type: 'text',
            title: '1. Credit Sales Program (Retail Installment Contracts - RIC)',
            content: 'In our Credit Sales Program, you originate the credit sale and execute a Retail Installment Contract (RIC) with your customer. EasyPay then purchases and services the contract. This is a traditional financing structure where the customer owns the item immediately.'
          },
          {
            type: 'example',
            title: 'RIC Program Features',
            content: '• Customer owns the item immediately\n• Traditional installment payments\n• No credit bureau reporting\n• EasyPay purchases and services the contract\n• Best for customers who want immediate ownership'
          },
          {
            type: 'text',
            title: '2. Lease-to-Own (LTO) Program',
            content: 'Our LTO program allows EasyPay Leasing to purchase items from you to lease to customers under a Rental-Purchase Agreement. Customers make payments and have early purchase options to save money.'
          },
          {
            type: 'example',
            title: 'LTO Program Features',
            content: '• Rental-Purchase Agreement structure\n• Early purchase options available\n• Lower approval requirements\n• Weekly, bi-weekly, or monthly payments\n• Processing fee applies ($39)\n• Great for credit-challenged customers'
          },
          {
            type: 'interactive',
            title: 'Program Comparison Challenge',
            content: 'Master program selection with this interactive challenge!',
            interactiveType: 'program-comparison',
            scenarios: [
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
                customer: 'Jennifer - Credit Score 650, Kitchen appliances',
                item: '$3,200 Appliance Package',
                options: ['RIC', 'LTO'],
                best: 'RIC',
                reason: 'RIC provides traditional financing that works well for medium credit customers seeking larger purchases.'
              }
            ]
          }
        ],
        keyTakeaways: [
          'RIC provides immediate ownership with traditional financing structure',
          'LTO offers flexible payments with early purchase options, ideal for challenged credit',
          'Each program serves different customer needs and credit situations'
        ]
      },
      {
        id: 'lesson-1-3',
        title: 'Business Center Portal Navigation',
        duration: '10 minutes',
        objectives: [
          'Access and navigate the Business Center portal',
          'Understand dashboard features and reporting',
          'Learn location and employee management'
        ],
        content: [
          {
            type: 'text',
            title: 'Your Business Center Dashboard',
            content: 'The Business Center portal is your command center for managing financing applications, tracking performance, and accessing important resources. Let\'s explore its key features and navigation.'
          },
          {
            type: 'checklist',
            title: 'Portal Access Steps',
            items: [
              'Navigate to the provided Business Center URL',
              'Enter your merchant credentials',
              'Access your personalized dashboard',
              'Explore the main navigation menu',
              'Review your recent activity and statistics'
            ]
          },
          {
            type: 'text',
            title: 'Dashboard Overview',
            content: 'Your dashboard provides real-time insights into your financing activity, including recent applications, approval rates, funding status, and key performance metrics. This information helps you track your success and identify opportunities for improvement.'
          },
          {
            type: 'text',
            title: 'Location Management',
            content: 'If you have multiple locations, the portal allows you to manage each separately, track performance by location, and ensure proper employee access controls. You can add team members and assign appropriate permissions for each location.'
          },
          {
            type: 'text',
            title: 'Reporting Features',
            content: 'Access detailed reports on application volume, approval rates, average ticket sizes, and customer demographics. These insights help you understand your financing patterns and optimize your approach.'
          },
          {
            type: 'tip',
            title: 'Portal Best Practices',
            content: 'Bookmark your Business Center URL, keep login credentials secure, check your dashboard regularly for updates, and ensure team members have appropriate access levels for their roles.'
          },
          {
            type: 'interactive',
            title: 'Application Submission Simulator',
            content: 'Practice the application process with our interactive simulator!',
            interactiveType: 'application-simulator',
            steps: [
              { title: 'Customer Info', field: 'customerName' },
              { title: 'Purchase Amount', field: 'amount' },
              { title: 'Program Selection', field: 'program' },
              { title: 'Submit Application', field: 'submit' }
            ]
          }
        ],
        keyTakeaways: [
          'The Business Center portal is your central hub for all financing activities',
          'Dashboard provides real-time insights and performance metrics',
          'Location management allows multi-site merchants to track each location separately',
          'Reporting features help optimize your financing approach and identify opportunities'
        ]
      }
    ],
    quiz: {
      id: 'quiz-1',
      title: 'Welcome to EasyPay Finance Assessment',
      passingScore: 80,
      timeLimit: 15,
      questions: [
        {
          id: 'q1-1',
          question: 'How long has EasyPay Finance been in business?',
          type: 'multiple-choice',
          options: ['10+ years', '15+ years', '20+ years', '25+ years'],
          correctAnswer: '20+ years',
          explanation: 'EasyPay Finance was founded in 2001, giving us over 20 years of experience in consumer financing.',
          points: 10
        },
        {
          id: 'q1-2',
          question: 'How many merchant locations does EasyPay Finance serve?',
          type: 'multiple-choice',
          options: ['5,000+', '8,000+', '12,000+', '15,000+'],
          correctAnswer: '12,000+',
          explanation: 'EasyPay Finance serves over 12,000 merchant locations across 21 states.',
          points: 10
        },
        {
          id: 'q1-3',
          question: 'What is the maximum financing amount available through EasyPay Finance?',
          type: 'multiple-choice',
          options: ['$3,000', '$5,000', '$7,500', '$10,000'],
          correctAnswer: '$5,000',
          explanation: 'EasyPay Finance offers financing up to $5,000 per transaction.',
          points: 10
        },
        {
          id: 'q1-4',
          question: 'EasyPay Finance has been in business for over 20 years.',
          type: 'true-false',
          options: ['True', 'False'],
          correctAnswer: 'True',
          explanation: 'EasyPay Finance was founded in 2001, giving the company over 20 years of experience in consumer financing.',
          points: 10
        },
        {
          id: 'q1-5',
          question: 'What is EasyPay Finance\'s mission?',
          type: 'multiple-choice',
          options: [
            'To maximize profits through high-interest lending',
            'To provide accessible, transparent financing for working people',
            'To compete with traditional banks',
            'To focus only on customers with excellent credit'
          ],
          correctAnswer: 'To provide accessible, transparent financing for working people',
          explanation: 'EasyPay\'s mission is to provide accessible, transparent financing options that help working people get what they need.',
          points: 15
        },
        {
          id: 'q1-8',
          question: 'Which features are available in the Business Center portal? (Select all that apply)',
          type: 'select-multiple',
          options: [
            'Real-time dashboard with performance metrics',
            'Location management for multi-site merchants',
            'Detailed reporting and analytics',
            'Employee access controls',
            'Customer credit scoring',
            'Inventory management'
          ],
          correctAnswer: ['Real-time dashboard with performance metrics', 'Location management for multi-site merchants', 'Detailed reporting and analytics', 'Employee access controls'],
          explanation: 'The Business Center portal includes dashboard metrics, location management, reporting, and employee access controls. It does not include credit scoring or inventory management.',
          points: 15
        }
      ]
    },
    certificate: true,
    ebucksReward: 100
  },
  {
    id: 'module-2',
    title: 'Establishing a Credit Culture',
    description: 'Learn how to build a culture within your organization that naturally incorporates financing discussions and empowers your team to help more customers.',
    estimatedTime: '60 minutes',
    difficulty: 'intermediate',
    prerequisites: ['module-1'],
    objectives: [
      'Understand the four pillars of credit culture',
      'Learn how to train your team effectively',
      'Develop customer conversation strategies',
      'Create accountability and measurement systems'
    ],
    lessons: [
      {
        id: 'lesson-2-1',
        title: 'The Four Pillars of Credit Culture',
        duration: '20 minutes',
        objectives: [
          'Understand the foundation of a successful credit culture',
          'Learn how communication drives financing discussions',
          'Recognize the importance of leadership buy-in'
        ],
        content: [
          {
            type: 'text',
            title: 'What is Credit Culture?',
            content: 'Credit culture is the systematic approach to making financing conversations a natural part of every customer interaction. It\'s about shifting from reactive financing (only when customers ask) to proactive financing (offering solutions before problems arise).'
          },
          {
            type: 'text',
            title: 'Pillar 1: Communication',
            content: 'Effective communication means every team member knows how to naturally introduce financing options without being pushy. It\'s about reading customer cues, asking the right questions, and positioning financing as a helpful solution rather than a sales pitch.'
          },
          {
            type: 'example',
            title: 'Communication in Action',
            content: 'Instead of: "Do you need financing?"\nTry: "To help you get the most value, we offer several payment options including financing that can break this into manageable payments. Would you like to hear about your options?"'
          },
          {
            type: 'text',
            title: 'Pillar 2: Training',
            content: 'Comprehensive training ensures every team member understands not just the "how" but the "why" behind financing. This includes product knowledge, process understanding, objection handling, and most importantly, the value financing brings to customers.'
          },
          {
            type: 'checklist',
            title: 'Essential Training Components',
            items: [
              'Product knowledge: Understanding all three financing programs',
              'Process mastery: Smooth application submission',
              'Value proposition: Why financing helps customers',
              'Objection handling: Addressing common concerns',
              'Customer service: Making the experience positive'
            ]
          },
          {
            type: 'text',
            title: 'Pillar 3: Incentives',
            content: 'Proper incentives align team behavior with business goals. This doesn\'t always mean monetary rewards - recognition, competition, and professional development can be equally motivating. The key is making financing success personally meaningful to each team member.'
          },
          {
            type: 'text',
            title: 'Pillar 4: Leadership',
            content: 'Leadership sets the tone and expectations. When leaders actively support and participate in financing discussions, it signals to the entire team that this is a priority. Leadership also provides the resources and support needed for success.'
          },
          {
            type: 'warning',
            title: 'Common Pitfall',
            content: 'Many businesses focus only on training without addressing the other three pillars. Without proper communication standards, incentive alignment, and leadership support, even the best training will fail to create lasting change.'
          },
          {
            type: 'interactive',
            title: 'Credit Culture Foundation Builder',
            content: 'Build your credit culture by selecting the essential pillars!',
            interactiveType: 'credit-culture-builder',
            pillars: [
              { id: 'communication', name: 'Clear Communication', icon: '💬', description: 'Train staff to discuss financing naturally' },
              { id: 'training', name: 'Ongoing Training', icon: '📚', description: 'Regular skill development sessions' },
              { id: 'incentives', name: 'Performance Incentives', icon: '🎯', description: 'Reward successful financing conversations' },
              { id: 'leadership', name: 'Leadership Support', icon: '👑', description: 'Management commitment to credit culture' },
              { id: 'tools', name: 'Proper Tools', icon: '🛠️', description: 'Calculators and materials readily available' },
              { id: 'tracking', name: 'Progress Tracking', icon: '📊', description: 'Monitor and measure success metrics' }
            ]
          }
        ],
        keyTakeaways: [
          'Credit culture requires all four pillars: Communication, Training, Incentives, and Leadership',
          'Proactive financing discussions are more effective than reactive approaches',
          'Every team member should understand both the process and the value to customers',
          'Leadership support is essential for creating lasting cultural change'
        ]
      },
      {
        id: 'lesson-2-2',
        title: 'Building Your Team Training Program',
        duration: '25 minutes',
        objectives: [
          'Design effective onboarding for new employees',
          'Create ongoing training and development programs',
          'Implement performance tracking and improvement plans'
        ],
        content: [
          {
            type: 'text',
            title: 'New Employee Onboarding',
            content: 'The first 30 days are critical for establishing proper habits and mindset around financing. New employees should understand that financing is not an "add-on" service but an integral part of customer service.'
          },
          {
            type: 'checklist',
            title: '30-Day Onboarding Checklist',
            items: [
              'Day 1-3: Complete EasyPay University training modules',
              'Day 4-7: Shadow experienced team members during customer interactions',
              'Day 8-14: Practice applications with mock scenarios',
              'Day 15-21: Handle applications with supervision',
              'Day 22-30: Independent application handling with check-ins'
            ]
          },
          {
            type: 'text',
            title: 'Ongoing Skill Development',
            content: 'Regular training keeps skills sharp and introduces new techniques. Monthly team meetings should include financing discussions, sharing success stories, and addressing challenges. Quarterly refresher training ensures everyone stays current with program updates.'
          },
          {
            type: 'text',
            title: 'Role-Playing and Practice',
            content: 'Regular role-playing sessions help team members practice difficult conversations and build confidence. Create scenarios based on real customer situations your team encounters, including objections and challenging credit situations.'
          },
          {
            type: 'example',
            title: 'Monthly Training Topics',
            content: '• Month 1: Overcoming price objections\n• Month 2: Working with credit-challenged customers\n• Month 3: Emergency repair situations\n• Month 4: Upselling with financing\n• Month 5: Seasonal financing strategies\n• Month 6: Customer retention through financing'
          },
          {
            type: 'text',
            title: 'Performance Tracking',
            content: 'Track both individual and team performance with metrics that matter: application submission rate, approval rate, average ticket size with financing, and customer satisfaction scores. Use this data to identify coaching opportunities and celebrate successes.'
          },
          {
            type: 'interactive',
            title: 'Training Plan Builder',
            content: 'Use this tool to create a customized training plan for your team based on your business type and team size.',
            interactiveType: 'scenario'
          }
        ],
        keyTakeaways: [
          'First 30 days are critical for establishing proper financing habits',
          'Ongoing training keeps skills sharp and introduces new techniques',
          'Role-playing builds confidence for real customer interactions',
          'Performance tracking helps identify coaching opportunities and celebrate success'
        ]
      },
      {
        id: 'lesson-2-3',
        title: 'Customer Conversation Strategies',
        duration: '15 minutes',
        objectives: [
          'Learn the optimal timing for financing discussions',
          'Master natural conversation transitions',
          'Understand how to read customer buying signals'
        ],
        content: [
          {
            type: 'text',
            title: 'The Right Time to Discuss Financing',
            content: 'Timing is everything in financing conversations. The best time is after you\'ve established the customer\'s needs and interest but before you discuss the total price. This positions financing as a solution rather than a reaction to sticker shock.'
          },
          {
            type: 'example',
            title: 'Conversation Flow Example',
            content: '1. Build rapport and understand needs\n2. Present appropriate solutions\n3. Confirm interest and fit\n4. Introduce payment options (including financing)\n5. Discuss total investment\n6. Close the sale'
          },
          {
            type: 'text',
            title: 'Reading Customer Signals',
            content: 'Learn to recognize when customers might benefit from financing: hesitation about price, asking about payment options, mentioning budget constraints, or expressing urgency about getting the product but concern about immediate payment.'
          },
          {
            type: 'text',
            title: 'Natural Conversation Starters',
            content: 'Use phrases that feel helpful rather than sales-focused: "To make this more manageable..." "We have several payment options that might work better for you..." "Many of our customers find it easier to..."'
          },
          {
            type: 'tip',
            title: 'The Power of Assumption',
            content: 'Instead of asking "Would you like to finance this?" assume they want options: "Let me show you a couple of payment options that work well for this purchase." This removes the yes/no barrier and opens up the conversation.'
          },
          {
            type: 'warning',
            title: 'What NOT to Say',
            content: 'Avoid phrases that create negative associations: "Do you have bad credit?" "Can you afford this?" "Do you need to finance?" These create defensive reactions rather than open conversations.'
          }
        ],
        keyTakeaways: [
          'Discuss financing after establishing interest but before revealing total price',
          'Read customer signals to identify financing opportunities',
          'Use helpful, assumptive language rather than sales-focused questions',
          'Position financing as a beneficial option, not a last resort'
        ]
      }
    ],
    quiz: {
      id: 'quiz-2',
      title: 'Establishing a Credit Culture Assessment',
      passingScore: 80,
      timeLimit: 20,
      questions: [
        {
          id: 'q2-1',
          question: 'What are the four pillars of credit culture?',
          type: 'select-multiple',
          options: ['Communication', 'Training', 'Incentives', 'Leadership', 'Technology', 'Marketing'],
          correctAnswer: ['Communication', 'Training', 'Incentives', 'Leadership'],
          explanation: 'The four pillars of credit culture are Communication, Training, Incentives, and Leadership.',
          points: 20
        },
        {
          id: 'q2-2',
          question: 'When is the best time to discuss financing with a customer?',
          type: 'multiple-choice',
          options: [
            'Immediately when they walk in',
            'After establishing interest but before discussing total price',
            'Only when they ask about it',
            'After they express concern about the price'
          ],
          correctAnswer: 'After establishing interest but before discussing total price',
          explanation: 'The optimal time is after you\'ve established customer interest but before revealing the total price, positioning financing as a solution rather than a reaction.',
          points: 15
        },
        {
          id: 'q2-3',
          question: 'What should be included in the first 30 days of new employee onboarding?',
          type: 'select-multiple',
          options: [
            'Complete EasyPay University training',
            'Shadow experienced team members',
            'Practice with mock scenarios',
            'Handle applications with supervision',
            'Independent application handling',
            'Manage customer complaints'
          ],
          correctAnswer: ['Complete EasyPay University training', 'Shadow experienced team members', 'Practice with mock scenarios', 'Handle applications with supervision', 'Independent application handling'],
          explanation: 'The 30-day onboarding includes training, shadowing, practice, supervised handling, and independent handling. Complaint management comes later.',
          points: 20
        },
        {
          id: 'q2-4',
          question: 'Which phrase is better for starting a financing conversation?',
          type: 'multiple-choice',
          options: [
            '"Do you need financing?"',
            '"Can you afford this?"',
            '"Let me show you some payment options that work well for this purchase."',
            '"Do you have bad credit?"'
          ],
          correctAnswer: '"Let me show you some payment options that work well for this purchase."',
          explanation: 'Assumptive, helpful language is more effective than yes/no questions or phrases that create defensive reactions.',
          points: 15
        },
        {
          id: 'q2-5',
          question: 'Credit culture should focus only on training employees.',
          type: 'true-false',
          options: ['True', 'False'],
          correctAnswer: 'False',
          explanation: 'Credit culture requires all four pillars - training alone is not sufficient without communication standards, incentives, and leadership support.',
          points: 10
        },
        {
          id: 'q2-6',
          question: 'What are signs that a customer might benefit from financing?',
          type: 'select-multiple',
          options: [
            'Hesitation about price',
            'Asking about payment options',
            'Mentioning budget constraints',
            'Expressing urgency but payment concern',
            'Asking for discounts',
            'Comparing to competitors'
          ],
          correctAnswer: ['Hesitation about price', 'Asking about payment options', 'Mentioning budget constraints', 'Expressing urgency but payment concern'],
          explanation: 'These signals indicate potential financing interest. Asking for discounts or comparing competitors are different types of objections.',
          points: 20
        }
      ]
    },
    certificate: true,
    ebucksReward: 125
  },
  {
    id: 'module-3',
    title: 'Understanding EasyPay Finance Products by State',
    description: 'Learn which EasyPay Finance product is available in your state and master the features, benefits, and application process for your specific program.',
    estimatedTime: '45 minutes',
    difficulty: 'intermediate',
    prerequisites: ['module-1'],
    objectives: [
      'Understand which states offer which EasyPay Finance products',
      'Master the product available in your operating state',
      'Learn the legal and practical implications of your state\'s product',
      'Identify ideal customers for your state\'s program'
    ],
    lessons: [
      {
        id: 'lesson-3-1',
        title: 'EasyPay Finance State Coverage and Product Availability',
        duration: '15 minutes',
        objectives: [
          'Learn which states EasyPay Finance operates in',
          'Understand the one-product-per-state structure',
          'Identify your state\'s specific product offering'
        ],
        content: [
          {
            type: 'warning',
            title: 'Critical: One Product Per State',
            content: 'EasyPay Finance operates on a one-product-per-state model. Each state offers EITHER Retail Installment Contracts (RIC) OR Lease-to-Own (LTO), never both. This is determined by state regulations and licensing requirements.'
          },
          {
            type: 'text',
            title: 'EasyPay Finance Geographic Coverage',
            content: 'EasyPay Finance currently operates in 22 states across the United States, serving over 12,000 merchant locations. Our geographic coverage is strategically designed to comply with state-specific regulations and provide the most appropriate financing product for each region.'
          },
          {
            type: 'image',
            title: 'EasyPay State Coverage Map',
            content: 'Visual representation of EasyPay Finance geographic coverage across the United States.',
            imageUrl: '/easypay-state-map.svg',
            imageAlt: 'EasyPay Finance State Coverage Map',
            imageCaption: 'Green states: RIC available (19 states) • Teal states: LTO available (3 states) • Gray states: No service available'
          },
          {
            type: 'example',
            title: 'States Offering Retail Installment Contracts (RIC)',
            content: 'The following 19 states offer RIC (Retail Installment Contracts) ONLY:\n\n• Alaska (AK)\n• Arizona (AZ)\n• California (CA)\n• Delaware (DE)\n• Idaho (ID)\n• Kansas (KS)\n• Kentucky (KY)\n• Missouri (MO)\n• Nevada (NV)\n• New Hampshire (NH)\n• New Mexico (NM)\n• North Dakota (ND)\n• Oregon (OR)\n• Pennsylvania (PA)\n• South Dakota (SD)\n• Utah (UT)\n• Virginia (VA)\n• Washington (WA)\n• Wisconsin (WI)\n\nTotal: 19 RIC-only states'
          },
          {
            type: 'example',
            title: 'States Offering Lease-to-Own (LTO)',
            content: 'The following 3 states offer LTO (Lease-to-Own) ONLY:\n\n• Florida (FL)\n• Georgia (GA)\n• Texas (TX)\n\nTotal: 3 LTO-only states'
          },
          {
            type: 'text',
            title: 'States Where EasyPay Finance Does Not Operate',
            content: 'EasyPay Finance does not currently operate in 28 states plus Washington D.C. If your business is located in one of these areas, EasyPay Finance services are not available. These include:\n\nAlabama, Arkansas, Colorado, Connecticut, Hawaii, Illinois, Indiana, Iowa, Louisiana, Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Montana, Nebraska, New Jersey, New York, North Carolina, Ohio, Oklahoma, Rhode Island, South Carolina, Tennessee, Vermont, Washington D.C., West Virginia, and Wyoming.'
          },
          {
            type: 'tip',
            title: 'Know Your State\'s Product',
            content: 'As a merchant partner, it\'s essential to know which product your state offers. This determines everything about your customer experience, from application processes to contract terms. Never mention or offer the product that\'s not available in your state.'
          },
          {
            type: 'interactive',
            title: 'Knowledge Check: Match States to Products',
            content: 'Test your knowledge by matching each state to the correct EasyPay Finance product offering.',
            interactiveType: 'StateProductMatcher',
            interactionData: {
              instructions: 'Drag each state to the correct product category. Some states may not offer EasyPay services at all!',
              states: [
                { name: 'California', abbr: 'CA', correct: 'RIC' },
                { name: 'Texas', abbr: 'TX', correct: 'LTO' },
                { name: 'Florida', abbr: 'FL', correct: 'LTO' },
                { name: 'Georgia', abbr: 'GA', correct: 'LTO' },
                { name: 'Arizona', abbr: 'AZ', correct: 'RIC' },
                { name: 'Nevada', abbr: 'NV', correct: 'RIC' },
                { name: 'Washington', abbr: 'WA', correct: 'RIC' },
                { name: 'Oregon', abbr: 'OR', correct: 'RIC' },
                { name: 'New York', abbr: 'NY', correct: 'NONE' },
                { name: 'Illinois', abbr: 'IL', correct: 'NONE' },
                { name: 'Ohio', abbr: 'OH', correct: 'NONE' },
                { name: 'Pennsylvania', abbr: 'PA', correct: 'RIC' }
              ],
              categories: [
                { id: 'RIC', label: 'RIC States (19)', description: 'Retail Installment Contracts Only', color: 'green' },
                { id: 'LTO', label: 'LTO States (3)', description: 'Lease-to-Own Only', color: 'teal' },
                { id: 'NONE', label: 'No Service', description: 'EasyPay Not Available', color: 'gray' }
              ],
              successMessage: 'Excellent! You correctly identified which states offer which EasyPay Finance products.',
              failureMessage: 'Review the state coverage information above and try again. Remember: each state offers only ONE product type.',
              completionReward: 50
            }
          }
        ],
        keyTakeaways: [
          'EasyPay Finance operates in only 22 states nationwide',
          'Each state offers only ONE product: either RIC or LTO',
          '19 states offer RIC (Retail Installment Contracts) only',
          '3 states offer LTO (Lease-to-Own) only',
          '28 states plus D.C. have no EasyPay Finance services'
        ]
      },
      {
        id: 'lesson-3-2',
        title: 'Retail Installment Contracts (RIC) - For RIC States Only',
        duration: '15 minutes',
        objectives: [
          'Master RIC program features and benefits',
          'Understand RIC legal framework and Truth in Lending requirements',
          'Learn proper RIC terminology and disclosures'
        ],
        content: [
          {
            type: 'text',
            title: 'What is a Retail Installment Contract?',
            content: 'In the 19 RIC states, EasyPay Finance offers Retail Installment Contracts - a traditional credit sales program where merchants originate credit sales and execute retail installment contracts with customers. EasyPay then purchases and services these contracts, providing immediate funding to merchants.'
          },
          {
            type: 'text',
            title: 'RIC Legal Framework - Truth in Lending Act Compliance',
            content: 'RIC products are subject to the federal Truth in Lending Act (TILA), requiring specific disclosures including Annual Percentage Rate (APR), finance charges, amount financed, and total of payments. These disclosures must be provided before contract signing and use exact legal terminology.'
          },
          {
            type: 'example',
            title: 'RIC Key Features',
            content: '• Customer owns merchandise immediately upon contract signing\n• Finance charges accrue daily from contract date\n• 90-Day Finance Charge Cap: Maximum $40 if paid in full within 90 days\n• Same-day funding available if contract received by 4pm EST\n• No credit bureau reporting\n• Up to $5,000 financing available\n• Truth in Lending Act disclosures required'
          },
          {
            type: 'warning',
            title: 'Required RIC Disclosures',
            content: 'CRITICAL: Finance charges accrue daily from the date the agreement is signed. There is NEVER a finance charge free period. If customers pay their amount financed within 90 days, finance charges are capped at $40. To qualify, customers MUST pay more than regular scheduled payments.'
          },
          {
            type: 'text',
            title: 'RIC Customer Qualification',
            content: 'RIC customers need stable employment and income verification. While no minimum credit score is required, credit history is evaluated as part of the approval process. EasyPay may perform hard credit inquiries during underwriting.'
          }
        ],
        keyTakeaways: [
          'Available in 19 states only: AK, AZ, CA, DE, ID, KS, KY, MO, NV, NH, NM, ND, OR, PA, SD, UT, VA, WA, WI',
          'Customer owns merchandise immediately upon contract execution',
          'Finance charges accrue from day one - never a "free" period',
          '90-day finance charge cap of $40 requires extra payments beyond scheduled amounts'
        ]
      },
      {
        id: 'lesson-3-3',
        title: 'Lease-to-Own (LTO) - For LTO States Only',
        duration: '15 minutes',
        objectives: [
          'Master LTO program structure and rental-purchase framework',
          'Understand LTO ownership and tax collection processes',
          'Learn Early Purchase Option requirements and benefits'
        ],
        content: [
          {
            type: 'text',
            title: 'Understanding Lease-to-Own Structure',
            content: 'In the 3 LTO states (Florida, Georgia, and Texas), EasyPay Finance offers Lease-to-Own through EasyPay Leasing. This is a rental-purchase agreement where EasyPay Leasing purchases merchandise from merchants and leases it to customers. EasyPay retains ownership until the customer exercises their purchase option.'
          },
          {
            type: 'text',
            title: 'LTO Ownership and Legal Structure',
            content: 'CRITICAL: EasyPay Leasing owns the Personal Property throughout the lease term. Customers are renting the merchandise with options to purchase. Ownership only transfers when: (1) all lease payments are completed, OR (2) an Early Purchase Option is exercised.'
          },
          {
            type: 'example',
            title: 'LTO Key Features',
            content: '• EasyPay Leasing owns merchandise during lease term\n• Customer makes lease payments (not finance charges)\n• $39 mandatory processing fee collected at signing\n• 90-Day Early Purchase Option: Cash Price + $39 + taxes\n• Standard Early Purchase Option: 70% of remaining payments + fees\n• Customer can return merchandise anytime\n• No sales tax collected at point of sale'
          },
          {
            type: 'warning',
            title: 'LTO Tax Collection Process',
            content: 'CRITICAL PROCESS: Merchant lists EasyPay Leasing as purchaser and uses EasyPay\'s tax-exempt ID. NO sales tax is charged at point of sale. EasyPay Leasing collects applicable sales tax as part of lease payments. Estimated tax amounts are shown on page 2 of the lease agreement.'
          },
          {
            type: 'text',
            title: 'Early Purchase Options Explained',
            content: '90-Day Early Purchase Option: Cash Price + $39 processing fee + applicable taxes + any outstanding fees. Customer must pay MORE than regular scheduled payments.\n\nStandard Early Purchase Option (after 90 days): 70% of remaining regular payments + processing fees + taxes. Available throughout the lease term.'
          }
        ],
        keyTakeaways: [
          'Available in 3 states only: Florida (FL), Georgia (GA), Texas (TX)',
          'EasyPay Leasing owns merchandise until purchase option exercised',
          'Mandatory $39 processing fee must be collected at contract signing',
          'No sales tax collected by merchant - handled through lease payments'
        ]
      }
    ],
    quiz: {
      id: 'quiz-3',
      title: 'State-Specific Product Knowledge Assessment',
      passingScore: 80,
      timeLimit: 15,
      questions: [
        {
          id: 'q3-1',
          question: 'How many states does EasyPay Finance currently operate in?',
          type: 'multiple-choice',
          options: ['19 states', '21 states', '22 states', '25 states'],
          correctAnswer: '22 states',
          explanation: 'EasyPay Finance operates in 22 states total: 19 RIC-only states and 3 LTO-only states.',
          points: 15
        },
        {
          id: 'q3-2',
          question: 'How many states offer both RIC and LTO products?',
          type: 'multiple-choice',
          options: ['0 states', '3 states', '19 states', '22 states'],
          correctAnswer: '0 states',
          explanation: 'NO state offers both products. Each state has either RIC or LTO, never both.',
          points: 20
        },
        {
          id: 'q3-3',
          question: 'Which states offer Lease-to-Own (LTO) products?',
          type: 'multiple-choice',
          options: ['California, Arizona, Nevada', 'Florida, Georgia, Texas', 'New York, New Jersey, Connecticut', 'All 22 operating states'],
          correctAnswer: 'Florida, Georgia, Texas',
          explanation: 'Only 3 states offer LTO: Florida (FL), Georgia (GA), and Texas (TX).',
          points: 15
        },
        {
          id: 'q3-4',
          question: 'What is the 90-day finance charge cap for RIC products?',
          type: 'multiple-choice',
          options: ['$25', '$39', '$40', '$50'],
          correctAnswer: '$40',
          explanation: 'RIC customers who pay their amount financed within 90 days have finance charges capped at $40 maximum.',
          points: 15
        },
        {
          id: 'q3-5',
          question: 'What is the mandatory processing fee for LTO agreements?',
          type: 'multiple-choice',
          options: ['$25', '$35', '$39', '$40'],
          correctAnswer: '$39',
          explanation: 'All LTO agreements require a mandatory $39 processing fee collected at contract signing.',
          points: 15
        },
        {
          id: 'q3-6',
          question: 'In LTO agreements, who collects sales tax from the customer?',
          type: 'multiple-choice',
          options: ['The merchant at point of sale', 'EasyPay Leasing through lease payments', 'The customer pays directly to the state', 'No sales tax applies to LTO'],
          correctAnswer: 'EasyPay Leasing through lease payments',
          explanation: 'Merchants do NOT collect sales tax on LTO transactions. EasyPay Leasing collects applicable sales tax as part of the lease payments.',
          points: 20
        }
      ]
    },
    certificate: true,
    ebucksReward: 125
  },
  {
    id: 'module-4',
    title: 'How to Submit a Retail Installment Contract (RIC) Application',
    description: 'Master the complete RIC application process from customer qualification to contract completion and funding.',
    estimatedTime: '55 minutes',
    difficulty: 'intermediate',
    prerequisites: ['module-1', 'module-3'],
    objectives: [
      'Navigate the RIC application process step-by-step',
      'Understand customer qualification and documentation requirements',
      'Learn how to handle RIC contract signing and funding',
      'Master troubleshooting common RIC application issues'
    ],
    lessons: [
      {
        id: 'lesson-4-1',
        title: 'RIC Customer Qualification and Pre-Application',
        duration: '15 minutes',
        objectives: [
          'Assess customer suitability for RIC financing',
          'Gather required information and documentation',
          'Set proper expectations for the application process'
        ],
        content: [
          {
            type: 'text',
            title: 'Pre-Qualifying RIC Customers',
            content: 'Before starting a RIC application, it\'s important to qualify the customer to ensure they\'re a good fit for this type of financing. This saves time for both you and the customer and increases approval rates.'
          },
          {
            type: 'checklist',
            title: 'RIC Pre-Qualification Checklist',
            items: [
              'Customer has steady employment (minimum 6 months current job)',
              'Monthly income is sufficient for payment obligations',
              'Customer understands immediate ownership and responsibilities',
              'Valid government-issued ID available',
              'Active checking account for payments',
              'Customer is comfortable with traditional financing structure'
            ]
          },
          {
            type: 'text',
            title: 'Required Documentation',
            content: 'Gather necessary documents before starting the application. Having everything ready streamlines the process and creates a professional experience for the customer.'
          },
          {
            type: 'example',
            title: 'Documentation Checklist',
            content: '• Government-issued photo ID (driver\'s license, state ID, passport)\n• Proof of income (pay stubs, bank statements, tax returns)\n• Bank account information for automatic payments\n• Social Security card or verification\n• Proof of residence (utility bill, lease agreement)\n• References (personal and professional)'
          },
          {
            type: 'text',
            title: 'Setting Expectations',
            content: 'Explain the RIC process to customers upfront. Let them know they\'ll own the item immediately, the typical approval timeline, and what happens after approval. This prevents surprises and builds confidence in the process.'
          },
          {
            type: 'tip',
            title: 'Income Verification Tips',
            content: 'For self-employed customers, bank statements showing regular deposits work well. For commissioned employees, use average monthly income over 3-6 months. For new employees, an offer letter with start date and salary can supplement early pay stubs.'
          }
        ],
        keyTakeaways: [
          'Pre-qualification saves time and increases approval rates',
          'Gather all required documentation before starting the application',
          'Set clear expectations about the RIC process and timeline',
          'Steady employment and sufficient income are key qualification factors'
        ]
      },
      {
        id: 'lesson-4-2',
        title: 'Step-by-Step RIC Application Process',
        duration: '25 minutes',
        objectives: [
          'Navigate each step of the RIC application system',
          'Input customer information accurately and completely',
          'Handle the approval process and customer communication'
        ],
        content: [
          {
            type: 'text',
            title: 'Starting the RIC Application',
            content: 'Access the Business Center portal and navigate to the RIC application section. Select "New RIC Application" and ensure you have the customer\'s information and documentation readily available.'
          },
          {
            type: 'checklist',
            title: 'Step 1: Customer Information Entry',
            items: [
              'Enter customer\'s full legal name (as shown on ID)',
              'Input complete current address',
              'Provide phone numbers (primary and alternative)',
              'Enter email address for correspondence',
              'Input Social Security Number accurately',
              'Enter date of birth (must match ID)'
            ]
          },
          {
            type: 'text',
            title: 'Step 2: Employment and Income Information',
            content: 'Accurate employment and income information is crucial for RIC approval. Enter current employer information, position, length of employment, and monthly income. For multiple income sources, include all regular, verifiable income.'
          },
          {
            type: 'warning',
            title: 'Income Calculation Important',
            content: 'Include all regular income sources: salary, overtime, commissions, bonuses, part-time work, and other reliable income. Do not include one-time payments or irregular income sources.'
          },
          {
            type: 'text',
            title: 'Step 3: Banking and Financial Information',
            content: 'Enter the customer\'s primary checking account information for automatic payments. Verify account and routing numbers carefully. Include information about savings accounts if relevant for qualification.'
          },
          {
            type: 'text',
            title: 'Step 4: References and Additional Information',
            content: 'Provide personal and professional references who can vouch for the customer\'s character and stability. Include contact information and relationship to the customer.'
          },
          {
            type: 'text',
            title: 'Step 5: Purchase Details',
            content: 'Enter detailed information about the merchandise being financed: description, model numbers, total amount, any warranties, and delivery details if applicable.'
          },
          {
            type: 'text',
            title: 'Step 6: Review and Submit',
            content: 'Carefully review all entered information with the customer before submitting. Ensure accuracy as changes after submission can delay processing.'
          },
          {
            type: 'interactive',
            title: 'RIC Application Simulator',
            content: 'Practice the RIC application process with this interactive simulator using sample customer data.',
            interactiveType: 'scenario'
          }
        ],
        keyTakeaways: [
          'Accurate information entry is crucial for smooth processing',
          'Include all regular income sources for better approval chances',
          'Verify banking information carefully to avoid payment issues',
          'Review all information with the customer before submission'
        ]
      },
      {
        id: 'lesson-4-3',
        title: 'RIC Approval, Contract Signing, and Completion',
        duration: '15 minutes',
        objectives: [
          'Handle the approval notification and next steps',
          'Guide customers through contract signing process',
          'Complete funding and delivery procedures'
        ],
        content: [
          {
            type: 'text',
            title: 'Approval Notification',
            content: 'RIC approvals typically come within hours but can take up to 24 hours for complex applications. You\'ll receive notification through the Business Center portal and the customer will receive direct communication about their approval.'
          },
          {
            type: 'text',
            title: 'Contract Generation and Review',
            content: 'Once approved, the system generates the RIC contract with all terms, payment amounts, and conditions. Review the contract with the customer, explaining key terms, payment schedule, and their ownership rights and responsibilities.'
          },
          {
            type: 'checklist',
            title: 'Contract Review Points',
            items: [
              'Total contract amount and payment breakdown',
              'Payment schedule and due dates',
              'Interest rate and fees',
              'Customer ownership rights and responsibilities',
              'Default and late payment policies',
              'Early payoff options and calculations'
            ]
          },
          {
            type: 'text',
            title: 'Electronic Signature Process',
            content: 'The customer will complete electronic signature through a secure link sent to their email or phone. Ensure they have access to their device and assist if needed with the signing process.'
          },
          {
            type: 'text',
            title: 'Funding and Delivery',
            content: 'Once the contract is signed, funding typically occurs the same business day if received by 4pm EST, or next business day otherwise. Confirm funding in your portal before releasing merchandise to the customer.'
          },
          {
            type: 'tip',
            title: 'Customer Service Excellence',
            content: 'Stay with the customer throughout the signing process. Answer questions, explain terms clearly, and ensure they\'re comfortable with their decision. This builds trust and reduces buyer\'s remorse.'
          },
          {
            type: 'warning',
            title: 'Important Funding Rule',
            content: 'Never release merchandise to the customer until you receive funding confirmation in your Business Center portal. This protects your business from potential losses.'
          },
          {
            type: 'interactive',
            title: 'Payment Calculator Tool',
            content: 'Help customers understand their payment options with this interactive calculator!',
            interactiveType: 'financing-calculator'
          }
        ],
        keyTakeaways: [
          'RIC approvals typically come within hours but can take up to 24 hours',
          'Review all contract terms carefully with the customer',
          'Assist customers through the electronic signature process',
          'Only release merchandise after receiving funding confirmation'
        ]
      }
    ],
    quiz: {
      id: 'quiz-4',
      title: 'RIC Application Process Assessment',
      passingScore: 80,
      timeLimit: 20,
      questions: [
        {
          id: 'q4-1',
          question: 'What is the minimum employment duration typically required for RIC qualification?',
          type: 'multiple-choice',
          options: ['3 months', '6 months', '1 year', '2 years'],
          correctAnswer: '6 months',
          explanation: 'RIC financing typically requires minimum 6 months of steady employment at the current job.',
          points: 10
        },
        {
          id: 'q4-2',
          question: 'When should you release merchandise to the customer?',
          type: 'multiple-choice',
          options: [
            'Immediately after approval',
            'After contract signing',
            'After receiving funding confirmation',
            'When the customer pays a deposit'
          ],
          correctAnswer: 'After receiving funding confirmation',
          explanation: 'Never release merchandise until you receive funding confirmation in your Business Center portal.',
          points: 15
        },
        {
          id: 'q4-3',
          question: 'Which documents are typically required for RIC applications? (Select all that apply)',
          type: 'select-multiple',
          options: [
            'Government-issued photo ID',
            'Proof of income',
            'Bank account information',
            'Social Security verification',
            'Proof of residence',
            'Credit report'
          ],
          correctAnswer: ['Government-issued photo ID', 'Proof of income', 'Bank account information', 'Social Security verification', 'Proof of residence'],
          explanation: 'All listed documents except credit report are typically required. EasyPay pulls credit reports directly.',
          points: 20
        },
        {
          id: 'q4-4',
          question: 'What should be included when calculating customer income?',
          type: 'select-multiple',
          options: [
            'Base salary',
            'Regular overtime',
            'Commissions',
            'One-time bonuses',
            'Part-time job income',
            'Lottery winnings'
          ],
          correctAnswer: ['Base salary', 'Regular overtime', 'Commissions', 'Part-time job income'],
          explanation: 'Include all regular, verifiable income sources. Exclude one-time payments and irregular income like lottery winnings.',
          points: 15
        },
        {
          id: 'q4-5',
          question: 'How long do RIC approvals typically take?',
          type: 'multiple-choice',
          options: ['Within minutes', 'Within hours, up to 24 hours', '2-3 business days', '1 week'],
          correctAnswer: 'Within hours, up to 24 hours',
          explanation: 'RIC approvals typically come within hours but can take up to 24 hours for complex applications.',
          points: 10
        },
        {
          id: 'q4-6',
          question: 'What happens if funding is received after 4pm EST?',
          type: 'multiple-choice',
          options: [
            'Funding occurs the same day',
            'Funding occurs the next business day',
            'Funding is delayed 48 hours',
            'Application must be resubmitted'
          ],
          correctAnswer: 'Funding occurs the next business day',
          explanation: 'Contracts received after 4pm EST are funded the next business day.',
          points: 10
        },
        {
          id: 'q4-7',
          question: 'During contract review, what key points should you explain to the customer? (Select all that apply)',
          type: 'select-multiple',
          options: [
            'Total contract amount',
            'Payment schedule',
            'Interest rate and fees',
            'Ownership rights',
            'Early payoff options',
            'Competitor pricing'
          ],
          correctAnswer: ['Total contract amount', 'Payment schedule', 'Interest rate and fees', 'Ownership rights', 'Early payoff options'],
          explanation: 'Review all contract terms except competitor pricing, which is not relevant to the contract review.',
          points: 20
        }
      ]
    },
    certificate: true,
    ebucksReward: 130
  },
  {
    id: 'module-5',
    title: 'How to Submit a Lease-to-Own (LTO) Application',
    description: 'Master the LTO application process, including customer qualification, application submission, contract signing, and processing fee collection.',
    estimatedTime: '60 minutes',
    difficulty: 'intermediate',
    prerequisites: ['module-1', 'module-3'],
    objectives: [
      'Navigate the complete LTO application process',
      'Understand LTO-specific qualification requirements',
      'Master the rental-purchase agreement signing process',
      'Learn proper processing fee collection procedures'
    ],
    lessons: [
      {
        id: 'lesson-5-1',
        title: 'LTO Customer Assessment and Qualification',
        duration: '15 minutes',
        objectives: [
          'Identify customers who benefit most from LTO',
          'Understand LTO qualification requirements',
          'Prepare customers for the LTO application process'
        ],
        content: [
          {
            type: 'text',
            title: 'Who Benefits from LTO?',
            content: 'LTO is designed for customers who need financing but may not qualify for traditional credit programs. This includes customers with challenged credit, new employment, variable income, or those who prefer the flexibility of lease-to-own arrangements.'
          },
          {
            type: 'example',
            title: 'Ideal LTO Customers',
            content: '• Credit-challenged customers (below 600 credit score)\n• Customers with recent employment changes\n• Self-employed or commission-based workers\n• Customers wanting lower approval requirements\n• Those interested in early purchase savings\n• Customers preferring flexible payment options'
          },
          {
            type: 'text',
            title: 'LTO Qualification Requirements',
            content: 'LTO has more flexible qualification requirements than traditional financing. The focus is on current ability to pay rather than credit history, making it accessible to more customers.'
          },
          {
            type: 'checklist',
            title: 'LTO Qualification Checklist',
            items: [
              'Valid government-issued ID',
              'Verifiable income source (any amount)',
              'Active checking account',
              'Reasonable income-to-payment ratio',
              'No recent bankruptcy (timing varies)',
              'Employment or income verification'
            ]
          },
          {
            type: 'text',
            title: 'Income Verification for LTO',
            content: 'LTO accepts various forms of income verification including pay stubs, bank statements, benefit letters, unemployment benefits, disability payments, and other regular income sources. The key is demonstrating ability to make the agreed payments.'
          },
          {
            type: 'tip',
            title: 'LTO Advantage',
            content: 'Because EasyPay Leasing retains ownership until purchase, they can approve customers that traditional financing cannot. This means higher approval rates and the ability to serve more customers.'
          },
          {
            type: 'warning',
            title: 'Set Proper Expectations',
            content: 'Explain that LTO is a rental-purchase agreement, not traditional financing. Customers should understand the early purchase benefits, processing fee, and that they can return the item without further obligation.'
          }
        ],
        keyTakeaways: [
          'LTO serves customers who may not qualify for traditional financing',
          'Qualification focuses on current ability to pay rather than credit history',
          'Various income sources are acceptable for LTO verification',
          'Higher approval rates make LTO accessible to more customers'
        ]
      },
      {
        id: 'lesson-5-2',
        title: 'LTO Application Process Step-by-Step',
        duration: '25 minutes',
        objectives: [
          'Navigate the LTO application system efficiently',
          'Input customer information accurately',
          'Handle the unique aspects of LTO processing'
        ],
        content: [
          {
            type: 'text',
            title: 'Starting the LTO Application',
            content: 'Access the Business Center portal and select "New LTO Application." The LTO process is streamlined for speed and efficiency, typically providing decisions within minutes.'
          },
          {
            type: 'text',
            title: 'Step 1: Basic Customer Information',
            content: 'Enter the customer\'s basic information including full name, address, phone, email, and Social Security Number. Accuracy is important as this information is used for verification and communication.'
          },
          {
            type: 'text',
            title: 'Step 2: Employment and Income Details',
            content: 'For LTO, employment and income verification is more flexible. Include current employer, position, length of employment, and monthly income. For non-traditional employment, explain the income source clearly.'
          },
          {
            type: 'example',
            title: 'Non-Traditional Income Examples',
            content: '• Self-employment income\n• Commission-based earnings\n• Social Security benefits\n• Disability payments\n• Unemployment benefits\n• Pension income\n• Part-time or gig work'
          },
          {
            type: 'text',
            title: 'Step 3: Banking Information',
            content: 'Enter checking account information for automatic payments. LTO typically requires an active checking account but may be more flexible on minimum balance requirements compared to traditional financing.'
          },
          {
            type: 'text',
            title: 'Step 4: Purchase Information',
            content: 'Enter detailed information about the merchandise to be leased: description, model numbers, retail price, and any special features. This information appears on the rental-purchase agreement.'
          },
          {
            type: 'text',
            title: 'Step 5: Payment Preferences',
            content: 'LTO offers flexible payment schedules including weekly, bi-weekly, or monthly payments. Discuss options with the customer and select the preference that works best for their income schedule.'
          },
          {
            type: 'text',
            title: 'Step 6: Submit and Await Decision',
            content: 'Review all information carefully and submit the application. LTO decisions typically come within minutes, allowing you to move quickly to the next steps.'
          },
          {
            type: 'interactive',
            title: 'LTO Application Practice',
            content: 'Practice the LTO application process with various customer scenarios to build confidence and speed.',
            interactiveType: 'scenario'
          }
        ],
        keyTakeaways: [
          'LTO applications are streamlined for quick processing',
          'Income verification is flexible and includes non-traditional sources',
          'Payment schedule options accommodate different customer needs',
          'Decisions typically come within minutes of submission'
        ]
      },
      {
        id: 'lesson-5-3',
        title: 'Contract Signing and Processing Fee Collection',
        duration: '20 minutes',
        objectives: [
          'Guide customers through rental-purchase agreement signing',
          'Properly collect the required processing fee',
          'Complete the LTO transaction and delivery process'
        ],
        content: [
          {
            type: 'text',
            title: 'Rental-Purchase Agreement Review',
            content: 'Once approved, review the rental-purchase agreement with the customer. Explain key terms including payment amounts, early purchase options, return policies, and customer responsibilities.'
          },
          {
            type: 'checklist',
            title: 'Agreement Review Points',
            items: [
              'Payment amount and schedule',
              'Early purchase option and savings',
              'Total lease cost if payments continue full term',
              'Customer\'s right to return without further obligation',
              'Care and maintenance responsibilities',
              'Late payment policies and fees'
            ]
          },
          {
            type: 'text',
            title: 'Early Purchase Benefits Explanation',
            content: 'One of LTO\'s biggest selling points is the early purchase option. Clearly explain how much the customer can save by paying off early - often 30-50% of the total lease cost. Use specific dollar amounts to make the savings tangible.'
          },
          {
            type: 'example',
            title: 'Early Purchase Example',
            content: 'For a $2,000 appliance:\n• Total lease payments: $3,200 over 24 months\n• Early purchase at 6 months: $1,600 (save $1,600)\n• Early purchase at 12 months: $2,000 (save $1,200)\n• Customer can choose timing that works best'
          },
          {
            type: 'text',
            title: 'Processing Fee Collection',
            content: 'LTO requires a $39 processing fee that MUST be collected before the customer can take possession. This fee can be paid by cash, check, or card, but cannot be added to the lease agreement.'
          },
          {
            type: 'warning',
            title: 'Critical Processing Fee Rule',
            content: 'The $39 processing fee is mandatory and must be collected before delivery. This fee cannot be waived, financed, or added to the lease payments. Ensure collection before releasing merchandise.'
          },
          {
            type: 'text',
            title: 'Electronic Signature Process',
            content: 'The customer completes electronic signature through a secure link. The rental-purchase agreement is legally binding once signed, so ensure the customer understands all terms before signing.'
          },
          {
            type: 'text',
            title: 'Delivery and Completion',
            content: 'Once the agreement is signed and processing fee collected, the customer can take possession of the merchandise. Provide them with copies of the agreement and information about making payments.'
          },
          {
            type: 'tip',
            title: 'Customer Service Excellence',
            content: 'Provide excellent service throughout the LTO process. Explain benefits clearly, answer questions patiently, and ensure customers feel confident about their decision. Happy LTO customers often become repeat customers.'
          }
        ],
        keyTakeaways: [
          'Review all rental-purchase agreement terms carefully with customers',
          'Emphasize early purchase savings as a key benefit',
          'Processing fee of $39 must be collected before delivery',
          'Electronic signature completes the legal agreement'
        ]
      }
    ],
    quiz: {
      id: 'quiz-5',
      title: 'LTO Application Process Assessment',
      passingScore: 80,
      timeLimit: 25,
      questions: [
        {
          id: 'q5-1',
          question: 'What is the required processing fee for LTO agreements?',
          type: 'multiple-choice',
          options: ['$25', '$39', '$50', '$75'],
          correctAnswer: '$39',
          explanation: 'LTO agreements require a mandatory $39 processing fee that must be collected before delivery.',
          points: 10
        },
        {
          id: 'q5-2',
          question: 'When must the processing fee be collected?',
          type: 'multiple-choice',
          options: [
            'With the first lease payment',
            'Before the customer takes possession',
            'Within 30 days of signing',
            'It can be added to the lease payments'
          ],
          correctAnswer: 'Before the customer takes possession',
          explanation: 'The processing fee must be collected before the customer can take possession of the merchandise.',
          points: 15
        },
        {
          id: 'q5-3',
          question: 'Which income sources are acceptable for LTO applications? (Select all that apply)',
          type: 'select-multiple',
          options: [
            'Employment wages',
            'Self-employment income',
            'Social Security benefits',
            'Disability payments',
            'Unemployment benefits',
            'One-time lottery winnings'
          ],
          correctAnswer: ['Employment wages', 'Self-employment income', 'Social Security benefits', 'Disability payments', 'Unemployment benefits'],
          explanation: 'LTO accepts various regular income sources but not one-time windfalls like lottery winnings.',
          points: 20
        },
        {
          id: 'q5-4',
          question: 'How much can customers typically save with early purchase options?',
          type: 'multiple-choice',
          options: ['10-20%', '20-30%', '30-50%', '50-70%'],
          correctAnswer: '30-50%',
          explanation: 'Early purchase options typically allow customers to save 30-50% of the total lease cost.',
          points: 15
        },
        {
          id: 'q5-5',
          question: 'LTO decisions typically come within minutes of application submission.',
          type: 'true-false',
          options: ['True', 'False'],
          correctAnswer: 'True',
          explanation: 'LTO applications are processed quickly, typically providing decisions within minutes.',
          points: 10
        },
        {
          id: 'q5-6',
          question: 'What payment schedule options are available for LTO? (Select all that apply)',
          type: 'select-multiple',
          options: ['Weekly', 'Bi-weekly', 'Monthly', 'Quarterly', 'Semi-annually', 'Annually'],
          correctAnswer: ['Weekly', 'Bi-weekly', 'Monthly'],
          explanation: 'LTO offers weekly, bi-weekly, and monthly payment options to accommodate different customer needs.',
          points: 15
        },
        {
          id: 'q5-7',
          question: 'Which customers are ideal for LTO programs? (Select all that apply)',
          type: 'select-multiple',
          options: [
            'Credit-challenged customers',
            'Self-employed workers',
            'Customers wanting early purchase savings',
            'Customers preferring immediate ownership',
            'Commission-based earners',
            'Customers with perfect credit seeking lowest rates'
          ],
          correctAnswer: ['Credit-challenged customers', 'Self-employed workers', 'Customers wanting early purchase savings', 'Commission-based earners'],
          explanation: 'LTO is ideal for credit-challenged, self-employed, commission-based customers and those wanting early purchase savings. LTO provides flexible payment options and early purchase opportunities.',
          points: 15
        }
      ]
    },
    certificate: true,
    ebucksReward: 135
  },
  {
    id: 'module-6',
    title: 'Handling Customer Objections',
    description: 'Master the art of addressing customer concerns and objections about financing, turning skepticism into confidence and increasing approval rates.',
    estimatedTime: '65 minutes',
    difficulty: 'advanced',
    prerequisites: ['module-1', 'module-2'],
    objectives: [
      'Identify common customer objections and their root causes',
      'Learn proven techniques for addressing each type of objection',
      'Practice objection handling through realistic scenarios',
      'Build confidence in difficult customer conversations'
    ],
    lessons: [
      {
        id: 'lesson-6-1',
        title: 'Understanding Customer Objections',
        duration: '20 minutes',
        objectives: [
          'Recognize the psychology behind customer objections',
          'Categorize different types of objections',
          'Understand the difference between objections and concerns'
        ],
        content: [
          {
            type: 'text',
            title: 'The Psychology of Objections',
            content: 'Customer objections are rarely about the actual issue they state. Most objections stem from fear, uncertainty, past negative experiences, or lack of understanding. Recognizing the emotional root helps you address the real concern, not just the surface objection.'
          },
          {
            type: 'text',
            title: 'Types of Customer Objections',
            content: 'Objections generally fall into four categories: Price/Cost, Trust/Credibility, Need/Urgency, and Process/Complexity. Understanding which category you\'re dealing with helps you choose the most effective response strategy.'
          },
          {
            type: 'example',
            title: 'Price/Cost Objections',
            content: '• "This is too expensive"\n• "I can\'t afford the payments"\n• "I\'ll just save up and pay cash"\n• "The interest rate is too high"\n• "I can get a better deal elsewhere"'
          },
          {
            type: 'example',
            title: 'Trust/Credibility Objections',
            content: '• "I don\'t trust financing companies"\n• "This sounds too good to be true"\n• "I\'ve been burned before"\n• "I don\'t want my credit checked"\n• "What\'s the catch?"'
          },
          {
            type: 'example',
            title: 'Need/Urgency Objections',
            content: '• "I need to think about it"\n• "I want to shop around"\n• "I\'m not sure I really need this"\n• "I can wait until later"\n• "Let me discuss with my spouse"'
          },
          {
            type: 'example',
            title: 'Process/Complexity Objections',
            content: '• "This seems complicated"\n• "I don\'t have time for paperwork"\n• "I don\'t understand the terms"\n• "Do I really own it or not?"\n• "What if something goes wrong?"'
          },
          {
            type: 'text',
            title: 'Objections vs. Concerns',
            content: 'A concern is a legitimate question seeking information. An objection is resistance that requires addressing underlying emotions. Learning to distinguish between them helps you respond appropriately - answer concerns with facts, address objections with empathy first.'
          },
          {
            type: 'tip',
            title: 'The Golden Rule of Objections',
            content: 'Never argue with an objection. Instead, acknowledge it, understand it, and then address the underlying concern. "I understand your concern about..." is always a good starting point.'
          }
        ],
        keyTakeaways: [
          'Objections usually stem from fear, uncertainty, or lack of understanding',
          'Four main categories: Price, Trust, Need, and Process objections',
          'Distinguish between concerns (need information) and objections (need empathy)',
          'Never argue with objections - acknowledge and address the root cause'
        ]
      },
      {
        id: 'lesson-6-2',
        title: 'Objection Handling Techniques and Scripts',
        duration: '25 minutes',
        objectives: [
          'Learn the HEAR method for objection handling',
          'Practice specific responses to common objections',
          'Develop natural, conversational objection handling skills'
        ],
        content: [
          {
            type: 'text',
            title: 'The HEAR Method',
            content: 'HEAR stands for Halt, Empathize, Ask, Respond. This four-step method ensures you fully understand the objection before attempting to address it, leading to more effective responses and better customer relationships.'
          },
          {
            type: 'checklist',
            title: 'The HEAR Process',
            items: [
              'HALT: Stop talking and listen completely to the objection',
              'EMPATHIZE: Acknowledge their concern and show understanding',
              'ASK: Ask clarifying questions to understand the real issue',
              'RESPOND: Address the underlying concern with appropriate information'
            ]
          },
          {
            type: 'text',
            title: 'Handling Price Objections',
            content: 'Price objections are often about value perception rather than actual affordability. Focus on breaking down costs, emphasizing benefits, and showing how financing makes purchases more manageable.'
          },
          {
            type: 'example',
            title: 'Price Objection Scripts',
            content: 'Objection: "This is too expensive"\nResponse: "I understand cost is important to you. When you break it down to weekly payments, this comes to about $X per week - less than many people spend on coffee. And you get to enjoy the benefits immediately while paying over time. Does that help put it in perspective?"'
          },
          {
            type: 'text',
            title: 'Addressing Trust Concerns',
            content: 'Trust objections require transparency and education. Share information about EasyPay\'s 20+ year history, explain how the programs work, and offer references or testimonials when appropriate.'
          },
          {
            type: 'example',
            title: 'Trust Objection Scripts',
            content: 'Objection: "I don\'t trust financing companies"\nResponse: "I completely understand that concern - there are some companies that don\'t put customers first. That\'s exactly why we partner with EasyPay Finance. They\'ve been helping people for over 20 years with transparent terms and no hidden fees. Let me show you exactly how this works..."'
          },
          {
            type: 'text',
            title: 'Overcoming Urgency Objections',
            content: 'Need and urgency objections often indicate the customer needs more information or time to process. Provide additional value information and create appropriate urgency without pressure.'
          },
          {
            type: 'example',
            title: 'Urgency Objection Scripts',
            content: 'Objection: "I need to think about it"\nResponse: "Of course, this is an important decision. What specific aspects would you like to think through? I\'d be happy to address any questions now so you have all the information you need."'
          },
          {
            type: 'text',
            title: 'Simplifying Process Concerns',
            content: 'Process objections require breaking down the steps and showing how simple the process really is. Focus on what the customer needs to do, not all the behind-the-scenes work.'
          },
          {
            type: 'example',
            title: 'Process Objection Scripts',
            content: 'Objection: "This seems complicated"\nResponse: "It\'s actually much simpler than it appears. For you, it\'s just three easy steps: provide some basic information, review and sign the agreement, and take your purchase home. The whole process typically takes about 15 minutes. Would you like me to walk you through it?"'
          },
          {
            type: 'interactive',
            title: 'Objection Handling Practice',
            content: 'Practice handling various objections using the HEAR method with realistic customer scenarios.',
            interactiveType: 'scenario'
          }
        ],
        keyTakeaways: [
          'Use the HEAR method: Halt, Empathize, Ask, Respond',
          'Price objections are often about value perception, not actual affordability',
          'Trust objections require transparency and education about EasyPay\'s reputation',
          'Process objections need simplification and step-by-step explanation'
        ]
      },
      {
        id: 'lesson-6-3',
        title: 'Advanced Objection Handling and Difficult Situations',
        duration: '20 minutes',
        objectives: [
          'Handle multiple objections and persistent resistance',
          'Manage emotional customers and difficult situations',
          'Know when and how to gracefully disengage'
        ],
        content: [
          {
            type: 'text',
            title: 'Handling Multiple Objections',
            content: 'Some customers raise multiple objections in sequence. Address each one individually using the HEAR method, but also look for patterns. Often, multiple objections indicate one underlying concern that needs addressing.'
          },
          {
            type: 'text',
            title: 'The "Yes, And" Technique',
            content: 'Instead of using "Yes, but" which creates conflict, use "Yes, and" to acknowledge their concern while adding helpful information. This keeps the conversation collaborative rather than confrontational.'
          },
          {
            type: 'example',
            title: 'Yes, And in Action',
            content: 'Customer: "I\'m worried about my credit and the payments are high"\nInstead of: "Yes, but our approval rates are high and payments are manageable"\nTry: "Yes, I understand credit concerns, and that\'s exactly why many customers choose our lease-to-own option - it has more flexible approval requirements and you can pay it off early to save money."'
          },
          {
            type: 'text',
            title: 'Managing Emotional Customers',
            content: 'When customers become emotional, frustrated, or angry, focus on de-escalation first. Acknowledge their emotions, speak calmly, and avoid taking things personally. Once emotions are managed, you can address the logical concerns.'
          },
          {
            type: 'checklist',
            title: 'De-escalation Techniques',
            items: [
              'Lower your voice and speak more slowly',
              'Use the customer\'s name frequently',
              'Acknowledge their emotions: "I can see you\'re frustrated"',
              'Take responsibility where appropriate: "Let me help fix this"',
              'Focus on solutions, not problems',
              'Give them time to express their concerns fully'
            ]
          },
          {
            type: 'text',
            title: 'The Credit Conversation',
            content: 'Credit-related objections require special sensitivity. Many customers have been embarrassed or rejected before. Approach credit discussions with empathy and focus on solutions rather than problems.'
          },
          {
            type: 'example',
            title: 'Credit Objection Response',
            content: 'Objection: "My credit is terrible, I probably won\'t qualify"\nResponse: "I appreciate you being upfront about that. The good news is that our programs are specifically designed to help people in your situation. We look at much more than just credit scores - your current income and stability matter more to us. Let\'s see what options are available for you."'
          },
          {
            type: 'text',
            title: 'When to Walk Away',
            content: 'Sometimes customers aren\'t ready to move forward, and that\'s okay. Recognize when to gracefully disengage while leaving the door open for future opportunities. Never pressure or guilt customers into decisions.'
          },
          {
            type: 'tip',
            title: 'Graceful Exit Strategy',
            content: 'When a customer isn\'t ready: "I completely understand this is a big decision. Here\'s my card with information about the programs we discussed. Feel free to call me if you have any questions or when you\'re ready to move forward. There\'s no pressure - we\'ll be here when the timing is right for you."'
          },
          {
            type: 'interactive',
            title: 'Objection Handling Trainer',
            content: 'Practice your objection handling skills with realistic scenarios!',
            interactiveType: 'objection-trainer',
            objections: [
              {
                objection: 'I don\'t want to get into debt',
                responses: [
                  { text: 'This isn\'t debt, it\'s a smart way to spread payments', rating: 'good' },
                  { text: 'I understand your concern. Our financing helps you get what you need now while managing cash flow', rating: 'excellent' },
                  { text: 'Everyone uses financing these days', rating: 'poor' }
                ]
              },
              {
                objection: 'The payments seem too high',
                responses: [
                  { text: 'We have different payment options to fit your budget', rating: 'excellent' },
                  { text: 'The payments are fair for what you\'re getting', rating: 'poor' },
                  { text: 'You can always return it if you can\'t afford it', rating: 'good' }
                ]
              },
              {
                objection: 'My credit is terrible, I probably won\'t qualify',
                responses: [
                  { text: 'Let\'s just try and see what happens', rating: 'poor' },
                  { text: 'Our programs are designed for people in your situation. We look at more than just credit scores', rating: 'excellent' },
                  { text: 'Don\'t worry about your credit score', rating: 'good' }
                ]
              }
            ]
          }
        ],
        keyTakeaways: [
          'Handle multiple objections by looking for underlying patterns',
          'Use "Yes, and" instead of "Yes, but" to maintain collaboration',
          'De-escalate emotional situations before addressing logical concerns',
          'Approach credit discussions with empathy and solution focus',
          'Know when to gracefully disengage while keeping doors open'
        ]
      }
    ],
    quiz: {
      id: 'quiz-6',
      title: 'Handling Customer Objections Assessment',
      passingScore: 80,
      timeLimit: 25,
      questions: [
        {
          id: 'q6-1',
          question: 'What does the HEAR method stand for?',
          type: 'multiple-choice',
          options: [
            'Halt, Empathize, Ask, Respond',
            'Help, Explain, Agree, Resolve',
            'Handle, Educate, Apologize, Redirect',
            'Hear, Evaluate, Answer, Review'
          ],
          correctAnswer: 'Halt, Empathize, Ask, Respond',
          explanation: 'HEAR stands for Halt (stop and listen), Empathize (acknowledge their concern), Ask (clarifying questions), Respond (address the underlying issue).',
          points: 15
        },
        {
          id: 'q6-2',
          question: 'What are the four main categories of customer objections? (Select all that apply)',
          type: 'select-multiple',
          options: ['Price/Cost', 'Trust/Credibility', 'Need/Urgency', 'Process/Complexity', 'Product/Quality', 'Location/Distance'],
          correctAnswer: ['Price/Cost', 'Trust/Credibility', 'Need/Urgency', 'Process/Complexity'],
          explanation: 'The four main objection categories are Price/Cost, Trust/Credibility, Need/Urgency, and Process/Complexity.',
          points: 20
        },
        {
          id: 'q6-3',
          question: 'When a customer says "This is too expensive," what type of objection is this?',
          type: 'multiple-choice',
          options: ['Trust objection', 'Price objection', 'Process objection', 'Need objection'],
          correctAnswer: 'Price objection',
          explanation: 'Comments about cost, affordability, or expense are Price/Cost objections.',
          points: 10
        },
        {
          id: 'q6-4',
          question: 'Which phrase is better for maintaining collaboration?',
          type: 'multiple-choice',
          options: [
            '"Yes, but our terms are very competitive"',
            '"Yes, and that\'s exactly why this program might work well for you"',
            '"No, you\'re wrong about that"',
            '"Actually, let me correct that misconception"'
          ],
          correctAnswer: '"Yes, and that\'s exactly why this program might work well for you"',
          explanation: '"Yes, and" maintains collaboration by acknowledging the customer while adding helpful information, unlike "Yes, but" which creates conflict.',
          points: 15
        },
        {
          id: 'q6-5',
          question: 'What should you do first when a customer becomes emotional or frustrated?',
          type: 'multiple-choice',
          options: [
            'Immediately provide solutions',
            'Explain why they\'re wrong',
            'Focus on de-escalation and acknowledgment',
            'Transfer them to a manager'
          ],
          correctAnswer: 'Focus on de-escalation and acknowledgment',
          explanation: 'When customers become emotional, de-escalation must come first before you can address logical concerns.',
          points: 15
        },
        {
          id: 'q6-6',
          question: 'How should you approach customers who express credit concerns?',
          type: 'multiple-choice',
          options: [
            'Ask them about their credit score immediately',
            'Tell them credit doesn\'t matter',
            'Approach with empathy and focus on solutions',
            'Suggest they improve their credit first'
          ],
          correctAnswer: 'Approach with empathy and focus on solutions',
          explanation: 'Credit discussions require empathy and solution focus, acknowledging their concerns while offering appropriate options.',
          points: 15
        },
        {
          id: 'q6-7',
          question: 'What are effective de-escalation techniques? (Select all that apply)',
          type: 'select-multiple',
          options: [
            'Lower your voice and speak slowly',
            'Use the customer\'s name frequently',
            'Acknowledge their emotions',
            'Argue with their concerns',
            'Focus on solutions',
            'Interrupt to correct them'
          ],
          correctAnswer: ['Lower your voice and speak slowly', 'Use the customer\'s name frequently', 'Acknowledge their emotions', 'Focus on solutions'],
          explanation: 'Effective de-escalation includes speaking calmly, using their name, acknowledging emotions, and focusing on solutions. Arguing and interrupting escalate conflicts.',
          points: 10
        }
      ]
    },
    certificate: true,
    ebucksReward: 150
  },
  {
    id: 'module-7',
    title: 'Common Customer Pain Points',
    description: 'Understand the typical challenges customers face when seeking financing and learn how to position EasyPay as the solution to their problems.',
    estimatedTime: '55 minutes',
    difficulty: 'intermediate',
    prerequisites: ['module-1', 'module-6'],
    objectives: [
      'Identify the most common customer pain points related to financing',
      'Learn how EasyPay programs address each specific pain point',
      'Develop empathy-based conversation techniques',
      'Create solution-focused customer interactions'
    ],
    lessons: [
      {
        id: 'lesson-7-1',
        title: 'Understanding Customer Financial Stress',
        duration: '20 minutes',
        objectives: [
          'Recognize signs of financial stress in customers',
          'Understand the emotional impact of financial challenges',
          'Learn how to approach financially stressed customers with empathy'
        ],
        content: [
          {
            type: 'text',
            title: 'The Reality of Financial Stress',
            content: 'Many customers seeking financing are experiencing financial stress, whether from unexpected expenses, credit challenges, or simply trying to manage cash flow. Understanding this stress helps you approach them with appropriate empathy and solutions.'
          },
          {
            type: 'example',
            title: 'Signs of Financial Stress',
            content: '• Hesitation when discussing prices\n• Questions about payment options before seeing products\n• Mentions of recent financial setbacks\n• Concern about credit checks or approval\n• Comparing multiple financing options\n• Expressing urgency but payment hesitation'
          },
          {
            type: 'text',
            title: 'The Emotional Side of Financing',
            content: 'Financial challenges often carry emotional weight - embarrassment about credit history, frustration with previous rejections, anxiety about being judged, or stress about making the wrong decision. Recognizing these emotions helps you respond appropriately.'
          },
          {
            type: 'text',
            title: 'Common Financial Situations',
            content: 'Customers may be dealing with job changes, medical expenses, divorce, family emergencies, or simply the normal challenges of managing household expenses. Each situation requires understanding and appropriate solutions.'
          },
          {
            type: 'checklist',
            title: 'Empathetic Response Checklist',
            items: [
              'Listen without judgment',
              'Acknowledge their situation with understanding',
              'Avoid making assumptions about their circumstances',
              'Focus on solutions, not problems',
              'Respect their privacy and dignity',
              'Provide hope and realistic options'
            ]
          },
          {
            type: 'tip',
            title: 'Language Matters',
            content: 'Use supportive language like "Many of our customers have been in similar situations" or "We specialize in helping people find solutions." Avoid phrases that might increase embarrassment or stress.'
          },
          {
            type: 'warning',
            title: 'Avoid These Phrases',
            content: '• "What\'s wrong with your credit?"\n• "Why can\'t you just pay cash?"\n• "Most people don\'t have these problems"\n• "You should have planned better"\n• Any language that sounds judgmental or condescending'
          }
        ],
        keyTakeaways: [
          'Financial stress affects many customers seeking financing options',
          'Recognize both practical and emotional aspects of financial challenges',
          'Approach stressed customers with empathy and understanding',
          'Use supportive language that maintains customer dignity'
        ]
      },
      {
        id: 'lesson-7-2',
        title: 'Top 10 Customer Pain Points and Solutions',
        duration: '25 minutes',
        objectives: [
          'Master the most common customer pain points',
          'Learn specific ways EasyPay addresses each pain point',
          'Practice positioning solutions effectively'
        ],
        content: [
          {
            type: 'text',
            title: 'Pain Point #1: Previous Credit Rejections',
            content: 'Many customers have been rejected for financing before and expect another "no." This creates defensiveness and low expectations.'
          },
          {
            type: 'example',
            title: 'EasyPay Solution for Credit Rejections',
            content: '"I understand you\'ve been turned down before - that\'s actually very common and exactly why we work with EasyPay Finance. They specialize in approving customers that traditional financing might decline. Our lease-to-own program has much more flexible requirements because we look at your current situation, not just your credit history."'
          },
          {
            type: 'text',
            title: 'Pain Point #2: Fear of Credit Checks',
            content: 'Customers worry that applying will hurt their credit score further or that they\'ll be embarrassed by their credit report.'
          },
          {
            type: 'example',
            title: 'EasyPay Solution for Credit Check Fears',
            content: '"I understand your concern about credit checks. The good news is our lease-to-own program focuses much more on your current income and ability to make payments than your credit history. We\'re not here to judge your past - we\'re here to help with your current needs."'
          },
          {
            type: 'text',
            title: 'Pain Point #3: Unaffordable Payment Amounts',
            content: 'Customers fear that financing payments will strain their already tight budgets.'
          },
          {
            type: 'example',
            title: 'EasyPay Solution for Payment Concerns',
            content: '"Budget is definitely important, and that\'s why we offer flexible payment options. You can choose weekly, bi-weekly, or monthly payments - whatever works best with your income schedule. And with the early purchase option, you can pay it off anytime and save substantially."'
          },
          {
            type: 'text',
            title: 'Pain Point #4: Complicated Application Processes',
            content: 'Customers have experienced lengthy, complicated financing applications and don\'t want to repeat that frustration.'
          },
          {
            type: 'example',
            title: 'EasyPay Solution for Process Complexity',
            content: '"I completely understand - nobody wants to spend hours on paperwork. Our application is actually very straightforward and typically takes just a few minutes to complete. Most customers are surprised by how simple and quick it is."'
          },
          {
            type: 'text',
            title: 'Pain Point #5: Hidden Fees and Surprise Costs',
            content: 'Customers worry about hidden fees, surprise charges, or terms they don\'t understand.'
          },
          {
            type: 'example',
            title: 'EasyPay Solution for Hidden Fees',
            content: '"Transparency is really important to us. All terms and costs are clearly explained upfront - no hidden fees or surprises. The only fee is a $39 processing fee for lease-to-own, and I\'ll explain exactly what that covers."'
          },
          {
            type: 'text',
            title: 'Pain Point #6: Emergency Timing Pressure',
            content: 'Customers need immediate solutions for broken appliances, car repairs, or other urgent needs but worry financing takes too long.'
          },
          {
            type: 'example',
            title: 'EasyPay Solution for Timing Pressure',
            content: '"I understand you need this fixed right away. Our approval process is designed for situations exactly like yours - we typically get decisions within minutes, and once approved, you can take care of this today."'
          },
          {
            type: 'text',
            title: 'Pain Point #7: Ownership Confusion',
            content: 'Customers don\'t understand the difference between financing and leasing, or worry about what happens if they can\'t make payments.'
          },
          {
            type: 'example',
            title: 'EasyPay Solution for Ownership Confusion',
            content: '"Let me explain exactly how this works. With lease-to-own, you get to use the item immediately while making payments. You can purchase it anytime and save money, or if your situation changes, you can return it without owing the balance. It gives you options that traditional financing doesn\'t."'
          },
          {
            type: 'text',
            title: 'Pain Point #8: Income Verification Challenges',
            content: 'Self-employed customers, those with variable income, or customers with non-traditional employment worry about proving income.'
          },
          {
            type: 'example',
            title: 'EasyPay Solution for Income Verification',
            content: '"We work with all types of income situations - self-employed, commission-based, part-time, benefits, whatever your situation. We understand that good people have different income sources, and we\'re flexible in how we verify ability to pay."'
          },
          {
            type: 'text',
            title: 'Pain Point #9: Long-term Financial Commitment Fear',
            content: 'Customers worry about being locked into long-term payments they might not be able to afford if their situation changes.'
          },
          {
            type: 'example',
            title: 'EasyPay Solution for Commitment Fears',
            content: '"That\'s a smart concern to have. With our lease-to-own program, you\'re not locked in like traditional financing. If your situation changes, you can return the item without owing the remaining balance. And if your situation improves, you can pay it off early and save money."'
          },
          {
            type: 'text',
            title: 'Pain Point #10: Past Bad Experiences',
            content: 'Customers may have had bad experiences with other financing companies, creating skepticism about all financing options.'
          },
          {
            type: 'example',
            title: 'EasyPay Solution for Past Bad Experiences',
            content: '"I\'m sorry you had a bad experience before - unfortunately, not all companies operate the same way. EasyPay Finance has been helping customers for over 20 years with transparent terms and excellent service. We\'re here to rebuild your confidence in financing by doing it right."'
          },
          {
            type: 'interactive',
            title: 'Customer Pain Point Matching Game',
            content: 'Test your skills by matching customers to their pain points and solutions!',
            interactiveType: 'customer-matching',
            customers: [
              { id: 'sarah', name: 'Sarah', credit: 580, painPoint: 'credit-rejection', needs: 'furniture' },
              { id: 'mike', name: 'Mike', credit: 720, painPoint: 'payment-fear', needs: 'auto-repair' },
              { id: 'jen', name: 'Jennifer', credit: 650, painPoint: 'process-complexity', needs: 'appliances' }
            ],
            solutions: [
              { id: 'furniture', name: 'LTO Program - Flexible Approval', painPoint: 'credit-rejection', best: 'LTO' },
              { id: 'auto-repair', name: 'Payment Options Discussion', painPoint: 'payment-fear', best: 'RIC' },
              { id: 'appliances', name: 'Simple Application Process', painPoint: 'process-complexity', best: 'RIC' }
            ]
          }
        ],
        keyTakeaways: [
          'Every customer pain point has a specific EasyPay solution',
          'Address fears proactively rather than waiting for objections',
          'Use empathetic language that acknowledges their concerns',
          'Focus on how EasyPay is different from their past experiences'
        ]
      },
      {
        id: 'lesson-7-3',
        title: 'Proactive Pain Point Prevention',
        duration: '10 minutes',
        objectives: [
          'Learn to address pain points before they become objections',
          'Develop natural conversation flows that prevent common concerns',
          'Build trust through proactive transparency'
        ],
        content: [
          {
            type: 'text',
            title: 'Prevention vs. Reaction',
            content: 'Rather than waiting for customers to express concerns, proactively address common pain points during your initial presentation. This builds trust and prevents objections from forming.'
          },
          {
            type: 'text',
            title: 'The Transparency Approach',
            content: 'Address potential concerns upfront with phrases like "You might be wondering about..." or "Many customers ask about..." This shows you understand their likely concerns and are being transparent.'
          },
          {
            type: 'example',
            title: 'Proactive Scripts',
            content: '"Before we get started, you might be wondering about approval requirements. The good news is our program is designed to help people who might not qualify elsewhere..."\n\n"Many customers ask about fees, so let me be completely upfront - there\'s just a $39 processing fee, and I\'ll explain exactly what that covers..."'
          },
          {
            type: 'text',
            title: 'Reading Customer Cues',
            content: 'Learn to recognize verbal and non-verbal signs that customers are experiencing specific pain points, then address those concerns before they escalate into objections.'
          },
          {
            type: 'checklist',
            title: 'Pain Point Prevention Checklist',
            items: [
              'Address credit concerns early for hesitant customers',
              'Explain the simple process to time-pressured customers',
              'Emphasize transparency for skeptical customers',
              'Highlight flexibility for commitment-worried customers',
              'Show empathy for stressed or emotional customers'
            ]
          },
          {
            type: 'tip',
            title: 'Building Confidence',
            content: 'Share success stories and examples when appropriate: "Just last week I helped a customer in a similar situation..." or "We\'ve helped thousands of customers who felt exactly the same way." This builds confidence and reduces isolation.'
          }
        ],
        keyTakeaways: [
          'Proactively address pain points before they become objections',
          'Use transparency to build trust and prevent concerns',
          'Read customer cues to identify which pain points to address',
          'Share relevant success stories to build confidence'
        ]
      }
    ],
    quiz: {
      id: 'quiz-7',
      title: 'Common Customer Pain Points Assessment',
      passingScore: 80,
      timeLimit: 20,
      questions: [
        {
          id: 'q7-1',
          question: 'What are signs that a customer may be experiencing financial stress? (Select all that apply)',
          type: 'select-multiple',
          options: [
            'Hesitation when discussing prices',
            'Questions about payment options before seeing products',
            'Concern about credit checks',
            'Expressing urgency but payment hesitation',
            'Asking about product warranties',
            'Requesting multiple color options'
          ],
          correctAnswer: ['Hesitation when discussing prices', 'Questions about payment options before seeing products', 'Concern about credit checks', 'Expressing urgency but payment hesitation'],
          explanation: 'Signs of financial stress include price hesitation, early payment questions, credit concerns, and urgency with payment hesitation. Warranty and color questions are normal product inquiries.',
          points: 20
        },
        {
          id: 'q7-2',
          question: 'How should you respond to a customer who says "I\'ve been rejected for financing before"?',
          type: 'multiple-choice',
          options: [
            'Ask them why they were rejected',
            'Tell them our standards are even higher',
            'Acknowledge their experience and explain how EasyPay is different',
            'Suggest they improve their credit first'
          ],
          correctAnswer: 'Acknowledge their experience and explain how EasyPay is different',
          explanation: 'Acknowledge their experience with empathy and explain how EasyPay specializes in helping customers who might not qualify elsewhere.',
          points: 15
        },
        {
          id: 'q7-3',
          question: 'What is the main advantage of proactive pain point prevention?',
          type: 'multiple-choice',
          options: [
            'It shortens the sales process',
            'It prevents objections from forming',
            'It impresses customers with knowledge',
            'It eliminates the need for follow-up'
          ],
          correctAnswer: 'It prevents objections from forming',
          explanation: 'Proactive pain point prevention addresses concerns before they become objections, building trust and reducing resistance.',
          points: 15
        },
        {
          id: 'q7-4',
          question: 'Which phrases should you avoid when speaking with financially stressed customers? (Select all that apply)',
          type: 'select-multiple',
          options: [
            '"What\'s wrong with your credit?"',
            '"Why can\'t you just pay cash?"',
            '"Most people don\'t have these problems"',
            '"Many customers have similar situations"',
            '"We specialize in helping people find solutions"',
            '"You should have planned better"'
          ],
          correctAnswer: ['"What\'s wrong with your credit?"', '"Why can\'t you just pay cash?"', '"Most people don\'t have these problems"', '"You should have planned better"'],
          explanation: 'Avoid judgmental phrases that increase embarrassment. Use supportive language that maintains dignity.',
          points: 20
        },
        {
          id: 'q7-5',
          question: 'How does EasyPay address customers\' fears about hidden fees?',
          type: 'multiple-choice',
          options: [
            'By having the lowest fees in the industry',
            'By explaining all terms and costs upfront with transparency',
            'By eliminating all fees entirely',
            'By offering fee waivers for qualified customers'
          ],
          correctAnswer: 'By explaining all terms and costs upfront with transparency',
          explanation: 'EasyPay addresses hidden fee concerns through upfront transparency about all terms and costs, with only a $39 processing fee for LTO.',
          points: 15
        },
        {
          id: 'q7-6',
          question: 'What should you emphasize when customers worry about long-term commitment?',
          type: 'multiple-choice',
          options: [
            'The importance of honoring financial commitments',
            'The flexibility of LTO with early purchase and return options',
            'The penalties for early termination',
            'The need to commit to the full term'
          ],
          correctAnswer: 'The flexibility of LTO with early purchase and return options',
          explanation: 'Emphasize LTO flexibility - customers can pay off early to save money or return the item if circumstances change.',
          points: 15
        }
      ]
    },
    certificate: true,
    ebucksReward: 140
  }
]

export default trainingModules