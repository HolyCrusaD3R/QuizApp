export default function ResultsScreen({ onReset, score, quizSize }) {
  return (
    <>
      <p>Quiz Completed!</p>
      <p>
        Score: {score} / {quizSize}
      </p>
      <button onClick={onReset}>Reset</button>
    </>
  );
}
