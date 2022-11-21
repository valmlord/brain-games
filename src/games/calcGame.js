import readlineSync from 'readline-sync';
import { greeting, getUserName, taskDescription } from '../index.js';

const brainCalcGame = () => {
  greeting();
  const userName = getUserName();
  taskDescription('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const firstOperand = Math.floor(Math.random() * 20);
    const secondOperand = Math.floor(Math.random() * 20);
    const operators = ['+', '-', '*'];
    const operatorIndex = Math.floor(Math.random() * 3);
    const operator = operators[operatorIndex];
    let result = 0;

    switch (operatorIndex) {
      case 0:
        result = firstOperand + secondOperand;
        break;
      case 1:
        result = firstOperand - secondOperand;
        break;
      case 2:
        result = firstOperand * secondOperand;
        break;
      default:
        result = 1;
    }

    console.log(`Question: ${firstOperand} ${operator} ${secondOperand}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (Number(userAnswer) === result) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}!`);
      break;
    }

    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default brainCalcGame;
