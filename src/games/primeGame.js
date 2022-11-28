import { getRandomNum } from '../cli.js';
import runGame from '../index.js';

const description =
  'Answer "yes" if given number is prime. Otherwise answer "no".';

const randomNumber = getRandomNum(1, 100);

const isPrime = (randomNumber) => {
    if (randomNumber < 1) {
        return 'no';
    } else if ((randomNumber % randomNumber !== 0) && (randomNumber % 1 !== 0)) {
        return 'yes';
    } else {
        return 'no';
    }
};

const primeRound = () => {
  const question = randomNumber;
  const correctAnswer = isPrime();

  return [question, correctAnswer.toString()];
};

const primeGame = () => runGame(description, primeRound);

export default primeGame;
