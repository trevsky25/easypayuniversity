// RIC Conversational Practice Scenarios for Retail Installment Contract Applications

export interface ConversationStep {
  stepNumber: number
  speaker: 'merchant' | 'customer' | 'system' | 'narrator'
  dialogue: string
  context?: string
  tips?: string[]
  choices?: ConversationChoice[]
  nextStep?: number
  applicationAction?: string
}

export interface ConversationChoice {
  id: string
  text: string
  isCorrect: boolean
  response: string
  feedback: string
  nextStep: number
}

export interface RICConversationalScenario {
  id: string
  title: string
  description: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  reward: number
  customerProfile: {
    name: string
    creditScore: string
    income: string
    financedAmount: string
    itemDescription: string
    personality: string
    concerns: string[]
  }
  conversation: ConversationStep[]
}

export const ricConversationalScenarios: RICConversationalScenario[] = [
  {
    id: "ric-david-appliances",
    title: "David's Kitchen Appliances - Good Credit Customer",
    description: "Help David understand RIC financing for his kitchen renovation with good credit",
    difficulty: "beginner",
    reward: 45,
    customerProfile: {
      name: "David Martinez",
      creditScore: "720",
      income: "$4,200/month",
      financedAmount: "$3,500",
      itemDescription: "Kitchen appliance package",
      personality: "Analytical, wants to understand terms clearly, financially responsible",
      concerns: ["Understanding payment terms", "Finance charges", "Early payoff options"]
    },
    conversation: [
      {
        stepNumber: 1,
        speaker: "narrator",
        dialogue: "David is considering a complete kitchen appliance package. He's been researching financing options and wants to understand the terms clearly before making a decision.",
        context: "Customer has good credit and stable income, ideal for RIC financing."
      },
      {
        stepNumber: 2,
        speaker: "merchant",
        dialogue: "I can see you're interested in our complete kitchen package! This is perfect timing - we have financing options that can help you get everything installed this week.",
        tips: ["Start positively", "Create urgency appropriately", "Prepare to explain RIC benefits"]
      },
      {
        stepNumber: 3,
        speaker: "customer",
        dialogue: "Yes, but I want to make sure I understand the financing completely. I've heard about different types of financing and I want to know exactly what I'm getting into.",
        context: "Customer is being cautious and wants transparency about the financing terms"
      },
      {
        stepNumber: 4,
        speaker: "merchant",
        dialogue: "",
        choices: [
          {
            id: "a",
            text: "Great approach! Our Retail Installment Contract gives you immediate ownership with fixed monthly payments and clear terms. Let me walk you through exactly how it works.",
            isCorrect: true,
            response: "Perfect! I like that I own it immediately. What are the payment terms and what happens with finance charges?",
            feedback: "Excellent! You addressed his need for clarity and highlighted immediate ownership.",
            nextStep: 6
          },
          {
            id: "b",
            text: "Don't worry, it's simple financing. Most people don't need all the details - just sign here and you can take everything home today.",
            isCorrect: false,
            response: "Actually, I really do want to understand the details. This is a big purchase for me.",
            feedback: "Never dismiss a customer's desire to understand terms. Transparency builds trust.",
            nextStep: 5
          },
          {
            id: "c",
            text: "Well, there are a few different options. Let me show you everything we have available and you can pick what works best.",
            isCorrect: false,
            response: "That sounds confusing. Can you just tell me about the one that makes the most sense for my situation?",
            feedback: "Too many options can overwhelm. Focus on the right product for this customer.",
            nextStep: 5
          }
        ]
      },
      {
        stepNumber: 5,
        speaker: "merchant",
        dialogue: "You're absolutely right to want the details. Our Retail Installment Contract means you own the appliances immediately, with fixed monthly payments and full transparency on all terms.",
        tips: ["Recover with transparency", "Emphasize immediate ownership", "Focus on fixed payments"],
        nextStep: 6
      },
      {
        stepNumber: 6,
        speaker: "customer",
        dialogue: "Okay, that sounds good. What about finance charges? And can I pay it off early if I want to?",
        context: "Customer is getting more comfortable but wants specifics about costs and flexibility"
      },
      {
        stepNumber: 7,
        speaker: "merchant",
        dialogue: "",
        choices: [
          {
            id: "a",
            text: "Finance charges accrue from day one, but we have a 90-Day Finance Charge Cap - if you pay the full amount within 90 days, charges are capped at just $40. You can pay off early anytime with no penalties.",
            isCorrect: true,
            response: "That's fantastic! So if I get my bonus in 60 days, I could pay it all off and only pay $40 in finance charges?",
            feedback: "Perfect! You explained the FCCP correctly and mentioned no prepayment penalties.",
            nextStep: 9
          },
          {
            id: "b",
            text: "There are some finance charges, but if you pay it off quickly, it's almost like getting it for free for 90 days.",
            isCorrect: false,
            response: "Almost like free? What does that mean exactly? I need the real numbers.",
            feedback: "Avoid 'almost free' language. Use exact terms like the $40 cap.",
            nextStep: 8
          }
        ]
      },
      {
        stepNumber: 8,
        speaker: "merchant",
        dialogue: "Let me be specific: finance charges accrue daily, but our 90-Day Finance Charge Cap means if you pay the full balance within 90 days, finance charges are capped at exactly $40.",
        tips: ["Be precise with numbers", "Explain the FCCP clearly", "Avoid 'free' language"],
        nextStep: 9
      },
      {
        stepNumber: 9,
        speaker: "customer",
        dialogue: "Exactly! And with my good credit, I assume the approval process is straightforward?",
        context: "Customer is confident in their creditworthiness and ready to move forward"
      },
      {
        stepNumber: 10,
        speaker: "merchant",
        dialogue: "",
        choices: [
          {
            id: "a",
            text: "With your credit profile, the approval should be smooth. We'll need to verify some information, but customers like you typically get approved quickly. Shall we start the application?",
            isCorrect: true,
            response: "Yes, let's do it! I feel good about these terms and I'm ready to move forward.",
            feedback: "Great! You were confident but not overcommittal, and moved to close.",
            nextStep: 11
          },
          {
            id: "b",
            text: "Oh absolutely! You're guaranteed to be approved with that credit score. This will be automatic.",
            isCorrect: false,
            response: "Guaranteed? I appreciate the confidence, but I know there's always underwriting involved.",
            feedback: "Never guarantee approval. All applications go through underwriting.",
            nextStep: 11
          }
        ]
      },
      {
        stepNumber: 11,
        speaker: "narrator",
        dialogue: "Scenario complete! David is ready to proceed with the RIC application, feeling confident about the terms and the immediate ownership benefit.",
        context: "Successful conversion using proper RIC terminology and compliance"
      }
    ]
  },
  {
    id: "ric-sarah-auto-repair",
    title: "Sarah's Auto Repair - Emergency Financing",
    description: "Help Sarah finance urgent auto repairs using RIC when she needs her car for work",
    difficulty: "intermediate",
    reward: 50,
    customerProfile: {
      name: "Sarah Johnson",
      creditScore: "650",
      income: "$3,000/month",
      financedAmount: "$2,200",
      itemDescription: "Transmission and brake repair",
      personality: "Stressed about the situation, needs car for work, budget-conscious",
      concerns: ["Urgent need", "Monthly payment amount", "Total cost"]
    },
    conversation: [
      {
        stepNumber: 1,
        speaker: "narrator",
        dialogue: "Sarah's car broke down and she needs it fixed immediately for work. She's stressed about the cost but needs a solution today.",
        context: "Emergency situation, customer needs immediate solution but is cost-conscious"
      },
      {
        stepNumber: 2,
        speaker: "customer",
        dialogue: "I really need my car fixed today - I can't get to work without it. But $2,200 is more than I have right now. Do you have any payment options?",
        context: "Customer is expressing urgent need but financial constraint"
      },
      {
        stepNumber: 3,
        speaker: "merchant",
        dialogue: "",
        choices: [
          {
            id: "a",
            text: "I completely understand - car trouble is never convenient! Our Retail Installment Contract can help you get back on the road today with manageable monthly payments.",
            isCorrect: true,
            response: "That sounds promising. How quickly can this happen and what would my monthly payments be?",
            feedback: "Perfect! You showed empathy and immediately offered a solution.",
            nextStep: 5
          },
          {
            id: "b",
            text: "Well, you could put it on a credit card, or maybe ask family for help?",
            isCorrect: false,
            response: "I don't want to max out my credit cards, and I'd rather handle this myself if possible.",
            feedback: "Don't suggest alternatives when you have a financing solution available.",
            nextStep: 4
          },
          {
            id: "c",
            text: "$2,200 isn't that much. Maybe you could just pay cash?",
            isCorrect: false,
            response: "If I could pay cash, I wouldn't be asking about payment options.",
            feedback: "Never minimize a customer's financial situation. Everyone's budget is different.",
            nextStep: 4
          }
        ]
      },
      {
        stepNumber: 4,
        speaker: "merchant",
        dialogue: "Let me help you with our financing option. Our Retail Installment Contract lets you get the repairs done immediately and spread the payments over time.",
        tips: ["Recover by offering the solution", "Focus on immediate benefit", "Mention payment flexibility"],
        nextStep: 5
      },
      {
        stepNumber: 5,
        speaker: "customer",
        dialogue: "Okay, tell me more. What would my payments be and when do I get my car back?",
        context: "Customer is engaged and wants specific details about payments and timing"
      },
      {
        stepNumber: 6,
        speaker: "merchant",
        dialogue: "",
        choices: [
          {
            id: "a",
            text: "We can get your repairs started today once you're approved. For $2,200, you'd be looking at around $200-250 monthly depending on the term you choose. You own the repair work immediately.",
            isCorrect: true,
            response: "That monthly payment works for my budget. How long does the approval take?",
            feedback: "Excellent! You gave realistic payment estimates and emphasized immediate benefit.",
            nextStep: 8
          },
          {
            id: "b",
            text: "Don't worry about the payments - they'll be really low. Let's just get you approved first.",
            isCorrect: false,
            response: "I do need to know the payment amount - I have to budget for this. Can you give me real numbers?",
            feedback: "Always provide realistic payment estimates. Customers need to budget appropriately.",
            nextStep: 7
          }
        ]
      },
      {
        stepNumber: 7,
        speaker: "merchant",
        dialogue: "Of course! For $2,200, you're looking at monthly payments around $200-250 depending on the term. This lets you get your car fixed today while keeping payments manageable.",
        tips: ["Provide specific estimates", "Emphasize immediate solution", "Relate to their urgent need"],
        nextStep: 8
      },
      {
        stepNumber: 8,
        speaker: "customer",
        dialogue: "That payment range works for me. What about finance charges? I want to understand the total cost.",
        context: "Customer is comfortable with payments but wants full transparency on costs"
      },
      {
        stepNumber: 9,
        speaker: "merchant",
        dialogue: "",
        choices: [
          {
            id: "a",
            text: "Finance charges accrue from the start, but here's a great option: if you can pay the full amount within 90 days, finance charges are capped at just $40. Otherwise, you'll have standard finance charges based on your approved rate.",
            isCorrect: true,
            response: "Wow, $40 if I pay within 90 days? That's very reasonable. Let's move forward with the application.",
            feedback: "Perfect explanation of the FCCP with clear alternatives!",
            nextStep: 10
          },
          {
            id: "b",
            text: "There are finance charges, but most people don't worry about them when they need their car fixed urgently.",
            isCorrect: false,
            response: "I do worry about them - I need to know what this will really cost me total.",
            feedback: "Never dismiss cost concerns. Transparency builds trust and compliance.",
            nextStep: 10
          }
        ]
      },
      {
        stepNumber: 10,
        speaker: "narrator",
        dialogue: "Scenario complete! Sarah is ready to proceed with RIC financing, understanding both the immediate solution and the cost structure.",
        context: "Successful conversion addressing urgent need with transparent financing terms"
      }
    ]
  },
  {
    id: "ric-mike-electronics",
    title: "Mike's Home Office Setup - Self-Employed Customer",
    description: "Help Mike finance a complete home office setup with variable income considerations",
    difficulty: "advanced",
    reward: 55,
    customerProfile: {
      name: "Mike Chen",
      creditScore: "680",
      income: "$3,800/month (variable)",
      financedAmount: "$4,200",
      itemDescription: "Complete home office setup - desk, chair, monitor, computer",
      personality: "Entrepreneur, needs to understand ROI, asks detailed questions",
      concerns: ["Variable income", "Business expense", "Tax implications", "Total investment"]
    },
    conversation: [
      {
        stepNumber: 1,
        speaker: "narrator",
        dialogue: "Mike is a freelance consultant setting up a professional home office. He has variable income and treats purchases as business investments.",
        context: "Self-employed customer with unique considerations around business expenses"
      },
      {
        stepNumber: 2,
        speaker: "customer",
        dialogue: "I'm setting up a proper home office for my consulting business. This setup should pay for itself through better productivity, but I want to preserve my cash flow. What financing options do you have?",
        context: "Business-minded approach, sees equipment as investment, cash flow conscious"
      },
      {
        stepNumber: 3,
        speaker: "merchant",
        dialogue: "",
        choices: [
          {
            id: "a",
            text: "That's smart business thinking! Our Retail Installment Contract gives you immediate ownership of all the equipment while preserving your working capital. Perfect for business investments.",
            isCorrect: true,
            response: "Immediate ownership is important for tax purposes. Tell me about the payment structure and terms.",
            feedback: "Excellent! You spoke his business language and highlighted immediate ownership for tax benefits.",
            nextStep: 5
          },
          {
            id: "b",
            text: "We have financing available. Most people just want to know the monthly payment amount.",
            isCorrect: false,
            response: "Actually, as a business owner, I need to understand the full structure - payments, ownership, total cost, everything.",
            feedback: "Business customers need comprehensive information. Don't oversimplify.",
            nextStep: 4
          },
          {
            id: "c",
            text: "For business purchases, you might want to check with your accountant first about the best way to handle this.",
            isCorrect: false,
            response: "I understand the tax implications. I'm asking about your financing terms specifically.",
            feedback: "Don't deflect when the customer is asking about your product. Provide the information.",
            nextStep: 4
          }
        ]
      },
      {
        stepNumber: 4,
        speaker: "merchant",
        dialogue: "You're right - let me give you the complete picture. Our Retail Installment Contract gives you immediate ownership, so you can depreciate the equipment right away while making manageable monthly payments.",
        tips: ["Recover with comprehensive information", "Emphasize business benefits", "Mention immediate ownership for taxes"],
        nextStep: 5
      },
      {
        stepNumber: 5,
        speaker: "customer",
        dialogue: "Perfect. With variable income, I need predictable payments. What are we looking at for $4,200, and what's the total cost including finance charges?",
        context: "Customer wants predictability despite variable income, needs total cost transparency"
      },
      {
        stepNumber: 6,
        speaker: "merchant",
        dialogue: "",
        choices: [
          {
            id: "a",
            text: "For $4,200, you'd have fixed monthly payments around $350-400 depending on term. Finance charges accrue daily, but our 90-Day Finance Charge Cap means if you pay in full within 90 days, charges are capped at $40.",
            isCorrect: true,
            response: "That's very reasonable. With a good contract next month, I could potentially pay it off in 90 days and only pay $40 in charges. What's the approval process?",
            feedback: "Perfect! You provided specific numbers and highlighted the FCCP benefit for business cash flow.",
            nextStep: 8
          },
          {
            id: "b",
            text: "The payments will be very manageable, and since it's for business, you can probably write it off anyway.",
            isCorrect: false,
            response: "I need actual numbers for my budget planning. Can you give me specific payment amounts?",
            feedback: "Business customers especially need precise financial information for planning.",
            nextStep: 7
          }
        ]
      },
      {
        stepNumber: 7,
        speaker: "merchant",
        dialogue: "Absolutely. For $4,200, you're looking at fixed monthly payments of $350-400 depending on your preferred term. This gives you predictable business expenses while preserving cash flow.",
        tips: ["Provide specific numbers", "Emphasize predictability", "Relate to business needs"],
        nextStep: 8
      },
      {
        stepNumber: 8,
        speaker: "customer",
        dialogue: "The 90-day option is interesting. What if I want to pay it off partially early? And how does the approval work with variable income?",
        context: "Customer is strategic about early payment and concerned about income verification"
      },
      {
        stepNumber: 9,
        speaker: "merchant",
        dialogue: "",
        choices: [
          {
            id: "a",
            text: "You can make extra payments anytime with no penalties. For approval, we look at your overall financial picture, not just one income source. Bank statements and tax returns help show your business income stability.",
            isCorrect: true,
            response: "That flexibility is exactly what I need for my business. I have good records and bank statements. Let's start the application.",
            feedback: "Excellent! You addressed payment flexibility and self-employed income verification appropriately.",
            nextStep: 10
          },
          {
            id: "b",
            text: "Variable income can be tricky for approvals. You might want to wait until you have more consistent income.",
            isCorrect: false,
            response: "I've been successfully self-employed for three years. I just want financing, not income advice.",
            feedback: "Don't discourage qualified customers. Focus on how you can work with their situation.",
            nextStep: 10
          }
        ]
      },
      {
        stepNumber: 10,
        speaker: "narrator",
        dialogue: "Scenario complete! Mike understands the RIC benefits for his business, appreciates the flexibility, and is ready to apply.",
        context: "Successful business customer conversion with proper attention to self-employed considerations"
      }
    ]
  }
];