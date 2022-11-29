#!/usr/bin/env node
import readlineSync from 'readline-sync';

export const getName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

getName();
