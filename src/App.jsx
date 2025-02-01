import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartScreen from './components/StartScreen';
import QuizScreen from './components/QuizScreen';
import ResultsScreen from './components/ResultsScreen';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<StartScreen />} />
          <Route path="/quiz" element={<QuizScreen />} />
          <Route path="/results" element={<ResultsScreen />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
