import {readFileSync} from 'fs';

export function readInput(filepath: string): string {
  const data = readFileSync(filepath, 'utf-8');

  return data;
}

export function getInputAsArray(filepath: string): string[] {
  const data = readFileSync(filepath, 'utf-8');
  const dataArr = data.split(/\n/g);

  return dataArr;
}

export function groupInputByN(filepath: string, n: number): string[][] {
  const dataArr = getInputAsArray(filepath);
  const groups: string[][] = [];
  let temp = [];
  let counter = 1;

  for (const line of dataArr) {
    temp.push(line);

    if (counter % n === 0) {
      groups.push(temp);
      temp = [];
    }

    counter += 1;
  }

  return groups;
}
