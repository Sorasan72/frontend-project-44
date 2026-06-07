#!/usr/bin/env node

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step);
  }
  return progression;
};

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const progressionGameDescription = 'What number is missing in the progression?';

export const progressionGameLogic = () => {

    const minLength = 5;
    const maxLength = 10;
    const length = getRandomNumber(minLength, maxLength);
    const start = getRandomNumber(1, 50);
    const step = getRandomNumber(1, 10);

    const progression = generateProgression(start, step, length);

    const hiddenIndex = getRandomNumber(0, length - 1);
    const correctAnswer = progression[hiddenIndex].toString();

    const questionParts = progression.map((num, index) => {
        return index === hiddenIndex ? '..' : num.toString();
    });
    const question = questionParts.join(' ');
    
    return { question, correctAnswer };
};