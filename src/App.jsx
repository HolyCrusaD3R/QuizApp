import { useState } from "react";
import "./App.css";
import QuizQuestion from "./components/QuizQuestion";

const quizQuestions = {
  1: {
    question: "What is the capital of France?",
    answers: ["Paris", "Rome"],
    correctIndex: 0,
  },
  2: {
    question: "Which planet is known as the Red Planet?",
    answers: ["Venus", "Mars"],
    correctIndex: 1,
  },
  3: {
    question: "What is 10 + 5?",
    answers: ["15", "20"],
    correctIndex: 0,
  },
  4: {
    question: "Which language runs in a web browser?",
    answers: ["Java", "JavaScript"],
    correctIndex: 1,
  },
  5: {
    question: "Who wrote 'To Kill a Mockingbird'?",
    answers: ["Harper Lee", "Mark Twain"],
    correctIndex: 0,
  },
  6: {
    question: "What is the boiling point of water (at sea level)?",
    answers: ["100°C", "90°C"],
    correctIndex: 0,
  },
  7: {
    question: "Which animal is known as the King of the Jungle?",
    answers: ["Tiger", "Lion"],
    correctIndex: 1,
  },
  8: {
    question: "Which is a frontend framework?",
    answers: ["React", "Node.js"],
    correctIndex: 0,
  },
  9: {
    question: "What color is a banana?",
    answers: ["Yellow", "Blue"],
    correctIndex: 0,
  },
  10: {
    question: "Which continent is Egypt in?",
    answers: ["Africa", "Asia"],
    correctIndex: 0,
  },
};

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
      {!started && <button onClick={handleStart}>Start</button>}

      {started && currQuestionIndex <= quizSize && currQuestion && (
        <QuizQuestion
          question={currQuestion.question}
          answers={currQuestion.answers}
          onAnswer1={() => handleAnswer(1)}
          onAnswer2={() => handleAnswer(2)}
        />
      )}

      {started && currQuestionIndex >= quizSize + 1 && (
        <>
          <p>Quiz Completed!</p>
          <p>
            Score: {score} / {quizSize}
          </p>
          <button onClick={handleReset}>Reset</button>
        </>
      )}
    </div>
  );
}

export default App;
