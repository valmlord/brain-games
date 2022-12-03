#!/usr/bin/env node
import runGame from '../src/index.js';
import evenRound from '../src/games/evenGame.js';
import { phrases } from '../src/phrases.js';

const evenGame = () => runGame(phrases.DESCRIPTION_EVEN_GAME, evenRound);

evenGame();
