import { QuizQuestion } from '@/components/quiz/QuizComponent'

// Module 1: Welcome to EasyPay Finance
export const module1Quiz: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is EasyPay Finance\'s legal entity name?',
    options: [
      'EasyPay Finance LLC',
      'Duvera Billing Services, LLC',
      'EasyPay Financial Corporation',
      'Easy Payment Solutions Inc.'
    ],
    correctAnswer: 1,
    explanation: 'EasyPay Finance operates under the legal entity name "Duvera Billing Services, LLC" and does business as (DBA) EasyPay Finance.',
    points: 10
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How many years of experience does EasyPay Finance have in the industry?',
    options: [
      '15+ years',
      '20+ years',
      '25+ years',
      '10+ years'
    ],
    correctAnswer: 1,
    explanation: 'EasyPay Finance was founded in 2001, giving them over 20 years of experience in the consumer finance industry.',
    points: 10
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the maximum financing amount available through EasyPay Finance programs?',
    options: [
      '$3,000',
      '$4,000',
      '$5,000',
      '$7,500'
    ],
    correctAnswer: 2,
    explanation: 'EasyPay Finance offers financing up to $5,000 across their various financing programs.',
    points: 10
  },
  {
    id: 4,
    type: 'true-false',
    question: 'EasyPay Finance requires a down payment for all financing transactions.',
    correctAnswer: 1,
    explanation: 'False. One of EasyPay Finance\'s key features is "No Down Payment Required" for their financing programs.',
    points: 10
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What are the three main financing programs offered by EasyPay Finance?',
    options: [
      'Credit Sales, Personal Loans, and Business Loans',
      'Credit Sales, Lease-to-Own, and Third-Party Loan Provider',
      'Installment Loans, Credit Cards, and Lease-to-Own',
      'Personal Finance, Business Credit, and Equipment Leasing'
    ],
    correctAnswer: 1,
    explanation: 'EasyPay Finance offers three main programs: Credit Sales Program (Retail Installment Contracts), Lease-to-Own (LTO) Program, and Third-Party Loan Provider (TLP) Program.',
    points: 10
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What is the maximum finance charge if a customer pays within 90 days?',
    options: [
      '$25',
      '$30',
      '$40',
      '$50'
    ],
    correctAnswer: 2,
    explanation: 'EasyPay Finance caps the finance charge at $40 maximum if the contract is paid within 90 days.',
    points: 10
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'How many locations does EasyPay Finance serve across how many states?',
    options: [
      '10,000+ locations across 18 states',
      '12,000+ locations across 21 states',
      '15,000+ locations across 25 states',
      '8,000+ locations across 15 states'
    ],
    correctAnswer: 1,
    explanation: 'EasyPay Finance serves over 12,000 locations across 21 states, making them a significant player in the merchant financing space.',
    points: 10
  },
  {
    id: 8,
    type: 'true-false',
    question: 'The Lease-to-Own program includes early purchase options for customers.',
    correctAnswer: 0,
    explanation: 'True. The Lease-to-Own program includes early purchase options, giving customers flexibility in how they complete their purchase.',
    points: 10
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'What is EasyPay Finance\'s mission statement?',
    options: [
      '"Making Payments Simple"',
      '"Customer Financing Made EASY"',
      '"Easy Finance for Everyone"',
      '"Simplifying Customer Credit"'
    ],
    correctAnswer: 1,
    explanation: 'EasyPay Finance\'s mission is "Customer Financing Made EASY" - emphasizing simplicity and transparency in consumer finance options.',
    points: 10
  },
  {
    id: 10,
    type: 'multiple-choice',
    question: 'By what time must contracts be received for same-day funding?',
    options: [
      '3pm EST',
      '4pm EST',
      '5pm EST',
      '6pm EST'
    ],
    correctAnswer: 1,
    explanation: 'Contracts received by 4pm EST are eligible for same-day funding, helping merchants maintain cash flow.',
    points: 10
  }
]

