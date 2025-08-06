// Retail Installment Contract (RIC) Application Scenarios Based on EasyPay Process

export interface RICApplicationStep {
  stepNumber: number
  title: string
  description: string
  actor: 'merchant' | 'customer' | 'system'
  screenName: string
  actions: string[]
  importantNotes: string[]
  commonMistakes: string[]
  tips: string[]
}

export const ricApplicationProcess: RICApplicationStep[] = [
  {
    stepNumber: 1,
    title: "Log into Business Center",
    description: "Store associate accesses the EasyPay Business Center portal",
    actor: "merchant",
    screenName: "Business Center Login",
    actions: [
      "Navigate to https://businesscenterx.easypayfinance.com",
      "Enter merchant credentials",
      "Access application dashboard"
    ],
    importantNotes: [
      "Use the specific Business Center URL provided",
      "Ensure secure login credentials",
      "Verify merchant account is active"
    ],
    commonMistakes: [
      "Using wrong Business Center URL",
      "Sharing login credentials with unauthorized staff",
      "Not logging out after use"
    ],
    tips: [
      "Bookmark the correct Business Center URL",
      "Keep login credentials secure",
      "Multiple associates can have separate logins"
    ]
  },
  {
    stepNumber: 2,
    title: "Start New Application",
    description: "Initiate the RIC application process for the customer",
    actor: "merchant",
    screenName: "New Application Screen",
    actions: [
      "Click 'New Application' or 'Start Application'",
      "Select application type: Retail Installment Contract",
      "Enter customer's email OR mobile phone number",
      "Alternative: Generate QR code for customer to scan"
    ],
    importantNotes: [
      "Customer's email or phone number is required to send application link",
      "QR code option allows customer to start immediately",
      "RIC provides immediate ownership unlike lease agreements"
    ],
    commonMistakes: [
      "Entering incorrect customer contact information",
      "Not verifying customer has phone access",
      "Selecting wrong financing type (LTO vs RIC)"
    ],
    tips: [
      "Double-check customer email/phone spelling",
      "Use QR code for faster customer experience",
      "Explain immediate ownership benefit of RIC"
    ]
  },
  {
    stepNumber: 3,
    title: "Customer Receives Application Link",
    description: "Customer gets text message with application link",
    actor: "customer",
    screenName: "Text Message / QR Code",
    actions: [
      "Customer receives SMS with application link",
      "Customer clicks link or scans QR code",
      "Application opens on customer's mobile device"
    ],
    importantNotes: [
      "Link is sent immediately after merchant initiates",
      "QR code automatically directs to 'Get Started'",
      "Customer can complete on any mobile device or tablet"
    ],
    commonMistakes: [
      "Customer doesn't receive text (wrong number)",
      "Customer ignores or deletes text message",
      "Customer tries to complete on unsupported device"
    ],
    tips: [
      "Verify customer receives the text",
      "Help customer locate text if needed",
      "Reassure customer the process is secure"
    ]
  },
  {
    stepNumber: 4,
    title: "RIC Disclosures and Terms",
    description: "Customer reviews Retail Installment Contract terms and disclosure information",
    actor: "customer",
    screenName: "RIC Disclosures and Finance Terms",
    actions: [
      "Customer reads RIC Application Disclosures",
      "Customer reviews finance charge information",
      "Customer understands 90-Day Finance Charge Cap ($40)",
      "Customer accepts terms to proceed",
      "Customer clicks 'Continue' or 'Get Started'"
    ],
    importantNotes: [
      "Required TILA (Truth in Lending Act) disclosures",
      "90-Day Finance Charge Cap is a key RIC benefit",
      "Customer owns the item immediately upon approval"
    ],
    commonMistakes: [
      "Customer rushes through without reading TILA disclosures",
      "Not explaining immediate ownership benefit",
      "Customer confused about finance charges vs interest"
    ],
    tips: [
      "Emphasize immediate ownership advantage",
      "Explain the $40 finance charge cap benefit clearly",
      "Be available to answer questions about RIC structure"
    ]
  },
  {
    stepNumber: 5,
    title: "Personal Details Entry",
    description: "Customer enters personal information and verifies email",
    actor: "customer",
    screenName: "Personal Details Form",
    actions: [
      "Customer enters first and last name",
      "Customer enters date of birth",
      "Customer enters Social Security Number",
      "Customer enters phone number",
      "Customer enters email address",
      "System sends verification email",
      "Customer verifies email address",
      "Customer proceeds to Address Details"
    ],
    importantNotes: [
      "Email verification is required step",
      "SSN is needed for credit assessment",
      "All fields are required to proceed"
    ],
    commonMistakes: [
      "Customer enters incorrect email",
      "Customer doesn't check email for verification",
      "Customer uncomfortable entering SSN publicly"
    ],
    tips: [
      "Verify email address spelling carefully",
      "Give customer privacy for SSN entry",
      "Help customer check email if needed",
      "Explain that verification email comes quickly"
    ]
  },
  {
    stepNumber: 6,
    title: "Address and Income Information",
    description: "Customer completes address details and income/banking information",
    actor: "customer",
    screenName: "Address and Income Forms",
    actions: [
      "Customer enters current address",
      "Customer enters employment information",
      "Customer enters income details",
      "Customer chooses banking option:",
      "Option A: Connect bank account using Plaid",
      "Option B: Enter banking details manually",
      "Customer completes income and banking section"
    ],
    importantNotes: [
      "Plaid integration allows secure bank connection",
      "Manual entry option available as backup",
      "Income verification affects approval terms and rates"
    ],
    commonMistakes: [
      "Customer hesitant to connect bank account",
      "Incorrect banking information entered",
      "Customer doesn't understand Plaid security"
    ],
    tips: [
      "Explain Plaid security and convenience",
      "Offer manual entry if customer prefers",
      "Help customer locate bank routing/account numbers",
      "Reassure customer about data security"
    ]
  },
  {
    stepNumber: 7,
    title: "Application Decision",
    description: "System processes application and provides decision with RIC terms",
    actor: "system",
    screenName: "RIC Decision Screen",
    actions: [
      "System processes application (30-60 seconds)",
      "System generates approval decision",
      "Customer sees approval amount and payment terms",
      "Customer receives text message with full RIC terms",
      "Customer reviews finance charges and payment schedule"
    ],
    importantNotes: [
      "Processing is typically very fast",
      "Approval shows finance amount and monthly payment",
      "Text message contains detailed RIC terms including FCCP"
    ],
    commonMistakes: [
      "Customer doesn't wait for processing to complete",
      "Customer doesn't read full RIC terms in text",
      "Merchant assumes approval without checking decision"
    ],
    tips: [
      "Let customer know processing takes a minute",
      "Encourage customer to read full terms",
      "Be ready to explain 90-Day Finance Charge Cap benefit"
    ]
  },
  {
    stepNumber: 8,
    title: "Return to Business Center - Enter Purchase Details",
    description: "Store associate enters purchase information to generate RIC documents",
    actor: "merchant",
    screenName: "Purchase Details Entry",
    actions: [
      "Return to Business Center portal",
      "Navigate to the customer's application",
      "Enter detailed purchase information:",
      "- Item description and model numbers",
      "- Total purchase amount",
      "- Any applicable taxes and fees",
      "- Delivery details if applicable",
      "Generate customer's RIC contract",
      "Generate purchase receipt"
    ],
    importantNotes: [
      "Must enter accurate item descriptions for RIC contract",
      "Purchase amount affects finance charges",
      "Generates official RIC documentation"
    ],
    commonMistakes: [
      "Entering vague item descriptions",
      "Incorrect purchase amounts",
      "Not including applicable taxes",
      "Generating documents before customer approval"
    ],
    tips: [
      "Be specific with item descriptions for contract clarity",
      "Include all applicable fees and taxes",
      "Verify purchase amount is correct before generating",
      "Keep copies of all generated RIC documents"
    ]
  },
  {
    stepNumber: 9,
    title: "Identity Verification",
    description: "Store associate verifies customer identity against application",
    actor: "merchant",
    screenName: "ID Verification Popup",
    actions: [
      "Pop-up screen appears for identity verification",
      "Verify customer information matches ID:",
      "- Full name matches exactly",
      "- Date of birth matches",
      "- Address matches (if current)",
      "Check customer's valid government-issued ID",
      "Confirm information accuracy",
      "Proceed to contract signing"
    ],
    importantNotes: [
      "Required legal step for RIC agreements",
      "Must use valid government-issued ID",
      "Information must match application exactly"
    ],
    commonMistakes: [
      "Not carefully checking ID details",
      "Accepting expired identification",
      "Proceeding with mismatched information"
    ],
    tips: [
      "Take time to carefully verify all details",
      "Ask customer for current, valid ID",
      "Contact support if information doesn't match"
    ]
  },
  {
    stepNumber: 10,
    title: "DocuSign RIC Contract Signing",
    description: "Customer electronically signs the Retail Installment Contract",
    actor: "customer",
    screenName: "DocuSign Interface",
    actions: [
      "Customer receives text message with DocuSign link",
      "Customer clicks link to access RIC contract",
      "Customer confirms last 4 digits of SSN",
      "Customer proceeds to DocuSign interface",
      "Customer reviews RIC agreement terms and payment schedule",
      "Customer signs electronically using DocuSign",
      "System confirms successful signature"
    ],
    importantNotes: [
      "SSN verification required for security",
      "Customer must sign electronically",
      "RIC contract becomes legally binding upon signature",
      "Customer immediately owns the merchandise"
    ],
    commonMistakes: [
      "Customer rushes through contract review",
      "Technical issues with DocuSign access",
      "Customer forgets last 4 SSN digits"
    ],
    tips: [
      "Help customer access DocuSign if needed",
      "Encourage customer to read contract carefully",
      "Be available for questions about payment terms",
      "Emphasize immediate ownership benefit"
    ]
  },
  {
    stepNumber: 11,
    title: "Complete Transaction - No Processing Fee",
    description: "Finalize RIC transaction (no additional fees required)",
    actor: "merchant",
    screenName: "Transaction Completion",
    actions: [
      "Confirm RIC contract is fully executed",
      "Verify customer ownership begins immediately",
      "Prepare merchandise for delivery",
      "Provide customer with RIC documentation",
      "Explain payment schedule and FCCP benefit"
    ],
    importantNotes: [
      "NO processing fee required for RIC (unlike LTO)",
      "Customer owns item immediately upon contract execution",
      "First payment typically due within 30 days"
    ],
    commonMistakes: [
      "Trying to collect processing fee (RIC has no fee)",
      "Not explaining immediate ownership",
      "Forgetting to provide payment schedule information"
    ],
    tips: [
      "Explain no processing fee advantage of RIC",
      "Emphasize immediate ownership benefit",
      "Provide clear payment schedule documentation",
      "Explain 90-Day Finance Charge Cap opportunity"
    ]
  },
  {
    stepNumber: 12,
    title: "Deliver Merchandise",
    description: "Customer takes possession of purchased items",
    actor: "merchant",
    screenName: "Delivery Confirmation",
    actions: [
      "Customer takes physical possession of merchandise",
      "Verify delivery is complete",
      "Mark transaction as 'Complete' in system",
      "Customer officially begins RIC payment terms",
      "Provide customer with warranty and care information"
    ],
    importantNotes: [
      "Customer already owns the item (unlike LTO)",
      "Payment schedule begins according to RIC terms",
      "Customer can pay off early anytime with no penalties"
    ],
    commonMistakes: [
      "Not explaining early payoff benefits",
      "Forgetting to complete transaction confirmation",
      "Not providing payment information to customer"
    ],
    tips: [
      "Remind customer of 90-Day Finance Charge Cap benefit",
      "Provide clear payment schedule and contact information",
      "Explain early payment advantages",
      "Ensure customer has all warranty documentation"
    ]
  }
]

