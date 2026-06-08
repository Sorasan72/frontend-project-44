#!/usr/bin/env node

import { getRandomNumber } from '../src/index.js';

export const calcGameDescription = 'What is the result of the expression?';

const calculate = (num1, num2, operator) => {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        default:
            return null;
    }
};

export const calcGameLogic = () => {
    const num1 = getRandomNumber(1, 20);
    const num2 = getRandomNumber(1, 20);
    const operators = ['+', '-', '*'];
    const operator = operators[getRandomNumber(0, operators.length - 1)];
    const question = `${num1} ${operator} ${num2}`;
    const correctAnswer = calculate(num1, num2, operator).toString();
    
    return { question, correctAnswer };
};