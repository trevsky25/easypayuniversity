# EasyPay University Compliance Reference Guide
## Complete Compliance Framework for Claude Code Development

*This document serves as the authoritative compliance reference for all EasyPay University content development. Claude Code should reference this document when creating, reviewing, or modifying any training materials, user interfaces, or educational content.*

---

## 🚨 CRITICAL COMPLIANCE ALERT
**This document contains legally required guidelines. All content MUST comply with these standards to avoid regulatory violations, consumer harm, and legal liability.**

### ⚠️ CRITICAL STATE RESTRICTIONS
- **19 states offer RIC ONLY** (AK, AZ, CA, DE, ID, KS, KY, MO, NV, NH, NM, ND, OR, PA, SD, UT, VA, WA, WI)
- **3 states offer LTO ONLY** (TX, FL, GA)
- **NO state offers both products - it's always one OR the other**
- **EasyPay does not operate in 28 states + D.C.**

### 📍 IMMEDIATE ACTION REQUIRED
**Before creating ANY content, you MUST:**
1. Identify the target state
2. Verify EasyPay operates there (only 22 states)
3. Determine if state offers RIC or LTO (never both)
4. Use ONLY the appropriate product content for that state

---

## Table of Contents
1. [State Product Map - CRITICAL REFERENCE](#state-product-map---critical-reference)
2. [Executive Summary](#executive-summary)
3. [Critical Compliance Principles](#critical-compliance-principles)
4. [Product-Specific Guidelines](#product-specific-guidelines)
5. [Prohibited Practices](#prohibited-practices)
6. [Compliant vs Non-Compliant Examples](#compliant-vs-non-compliant-examples)
7. [Regulatory Framework](#regulatory-framework)
8. [State-Specific Requirements](#state-specific-requirements)
9. [Content Development Rules](#content-development-rules)
10. [Quick Reference Tables](#quick-reference-tables)
11. [Implementation Checklist](#implementation-checklist)

---

## State Product Map - CRITICAL REFERENCE

### 🗺️ EASYPAY OPERATES IN ONLY 22 STATES

| Product Type | States | Count | Training Focus |
|-------------|--------|-------|----------------|
| **RIC ONLY** | AK, AZ, CA, DE, ID, KS, KY, MO, NV, NH, NM, ND, OR, PA, SD, UT, VA, WA, WI | 19 | Credit/Finance/APR terminology |
| **LTO ONLY** | FL, GA, TX | 3 | Lease/Rental/EPO terminology |
| **NO SERVICE** | AL, AR, CO, CT, HI, IL, IN, IA, LA, ME, MD, MA, MI, MN, MS, MT, NE, NJ, NY, NC, OH, OK, RI, SC, TN, VT, WV, WY, DC | 29 | "Not Available" messaging |

### ⚠️ ABSOLUTE RULES
1. **NO state has both products** - It's always one OR the other
2. **Product is determined by state** - State dictates everything
3. **Never mix content** - RIC and LTO training must be completely separate
4. **Majority of U.S. not covered** - 29 jurisdictions have no EasyPay services

---

## Executive Summary

EasyPay operates ONE distinct financial product per state:
1. **Retail Installment Contracts (RIC)** - Credit sales agreements in 19 states
2. **Lease-to-Own (LTO)** - Rental-purchase agreements in 3 states

**CRITICAL: No state offers both products. Each state has EITHER RIC or LTO, never both.**

### Geographic Coverage
- **RIC States**: AK, AZ, CA, DE, ID, KS, KY, MO, NV, NH, NM, ND, OR, PA, SD, UT, VA, WA, WI (19 total)
- **LTO States**: TX, FL, GA (3 total)
- **Non-Operating**: 28 states + Washington D.C.

### Key Legal Framework
- **Federal Laws**: Truth in Lending Act (TILA) for RIC only, UDAAP provisions for all products
- **State Laws**: Varying requirements based on product type
- **Regulatory Bodies**: CFPB, state departments of financial protection

---

## Critical Compliance Principles

### 1. One Product Per State - ABSOLUTE RULE
```
Each state offers EITHER RIC or LTO, NEVER both
- 18 states = RIC ONLY
- 3 states = LTO ONLY  
- 29 states + DC = No operations
```

### 2. Product Distinction is Paramount
- **NEVER** use loan/credit terminology for Lease-to-Own (LTO) products
- **NEVER** use lease/rental terminology for Retail Installment Contracts (RIC)
- **NEVER** mention "our other product" since no state has both

### 3. State Verification is Mandatory
- **ALWAYS** check state before displaying ANY content
- **ALWAYS** validate product matches state
- **ALWAYS** show "not available" for non-operating states

### 4. Accuracy Over Marketing
- Legal accuracy ALWAYS takes precedence over marketing appeal
- Never simplify if it changes legal meaning
- Use exact contract language when possible

### 5. No Cross-Product References
- Training for RIC states should NEVER mention LTO
- Training for LTO states should NEVER mention RIC
- Each state's training is completely independent

---

## Product-Specific Guidelines

### RETAIL INSTALLMENT CONTRACTS (RIC)

#### Approved Terminology
| ✅ USE THIS | Context |
|-------------|---------|
| Retail Installment Contract | Product name |
| Finance charges | Interest costs |
| Amount financed | Principal amount |
| Annual Percentage Rate (APR) | Interest rate |
| 90-Day Finance Charge Cap Promotion | Promotional offer |
| Credit sales agreement | Contract type |
| Truth in Lending disclosures | Required disclosures |

#### Prohibited Terminology
| ❌ NEVER USE | Why It's Prohibited |
|--------------|-------------------|
| Same as cash | Implies no additional cost |
| No interest / Interest-free | Finance charges always accrue |
| Deferred interest | Charges accrue from day one |
| 90-Day Same-as-Cash | Misleading promotion description |
| Free financing | Nothing is free |
| Grace period | No period without charges |
| Soft credit check only | Hard inquiries may occur |

#### Critical RIC Compliance Points

##### Finance Charge Cap Promotion (FCCP)
```markdown
REQUIRED DISCLOSURE TEMPLATE:
"Finance charges accrue daily from the date the agreement is signed.
There is NEVER a finance charge 'free' period.
If you pay your amount financed within 90 days, finance charges are capped at $40.
To qualify: You MUST pay more than regular scheduled payments.
Regular payments alone will NOT satisfy FCCP requirements."
```

##### Credit Check Disclosure
```markdown
ACCURATE STATEMENT:
"'No Credit Needed' means no minimum credit score required.
However, EasyPay may perform hard credit inquiries.
Credit history is one factor in approval decisions."
```

### LEASE-TO-OWN (LTO)

#### Approved Terminology
| ✅ USE THIS | Context |
|-------------|---------|
| Lease-to-Own | Product name |
| Rental-Purchase Agreement | Contract type |
| Lease payments | Payment type |
| Early Purchase Option (EPO) | Buyout option |
| Personal Property | Leased items |
| Cash Price | Base cost |
| Cost of Rental | Additional cost over cash price |
| Processing Fee | One-time fee |
| Regular Payments | Scheduled payments |

#### Prohibited Terminology
| ❌ NEVER USE | Why It's Prohibited |
|--------------|-------------------|
| Loan / Lending | LTO is not a credit product |
| Interest / Finance charges | These terms don't apply to leases |
| Credit / Financing | Mischaracterizes the product |
| Borrower / Lender | Wrong relationship type |
| Principal | No principal in a lease |
| APR | Doesn't apply to leases |
| Discount | EPO is not a discount |
| Build credit | LTO doesn't report to bureaus |

#### Critical LTO Compliance Points

##### Ownership Structure
```markdown
MUST EXPLAIN:
1. EasyPay Leasing purchases merchandise from merchant
2. EasyPay Leasing owns the Personal Property
3. Customer leases (rents) the Personal Property
4. Ownership transfers only after:
   - All lease payments completed, OR
   - Early Purchase Option exercised
```

##### Tax Handling Process
```markdown
CRITICAL PROCESS:
1. Merchant lists EasyPay Leasing as purchaser
2. Merchant uses EasyPay's tax-exempt ID
3. NO sales tax charged at point of sale
4. EasyPay Leasing collects tax through lease payments
5. Estimated tax shown on page 2 of lease agreement
```

##### Early Purchase Options
```markdown
90-DAY EPO REQUIREMENTS:
- Cash Price
- Plus: $39 Processing Fee  
- Plus: Applicable taxes
- Plus: Any outstanding fees
- Must pay EXTRA beyond regular payments

STANDARD EPO FORMULA:
(Remaining Regular Payments × 70%) + fees + taxes
Available after 90-day period
```

---

## Prohibited Practices

### Universal Prohibitions - NEVER Use These

#### Phrases That Violate Compliance
1. **"Same as Cash"** - Implies no additional cost when costs exist
2. **"No Interest"** or **"Interest-Free"** - Finance charges/rental costs always apply
3. **"Deferred Interest/Charges"** - Charges accrue from day one
4. **"Build/Fix/Improve Your Credit"** - Neither product reports to credit bureaus
5. **"Guaranteed Approval"** - All applications subject to underwriting
6. **"No Credit Check"** - Credit checks may be performed
7. **"Everyone Qualifies"** - Not everyone will be approved
8. **"No Hidden Fees"** - Implies others might hide fees
9. **"Better than [Competitor]"** - Comparative claims risk legal action
10. **"Free Period"** - No period without charges/costs

#### Actions That Violate Compliance
- Using store email/phone for customer applications
- Signing on customer's behalf
- Rushing the signing process
- Hiding or minimizing disclosures
- Making verbal promises not in writing
- Stacking multiple financing options
- Collecting sales tax on LTO transactions
- Promoting products for credit building

---

## Compliant vs Non-Compliant Examples

### Example 1: Finance Charge Cap Promotion (RIC)

#### ❌ NON-COMPLIANT VERSION:
```
"Enjoy 90 days with no interest! Our same-as-cash promotion 
means you pay nothing extra for three months!"
```
**Violations**: Claims no interest, uses "same-as-cash", implies no charges

#### ✅ COMPLIANT VERSION:
```
"Finance charges accrue daily from your agreement date. 
With our 90-Day Finance Charge Cap Promotion, if you pay 
your entire amount financed within 90 days, finance charges 
are capped at $40. You must pay more than regular scheduled 
payments to qualify for this promotion."
```

### Example 2: Credit Requirements

#### ❌ NON-COMPLIANT VERSION:
```
"Bad credit? No credit? No problem! We don't check credit 
and everyone gets approved instantly!"
```
**Violations**: False no credit check claim, guaranteed approval

#### ✅ COMPLIANT VERSION:
```
"No Credit Needed means no minimum credit score is required. 
We may perform credit checks as part of our approval process. 
Approval is based on multiple factors including income and 
banking history."
```

### Example 3: LTO Ownership

#### ❌ NON-COMPLIANT VERSION:
```
"Finance your purchase with no interest through our leasing 
program. You own it while making affordable payments!"
```
**Violations**: Calls lease "financing", claims "no interest", says customer owns during lease

#### ✅ COMPLIANT VERSION:
```
"With Lease-to-Own, EasyPay Leasing purchases and owns the 
merchandise. You lease it from us and can acquire ownership by 
completing all lease payments or exercising an Early Purchase 
Option. This is a lease, not a loan."
```

### Example 4: Early Purchase Options

#### ❌ NON-COMPLIANT VERSION:
```
"Get a huge discount with our 90-day same-as-cash option! 
Just make your regular payments for 90 days!"
```
**Violations**: "Same-as-cash", calls it "discount", wrong payment requirement

#### ✅ COMPLIANT VERSION:
```
"The 90-Day Early Purchase Option lets you acquire ownership 
by paying the Cash Price plus $39 processing fee, taxes, and 
any fees within 90 days. You must pay MORE than regular 
payments - either larger payments or additional lump sums."
```

### Example 5: Tax Collection (LTO)

#### ❌ NON-COMPLIANT VERSION:
```
"You'll pay sales tax at checkout, which we'll include in 
your monthly lease payment for convenience."
```
**Violations**: Says customer pays tax at checkout

#### ✅ COMPLIANT VERSION:
```
"No sales tax is collected at checkout. EasyPay Leasing 
purchases the item tax-exempt. We calculate and collect 
applicable sales tax as part of your lease payments. 
See page 2 of your lease for estimated tax amounts."
```

---

## Regulatory Framework

### Federal Requirements

#### Truth in Lending Act (TILA) - RIC Products Only
**Required Disclosures:**
- Annual Percentage Rate (APR)
- Finance Charge (dollar amount)
- Amount Financed
- Total of Payments
- Payment Schedule
- Total Sale Price

**Timing Requirements:**
- Must be provided BEFORE signing
- Must be clear and conspicuous
- Must use required terminology

#### UDAAP - Unfair, Deceptive, or Abusive Acts or Practices
**Applies to ALL products**

**UNFAIR Standard:**
- Causes or likely to cause substantial injury
- Injury not reasonably avoidable by consumers
- Not outweighed by benefits to consumers

**DECEPTIVE Standard:**
- Representation, omission, or practice misleads
- Likely to mislead reasonable consumers
- Material to consumer's decision

**ABUSIVE Standard:**
- Materially interferes with understanding terms
- Takes unreasonable advantage of:
  - Lack of understanding
  - Inability to protect interests
  - Reasonable reliance on company

### Key Enforcement Patterns
Based on CFPB actions, common violations include:
- Hiding true costs in fine print
- Misrepresenting payment obligations
- False advertising about credit building
- Deceptive collection practices
- Steering consumers to worse products

---

## State-Specific Requirements

### Product Availability by State - CORRECT BREAKDOWN

#### ⚠️ CRITICAL: NO STATE OFFERS BOTH PRODUCTS
**Every state has EITHER RIC or LTO, never both**

#### States Offering RIC ONLY (Retail Installment Contracts)
| State | Product | Special Requirements |
|-------|---------|---------------------|
| Alaska (AK) | RIC ONLY | Standard RIC compliance |
| Arizona (AZ) | RIC ONLY | Standard RIC compliance |
| California (CA) | RIC ONLY | California Financing Law, enhanced DFPI requirements |
| Delaware (DE) | RIC ONLY | Standard RIC compliance |
| Idaho (ID) | RIC ONLY | Standard RIC compliance |
| Kansas (KS) | RIC ONLY | Standard RIC compliance |
| Kentucky (KY) | RIC ONLY | Standard RIC compliance |
| Missouri (MO) | RIC ONLY | Standard RIC compliance |
| Nevada (NV) | RIC ONLY | Standard RIC compliance |
| New Hampshire (NH) | RIC ONLY | Standard RIC compliance |
| New Mexico (NM) | RIC ONLY | Standard RIC compliance |
| North Dakota (ND) | RIC ONLY | Standard RIC compliance |
| Oregon (OR) | RIC ONLY | Standard RIC compliance |
| Pennsylvania (PA) | RIC ONLY | Standard RIC compliance |
| South Dakota (SD) | RIC ONLY | Standard RIC compliance |
| Utah (UT) | RIC ONLY | Standard RIC compliance |
| Virginia (VA) | RIC ONLY | Standard RIC compliance |
| Washington (WA) | RIC ONLY | Standard RIC compliance |
| Wisconsin (WI) | RIC ONLY | Standard RIC compliance |

**Total RIC States: 19**

#### States Offering LTO ONLY (Lease-to-Own)
| State | Product | Special Requirements |
|-------|---------|---------------------|
| Florida (FL) | LTO ONLY | Must follow rental-purchase laws |
| Georgia (GA) | LTO ONLY | Must follow rental-purchase laws |
| Texas (TX) | LTO ONLY | Must follow rental-purchase laws |

**Total LTO States: 3**

#### States Where EasyPay Does NOT Operate
| State | Status |
|-------|--------|
| Alabama (AL) | No Operations |
| Arkansas (AR) | No Operations |
| Colorado (CO) | No Operations |
| Connecticut (CT) | No Operations |
| Hawaii (HI) | No Operations |
| Illinois (IL) | No Operations |
| Indiana (IN) | No Operations |
| Iowa (IA) | No Operations |
| Louisiana (LA) | No Operations |
| Maine (ME) | No Operations |
| Maryland (MD) | No Operations |
| Massachusetts (MA) | No Operations |
| Michigan (MI) | No Operations |
| Minnesota (MN) | No Operations |
| Mississippi (MS) | No Operations |
| Montana (MT) | No Operations |
| Nebraska (NE) | No Operations |
| New Jersey (NJ) | No Operations |
| New York (NY) | No Operations |
| North Carolina (NC) | No Operations |
| Ohio (OH) | No Operations |
| Oklahoma (OK) | No Operations |
| Rhode Island (RI) | No Operations |
| South Carolina (SC) | No Operations |
| Tennessee (TN) | No Operations |
| Vermont (VT) | No Operations |
| Washington D.C. | No Operations |
| West Virginia (WV) | No Operations |
| Wyoming (WY) | No Operations |

**Total Non-Operating States/Territories: 28 states + D.C.**

### CRITICAL STATE-SPECIFIC IMPLEMENTATION RULES

#### For Development Teams:
```javascript
// CORRECT State product availability configuration
const stateProductAvailability = {
  // RIC-ONLY states - NEVER show LTO options
  'AK': { product: 'RIC', active: true },
  'AZ': { product: 'RIC', active: true },
  'CA': { product: 'RIC', active: true },
  'DE': { product: 'RIC', active: true },
  'ID': { product: 'RIC', active: true },
  'KS': { product: 'RIC', active: true },
  'KY': { product: 'RIC', active: true },
  'MO': { product: 'RIC', active: true },
  'NV': { product: 'RIC', active: true },
  'NH': { product: 'RIC', active: true },
  'NM': { product: 'RIC', active: true },
  'ND': { product: 'RIC', active: true },
  'OR': { product: 'RIC', active: true },
  'PA': { product: 'RIC', active: true },
  'SD': { product: 'RIC', active: true },
  'UT': { product: 'RIC', active: true },
  'VA': { product: 'RIC', active: true },
  'WA': { product: 'RIC', active: true },
  'WI': { product: 'RIC', active: true },
  
  // LTO-ONLY states - NEVER show RIC options
  'FL': { product: 'LTO', active: true },
  'GA': { product: 'LTO', active: true },
  'TX': { product: 'LTO', active: true },
  
  // All other states - NO OPERATIONS
  'DEFAULT': { product: null, active: false }
};

// Product display logic - CORRECTED
function getAvailableProduct(stateCode) {
  const availability = stateProductAvailability[stateCode];
  
  if (!availability || !availability.active) {
    throw new Error(`EasyPay does not operate in ${stateCode}`);
  }
  
  // CRITICAL: Only ONE product per state
  console.log(`${stateCode} offers ${availability.product} ONLY`);
  
  return availability.product;
}

// Content validation - CORRECTED
function validateContentForState(content, stateCode) {
  const stateProduct = getAvailableProduct(stateCode);
  
  if (stateProduct === 'RIC') {
    // Check for LTO terms in RIC state
    const ltoTerms = ['lease', 'rental', 'LTO', 'Early Purchase Option', 
                      'EPO', 'Personal Property', 'Cost of Rental'];
    for (const term of ltoTerms) {
      if (content.includes(term)) {
        throw new Error(`LTO term "${term}" found in RIC-only state ${stateCode}`);
      }
    }
  } else if (stateProduct === 'LTO') {
    // Check for RIC terms in LTO state
    const ricTerms = ['RIC', 'finance charge', 'APR', 'interest', 
                     'FCCP', 'Truth in Lending', 'credit agreement'];
    for (const term of ricTerms) {
      if (content.includes(term)) {
        throw new Error(`RIC term "${term}" found in LTO-only state ${stateCode}`);
      }
    }
  }
  
  return content;
}
```

### State-Specific Training Content Requirements

#### RIC-ONLY States (19 states)
**MANDATORY REQUIREMENTS:**
- Remove ALL references to LTO products
- Remove ALL lease terminology
- Remove ALL Early Purchase Option content
- Focus EXCLUSIVELY on Retail Installment Contracts
- Include TILA disclosures
- Include APR and finance charge information

#### LTO-ONLY States (FL, GA, TX)
**MANDATORY REQUIREMENTS:**
- Remove ALL references to RIC products
- Remove ALL finance charge terminology
- Remove ALL APR discussions
- Remove ALL Truth in Lending references
- Focus EXCLUSIVELY on lease-to-own
- Include Early Purchase Option information

#### Non-Operating States
**MANDATORY REQUIREMENTS:**
- Display clear message: "EasyPay Finance services are not currently available in your state"
- Do NOT show any product information
- Do NOT allow applications
- Provide contact information for questions

### Special State Considerations

##### California (RIC ONLY)
- **Product**: Retail Installment Contracts ONLY
- **No LTO**: Lease-to-Own NOT available
- **Regulation**: California Financing Law (CFL)
- **Oversight**: Department of Financial Protection and Innovation (DFPI)
- **Special Requirements**: 
  - Enhanced disclosure requirements
  - Strict UDAAP enforcement
  - Additional consumer protections
- **Licensing**: Must be licensed under CFL

##### Texas (LTO ONLY)
- **Product**: Lease-to-Own ONLY
- **No RIC**: Retail Installment Contracts NOT available
- **Regulation**: Texas rental-purchase laws
- **Special Requirements**:
  - Must follow rental-purchase agreement requirements
  - Specific disclosure requirements for LTO
  - Cannot use credit/loan terminology

##### Florida (LTO ONLY)
- **Product**: Lease-to-Own ONLY
- **No RIC**: Retail Installment Contracts NOT available
- **Regulation**: Florida rental-purchase laws
- **Special Requirements**:
  - Must comply with rental-purchase statutes
  - Specific consumer protection provisions
  - Clear ownership disclosure requirements

##### Key Multi-State Compliance Notes
- **No Mixed Products**: No state offers both RIC and LTO
- **Clear Separation**: Training must be state-specific
- **No Cross-References**: Never mention "our other product" since each state has only one

---

## Content Development Rules

### For Claude Code Implementation

#### File Structure Requirements
```
/training-content/
  /ric-products/      # ONLY for RIC states
    /states/          # AK, AZ, CA, DE, ID, KS, KY, MO, NV, NH, NM, ND, OR, PA, SD, UT, VA, WA, WI
  /lto-products/      # ONLY for LTO states
    /states/          # TX, FL, GA only
  /state-specific/    
    /ric-states/      # 19 states
    /lto-states/      # 3 states
    /no-service/      # 28 states + DC
  /disclosures/       # Required disclosures
  /examples/          # Compliant examples only
```

#### State Validation Requirements
```javascript
// CRITICAL: Define state lists correctly
const RIC_ONLY_STATES = ['AK', 'AZ', 'CA', 'DE', 'ID', 'KS', 'KY', 'MO', 
                         'NV', 'NH', 'NM', 'ND', 'OR', 'PA', 'SD', 
                         'UT', 'VA', 'WA', 'WI'];
const LTO_ONLY_STATES = ['FL', 'GA', 'TX'];

function validateProductForState(productType, stateCode) {
  // Check if we operate in this state at all
  if (!RIC_ONLY_STATES.includes(stateCode) && 
      !LTO_ONLY_STATES.includes(stateCode)) {
    throw new Error(`EasyPay does not operate in ${stateCode}`);
  }
  
  // Check if correct product for state
  if (productType === 'RIC' && !RIC_ONLY_STATES.includes(stateCode)) {
    throw new Error(`RIC products not available in ${stateCode}`);
  }
  
  if (productType === 'LTO' && !LTO_ONLY_STATES.includes(stateCode)) {
    throw new Error(`LTO products not available in ${stateCode}`);
  }
  
  return true;
}

// Content display logic
function displayProductContent(stateCode) {
  // Determine which product to show based on state
  if (RIC_ONLY_STATES.includes(stateCode)) {
    return getRICContent(stateCode);
  } else if (LTO_ONLY_STATES.includes(stateCode)) {
    return getLTOContent(stateCode);
  } else {
    return getNoServiceMessage(stateCode);
  }
}

// State-specific content filtering
function filterContentForState(content, stateCode) {
  if (RIC_ONLY_STATES.includes(stateCode)) {
    // Remove any LTO references
    const ltoTerms = ['LTO', 'lease', 'rental', 'Early Purchase Option', 
                     'EPO', 'Personal Property', 'Cost of Rental'];
    
    for (const term of ltoTerms) {
      if (content.includes(term)) {
        console.error(`COMPLIANCE VIOLATION: LTO term "${term}" found in RIC-only state ${stateCode}`);
        throw new Error('Invalid content for state');
      }
    }
  } else if (LTO_ONLY_STATES.includes(stateCode)) {
    // Remove any RIC references
    const ricTerms = ['RIC', 'finance charge', 'APR', 'interest', 
                     'credit', 'FCCP', 'Truth in Lending'];
    
    for (const term of ricTerms) {
      if (content.includes(term)) {
        console.error(`COMPLIANCE VIOLATION: RIC term "${term}" found in LTO-only state ${stateCode}`);
        throw new Error('Invalid content for state');
      }
    }
  }
  return content;
}
```

#### Code Comments Required
```javascript
// COMPLIANCE: This section explains RIC finance charges
// STATE CHECK: Only display in RIC states (19 states)
// LEGAL REQUIREMENT: Must include APR disclosure
// STATE SPECIFIC: California requires additional disclosure
// PROHIBITED: Never use "same as cash" terminology
// LTO-ONLY STATE: Only TX, FL, GA offer LTO
// RIC-ONLY STATE: 19 states offer RIC only
// NO SERVICE: Show unavailable message for 28 states + DC
```

#### Validation Rules
```javascript
// Content must not contain prohibited terms
const prohibitedTerms = [
  'same as cash',
  'no interest',
  'interest-free',
  'build credit',
  'guaranteed approval',
  'no credit check',
  'everyone qualifies'
];

// Validate all user-facing content
function validateContent(content) {
  for (const term of prohibitedTerms) {
    if (content.toLowerCase().includes(term)) {
      throw new Error(`Prohibited term detected: "${term}"`);
    }
  }
}
```

#### Required Metadata
```javascript
// Every content module must include:
const contentMetadata = {
  productType: 'RIC' | 'LTO',  // REQUIRED
  stateSpecific: ['CA', 'TX'], // If applicable
  lastLegalReview: '2024-01-15', // REQUIRED
  version: '1.0.0',             // REQUIRED
  complianceNotes: [],          // Any special requirements
};
```

### UI/UX Compliance Requirements

#### Disclosure Prominence
```css
/* Disclosures must be equally prominent */
.promotion-text {
  font-size: 16px;
  font-weight: bold;
}

.disclosure-text {
  font-size: 16px;  /* Same size as promotion */
  font-weight: bold; /* Same weight as promotion */
}

/* NEVER use these for disclosures */
.hidden { display: none; } /* Prohibited */
.tiny-text { font-size: 8px; } /* Too small */
.light-gray { color: #f0f0f0; } /* Not conspicuous */
```

#### Required Proximity
```html
<!-- Disclosures must be NEAR related claims -->
<div class="promotion">
  <h3>90-Day Finance Charge Cap!</h3>
  <!-- Disclosure IMMEDIATELY follows claim -->
  <p class="disclosure">
    Finance charges accrue from day one. Must pay in 
    full within 90 days. See terms for details.
  </p>
</div>
```

#### Form Validation
```javascript
// Prevent form submission without acknowledgments
function validateApplicationForm() {
  const requirements = [
    'acknowledgedCreditCheck',
    'acknowledgedTermsReview',
    'acknowledgedNotCreditBuilding',
    'confirmedAge18Plus'
  ];
  
  for (const req of requirements) {
    if (!formData[req]) {
      return {
        valid: false,
        error: `Must acknowledge: ${req}`
      };
    }
  }
}
```

---

## Quick Reference Tables

### State Product Availability - Quick Check

#### 📍 RIC-ONLY STATES (19 states)
```
Alaska (AK)         Arizona (AZ)        California (CA)
Delaware (DE)       Idaho (ID)          Kansas (KS)
Kentucky (KY)       Missouri (MO)       Nevada (NV)
New Hampshire (NH)  New Mexico (NM)     North Dakota (ND)
Oregon (OR)         Pennsylvania (PA)   South Dakota (SD)
Utah (UT)           Virginia (VA)       Washington (WA)
Wisconsin (WI)
```

#### 📍 LTO-ONLY STATES (3 states)
```
Florida (FL)        Georgia (GA)        Texas (TX)
```

#### ❌ NO SERVICE STATES (28 states + D.C.)
```
All other states and Washington D.C.
EasyPay does not currently operate in these locations
```

### CRITICAL PRODUCT RULES
```
✅ NEVER offer both products in the same state
✅ ALWAYS verify state before showing ANY product
✅ NEVER mention the "other" product in training
✅ ALWAYS show "not available" message for non-operating states
```

### RIC Quick Reference (19 STATES ONLY)
**Available in: AK, AZ, CA, DE, ID, KS, KY, MO, NV, NH, NM, ND, OR, PA, SD, UT, VA, WA, WI**

| Element | Requirement | Example |
|---------|------------|---------|
| Product Name | Retail Installment Contract | "Apply for RIC financing" |
| Interest Term | Finance charges | "Finance charges apply" |
| Rate Disclosure | APR must be shown | "18.99% APR" |
| FCCP Period | 90 days from signing | "90-day promotion" |
| FCCP Cap | $40 maximum | "Charges capped at $40" |
| Credit Check | May perform hard inquiry | "Credit check may occur" |
| Credit Building | Does NOT build credit | "Not reported to bureaus" |

### LTO Quick Reference (3 STATES ONLY)
**Available in: FL, GA, TX ONLY**

| Element | Requirement | Example |
|---------|------------|---------|
| Product Name | Lease-to-Own | "Lease-to-Own program" |
| Payment Term | Lease payments | "Monthly lease payments" |
| Interest Term | NEVER use interest/APR | "Cost of rental" |
| Ownership | EasyPay Leasing owns | "We own until paid" |
| Tax Collection | Merchant doesn't collect | "Tax in lease payments" |
| 90-Day EPO | Cash price + $39 + tax | "Pay cash price + fees" |
| Credit Check | May check credit | "Credit may be checked" |
| Credit Building | Does NOT build credit | "Not reported to bureaus" |

### Prohibited Terms - Quick Check

| ❌ If You Write This | ✅ Replace With This |
|---------------------|-------------------|
| Same as cash | Finance Charge Cap Promotion |
| No interest | Finance charges apply from day one |
| Interest-free period | Charges capped at $40 if paid in 90 days |
| Build your credit | Not reported to credit bureaus |
| No credit check | May perform credit checks |
| Guaranteed approval | Subject to approval |
| Discount | Early Purchase Option |
| You own it | You lease it (for LTO) |
| Loan | Lease agreement (for LTO) |
| Free | Reduced charges / Capped charges |

---

## Implementation Checklist

### Pre-Development Checklist
- [ ] Identify target state(s)
- [ ] Verify EasyPay operates in state (only 21 states active)
- [ ] Identify single product type for state (RIC OR LTO)
- [ ] Confirm state in correct product list
- [ ] Review state-specific requirements
- [ ] Ensure NO mixed product content
- [ ] Set up state-based validation

### State Validation Checklist
- [ ] Implement state detection
- [ ] Block wrong product for state (RIC in LTO states, LTO in RIC states)
- [ ] Block all products for non-operating states
- [ ] Add state validation to all forms
- [ ] Test state-specific content display
- [ ] Verify error messages for wrong state/product
- [ ] Document state restrictions in UI
- [ ] Show "not available" for 29 states + DC

### Content Creation Checklist
- [ ] Use only approved terminology
- [ ] Include all required disclosures
- [ ] Place disclosures prominently
- [ ] Add state-specific requirements
- [ ] Validate against prohibited terms
- [ ] Include version and review date

### Pre-Publication Checklist
- [ ] Run prohibited term checker
- [ ] Verify disclosure prominence
- [ ] Confirm calculation accuracy
- [ ] Test form validations
- [ ] Document legal review
- [ ] Tag with compliance metadata

### Post-Publication Checklist
- [ ] Monitor for user confusion
- [ ] Track compliance questions
- [ ] Schedule periodic review
- [ ] Update for regulation changes
- [ ] Maintain audit trail

---

## Development Best Practices

### Component Architecture
```javascript
// Create state-specific components - NEVER mix products
const StateRouter = ({ stateCode }) => {
  // Determine product based on state
  const RIC_STATES = ['AK', 'AZ', 'CA', 'DE', 'ID', 'KS', 'KY', 'MO', 
                      'NV', 'NH', 'NM', 'ND', 'OR', 'PA', 'SD', 
                      'UT', 'VA', 'WA', 'WI'];
  const LTO_STATES = ['FL', 'GA', 'TX'];
  
  if (RIC_STATES.includes(stateCode)) {
    return <RICComponent state={stateCode} />;
  } else if (LTO_STATES.includes(stateCode)) {
    return <LTOComponent state={stateCode} />;
  } else {
    return <NotAvailableComponent state={stateCode} />;
  }
};

const RICComponent = ({ state }) => {
  // RIC-specific logic only
  // Never reference LTO
};

const LTOComponent = ({ state }) => {
  // LTO-specific logic only
  // Never reference RIC
};

const NotAvailableComponent = ({ state }) => {
  return (
    <div>
      <h2>Service Not Available</h2>
      <p>EasyPay Finance services are not currently available in {state}.</p>
      <p>We currently operate in 22 states. Please check if you're in an eligible location.</p>
    </div>
  );
};

// ❌ NEVER create mixed components
const FinancingComponent = () => {
  // WRONG - Don't create universal components
};
```

### Error Messages
```javascript
// Compliant error messages
const errorMessages = {
  creditCheck: "Your application requires additional review.",
  // NOT: "You failed the credit check"
  
  notApproved: "We're unable to approve your application at this time.",
  // NOT: "You've been rejected"
  
  missingInfo: "Please provide all required information.",
  // NOT: "Your credit is too bad"
  
  // State-specific error messages
  productNotAvailable: "This product is not available in your state.",
  // NOT: "RIC not offered in LTO states" (too specific)
  
  stateNotServiced: "EasyPay Finance does not currently operate in your state.",
  // NOT: "Your state is not supported"
  
  wrongProductForState: (state) => {
    const RIC_STATES = ['AZ', 'CA', 'DE', 'ID', 'KS', 'KY', 'MO', 
                        'NV', 'NH', 'NM', 'ND', 'OR', 'PA', 'SD', 
                        'UT', 'VA', 'WA', 'WI'];
    const LTO_STATES = ['FL', 'GA', 'TX'];
    
    if (RIC_STATES.includes(state)) {
      return "Retail Installment Contracts are available in your state.";
    } else if (LTO_STATES.includes(state)) {
      return "Lease-to-Own options are available in your state.";
    } else {
      return "EasyPay Finance services are not available in your state.";
    }
  }
};

// State violation handlers
const stateViolationHandlers = {
  ricInLTOState: (state) => {
    console.error(`COMPLIANCE VIOLATION: Attempted to show RIC in LTO-only state ${state}`);
    // Log to compliance monitoring
    // Redirect to LTO options
    return "Please explore our Lease-to-Own options available in your state.";
  },
  
  ltoInRICState: (state) => {
    console.error(`COMPLIANCE VIOLATION: Attempted to show LTO in RIC-only state ${state}`);
    // Log to compliance monitoring
    // Redirect to RIC options
    return "Please explore our Retail Installment Contract options available in your state.";
  },
  
  invalidState: (state) => {
    console.error(`Service not available in ${state}`);
    // Alert sales team for potential expansion
    return "We're not currently available in your area, but we're growing! Check back soon.";
  }
};
```

### Data Handling
```javascript
// Separate data models - NEVER mix products
const RICApplication = {
  productType: 'RIC',
  availableStates: ['AZ', 'CA', 'DE', 'ID', 'KS', 'KY', 'MO', 
                    'NV', 'NH', 'NM', 'ND', 'OR', 'PA', 'SD', 
                    'UT', 'VA', 'WA', 'WI'],
  amountFinanced: 0,
  apr: 0,
  financeCharge: 0,
  // RIC-specific fields only
};

const LTOApplication = {
  productType: 'LTO',
  availableStates: ['FL', 'GA', 'TX'],
  cashPrice: 0,
  processingFee: 39,
  rentalPayments: [],
  // LTO-specific fields only
};

// State-based product routing
function getApplicationTypeForState(stateCode) {
  if (RICApplication.availableStates.includes(stateCode)) {
    return 'RIC';
  } else if (LTOApplication.availableStates.includes(stateCode)) {
    return 'LTO';
  } else {
    return null; // State not serviced
  }
}
```

---

## Compliance Contacts & Resources

### Internal Escalation Path
1. First: Check this document
2. Second: Review actual contracts
3. Third: Contact legal/compliance team
4. Fourth: Pause development if uncertain

### Regulatory Resources
- CFPB: www.consumerfinance.gov
- TILA Regulations: Regulation Z
- State Resources:
  - CA: Department of Financial Protection and Innovation
  - TX: Office of Consumer Credit Commissioner
  - FL: Office of Financial Regulation

### Red Flags Requiring Immediate Legal Review
- Any content comparing to competitors
- New promotional offers or changes
- State-specific content
- Collection or servicing procedures
- Any "creative" marketing language
- Simplified explanations of legal terms

---

## Version Control & Updates

**Document Version**: 2.0.0  
**Last Legal Review**: [Current Date]  
**Next Scheduled Review**: [Quarterly]  
**Regulatory Basis Date**: February 2025

### Change Log
```
Version 2.0.0 - MAJOR CORRECTION: Accurate state product mapping
- CORRECTED state breakdown: 18 RIC states, 3 LTO states, 29+DC no service
- CRITICAL: No state offers both products
- Updated all validation logic for one-product-per-state rule
- Added proper state detection and routing
- Removed all references to mixed-product states

Version 1.0.0 - Initial compilation from legal team redlines
- Incorporated all redline patterns from legal review
- Added federal and state regulatory requirements
- Created comprehensive prohibited terms list
- Developed compliant/non-compliant examples
```

### Update Triggers
- Regulatory changes (federal or state)
- New state expansion or product changes
- Legal team identifies new concerns
- Enforcement actions provide guidance
- Audit findings require changes

---

## CRITICAL FINAL REMINDERS

### STATE-FIRST DEVELOPMENT
1. **Every piece of content is state-specific** - No universal training materials
2. **21 states only** - Most of the U.S. is not covered
3. **One product per state** - Never both, always either RIC or LTO
4. **State determines everything** - Product, terminology, regulations, training

### COMPLIANCE HIERARCHY
1. **This is a legal document** - Violations can result in fines, lawsuits, and criminal charges
2. **State law governs** - Each state has unique requirements
3. **When in doubt, don't guess** - Ask legal team
4. **Accuracy over engagement** - Boring but compliant is better than exciting but illegal
5. **Document everything** - Maintain audit trails
6. **Update regularly** - Regulations change frequently

### The Golden Rules
- **If the state doesn't match the product, don't show it**
- **If you wouldn't want a regulator to see it in a compliance exam, don't create it**
- **If you're mixing RIC and LTO content, STOP immediately**

---

*END OF COMPLIANCE REFERENCE DOCUMENT*

*For questions about this document, contact: [Legal/Compliance Team]*
*For technical implementation questions, reference this document in your Claude Code queries*