export const phrases = {
  GREETING: 'Welcome to the Brain Games!',
  ASK_NAME: 'May I have your name? ',
  ANSWER: 'Your answer: ',
  CORRECT_ANSWER: 'Correct!',
  YES: 'yes',
  NO: 'no',
  DESCRIPTION_CALC_GAME: 'What is the result of the expression?',
  DESCRIPTION_GCD_GAME: 'Find the greatest common divisor of given numbers.',
  DESCRIPTION_PROGRESSION_GAME: 'What number is missing in the progression?',
  DESCRIPTION_EVEN_GAME:
    'Answer "yes" if the number is even, otherwise answer "no".',
  DESCRIPTION_PRIME_GAME:
    'Answer "yes" if given number is prime. Otherwise answer "no".',
};

export const printGreeting = (userName) => `Hello, ${userName}!`;
export const printQuestion = (question) => `Question: ${question}`;
export const printWrongAnswer = (userAnswer, correctAnswer, userName) => `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
export const printCongratulation = (userName) => `Congratulations, ${userName}!`;
