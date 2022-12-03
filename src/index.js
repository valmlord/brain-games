import readlineSync from 'readline-sync';
import {
  phrases,
  printCongratulation,
  printWrongAnswer,
  printGreeting,
  printQuestion,
} from './phrases.js';

const runGame = (description, getRound) => {
  console.log(phrases.GREETING);
  const userName = readlineSync.question(phrases.ASK_NAME);
  console.log(printGreeting(userName));
  console.log(description);
  for (let i = 1; i <= 3; i += 1) {
    const [question, correctAnswer] = getRound();
    console.log(printQuestion(question));
    const userAnswer = readlineSync.question(phrases.ANSWER);
    if (userAnswer === correctAnswer) {
      console.log(phrases.CORRECT_ANSWER);
    } else {
      console.log(printWrongAnswer(userAnswer, correctAnswer, userName));
      return;
    }
  }
  console.log(printCongratulation(userName));
};

export default runGame;
