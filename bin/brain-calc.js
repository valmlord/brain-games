#!/usr/bin/env node
import runGame from '../src/index.js';
import calcRound from '../src/games/calcGame.js';
import { phrases } from '../src/phrases.js';

const calcGame = () => runGame(phrases.DESCRIPTION_CALC_GAME, calcRound);

calcGame();
