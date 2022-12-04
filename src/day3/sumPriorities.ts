import path = require('path');
import {getInputAsArray, groupInputByN} from '../util/fileHandler';
import {Rucksack} from './rucksack';

export function sumPriorities() {
  const input = getInputAsArray(path.resolve(__dirname, './input.txt'));
  let sum = 0;

  for (const contents of input) {
    const sack = new Rucksack(contents);
    sum += sack.getSumOfPriorities();
  }

  return sum;
}

export function sumGroupPriorities() {
  // TODO: ideally would refactor Rucksack to be able to handle this use case.
  const input = groupInputByN(path.resolve(__dirname, './input.txt'), 3);
  const priorities = [];

  for (const group of input) {
    const splitFirstSack = group[0].split('');

    for (const item of splitFirstSack) {
      if (group[1].indexOf(item) >= 0 && group[2].indexOf(item) >= 0) {
        const itemValue = item.charCodeAt(0);
        if (itemValue > 90) {
          priorities.push(itemValue - 96);
        } else {
          priorities.push(itemValue - 38);
        }
        break;
      }
    }
  }

  return priorities.reduce((a, b) => a + b);
}
