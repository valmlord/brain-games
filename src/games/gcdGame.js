import { getRandomNum } from '../cli.js';
import runGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcdRound = () => {
  const firstOperand = getRandomNum(1, 100);
  const secondOperand = getRandomNum(1, 100);
  const question = `${firstOperand} ${secondOperand}`;

  function getGcd(a, b) {
    while (a !== 0 && b !== 0) {
      if (a > b) {
        a %= b;
      } else {
        b %= a;
      }
    }
    return a + b;
  }

  const correctAnswer = getGcd(firstOperand, secondOperand);

  return [question, correctAnswer.toString()];
};

const gcdGame = () => runGame(description, gcdRound);

export default gcdGame;