// Top 3 RIC Customer Scenarios (Reduced for Better UX)
export const ricCustomerScenarios = [
  {
    id: "ric-good-credit-appliances",
    title: "Good Credit Customer - Kitchen Appliances",
    difficulty: "beginner",
    reward: 35,
    scenarioType: "good-credit",
    customerProfile: {
      name: "David Martinez",
      creditScore: "720+",
      income: "$4,200/month",
      financedAmount: "$3,500",
      itemDescription: "Kitchen appliance package"
    },
    applicationDetails: {
      email: "david.martinez@email.com",
      phone: "(555) 234-5678",
      bankingPreference: "Plaid connection",
      challengePoints: ["Wants to understand terms clearly", "Considering early payoff", "Comparing to other options"]
    },
    expectedOutcome: "approved",
    processingFee: "None (RIC advantage)",
    keyLearningPoints: [
      "Working with good credit customers",
      "Explaining immediate ownership benefits",
      "90-Day Finance Charge Cap advantage",
      "No processing fee benefit"
    ]
  },
  {
    id: "ric-fair-credit-auto",
    title: "Fair Credit Customer - Emergency Auto Repair",
    difficulty: "intermediate",
    reward: 40,
    scenarioType: "emergency-repair",
    customerProfile: {
      name: "Sarah Johnson",
      creditScore: "650",
      income: "$3,000/month",
      financedAmount: "$2,200",
      itemDescription: "Transmission and brake repair"
    },
    applicationDetails: {
      email: "sarah.johnson@email.com",
      phone: "(555) 345-6789",
      bankingPreference: "Manual entry preferred",
      challengePoints: ["Urgent need for transportation", "Budget constraints", "Stress about repair costs"]
    },
    expectedOutcome: "approved",
    processingFee: "None (RIC advantage)",
    keyLearningPoints: [
      "Managing urgent customer needs",
      "Fair credit approval process",
      "Stress reduction through clear terms",
      "Emergency situation handling"
    ]
  },
  {
    id: "ric-business-equipment",
    title: "Self-Employed Customer - Office Equipment",
    difficulty: "advanced",
    reward: 50,
    scenarioType: "business-purchase",
    customerProfile: {
      name: "Mike Chen",
      creditScore: "680",
      income: "$3,800/month (variable)",
      financedAmount: "$4,200",
      itemDescription: "Complete home office setup"
    },
    applicationDetails: {
      email: "mike.chen.consulting@gmail.com",
      phone: "(555) 456-7890",
      bankingPreference: "Plaid connection",
      challengePoints: ["Variable income verification", "Business tax considerations", "ROI analysis mindset"]
    },
    expectedOutcome: "approved",
    processingFee: "None (RIC advantage)",
    keyLearningPoints: [
      "Self-employed income verification",
      "Business equipment immediate ownership benefits",
      "Variable income considerations",
      "Early payoff planning for business customers"
    ]
  }
];

