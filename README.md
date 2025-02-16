# StreamGPT

StreamGPT is an AI-powered movie recommendation engine that combines GPT-driven search with personalized streaming experiences. Users can sign up, log in, browse curated movie recommendations, view detailed movie profiles, and use a natural language search to get tailored suggestions.

## Features

### User Authentication
- User registration and login powered by Firebase.
- Session persistence managed through Redux.
- Protected routes for secure access.

### Movie Browsing
- Dynamic movie cards with random recommendations on the `/browse` page.
- Background video to enhance the browsing experience.
- Responsive layout for a seamless viewing experience.

### Movie Details
- Detailed movie profiles including ratings, trailers, and direct IMDb links.
- Quick access to additional movie information upon selecting a card.

### GPT-Powered Search
- Natural language search interface for personalized movie recommendations.
- Context-aware suggestions based on user prompts.

## Tech Stack

### Frontend
- React.js
- Redux
- React Router

### Backend
- Firebase (Authentication & Database)
- GPT API for AI-driven recommendations

### Styling
- CSS Modules

## Installation

### Prerequisites
- Node.js (v16 or higher recommended)
- A configured Firebase project
- GPT API key

### Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/streamgpt.git
   cd streamgpt
2. Install Dependecies 
    ```bash
    npm install
3. Configure Environment Variables Create a .env file in the project root with the following:
    ```bash
    REACT_APP_FIREBASE_API_KEY=your_firebase_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_domain
    REACT_APP_GPT_API_KEY=your_gpt_key
4. Run the Application
    ```bash
    npm start
5. Access the Application Open http://localhost:3000 in your browser.

