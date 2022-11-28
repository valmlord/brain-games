import { getRandomNum } from '../cli.js';
import runGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeRound = () => {
  const randomNumber = getRandomNum(1, 100);
  let correctAnswer = '';

  if (
    (randomNumber > 1) 
    || (randomNumber % randomNumber !== 0) 
    && (randomNumber % 1 !== 0)
  ) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  const question = randomNumber;
  return [question, correctAnswer.toString()];
};

const primeGame = () => runGame(description, primeRound);

export default primeGame;