// Common Issues and Troubleshooting for RIC Process
    title: "First-Time Financing Customer - Electronics",
    difficulty: "beginner",
    reward: 35,
    scenarioType: "first-time",
    customerProfile: {
      name: "Ashley Williams",
      creditScore: "No credit history",
      income: "$2,800/month",
      financedAmount: "$1,899",
      itemDescription: "Laptop and accessories for college"
    },
    applicationDetails: {
      email: "ashley.williams.student@university.edu",
      phone: "(555) 567-8901",
      bankingPreference: "Plaid connection",
      challengePoints: ["No credit history", "First-time financing", "College student budget"]
    },
    expectedOutcome: "approved",
    processingFee: "None (RIC advantage)",
    keyLearningPoints: [
      "First-time financing customer education",
      "No credit history approval process",
      "College student considerations",
      "Building confidence in financing"
    ]
  },
  {
    id: "ric-senior-customer",
    title: "Senior Customer - Medical Equipment",
    difficulty: "intermediate",
    reward: 45,
    scenarioType: "assisted-senior",
    customerProfile: {
      name: "Linda Thompson",
      creditScore: "Good (700+)",
      income: "$2,100/month (fixed)",
      financedAmount: "$1,299",
      itemDescription: "Adjustable bed and medical equipment"
    },
    applicationDetails: {
      email: "linda.thompson1952@aol.com",
      phone: "(555) 567-1952",
      bankingPreference: "Requires assistance",
      challengePoints: ["Technology assistance needed", "Fixed income", "Health necessity", "Patient guidance required"]
    },
    expectedOutcome: "approved",
    processingFee: "None (RIC advantage)",
    keyLearningPoints: [
      "Providing patient technology assistance",
      "Fixed income considerations",
      "Medical equipment financing",
      "Senior customer service approach"
    ]
  },
  {
    id: "ric-home-improvement",
    title: "Home Improvement - HVAC System",
    difficulty: "advanced",
    reward: 55,
    scenarioType: "major-purchase",
    customerProfile: {
      name: "Carlos Rodriguez",
      creditScore: "Fair (640)",
      income: "$4,500/month",
      financedAmount: "$4,800",
      itemDescription: "Complete HVAC system replacement"
    },
    applicationDetails: {
      email: "carlos.rodriguez.homeowner@email.com",
      phone: "(555) 678-9012",
      bankingPreference: "Manual entry",
      challengePoints: ["Large purchase amount", "Seasonal urgency", "Home value considerations", "Family budget impact"]
    },
    expectedOutcome: "approved",
    processingFee: "None (RIC advantage)",
    keyLearningPoints: [
      "Large purchase financing",
      "Home improvement considerations",
      "Seasonal emergency handling",
      "Family financial planning"
    ]
  },
  {
    id: "ric-young-professional",
    title: "Young Professional - Furniture Package",
    difficulty: "beginner",
    reward: 30,
    scenarioType: "lifestyle-purchase",
    customerProfile: {
      name: "Tyler Jackson",
      creditScore: "Fair (660)",
      income: "$3,200/month",
      financedAmount: "$2,100",
      itemDescription: "Living room and bedroom furniture set"
    },
    applicationDetails: {
      email: "tyler.jackson.professional@email.com",
      phone: "(555) 789-0123",
      bankingPreference: "Plaid connection",
      challengePoints: ["New apartment setup", "Career building phase", "Digital-first preference", "Budget planning"]
    },
    expectedOutcome: "approved",
    processingFee: "None (RIC advantage)",
    keyLearningPoints: [
      "Young professional lifestyle needs",
      "Digital-first customer experience",
      "Career-building financial planning",
      "Modern furniture financing approach"
    ]
  },
  {
    id: "ric-family-emergency",
    title: "Family Emergency - Appliance Replacement",
    difficulty: "intermediate",
    reward: 40,
    scenarioType: "family-emergency",
    customerProfile: {
      name: "Jennifer Davis",
      creditScore: "Good (690)",
      income: "$3,600/month",
      financedAmount: "$1,650",
      itemDescription: "Refrigerator and washer replacement"
    },
    applicationDetails: {
      email: "jennifer.davis.family@gmail.com",
      phone: "(555) 890-1234",
      bankingPreference: "Plaid connection",
      challengePoints: ["Multiple appliance failure", "Family with children", "Urgent replacement need", "Budget coordination"]
    },
    expectedOutcome: "approved",
    processingFee: "None (RIC advantage)",
    keyLearningPoints: [
      "Family emergency situation handling",
      "Multiple item financing",
      "Urgent replacement coordination",
      "Family budget considerations"
    ]
  },
  {
    id: "ric-credit-building",
    title: "Credit Building Customer - Electronics Purchase",
    difficulty: "intermediate",
    reward: 35,
    scenarioType: "credit-building",
    customerProfile: {
      name: "Marcus Thompson",
      creditScore: "Building (580-620)",
      income: "$2,900/month",
      financedAmount: "$1,799",
      itemDescription: "Gaming setup and accessories"
    },
    applicationDetails: {
      email: "marcus.thompson.gamer@email.com",
      phone: "(555) 901-2345",
      bankingPreference: "Manual entry",
      challengePoints: ["Building credit history", "Gaming enthusiast", "Concerned about approval", "Understanding payment terms"]
    },
    expectedOutcome: "approved",
    processingFee: "None (RIC advantage)",
    keyLearningPoints: [
      "Credit building customer support",
      "Entertainment/gaming equipment financing",
      "Building customer confidence",
      "Payment success strategies"
    ]
  },
  {
    id: "ric-maximum-amount",
    title: "Maximum RIC Amount - Premium Purchase",
    difficulty: "advanced",
    reward: 60,
    scenarioType: "maximum-financing",
    customerProfile: {
      name: "Patricia Wilson",
      creditScore: "Excellent (750+)",
      income: "$5,200/month",
      financedAmount: "$5,000",
      itemDescription: "Premium bedroom and living room furniture collection"
    },
    applicationDetails: {
      email: "patricia.wilson.executive@email.com",
      phone: "(555) 012-3456",
      bankingPreference: "Plaid connection",
      challengePoints: ["Maximum RIC amount", "Premium quality focus", "Executive customer", "Early payoff planning"]
    },
    expectedOutcome: "approved",
    processingFee: "None (RIC advantage)",
    keyLearningPoints: [
      "Maximum RIC amount processing",
      "Premium customer service approach",
      "Executive-level communication",
      "Large purchase early payoff benefits"
    ]
  }
]

