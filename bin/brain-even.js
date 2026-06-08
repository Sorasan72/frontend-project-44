#!/usr/bin/env node

import { runGame } from '../src/index.js';
import { evenGameLogic, evenGameDescription } from '../games/even-game.js';

console.log('Welcome to the Brain Games!');
runGame(evenGameLogic, evenGameDescription);