// Module 2: How to Submit Applications
export const module2Quiz: QuizQuestion[] = [
  {
    id: 1,
    type: 'scenario',
    scenario: 'A customer wants to finance a $2,800 furniture purchase but is concerned about their credit history.',
    question: 'What should be your first step in the application process?',
    options: [
      'Tell them they probably won\'t qualify',
      'Ask them to provide a co-signer',
      'Explain the pre-qualification benefits and start the application',
      'Suggest they pay cash instead'
    ],
    correctAnswer: 2,
    explanation: 'Pre-qualification helps determine eligibility without impacting credit and builds customer confidence. Starting the application process allows EasyPay to provide real-time decisions.',
    points: 15
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What type of decision do most EasyPay Finance applications receive?',
    options: [
      'Decisions within 24-48 hours',
      'Real-time instant decisions',
      'Decisions within one week',
      'Manual review required for all applications'
    ],
    correctAnswer: 1,
    explanation: 'EasyPay Finance provides real-time instant approvals for most applications, allowing customers to complete their purchase immediately.',
    points: 10
  },
  {
    id: 3,
    type: 'true-false',
    question: 'Electronic signature capture is required for all EasyPay Finance applications.',
    correctAnswer: 0,
    explanation: 'True. Electronic signature capture is a required part of the application process to complete the contract legally and efficiently.',
    points: 10
  },
  {
    id: 4,
    type: 'scenario',
    scenario: 'A customer with prime credit wants to finance a $1,200 auto repair.',
    question: 'Which financing program would likely be most appropriate?',
    options: [
      'Only Lease-to-Own due to the repair nature',
      'Credit Sales Program or Third-Party Loan Provider',
      'Cash payment only for repairs',
      'Extended payment plan without financing'
    ],
    correctAnswer: 1,
    explanation: 'Prime credit customers often qualify for the Credit Sales Program or Third-Party Loan Provider program, which offer competitive terms for qualified borrowers.',
    points: 15
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What information is required from customers during the application process?',
    options: [
      'Only name and phone number',
      'Personal information, income verification, and identification',
      'Just a credit report',
      'Only employment information'
    ],
    correctAnswer: 1,
    explanation: 'The application requires comprehensive information including personal details, income verification, and proper identification to make accurate credit decisions.',
    points: 10
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'When should you discuss financing options with customers?',
    options: [
      'Only after they express concern about price',
      'At the end of the sales process',
      'Early in the sales conversation',
      'Only for expensive items'
    ],
    correctAnswer: 2,
    explanation: 'Introducing financing early in the conversation helps customers consider higher-value purchases and reduces price objections later in the sales process.',
    points: 10
  },
  {
    id: 7,
    type: 'scenario',
    scenario: 'It\'s 5pm EST and you have a customer ready to complete a financed purchase.',
    question: 'What should you tell them about funding timing?',
    options: [
      'Same-day funding is still available',
      'Funding will occur the next business day',
      'It will take 2-3 business days',
      'Weekend funding is not available'
    ],
    correctAnswer: 1,
    explanation: 'Contracts received after 4pm EST will be funded the next business day. Same-day funding is only available for contracts received by 4pm EST.',
    points: 15
  },
  {
    id: 8,
    type: 'true-false',
    question: 'You should only offer financing to customers who ask about it.',
    correctAnswer: 1,
    explanation: 'False. Proactively offering financing helps customers afford higher-value purchases and increases sales. Many customers don\'t know financing is available unless you mention it.',
    points: 10
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'What should you do if a customer\'s application is declined?',
    options: [
      'Tell them to try again later',
      'Suggest alternative financing options or payment plans',
      'End the sales conversation',
      'Ask them to find a co-signer immediately'
    ],
    correctAnswer: 1,
    explanation: 'If declined, explore alternative solutions like different financing programs, payment plans, or addressing specific concerns that led to the decline.',
    points: 10
  },
  {
    id: 10,
    type: 'multiple-choice',
    question: 'What is a key benefit of using payment calculators during the sales process?',
    options: [
      'They guarantee approval',
      'They help customers visualize affordable payments',
      'They provide exact interest rates',
      'They replace the need for applications'
    ],
    correctAnswer: 1,
    explanation: 'Payment calculators help customers understand how financing makes purchases affordable by breaking down costs into manageable monthly payments.',
    points: 10
  },
  {
    id: 11,
    type: 'scenario',
    scenario: 'A customer says "I don\'t believe in financing purchases, I only pay cash."',
    question: 'What\'s the best response?',
    options: [
      'Respect their preference and move on',
      'Explain how financing can preserve their cash for emergencies while still getting what they need',
      'Tell them financing is required',
      'Offer a discount for cash payment'
    ],
    correctAnswer: 1,
    explanation: 'Acknowledge their preference while explaining how financing can be a financial tool that preserves cash flow and emergency funds, giving them flexibility.',
    points: 15
  },
  {
    id: 12,
    type: 'true-false',
    question: 'Documentation requirements are the same across all states where EasyPay operates.',
    correctAnswer: 1,
    explanation: 'False. Documentation and compliance requirements can vary by state, so it\'s important to understand the specific requirements for your location.',
    points: 10
  }
]

