import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../utils/questions.js";

export default function Summary({ userAnswers }) {
const skippedAnswers = userAnswers.filter(answer => answer === null);
const corectAnswers = userAnswers.filter((answer, index) => answer === QUESTIONS[index].answers[0]);

const skippedAnswersShare = Math.round((skippedAnswers.length / userAnswers.length) * 100);
const correctAnswersShare = Math.round((corectAnswers.length / userAnswers.length) * 100);
const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;

  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Quiz completed image" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersShare}%</span>
          <span className="text"> skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersShare}%</span>
          <span className="text"> answered corectly</span>
        </p>
        <p>
          <span className="number">{wrongAnswersShare}%</span>
          <span className="text"> answered inorectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClasses = "user-answer";
          const correctAnswer = QUESTIONS[index].answers[0];
          if (answer === null) {
            cssClasses += " skipped";
          } else if (answer === correctAnswer) {
            cssClasses += " correct";
          } else {
            cssClasses += " wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClasses}>
                Your answer: {answer ?? "Skipped Question"}
              </p>
              {(answer === null || answer !== correctAnswer) && (
                <p className="user-answer correct">
                  Correct answer: {correctAnswer}
                </p>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
