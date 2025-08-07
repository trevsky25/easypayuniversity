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
        title: 'Understanding Our Two Core Programs',
        duration: '20 minutes',
        objectives: [
          'Understand the two core EasyPay Finance programs',
          'Learn when to use RIC vs LTO for different customers',
          'Master program comparison and selection strategies'
        ],
        content: [
          {
            type: 'text',
            title: 'Two Core Financing Programs',
            content: 'EasyPay Finance offers two distinct financing programs, each designed for different customer needs and situations. Understanding when and how to use each program is key to maximizing your sales and customer satisfaction.'
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
          'EasyPay Finance offers two core programs: RIC and LTO',
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
            type: 'contact-info',
            title: 'Business Center Support',
            content: 'Need help with the Business Center portal or have technical questions? Our support team is ready to assist you.',
            contacts: [
              {
                type: 'Merchant Services',
                phone: '(866) 337-2537',
                hours: 'Monday-Friday 5am-6pm PST, Saturday 5am-5pm PST',
                description: 'For Business Center portal support and technical assistance'
              },
              {
                type: 'Customer Service',
                phone: '(800) 447-6215',
                description: 'For general inquiries and customer support'
              }
            ]
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
            content: 'Credit culture is the systematic approach to making financing conversations a natural part of every customer interaction. It\'s about shifting from reactive financing (only when customers ask) to proactive financing (offering solutions before problems arise). Think of it as building financing discussions into your DNA as a business.'
          },
          {
            type: 'tip',
            title: 'The Transformation',
            content: 'Businesses with strong credit culture see 40-60% increases in average transaction values and significantly higher customer satisfaction scores. Customers appreciate having options, and your team gains confidence in helping people afford what they need.'
          },
          {
            type: 'pillars',
            title: 'The Four Pillars of Credit Culture',
            content: 'A successful credit culture is built on four essential pillars. Each pillar supports the others - remove any one and the entire structure becomes unstable.',
            pillars: [
              {
                id: 1,
                title: 'Communication',
                icon: '1',
                color: '#16a34a',
                description: 'Natural, helpful financing conversations',
                details: [
                  'Read customer cues and buying signals',
                  'Use assumptive, helpful language',
                  'Position financing as a solution, not a sales pitch',
                  'Practice conversation starters and transitions',
                  'Handle objections with confidence and empathy'
                ],
                example: {
                  wrong: '"Do you need financing?"',
                  right: '"To make this work better for your budget, we have several payment options including financing that breaks this into manageable monthly payments. Let me show you what that looks like."'
                }
              },
              {
                id: 2,
                title: 'Training',
                icon: '2',
                color: '#1976D2',
                description: 'Comprehensive knowledge and skill development',
                details: [
                  'Complete product knowledge of all financing programs',
                  'Smooth application submission process mastery',
                  'Understanding the customer value proposition',
                  'Objection handling techniques and scripts',
                  'Ongoing skill development and refresher training'
                ],
                example: {
                  components: [
                    'Initial: EasyPay University certification',
                    'Ongoing: Monthly team training sessions',
                    'Practice: Role-playing with real scenarios',
                    'Reinforcement: Quarterly refresher courses',
                    'Measurement: Skills assessment and improvement plans'
                  ]
                }
              },
              {
                id: 3,
                title: 'Incentives',
                icon: '3',
                color: '#FF6F00',
                description: 'Meaningful rewards that drive behavior',
                details: [
                  'Financial rewards for financing success',
                  'Recognition programs and team competitions',
                  'Professional development opportunities',
                  'Performance-based advancement paths',
                  'Team celebrations and achievement sharing'
                ],
                example: {
                  ideas: [
                    'Monthly bonuses for top financing performance',
                    'Team lunch for hitting financing goals',
                    'Recognition board highlighting success stories',
                    'Advancement opportunities for financing champions',
                    'Quarterly awards and public recognition'
                  ]
                }
              },
              {
                id: 4,
                title: 'Leadership',
                icon: '4',
                color: '#7B1FA2',
                description: 'Management commitment and active support',
                details: [
                  'Visible leadership participation in financing discussions',
                  'Consistent messaging about financing importance',
                  'Resource allocation for training and tools',
                  'Regular performance reviews including financing metrics',
                  'Problem-solving support when challenges arise'
                ],
                example: {
                  actions: [
                    'Managers demonstrate financing conversations',
                    'Financing metrics included in all team meetings',
                    'Leadership celebrates financing wins publicly',
                    'Resources provided for ongoing training',
                    'Support given when team members face challenges'
                  ]
                }
              }
            ]
          },
          {
            type: 'warning',
            title: 'Critical Success Factor',
            content: 'Research shows that 73% of businesses that focus only on training without the other three pillars see their financing programs plateau within 6 months. All four pillars must work together - Communication provides the skills, Training builds the knowledge, Incentives drive the behavior, and Leadership sustains the culture.'
          },
          {
            type: 'interactive',
            title: 'Credit Culture Assessment',
            content: 'Evaluate your current credit culture strength across all four pillars to identify improvement opportunities.',
            interactiveType: 'credit-culture-builder',
            pillars: [
              { id: 'communication', name: 'Communication', icon: '1', description: 'Natural, helpful financing conversations with customers' },
              { id: 'training', name: 'Training', icon: '2', description: 'Comprehensive knowledge and ongoing skill development' },
              { id: 'incentives', name: 'Incentives', icon: '3', description: 'Meaningful rewards that motivate financing success' },
              { id: 'leadership', name: 'Leadership', icon: '4', description: 'Management commitment and active participation' }
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
            type: 'tip',
            title: 'The Make-or-Break Period',
            content: 'The first 30 days determine whether a new employee will naturally integrate financing into customer conversations or view it as an uncomfortable "add-on." Employees who receive structured onboarding are 3x more likely to consistently discuss financing options after 90 days.'
          },
          {
            type: 'timeline',
            title: '30-Day Onboarding Timeline',
            content: 'A structured approach to building financing confidence from day one.',
            phases: [
              {
                period: 'Days 1-3',
                title: 'Foundation Building',
                icon: '1',
                color: '#16a34a',
                tasks: [
                  'Complete EasyPay University core modules',
                  'Review financing value proposition materials',
                  'Watch recorded customer interaction examples',
                  'Complete product knowledge assessment'
                ]
              },
              {
                period: 'Days 4-7',
                title: 'Observation Phase',
                icon: '2',
                color: '#1976D2',
                tasks: [
                  'Shadow experienced team members during customer interactions',
                  'Observe natural financing conversation integration',
                  'Take notes on successful techniques and phrases',
                  'Attend financing discussion debriefs'
                ]
              },
              {
                period: 'Days 8-14',
                title: 'Practice Phase',
                icon: '3',
                color: '#FF6F00',
                tasks: [
                  'Practice applications with mock customer scenarios',
                  'Role-play common objection handling situations',
                  'Practice using financing calculators and tools',
                  'Complete supervised application submissions'
                ]
              },
              {
                period: 'Days 15-21',
                title: 'Guided Independence',
                icon: '4',
                color: '#7B1FA2',
                tasks: [
                  'Handle real applications with manager oversight',
                  'Lead financing conversations with backup support',
                  'Practice problem-solving challenging situations',
                  'Receive feedback on communication approach'
                ]
              },
              {
                period: 'Days 22-30',
                title: 'Full Independence',
                icon: '5',
                color: '#D32F2F',
                tasks: [
                  'Independent application handling with check-ins',
                  'Set personal financing conversation goals',
                  'Begin tracking individual success metrics',
                  'Complete 30-day performance review'
                ]
              }
            ]
          },
          {
            type: 'text',
            title: 'Beyond the First Month: Ongoing Development',
            content: 'The learning doesn\'t stop at 30 days. Successful financing cultures invest in continuous skill development through monthly team meetings, quarterly refresher training, and regular coaching sessions. This ongoing investment keeps skills sharp and adapts to changing customer needs.'
          },
          {
            type: 'training-calendar',
            title: 'Year-Long Training Calendar',
            content: 'Structured ongoing development keeps your team\'s financing skills sharp and current.',
            months: [
              { month: 'Month 1', topic: 'Overcoming Price Objections', focus: 'Help customers see value beyond initial cost', activities: ['Role-play price objection scenarios', 'Review success stories', 'Practice value positioning'] },
              { month: 'Month 2', topic: 'Credit-Challenged Customers', focus: 'Build confidence working with all credit types', activities: ['Review approval criteria', 'Practice empathetic communication', 'Learn alternative solutions'] },
              { month: 'Month 3', topic: 'Emergency & Repair Situations', focus: 'Handle urgent customer needs with financing', activities: ['Quick application processes', 'Emergency approval procedures', 'Customer stress management'] },
              { month: 'Month 4', topic: 'Upselling with Financing', focus: 'Use financing to enable better solutions', activities: ['Package presentation techniques', 'Value-based selling', 'Payment comparison tools'] },
              { month: 'Month 5', topic: 'Seasonal Financing Strategies', focus: 'Adapt approach for seasonal business cycles', activities: ['Seasonal customer needs analysis', 'Promotional financing options', 'Peak season preparation'] },
              { month: 'Month 6', topic: 'Customer Retention Through Financing', focus: 'Use financing to build long-term relationships', activities: ['Follow-up strategies', 'Repeat customer approaches', 'Referral generation techniques'] }
            ]
          },
          {
            type: 'warning',
            title: 'Training Without Practice Fails',
            content: 'Knowledge without application quickly fades. Every training session should include role-playing, real scenario practice, and immediate application opportunities. Teams that practice regularly see 40% higher application submission rates.'
          },
          {
            type: 'interactive',
            title: 'Team Training Planner',
            content: 'Create a customized training schedule based on your team size, business type, and current skill level.',
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
            type: 'tip',
            title: 'The Golden Window',
            content: 'There\'s a 30-second window in every sales conversation where customers are most receptive to financing discussions. This happens right after they show interest but before price becomes the focus. Master this timing and see conversion rates improve by 35%.'
          },
          {
            type: 'conversation-flow',
            title: 'Perfect Financing Conversation Flow',
            content: 'Follow this proven 6-step process to naturally integrate financing into every customer interaction.',
            steps: [
              {
                step: 1,
                title: 'Build Rapport',
                description: 'Establish trust and understand the customer\'s situation',
                icon: '1',
                color: '#16a34a',
                example: '"Tell me about what brought you in today. What are you hoping to accomplish?"',
                duration: '2-3 minutes'
              },
              {
                step: 2,
                title: 'Understand Needs',
                description: 'Ask questions to identify the best solution for their situation',
                icon: '2',
                color: '#1976D2',
                example: '"What\'s most important to you in solving this? How soon do you need this resolved?"',
                duration: '3-5 minutes'
              },
              {
                step: 3,
                title: 'Present Solutions',
                description: 'Show options that meet their specific needs',
                icon: '3',
                color: '#FF6F00',
                example: '"Based on what you\'ve told me, I have a couple of solutions that would work really well..."',
                duration: '5-7 minutes'
              },
              {
                step: 4,
                title: 'Introduce Payment Options',
                description: 'THIS IS THE GOLDEN MOMENT - Present financing naturally',
                icon: '4',
                color: '#7B1FA2',
                example: '"To make this work perfectly for your budget, let me show you some payment options..."',
                duration: '3-4 minutes'
              },
              {
                step: 5,
                title: 'Discuss Investment',
                description: 'Present total cost after establishing payment comfort',
                icon: '5',
                color: '#D32F2F',
                example: '"Here\'s what your monthly investment would look like, and here\'s the total..."',
                duration: '2-3 minutes'
              },
              {
                step: 6,
                title: 'Close & Schedule',
                description: 'Secure the decision and next steps',
                icon: '6',
                color: '#388E3C',
                example: '"This sounds like the right solution. Let\'s get your application started..."',
                duration: '2-5 minutes'
              }
            ]
          },
          {
            type: 'customer-signals',
            title: 'Reading Customer Buying Signals',
            content: 'Learn to recognize the verbal and non-verbal cues that indicate financing interest.',
            signals: [
              {
                type: 'Verbal Cues',
                icon: 'V',
                color: '#16a34a',
                examples: [
                  '"That\'s more than I was planning to spend..."',
                  '"Do you have any payment plans?"',
                  '"I\'ll need to talk to my spouse about this amount..."',
                  '"Is there a way to break this into payments?"',
                  '"I wish I could do this right now..."'
                ]
              },
              {
                type: 'Body Language',
                icon: 'B',
                color: '#1976D2',
                examples: [
                  'Hesitation when hearing the price',
                  'Looking away or stepping back',
                  'Reaching for phone (to call spouse/check account)',
                  'Fidgeting with wallet or purse',
                  'Deep breath or sigh when price is mentioned'
                ]
              },
              {
                type: 'Circumstantial',
                icon: 'C',
                color: '#FF6F00',
                examples: [
                  'Emergency repair or replacement needed',
                  'Seasonal purchases (AC in summer, heat in winter)',
                  'Multiple family members present discussing cost',
                  'Comparing multiple quotes or options',
                  'Mentioning upcoming expenses or tight timing'
                ]
              }
            ]
          },
          {
            type: 'conversation-examples',
            title: 'Conversation Starters That Work',
            content: 'Master these natural, helpful phrases that open financing conversations.',
            examples: [
              {
                situation: 'Customer shows price hesitation',
                wrong: '"Do you need financing?"',
                right: '"To make this more manageable, we have several payment options that work really well for this type of purchase. Let me show you what those look like."',
                why: 'Assumptive and helpful rather than yes/no question'
              },
              {
                situation: 'Customer mentions budget concerns',
                wrong: '"Can you afford this?"',
                right: '"I understand budget is important. Many of our customers find it easier to break this into monthly payments. Here are a few options that might work better for you."',
                why: 'Shows empathy and offers solutions'
              },
              {
                situation: 'Emergency repair situation',
                wrong: '"This is expensive, do you want to finance?"',
                right: '"Since this needs to be done right away, let me show you how we can get this taken care of today with payments that work for your budget."',
                why: 'Focuses on solving the immediate problem'
              }
            ]
          },
          {
            type: 'warning',
            title: 'Conversation Killers to Avoid',
            content: 'These phrases create defensive reactions and shut down financing conversations before they start. Never use credit-shaming or pressure language that makes customers feel judged or uncomfortable.'
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
            type: 'stats-overview',
            title: 'EasyPay Finance Geographic Coverage',
            content: 'Strategic nationwide coverage designed for regulatory compliance and optimal customer service.',
            stats: [
              { label: 'Total States Served', value: '22', color: '#16a34a', description: 'Across the United States' },
              { label: 'Merchant Locations', value: '12,000+', color: '#1976D2', description: 'Active partner stores' },
              { label: 'RIC States', value: '19', color: '#16a34a', description: 'Retail Installment Contracts' },
              { label: 'LTO States', value: '3', color: '#14b8a6', description: 'Lease-to-Own programs' }
            ]
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
            type: 'state-grid',
            title: 'Retail Installment Contract (RIC) States',
            content: 'The following 19 states offer RIC financing exclusively.',
            stateCategory: 'RIC',
            color: '#16a34a',
            states: [
              { name: 'Alaska', abbr: 'AK' },
              { name: 'Arizona', abbr: 'AZ' },
              { name: 'California', abbr: 'CA' },
              { name: 'Delaware', abbr: 'DE' },
              { name: 'Idaho', abbr: 'ID' },
              { name: 'Kansas', abbr: 'KS' },
              { name: 'Kentucky', abbr: 'KY' },
              { name: 'Missouri', abbr: 'MO' },
              { name: 'Nevada', abbr: 'NV' },
              { name: 'New Hampshire', abbr: 'NH' },
              { name: 'New Mexico', abbr: 'NM' },
              { name: 'North Dakota', abbr: 'ND' },
              { name: 'Oregon', abbr: 'OR' },
              { name: 'Pennsylvania', abbr: 'PA' },
              { name: 'South Dakota', abbr: 'SD' },
              { name: 'Utah', abbr: 'UT' },
              { name: 'Virginia', abbr: 'VA' },
              { name: 'Washington', abbr: 'WA' },
              { name: 'Wisconsin', abbr: 'WI' }
            ]
          },
          {
            type: 'state-grid',
            title: 'Lease-to-Own (LTO) States',
            content: 'The following 3 states offer LTO financing exclusively.',
            stateCategory: 'LTO',
            color: '#14b8a6',
            states: [
              { name: 'Florida', abbr: 'FL' },
              { name: 'Georgia', abbr: 'GA' },
              { name: 'Texas', abbr: 'TX' }
            ]
          },
          {
            type: 'info-panel',
            title: 'States Where EasyPay Finance Does Not Operate',
            content: 'EasyPay Finance does not currently operate in 28 states plus Washington D.C.',
            panelType: 'unavailable',
            details: [
              'If your business is located in these areas, EasyPay Finance services are not available',
              'Expansion decisions are based on regulatory environment and market conditions',
              'Contact EasyPay Finance for updates on service area expansion'
            ],
            unavailableStates: [
              'Alabama', 'Arkansas', 'Colorado', 'Connecticut', 'Hawaii', 'Illinois', 'Indiana', 'Iowa', 
              'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 
              'Montana', 'Nebraska', 'New Jersey', 'New York', 'North Carolina', 'Ohio', 'Oklahoma', 
              'Rhode Island', 'South Carolina', 'Tennessee', 'Vermont', 'Washington D.C.', 'West Virginia', 'Wyoming'
            ]
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
            type: 'program-overview',
            title: 'What is a Retail Installment Contract?',
            content: 'Traditional credit sales program available in 19 states where merchants originate credit sales and EasyPay purchases and services the contracts.',
            programType: 'RIC',
            color: '#16a34a',
            features: [
              { title: 'Merchant Role', description: 'Originate credit sales and execute contracts with customers' },
              { title: 'EasyPay Role', description: 'Purchase and service contracts, provide immediate funding' },
              { title: 'Customer Experience', description: 'Traditional financing with immediate ownership' }
            ],
            flowSteps: [
              'Customer selects merchandise',
              'Merchant presents financing option',
              'Contract executed and signed',
              'EasyPay purchases contract',
              'Immediate funding to merchant'
            ]
          },
          {
            type: 'legal-framework',
            title: 'RIC Legal Framework - Truth in Lending Act Compliance',
            content: 'RIC products are subject to federal Truth in Lending Act (TILA) regulations requiring specific disclosures.',
            framework: 'TILA',
            color: '#1976D2',
            disclosures: [
              { term: 'Annual Percentage Rate (APR)', description: 'The cost of credit expressed as a yearly rate' },
              { term: 'Finance Charges', description: 'The dollar amount credit will cost over the life of the contract' },
              { term: 'Amount Financed', description: 'The amount of credit provided to the customer' },
              { term: 'Total of Payments', description: 'The sum of all payments the customer will make' }
            ],
            requirements: [
              'Disclosures must be provided before contract signing',
              'Exact legal terminology must be used',
              'Written documentation required for compliance',
              'Customer acknowledgment and signature needed'
            ]
          },
          {
            type: 'feature-highlights',
            title: 'RIC Key Features & Benefits',
            content: 'Comprehensive overview of RIC program advantages and important terms.',
            category: 'RIC',
            color: '#16a34a',
            highlights: [
              { 
                title: 'Immediate Ownership', 
                description: 'Customer owns merchandise immediately upon contract signing',
                benefit: 'Full ownership rights from day one'
              },
              { 
                title: '90-Day Finance Charge Cap', 
                description: 'Maximum $40 if paid in full within 90 days',
                benefit: 'Significant savings for early payoff'
              },
              { 
                title: 'Same-Day Funding', 
                description: 'Available if contract received by 4pm EST',
                benefit: 'Immediate cash flow for merchants'
              },
              { 
                title: 'No Credit Bureau Reporting', 
                description: 'Does not impact customer credit scores',
                benefit: 'Privacy and credit protection'
              },
              { 
                title: 'Up to $5,000 Financing', 
                description: 'Covers a wide range of purchase amounts',
                benefit: 'Flexible financing options'
              }
            ]
          },
          {
            type: 'warning',
            title: 'Critical RIC Disclosure Requirements',
            content: 'CRITICAL: Finance charges accrue daily from the date the agreement is signed. There is NEVER a finance charge free period. If customers pay their amount financed within 90 days, finance charges are capped at $40. To qualify, customers MUST pay more than regular scheduled payments.'
          },
          {
            type: 'qualification-criteria',
            title: 'RIC Customer Qualification Requirements',
            content: 'Understanding the qualification criteria helps merchants pre-screen customers and improve approval rates.',
            category: 'RIC',
            color: '#16a34a',
            criteria: [
              {
                category: 'Employment',
                requirements: [
                  'Stable employment history',
                  'Verifiable income source',
                  'Sufficient income for payment obligations'
                ]
              },
              {
                category: 'Credit Assessment',
                requirements: [
                  'No minimum credit score required',
                  'Credit history evaluation performed',
                  'Hard credit inquiries may be conducted'
                ]
              },
              {
                category: 'Documentation',
                requirements: [
                  'Valid government-issued ID',
                  'Proof of income or employment',
                  'Contact information verification'
                ]
              }
            ]
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
            type: 'program-overview',
            title: 'Understanding Lease-to-Own Structure',
            content: 'Rental-purchase agreement program available in 3 states where EasyPay Leasing purchases merchandise from merchants and leases to customers.',
            programType: 'LTO',
            color: '#14b8a6',
            features: [
              { title: 'EasyPay Leasing Role', description: 'Purchases merchandise from merchants and owns during lease term' },
              { title: 'Customer Experience', description: 'Rental agreement with purchase options and return flexibility' },
              { title: 'Merchant Benefits', description: 'Immediate sale to EasyPay Leasing with special tax handling' }
            ],
            flowSteps: [
              'Customer selects merchandise',
              'EasyPay Leasing purchases from merchant',
              'Customer signs lease agreement',
              'Customer makes lease payments',
              'Purchase option exercised or lease completed'
            ]
          },
          {
            type: 'ownership-structure',
            title: 'LTO Ownership and Legal Structure',
            content: 'Understanding the unique ownership model is critical for proper LTO program implementation.',
            programType: 'LTO',
            color: '#14b8a6',
            ownershipPhases: [
              {
                phase: 'During Lease Term',
                owner: 'EasyPay Leasing',
                customerStatus: 'Renter',
                details: 'EasyPay Leasing owns all personal property throughout the lease term'
              },
              {
                phase: 'After Full Payment',
                owner: 'Customer',
                customerStatus: 'Owner',
                details: 'Ownership transfers when all lease payments are completed'
              },
              {
                phase: 'Early Purchase Option',
                owner: 'Customer',
                customerStatus: 'Owner',
                details: 'Customer can purchase early using 90-day or standard option'
              }
            ],
            transferConditions: [
              'All lease payments completed successfully',
              'Early Purchase Option exercised and paid',
              'No outstanding fees or charges remain'
            ]
          },
          {
            type: 'feature-highlights',
            title: 'LTO Key Features & Benefits',
            content: 'Comprehensive overview of LTO program advantages and unique characteristics.',
            category: 'LTO',
            color: '#14b8a6',
            highlights: [
              { 
                title: 'EasyPay Leasing Ownership', 
                description: 'EasyPay Leasing owns merchandise during lease term',
                benefit: 'Reduced risk and flexible return options'
              },
              { 
                title: 'Lease Payments', 
                description: 'Customer makes lease payments (not finance charges)',
                benefit: 'Different legal structure than traditional financing'
              },
              { 
                title: '$39 Processing Fee', 
                description: 'Mandatory processing fee collected at signing',
                benefit: 'Simple, transparent fee structure'
              },
              { 
                title: '90-Day Early Purchase', 
                description: 'Cash Price + $39 + taxes within 90 days',
                benefit: 'Significant savings for early purchase'
              },
              { 
                title: 'Flexible Returns', 
                description: 'Customer can return merchandise anytime',
                benefit: 'No long-term obligation or penalty'
              },
              { 
                title: 'No Point-of-Sale Tax', 
                description: 'No sales tax collected at point of sale',
                benefit: 'Simplified checkout process'
              }
            ]
          },
          {
            type: 'tax-process',
            title: 'LTO Tax Collection Process',
            content: 'Critical process differences that merchants must understand and implement correctly.',
            processType: 'LTO Tax Handling',
            color: '#FF6F00',
            steps: [
              {
                step: 1,
                title: 'At Point of Sale',
                action: 'Merchant lists EasyPay Leasing as purchaser',
                details: 'Use EasyPay Leasing tax-exempt ID number'
              },
              {
                step: 2,
                title: 'No Sales Tax Charged',
                action: 'NO sales tax is charged at point of sale',
                details: 'This is different from traditional retail transactions'
              },
              {
                step: 3,
                title: 'Tax Collection via Payments',
                action: 'EasyPay Leasing collects applicable sales tax',
                details: 'Sales tax included as part of lease payments'
              },
              {
                step: 4,
                title: 'Documentation',
                action: 'Tax amounts shown on lease agreement page 2',
                details: 'Customer sees estimated tax amounts before signing'
              }
            ],
            warnings: [
              'NEVER charge sales tax at point of sale for LTO transactions',
              'Always use EasyPay Leasing tax-exempt ID',
              'Ensure customer understands tax is included in lease payments'
            ]
          },
          {
            type: 'purchase-options',
            title: 'Early Purchase Options Explained',
            content: 'Understanding the two early purchase options helps customers save money and provides flexibility.',
            category: 'LTO',
            color: '#14b8a6',
            options: [
              {
                type: '90-Day Early Purchase Option',
                timeframe: 'First 90 days of lease',
                calculation: 'Cash Price + $39 processing fee + applicable taxes + outstanding fees',
                requirements: [
                  'Customer must pay MORE than regular scheduled payments',
                  'Available only within first 90 days',
                  'Significant savings compared to full lease term'
                ],
                benefit: 'Maximum savings opportunity'
              },
              {
                type: 'Standard Early Purchase Option',
                timeframe: 'After 90 days, throughout lease term',
                calculation: '70% of remaining regular payments + processing fees + taxes',
                requirements: [
                  'Available throughout the lease term',
                  'Can be exercised at any time after 90 days',
                  'Still provides savings over full term'
                ],
                benefit: 'Ongoing flexibility and savings'
              }
            ]
          },
          {
            type: 'tip',
            title: 'Additional Resources',
            content: 'For detailed information about Early Purchase Options and customer benefits, visit the official EasyPay Finance Early Purchase Options page at: <a href="https://www.easypayfinance.com/early-purchase-options" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline font-medium">https://www.easypayfinance.com/early-purchase-options</a>'
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
    description: 'Master the complete LTO application process from Business Center login to delivery confirmation, including customer qualification, application submission, identity verification, contract signing, and processing fee collection.',
    estimatedTime: '75 minutes',
    difficulty: 'intermediate',
    prerequisites: ['module-1', 'module-3'],
    objectives: [
      'Navigate the complete 13-step LTO application process',
      'Master the EasyPay Leasing Business Center portal',
      'Guide customers through the mobile application flow',
      'Handle identity verification and contract signing procedures',
      'Properly collect the $39 processing fee and complete delivery'
    ],
    lessons: [
      {
        id: 'lesson-5-1',
        title: 'Business Center Setup and Application Initiation (Steps 1-2)',
        duration: '15 minutes',
        objectives: [
          'Access the EasyPay Leasing Business Center portal',
          'Understand the three ways to start an LTO application',
          'Guide customers through the application initiation process'
        ],
        content: [
          {
            type: 'text',
            title: 'Step 1: Access EasyPay Leasing Business Center',
            content: 'Store associates must log into the EasyPay Leasing Business Center using the dedicated portal at https://businesscenterx.easypayfinance.com. This is your gateway to all LTO applications and transaction management.'
          },
          {
            type: 'image',
            title: 'Business Center Login Portal',
            content: 'The EasyPay Leasing Business Center login screen where merchants access the LTO application system.',
            imageUrl: '/business-center-start-application.png',
            imageAlt: 'EasyPay Business Center Portal',
            imageCaption: 'Step 1: Log into the EasyPay Leasing Business Center portal to begin the LTO application process'
          },
          {
            type: 'text',
            title: 'Step 2: Three Ways to Start an LTO Application',
            content: 'Once logged in, you have three options to initiate a customer application: (1) Enter customer\'s Email/Mobile Phone Number for direct text/email link, (2) Select "New In-Store Application" for immediate processing, or (3) Generate a QR Code for the customer to scan with their phone.'
          },
          {
            type: 'example',
            title: 'Application Initiation Options',
            content: 'Option 1: Email/Mobile Phone Number\n• Enter customer\'s contact information\n• System sends secure application link via text/email\n• Customer completes application on their device\n\nOption 2: New In-Store Application\n• Start application directly in Business Center\n• Guide customer through process on your device\n• Ideal for customers without smartphones\n\nOption 3: QR Code Generation\n• Generate unique QR code for customer\n• Customer scans code with smartphone camera\n• Automatically directs to application start'
          },
          {
            type: 'tip',
            title: 'Best Practice: Customer Device Preference',
            content: 'Most customers prefer using their own device for the application process. The Email/Mobile option or QR Code method allows them to use their familiar device while maintaining privacy for sensitive information entry.'
          },
          {
            type: 'contact-info',
            title: 'Important Contact Information',
            content: 'For merchant support during the application process, contact Merchant Services or Customer Service using the information below.',
            contacts: [
              {
                type: 'Merchant Services',
                phone: '(866) 337-2537',
                hours: 'Monday-Friday 5am-6pm PST, Saturday 5am-5pm PST',
                description: 'For merchant support during the application process'
              },
              {
                type: 'Customer Service',
                phone: '(800) 447-6215',
                description: 'For customer assistance and inquiries'
              }
            ]
          }
        ],
        keyTakeaways: [
          'Access Business Center at https://businesscenterx.easypayfinance.com',
          'Three application initiation methods: Email/Phone, In-Store, or QR Code',
          'Customer device applications provide privacy and convenience',
          'Merchant Services available at (866) 337-2537 for support'
        ]
      },
      {
        id: 'lesson-5-2',
        title: 'Customer Application Flow (Steps 3-7)',
        duration: '30 minutes',
        objectives: [
          'Guide customers through the mobile application process',
          'Understand each step of the customer application flow',
          'Handle customer questions during the application process'
        ],
        content: [
          {
            type: 'text',
            title: 'Customer Application Process Overview',
            content: 'After you send the application link, customers complete their LTO application through a structured mobile process. The following screens show each step customers experience on their device, from initial application to approval.'
          },
          {
            type: 'image-carousel',
            title: 'Customer Application Flow (Steps 3-7)',
            content: 'Navigate through each screen customers see during the mobile application process.',
            images: [
              {
                title: 'Step 3: Application Start Screen',
                imageUrl: '/LTO Application Process Mobile Screenshots - March 2025/-_2. Before You Apply.png',
                imageAlt: 'LTO Application Start Screen',
                imageCaption: 'Customer sees the initial application start screen with important information before beginning'
              },
              {
                title: 'Step 4: Example Cost of Leasing',
                imageUrl: '/LTO Application Process Mobile Screenshots - March 2025/-_3. Example Cost of Leasing.png',
                imageAlt: 'Example Cost of Leasing Screen',
                imageCaption: 'Customers review example lease costs and terms for transparency'
              },
              {
                title: 'Step 5: Personal Information Entry',
                imageUrl: '/LTO Application Process Mobile Screenshots - March 2025/-_5. Personal Information.png',
                imageAlt: 'Personal Information Entry Screen',
                imageCaption: 'Customer enters personal details and receives email verification'
              },
              {
                title: 'Step 6: Banking Information',
                imageUrl: '/LTO Application Process Mobile Screenshots - March 2025/-_10. Banking Info.png',
                imageAlt: 'Banking Information Screen',
                imageCaption: 'Customer enters banking information for automatic payments setup'
              },
              {
                title: 'Step 7: Approval Decision',
                imageUrl: '/LTO Application Process Mobile Screenshots - March 2025/-_12. Approval Message.png',
                imageAlt: 'Application Approval Screen',
                imageCaption: 'Customer receives instant approval decision with lease terms'
              }
            ]
          }
        ],
        keyTakeaways: [
          'Customers complete applications on their own devices for privacy',
          'Email verification is required during the personal details step',
          'Banking information can be verified through Plaid or manual entry',
          'Application decisions are instant with immediate term display'
        ]
      },
      {
        id: 'lesson-5-3',
        title: 'Business Center Transaction Closing (Steps 8-13)',
        duration: '30 minutes',
        objectives: [
          'Complete the merchant transaction in Business Center',
          'Verify customer identity and handle contract signing',
          'Collect the $39 processing fee and finalize delivery'
        ],
        content: [
          {
            type: 'text',
            title: 'Step 8: Return to Business Center After Approval',
            content: 'After the customer receives an approval message, return to your Business Center to close the transaction. Enter the details of the purchase which will generate the customer\'s lease invoice and the purchase receipt for EasyPay Leasing.'
          },
          {
            type: 'warning',
            title: 'Critical Tax Rule for LTO',
            content: 'DO NOT COLLECT SALES TAX. In LTO transactions, EasyPay Leasing is the purchaser and the sale is TAX EXEMPT. EasyPay Leasing is responsible for collecting and handling applicable sales tax from the customer under the lease agreement. Add "EasyPay Leasing, LLC" as the buyer/customer on your store invoice.'
          },
          {
            type: 'text',
            title: 'Step 9: Identity Verification Process',
            content: 'It is critical to verify the customer\'s identity. The information on the pop-up screen must match the customer\'s valid U.S. Government ID, including full name, date of birth, and complete address. The ID address must match the application address exactly.'
          },
          {
            type: 'warning',
            title: 'State Residency Requirement',
            content: 'Consumers from another state are NOT eligible for a lease in your state. The customer must be a resident of the state where the transaction is taking place, and their ID must reflect this residency.'
          },
          {
            type: 'text',
            title: 'Steps 10-11: Customer Signature and Fee Collection',
            content: 'After approval verification, customers complete the final steps: signing their lease agreement via DocuSign and paying the mandatory $39 processing fee. Both steps are completed on their mobile device.'
          },
          {
            type: 'image-carousel',
            title: 'Contract Signing and Fee Collection Process',
            content: 'View the customer experience for completing their lease agreement and processing fee payment.',
            images: [
              {
                title: 'Step 10: DocuSign Electronic Signature',
                imageUrl: '/LTO Application Process Mobile Screenshots - March 2025/-_18. DocuSign.png',
                imageAlt: 'DocuSign Electronic Signature Process',
                imageCaption: 'Customer completes electronic signature through secure DocuSign process'
              },
              {
                title: 'Step 11: Processing Fee Payment',
                imageUrl: '/LTO Application Process Mobile Screenshots - March 2025/-_19. Collect Processing Fee.png',
                imageAlt: 'Processing Fee Payment Screen',
                imageCaption: 'Customer pays the mandatory $39 processing fee before taking possession'
              }
            ]
          },
          {
            type: 'text',
            title: 'Step 12: Processing Fee Confirmation in Business Center',
            content: 'You will see a receipt of the processing fee collection within the application details on the Delivery step in your Business Center. Do not continue with the application until the processing fee has been paid in full by the customer.'
          },
          {
            type: 'text',
            title: 'Step 13: Mark as Delivered',
            content: 'Once the customer receives the product(s) AND has paid the $39 processing fee, you can mark the item as delivered in the Business Center. This completes the LTO transaction process.'
          },
          {
            type: 'warning',
            title: 'Delivery Requirements',
            content: 'Do not click "Mark as Delivered" until BOTH conditions are met: (1) the customer has received the product(s) AND (2) has paid the $39 processing fee to EasyPay. Both must be completed before delivery confirmation.'
          },
          {
            type: 'download',
            title: 'Download Complete LTO Application Guide',
            content: 'Get the official EasyPay Leasing Application Quick Start Guide for easy reference during customer transactions.',
            downloadUrl: '/EasyPay-LTO-Application-Quick-Start-Guide.pdf',
            downloadFileName: 'EasyPay-LTO-Application-Quick-Start-Guide.pdf',
            buttonText: 'Download LTO Application Guide (PDF)',
            description: 'This comprehensive guide includes step-by-step instructions, screenshots, and important reminders for processing LTO applications.'
          }
        ],
        keyTakeaways: [
          'Never collect sales tax - EasyPay Leasing handles tax collection',
          'Identity verification requires exact match between ID and application',
          '$39 processing fee must be paid before marking items as delivered',
          'Both product delivery AND fee payment required before completion'
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
            type: 'objection-psychology',
            title: 'Understanding the Psychology Behind Objections',
            content: 'Customer objections are rarely about what they actually say - they are emotional responses to underlying fears and concerns.',
            psychologyInsights: [
              {
                insight: 'Surface vs. Root Causes',
                description: 'What customers say and what they really mean are often different',
                example: '"It\'s too expensive" usually means "I\'m worried about my budget"'
              },
              {
                insight: 'Emotional Triggers',
                description: 'Objections stem from fear, uncertainty, or past negative experiences',
                example: 'Previous rejection creates defensiveness and low expectations'
              },
              {
                insight: 'Protection Mechanism',
                description: 'Objections protect customers from potential disappointment or embarrassment',
                example: 'Better to object first than risk another "no"'
              },
              {
                insight: 'Information Gap',
                description: 'Many objections come from lack of understanding about the process',
                example: 'Complex terms create anxiety and resistance'
              }
            ]
          },
          {
            type: 'objection-categories',
            title: 'Four Main Categories of Customer Objections',
            content: 'Understanding which category you\'re dealing with helps you choose the most effective response strategy.',
            categories: [
              {
                category: 'Price/Cost',
                color: '#dc2626',
                icon: '💰',
                description: 'Concerns about affordability, value, and payment amounts',
                examples: [
                  '"This is too expensive"',
                  '"I can\'t afford the payments"',
                  '"I\'ll just save up and pay cash"',
                  '"The interest rate is too high"',
                  '"I can get a better deal elsewhere"'
                ],
                strategy: 'Focus on value, break down costs, show payment flexibility'
              },
              {
                category: 'Trust/Credibility',
                color: '#ea580c',
                icon: '🤝',
                description: 'Skepticism about company, process, or hidden catches',
                examples: [
                  '"I don\'t trust financing companies"',
                  '"This sounds too good to be true"',
                  '"I\'ve been burned before"',
                  '"I don\'t want my credit checked"',
                  '"What\'s the catch?"'
                ],
                strategy: 'Share company history, explain transparency, provide references'
              },
              {
                category: 'Need/Urgency',
                color: '#ca8a04',
                icon: '⏰',
                description: 'Hesitation about timing and necessity of purchase',
                examples: [
                  '"I need to think about it"',
                  '"I want to shop around"',
                  '"I\'m not sure I really need this"',
                  '"I can wait until later"',
                  '"Let me discuss with my spouse"'
                ],
                strategy: 'Provide more information, create appropriate urgency, offer consultation'
              },
              {
                category: 'Process/Complexity',
                color: '#7c3aed',
                icon: '📋',
                description: 'Confusion about how the process works or what\'s required',
                examples: [
                  '"This seems complicated"',
                  '"I don\'t have time for paperwork"',
                  '"I don\'t understand the terms"',
                  '"Do I really own it or not?"',
                  '"What if something goes wrong?"'
                ],
                strategy: 'Simplify explanation, break down steps, provide clear timeline'
              }
            ]
          },
          {
            type: 'objections-vs-concerns',
            title: 'Objections vs. Concerns: Key Differences',
            content: 'Learning to distinguish between objections and concerns helps you respond appropriately.',
            comparison: {
              objections: {
                definition: 'Emotional resistance requiring empathy and understanding',
                characteristics: [
                  'Defensive tone',
                  'Past negative experiences',
                  'Fear-based responses',
                  'Immediate rejection'
                ],
                response: 'Address with empathy first, then facts',
                example: '"I don\'t trust financing companies" (fear-based resistance)'
              },
              concerns: {
                definition: 'Legitimate questions seeking factual information',
                characteristics: [
                  'Curious tone',
                  'Specific information needs',
                  'Logical questions',
                  'Open to learning'
                ],
                response: 'Provide clear, factual answers',
                example: '"What are the payment options?" (information-seeking)'
              }
            }
          },
          {
            type: 'golden-rules',
            title: 'Golden Rules for Handling Objections',
            content: 'Essential principles that guide successful objection handling conversations.',
            rules: [
              {
                rule: 'Never Argue',
                description: 'Arguing creates conflict and destroys rapport',
                correct: '"I understand your concern about..."',
                incorrect: '"You\'re wrong about that..."'
              },
              {
                rule: 'Listen First',
                description: 'Let customers express their full concern before responding',
                correct: 'Allow complete explanation, then respond',
                incorrect: 'Interrupt with immediate solutions'
              },
              {
                rule: 'Acknowledge Emotions',
                description: 'Validate their feelings before addressing facts',
                correct: '"That frustration makes complete sense..."',
                incorrect: 'Jump directly to logical explanations'
              },
              {
                rule: 'Address Root Causes',
                description: 'Solve the underlying concern, not just the surface objection',
                correct: 'Explore what\'s really bothering them',
                incorrect: 'Only respond to what they literally said'
              }
            ]
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
            type: 'hear-method',
            title: 'The HEAR Method: Your Foundation for Objection Handling',
            content: 'HEAR provides a systematic approach that ensures you fully understand objections before responding.',
            method: {
              description: 'Four-step method for effective objection handling',
              steps: [
                {
                  letter: 'H',
                  step: 'HALT',
                  action: 'Stop talking and listen completely',
                  details: 'Let the customer express their full concern without interruption',
                  example: 'Customer: "This is too expensive and I don\'t trust financing..." - Listen to everything',
                  tips: ['Don\'t interrupt', 'Make eye contact', 'Show you\'re listening']
                },
                {
                  letter: 'E',
                  step: 'EMPATHIZE',
                  action: 'Acknowledge their concern and show understanding',
                  details: 'Validate their feelings before addressing facts',
                  example: '"I completely understand your concerns about cost and trust..."',
                  tips: ['Use their name', 'Mirror their emotions', 'Show genuine empathy']
                },
                {
                  letter: 'A',
                  step: 'ASK',
                  action: 'Ask clarifying questions to understand the real issue',
                  details: 'Discover the root cause behind the surface objection',
                  example: '"What specifically concerns you about the cost?" or "What experiences have you had with financing before?"',
                  tips: ['Ask open-ended questions', 'Listen for emotions', 'Dig deeper']
                },
                {
                  letter: 'R',
                  step: 'RESPOND',
                  action: 'Address the underlying concern with appropriate information',
                  details: 'Provide solutions that address their specific concerns',
                  example: 'Address their actual worries with specific EasyPay solutions',
                  tips: ['Be specific', 'Focus on benefits', 'Confirm understanding']
                }
              ]
            }
          },
          {
            type: 'objection-response-cards',
            title: 'Proven Scripts for Common Objections',
            content: 'Master responses for the four main objection categories with tested, effective scripts.',
            responseCards: [
              {
                category: 'Price/Cost',
                color: '#dc2626',
                objection: '"This is too expensive"',
                hearResponse: {
                  halt: 'Listen completely to their cost concerns',
                  empathize: '"I understand cost is really important to you"',
                  ask: '"When you say expensive, are you thinking about the total amount or the monthly payments?"',
                  respond: '"When you break it down to weekly payments, this comes to about $X per week - less than many people spend on coffee. And you get to enjoy the benefits immediately while paying over time. Does that help put it in perspective?"'
                },
                keyPoints: ['Break down to smaller amounts', 'Compare to everyday expenses', 'Emphasize immediate benefits']
              },
              {
                category: 'Trust/Credibility',
                color: '#ea580c',
                objection: '"I don\'t trust financing companies"',
                hearResponse: {
                  halt: 'Let them explain their past experiences fully',
                  empathize: '"I completely understand that concern - you\'ve probably heard some concerning stories"',
                  ask: '"What experiences have you had that make you feel this way?"',
                  respond: '"That\'s exactly why we partner with EasyPay Finance. They\'ve been helping people for over 20 years with transparent terms and no hidden fees. Let me show you exactly how this works and you can see the difference..."'
                },
                keyPoints: ['Acknowledge past bad experiences', 'Share company history', 'Offer transparency']
              },
              {
                category: 'Need/Urgency',
                color: '#ca8a04',
                objection: '"I need to think about it"',
                hearResponse: {
                  halt: 'Accept their need for consideration',
                  empathize: '"Of course, this is an important decision"',
                  ask: '"What specific aspects would you like to think through?"',
                  respond: '"I\'d be happy to address any questions now so you have all the information you need. What would be most helpful to discuss?"'
                },
                keyPoints: ['Don\'t pressure', 'Identify specific concerns', 'Offer information']
              },
              {
                category: 'Process/Complexity',
                color: '#7c3aed',
                objection: '"This seems complicated"',
                hearResponse: {
                  halt: 'Listen to what seems confusing to them',
                  empathize: '"I can see why it might seem that way at first"',
                  ask: '"What part seems most complicated to you?"',
                  respond: '"It\'s actually much simpler than it appears. For you, it\'s just three easy steps: provide some basic information, review and sign the agreement, and take your purchase home. The whole process typically takes about 15 minutes. Would you like me to walk you through it?"'
                },
                keyPoints: ['Simplify the explanation', 'Focus on their role only', 'Provide clear timeline']
              }
            ]
          },
          {
            type: 'objection-flow-process',
            title: 'Complete Objection Handling Conversation Flow',
            content: 'See how a complete objection handling conversation flows from initial resistance to resolution.',
            conversationFlow: {
              scenario: 'Customer looking at automotive repair financing',
              stages: [
                {
                  stage: 1,
                  title: 'Initial Objection',
                  customer: '"I don\'t know... this financing stuff always has hidden fees and I can\'t afford to get burned again."',
                  merchantThinking: 'Multiple concerns: trust + cost + past experience',
                  action: 'Apply HEAR method'
                },
                {
                  stage: 2,
                  title: 'HALT & EMPATHIZE',
                  merchant: '"I completely understand your concerns about hidden fees and past experiences. Nobody wants to get burned twice."',
                  result: 'Customer feels heard and validated'
                },
                {
                  stage: 3,
                  title: 'ASK Questions',
                  merchant: '"What happened before that made you feel burned? And what would need to be different this time for you to feel comfortable?"',
                  customer: '"Last company added fees I didn\'t know about and the payments were way higher than they said."',
                  result: 'Root cause identified: transparency and accurate payment information'
                },
                {
                  stage: 4,
                  title: 'RESPOND with Solutions',
                  merchant: '"That\'s exactly why we work with EasyPay Finance - complete transparency is their specialty. Let me show you the exact payment amount and all fees upfront. The only fee is $39 processing, and I\'ll show you exactly what that covers. No surprises."',
                  result: 'Customer sees specific solutions to their concerns'
                },
                {
                  stage: 5,
                  title: 'Confirmation',
                  merchant: '"Does this address your main concerns about transparency and fees?"',
                  customer: '"Yes, that\'s much clearer. Can you show me the payment options?"',
                  result: 'Objection resolved, moving to solution discussion'
                }
              ]
            }
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
            type: 'multiple-objections-strategy',
            title: 'Handling Multiple Objections and Complex Situations',
            content: 'Advanced techniques for managing customers with multiple concerns or persistent resistance.',
            strategies: [
              {
                situation: 'Sequential Objections',
                description: 'Customer raises one objection after another',
                approach: 'Look for patterns - multiple objections often indicate one underlying concern',
                example: 'Credit + Cost + Time concerns usually = Financial anxiety',
                technique: 'Address the root cause rather than each surface objection separately'
              },
              {
                situation: 'Contradictory Objections',
                description: 'Customer gives conflicting reasons for hesitation',
                approach: 'Gently point out the contradiction and explore the real concern',
                example: '"I can\'t afford it" followed by "I\'ll just pay cash" suggests decision anxiety',
                technique: 'Ask: "Help me understand - is it the payment amount or the financing process that concerns you most?"'
              },
              {
                situation: 'Persistent Resistance',
                description: 'Customer continues objecting despite good responses',
                approach: 'Step back and ask what would need to change for them to feel comfortable',
                example: 'After several objections: "What would need to be different about this for you to move forward?"',
                technique: 'Focus on identifying their true decision criteria'
              }
            ]
          },
          {
            type: 'yes-and-technique',
            title: 'The "Yes, And" vs "Yes, But" Communication Strategy',
            content: 'Transform potentially confrontational responses into collaborative conversations.',
            comparison: {
              wrongWay: {
                title: '"Yes, But" - Creates Conflict',
                pattern: 'Acknowledge + Dismiss + Counter',
                problems: ['Sounds argumentative', 'Invalidates their concern', 'Creates defensive responses'],
                examples: [
                  {
                    objection: '"I\'m worried about my credit and the payments are high"',
                    response: '"Yes, but our approval rates are high and payments are manageable"',
                    why_wrong: 'Dismisses both concerns without addressing them'
                  }
                ]
              },
              rightWay: {
                title: '"Yes, And" - Maintains Collaboration',
                pattern: 'Acknowledge + Validate + Build Solutions',
                benefits: ['Sounds supportive', 'Validates their feelings', 'Leads to problem-solving'],
                examples: [
                  {
                    objection: '"I\'m worried about my credit and the payments are high"',
                    response: '"Yes, I understand credit concerns, and that\'s exactly why many customers choose our lease-to-own option - it has more flexible approval requirements and you can pay it off early to save money"',
                    why_right: 'Acknowledges both concerns and offers specific solutions'
                  }
                ]
              }
            }
          },
          {
            type: 'emotional-de-escalation',
            title: 'Managing Emotional Customers and Difficult Situations',
            content: 'Professional techniques for de-escalating tension and maintaining productive conversations.',
            emotionalSituations: [
              {
                situation: 'Frustrated Customer',
                signs: ['Raised voice', 'Rapid speech', 'Past negative experiences'],
                approach: {
                  immediate: 'Lower your voice, slow down, use their name',
                  empathy: '"I can see you\'re frustrated, and that makes complete sense"',
                  solution: 'Focus on what you CAN do, not what you can\'t'
                }
              },
              {
                situation: 'Embarrassed Customer',
                signs: ['Quiet voice', 'Avoiding eye contact', 'Apologetic language'],
                approach: {
                  immediate: 'Be extra gentle, maintain dignity, normalize their situation',
                  empathy: '"Many of our customers have been in similar situations"',
                  solution: 'Emphasize that you specialize in helping people find solutions'
                }
              },
              {
                situation: 'Angry Customer',
                signs: ['Hostile tone', 'Blame language', 'Aggressive body language'],
                approach: {
                  immediate: 'Stay calm, don\'t take it personally, focus on facts',
                  empathy: '"I understand you\'re upset - let me see how I can help"',
                  solution: 'Take ownership where appropriate, offer specific next steps'
                }
              }
            ],
            deEscalationTechniques: [
              {
                technique: 'Voice Control',
                description: 'Lower your voice and speak more slowly',
                why: 'Calm tones are naturally de-escalating'
              },
              {
                technique: 'Name Usage',
                description: 'Use the customer\'s name frequently',
                why: 'Personal connection reduces hostility'
              },
              {
                technique: 'Emotion Acknowledgment',
                description: 'Directly acknowledge their emotions',
                why: 'Validates their feelings and shows understanding'
              },
              {
                technique: 'Solution Focus',
                description: 'Immediately pivot to what you can do',
                why: 'Moves conversation from problems to solutions'
              }
            ]
          },
          {
            type: 'credit-conversation-guide',
            title: 'The Sensitive Credit Conversation',
            content: 'Special approaches for discussing credit-related concerns with empathy and professionalism.',
            creditApproaches: {
              avoidPhrases: [
                '"What\'s wrong with your credit?"',
                '"How bad is your credit?"',
                '"You probably won\'t qualify"',
                '"Most people don\'t have credit problems"',
                '"You should have paid your bills"'
              ],
              usePhrases: [
                '"Many of our customers have been in similar situations"',
                '"We specialize in helping people find solutions"',
                '"Your current situation matters more to us than your past"',
                '"Let\'s see what options work best for you"',
                '"We look at much more than just credit scores"'
              ],
              conversationFlow: {
                opening: 'Normalize their situation and remove shame',
                information: 'Explain how EasyPay\'s approach is different',
                solution: 'Focus on available options, not limitations',
                confidence: 'Build hope while being realistic'
              }
            }
          },
          {
            type: 'graceful-exit-strategy',
            title: 'When and How to Gracefully Disengage',
            content: 'Recognize when to step back while keeping future opportunities open.',
            exitSignals: [
              'Customer becomes increasingly agitated despite de-escalation',
              'Multiple objections persist after thorough responses',
              'Customer explicitly states they\'re not interested multiple times',
              'Personal attacks or inappropriate behavior'
            ],
            exitStrategy: {
              steps: [
                {
                  step: 1,
                  action: 'Acknowledge their position',
                  script: '"I completely understand this isn\'t the right fit for you right now"'
                },
                {
                  step: 2,
                  action: 'Remove pressure',
                  script: '"There\'s absolutely no pressure - this decision has to feel right for you"'
                },
                {
                  step: 3,
                  action: 'Leave door open',
                  script: '"Here\'s my card with information about what we discussed"'
                },
                {
                  step: 4,
                  action: 'Future availability',
                  script: '"Feel free to call if you have questions or when timing is better"'
                },
                {
                  step: 5,
                  action: 'Professional close',
                  script: '"We\'ll be here when you\'re ready, and I hope you find the perfect solution"'
                }
              ],
              benefits: ['Maintains relationship', 'Shows professionalism', 'Creates future opportunities', 'Reduces stress for both parties']
            }
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