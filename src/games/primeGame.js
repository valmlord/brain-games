import { getRandomNum } from '../cli.js';
import { phrases } from '../phrases.js';

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
  const correctAnswer = isPrime(randomNumber) ? phrases.YES : phrases.NO;
  const question = randomNumber;
  return [question, correctAnswer];
};

export default primeRound;
