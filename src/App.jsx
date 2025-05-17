import { useState } from "react";
import "./App.css";
import QuizQuestion from "./components/QuizQuestion";
import quizQuestions from "./data/quizQuestions";
import StartScreen from "./components/StartScreen";
import ResultsScreen from "./components/ResultsScreen";
const quizSize = Object.keys(quizQuestions).length;

function App() {
  const [started, setStarted] = useState(false);
  const [currQuestionIndex, setCurrQuestionIndex] = useState(1);
  const [score, setScore] = useState(0);
  const currQuestion = quizQuestions[currQuestionIndex];

  const handleStart = () => {
    setStarted(true);
  };

  const handleAnswer = (index) => {
    currQuestion.correctIndex === index - 1 && setScore((prev) => prev + 1);
    setCurrQuestionIndex((prev) => prev + 1);
  };

  const handleReset = () => {
    setStarted(false);
    setCurrQuestionIndex(1);
    setScore(0);
  };

  return (
    <div className="quiz-box">
      {!started && <StartScreen onStart={handleStart} />}

      {started && currQuestionIndex <= quizSize && currQuestion && (
        <QuizQuestion
          question={currQuestion.question}
          answers={currQuestion.answers}
          onAnswer1={() => handleAnswer(1)}
          onAnswer2={() => handleAnswer(2)}
        />
      )}

      {started && currQuestionIndex >= quizSize + 1 && (
        <ResultsScreen
          onReset={handleReset}
          score={score}
          quizSize={quizSize}
        />
      )}
    </div>
  );
}

export default App;