// Module 3: Establishing a Credit Culture
export const module3Quiz: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What are the four pillars of establishing a successful credit culture?',
    options: [
      'Sales, Marketing, Training, Leadership',
      'Communication, Training, Incentives, Leadership',
      'Products, Pricing, Promotion, People',
      'Strategy, Systems, Structure, Skills'
    ],
    correctAnswer: 1,
    explanation: 'The four pillars of credit culture are Communication, Training, Incentives, and Leadership. These elements work together to create a consistent financing approach.',
    points: 10
  },
  {
    id: 2,
    type: 'scenario',
    scenario: 'You\'re training a new employee who is hesitant to offer financing because they don\'t want to be "pushy."',
    question: 'How should you address this concern?',
    options: [
      'Tell them financing discussions are optional',
      'Explain that offering financing is a customer service that helps people afford what they need',
      'Only have experienced staff discuss financing',
      'Focus only on cash sales for now'
    ],
    correctAnswer: 1,
    explanation: 'Reframe financing as a valuable customer service. You\'re helping customers afford solutions to their problems, not being pushy. It\'s about serving customer needs.',
    points: 15
  },
  {
    id: 3,
    type: 'true-false',
    question: 'Credit culture should only focus on high-ticket items.',
    correctAnswer: 1,
    explanation: 'False. Credit culture should be applied consistently across all appropriate sales opportunities, regardless of price point, to maximize opportunities and create consistent customer experiences.',
    points: 10
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What\'s the most important element in shifting from transactional to relationship mindset?',
    options: [
      'Focusing on commission potential',
      'Understanding customer needs and providing solutions',
      'Selling the most expensive options',
      'Closing sales quickly'
    ],
    correctAnswer: 1,
    explanation: 'Relationship mindset focuses on understanding customer needs and providing solutions, including financing options that make purchases possible and affordable.',
    points: 10
  },
  {
    id: 5,
    type: 'scenario',
    scenario: 'Your team\'s financing penetration rate has been declining over the past month.',
    question: 'What should be your first step to address this?',
    options: [
      'Implement new sales quotas',
      'Review training needs and communication consistency',
      'Change commission structure immediately',
      'Focus only on cash sales'
    ],
    correctAnswer: 1,
    explanation: 'Declining performance usually indicates training gaps or inconsistent communication. Address the foundation (training and communication) before changing incentive structures.',
    points: 15
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'How often should you conduct credit culture training refreshers?',
    options: [
      'Only during initial onboarding',
      'Annually',
      'Regularly, with ongoing reinforcement',
      'Only when problems arise'
    ],
    correctAnswer: 2,
    explanation: 'Credit culture requires ongoing reinforcement through regular training refreshers, not just one-time training. Consistent reinforcement maintains skills and enthusiasm.',
    points: 10
  },
  {
    id: 7,
    type: 'true-false',
    question: 'Recognition programs are essential for maintaining a strong credit culture.',
    correctAnswer: 0,
    explanation: 'True. Recognition programs reinforce desired behaviors, celebrate successes, and maintain team motivation around financing goals.',
    points: 10
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'What\'s the best way to handle customer objections about financing?',
    options: [
      'Immediately offer discounts',
      'Use prepared scripts and understand common concerns',
      'Avoid discussing financing altogether',
      'Only offer financing to pre-qualified customers'
    ],
    correctAnswer: 1,
    explanation: 'Having prepared responses to common objections and understanding the underlying concerns helps staff confidently address customer hesitations about financing.',
    points: 10
  },
  {
    id: 9,
    type: 'scenario',
    scenario: 'A team member consistently forgets to mention financing options to customers.',
    question: 'What\'s the most effective intervention?',
    options: [
      'Write them up for not following procedures',
      'Provide additional training and create reminder systems',
      'Assign them to non-sales roles',
      'Reduce their hours until they improve'
    ],
    correctAnswer: 1,
    explanation: 'Address performance gaps with additional training and supportive systems (like checklists or reminders) rather than punitive measures. Focus on building skills and habits.',
    points: 15
  },
  {
    id: 10,
    type: 'multiple-choice',
    question: 'What should be included in a 30-60-90 day credit culture implementation plan?',
    options: [
      'Only sales targets',
      'Training milestones, performance metrics, and system implementations',
      'Just hiring new staff',
      'Only technology upgrades'
    ],
    correctAnswer: 1,
    explanation: 'A comprehensive implementation plan includes training milestones, performance metrics tracking, system implementations, and regular review points to ensure successful adoption.',
    points: 10
  },
  {
    id: 11,
    type: 'true-false',
    question: 'Leadership participation is optional when building credit culture.',
    correctAnswer: 1,
    explanation: 'False. Leadership participation is critical for credit culture success. Leaders must model the behavior, provide resources, and consistently reinforce the importance of financing discussions.',
    points: 10
  },
  {
    id: 12,
    type: 'multiple-choice',
    question: 'What\'s the key to building trust and transparency with customers about financing?',
    options: [
      'Only mentioning the monthly payment amount',
      'Clearly explaining terms, benefits, and addressing questions honestly',
      'Minimizing discussion of details',
      'Focusing only on approval likelihood'
    ],
    correctAnswer: 1,
    explanation: 'Trust comes from transparency - clearly explaining terms, benefits, and addressing all customer questions honestly. This builds confidence in both the financing and your business.',
    points: 10
  }
]

