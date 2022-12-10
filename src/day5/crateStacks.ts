const stack1 = ['D', 'B', 'J', 'V'];
const stack2 = ['P', 'V', 'B', 'W', 'R', 'D', 'F'];
const stack3 = ['R', 'G', 'F', 'L', 'D', 'C', 'W', 'Q'];
const stack4 = ['W', 'J', 'P', 'M', 'L', 'N', 'D', 'B'];
const stack5 = ['H', 'N', 'B', 'P', 'C', 'S', 'Q'];
const stack6 = ['R', 'D', 'B', 'S', 'N', 'G'];
const stack7 = ['Z', 'B', 'P', 'M', 'Q', 'F', 'S', 'H'];
const stack8 = ['W', 'L', 'F'];
const stack9 = ['S', 'V', 'F', 'M', 'R'];

export interface Stacks {
  [key: number]: string[];
}

export function getInitStacks(): Stacks {
  const stacks = {
    1: [...stack1],
    2: [...stack2],
    3: [...stack3],
    4: [...stack4],
    5: [...stack5],
    6: [...stack6],
    7: [...stack7],
    8: [...stack8],
    9: [...stack9],
  };

  return stacks;
}
