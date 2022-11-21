import readlineSync from 'readline-sync';
import { brainEvenGame } from './games/evenGame.js';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
};

const getAnswerFortheQuestion = (answer) => readlineSync.question(answer);

const getUserName = () => {
  const userName = getAnswerFortheQuestion('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const taskDescription = (task) => console.log(task);
const askQuestion = (question) => console.log(question); 

const minSuccessCount = 3;
const maxFailCount = 1;
let successCount = 0;
let failCount = 0;

const resultCheck = (userAnswer, rightAnswer) => {
  if (userAnswer === rightAnswer) {
    console.log('Correct!');
    successCount += 1;
  } else if (userAnswer !== rightAnswer) {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`
    );
    failCount += 1;
  }
};

function reset() {
  successCount = 0;
  failCount = 0;
}

const endGame = (userName) => {
  if (successCount === minSuccessCount) {
    console.log(`Congratulations, ${userName}!`);
    reset();
  } else if (failCount === maxFailCount) {
    console.log(`Let's try again, ${userName}!`);
    reset();
  }
};

const next = (userName) => {
  if (successCount < minSuccessCount && failCount !== maxFailCount) {
    brainEvenGame();
  } else {
    endGame(userName);
  }
};

export {
  greeting,
  askQuestion,
  getAnswerFortheQuestion,
  getUserName,
  taskDescription,
  resultCheck,
  endGame,
  next,
};