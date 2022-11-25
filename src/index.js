import readlineSync from 'readline-sync';

const runGame = (description, getRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  for (let i = 1; i <= 3; i += 1) {
    const [question, correctAnswer] = getRound();
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`
      );
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGame;