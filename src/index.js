#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { evenGameLogic, evenGameDescription } from '../games/even-game.js';
import { calcGameLogic, calcGameDescription } from '../games/calc-game.js';
import { gcdGameLogic, gcdGameDescription } from '../games/gcd-game.js';
import { progressionGameLogic, progressionGameDescription } from '../games/progression-game.js';
import { primeGameLogic, primeGameDescription } from '../games/prime-game.js';

export const getRandomNumber = (min, max) => {
  const range = max - min + 1;
  const randomBuffer = new Uint32Array(1);
  crypto.getRandomValues(randomBuffer);
  const randomNumber = randomBuffer[0] / (0xffffffff + 1);
  return Math.floor(randomNumber * range) + min;
};

export function runGame(gameName) {
    let gameLogic;
    let gameDescription;
    
    switch (gameName) {
        case 'even':
            gameLogic = evenGameLogic;
            gameDescription = evenGameDescription;
            break;
        case 'calc':
            gameLogic = calcGameLogic;
            gameDescription = calcGameDescription;
            break;
        case 'gcd':
            gameLogic = gcdGameLogic;
            gameDescription = gcdGameDescription;
            break;
        case 'progression':
            gameLogic = progressionGameLogic;
            gameDescription = progressionGameDescription;
            break;
        case 'prime':
            gameLogic = primeGameLogic;
            gameDescription = primeGameDescription;
            break;
        default:
            console.log('Unknown game!');
            return;
    }

    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    
    console.log(gameDescription);

    const roundsToWin = 3;
    
    for (let i = 0; i < roundsToWin; i++) {
        const { question, correctAnswer } = gameLogic();
        
        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question('Your answer: ');
        
        if (userAnswer === correctAnswer) {
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }
    
    console.log(`Congratulations, ${name}!`);
}