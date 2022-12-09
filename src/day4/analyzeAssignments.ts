import path = require('path');
import {getInputAsArray} from '../util/fileHandler';

interface Assignments {
  Elf1: string;
  Elf2: string;
}

export function getFullyOverlappedAssignments(): number {
  const input = getInputAsArray(path.resolve(__dirname, './input.txt'));
  let overlappedAssignments = 0;

  for (const contents of input) {
    const assignments = getAssignments(contents);
    const isOverlapped = countFullyOverlappedAssignments(
      assignments.Elf1,
      assignments.Elf2
    );

    if (isOverlapped) {
      overlappedAssignments += 1;
    }
  }

  return overlappedAssignments;
}

export function getOverlappedAssignments(): number {
  const input = getInputAsArray(path.resolve(__dirname, './input.txt'));
  let overlappedAssignments = 0;

  for (const contents of input) {
    const assignments = getAssignments(contents);
    const isOverlapped = countOverlappedAssignments(
      assignments.Elf1,
      assignments.Elf2
    );

    if (isOverlapped) {
      overlappedAssignments += 1;
    }
  }

  return overlappedAssignments;
}

function getAssignments(assignments: string): Assignments {
  const splitAssignments = assignments.split(',');
  const assignment1 = splitAssignments[0];
  const assignment2 = splitAssignments[1];

  return {
    Elf1: assignment1,
    Elf2: assignment2,
  };
}

function countFullyOverlappedAssignments(
  assign1: string,
  assign2: string
): boolean {
  const assign1Arr = range(
    Number(assign1.split('-')[0]),
    Number(assign1.split('-')[1])
  );
  const assign2Arr = range(
    Number(assign2.split('-')[0]),
    Number(assign2.split('-')[1])
  );

  const check = assign1Arr.every(x => assign2Arr.includes(x));
  const check2 = assign2Arr.every(x => assign1Arr.includes(x));

  if (check || check2) {
    return true;
  }

  return false;
}

function countOverlappedAssignments(assign1: string, assign2: string): boolean {
  const assign1Arr = range(
    Number(assign1.split('-')[0]),
    Number(assign1.split('-')[1])
  );
  const assign2Arr = range(
    Number(assign2.split('-')[0]),
    Number(assign2.split('-')[1])
  );

  const check = assign1Arr.some(x => assign2Arr.includes(x));
  const check2 = assign2Arr.some(x => assign1Arr.includes(x));

  if (check || check2) {
    return true;
  }

  return false;
}

function range(min: number, max: number): number[] {
  const diff = max - min;
  const result = [];

  if (diff === 0) {
    return [max];
  }

  while (min <= max) {
    result.push(min);
    min += 1;
  }

  return result;
}
