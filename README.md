# Quiz App

A web-based quiz application built using **React** for the front-end, and **CORS Proxy** to bypass CORS issues while fetching quiz data from an API. The app includes various features like gamification, user scoring, and feedback, with a smooth user interface built using **TailwindCSS**.

## Features

- **Start Screen**: A welcome screen with a button to start the quiz.
- **Quiz Screen**: Displays questions with multiple choice answers, tracks the user's progress, and provides feedback after answering.
- **Results Screen**: Shows the user's score and allows them to retry the quiz.
- **CORS Proxy**: Uses a proxy server to bypass CORS restrictions when fetching quiz data from the API.

## Tech Stack

- **Frontend**: React.js
- **Styling**: TailwindCSS
- **Backend**: CORS Proxy (to bypass CORS restrictions)
- **API**: JSON API to fetch quiz questions

## Prerequisites

Before running the application, ensure you have the following installed on your machine:

- **Node.js**: [Download and Install Node.js](https://nodejs.org/)
- **npm or yarn**: Package managers for JavaScript

## Setup Instructions

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/quiz-app.git
   cd quiz-app
   
2. Install dependencies:

npm install

Or, if you prefer Yarn:

yarn install

3. Set up your CORS proxy server to handle requests:

Start the proxy server to bypass CORS by running:
node proxy-server.js

Make sure your proxy-server.js is set up as follows:

const corsAnywhere = require('cors-anywhere');

const host = 'localhost';
const port = 8080;

corsAnywhere.createServer({
  originWhitelist: [], // Allow all origins
}).listen(port, host, () => {
  console.log(`CORS Anywhere proxy server running on ${host}:${port}`);
});

4. Start the React application:

npm start

The app will now be running on http://localhost:3000 in your browser.

File Structure
src: Contains the main application files.
components: Contains the React components for each screen (StartScreen, QuizScreen, ResultsScreen).
services: Contains the service function quizService.js for fetching quiz data.
