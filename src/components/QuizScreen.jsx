import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchQuizData } from '../services/quizService';

const QuizScreen = () => {
  const [quizData, setQuizData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loadQuiz = async () => {
      try {
        const data = await fetchQuizData();
        setQuizData(data.questions);
      } catch (err) {
        setError(err.message || 'Failed to load quiz. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    loadQuiz();
  }, []);

  if (loading) {
    return <div className="loading-spinner">🌀 Loading...</div>;
  }

  if (error) {
    return <div className="error-message">❌ {error}</div>;
  }

  const currentQuestion = quizData[currentQuestionIndex];
  const totalQuestions = quizData.length;

  const handleAnswerSelect = (answer) => {
    if (showFeedback) return;
    setSelectedAnswer(answer);
    setShowFeedback(true);

    setScore((prevScore) => prevScore + (answer === currentQuestion.correctAnswer ? 1 : 0));

    setTimeout(() => {
      setShowFeedback(false);
      setSelectedAnswer(null);
      if (currentQuestionIndex < totalQuestions - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        navigate('/results', { state: { score, totalQuestions } });
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
        <div
          className="bg-purple-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
        />
      </div>

      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4">
          Question {currentQuestionIndex + 1}/{totalQuestions}
        </h2>
        <p className="text-lg mb-6">{currentQuestion.question}</p>

        <div className="space-y-4">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(option)}
              disabled={showFeedback}
              className={`w-full p-3 text-left rounded-lg transition-all 
                ${selectedAnswer === option
                  ? (option === currentQuestion.correctAnswer
                    ? 'bg-green-500 text-white'
                    : 'bg-red-500 text-white')
                  : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizScreen;
