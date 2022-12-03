import { getRandomNum } from '../cli.js';
import { phrases } from '../phrases.js';
import runGame from '../index.js';

const isPrime = (num) => {
  for (let i = 2, max = Math.sqrt(num); i <= max; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const primeRound = () => {
  const randomNumber = getRandomNum(1, 100);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  const question = randomNumber;
  return [question, correctAnswer];
};

const primeGame = () => runGame(phrases.DESCRIPTION_PRIME_GAME, primeRound);

export default primeGame;
