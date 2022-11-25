import readlineSync from 'readline-sync';

export default (task, question, rightAnswer) => {
  console.log('Welcome to the Brain Games!');
  const getAnswerForQuestion = (answer) => readlineSync.question(answer);
  const userName = getAnswerForQuestion('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  const showTaskDescription = () => console.log(task);
  const showQuestion = () => console.log(question);
  const getUserAnswer = () => {
    for (let i = 0; i < 3; i += 1) {
      const userAnswer = getAnswerForQuestion('Your answer: ');
      const minSuccessCount = 3;
      const maxFailCount = 1;
      let successCount = 0;
      let failCount = 0;

      function reset() {
        successCount = 0;
        failCount = 0;
      }
      
      if (userAnswer === rightAnswer) {
        console.log('Correct!');
        successCount += 1;
        showQuestion();
      } else {
        console.log(
          `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`
        );
        failCount += 1;
      }

      if (successCount === minSuccessCount) {
        console.log(`Congratulations, ${userName}!`);
        reset();
      } else if (failCount === maxFailCount) {
        console.log(`Let's try again, ${userName}!`);
        reset();
      }
    }
  };

  showTaskDescription();
  showQuestion();
  getUserAnswer();
};
// for (let i = 0; i < 3; ) {
//   const minSuccessCount = 3;
//   const maxFailCount = 1;
//   let successCount = 0;
//   let failCount = 0;

//   function reset() {
//     successCount = 0;
//     failCount = 0;
//   }

//   if (successCount === minSuccessCount) {
//     console.log(`Congratulations, ${userName}!`);
//     reset();
//   } else if (failCount === maxFailCount) {
//     console.log(`Let's try again, ${userName}!`);
//     reset();
//   }

//   if (userAnswer === rightAnswer) {
//     console.log('Correct!');
//     successCount += 1;
//   } else if (userAnswer !== rightAnswer) {
//     console.log(
//       `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`
//     );
//     failCount += 1;
//   }

//   i += 1;
// }

// const getUserName = () => {
//   const userName = getAnswerFortheQuestion('May I have your name? ');
//   console.log(`Hello, ${userName}!`);
//   return userName;
// };

// const nextStep = (userAnswer, rightAnswer, userName) => {
//   for (let i = 0; i < 3;) {
//     const minSuccessCount = 3;
//     const maxFailCount = 1;
//     let successCount = 0;
//     let failCount = 0;

//     function reset() {
//       successCount = 0;
//       failCount = 0;
//     }

//     if (successCount === minSuccessCount) {
//       console.log(`Congratulations, ${userName}!`);
//       reset();
//     } else if (failCount === maxFailCount) {
//       console.log(`Let's try again, ${userName}!`);
//       reset();
//     }

//     if (userAnswer === rightAnswer) {
//       console.log('Correct!');
//       successCount += 1;
//     } else if (userAnswer !== rightAnswer) {
//       console.log(
//         `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`
//       );
//       failCount += 1;
//     }

//      i += 1;
//   }
// };

// export {
//   greeting,
//   getAnswerFortheQuestion,
//   getUserName,
//   taskDescription,
//   askQuestion,
//   nextStep,
// };

// const nextStep = (userName, userAnswer, rightAnswer) => {
//   for (let i = 0; i < 3; i += 1) {
//     const minSuccessCount = 3;
//     const maxFailCount = 1;
//     let successCount = 0;
//     let failCount = 0;

//     const randomNumber = Math.floor(Math.random() * 20);
//     console.log(`Question: ${randomNumber}`);
//     const userAnswer = readlineSync.question('Your answer: ');

//     const rightAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

//     if (userAnswer === rightAnswer) {
//       console.log('Correct!');
//       successCount += 1;
//     } else if (userAnswer !== rightAnswer) {
//       console.log(
//         `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`
//       );
//       failCount += 1;
//     }

//     function reset() {
//       successCount = 0;
//       failCount = 0;
//     }

//   }
// };

// const nextStep = (userName, userAnswer, rightAnswer) => {
//   for (let i = 0; i < 3; i += 1) {
//     const minSuccessCount = 3;
//     const maxFailCount = 1;
//     let successCount = 0;
//     let failCount = 0;

//     if (userAnswer === rightAnswer) {
//       console.log('Correct!');
//       successCount += 1;
//     } else if (userAnswer !== rightAnswer) {
//       console.log(
//         `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`
//       );
//       failCount += 1;
//     }

//     if (successCount === minSuccessCount) {
//       console.log(`Congratulations, ${userName}!`);
//       reset();
//     } else if (failCount === maxFailCount) {
//       console.log(`Let's try again, ${userName}!`);
//       reset();
//     }
//   }
// };

// export {
//   greeting,
//   askQuestion,
//   getAnswerFortheQuestion,
//   getUserName,
//   taskDescription,
//   nextStep,
// };
