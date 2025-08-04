// Resource Content for EasyPay University Resources

export interface ResourceContent {
  id: number
  content: {
    title: string
    sections: {
      heading: string
      content: string | string[] | any
    }[]
  }
}

export const resourceContents: ResourceContent[] = [
  {
    id: 1,
    content: {
      title: 'EasyPay Finance Program Overview Brochure',
      sections: [
        {
          heading: 'Welcome to EasyPay Finance',
          content: `At EasyPay Finance, we believe everyone deserves access to the products and services they need. For over 20 years, we've been helping businesses grow by offering simple, transparent financing solutions that make purchases possible for more customers.

Built on two decades of customer finance experience since 2001, EasyPay Finance has grown to serve over 12,000 locations across the United States. We specialize in providing payment solutions for retailers, auto repair dealers, furniture stores, mattress retailers, and electronics merchants by consolidating the need for multiple finance companies into one easy solution.

Our comprehensive credit coverage serves customers with good, challenged, and poor credit through flexible payment solutions designed to work with customer budgets. We use alternative credit assessment that looks beyond just credit scores, ensuring more customers can access the products and services they need.

Our mission is simple: Easy Payment Solutions - No Perfect Credit Required.`
        },
        {
          heading: 'Two Flexible Financing Programs',
          content: {
            programs: [
              {
                name: 'Retail Installment Contracts (RIC)',
                description: 'Traditional financing with fixed monthly payments',
                features: [
                  'Financing up to $5,000',
                  'Fixed payment terms',
                  'No down payment required',
                  'Instant approval decisions',
                  'Perfect for customers with established credit'
                ]
              },
              {
                name: 'Lease-to-Own (LTO)',
                description: 'Flexible ownership path for credit-challenged customers',
                features: [
                  'Up to $5,000 in purchasing power',
                  'Early purchase options available',
                  'No credit needed',
                  'Weekly, bi-weekly, or monthly payments',
                  'Ideal for customers building credit'
                ]
              },
            ]
          }
        },
        {
          heading: 'Why Partner with EasyPay?',
          content: [
            '✓ Increase sales by offering payment options',
            '✓ Same-day funding on approved applications',
            '✓ No merchant fees or hidden costs',
            '✓ Dedicated merchant support team',
            '✓ Easy-to-use mobile application process',
            '✓ Comprehensive training and marketing materials',
            '✓ 90-day promotional financing options'
          ]
        },
        {
          heading: 'Getting Started is Easy',
          content: `1. Contact our Business Support team at (866) 337-2537
2. Complete merchant enrollment and training
3. Start offering financing to your customers
4. Get funded same-day for approved applications`
        },
        {
          heading: 'Contact Information',
          content: {
            departments: [
              {
                name: 'Business Support',
                phone: '(866) 337-2537',
                email: 'MerchantServices@easypayfinance.com',
                hours: 'Mon-Fri 5am-6pm PST, Sat 5am-5pm PST'
              },
              {
                name: 'Customer Service',
                phone: '(866) 438-8372',
                email: 'CustomerService@easypayfinance.com',
                hours: 'Mon-Fri 5am-7pm PST, Sat 7:30am-4pm PST'
              }
            ]
          }
        }
      ]
    }
  },
  {
    id: 2,
    content: {
      title: 'Customer Objection Handling Scripts',
      sections: [
        {
          heading: 'Introduction',
          content: `This guide provides proven scripts to help your team address common customer concerns about financing. Remember: Always ensure customers read and understand their agreements before signing.`
        },
        {
          heading: 'Common Objections and Responses',
          content: {
            objections: [
              {
                objection: "I don't want to hurt my credit score.",
                response: `"I understand your concern about protecting your credit. The good news is that our Retail Installment Contract and Lease-to-Own programs don't require a hard credit pull that affects your score. We can check if you're pre-approved in seconds without any impact to your credit."`
              },
              {
                objection: "The payments seem too high.",
                response: `"Let's look at your budget together. We offer flexible payment schedules - weekly, bi-weekly, or monthly - to match your pay cycle. Many customers find that breaking down the cost makes it very manageable. Would you like to see different payment options?"`
              },
              {
                objection: "I don't like financing. I prefer to pay cash.",
                response: `"That's completely understandable, and paying cash is always an option. However, many of our customers use our 90-day same-as-cash option. You can pay off your purchase within 90 days with just a small finance charge, keeping your cash available for emergencies. It's like a short-term layaway where you take the item home today."`
              },
              {
                objection: "What if I can't make a payment?",
                response: `"Life happens, and we understand that. EasyPay Finance has been helping customers for over 20 years, and they work with customers who communicate with them. If you ever have an issue, just call their customer service team. They'd rather work out a solution than see you struggle. Make sure to read through all the terms so you understand your options."`
              },
              {
                objection: "I've been turned down before.",
                response: `"Past credit challenges don't necessarily mean you won't be approved today. We have three different programs, including our Lease-to-Own option that doesn't require credit. Many customers who've been turned down elsewhere get approved with us. The application only takes a few minutes - would you like to see if you qualify?"`
              },
              {
                objection: "I don't understand how this works.",
                response: `"I'm happy to explain everything step by step. Here's how simple it is: You apply using our tablet or your phone, get an instant decision, choose your payment plan, and we handle the rest. I'll be here to answer any questions as we go through the application together. Let me show you each screen so you're comfortable with the process."`
              },
              {
                objection: "Is this a credit card?",
                response: `"No, this is not a credit card. This is financing specifically for your purchase today. You'll have fixed payments, so you'll know exactly what you owe each month and when it will be paid off. There are no surprise fees or revolving balances like with credit cards."`
              },
              {
                objection: "The interest seems high.",
                response: `"I understand you want to get the best deal possible. While I can't discuss specific rates, I can tell you that the total cost is clearly shown before you agree to anything. Many customers find that having the item now and paying over time is worth the finance charge, especially with our 90-day promotional option. You'll see all costs upfront - there are no hidden fees."`
              }
            ]
          }
        },
        {
          heading: 'Best Practices',
          content: [
            '• Listen actively to understand the real concern',
            '• Acknowledge their feelings before responding',
            '• Use positive language and focus on benefits',
            '• Always encourage customers to read the full agreement',
            '• Never make promises about approval or terms',
            '• If unsure, offer to call EasyPay support together',
            '• Document any special circumstances or requests'
          ]
        },
        {
          heading: 'Closing the Conversation',
          content: `"I want to make sure you're completely comfortable with your financing decision. Do you have any other questions about the terms or the application process? Remember, you can always call EasyPay's customer service team at (866) 438-8372 if you have questions after today. They're available to help Monday through Saturday."`
        }
      ]
    }
  },
  {
    id: 3,
    content: {
      title: 'Application Process Video Tutorial Script',
      sections: [
        {
          heading: 'Video Overview',
          content: 'This video tutorial walks through the complete application process using the EasyPay Finance mobile app. Total runtime: approximately 8 minutes.'
        },
        {
          heading: 'Video Script Outline',
          content: {
            segments: [
              {
                time: '0:00-0:30',
                title: 'Introduction',
                script: `"Welcome to EasyPay Finance application training. In this video, you'll learn how to help customers apply for financing in under 5 minutes using our mobile app. Let's get started!"`
              },
              {
                time: '0:30-1:30',
                title: 'Before You Begin',
                script: `"Before starting an application, make sure you have:
- The customer's ID and basic information
- The purchase amount and item description
- Your merchant login credentials
- A stable internet connection

Remember: Always verify the customer's identity and ensure they understand they're applying for financing."`
              },
              {
                time: '1:30-3:00',
                title: 'Starting the Application',
                script: `"Step 1: Open the EasyPay Finance app and log in with your merchant credentials.
Step 2: Tap 'New Application' 
Step 3: Select the appropriate program - the app will guide you
Step 4: Enter the purchase amount and item description
Step 5: Hand the device to your customer to complete their information"`
              },
              {
                time: '3:00-4:30',
                title: 'Customer Information Entry',
                script: `"Your customer will now enter:
- Personal information (name, date of birth, SSN)
- Contact details (phone, email)
- Address information
- Employment details
- Banking information for payments

Tip: Stay nearby to answer any questions, but give them privacy to enter sensitive information."`
              },
              {
                time: '4:30-5:30',
                title: 'Instant Decision',
                script: `"Once submitted, you'll receive an instant decision. If approved:
- Review the approval amount with your customer
- Show them their payment options
- Let them select their preferred payment schedule
- Ensure they read all terms and conditions
- Have them sign electronically"`
              },
              {
                time: '5:30-6:30',
                title: 'Completing the Sale',
                script: `"After customer acceptance:
- Print or email the contract copy
- Process their purchase as normal
- Provide receipt and contract documents
- Remind them of their first payment date
- Give them EasyPay's customer service number: (866) 438-8372"`
              },
              {
                time: '6:30-7:30',
                title: 'Handling Declines',
                script: `"If the application is declined:
- Stay positive and professional
- Suggest trying a different program (LTO if RIC was declined)
- Offer to try again with a co-applicant
- Provide information about improving approval chances
- Never discuss specific decline reasons"`
              },
              {
                time: '7:30-8:00',
                title: 'Summary and Resources',
                script: `"Great job! You now know how to process EasyPay Finance applications. Remember:
- Most applications take under 5 minutes
- Always verify customer identity
- Ensure customers read their agreements
- Contact merchant support at (866) 337-2537 for help
- Practice makes perfect!"`
              }
            ]
          }
        }
      ]
    }
  },
  {
    id: 4,
    content: {
      title: 'Staff Training Checklist Template',
      sections: [
        {
          heading: 'New Team Member Information',
          content: {
            fields: [
              'Employee Name: _____________________',
              'Position: _____________________',
              'Start Date: _____________________',
              'Trainer Name: _____________________',
              'Training Completion Target: _____________________'
            ]
          }
        },
        {
          heading: 'Pre-Training Preparation',
          content: {
            checklist: [
              '□ Create EasyPay merchant portal login',
              '□ Download EasyPay Finance mobile app',
              '□ Provide training materials and resources',
              '□ Schedule uninterrupted training time',
              '□ Prepare sample scenarios for practice',
              '□ Review company financing policies'
            ]
          }
        },
        {
          heading: 'Module 1: EasyPay Finance Overview (Day 1)',
          content: {
            checklist: [
              '□ Review company history and mission',
              '□ Explain two financing programs (RIC, LTO)',
              '□ Discuss approval amounts (up to $5,000)',
              '□ Cover same-day funding process',
              '□ Review no merchant fee policy',
              '□ Complete Module 1 in EasyPay University',
              '□ Pass Module 1 quiz (80% or higher)'
            ]
          }
        },
        {
          heading: 'Module 2: Application Process (Day 2)',
          content: {
            checklist: [
              '□ Demonstrate mobile app navigation',
              '□ Practice customer information entry',
              '□ Review ID verification requirements',
              '□ Explain instant approval process',
              '□ Cover payment option selection',
              '□ Practice handling approvals and declines',
              '□ Complete 3 practice applications',
              '□ Complete Module 4 in EasyPay University'
            ]
          }
        },
        {
          heading: 'Module 3: Customer Interaction (Day 3)',
          content: {
            checklist: [
              '□ Review customer objection scripts',
              '□ Practice common scenarios',
              '□ Discuss importance of contract understanding',
              '□ Cover privacy and sensitive information handling',
              '□ Role-play 5 different customer situations',
              '□ Complete Module 6 in EasyPay University',
              '□ Review compliance requirements'
            ]
          }
        },
        {
          heading: 'Module 4: Advanced Topics (Day 4)',
          content: {
            checklist: [
              '□ Explain 90-day promotional options',
              '□ Cover special circumstances handling',
              '□ Review troubleshooting common issues',
              '□ Discuss co-applicant process',
              '□ Practice complex scenarios',
              '□ Complete remaining EasyPay University modules',
              '□ Demonstrate proficiency in all areas'
            ]
          }
        },
        {
          heading: 'Final Assessment',
          content: {
            checklist: [
              '□ Process live application with supervision',
              '□ Handle customer objection successfully',
              '□ Demonstrate proper documentation',
              '□ Show proficiency with mobile app',
              '□ Pass final knowledge assessment',
              '□ Receive EasyPay University certificate'
            ]
          }
        },
        {
          heading: 'Post-Training Support',
          content: {
            checklist: [
              '□ Assign mentor for first week',
              '□ Schedule 1-week follow-up meeting',
              '□ Provide support contact information',
              '□ Add to team communication channels',
              '□ Schedule 30-day performance review',
              '□ Document training completion'
            ]
          }
        },
        {
          heading: 'Important Contacts',
          content: `Business Support: (866) 337-2537
Customer Service: (866) 438-8372
Leasing Support: (800) 447-6215
Email: MerchantServices@easypayfinance.com`
        },
        {
          heading: 'Trainer Sign-off',
          content: {
            fields: [
              'All training completed: □ Yes □ No',
              'Employee ready for independent work: □ Yes □ No',
              'Trainer Signature: _____________________',
              'Date: _____________________',
              'Employee Signature: _____________________',
              'Date: _____________________'
            ]
          }
        }
      ]
    }
  },
  {
    id: 5,
    content: {
      title: 'Compliance Documentation Template',
      sections: [
        {
          heading: 'Merchant Compliance Checklist',
          content: 'This template ensures your business maintains compliance with EasyPay Finance requirements and best practices.'
        },
        {
          heading: 'Monthly Compliance Review',
          content: {
            sections: [
              {
                title: 'Application Processing Compliance',
                items: [
                  '□ All applications include proper customer identification verification',
                  '□ Customer signatures obtained on all contracts',
                  '□ Contracts provided to customers (printed or emailed)',
                  '□ Application documentation stored securely',
                  '□ No applications processed for prohibited items',
                  '□ All staff following privacy protocols for customer information'
                ]
              },
              {
                title: 'Staff Compliance',
                items: [
                  '□ All staff have completed EasyPay University training',
                  '□ New hires trained within 30 days',
                  '□ Staff using current version of mobile app',
                  '□ Merchant portal logins secure and updated',
                  '□ No sharing of login credentials',
                  '□ Regular training refreshers conducted'
                ]
              },
              {
                title: 'Customer Communication Compliance',
                items: [
                  '□ All financing terms clearly explained to customers',
                  '□ Customers encouraged to read contracts thoroughly',
                  '□ No misleading statements about approval or terms',
                  '□ Customer questions directed to appropriate support',
                  '□ Privacy maintained during application process',
                  '□ Contract copies provided to all customers'
                ]
              },
              {
                title: 'Marketing and Display Compliance',
                items: [
                  '□ Using only approved EasyPay Finance marketing materials',
                  '□ Financing options clearly displayed at point of sale',
                  '□ No unauthorized claims about financing terms',
                  '□ Equal credit opportunity notices displayed',
                  '□ Marketing materials current and in good condition',
                  '□ Online listings include proper financing disclosures'
                ]
              }
            ]
          }
        },
        {
          heading: 'Quarterly Audit Checklist',
          content: {
            items: [
              '□ Review all staff training records',
              '□ Audit sample of applications for completeness',
              '□ Verify customer complaint resolution process',
              '□ Check for software and app updates',
              '□ Review and update emergency contacts',
              '□ Confirm business information is current with EasyPay',
              '□ Validate all users still require system access',
              '□ Review and archive old documentation'
            ]
          }
        },
        {
          heading: 'Documentation Requirements',
          content: {
            sections: [
              {
                title: 'Required Records (Keep for 2 years)',
                items: [
                  '• Signed customer applications and contracts',
                  '• Customer identification verification records',
                  '• Staff training completion certificates',
                  '• Compliance audit results',
                  '• Customer complaint logs and resolutions',
                  '• System access logs and changes'
                ]
              },
              {
                title: 'Best Practices',
                items: [
                  '• Maintain digital copies of all documentation',
                  '• Use secure, encrypted storage for sensitive data',
                  '• Implement regular backup procedures',
                  '• Restrict access to authorized personnel only',
                  '• Conduct monthly compliance reviews',
                  '• Document all customer interactions'
                ]
              }
            ]
          }
        },
        {
          heading: 'Incident Reporting',
          content: `Any compliance concerns or incidents should be reported immediately to:

Business Support: (866) 337-2537
Email: MerchantServices@easypayfinance.com

Document all incidents including:
- Date and time
- Staff involved
- Customer information (if applicable)
- Description of incident
- Actions taken
- Resolution`
        },
        {
          heading: 'Certification',
          content: {
            fields: [
              'Business Name: _____________________',
              'Review Period: _____________________',
              'Reviewed By: _____________________',
              'Title: _____________________',
              'All items in compliance: □ Yes □ No',
              'If No, corrective actions planned: _____________________',
              '_____________________',
              '_____________________',
              'Signature: _____________________',
              'Date: _____________________'
            ]
          }
        }
      ]
    }
  },
  {
    id: 6,
    content: {
      title: 'Point-of-Sale Display Materials',
      sections: [
        {
          heading: 'Display Material Specifications',
          content: 'Professional, high-resolution materials to promote EasyPay Finance at your location.'
        },
        {
          heading: 'Available Materials',
          content: {
            materials: [
              {
                name: 'Counter Cards',
                description: '4" x 6" double-sided table tents',
                content: `Front: "Customer Financing Available - Up to $5,000"
Back: "Ask about our 90-day promotional financing"`,
                specs: '300 DPI, CMYK, Matte finish with UV coating'
              },
              {
                name: 'Window Clings',
                description: '8" x 8" static cling decals',
                content: 'EasyPay Finance logo with "Financing Available Here"',
                specs: 'Clear background, weather-resistant'
              },
              {
                name: 'Register Stickers',
                description: '3" x 2" adhesive labels',
                content: '"We Accept EasyPay Finance"',
                specs: 'Removable adhesive, full color'
              },
              {
                name: 'Poster - Financing Options',
                description: '18" x 24" wall poster',
                content: `Large format showing:
- Three financing programs
- "No Credit Needed Options"
- "Apply in Minutes"
- "Same Day Approval"`,
                specs: 'Heavy stock paper, ready to frame'
              },
              {
                name: 'Digital Screen Graphics',
                description: '1920x1080 HD displays',
                content: 'Rotating slides showcasing financing benefits',
                specs: 'MP4 and static JPG formats included'
              }
            ]
          }
        },
        {
          heading: 'Brand Guidelines',
          content: {
            colors: [
              'Primary Green: #2E7D32',
              'Secondary Teal: #14B8A6',
              'Accent Blue: #1f5577',
              'Text Gray: #1F2937'
            ],
            fonts: [
              'Headlines: Inter Bold',
              'Body Text: Inter Regular',
              'Call-to-action: Inter Semi-Bold'
            ],
            rules: [
              '• Maintain clear space around logos',
              '• Never stretch or distort logos',
              '• Ensure text is legible at display size',
              '• Use only approved color combinations',
              '• Include equal credit opportunity notice where required'
            ]
          }
        },
        {
          heading: 'Placement Guidelines',
          content: `Strategic Placement for Maximum Impact:

1. **Entrance Area**
   - Window clings at eye level
   - "Financing Available" message visible from outside

2. **Point of Sale**
   - Counter cards near register
   - Register stickers on credit card terminals
   - Clear visibility during checkout

3. **Product Display Areas**
   - Posters near high-ticket items
   - Shelf talkers for promoted products
   - "Ask about financing" signs

4. **Waiting Areas**
   - Educational posters about programs
   - Benefits-focused messaging
   - Application process information`
        },
        {
          heading: 'Messaging Templates',
          content: {
            approved_messages: [
              '"Finance Your Purchase Today - Up to $5,000"',
              '"No Credit? No Problem! Lease-to-Own Available"',
              '"90-Day Same as Cash Option Available"',
              '"Get Approved in Minutes"',
              '"Take It Home Today with EasyPay Finance"',
              '"Flexible Payment Options to Fit Your Budget"',
              '"Apply Now - Instant Decision"'
            ]
          }
        },
        {
          heading: 'Digital Assets',
          content: `For websites and social media:
- Web banners (728x90, 300x250, 160x600)
- Social media graphics (Facebook, Instagram sizes)
- Email signatures
- QR codes linking to application

All materials available in RGB for digital use`
        },
        {
          heading: 'Ordering Information',
          content: `To order display materials:
1. Contact Business Support: (866) 337-2537
2. Email: MerchantServices@easypayfinance.com
3. Specify materials needed and quantities
4. Allow 5-7 business days for delivery

Custom materials available for orders over 100 units.`
        }
      ]
    }
  },
  {
    id: 7,
    content: {
      title: 'Monthly Performance Review Checklist',
      sections: [
        {
          heading: 'Performance Review Overview',
          content: 'Use this monthly checklist to track team performance, identify improvement areas, and maximize your EasyPay Finance partnership success.'
        },
        {
          heading: 'Key Performance Metrics',
          content: {
            metrics: [
              {
                category: 'Application Volume',
                items: [
                  '□ Total applications submitted: _____',
                  '□ Applications approved: _____',
                  '□ Approval rate: _____%',
                  '□ Average ticket size: $_____',
                  '□ Total financed amount: $_____'
                ]
              },
              {
                category: 'Program Breakdown',
                items: [
                  '□ RIC applications: _____',
                  '□ LTO applications: _____',
                  '□ Most successful program: _____',
                  '□ Program conversion rates tracked'
                ]
              },
              {
                category: 'Staff Performance',
                items: [
                  '□ Top performing associate: _____',
                  '□ Applications per associate tracked',
                  '□ Training compliance rate: _____%',
                  '□ Customer satisfaction feedback reviewed',
                  '□ Areas for additional training identified'
                ]
              }
            ]
          }
        },
        {
          heading: 'Customer Experience Review',
          content: {
            checklist: [
              '□ Customer complaints received: _____',
              '□ Complaints resolved: _____',
              '□ Average application time: _____ minutes',
              '□ Contract delivery rate: _____%',
              '□ Customer follow-up completed',
              '□ Positive feedback documented'
            ]
          }
        },
        {
          heading: 'Operational Excellence',
          content: {
            sections: [
              {
                title: 'Technology & Systems',
                items: [
                  '□ Mobile app functioning properly',
                  '□ All staff logins active and secure',
                  '□ Software updates installed',
                  '□ Technical issues documented and resolved',
                  '□ Portal reports downloaded and reviewed'
                ]
              },
              {
                title: 'Marketing & Promotion',
                items: [
                  '□ POS materials in good condition',
                  '□ Financing promoted to all customers',
                  '□ Special promotions utilized',
                  '□ Online listings updated',
                  '□ Staff wearing promotional materials'
                ]
              }
            ]
          }
        },
        {
          heading: 'Financial Impact Analysis',
          content: {
            calculations: [
              'Additional revenue from financed sales: $_____',
              'Average order value increase: _____%',
              'Customers who wouldn\'t have purchased without financing: _____',
              'Repeat customer rate: _____%',
              'ROI on financing program: _____x'
            ]
          }
        },
        {
          heading: 'Action Items for Next Month',
          content: {
            planning: [
              '□ Top 3 improvement priorities identified:',
              '   1. _____________________',
              '   2. _____________________',
              '   3. _____________________',
              '□ Additional training scheduled for: _____',
              '□ Marketing initiatives planned: _____',
              '□ Staff incentives updated',
              '□ Customer outreach campaigns scheduled'
            ]
          }
        },
        {
          heading: 'Team Meeting Agenda',
          content: `Monthly EasyPay Finance Review Meeting:

1. Review performance metrics (10 min)
2. Celebrate top performers (5 min)
3. Discuss challenges and solutions (15 min)
4. Training refresher topic (10 min)
5. Set goals for next month (10 min)
6. Q&A and feedback (10 min)

Meeting Date: _____
Attendees: _____________________`
        },
        {
          heading: 'Success Strategies',
          content: [
            '✓ Offer financing to every customer',
            '✓ Lead with the monthly payment, not total cost',
            '✓ Present multiple financing options',
            '✓ Make the application process easy',
            '✓ Follow up with declined customers',
            '✓ Track and reward staff performance',
            '✓ Stay current with training'
          ]
        },
        {
          heading: 'Manager Sign-off',
          content: {
            fields: [
              'Month/Year: _____________________',
              'Reviewed by: _____________________',
              'Goals Met: □ Yes □ No □ Partially',
              'Overall Performance Rating: □ Excellent □ Good □ Needs Improvement',
              'Comments: _____________________',
              '_____________________',
              'Signature: _____________________',
              'Date: _____________________'
            ]
          }
        }
      ]
    }
  },
  {
    id: 8,
    content: {
      title: 'Customer Success Stories Collection',
      sections: [
        {
          heading: 'Real Customer Success Stories',
          content: 'These stories showcase how EasyPay Finance has helped real customers achieve their goals. Use these for marketing and staff motivation.'
        },
        {
          heading: 'Success Story #1: The Growing Family',
          content: `**Customer**: Maria & Jose Rodriguez, San Diego, CA
**Purchase**: $3,500 Living Room Furniture Set
**Program**: Lease-to-Own

"With our third baby on the way, we desperately needed new furniture but didn't have thousands saved up. The furniture store offered EasyPay Finance, and we were approved instantly even though our credit wasn't perfect. We chose weekly payments that matched my paycheck, and had everything paid off in 8 months. The kids love the new sectional, and we love that we could get what we needed when we needed it!"

**Merchant Impact**: Store made a $3,500 sale they would have lost. Customer has since returned for bedroom furniture.`
        },
        {
          heading: 'Success Story #2: The Small Business Owner',
          content: `**Customer**: David Chen, Phoenix, AZ
**Purchase**: $4,800 Commercial Restaurant Equipment
**Program**: Retail Installment Contract

"Opening my food truck was my dream, but equipment costs were overwhelming. My restaurant supply dealer told me about EasyPay Finance. I applied right there on their tablet and got approved for $5,000 in literally 2 minutes. The fixed monthly payments fit perfectly into my business plan, and I was cooking and earning money the very next day. That financing made my business possible."

**Merchant Impact**: Dealer completed a nearly $5K sale same-day. Customer has referred 3 other food truck operators.`
        },
        {
          heading: 'Success Story #3: The First-Time Homeowner',
          content: `**Customer**: Ashley Thompson, Las Vegas, NV
**Purchase**: $2,200 Washer, Dryer & Refrigerator
**Program**: 90-Day Same as Cash

"I just closed on my first house and needed appliances ASAP. My savings went to the down payment, but the appliance store had EasyPay financing. They approved me instantly, and I used the 90-day option. I paid it off in 60 days with my tax refund - only cost me $40 in fees! So much better than putting it on a credit card."

**Merchant Impact**: Sold entire appliance package instead of just one item. Customer bought extended warranties due to affordable payments.`
        },
        {
          heading: 'Success Story #4: The Auto Repair Emergency',
          content: `**Customer**: Robert Williams, Tucson, AZ
**Purchase**: $1,850 Transmission Repair
**Program**: Lease-to-Own

"My transmission went out right before Christmas. I thought I'd have to miss work until I could save up, but my mechanic offered EasyPay Finance. Even with my past bankruptcy, I got approved. I chose bi-weekly payments that were manageable, and kept my job because I could get to work. That financing option literally saved my family's Christmas."

**Merchant Impact**: Shop completed repair immediately instead of losing customer. Has since added 2 more bays due to increased business.`
        },
        {
          heading: 'Success Story #5: The Smart Shopper',
          content: `**Customer**: Jennifer & Mark Davis, Los Angeles, CA
**Purchase**: $4,200 Bedroom Set
**Program**: Retail Installment Contract

"We'd been saving for new bedroom furniture but weren't quite there yet. When we found the perfect set on sale, the store offered EasyPay Finance. We qualified for their financing program with great terms. Instead of depleting our emergency fund, we kept our savings intact and got the furniture at the sale price. The whole process took maybe 10 minutes!"

**Merchant Impact**: Captured sale during promotional period. Couple purchased additional items due to available financing.`
        },
        {
          heading: 'Using Success Stories',
          content: {
            tips: [
              '• Share relevant stories during customer interactions',
              '• Post testimonials in waiting areas',
              '• Include in marketing materials',
              '• Use for staff training and motivation',
              '• Reference similar situations to build trust',
              '• Always protect customer privacy when sharing'
            ]
          }
        },
        {
          heading: 'Collecting Your Own Success Stories',
          content: `Build your own collection:

1. **Ask satisfied customers** to share their experience
2. **Document the impact** on their lives
3. **Get written permission** to use their story
4. **Track merchant benefits** (sales, referrals, repeat business)
5. **Share with EasyPay** at MerchantServices@easypayfinance.com

Your success stories could be featured in future marketing materials!`
        },
        {
          heading: 'Key Themes in Success Stories',
          content: [
            '✓ Instant approval process',
            '✓ Flexible payment options',
            '✓ No credit needed alternatives',
            '✓ Helping in emergency situations',
            '✓ Making dreams possible',
            '✓ Building customer loyalty',
            '✓ Growing merchant revenue'
          ]
        }
      ]
    }
  }
]

export function getResourceContent(id: number): ResourceContent | undefined {
  return resourceContents.find(content => content.id === id)
}