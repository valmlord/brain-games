#!/usr/bin/env node
import runGame from '../src/index.js';
import gcdRound from '../src/games/gcdGame.js';
import { phrases } from '../src/phrases.js';

const gcdGame = () => runGame(phrases.DESCRIPTION_GCD_GAME, gcdRound);

gcdGame();
