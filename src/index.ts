import minimist = require('minimist');
import {getMaxCalories, getTopThreeCalories} from './day1/calcCalories';

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
  default:
    console.log('Could not find specified day');
}
