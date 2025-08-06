// Conversational Practice Scenarios for LTO Applications

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

export interface ConversationalScenario {
  id: string
  title: string
  description: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  reward: number
  customerProfile: {
    name: string
    creditScore: string
    income: string
    purchaseAmount: string
    itemDescription: string
    personality: string
    concerns: string[]
  }
  conversation: ConversationStep[]
}

export const conversationalScenarios: ConversationalScenario[] = [
  {
    id: "conv-maria-bedroom-set",
    title: "Maria's Bedroom Set - Credit Challenged Customer",
    description: "Help Maria understand LTO options for her bedroom furniture with poor credit",
    difficulty: "beginner",
    reward: 40,
    customerProfile: {
      name: "Maria Gonzalez",
      creditScore: "Below 580",
      income: "$2,200/month",
      purchaseAmount: "$1,899",
      itemDescription: "5-piece bedroom set",
      personality: "Cautious, worried about credit, needs reassurance",
      concerns: ["Bad credit history", "Worried about approval", "Needs to understand payment terms"]
    },
    conversation: [
      {
        stepNumber: 1,
        speaker: "narrator",
        dialogue: "Maria is looking at a beautiful 5-piece bedroom set. She seems interested but hesitant. She's mentioned she's had credit issues in the past.",
        context: "Customer has been browsing for 10 minutes, keeps looking at price tags with concern."
      },
      {
        stepNumber: 2,
        speaker: "merchant",
        dialogue: "I see you're interested in this bedroom set! It's one of our most popular collections. Are you looking to take this home today?",
        tips: ["Start with friendly, pressure-free approach", "Gauge customer interest level", "Don't mention financing immediately"]
      },
      {
        stepNumber: 3,
        speaker: "customer",
        dialogue: "It's beautiful, but I'm not sure... The price is pretty high and my credit isn't great. I probably can't qualify for financing.",
        context: "Customer is showing interest but immediately expressing credit concerns"
      },
      {
        stepNumber: 4,
        speaker: "merchant",
        dialogue: "",
        choices: [
          {
            id: "a",
            text: "Actually, we work with customers of all credit types. Let me tell you about our lease-to-own program.",
            isCorrect: true,
            response: "That's reassuring! I've been turned down before. How does lease-to-own work?",
            feedback: "Perfect! You immediately addressed her credit concerns and offered a solution.",
            nextStep: 6
          },
          {
            id: "b", 
            text: "Well, let's run your credit and see what happens. Sometimes people are surprised.",
            isCorrect: false,
            response: "I really don't want another credit check... I've had too many already.",
            feedback: "This reinforces her credit anxiety. LTO doesn't require traditional credit approval.",
            nextStep: 5
          },
          {
            id: "c",
            text: "Have you looked at our smaller sets? They might be more affordable.",
            isCorrect: false,
            response: "I guess... but I really need a complete set for my new apartment.",
            feedback: "You're pushing her away from what she wants. Focus on making her desired purchase possible.",
            nextStep: 5
          }
        ]
      },
      {
        stepNumber: 5,
        speaker: "merchant",
        dialogue: "Let me tell you about our lease-to-own program - it's specifically designed for people who've had credit challenges. No minimum credit score is required, though we may review credit as part of our approval process.",
        tips: ["Recover by focusing on LTO benefits", "Emphasize flexible approval requirements"],
        nextStep: 6
      },
      {
        stepNumber: 6,
        speaker: "customer",
        dialogue: "Really? No minimum credit score? How does that work exactly? What's the catch?",
        context: "Customer is intrigued but cautious about 'too good to be true' offers"
      },
      {
        stepNumber: 7,
        speaker: "merchant",
        dialogue: "",
        choices: [
          {
            id: "a",
            text: "It's a lease agreement - you make small payments and can own it early or return it. No catch, just a different way to get what you need.",
            isCorrect: true,
            response: "That sounds interesting. What would my payments be?",
            feedback: "Great explanation! Clear, honest, and addresses her concerns about catches.",
            nextStep: 9
          },
          {
            id: "b",
            text: "Well, it costs more in the long run, but you get the furniture now without credit approval.",
            isCorrect: false,
            response: "More expensive? How much more? Maybe this isn't for me...",
            feedback: "Leading with cost concerns creates objections. Focus on benefits and payment flexibility first.",
            nextStep: 8
          }
        ]
      },
      {
        stepNumber: 8,
        speaker: "merchant",
        dialogue: "Let me clarify - it's actually very affordable with small weekly payments. Plus, you have the option to purchase early and save money!",
        tips: ["Recover by emphasizing affordability", "Mention early purchase savings"],
        nextStep: 9
      },
      {
        stepNumber: 9,
        speaker: "customer",
        dialogue: "Okay, I'm listening. What would my weekly payment be for this set?",
        context: "Customer is now engaged and asking for specific information"
      },
      {
        stepNumber: 10,
        speaker: "merchant",
        dialogue: "Let me start an application to get you exact pricing. I just need your email or phone number to send you the secure application link.",
        applicationAction: "Log into Business Center and start new LTO application",
        tips: ["Transition to application process", "Emphasize security", "Ask for contact info"]
      },
      {
        stepNumber: 11,
        speaker: "customer",
        dialogue: "My email is maria.gonzalez@email.com. Will this affect my credit score?",
        context: "Customer is providing info but still worried about credit impact"
      },
      {
        stepNumber: 12,
        speaker: "merchant",
        dialogue: "",
        choices: [
          {
            id: "a",
            text: "No credit score impact! This isn't a traditional loan. You'll get a text message in just a moment to complete the application.",
            isCorrect: true,
            response: "Oh good! That's a relief. I'll watch for the text.",
            feedback: "Perfect! You reassured her about credit impact and set expectations for next steps.",
            nextStep: 14
          },
          {
            id: "b",
            text: "There might be a soft credit check, but it won't hurt your score much.",
            isCorrect: false,
            response: "I really don't want any credit checks... maybe I should think about it more.",
            feedback: "Even mentioning credit checks can scare credit-challenged customers. LTO typically doesn't require them.",
            nextStep: 13
          }
        ]
      },
      {
        stepNumber: 13,
        speaker: "merchant",
        dialogue: "Actually, let me correct that - with our lease-to-own program, there's no traditional credit check at all. You'll just verify your income and banking information.",
        tips: ["Correct misinformation immediately", "Be confident about LTO benefits"],
        nextStep: 14
      },
      {
        stepNumber: 14,
        speaker: "narrator",
        dialogue: "Customer receives text message with application link",
        applicationAction: "Customer clicks link and begins personal details section"
      },
      {
        stepNumber: 15,
        speaker: "customer",
        dialogue: "I got the text! It's asking for my personal information. Is this secure?",
        context: "Customer received application link and is starting to fill it out"
      },
      {
        stepNumber: 16,
        speaker: "merchant",
        dialogue: "Absolutely! That's EasyPay's secure application. Your information is protected with bank-level security. Take your time filling it out.",
        tips: ["Reassure about security", "Let customer work at their own pace", "Stay available for questions"]
      },
      {
        stepNumber: 17,
        speaker: "customer",
        dialogue: "It's asking me to verify my email... okay, I got the verification email. Now it wants my address and income information.",
        applicationAction: "Customer completes email verification and moves to address/income section"
      },
      {
        stepNumber: 18,
        speaker: "merchant",
        dialogue: "Perfect! For the income section, include any reliable monthly income - your job, benefits, anything regular you receive.",
        tips: ["Help customer understand what income to include", "Stay supportive"]
      },
      {
        stepNumber: 19,
        speaker: "customer",
        dialogue: "It's asking about my bank account. Can I just enter the information manually? I don't want to connect my bank account to anything.",
        context: "Customer is hesitant about Plaid bank connection"
      },
      {
        stepNumber: 20,
        speaker: "merchant",
        dialogue: "",
        choices: [
          {
            id: "a",
            text: "Of course! You can enter your banking information manually. That's totally fine and many customers prefer that option.",
            isCorrect: true,
            response: "Thank you! I feel more comfortable doing it that way.",
            feedback: "Great! You respected her preference and kept the process moving smoothly.",
            nextStep: 22
          },
          {
            id: "b",
            text: "The automatic connection is much faster and more secure. You should really use that option.",
            isCorrect: false,
            response: "I really don't feel comfortable with that. Maybe this isn't for me...",
            feedback: "Don't pressure customers on banking preferences. Respect their comfort level.",
            nextStep: 21
          }
        ]
      },
      {
        stepNumber: 21,
        speaker: "merchant",
        dialogue: "No problem at all! You can absolutely enter your information manually. Whatever makes you most comfortable.",
        tips: ["Always respect customer banking preferences", "Keep the focus on their comfort"],
        nextStep: 22
      },
      {
        stepNumber: 22,
        speaker: "narrator",
        dialogue: "Customer completes application and receives approval decision",
        applicationAction: "Application processes and returns approval for $1,899 lease amount"
      },
      {
        stepNumber: 23,
        speaker: "customer",
        dialogue: "Oh wow! It says I'm approved for the full amount! What happens now?",
        context: "Customer is excited and surprised by approval"
      },
      {
        stepNumber: 24,
        speaker: "merchant",
        dialogue: "Congratulations! Now I'll enter the specific details about your bedroom set in our system, and then you'll receive a text message to complete the lease agreement.",
        applicationAction: "Enter purchase details in Business Center",
        tips: ["Celebrate the approval with customer", "Explain next steps clearly"]
      },
      {
        stepNumber: 25,
        speaker: "customer",
        dialogue: "This is exciting! How much will my weekly payments be?",
        context: "Customer is now confident and asking about specific terms"
      },
      {
        stepNumber: 26,
        speaker: "merchant",
        dialogue: "Your lease agreement will show all the payment details, but you'll have affordable weekly payments and the option to purchase early to save money. You'll see everything before you sign.",
        tips: ["Don't quote specific payments without lease agreement", "Emphasize early purchase savings", "Build confidence in process"]
      },
      {
        stepNumber: 27,
        speaker: "narrator",
        dialogue: "Customer receives DocuSign text message and completes lease signing process",
        applicationAction: "Customer signs lease agreement via DocuSign"
      },
      {
        stepNumber: 28,
        speaker: "customer",
        dialogue: "I signed the lease! What's this about a $39 processing fee?",
        context: "Customer has completed signing and is asking about processing fee"
      },
      {
        stepNumber: 29,
        speaker: "merchant",
        dialogue: "That's just a one-time processing fee to complete your lease - you can pay that with cash, card, or however is convenient for you. Then we can schedule your delivery!",
        applicationAction: "Collect $39 processing fee",
        tips: ["Present fee as routine final step", "Offer payment options", "Connect to delivery/completion"]
      },
      {
        stepNumber: 30,
        speaker: "customer",
        dialogue: "Perfect! I'll pay with my debit card. When can you deliver my bedroom set?",
        context: "Customer is ready to complete transaction and excited about delivery"
      },
      {
        stepNumber: 31,
        speaker: "merchant",
        dialogue: "Excellent! Let me process your $39 fee and mark your order for delivery. Congratulations on your new bedroom set, Maria!",
        applicationAction: "Process fee payment and mark item as delivered when customer takes possession",
        tips: ["Complete transaction professionally", "Congratulate customer on successful purchase", "Ensure proper delivery confirmation"]
      }
    ]
  },
  {
    id: "conv-carlos-transmission",
    title: "Carlos's Emergency Transmission - Stressed Customer",
    description: "Handle an urgent automotive repair for a customer who needs his vehicle for work",
    difficulty: "intermediate", 
    reward: 45,
    customerProfile: {
      name: "Carlos Martinez",
      creditScore: "Poor (520-580)",
      income: "$2,900/month",
      purchaseAmount: "$3,200",
      itemDescription: "Complete transmission replacement",
      personality: "Stressed, urgent need, worried about getting to work",
      concerns: ["Needs car for work", "Expensive repair", "Poor credit", "Time pressure"]
    },
    conversation: [
      {
        stepNumber: 1,
        speaker: "narrator",
        dialogue: "Carlos has just been told his transmission needs complete replacement. He looks stressed and keeps checking his phone for work messages.",
        context: "Customer is dealing with unexpected major car repair, worried about work"
      },
      {
        stepNumber: 2,
        speaker: "customer",
        dialogue: "Man, this is the worst timing. I need my truck for work - I drive deliveries. How long will this take and how am I going to pay for $3,200?",
        context: "Customer is clearly stressed about both timing and cost"
      },
      {
        stepNumber: 3,
        speaker: "merchant",
        dialogue: "",
        choices: [
          {
            id: "a",
            text: "I understand this is stressful. Let's get you back on the road quickly. We have financing options that can help with the cost.",
            isCorrect: true,
            response: "Really? That would be huge. My credit isn't great though...",
            feedback: "Perfect! You acknowledged his stress and immediately offered a solution.",
            nextStep: 5
          },
          {
            id: "b",
            text: "Yeah, transmissions are expensive. Do you have the money or need to finance it?",
            isCorrect: false,
            response: "If I had $3,200 lying around, I wouldn't be stressed! Of course I need financing.",
            feedback: "This came across as insensitive. Show empathy for his difficult situation.",
            nextStep: 4
          }
        ]
      },
      {
        stepNumber: 4,
        speaker: "merchant",
        dialogue: "I'm sorry - I know this is tough. Let me help you find a financing solution so we can get you back to work quickly.",
        tips: ["Recover with empathy", "Focus on solutions"],
        nextStep: 5
      },
      {
        stepNumber: 5,
        speaker: "customer",
        dialogue: "My credit got messed up last year when I was out of work for a few months. I probably won't qualify for anything.",
        context: "Customer is explaining credit challenges and expecting rejection"
      },
      {
        stepNumber: 6,
        speaker: "merchant",
        dialogue: "Actually, we work with people in exactly your situation. Our lease-to-own program doesn't depend on perfect credit - it's designed for working people who need reliable transportation.",
        tips: ["Address credit concerns directly", "Emphasize program is designed for his situation", "Connect to his work needs"]
      },
      {
        stepNumber: 7,
        speaker: "customer",
        dialogue: "Lease-to-own? How's that work for car repairs? And how fast can we do this? I've got deliveries starting tomorrow morning.",
        context: "Customer is interested but needs to understand process and timing"
      },
      {
        stepNumber: 8,
        speaker: "merchant",
        dialogue: "",
        choices: [
          {
            id: "a",
            text: "We can get approval in minutes and start the work immediately. You'll lease the repair work with affordable payments, just like leasing equipment for your business.",
            isCorrect: true,
            response: "Minutes? That's what I need to hear! What do I need to do?",
            feedback: "Excellent! You addressed his timing concerns and explained LTO in terms he understands.",
            nextStep: 10
          },
          {
            id: "b",
            text: "Well, first we need to run through the application process, then approval, then paperwork... it might take a while.",
            isCorrect: false,
            response: "A while? I can't afford to wait around. I need this done fast!",
            feedback: "You made it sound slow and bureaucratic. Emphasize the speed and efficiency.",
            nextStep: 9
          }
        ]
      },
      {
        stepNumber: 9,
        speaker: "merchant",
        dialogue: "Actually, it's very fast! We can get you approved in minutes and start your repair right away. Let me show you how quick this is.",
        tips: ["Correct timing misconception", "Emphasize speed and efficiency"],
        nextStep: 10
      },
      {
        stepNumber: 10,
        speaker: "customer",
        dialogue: "Okay, let's do it. What information do you need?",
        context: "Customer is ready to proceed, focused on speed"
      },
      {
        stepNumber: 11,
        speaker: "merchant",
        dialogue: "Just your email or phone number to start. I'll send you a secure link and you can complete everything on your phone while we prep your truck for repair.",
        applicationAction: "Start LTO application with customer contact info",
        tips: ["Keep it simple", "Emphasize he can multitask", "Start repair prep"]
      },
      {
        stepNumber: 12,
        speaker: "customer",
        dialogue: "Perfect. It's carlos.martinez87@email.com. Can you really start working on it while I do the paperwork?",
        context: "Customer appreciating the efficiency"
      },
      {
        stepNumber: 13,
        speaker: "merchant",
        dialogue: "Absolutely! I'm sending the application now. While you fill that out, we'll get your truck in the bay and start the diagnosis. You'll have your approval before we even finish the tear-down.",
        applicationAction: "Send application link, begin physical repair preparation",
        tips: ["Show parallel processing", "Set realistic expectations", "Demonstrate efficiency"]
      },
      {
        stepNumber: 14,
        speaker: "narrator",
        dialogue: "Customer receives application link and begins filling out personal information while truck is being prepped",
        applicationAction: "Customer working on application, repair team starting work"
      },
      {
        stepNumber: 15,
        speaker: "customer",
        dialogue: "Got the link! This is asking for income information. I make about $2,900 a month driving, but some of it's cash tips. Do I include those?",
        context: "Customer needs guidance on income reporting"
      },
      {
        stepNumber: 16,
        speaker: "merchant",
        dialogue: "",
        choices: [
          {
            id: "a",
            text: "Include all your regular income - wages, tips, anything you can count on monthly. They want to see your full earning picture.",
            isCorrect: true,
            response: "Good, because I make decent money, just had that rough patch last year.",
            feedback: "Perfect! You helped him present his income accurately and positively.",
            nextStep: 18
          },
          {
            id: "b",
            text: "Better to be conservative and just put your base wages. Tips are hard to verify.",
            isCorrect: false,
            response: "But that makes me look like I make way less than I actually do...",
            feedback: "This understates his income and could hurt his approval. Include all regular income.",
            nextStep: 17
          }
        ]
      },
      {
        stepNumber: 17,
        speaker: "merchant",
        dialogue: "You're right - include your tips if they're regular income. You want to show your true earning power.",
        tips: ["Correct the conservative advice", "Encourage accurate income reporting"],
        nextStep: 18
      },
      {
        stepNumber: 18,
        speaker: "customer",
        dialogue: "Okay, I put my full income. Now it's asking about banking. I don't really want to connect my bank account to anything...",
        context: "Customer hesitant about Plaid connection"
      },
      {
        stepNumber: 19,
        speaker: "merchant",
        dialogue: "No problem - you can enter your banking info manually. Whatever you're comfortable with. The main thing is getting you approved so we can fix your truck.",
        tips: ["Respect banking preferences", "Keep focus on end goal", "Don't pressure on connection method"]
      },
      {
        stepNumber: 20,
        speaker: "narrator",
        dialogue: "Customer completes application. System processes and returns approval.",
        applicationAction: "Application approved for $3,200 lease amount"
      },
      {
        stepNumber: 21,
        speaker: "customer",
        dialogue: "It says approved! $3,200! How is that possible with my credit?",
        context: "Customer surprised and relieved by approval"
      },
      {
        stepNumber: 22,
        speaker: "merchant",
        dialogue: "That's the beauty of lease-to-own - it's based on your ability to pay, not your credit history. You're a working man with steady income. That's what matters.",
        tips: ["Explain LTO philosophy", "Validate his worthiness", "Boost confidence"]
      },
      {
        stepNumber: 23,
        speaker: "customer",
        dialogue: "This is such a relief! What are my payment options? I get paid weekly.",
        context: "Customer is relieved and asking about payment structure"
      },
      {
        stepNumber: 24,
        speaker: "merchant",
        dialogue: "Perfect - weekly payments work great for drivers. You'll see all the payment details in your lease agreement. Plus, you can pay it off early anytime to save money.",
        tips: ["Match payment frequency to his income", "Mention early payoff benefits", "Build towards lease signing"]
      },
      {
        stepNumber: 25,
        speaker: "narrator",
        dialogue: "Customer receives DocuSign link and reviews lease terms",
        applicationAction: "Customer reviewing and signing lease agreement"
      },
      {
        stepNumber: 26,
        speaker: "customer",
        dialogue: "The payments look manageable. I'm signing this now... Done! What's next?",
        context: "Customer has signed and is ready to complete"
      },
      {
        stepNumber: 27,
        speaker: "merchant",
        dialogue: "Excellent! There's just a $39 processing fee to finalize everything, then we can get your transmission replacement started. How would you like to pay that?",
        applicationAction: "Collect $39 processing fee",
        tips: ["Present fee as final step", "Connect to immediate repair start", "Offer payment options"]
      },
      {
        stepNumber: 28,
        speaker: "customer",
        dialogue: "I'll pay cash. $39 is nothing compared to what I was worried about! How long until my truck is ready?",
        context: "Customer is relieved and asking about repair timeline"
      },
      {
        stepNumber: 29,
        speaker: "merchant",
        dialogue: "We'll have you back on the road by tomorrow afternoon. With the financing handled, we can focus on getting you a quality repair with a 2-year warranty.",
        applicationAction: "Process fee, confirm repair timeline, begin transmission work",
        tips: ["Give realistic timeline", "Emphasize quality and warranty", "Connect financing to better service"]
      },
      {
        stepNumber: 30,
        speaker: "customer",
        dialogue: "Perfect! I can't thank you enough. You turned what felt like a disaster into something manageable.",
        context: "Customer expressing gratitude and relief"
      },
      {
        stepNumber: 31,
        speaker: "merchant",
        dialogue: "That's exactly why we offer this program, Carlos. Working people shouldn't be stuck because of unexpected repairs. We'll take great care of your truck!",
        tips: ["Acknowledge his gratitude", "Reinforce program purpose", "Promise quality work"]
      }
    ]
  },
  {
    id: "conv-jessica-tires",
    title: "Jessica's Premium Tires - Elective Upgrade Customer",
    description: "Guide a customer through financing a premium tire and wheel upgrade",
    difficulty: "beginner",
    reward: 35,
    customerProfile: {
      name: "Jessica Williams",
      creditScore: "Fair (640-680)",
      income: "$3,800/month", 
      purchaseAmount: "$1,899",
      itemDescription: "4 premium tires and custom wheels",
      personality: "Practical, safety-conscious, wants quality but budget-aware",
      concerns: ["Want premium quality", "Budget constraints", "Safety for family"]
    },
    conversation: [
      {
        stepNumber: 1,
        speaker: "narrator",
        dialogue: "Jessica is a nurse looking at premium tire and wheel packages. She's comparing different options and seems focused on safety features.",
        context: "Customer is researching quality options, not an emergency repair"
      },
      {
        stepNumber: 2,
        speaker: "customer",
        dialogue: "I really like this tire and wheel package, but $1,899 is more than I was planning to spend today. My current tires are okay, but I drive my kids around a lot and want the best safety.",
        context: "Customer wants quality for family safety but concerned about budget"
      },
      {
        stepNumber: 3,
        speaker: "merchant",
        dialogue: "",
        choices: [
          {
            id: "a",
            text: "Safety for your family is worth the investment. We have financing options that can make these premium tires affordable for you today.",
            isCorrect: true,
            response: "That's exactly what I'm thinking! What kind of financing do you offer?",
            feedback: "Great! You validated her safety priority and offered a solution.",
            nextStep: 5
          },
          {
            id: "b",
            text: "Maybe look at our mid-range tires? They're a good compromise between price and quality.",
            isCorrect: false,
            response: "I suppose... but I really want the premium safety features for my kids.",
            feedback: "You're selling her down instead of helping her get what she wants. Focus on making her desired purchase possible.",
            nextStep: 4
          }
        ]
      },
      {
        stepNumber: 4,
        speaker: "merchant",
        dialogue: "You know what, you're right about wanting the best for your family. Let me show you how we can make these premium tires work for your budget.",
        tips: ["Validate her choice", "Focus on solutions, not compromises"],
        nextStep: 5
      },
      {
        stepNumber: 5,
        speaker: "customer",
        dialogue: "I'd be interested in hearing about financing. I have decent credit, but I don't want to tie up my credit cards right now.",
        context: "Customer has good credit but prefers alternative to credit cards"
      },
      {
        stepNumber: 6,
        speaker: "merchant",
        dialogue: "Perfect! Our lease-to-own program is ideal for someone like you. You get the premium tires today with small weekly payments, and you can pay it off early to save money.",
        tips: ["Position LTO as smart choice for good credit customers", "Emphasize early payoff savings", "Focus on convenience"]
      },
      {
        stepNumber: 7,
        speaker: "customer",
        dialogue: "Lease-to-own for tires? How does that work exactly? And why would I choose that over just using credit?",
        context: "Customer needs education on LTO benefits for non-emergency purchases"
      },
      {
        stepNumber: 8,
        speaker: "merchant",
        dialogue: "",
        choices: [
          {
            id: "a",
            text: "It gives you more flexibility - small weekly payments that fit your budget, plus the option to pay off early. No impact on your credit utilization or credit cards.",
            isCorrect: true,
            response: "I like that! My credit cards are for emergencies. What would my weekly payment be?",
            feedback: "Excellent! You explained the benefits clearly and addressed her credit card concern.",
            nextStep: 10
          },
          {
            id: "b",
            text: "Honestly, it's probably more expensive than credit cards, but some people prefer the payment structure.",
            isCorrect: false,
            response: "More expensive? Then why would I do that? Maybe I should just wait and save up.",
            feedback: "You talked yourself out of the sale! Focus on benefits like cash flow and early payoff options.",
            nextStep: 9
          }
        ]
      },
      {
        stepNumber: 9,
        speaker: "merchant",
        dialogue: "Actually, let me clarify - with the early payoff option, it can be very competitive. Plus it keeps your credit cards free for true emergencies while getting you the safety you want now.",
        tips: ["Emphasize early payoff savings", "Position as smart financial choice"],
        nextStep: 10
      },
      {
        stepNumber: 10,
        speaker: "customer",
        dialogue: "That makes sense. I'd rather keep my cards available. How do we get started?",
        context: "Customer is convinced and ready to proceed"
      },
      {
        stepNumber: 11,
        speaker: "merchant",
        dialogue: "Great choice! I just need your email or phone number to send you the application. It's really quick - you can probably complete it before we even finish mounting your tires.",
        applicationAction: "Start LTO application process",
        tips: ["Make it sound efficient", "Connect application time to service time"]
      },
      {
        stepNumber: 12,
        speaker: "customer",
        dialogue: "My email is jess.williams2024@gmail.com. How long does approval usually take?",
        context: "Customer providing contact info and asking about timing"
      },
      {
        stepNumber: 13,
        speaker: "merchant",
        dialogue: "With your credit profile, approval is typically very fast - often just a couple minutes. I'm sending the link now.",
        applicationAction: "Send application link",
        tips: ["Be confident about her approval chances", "Set positive expectations"]
      },
      {
        stepNumber: 14,
        speaker: "narrator",
        dialogue: "Customer receives application link and begins filling out information",
        applicationAction: "Customer starting application process"
      },
      {
        stepNumber: 15,
        speaker: "customer",
        dialogue: "Got it! This is pretty straightforward. It's asking if I want to connect my bank account or enter information manually. Which is better?",
        context: "Customer asking for guidance on Plaid vs manual entry"
      },
      {
        stepNumber: 16,
        speaker: "merchant",
        dialogue: "",
        choices: [
          {
            id: "a",
            text: "The bank connection is faster and more secure, but either way works fine. Whatever you're comfortable with.",
            isCorrect: true,
            response: "I'll try the bank connection. I use online banking anyway.",
            feedback: "Perfect! You explained the benefits while respecting her choice.",
            nextStep: 18
          },
          {
            id: "b",
            text: "Definitely connect your bank. It's much faster and they prefer that method.",
            isCorrect: false,
            response: "I'm not sure I'm comfortable with that... is manual entry a problem?",
            feedback: "Don't pressure customers on banking preferences. Respect their comfort level.",
            nextStep: 17
          }
        ]
      },
      {
        stepNumber: 17,
        speaker: "merchant",
        dialogue: "Not at all! Manual entry works perfectly fine. Many customers prefer that option. Use whatever makes you comfortable.",
        tips: ["Reassure about manual entry", "Respect customer preferences"],
        nextStep: 18
      },
      {
        stepNumber: 18,
        speaker: "customer",
        dialogue: "The bank connection worked great! Now it's processing... Oh, it says approved! That was fast!",
        context: "Customer received quick approval and is pleased"
      },
      {
        stepNumber: 19,
        speaker: "merchant",
        dialogue: "Excellent! I knew with your profile that would go smoothly. Now I'll enter your specific tire and wheel package details, and you'll get the lease agreement to review.",
        applicationAction: "Enter purchase details in Business Center",
        tips: ["Acknowledge her good credit helped", "Explain next steps clearly"]
      },
      {
        stepNumber: 20,
        speaker: "customer",
        dialogue: "Perfect! I'm excited to see the payment breakdown. When can you install these?",
        context: "Customer is excited and asking about installation timing"
      },
      {
        stepNumber: 21,
        speaker: "merchant",
        dialogue: "We can start installation right after you complete the lease agreement. You'll have your new tires and wheels today, and your family will be safer on the road tonight!",
        tips: ["Connect to immediate installation", "Reinforce safety benefit", "Create urgency"]
      },
      {
        stepNumber: 22,
        speaker: "narrator",
        dialogue: "Customer receives DocuSign link and reviews lease agreement",
        applicationAction: "Customer reviewing lease terms and payment schedule"
      },
      {
        stepNumber: 23,
        speaker: "customer",
        dialogue: "The weekly payments look very manageable! And I can see the early payoff savings. I'm signing this now.",
        context: "Customer reviewing terms and pleased with options"
      },
      {
        stepNumber: 24,
        speaker: "merchant",
        dialogue: "That's great! You'll probably want to take advantage of that early payoff option - it's a really smart way to save money while getting what you need now.",
        tips: ["Encourage early payoff", "Position customer as making smart financial choice"]
      },
      {
        stepNumber: 25,
        speaker: "customer",
        dialogue: "Signed! What's next? Can we start installing?",
        context: "Customer has signed and is ready for installation"
      },
      {
        stepNumber: 26,
        speaker: "merchant",
        dialogue: "Almost there! Just a $39 processing fee to complete everything, then we'll get your car in the bay and start mounting your new tires and wheels.",
        applicationAction: "Collect $39 processing fee",
        tips: ["Present fee as final step before installation", "Build excitement for installation"]
      },
      {
        stepNumber: 27,
        speaker: "customer",
        dialogue: "Perfect! I'll use my debit card for the $39. How long does the installation take?",
        context: "Customer ready to pay fee and asking about installation time"
      },
      {
        stepNumber: 28,
        speaker: "merchant",
        dialogue: "About an hour for the full installation and balancing. You can wait here or run errands and come back. Either way, you'll drive home on premium tires today!",
        applicationAction: "Process fee payment, begin tire installation",
        tips: ["Give realistic time estimate", "Offer waiting options", "End with positive outcome"]
      },
      {
        stepNumber: 29,
        speaker: "customer",
        dialogue: "I'll wait here and read. This worked out perfectly - I get the safety I want without straining my budget. Thank you!",
        context: "Customer expressing satisfaction with the solution"
      },
      {
        stepNumber: 30,
        speaker: "merchant",
        dialogue: "You made a smart choice, Jessica! Your family's safety is worth it, and you found a way to make it work within your budget. Enjoy your new tires!",
        tips: ["Validate her decision", "Reinforce safety value", "End on positive note"]
      }
    ]
  },
  {
    id: "conv-robert-appliances",
    title: "Robert's Emergency Appliance Replacement - Urgent Customer",
    description: "Handle a stressed customer whose refrigerator broke and needs immediate replacement",
    difficulty: "intermediate",
    reward: 45,
    customerProfile: {
      name: "Robert Johnson",
      creditScore: "Fair (620-680)",
      income: "$4,200/month",
      purchaseAmount: "$1,599",
      itemDescription: "Energy-efficient refrigerator with warranty",
      personality: "Stressed about food spoilage, time-pressured, practical",
      concerns: ["Food going bad", "Work schedule constraints", "Budget for unexpected expense"]
    },
    conversation: [
      {
        stepNumber: 1,
        speaker: "narrator",
        dialogue: "Robert rushes into the store looking frazzled. His refrigerator died overnight and he has a house full of groceries that need immediate refrigeration.",
        context: "Customer is clearly stressed and in a hurry"
      },
      {
        stepNumber: 2,
        speaker: "customer",
        dialogue: "My fridge completely died last night! I've got $200 worth of groceries sitting in coolers with ice, but that's not going to last much longer. I need to replace this today.",
        context: "Customer explaining urgent situation"
      },
      {
        stepNumber: 3,
        speaker: "merchant",
        dialogue: "",
        choices: [
          {
            id: "a",
            text: "I completely understand the urgency! Let's get you into a new refrigerator today. Do you have a model in mind, or should I show you our most reliable options?",
            isCorrect: true,
            response: "Yes, please show me something reliable! I don't have time to shop around - I just need something that works and won't break the bank.",
            feedback: "Perfect! You acknowledged his urgency and offered immediate solutions.",
            nextStep: 5
          },
          {
            id: "b",
            text: "That's frustrating! Have you tried calling a repair service? Sometimes it's cheaper to fix than replace.",
            isCorrect: false,
            response: "I already tried that this morning! The repair guy said it's completely shot - the compressor is dead and it would cost more to fix than replace.",
            feedback: "While helpful in some cases, you should listen to the customer's situation first. He clearly needs a replacement.",
            nextStep: 4
          }
        ]
      },
      {
        stepNumber: 4,
        speaker: "merchant",
        dialogue: "You're absolutely right - let's focus on getting you a reliable replacement today. What size refrigerator do you need?",
        tips: ["Listen to customer needs", "Focus on immediate solutions"],
        nextStep: 5
      },
      {
        stepNumber: 5,
        speaker: "customer",
        dialogue: "Same size as what I had - standard full-size. Nothing fancy, just reliable. But here's the thing... I wasn't planning on this expense. Is financing available?",
        context: "Customer ready to buy but concerned about immediate payment"
      },
      {
        stepNumber: 6,
        speaker: "merchant",
        dialogue: "Absolutely! We have financing that can get you approved and take your new refrigerator home today. Let me show you this energy-efficient model that's very reliable.",
        tips: ["Reassure about financing availability", "Focus on getting him the solution today"]
      },
      {
        stepNumber: 7,
        speaker: "customer",
        dialogue: "That looks good. How does the financing work? I have decent credit but I don't want a bunch of paperwork that takes forever.",
        context: "Customer interested but wants quick process"
      },
      {
        stepNumber: 8,
        speaker: "merchant",
        dialogue: "",
        choices: [
          {
            id: "a",
            text: "Our lease-to-own program is perfect for your situation - quick approval, usually just a few minutes, and you can take it home today.",
            isCorrect: true,
            response: "A few minutes? That's exactly what I need! How do we get started?",
            feedback: "Excellent! You emphasized speed and immediate solution.",
            nextStep: 10
          },
          {
            id: "b",
            text: "We have several financing options. Let me explain all the different programs we offer so you can choose the best one.",
            isCorrect: false,
            response: "Look, I don't have time for a lot of options. What's the fastest way to get approved and get this refrigerator home?",
            feedback: "Too many choices overwhelm an urgent customer. Focus on the best solution for their needs.",
            nextStep: 9
          }
        ]
      },
      {
        stepNumber: 9,
        speaker: "merchant",
        dialogue: "You're right - let's go with the fastest option. Our lease-to-own program can get you approved in minutes.",
        tips: ["Match customer's sense of urgency", "Don't oversell when customer is ready"],
        nextStep: 10
      },
      {
        stepNumber: 10,
        speaker: "customer",
        dialogue: "Perfect! What do you need from me?",
        context: "Customer ready to proceed"
      },
      {
        stepNumber: 11,
        speaker: "merchant",
        dialogue: "Just your email or phone number to start. I'll send you the application and you can fill it out on your phone while I prep your refrigerator for delivery.",
        applicationAction: "Start LTO application",
        tips: ["Emphasize multitasking efficiency", "Show you're already taking action"]
      },
      {
        stepNumber: 12,
        speaker: "customer",
        dialogue: "My email is robert.johnson.dad@email.com. How long until I can get this home? I'm supposed to be back at work in two hours.",
        context: "Providing info but still time-pressured"
      },
      {
        stepNumber: 13,
        speaker: "merchant",
        dialogue: "We'll have you out of here well before then! Sending the application now. While you fill that out, I'll start getting your refrigerator ready.",
        applicationAction: "Send application link and begin delivery prep"
      },
      {
        stepNumber: 14,
        speaker: "narrator",
        dialogue: "Customer completes application quickly and receives approval",
        applicationAction: "Application approved for $1,599"
      },
      {
        stepNumber: 15,
        speaker: "customer",
        dialogue: "Got approved! This is great - when can I get it delivered?",
        context: "Customer relieved and excited"
      },
      {
        stepNumber: 16,
        speaker: "merchant",
        dialogue: "We can deliver it this afternoon! Just need to complete the lease agreement and collect the $39 processing fee, then we'll schedule your delivery.",
        applicationAction: "Move to contract signing"
      },
      {
        stepNumber: 17,
        speaker: "customer",
        dialogue: "Perfect! I'll pay the fee with my debit card. You've really saved the day here!",
        context: "Customer grateful and satisfied"
      },
      {
        stepNumber: 18,
        speaker: "merchant",
        dialogue: "That's exactly why we're here! Emergencies happen, and we want to make sure you get back to normal as quickly as possible.",
        applicationAction: "Complete transaction and schedule delivery",
        tips: ["Acknowledge customer's relief", "Reinforce value of service"]
      }
    ]
  },
  {
    id: "conv-sarah-gaming",
    title: "Sarah's Gaming Setup - Young Professional Customer",
    description: "Help a young professional finance a high-end gaming and work-from-home setup",
    difficulty: "beginner",
    reward: 40,
    customerProfile: {
      name: "Sarah Chen",
      creditScore: "Good (700-750)",
      income: "$5,200/month",
      purchaseAmount: "$2,799",
      itemDescription: "Gaming PC, dual monitors, ergonomic chair, and desk setup",
      personality: "Tech-savvy, quality-focused, budget-conscious professional",
      concerns: ["Work-from-home productivity", "Gaming performance", "Smart financial choices"]
    },
    conversation: [
      {
        stepNumber: 1,
        speaker: "narrator",
        dialogue: "Sarah is a software developer who works remotely. She's been researching gaming setups for months and knows exactly what she wants, but is considering financing options.",
        context: "Knowledgeable customer who has done her research"
      },
      {
        stepNumber: 2,
        speaker: "customer",
        dialogue: "Hi! I've been looking at this gaming setup for my home office. I work from home as a developer, so I need something that's great for both work and gaming. The total comes to about $2,800.",
        context: "Customer explaining dual-purpose need"
      },
      {
        stepNumber: 3,
        speaker: "merchant",
        dialogue: "",
        choices: [
          {
            id: "a",
            text: "That's a great investment for someone who works from home! A quality setup can really boost both productivity and enjoyment. Are you looking to finance this?",
            isCorrect: true,
            response: "Exactly! I could pay cash, but I'd rather keep my emergency fund intact. What financing options do you have?",
            feedback: "Perfect! You validated her investment and asked about her financing interest.",
            nextStep: 5
          },
          {
            id: "b",
            text: "That's quite expensive for a gaming setup. Are you sure you need all these components?",
            isCorrect: false,
            response: "I've done months of research. This isn't just for gaming - it's my professional workstation too. I know what I need.",
            feedback: "Don't question a customer's informed decisions. She's clearly done her homework.",
            nextStep: 4
          }
        ]
      },
      {
        stepNumber: 4,
        speaker: "merchant",
        dialogue: "You're absolutely right - you clearly know what works for your needs. Let me help you find the best financing option for this setup.",
        tips: ["Respect customer expertise", "Focus on solutions, not judgment"],
        nextStep: 5
      },
      {
        stepNumber: 5,
        speaker: "customer",
        dialogue: "I have good credit and could get a credit card, but I'd prefer something with more flexible payments. I like to keep my credit utilization low.",
        context: "Financially savvy customer explaining preferences"
      },
      {
        stepNumber: 6,
        speaker: "merchant",
        dialogue: "That's smart financial planning! Our lease-to-own program might be perfect for you - it doesn't affect your credit utilization and gives you flexible payment options.",
        tips: ["Acknowledge her financial savvy", "Position LTO as smart choice"]
      },
      {
        stepNumber: 7,
        speaker: "customer",
        dialogue: "Lease-to-own? I thought that was mainly for people with credit problems. How does it work for someone with good credit?",
        context: "Customer needs education on LTO benefits for good credit customers"
      },
      {
        stepNumber: 8,
        speaker: "merchant",
        dialogue: "",
        choices: [
          {
            id: "a",
            text: "Actually, many customers with excellent credit choose LTO for cash flow management. You get small weekly payments and can pay it off early to save money.",
            isCorrect: true,
            response: "That does sound appealing. What would my weekly payments be, and how much do I save with early payoff?",
            feedback: "Excellent! You positioned LTO as a smart financial tool for good credit customers.",
            nextStep: 10
          },
          {
            id: "b",
            text: "Well, it is typically for people with credit challenges, but it could work for you too if you want.",
            isCorrect: false,
            response: "Hmm, that doesn't sound like the right fit for me then. Do you have other options?",
            feedback: "You reinforced a negative stereotype. LTO is a legitimate financing tool for all credit types.",
            nextStep: 9
          }
        ]
      },
      {
        stepNumber: 9,
        speaker: "merchant",
        dialogue: "Actually, let me clarify - LTO is used by customers across all credit ranges for cash flow management. Many professionals choose it for large purchases.",
        tips: ["Correct misconceptions about LTO", "Position as professional choice"],
        nextStep: 10
      },
      {
        stepNumber: 10,
        speaker: "customer",
        dialogue: "Okay, I'm interested. How quickly can we get this set up? I'd like to have everything this weekend for a project I'm working on.",
        context: "Customer interested and has timeline goals"
      },
      {
        stepNumber: 11,
        speaker: "merchant",
        dialogue: "We can definitely make that happen! The approval process is very quick with your credit profile, and we can have everything ready for pickup by Friday.",
        applicationAction: "Start LTO application process"
      },
      {
        stepNumber: 12,
        speaker: "customer",
        dialogue: "Perfect! My email is sarah.chen.dev@email.com. Will I be able to see all the terms before I commit?",
        context: "Professional customer wanting transparency"
      },
      {
        stepNumber: 13,
        speaker: "merchant",
        dialogue: "Absolutely! You'll see all payment details, early payoff savings, and terms before signing anything. Full transparency is important.",
        applicationAction: "Send application link",
        tips: ["Emphasize transparency", "Build confidence in process"]
      },
      {
        stepNumber: 14,
        speaker: "narrator",
        dialogue: "Customer completes application efficiently and receives quick approval",
        applicationAction: "Application approved for $2,799"
      },
      {
        stepNumber: 15,
        speaker: "customer",
        dialogue: "That was fast! The terms look reasonable, and I like the early payoff option. I'll probably use that in a few months.",
        context: "Customer satisfied with terms and planning ahead"
      },
      {
        stepNumber: 16,
        speaker: "merchant",
        dialogue: "That's a great strategy! Many of our professional customers do exactly that - use the flexibility now and pay off early when it makes sense.",
        tips: ["Validate customer's smart financial planning", "Reinforce that professionals use this option"]
      },
      {
        stepNumber: 17,
        speaker: "customer",
        dialogue: "Excellent. I'll sign the agreement now and pay the processing fee. This setup is going to make such a difference for my work!",
        context: "Customer excited about purchase and ready to complete"
      },
      {
        stepNumber: 18,
        speaker: "merchant",
        dialogue: "I'm excited for you! A quality workspace really does make a huge difference in productivity and enjoyment. Welcome to team productivity!",
        applicationAction: "Complete transaction and prepare order for pickup",
        tips: ["Share in customer's excitement", "Reinforce value of their investment"]
      }
    ]
  },
  {
    id: "conv-mike-tools",
    title: "Mike's Professional Tool Purchase - Contractor Customer",
    description: "Work with a contractor who needs professional tools for a big job opportunity",
    difficulty: "intermediate",
    reward: 50,
    customerProfile: {
      name: "Mike Rodriguez",
      creditScore: "Challenged (580-620)",
      income: "$3,800/month (variable)",
      purchaseAmount: "$2,299",
      itemDescription: "Professional tool set with truck toolbox and power tools",
      personality: "Hardworking, practical, opportunity-focused, independent",
      concerns: ["Landing new contract", "Tool investment ROI", "Variable income fluctuations"]
    },
    conversation: [
      {
        stepNumber: 1,
        speaker: "narrator",
        dialogue: "Mike is a independent contractor who just landed a big commercial job, but he needs to upgrade his tools to meet the project requirements.",
        context: "Business opportunity driving purchase decision"
      },
      {
        stepNumber: 2,
        speaker: "customer",
        dialogue: "I just got hired for a huge commercial renovation project, but they require specific professional-grade tools that I don't have yet. This job could really take my business to the next level.",
        context: "Customer explaining business opportunity"
      },
      {
        stepNumber: 3,
        speaker: "merchant",
        dialogue: "",
        choices: [
          {
            id: "a",
            text: "Congratulations on landing the big job! That's exciting. Investing in the right tools for a project like that makes total sense. What tools do you need?",
            isCorrect: true,
            response: "Thanks! I need a complete professional tool set - the works. They gave me a list of requirements and it's pretty extensive.",
            feedback: "Perfect! You celebrated his success and validated his tool investment need.",
            nextStep: 5
          },
          {
            id: "b",
            text: "That's a lot of money to spend on tools. Are you sure the project will cover the cost?",
            isCorrect: false,
            response: "Of course I've thought about that! This isn't my first job. I need these tools to meet their requirements, and it opens doors to more commercial work.",
            feedback: "Don't question a contractor's business judgment. He knows his industry better than you do.",
            nextStep: 4
          }
        ]
      },
      {
        stepNumber: 4,
        speaker: "merchant",
        dialogue: "You're absolutely right - you know your business best. Let's make sure you have everything you need to succeed on this project.",
        tips: ["Respect contractor expertise", "Focus on supporting their success"],
        nextStep: 5
      },
      {
        stepNumber: 5,
        speaker: "customer",
        dialogue: "I've got it all picked out - comes to about $2,300. The thing is, most of my money is tied up in materials for current jobs. Can you help with financing?",
        context: "Customer has cash flow typical of contractors"
      },
      {
        stepNumber: 6,
        speaker: "merchant",
        dialogue: "Absolutely! Cash flow management is huge in contracting. We work with contractors all the time who need to invest in tools while maintaining working capital.",
        tips: ["Show understanding of contractor cash flow challenges", "Normalize financing for business needs"]
      },
      {
        stepNumber: 7,
        speaker: "customer",
        dialogue: "Exactly! My credit took a hit a couple years ago when work was slow, but I'm back on track now. Will that be a problem?",
        context: "Customer being upfront about credit challenges"
      },
      {
        stepNumber: 8,
        speaker: "merchant",
        dialogue: "",
        choices: [
          {
            id: "a",
            text: "Our lease-to-own program is designed for working people like you. It's more about your current income and ability to pay than past credit issues.",
            isCorrect: true,
            response: "That's music to my ears! I'm making good money now - just need to manage the cash flow. How does it work?",
            feedback: "Excellent! You focused on his current situation and earning power.",
            nextStep: 10
          },
          {
            id: "b",
            text: "Let's see what we can do. I'll need to check your credit score first to see what options are available.",
            isCorrect: false,
            response: "Man, I really hope it doesn't kill my chances. These tools could change everything for my business.",
            feedback: "You created anxiety by focusing on past credit instead of current earning power.",
            nextStep: 9
          }
        ]
      },
      {
        stepNumber: 9,
        speaker: "merchant",
        dialogue: "Don't worry - our lease-to-own program focuses on your current income and business success, not past credit history.",
        tips: ["Reassure about approval chances", "Focus on present financial strength"],
        nextStep: 10
      },
      {
        stepNumber: 10,
        speaker: "customer",
        dialogue: "That sounds perfect. How quickly can we get this done? I start the job Monday and need to have all my tools ready.",
        context: "Customer has immediate timeline need"
      },
      {
        stepNumber: 11,
        speaker: "merchant",
        dialogue: "We can absolutely get you set up before Monday! The approval is usually very quick, and you can take everything with you today once approved.",
        applicationAction: "Start urgent LTO application",
        tips: ["Commit to meeting his timeline", "Emphasize same-day solution"]
      },
      {
        stepNumber: 12,
        speaker: "customer",
        dialogue: "That's what I need to hear! My email is mike.rodriguez.contractor@gmail.com. What information do you need?",
        context: "Customer ready to move forward quickly"
      },
      {
        stepNumber: 13,
        speaker: "merchant",
        dialogue: "I'll send the application now. For contractors, make sure to include all your income sources - regular clients, recent jobs, everything that shows your earning power.",
        applicationAction: "Send application with contractor income guidance",
        tips: ["Help contractor present income accurately", "Set up for approval success"]
      },
      {
        stepNumber: 14,
        speaker: "narrator",
        dialogue: "Customer completes application, including multiple income sources, and receives approval",
        applicationAction: "Application approved for $2,299"
      },
      {
        stepNumber: 15,
        speaker: "customer",
        dialogue: "Approved! This is fantastic - I was worried my credit history would mess this up. You guys really understand working people.",
        context: "Customer relieved and grateful"
      },
      {
        stepNumber: 16,
        speaker: "merchant",
        dialogue: "That's exactly our mission! We know hard-working contractors like you deserve access to the tools you need to grow your business.",
        tips: ["Reinforce company values", "Validate his worth as working person"]
      },
      {
        stepNumber: 17,
        speaker: "customer",
        dialogue: "I'll take care of the $39 fee right now. These tools are going to pay for themselves on this first job, and open up so many more opportunities.",
        context: "Customer sees investment value clearly"
      },
      {
        stepNumber: 18,
        speaker: "merchant",
        dialogue: "That's the entrepreneurial spirit! We're proud to help contractors like you invest in your success. Go build something amazing!",
        applicationAction: "Complete transaction and prepare tools for pickup",
        tips: ["Celebrate his entrepreneurial drive", "Position company as partner in success"]
      }
    ]
  },
  {
    id: "conv-linda-senior",
    title: "Linda's Mobility Aid Purchase - Senior Customer",
    description: "Help a senior citizen finance mobility equipment with patience and understanding",
    difficulty: "beginner",
    reward: 35,
    customerProfile: {
      name: "Linda Thompson",
      creditScore: "Good (680-720)",
      income: "$2,100/month (fixed income)",
      purchaseAmount: "$1,299",
      itemDescription: "Electric mobility scooter with accessories",
      personality: "Independent, cautious with technology, values personal service",
      concerns: ["Maintaining independence", "Fixed income budget", "Technology comfort level"]
    },
    conversation: [
      {
        stepNumber: 1,
        speaker: "narrator",
        dialogue: "Linda is 72 years old and wants to maintain her independence. Her doctor recommended a mobility scooter, but she's on a fixed income and hesitant about financing.",
        context: "Senior customer with specific needs and budget concerns"
      },
      {
        stepNumber: 2,
        speaker: "customer",
        dialogue: "My doctor says I need one of these scooters to keep getting around safely. I want to stay independent, but they're more expensive than I expected.",
        context: "Customer explaining medical need and budget concern"
      },
      {
        stepNumber: 3,
        speaker: "merchant",
        dialogue: "",
        choices: [
          {
            id: "a",
            text: "I completely understand - maintaining your independence is so important. Let's look at financing options that work with your budget. What's comfortable for you monthly?",
            isCorrect: true,
            response: "That would be wonderful! I'm on a fixed income, so I need to be careful with my budget. Maybe $50-60 a month?",
            feedback: "Perfect! You acknowledged her independence goal and asked about her budget comfort zone.",
            nextStep: 5
          },
          {
            id: "b",
            text: "Have you checked with Medicare or insurance? They might cover some of the cost.",
            isCorrect: false,
            response: "I already tried that. Medicare doesn't cover this type, and my supplement won't help either. I really need another option.",
            feedback: "While well-intentioned, you should assume she's already explored insurance options. Focus on solutions you can provide.",
            nextStep: 4
          }
        ]
      },
      {
        stepNumber: 4,
        speaker: "merchant",
        dialogue: "I understand insurance limitations can be frustrating. Let's focus on financing options that can make this work for your budget.",
        tips: ["Acknowledge insurance frustrations", "Redirect to available solutions"],
        nextStep: 5
      },
      {
        stepNumber: 5,
        speaker: "customer",
        dialogue: "I get about $2,100 a month total, and most of that goes to my regular expenses. I can probably manage $50-60 a month for something this important.",
        context: "Customer sharing budget constraints openly"
      },
      {
        stepNumber: 6,
        speaker: "merchant",
        dialogue: "That's very responsible budgeting. We have a lease-to-own program that can work within that range. Would you like me to explain how it works?",
        tips: ["Compliment her budgeting", "Offer to explain simply"]
      },
      {
        stepNumber: 7,
        speaker: "customer",
        dialogue: "Yes, please explain it simply. I'm not great with all this financial stuff, and I want to make sure I understand everything.",
        context: "Customer requesting clear, simple explanation"
      },
      {
        stepNumber: 8,
        speaker: "merchant",
        dialogue: "",
        choices: [
          {
            id: "a",
            text: "Of course! Think of it like renting with the option to own. You make small weekly payments, and you can purchase it early anytime to save money. Very straightforward.",
            isCorrect: true,
            response: "That does sound simple! Weekly payments might actually be easier for me to manage than monthly ones.",
            feedback: "Excellent! You used simple language and related it to something familiar.",
            nextStep: 10
          },
          {
            id: "b",
            text: "It's a lease agreement with various payment terms, early purchase options, and different financial structures depending on your credit profile and income verification.",
            isCorrect: false,
            response: "Oh my... that sounds very complicated. Maybe this isn't for me after all.",
            feedback: "Too much jargon and complexity scared her off. Keep explanations simple and friendly for senior customers.",
            nextStep: 9
          }
        ]
      },
      {
        stepNumber: 9,
        speaker: "merchant",
        dialogue: "Let me explain it more simply - it's just small weekly payments, and you can pay it off early anytime. Nothing complicated at all!",
        tips: ["Simplify language", "Reassure about process simplicity"],
        nextStep: 10
      },
      {
        stepNumber: 10,
        speaker: "customer",
        dialogue: "Weekly payments do sound manageable. How do I apply? I hope it's not all on a computer - I'm not very good with technology.",
        context: "Customer interested but concerned about technology barriers"
      },
      {
        stepNumber: 11,
        speaker: "merchant",
        dialogue: "Don't worry! I can help you with every step. I'll sit right here with you and walk you through everything on the tablet. Very easy.",
        tips: ["Offer personal assistance", "Reassure about technology support"]
      },
      {
        stepNumber: 12,
        speaker: "customer",
        dialogue: "That would be so helpful! I really appreciate your patience. My email is linda.thompson1952@aol.com.",
        context: "Customer grateful for assistance and ready to proceed"
      },
      {
        stepNumber: 13,
        speaker: "merchant",
        dialogue: "My pleasure! That's what I'm here for. I'll start the application and help you with each step. Take your time - there's no rush.",
        applicationAction: "Start assisted application process",
        tips: ["Emphasize patience", "Remove time pressure", "Offer step-by-step help"]
      },
      {
        stepNumber: 14,
        speaker: "narrator",
        dialogue: "With assistance, customer completes application successfully and receives approval",
        applicationAction: "Application approved for $1,299 with assistance"
      },
      {
        stepNumber: 15,
        speaker: "customer",
        dialogue: "I got approved! You made that so much easier than I expected. The weekly payment amount looks perfect for my budget.",
        context: "Customer pleased with approval and payment terms"
      },
      {
        stepNumber: 16,
        speaker: "merchant",
        dialogue: "I'm so happy it worked out! This scooter is going to make such a difference in maintaining your independence and mobility.",
        tips: ["Celebrate her success", "Reinforce the value of independence"]
      },
      {
        stepNumber: 17,
        speaker: "customer",
        dialogue: "I'm excited! Can you help me with the signing process too? I want to make sure I do everything correctly.",
        context: "Customer wanting continued assistance"
      },
      {
        stepNumber: 18,
        speaker: "merchant",
        dialogue: "Absolutely! I'll help you through the entire process. You're going to love the freedom this scooter gives you!",
        applicationAction: "Assist with contract signing and setup",
        tips: ["Continue providing support", "Build excitement about independence"]
      }
    ]
  },
  {
    id: "conv-james-motorcycle",
    title: "James's Motorcycle Repair - Weekend Warrior Customer",
    description: "Help an enthusiast finance major motorcycle repairs to get back on the road",
    difficulty: "intermediate",
    reward: 45,
    customerProfile: {
      name: "James Parker",
      creditScore: "Fair (650-690)",
      income: "$4,500/month",
      purchaseAmount: "$2,100",
      itemDescription: "Motorcycle engine rebuild and transmission work",
      personality: "Passionate about riding, weekend hobbyist, practical about costs",
      concerns: ["Riding season timing", "Quality of repair work", "Getting best value"]
    },
    conversation: [
      {
        stepNumber: 1,
        speaker: "narrator",
        dialogue: "James brought his motorcycle in for what he thought was a minor issue, but it needs major engine work. Riding season is starting and he's eager to get back on the road.",
        context: "Hobby-driven customer facing unexpected major repair"
      },
      {
        stepNumber: 2,
        speaker: "customer",
        dialogue: "Well, this is a lot more than I expected! I thought it was just a carburetor issue, but you're telling me I need a full engine rebuild? Riding season just started!",
        context: "Customer disappointed about scope and timing of repair"
      },
      {
        stepNumber: 3,
        speaker: "merchant",
        dialogue: "",
        choices: [
          {
            id: "a",
            text: "I know it's disappointing news, especially with riding season starting. But addressing it properly now means many more seasons of reliable riding ahead.",
            isCorrect: true,
            response: "You're right about that. I love this bike and want to keep it for years. But $2,100 is a big hit right now.",
            feedback: "Great! You acknowledged his disappointment while focusing on long-term value.",
            nextStep: 5
          },
          {
            id: "b",
            text: "Yeah, these older bikes can be money pits. Have you considered just getting a newer motorcycle instead?",
            isCorrect: false,
            response: "This isn't just any bike - it's my baby! I've had it for 8 years and it's perfect except for this issue. I'm not getting rid of it.",
            feedback: "Never suggest replacing something a customer is emotionally attached to. Understand the personal connection.",
            nextStep: 4
          }
        ]
      },
      {
        stepNumber: 4,
        speaker: "merchant",
        dialogue: "I completely understand - when you have a bike you love, you want to keep it running perfectly. Let's figure out how to get your baby back on the road.",
        tips: ["Acknowledge emotional attachment", "Use customer's language ('baby')"],
        nextStep: 5
      },
      {
        stepNumber: 5,
        speaker: "customer",
        dialogue: "Exactly! This bike has been with me through so many adventures. I just wasn't expecting this big of an expense right now. Do you have financing options?",
        context: "Customer wants to proceed but needs financial solution"
      },
      {
        stepNumber: 6,
        speaker: "merchant",
        dialogue: "Absolutely! We understand that major repairs can catch you off guard. We have financing that can get your bike back on the road without breaking the bank.",
        tips: ["Normalize unexpected repair costs", "Focus on getting him riding again"]
      },
      {
        stepNumber: 7,
        speaker: "customer",
        dialogue: "That sounds promising. I've got decent credit and steady income. What kind of monthly payments are we talking about?",
        context: "Customer interested and providing financial context"
      },
      {
        stepNumber: 8,
        speaker: "merchant",
        dialogue: "",
        choices: [
          {
            id: "a",
            text: "With our lease-to-own program, you'd have small weekly payments instead of one big monthly hit. Plus, you can pay it off early when it's convenient.",
            isCorrect: true,
            response: "Weekly payments actually sound better for my cash flow. And I like having the option to pay it off early. How do we get started?",
            feedback: "Perfect! You offered payment flexibility that appeals to his situation.",
            nextStep: 10
          },
          {
            id: "b",
            text: "Well, let's see what you qualify for based on your credit score and income. Then I can give you specific numbers.",
            isCorrect: false,
            response: "Can't you give me a ballpark? I just want to know if it's going to be reasonable or not.",
            feedback: "Give general guidance before diving into formal approval. Customers want to know if they're in the right range.",
            nextStep: 9
          }
        ]
      },
      {
        stepNumber: 9,
        speaker: "merchant",
        dialogue: "Of course! With your income, you'd be looking at very manageable weekly payments - probably less than what you'd spend on gas for weekend rides.",
        tips: ["Provide relatable comparison", "Make payments sound reasonable"],
        nextStep: 10
      },
      {
        stepNumber: 10,
        speaker: "customer",
        dialogue: "That's a great way to put it! Less than gas money to get my bike running perfectly again. Let's do this!",
        context: "Customer convinced and ready to proceed"
      },
      {
        stepNumber: 11,
        speaker: "merchant",
        dialogue: "Awesome! I can tell you're excited to get back out there. What's your email? I'll get the application started while my team preps your bike for the rebuild.",
        applicationAction: "Start application while beginning repair work"
      },
      {
        stepNumber: 12,
        speaker: "customer",
        dialogue: "james.parker.rides@gmail.com - and yes, I'm already planning my first ride after you fix her up! How long will the rebuild take?",
        context: "Customer excited and asking about timeline"
      },
      {
        stepNumber: 13,
        speaker: "merchant",
        dialogue: "With the rebuild, about 3-4 days once we get started. We'll do it right the first time so you can enjoy many more years of riding!",
        applicationAction: "Send application and provide repair timeline",
        tips: ["Set realistic expectations", "Emphasize quality work"]
      },
      {
        stepNumber: 14,
        speaker: "narrator",
        dialogue: "Customer completes application quickly and receives approval for the full amount",
        applicationAction: "Application approved for $2,100"
      },
      {
        stepNumber: 15,
        speaker: "customer",
        dialogue: "Approved for the full amount! This is perfect - I'll have my bike back and not drain my savings. When can you start the work?",
        context: "Customer excited about approval and eager for work to begin"
      },
      {
        stepNumber: 16,
        speaker: "merchant",
        dialogue: "We can start tomorrow morning! Just need to finish the paperwork and collect the processing fee, then your bike goes straight to our best engine specialist.",
        applicationAction: "Schedule repair work and complete financing"
      },
      {
        stepNumber: 17,
        speaker: "customer",
        dialogue: "Perfect! I'll pay the $39 fee right now. You've made this whole process so much easier than I expected.",
        context: "Customer satisfied with entire experience"
      },
      {
        stepNumber: 18,
        speaker: "merchant",
        dialogue: "That's what we're here for! Every rider deserves to be out on the road enjoying their passion. Can't wait to see you pick up your rebuilt beauty!",
        applicationAction: "Complete transaction and begin engine rebuild",
        tips: ["Share in his passion", "Build excitement for completion"]
      }
    ]
  }
]