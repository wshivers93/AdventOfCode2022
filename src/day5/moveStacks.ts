import path = require('path');
import {getInputAsArray} from '../util/fileHandler';
import {getInitStacks, Stacks} from './crateStacks';

export function getTopOfStacks(): string[] {
  const initStacks = getInitStacks();
  console.log(`Part1: ${initStacks[1]}`);
  const finalStacks = moveStacks(initStacks);
  const stackTops = [];

  for (const stack of Object.values(finalStacks)) {
    if (stack.length > 0) {
      stackTops.push(stack.pop()!);
    }
  }

  return stackTops;
}

export function getTopOfStacks9001(): string[] {
  const initStacks = getInitStacks();
  console.log(`Part2: ${initStacks[1]}`);
  const finalStacks9001 = moveStacksWith9001(initStacks);
  const stackTops9001 = [];

  for (const stack of Object.values(finalStacks9001)) {
    if (stack.length > 0) {
      stackTops9001.push(stack.pop()!);
    }
  }

  return stackTops9001;
}

function moveStacks(stacks: Stacks): Stacks {
  const moves = getInputAsArray(path.resolve(__dirname, './moves.txt'));

  for (const move of moves) {
    const instructions = move.match(/\d+/g);

    if (instructions && instructions.length !== 3) {
      console.log(`Error, not able to extract instructions. ${instructions}`);
      break;
    }

    const cratesToMove = Number(instructions![0]);
    const from = Number(instructions![1]);
    const to = Number(instructions![2]);

    for (let i = 0; i < cratesToMove; i++) {
      const crate = stacks[from].pop();

      if (crate) {
        stacks[to].push(crate);
      }
    }
  }

  return stacks;
}

function moveStacksWith9001(stacks: Stacks): Stacks {
  const moves = getInputAsArray(path.resolve(__dirname, './moves.txt'));

  for (const move of moves) {
    const instructions = move.match(/\d+/g);

    if (instructions && instructions.length !== 3) {
      console.log(`Error, not able to extract instructions. ${instructions}`);
      break;
    }

    const cratesToMove = Number(instructions![0]);
    const from = Number(instructions![1]);
    const to = Number(instructions![2]);
    const crate = stacks[from].splice(-cratesToMove, cratesToMove);
    stacks[to].push(...crate);
  }

  return stacks;
}
