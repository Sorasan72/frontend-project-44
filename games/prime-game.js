#!/usr/bin/env node

import { getRandomNumber } from '../src/index.js';

const isPrime = (num) => {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    
    const limit = Math.sqrt(num);
    for (let i = 3; i <= limit; i += 2) {
        if (num % i === 0) return false;
    }
    return true;
};

export const primeGameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const primeGameLogic = () => {
    const number = getRandomNumber(1, 100);
    const question = number.toString();
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    
    return { question, correctAnswer };
};