// Module 4: Advanced Topics
export const module4Quiz: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does TILA stand for and why is it important for EasyPay merchants?',
    options: [
      'Truth in Lending Act - requires clear disclosure of credit terms',
      'Total Interest Limitation Act - caps interest rates',
      'Transaction Information Legal Act - requires record keeping',
      'Trade Industry Licensing Act - requires business licenses'
    ],
    correctAnswer: 0,
    explanation: 'TILA (Truth in Lending Act) requires clear and standardized disclosure of credit terms to consumers, ensuring they understand the cost and terms of financing.',
    points: 15
  },
  {
    id: 2,
    type: 'scenario',
    scenario: 'A customer wants to finance a $4,500 purchase but your state has specific documentation requirements that differ from other states.',
    question: 'What should you do?',
    options: [
      'Use the standard documentation for all states',
      'Follow your state-specific requirements and contact compliance if unsure',
      'Skip the additional documentation',
      'Refer them to a different financing company'
    ],
    correctAnswer: 1,
    explanation: 'State regulations vary, so you must follow your specific state requirements. When in doubt, contact the compliance team for guidance to ensure full compliance.',
    points: 15
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is a key strategy for upselling with financing?',
    options: [
      'Always push the most expensive option',
      'Show how financing makes better solutions affordable without significantly changing monthly payments',
      'Only focus on the financing terms',
      'Avoid mentioning higher-priced options'
    ],
    correctAnswer: 1,
    explanation: 'Effective upselling shows customers how financing makes better solutions accessible, often with minimal impact on monthly payments, providing more value for their needs.',
    points: 10
  },
  {
    id: 4,
    type: 'true-false',
    question: 'Customer data privacy regulations are the same across all states where EasyPay operates.',
    correctAnswer: 1,
    explanation: 'False. Privacy regulations can vary by state, and some states have stricter requirements than others. It\'s important to understand and comply with applicable privacy laws.',
    points: 10
  },
  {
    id: 5,
    type: 'scenario',
    scenario: 'A customer\'s application was approved, but they\'re questioning some of the contract terms after signing.',
    question: 'How should you handle this situation?',
    options: [
      'Tell them it\'s too late to make changes',
      'Review the terms clearly, answer their questions, and escalate to management if needed',
      'Ignore their concerns since they already signed',
      'Offer to cancel the entire transaction'
    ],
    correctAnswer: 1,
    explanation: 'Always address customer concerns professionally. Review terms clearly, answer questions, and escalate to management when needed. Transparency builds trust and prevents future issues.',
    points: 15
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What should be included in your audit preparation documentation?',
    options: [
      'Only signed contracts',
      'Signed contracts, customer identification, supporting documentation, and compliance checklists',
      'Just payment records',
      'Only customer contact information'
    ],
    correctAnswer: 1,
    explanation: 'Comprehensive audit preparation includes all signed contracts, customer identification copies, supporting documentation, and compliance checklists to demonstrate regulatory adherence.',
    points: 10
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'When implementing seasonal campaign strategies, what\'s most important?',
    options: [
      'Maximizing the number of financing applications',
      'Aligning financing options with seasonal customer needs and promotional timing',
      'Only focusing on holiday sales',
      'Reducing financing terms during busy periods'
    ],
    correctAnswer: 1,
    explanation: 'Successful seasonal campaigns align financing options with customer needs during specific seasons (like home improvement in spring) and coordinate with promotional timing.',
    points: 10
  },
  {
    id: 8,
    type: 'scenario',
    scenario: 'The MyEasyPay app is experiencing technical difficulties and customers can\'t complete their applications.',
    question: 'What\'s your immediate response?',
    options: [
      'Tell customers to come back later',
      'Use backup processes, contact technical support, and keep customers informed',
      'Only accept cash payments',
      'Close for the day'
    ],
    correctAnswer: 1,
    explanation: 'Have backup processes ready, immediately contact technical support, and keep customers informed. Maintain service levels even when technology encounters issues.',
    points: 15
  },
  {
    id: 9,
    type: 'true-false',
    question: 'Bundle offers should only include financing for the main item, not accessories.',
    correctAnswer: 1,
    explanation: 'False. Effective bundle offers can include financing for the complete package, making comprehensive solutions more affordable and increasing overall transaction value.',
    points: 10
  },
  {
    id: 10,
    type: 'multiple-choice',
    question: 'What\'s a key customer retention tactic using financing?',
    options: [
      'Only offering financing once per customer',
      'Building relationships through follow-up and offering financing for future needs',
      'Avoiding contact after the initial sale',
      'Only focusing on new customers'
    ],
    correctAnswer: 1,
    explanation: 'Customer retention involves building ongoing relationships, following up on satisfaction, and being available to offer financing for future needs, creating long-term customer loyalty.',
    points: 10
  },
  {
    id: 11,
    type: 'scenario',
    scenario: 'You notice that certain customer demographics seem to have different approval rates. This concerns you from a compliance perspective.',
    question: 'What should you do?',
    options: [
      'Ignore the pattern if it\'s not intentional',
      'Document your observations and report to compliance immediately',
      'Only offer financing to certain demographics',
      'Stop offering financing altogether'
    ],
    correctAnswer: 1,
    explanation: 'Any patterns that might indicate discriminatory practices must be reported to compliance immediately. Fair lending practices are legally required and ethically essential.',
    points: 15
  },
  {
    id: 12,
    type: 'multiple-choice',
    question: 'What should you do when EasyPay releases API updates or new integrations?',
    options: [
      'Wait until problems arise to learn about them',
      'Proactively learn about new features and test integration functionality',
      'Assume they don\'t affect your daily operations',
      'Only learn about changes that customers complain about'
    ],
    correctAnswer: 1,
    explanation: 'Stay proactive about technology updates. Learn new features, test functionality, and understand how changes affect your operations to maintain smooth customer experiences.',
    points: 10
  },
  {
    id: 13,
    type: 'scenario',
    scenario: 'A long-term customer is asking for special financing terms that aren\'t part of standard EasyPay programs.',
    question: 'How do you handle this request?',
    options: [
      'Create custom terms without approval',
      'Explain standard program options and escalate the request through proper channels',
      'Deny the request immediately',
      'Refer them to a competitor'
    ],
    correctAnswer: 1,
    explanation: 'Maintain program integrity by explaining standard options while escalating special requests through proper channels. This balances customer service with compliance requirements.',
    points: 15
  },
  {
    id: 14,
    type: 'true-false',
    question: 'Success metrics should only focus on the number of financing applications submitted.',
    correctAnswer: 1,
    explanation: 'False. Success metrics should be comprehensive, including application quality, approval rates, customer satisfaction, funding volumes, and long-term business impact, not just application quantity.',
    points: 10
  },
  {
    id: 15,
    type: 'multiple-choice',
    question: 'What\'s the most important aspect of case study analysis for improving your financing program?',
    options: [
      'Copying exactly what other merchants do',
      'Understanding underlying strategies and adapting them to your specific business context',
      'Only focusing on the highest-performing locations',
      'Implementing changes without testing'
    ],
    correctAnswer: 1,
    explanation: 'Effective case study analysis involves understanding the underlying strategies that drive success and thoughtfully adapting them to your specific business context and customer base.',
    points: 10
  }
]

export const allQuizzes = {
  1: {
    questions: module1Quiz,
    passingScore: 80,
    timeLimit: 15
  },
  2: {
    questions: module2Quiz,
    passingScore: 80,
    timeLimit: 20
  },
  3: {
    questions: module3Quiz,
    passingScore: 80,
    timeLimit: 18
  },
  4: {
    questions: module4Quiz,
    passingScore: 80,
    timeLimit: 25
  }
}