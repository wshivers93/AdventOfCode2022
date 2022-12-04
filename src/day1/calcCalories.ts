import path = require('path');
import {getInputAsArray} from '../util/fileHandler';

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
  const input = getInputAsArray(path.resolve(__dirname, './input.txt'));
  const totalCaloriesArr = [];
  let current = 0;

  for (const calories of input) {
    if (!calories) {
      totalCaloriesArr.push(current);
      current = 0;
    } else {
      current += parseInt(calories);
    }
  }

  return totalCaloriesArr.sort((a, b) => b - a);
}
