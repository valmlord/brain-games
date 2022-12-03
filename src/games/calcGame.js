import { getRandomNum } from '../cli.js';

const calcRound = () => {
  const firstOperand = getRandomNum(1, 20);
  const secondOperand = getRandomNum(1, 20);
  const operatorIndex = getRandomNum(0, 2);
  const operators = ['+', '-', '*'];
  const operator = operators[operatorIndex];
  let correctAnswer = 0;

  switch (operatorIndex) {
    case 0:
      correctAnswer = firstOperand + secondOperand;
      break;
    case 1:
      correctAnswer = firstOperand - secondOperand;
      break;
    case 2:
      correctAnswer = firstOperand * secondOperand;
      break;
    default:
      correctAnswer = 1;
  }

  const question = `${firstOperand} ${operator} ${secondOperand}`;

  return [question, correctAnswer.toString()];
};

export default calcRound;
