# StreamGPT 🍿🤖

![Banner](https://via.placeholder.com/1200x400.png?text=AI+Powered+Movie+Recommendation+Platform)

An AI-powered movie recommendation engine that combines GPT's intelligence with personalized streaming experiences. Lights, camera, perfect recommendations! 🎬

## 🌟 Features

### 🔐 Secure Authentication
- Firebase-powered user registration & login
- Redux-managed session persistence
- Protected routes for authenticated access

### 🎥 Immersive Browse Experience
- Dynamic movie cards with random recommendations
- Background video ambiance on browse page
- Responsive grid layout for seamless viewing

### 🎬 Smart Movie Exploration
- Detailed movie profiles with:
  - IMDb ratings ⭐
  - Official trailers 🎞️
  - Direct IMDb links 🌐
- Instant preview on card hover

### 🤖 GPT-Powered Search
- Natural language movie requests
- AI-curated recommendations
- Context-aware suggestions
- Prompt-based discovery system

## 🛠️ Tech Stack

### Frontend
![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white)
![Redux](https://img.shields.io/badge/-Redux-764ABC?logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/-React_Router-CA4245?logo=react-router&logoColor=white)

### Backend
![Firebase](https://img.shields.io/badge/-Firebase-FFCA28?logo=firebase&logoColor=black)
![GPT API](https://img.shields.io/badge/-GPT_API-412991?logo=openai&logoColor=white)

### Styling
![CSS Modules](https://img.shields.io/badge/-CSS_Modules-000000?logo=css3&logoColor=white)

## 🚀 Quick Start

### Prerequisites
- Node.js ≥16.x
- Firebase project 🔥
- GPT API key 🗝️

### Installation
```bash
# Clone repository
git clone https://github.com/yourusername/streamgpt.git

# Navigate to project
cd streamgpt

# Install dependencies
npm install

# Configure environment
echo "REACT_APP_FIREBASE_API_KEY=your_firebase_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_domain
REACT_APP_GPT_API_KEY=your_gpt_key" > .env

# Launch application
npm start