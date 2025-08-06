// Lease-to-Own Application Scenarios Based on Actual EasyPay Process

export interface LTOApplicationStep {
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

export const ltoApplicationProcess: LTOApplicationStep[] = [
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
    description: "Initiate the lease application process for the customer",
    actor: "merchant",
    screenName: "New Application Screen",
    actions: [
      "Click 'New Application' or 'Start Application'",
      "Select application type: Lease-to-Own",
      "Enter customer's email OR mobile phone number",
      "Alternative: Generate QR code for customer to scan"
    ],
    importantNotes: [
      "Customer's email or phone number is required to send application link",
      "QR code option allows customer to start immediately",
      "Make sure customer has access to their phone for texts"
    ],
    commonMistakes: [
      "Entering incorrect customer contact information",
      "Not verifying customer has phone access",
      "Forgetting to specify Lease-to-Own program"
    ],
    tips: [
      "Double-check customer email/phone spelling",
      "Use QR code for faster customer experience",
      "Explain to customer they'll receive a text message"
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
    title: "Application Disclosures",
    description: "Customer reviews lease terms and disclosure information",
    actor: "customer",
    screenName: "Disclosures and Example Cost",
    actions: [
      "Customer reads Application Disclosures",
      "Customer reviews Example Cost of Leasing",
      "Customer accepts terms to proceed",
      "Customer clicks 'Continue' or 'Get Started'"
    ],
    importantNotes: [
      "Required legal disclosures for lease-to-own",
      "Example costs help customer understand lease structure",
      "Customer must accept to proceed"
    ],
    commonMistakes: [
      "Customer rushes through without reading",
      "Not explaining lease vs. purchase difference",
      "Customer confused about lease terms"
    ],
    tips: [
      "Encourage customer to read disclosures",
      "Be available to answer questions about lease structure",
      "Explain early purchase options"
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
      "Income verification affects approval terms"
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
    description: "System processes application and provides decision",
    actor: "system",
    screenName: "Decision Screen",
    actions: [
      "System processes application (30-60 seconds)",
      "System generates approval decision",
      "Customer sees approval amount and terms",
      "Customer receives text message with full approval terms",
      "Customer reviews lease terms and conditions"
    ],
    importantNotes: [
      "Processing is typically very fast",
      "Approval shows lease amount and terms",
      "Text message contains detailed terms"
    ],
    commonMistakes: [
      "Customer doesn't wait for processing to complete",
      "Customer doesn't read full terms in text",
      "Merchant assumes approval without checking"
    ],
    tips: [
      "Let customer know processing takes a minute",
      "Encourage customer to read full terms",
      "Be ready to explain lease payment structure"
    ]
  },
  {
    stepNumber: 8,
    title: "Return to Business Center - Enter Purchase Details",
    description: "Store associate enters purchase information to generate lease documents",
    actor: "merchant",
    screenName: "Purchase Details Entry",
    actions: [
      "Return to Business Center portal",
      "Navigate to the customer's application",
      "Enter detailed purchase information:",
      "- Item description and model numbers",
      "- Total purchase amount",
      "- Any applicable taxes",
      "- Delivery details if applicable",
      "Generate customer's lease invoice",
      "Generate purchase receipt"
    ],
    importantNotes: [
      "Must enter accurate item descriptions",
      "Purchase amount affects lease terms",
      "Generates official lease documentation"
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
      "Keep copies of all generated documents"
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
      "Required legal step for lease agreements",
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
    title: "DocuSign Contract Signing",
    description: "Customer electronically signs the lease agreement",
    actor: "customer",
    screenName: "DocuSign Interface",
    actions: [
      "Customer receives text message with DocuSign link",
      "Customer clicks link to access contract",
      "Customer confirms last 4 digits of SSN",
      "Customer proceeds to DocuSign interface",
      "Customer reviews lease agreement terms",
      "Customer signs electronically using DocuSign",
      "System confirms successful signature"
    ],
    importantNotes: [
      "SSN verification required for security",
      "Customer must sign electronically",
      "Contract becomes legally binding upon signature"
    ],
    commonMistakes: [
      "Customer rushes through contract review",
      "Technical issues with DocuSign access",
      "Customer forgets last 4 SSN digits"
    ],
    tips: [
      "Help customer access DocuSign if needed",
      "Encourage customer to read contract carefully",
      "Be available for questions about terms",
      "Ensure customer understands early purchase options"
    ]
  },
  {
    stepNumber: 11,
    title: "Collect $39 Processing Fee",
    description: "Store associate collects required processing fee from customer",
    actor: "merchant",
    screenName: "Processing Fee Collection",
    actions: [
      "Inform customer of $39 processing fee",
      "Collect payment via:",
      "- Cash",
      "- Credit/debit card",
      "- Other accepted payment methods",
      "Confirm payment received in system",
      "Provide receipt for processing fee"
    ],
    importantNotes: [
      "CRITICAL: $39 fee MUST be collected before continuing",
      "Fee is required for all lease agreements",
      "Cannot proceed to delivery without fee collection"
    ],
    commonMistakes: [
      "Forgetting to collect the processing fee",
      "Proceeding without confirming fee payment",
      "Not providing receipt for fee payment"
    ],
    tips: [
      "Inform customer of fee upfront during process",
      "Collect fee immediately after contract signing",
      "Always confirm fee collection in system",
      "Keep record of fee payment method"
    ]
  },
  {
    stepNumber: 12,
    title: "Confirm Processing Fee Collection",
    description: "System confirmation that processing fee has been collected",
    actor: "merchant",
    screenName: "Fee Confirmation Screen",
    actions: [
      "System prompts to confirm fee collection",
      "Verify $39 processing fee has been collected",
      "Select payment method used",
      "Confirm collection in system",
      "Proceed to final delivery step"
    ],
    importantNotes: [
      "System will not allow progression without fee confirmation",
      "Must accurately record payment method",
      "This creates audit trail for fee collection"
    ],
    commonMistakes: [
      "Confirming fee collection before actually collecting",
      "Selecting wrong payment method",
      "Not completing confirmation step"
    ],
    tips: [
      "Only confirm after fee is actually in hand",
      "Double-check payment method selection",
      "This step protects both merchant and EasyPay"
    ]
  },
  {
    stepNumber: 13,
    title: "Mark Item as Delivered",
    description: "Final step confirming customer has received merchandise",
    actor: "merchant",
    screenName: "Delivery Confirmation",
    actions: [
      "Customer takes physical possession of merchandise",
      "Verify delivery is complete",
      "Mark item as 'Delivered' in system",
      "Process is now complete",
      "Customer officially begins lease terms"
    ],
    importantNotes: [
      "DO NOT mark as delivered until customer has product",
      "This starts the official lease period",
      "Customer's first payment date begins from this point"
    ],
    commonMistakes: [
      "Marking delivered before customer takes possession",
      "Forgetting to complete delivery confirmation",
      "Not explaining lease start date to customer"
    ],
    tips: [
      "Only mark delivered when customer physically has product",
      "Explain to customer when their first payment is due",
      "Confirm customer understands early purchase options",
      "Provide customer with lease documentation"
    ]
  }
]

// Top 3 LTO Application Process Scenarios (Reduced for Better UX)
export const ltoCustomerScenarios = [
  {
    id: "process-credit-challenged",
    title: "Credit-Challenged Customer - Full Process Walkthrough",
    difficulty: "beginner",
    reward: 40,
    scenarioType: "full-process",
    customerProfile: {
      name: "Maria Gonzalez",
      creditScore: "Below 580",
      income: "$2,200/month",
      purchaseAmount: "$1,899",
      itemDescription: "5-piece bedroom set"
    },
    applicationDetails: {
      email: "maria.gonzalez@email.com",
      phone: "(555) 234-5678",
      bankingPreference: "Manual entry (no Plaid)",
      challengePoints: ["Poor credit anxiety", "Manual banking preference", "Needs reassurance"]
    },
    expectedOutcome: "approved",
    processingFee: "$39 (cash payment)",
    keyLearningPoints: [
      "Complete 13-step LTO process",
      "Handling credit-challenged customers",
      "Manual banking entry process",
      "Building customer confidence"
    ]
  },
  {
    id: "process-tech-savvy",
    title: "Tech-Savvy Customer - Digital-First Experience",
    difficulty: "intermediate", 
    reward: 35,
    scenarioType: "digital-focus",
    customerProfile: {
      name: "Tyler Chen",
      creditScore: "No credit history",
      income: "$1,800/month",
      purchaseAmount: "$2,199",
      itemDescription: "Gaming computer setup"
    },
    applicationDetails: {
      email: "tyler.chen.student@university.edu",
      phone: "(555) 345-6789",
      bankingPreference: "Plaid connection preferred",
      challengePoints: ["Young customer", "No credit history", "Wants fast digital process"]
    },
    expectedOutcome: "approved",
    processingFee: "$39 (credit card)",
    keyLearningPoints: [
      "Plaid integration benefits",
      "Working with younger customers",
      "Digital-first application flow",
      "Understanding that LTO does not report to credit bureaus"
    ]
  },
  {
    id: "process-urgent-need",
    title: "Emergency Repair - Time-Pressured Process",
    difficulty: "advanced",
    reward: 50,
    scenarioType: "time-critical",
    customerProfile: {
      name: "Carlos Martinez", 
      creditScore: "Poor (520-580)",
      income: "$2,900/month",
      purchaseAmount: "$3,200",
      itemDescription: "Emergency transmission replacement"
    },
    applicationDetails: {
      email: "c.martinez87@email.com",
      phone: "(555) 789-0123",
      bankingPreference: "Manual entry",
      challengePoints: ["Time pressure", "Work dependency", "Stress management", "Poor credit"]
    },
    expectedOutcome: "approved",
    processingFee: "$39 (cash payment)",
    keyLearningPoints: [
      "Managing urgent customer needs",
      "Parallel processing (app + prep work)",
      "Stress-reduction techniques", 
      "Emergency approval handling"
    ]
  }
];

// Common Issues and Troubleshooting for LTO Process
    customerProfile: {
      name: "Linda Thompson",
      creditScore: "Good (680-720)",
      income: "$2,100/month (fixed)",
      purchaseAmount: "$1,299", 
      itemDescription: "Mobility scooter"
    },
    applicationDetails: {
      email: "linda.thompson1952@aol.com",
      phone: "(555) 567-1952",
      bankingPreference: "Requires assistance",
      challengePoints: ["Technology hesitancy", "Fixed income", "Needs patience", "Step-by-step help"]
    },
    expectedOutcome: "approved",
    processingFee: "$39 (debit card)",
    keyLearningPoints: [
      "Providing patient assistance",
      "Technology support for seniors",
      "Fixed income considerations",
      "Building trust through service"
    ]
  },
  {
    id: "auto-premium-upgrade",
    title: "Premium Tire Package - Elective Upgrade",
    difficulty: "beginner",
    reward: 35,
    scenarioType: "elective-upgrade",
    customerProfile: {
      name: "Jessica Williams",
      creditScore: "Fair (640-680)",
      income: "$3,800/month",
      purchaseAmount: "$1,899",
      itemDescription: "Premium tires, custom wheels, installation"
    },
    applicationDetails: {
      email: "jess.williams2024@gmail.com",
      phone: "(555) 456-7890",
      bankingPreference: "Plaid connection",
      challengePoints: ["Safety vs. cost", "Premium vs. standard options", "Early payoff planning"]
    },
    expectedOutcome: "approved",
    processingFee: "$39 (debit card)",
    keyLearningPoints: [
      "Handling elective vs. emergency repairs",
      "Explaining early purchase savings",
      "Working with safety-conscious customers",
      "Premium upgrade value proposition"
    ]
  },
  {
    id: "auto-inspection-failure",
    title: "Inspection Failure - Compliance Deadline",
    difficulty: "advanced",
    reward: 50,
    scenarioType: "compliance-critical",
    customerProfile: {
      name: "Michael Thompson",
      creditScore: "No credit history",
      income: "$2,400/month",
      purchaseAmount: "$2,750",
      itemDescription: "Fuel system replacement (inspection required)"
    },
    applicationDetails: {
      email: "mike.t.auto@email.com",
      phone: "(555) 234-5679",
      bankingPreference: "Manual entry",
      challengePoints: ["Legal compliance deadline", "Young customer", "Complex repair", "No credit history"]
    },
    expectedOutcome: "approved",
    processingFee: "$39 (credit card)",
    keyLearningPoints: [
      "Handling compliance-driven repairs",
      "Working with first-time credit applicants",
      "Complex automotive system explanations",
      "Deadline pressure management"
    ]
  },
  {
    id: "auto-high-value-repair",
    title: "Engine Rebuild - Maximum Amount Financing",
    difficulty: "advanced",
    reward: 55,
    scenarioType: "high-value",
    customerProfile: {
      name: "Sandra Davis",
      creditScore: "Challenged (560-600)",
      income: "$4,100/month",
      purchaseAmount: "$4,200",
      itemDescription: "Complete engine rebuild with warranty"
    },
    applicationDetails: {
      email: "sandra.davis.mom@email.com",
      phone: "(555) 567-8912",
      bankingPreference: "Plaid connection",
      challengePoints: ["Maximum LTO amount", "Credit challenges", "Repair vs. replace decision", "Family budget"]
    },
    expectedOutcome: "approved",
    processingFee: "$39 (cash)",
    keyLearningPoints: [
      "Handling maximum LTO amounts",
      "Repair vs. replacement counseling",
      "Large purchase payment planning",
      "Family financial decision support"
    ]
  },
  {
    id: "auto-contractor-vehicle",
    title: "Contractor Vehicle - Business-Critical Repair",
    difficulty: "intermediate",
    reward: 40,
    scenarioType: "business-critical",
    customerProfile: {
      name: "David Kim",
      creditScore: "Fair (620-660)",
      income: "$3,300/month (variable)",
      purchaseAmount: "$2,100",
      itemDescription: "Brake and suspension overhaul"
    },
    applicationDetails: {
      email: "david.kim.contractor@gmail.com",
      phone: "(555) 678-9013",
      bankingPreference: "Manual entry",
      challengePoints: ["Self-employed income", "Business vehicle dependency", "Safety-critical repair", "Variable income"]
    },
    expectedOutcome: "approved",
    processingFee: "$39 (debit card)",
    keyLearningPoints: [
      "Self-employed income verification",
      "Business vehicle importance",
      "Safety-critical repair urgency",
      "Variable income considerations"
    ]
  },
  {
    id: "auto-seasonal-urgency",
    title: "AC Repair - Seasonal Emergency",
    difficulty: "beginner",
    reward: 30,
    scenarioType: "seasonal-urgent",
    customerProfile: {
      name: "Lisa Rodriguez",
      creditScore: "Good (680-720)",
      income: "$3,600/month",
      purchaseAmount: "$1,650",
      itemDescription: "AC system and electrical repair"
    },
    applicationDetails: {
      email: "lisa.rodriguez.teacher@edu.com",
      phone: "(555) 345-6780",
      bankingPreference: "Plaid connection",
      challengePoints: ["Seasonal urgency", "Good credit choosing LTO", "Heat emergency", "Teacher schedule"]
    },
    expectedOutcome: "approved",
    processingFee: "$39 (credit card)",
    keyLearningPoints: [
      "Seasonal repair urgency",
      "Good credit customer LTO benefits",
      "Weather-related emergencies",
      "Professional schedule considerations"
    ]
  },
  {
    id: "auto-diagnostic-complex",
    title: "Complex Diagnostic - Multi-System Repair",
    difficulty: "advanced",
    reward: 45,
    scenarioType: "diagnostic-intensive",
    customerProfile: {
      name: "Robert Chen",
      creditScore: "Fair (630-670)",
      income: "$3,900/month",
      purchaseAmount: "$2,450",
      itemDescription: "Electrical, transmission, and cooling system repair"
    },
    applicationDetails: {
      email: "robert.chen.engineer@email.com",
      phone: "(555) 891-2345",
      bankingPreference: "Plaid connection",
      challengePoints: ["Complex multi-system repair", "Diagnostic uncertainty", "Technical customer", "Cost escalation"]
    },
    expectedOutcome: "approved",
    processingFee: "$39 (debit card)",
    keyLearningPoints: [
      "Complex diagnostic explanations",
      "Managing technical customers",
      "Multi-system repair coordination",
      "Cost escalation communication"
    ]
  }
]

// Common Issues and Troubleshooting for LTO Process
export const ltoTroubleshooting = [
  {
    issue: "Customer doesn't receive text message",
    causes: ["Wrong phone number entered", "Customer's phone blocking messages", "Network delays"],
    solutions: [
      "Verify phone number accuracy",
      "Check customer's spam/blocked messages",
      "Generate QR code as alternative",
      "Re-send application link"
    ]
  },
  {
    issue: "Customer can't access DocuSign",
    causes: ["Forgot last 4 SSN digits", "Technical issues", "Link expired"],
    solutions: [
      "Help customer recall SSN digits",
      "Try different browser/device",
      "Contact support for new link",
      "Ensure customer has strong internet connection"
    ]
  },
  {
    issue: "Plaid bank connection fails",
    causes: ["Bank not supported", "Customer uncomfortable", "Technical issues"],
    solutions: [
      "Switch to manual banking entry",
      "Explain Plaid security features",
      "Try different bank if customer has multiple",
      "Contact support if persistent issues"
    ]
  },
  {
    issue: "Customer confused about lease terms",
    causes: ["First-time lease customer", "Complex terms", "Language barriers"],
    solutions: [
      "Explain lease vs. purchase clearly",
      "Show early purchase savings",
      "Use simple language",
      "Provide written summary of terms"
    ]
  },
  {
    issue: "Processing fee payment issues",
    causes: ["Customer unprepared", "Payment method declined", "Forgot about fee"],
    solutions: [
      "Inform customer of fee early in process",
      "Accept multiple payment methods",
      "Never skip fee collection",
      "Explain fee purpose and requirements"
    ]
  }
]