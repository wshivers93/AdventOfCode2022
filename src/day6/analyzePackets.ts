import path = require('path');
import {readInput} from '../util/fileHandler';

export function analyzePackets(marker: number): number {
  const input = readInput(path.resolve(__dirname, './input.txt'));
  const dataArr = input.split('');

  for (let i = 0; i < dataArr.length; i++) {
    const sectionToAnalyze = dataArr.slice(i, i + marker);
    const dedupe = new Set(sectionToAnalyze);

    if (dedupe.size === sectionToAnalyze.length) {
      return i + marker;
    }
  }

  throw new Error('Could not find start of packet or message');
}
