#!/usr/bin/env node
import readlineSync from 'readline-sync';

const isEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 20);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const rightAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`,
      );
      break;
    }

    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

isEvenGame();