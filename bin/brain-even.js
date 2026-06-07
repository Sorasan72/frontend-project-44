#!/usr/bin/env node

import { runGame } from '../src/index.js';
import { evenGameLogic, evenGameDescription } from '../games/even-game.js';

console.log('Welcome to the Brain Games!');
runGame(evenGameLogic, evenGameDescription);


// import readlineSync from 'readline-sync';

// export function evenGame(userName) {
//     console.log('Answer "yes" if the number is even, otherwise answer "no".');
    
//     let correctAnsw = 0;
    
//     while (correctAnsw < 3) {
//         const randomNum = Math.floor(Math.random() * (1000 + 1));
        
//         console.log(`Question: ${randomNum}`);

//         const answer = readlineSync.question('Your answer: ');
//         if ((randomNum % 2 === 0 && answer === 'yes') || (randomNum % 2 !== 0 && answer === 'no')) {
//             console.log('Correct!');
//             correctAnsw += 1;
//         } else {
//             let correctAnswer;
//             if (randomNum % 2 === 0) {
//                 correctAnswer = 'yes';
//             } else {
//                 correctAnswer = 'no';
//             }
//             console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
//             console.log(`Let's try again, ${userName}!`);
//             return false;
//         }
//     }

//     console.log(`Congratulations, ${userName}!`);
//     return true;
// }