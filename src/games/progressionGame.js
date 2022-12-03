import { getRandomNum } from '../cli.js';

const progressionRound = () => {
  const start = getRandomNum(1, 100);
  const step = getRandomNum(1, 5);
  const progression = [];
  for (let i = 0; i < step * 10; i += step) {
    progression.push(start + i);
  }
  const hiddenNumber = getRandomNum(1, 9);
  const modifiedProgression = progression;
  const correctAnswer = modifiedProgression[hiddenNumber];
  modifiedProgression[hiddenNumber] = '..';
  const question = progression.join(' ').toString();

  return [question, correctAnswer.toString()];
};

export default progressionRound;
