#!/usr/bin/env node
import runGame from '../src/index.js';
import progressionRound from '../src/games/progressionGame.js';
import { phrases } from '../src/phrases.js';

const progressionGame = () => runGame(phrases.DESCRIPTION_PROGRESSION_GAME, progressionRound);

progressionGame();
