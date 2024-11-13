# FitEase - AI-Powered Weight Loss Emotional Support

FitEase is an AI-powered web application designed to provide personalized weight loss support for women. Using Google's Gemini AI model, it creates a supportive and encouraging environment for users on their health journey.

## 🚀 Features

- Personalized AI chat support
- Health condition screening
- Goal setting and tracking
- User-friendly interface
- Responsive design

## 🛠 Tech Stack

- **Frontend**: React.js, Material-UI
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **AI**: Google Gemini 1.5 Flash

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- Google Gemini API key

### Backend and Database Setup

1. Navigate to server directory:
  a. cd server
  b. run `mongod --dbpath server/data`
  c. run `npm install`
  d. run `npm start`
  


### Frontend Setup

1. Navigate to client directory:
  a. cd client
  a. run `npm install`
  b. run `npm start`

The application will be available at `http://localhost:3000`

## 🤖 AI Implementation

FitEase uses Google's Gemini 1.5 Flash model for generating responses. The implementation includes:

  User info is: ${userInfoPrompt}.
- Maintains chat history for context
- Formats responses with emojis
- Keeps responses concise (2-3 sentences)

```
- Incorporates user information
- Provides personalized encouragement
- Maintains professional coaching tone

## 🌟 Features in Detail

1. **Health Screening**:
   - Pre-existing condition check
   - Safety warnings
   - Professional consultation recommendations

2. **User Dashboard**:
   - Chat interface
   - Goal tracking
   - Progress monitoring

3. **About Page**:
   - Team information
   - Mission statement
   - Approach explanation

   - Progress monitoring

3. **About Page**:
   - Team information
   - Mission statement
   - Approach explanation

## 📝 License

[Add your license information]

## 👥 Contributors

[Add contributor information]

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
