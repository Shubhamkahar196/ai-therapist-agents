# Aura 1.0 - AI Therapist Agent

[![Next.js](https://img.shields.io/badge/Next.js-15.5.6-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC)](https://tailwindcss.com/)

> Revolutionizing mental health support through ethical AI and blockchain technology

## 🌟 Overview

Aura is an advanced AI-powered mental health companion that provides personalized, accessible, and secure emotional support. Built with cutting-edge technology, Aura combines empathetic AI conversations, mood tracking, therapeutic activities, and interactive games to support users' mental well-being 24/7.

### 🎯 Mission
To democratize access to mental health support through ethical AI and blockchain technology, making quality therapeutic care available to everyone, everywhere, at any time.

### 👁️ Vision
A world where mental health support is accessible, private, and personalized, powered by trusted AI agents and secured by blockchain technology.

### 💎 Values
- **Privacy**: Your conversations are always confidential and encrypted
- **Innovation**: Leveraging cutting-edge AI and blockchain technology
- **Empathy**: Providing compassionate, judgment-free support
- **Trust**: Following strict ethical guidelines and clinical standards

## ✨ Features

### 🤖 AI Chat Companion
- **24/7 Support**: Always available to listen and provide guidance
- **Personalized Conversations**: Adapts to your emotional state and needs
- **Evidence-Based Techniques**: Incorporates clinically-proven therapeutic approaches
- **Session Management**: Organized chat history and session tracking

### 📊 Mood Tracking
- **Real-time Monitoring**: Track your emotional state throughout the day
- **Visual Analytics**: Interactive charts and insights
- **Pattern Recognition**: Identify trends and triggers
- **Goal Setting**: Set and track emotional wellness objectives

### 🎮 Therapeutic Games
- **Ocean Waves**: Calming visualization for stress relief
- **Zen Garden**: Mindfulness and relaxation exercises
- **Breathing Games**: Guided breathing exercises for anxiety management
- **Anxiety Relief**: Interactive tools for immediate stress reduction

### 📝 Activity Logging
- **Daily Activities**: Log and track daily activities and their impact on mood
- **Progress Tracking**: Monitor improvements over time
- **Insights Generation**: AI-powered recommendations based on your activities

### 🔐 Security & Privacy
- **End-to-End Encryption**: All conversations are encrypted
- **Blockchain Security**: Leveraging blockchain for data integrity
- **Anonymous Usage**: Optional anonymous mode available

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15.5.6 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 with custom animations
- **UI Components**: Radix UI primitives
- **Animations**: Framer Motion for smooth interactions
- **Icons**: Lucide React

### Backend & Database
- **API Routes**: Next.js API routes
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: Custom JWT-based auth system
- **HTTP Client**: Axios for API communications

### Development Tools
- **Linting**: ESLint with Next.js configuration
- **Build Tool**: Turbopack for fast development
- **Package Manager**: npm
- **Version Control**: Git

## 🚀 Installation

### Prerequisites
- Node.js 18+ and npm
- MongoDB database (local or cloud)
- Git

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-therapist-agent-dev
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env.local` file in the root directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   ```

4. **Database Setup**
   Ensure MongoDB is running and accessible with the provided URI.

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000]
   Live link :- aura-ivory-two.vercel.app

## 📖 Usage

### For Users
1. **Sign Up/Login**: Create an account or sign in to access personalized features
2. **Initial Assessment**: Complete the welcome flow to help Aura understand your needs
3. **Daily Check-in**: Use the mood slider on the homepage to track your emotional state
4. **Chat with Aura**: Start conversations for support, guidance, or just to talk
5. **Explore Features**: Try therapeutic games, log activities, and view insights

### For Developers
- **API Documentation**: See the API Overview section below
- **Component Library**: Reusable UI components in `/components`
- **Custom Hooks**: Utility hooks for common functionality
- **Type Definitions**: Full TypeScript support throughout

## 🔌 API Overview

### Authentication Endpoints
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user info
- `GET /api/auth/session` - Get session status

### Chat Endpoints
- `GET /api/chat/sessions` - List user chat sessions
- `POST /api/chat/sessions` - Create new chat session
- `GET /api/chat/sessions/[sessionId]` - Get session details
- `GET /api/chat/sessions/[sessionId]/history` - Get chat history
- `POST /api/chat/sessions/[sessionId]/messages` - Send message

### Mood & Activity Endpoints
- `GET /api/mood` - Get mood data
- `POST /api/mood` - Log mood entry
- `GET /api/activities/today` - Get today's activities
- `POST /api/activities` - Log new activity

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Development Setup
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes and ensure tests pass
4. Commit your changes: `git commit -m 'Add some feature'`
5. Push to the branch: `git push origin feature/your-feature-name`
6. Open a Pull Request

### Guidelines
- Follow the existing code style and TypeScript conventions
- Write clear, concise commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all linting checks pass

### Areas for Contribution
- AI conversation improvements
- New therapeutic games and activities
- UI/UX enhancements
- Performance optimizations
- Accessibility improvements
- Internationalization support




## 🙏 Acknowledgments

- Built with ❤️ for mental health awareness
- Inspired by the need for accessible mental health support
- Thanks to the open-source community for amazing tools and libraries

---

**Made with ❤️ by the Shubham kahar*
