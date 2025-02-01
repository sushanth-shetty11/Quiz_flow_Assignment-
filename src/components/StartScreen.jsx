import { useNavigate } from 'react-router-dom';

const StartScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Quiz!</h1>
      <button 
        onClick={() => navigate('/quiz')}
        className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-transform transform hover:scale-105"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default StartScreen;
