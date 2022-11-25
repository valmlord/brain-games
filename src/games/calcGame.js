import runGame from '../index.js';

const description = 'What is the result of the expression?';


const calcRound = () => {
    const firstOperand = Math.floor(Math.random() * 20);
    const secondOperand = Math.floor(Math.random() * 20);
    const operators = ['+', '-', '*'];
    const operatorIndex = Math.floor(Math.random() * 3);
    const operator = operators[operatorIndex];
    let rightAnswer = 0;

    switch (operatorIndex) {
      case 0:
        rightAnswer = firstOperand + secondOperand;
        break;
      case 1:
        rightAnswer = firstOperand - secondOperand;
        break;
      case 2:
        rightAnswer = firstOperand * secondOperand;
        break;
      default:
        rightAnswer = 1;
    }

  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const correctAnswer = rightAnswer.toString();

  return [question, correctAnswer];
};

const calcGame = () => runGame(description, calcRound);

export default calcGame;
