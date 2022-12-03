import { getRandomNum } from '../cli.js';
import { phrases } from '../phrases.js';

const isEven = (num) => num % 2 === 0;

const evenRound = () => {
  const question = getRandomNum(1, 10);
  const correctAnswer = isEven(question) ? phrases.YES : phrases.NO;

  return [question, correctAnswer];
};

export default evenRound;
