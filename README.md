# EasyPay University

A comprehensive training platform for EasyPay Finance merchant partners, built with Next.js and TypeScript.

![EasyPay University](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-15.4.5-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.0-38B2AC)

## 🎯 Overview

EasyPay University is a modern Learning Management System (LMS) designed to train merchant partners on EasyPay Finance's processes, requirements, and best practices. The platform features interactive modules, comprehensive quizzes, progress tracking, and administrative analytics.

## ✨ Features

### 🎓 Learning Management
- **4 Comprehensive Modules** covering company overview, applications, credit culture, and advanced topics
- **Interactive Quiz System** with 50+ questions across multiple formats
- **Progress Tracking** with completion certificates
- **Gamification** including streaks and achievement badges

### 🎨 User Experience  
- **EasyPay Branding** with official logo and color scheme
- **Responsive Design** optimized for all devices
- **Intuitive Navigation** with active state indicators
- **Clean Modern UI** matching EasyPay Business Center design

### 📊 Admin Dashboard
- **Platform Analytics** with user engagement metrics
- **Module Performance** tracking and insights  
- **Geographic Distribution** of training completion
- **Real-time Activity** feed and notifications

### 🛠️ Technical Stack
- **Next.js 15.4.5** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** with custom EasyPay theme
- **React Components** with client-side interactivity
- **Lucide Icons** for consistent iconography

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/trevsky25/easypayuniversity.git
   cd easypayuniversity
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📚 Training Modules

| Module | Title | Duration | Status |
|--------|-------|----------|--------|
| 1 | Welcome to EasyPay Finance | 45 min | ✅ Complete |
| 2 | How to Submit Applications | 60 min | ✅ Complete |  
| 3 | Establishing a Credit Culture | 90 min | ✅ Complete |
| 4 | Advanced Topics | 120 min | ✅ Complete |

## 🎯 Quiz System

- **Multiple Choice Questions** - Standard knowledge assessment
- **True/False Questions** - Quick concept verification  
- **Scenario-Based Questions** - Real-world application testing
- **Immediate Feedback** - Instant explanations and learning
- **Progress Tracking** - Real-time completion monitoring

## 📊 Admin Features

Access the admin dashboard at `/admin` to view:

- Platform usage statistics
- Module completion rates
- User engagement metrics
- Geographic training distribution
- Real-time activity feed

## 🎨 Design System

### Colors
- **Primary**: EasyPay Teal `#00D4AA`
- **Gray Scale**: Material Design inspired grays
- **Status Colors**: Success, warning, and info indicators

### Components
- **Cards**: Content containers with hover effects
- **Badges**: Status and progress indicators
- **Progress Bars**: Visual completion tracking
- **Navigation**: Sidebar with active state styling

## 📁 Project Structure

```
easypay-university/
├── app/                    # Next.js app directory
│   ├── admin/             # Admin dashboard
│   ├── modules/           # Training modules
│   ├── progress/          # Progress tracking
│   ├── resources/         # Learning resources
│   └── support/           # Help and FAQs
├── components/            # React components
│   ├── layout/           # Header and sidebar
│   ├── quiz/             # Quiz system
│   └── ui/               # Reusable UI components
├── data/                 # Quiz questions database
└── public/               # Static assets
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables if needed
3. Deploy automatically on push to main

### Other Platforms
1. Build the application: `npm run build`
2. Start production server: `npm start`
3. Serve on your preferred platform

## 🛠️ Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server  
npm run lint         # Run ESLint
npm run type-check   # Check TypeScript types
```

### Code Quality
- **ESLint** for code linting
- **TypeScript** for type checking
- **Prettier** for code formatting (recommended)
- **Component-based** architecture

## 🔧 Customization

### Branding
- Update colors in `tailwind.config.ts`
- Replace logo in `public/easypay-logo.svg`
- Modify theme variables in CSS

### Content
- Edit module content in `app/modules/[id]/page.tsx`
- Update quiz questions in `data/quizData.ts`
- Customize dashboard metrics in `app/admin/page.tsx`

## 📈 Analytics & Reporting

The admin dashboard provides insights into:
- User registration and engagement
- Module completion rates and timing
- Quiz performance and common mistakes
- Geographic distribution of training
- Progress trends over time

## 🔒 Security

- Client-side only implementation (no sensitive server data)
- Input validation on all form submissions
- Secure admin access patterns
- No hardcoded credentials or secrets

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m 'Add your feature'`
4. Push to branch: `git push origin feature/your-feature`
5. Submit a pull request

## 📞 Support

For questions or support:
- Create an issue in the GitHub repository
- Contact the development team
- Review the documentation in `CLAUDE.md`

## 📄 License

This project is proprietary to EasyPay Finance. All rights reserved.

---

**Built with ❤️ for EasyPay Finance merchant partners**
