import minimist = require('minimist');
import {getMaxCalories, getTopThreeCalories} from './day1/calcCalories';
import {playGame, playGameWithStrategyGuide} from './day2/score';
import {sumGroupPriorities, sumPriorities} from './day3/sumPriorities';

const args = minimist(process.argv.slice(2));
const day = args['day'];

switch (day) {
  case 'day1': {
    const part1 = getMaxCalories();
    const part2 = getTopThreeCalories();
    console.log(`Part 1: ${part1}`);
    console.log(`Part 2: ${part2}`);

    break;
  }
  case 'day2': {
    const part1 = playGame();
    const part2 = playGameWithStrategyGuide();
    console.log(`Part 1: ${part1}`);
    console.log(`Part 2: ${part2}`);

    break;
  }
  case 'day3': {
    const part1 = sumPriorities();
    const part2 = sumGroupPriorities();
    console.log(`Part 1: ${part1}`);
    console.log(`Part 2: ${part2}`);

    break;
  }
  default:
    console.log('Could not find specified day');
}
