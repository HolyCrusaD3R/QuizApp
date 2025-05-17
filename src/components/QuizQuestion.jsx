export default function QuizQuestion({
  question,
  answers,
  onAnswer1,
  onAnswer2,
}) {
  return (
    <div>
      <p>{question}</p>
      <div>
        <button onClick={onAnswer1}>{answers[0]}</button>
        <button onClick={onAnswer2}>{answers[1]}</button>
      </div>
    </div>
  );
}
