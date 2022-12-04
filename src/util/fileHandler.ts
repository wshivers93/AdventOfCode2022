import {readFileSync} from 'fs';

export function getInputAsArray(filepath: string): string[] {
  const data = readFileSync(filepath, 'utf-8');
  const dataArr = data.split(/\n/g);

  return dataArr;
}
