import * as gamesLogic from '../index.js';

gamesLogic.greeting();
const userName = gamesLogic.getUserName();
gamesLogic.taskDescription('What is the result of the expression?');

const brainCalcGame = () => {
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

  gamesLogic.askQuestion(
    `Question: ${firstOperand} ${operator} ${secondOperand}`,
  );
  const userAnswer = gamesLogic.getAnswerFortheQuestion('Your answer: ');
  gamesLogic.resultCheck(userAnswer.toString(), rightAnswer.toString());
  gamesLogic.nextStep(userName, brainCalcGame());
  gamesLogic.endGame(userName);
};

export default brainCalcGame;
