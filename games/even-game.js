#!/usr/bin/env node

export const evenGameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

export const evenGameLogic = () => {
    const number = Math.floor(Math.random() * 100) + 1;
    const question = number.toString();
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    
    return { question, correctAnswer };
};