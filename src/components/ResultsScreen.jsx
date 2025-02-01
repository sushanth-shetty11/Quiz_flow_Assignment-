import { useLocation, useNavigate } from 'react-router-dom';

const ResultsScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, totalQuestions } = location.state || { score: 0, totalQuestions: 0 };

  const handleRetry = () => {
    navigate('/quiz');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-teal-500 flex flex-col items-center justify-center text-white">
      <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-lg">
        <h2 className="text-4xl font-bold mb-4">Quiz Complete! 🎉</h2>
        <p className="text-2xl mb-6">
          Your Score: {score}/{totalQuestions}
        </p>
        <button
          onClick={handleRetry}
          className="bg-white text-blue-600 px-6 py-2 rounded-lg font-bold hover:bg-opacity-90"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default ResultsScreen;
