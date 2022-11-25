import gamesLogic from '../index.js';

const brainEvenGame = () => {
  const randomNumber = Math.floor(Math.random() * 20);
  const rightAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  gamesLogic(
    'Answer "yes" if the number is even, otherwise answer "no".',
    `Question: ${randomNumber}`,
    rightAnswer,
  );
};

export default brainEvenGame;

// gamesLogic.greeting();
// const userName = gamesLogic.getUserName()
// gamesLogic.taskDescription(
//   'Answer "yes" if the number is even, otherwise answer "no".'
// );

// export const brainEvenGame = () => {

//   gamesLogic.nextStep(userName, userAnswer, rightAnswer);
// };

  // const userName = gamesLogic.getUserName();
  // const randomNumber = Math.floor(Math.random() * 20);
  // gamesLogic.taskDescription(
  //   'Answer "yes" if the number is even, otherwise answer "no".'
  // );
  // gamesLogic.askQuestion(`Question: ${randomNumber}`);
  // const rightAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  // const userAnswer = gamesLogic.getAnswerFortheQuestion('Your answer: ');

  // gamesLogic.nextStep(userAnswer, rightAnswer, userName);