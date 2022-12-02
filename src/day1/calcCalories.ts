import {readFileSync} from 'fs';
import path = require('path');

export function getMaxCalories(): number {
  const caloriesArr = getSortedCaloriesArr();

  if (caloriesArr.length === 0) {
    throw new Error('Calories array is empty');
  }

  return caloriesArr.shift()!;
}

export function getTopThreeCalories(): number {
  const caloriesArr = getSortedCaloriesArr();
  const topThree = caloriesArr.slice(0, 3);

  if (caloriesArr.length === 0) {
    throw new Error('Calories array is empty');
  }

  return topThree.reduce((a, b) => {
    return a + b;
  });
}

function getSortedCaloriesArr() {
  const data = readFileSync(path.resolve(__dirname, './input.txt'), 'utf-8');
  const dataArr = data.split(/\n/g);
  const totalCaloriesArr = [];
  let current = 0;

  for (const calories of dataArr) {
    if (!calories) {
      totalCaloriesArr.push(current);
      current = 0;
    } else {
      current += parseInt(calories);
    }
  }

  return totalCaloriesArr.sort((a, b) => b - a);
}