// Common Issues and Troubleshooting for RIC Process
export const ricTroubleshooting = [
  {
    issue: "Customer doesn't understand immediate ownership",
    causes: ["Confused with lease concepts", "First-time RIC experience", "Unclear explanation"],
    solutions: [
      "Emphasize 'you own it immediately' benefit",
      "Compare to traditional credit purchases",
      "Explain difference from lease-to-own",
      "Use simple ownership language"
    ]
  },
  {
    issue: "Customer confused about 90-Day Finance Charge Cap",
    causes: ["Complex finance terminology", "Never seen FCCP before", "Skeptical about cap"],
    solutions: [
      "Use specific dollar example ($40 cap)",
      "Explain as 'maximum finance charge protection'",
      "Show potential savings compared to other financing",
      "Provide written summary of FCCP benefit"
    ]
  },
  {
    issue: "Customer expects processing fee",
    causes: ["Previous LTO experience", "Other financing had fees", "Confusion about RIC benefits"],
    solutions: [
      "Clearly state 'no processing fee for RIC'",
      "Explain as RIC advantage",
      "Compare to LTO processing fee difference",
      "Emphasize total cost savings"
    ]
  },
  {
    issue: "Good credit customer questions RIC choice",
    causes: ["Thinks traditional credit is better", "Doesn't understand RIC benefits", "Rate shopping"],
    solutions: [
      "Explain immediate ownership benefit",
      "Highlight 90-Day Finance Charge Cap protection",
      "Show no processing fee advantage",
      "Emphasize flexible early payoff options"
    ]
  },
  {
    issue: "Customer wants to pay off immediately",
    causes: ["Doesn't understand payment timing", "Wants to avoid all finance charges", "Impatient"],
    solutions: [
      "Explain payment schedule flexibility",
      "Show early payoff savings calculation",
      "Describe 90-day cap benefit for planning",
      "Confirm no prepayment penalties"
    ]
  },
  {
    issue: "Self-employed income verification concerns",
    causes: ["Variable income", "Tax considerations", "Documentation worries"],
    solutions: [
      "Explain income verification process",
      "Describe acceptable documentation",
      "Reassure about privacy and security",
      "Offer manual banking entry if needed"
    ]
  }
]