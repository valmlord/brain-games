import * as gamesLogic from '../index.js';

gamesLogic.greeting();
const userName = gamesLogic.getUserName();
gamesLogic.taskDescription(
  'Answer "yes" if the number is even, otherwise answer "no".'
);

export const brainEvenGame = () => {
  const randomNumber = Math.floor(Math.random() * 20);
  gamesLogic.askQuestion(`Question: ${randomNumber}`);
  const userAnswer = gamesLogic.getAnswerFortheQuestion('Your answer: ');
  const rightAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  gamesLogic.resultCheck(userAnswer, rightAnswer);
  gamesLogic.next(userName);
  gamesLogic.endGame(userName);
};
