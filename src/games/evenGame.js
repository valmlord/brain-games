const description =
  'Answer "yes" if the number is even, otherwise answer "no".';

const getRandomNum = (min, max) =>
  Math.round(Math.random() * (max - min)) + min;

const isEven = (num) => num % 2 === 0;
const evenRound = () => {
  const question = getRandomNum(1, 10);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const evenGame = () => runGame(description, evenRound);

export default evenGame;
