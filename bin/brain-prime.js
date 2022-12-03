#!/usr/bin/env node
import runGame from '../src/index.js';
import primeRound from '../src/games/primeGame.js';
import { phrases } from '../src/phrases.js';

const primeGame = () => runGame(phrases.DESCRIPTION_PRIME_GAME, primeRound);

primeGame();
