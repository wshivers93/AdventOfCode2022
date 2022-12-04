import path = require('path');
import {getInputAsArray} from '../util/fileHandler';

interface Rules {
  X: number;
  Y: number;
  Z: number;
}

export function playGame(): number {
  const input = getInputAsArray(path.resolve(__dirname, './input.txt'));
  let yourScore = 0;

  for (const moves of input) {
    if (moves) {
      const oppMove = moves.split(' ')[0];
      const yourMove = moves.split(' ')[1];

      yourScore += calcScore(oppMove, yourMove);
    }
  }

  return yourScore;
}

export function playGameWithStrategyGuide(): number {
  const input = getInputAsArray(path.resolve(__dirname, './input.txt'));
  let yourScore = 0;

  for (const moves of input) {
    if (moves) {
      const oppMove = moves.split(' ')[0];
      const result = moves.split(' ')[1];

      yourScore += calcScoreForStrategyGuide(oppMove, result);
    }
  }

  return yourScore;
}

function calcScore(oppChoice: string, yourChoice: string): number {
  const rules: Rules = {
    X: 1,
    Y: 2,
    Z: 3,
  };
  const key = yourChoice as keyof Rules;
  let score = 0;

  score += getResult(oppChoice, yourChoice);
  score += rules[key];

  return score;
}

function getResult(oppChoice: string, yourChoice: string): number {
  const oppMove = mapLetterToMove(oppChoice);
  const yourMove = mapLetterToMove(yourChoice);

  if (oppMove === yourMove) {
    return 3;
  }
  if (oppMove === 'rock' && yourMove === 'paper') {
    return 6;
  }
  if (oppMove === 'rock' && yourMove === 'scissors') {
    return 0;
  }
  if (oppMove === 'paper' && yourMove === 'rock') {
    return 0;
  }
  if (oppMove === 'paper' && yourMove === 'scissors') {
    return 6;
  }
  if (oppMove === 'scissors' && yourMove === 'paper') {
    return 0;
  }
  if (oppMove === 'scissors' && yourMove === 'rock') {
    return 6;
  }

  throw new Error(`Invalid Input. Opp: ${oppChoice}, You: ${yourChoice}`);
}

function mapLetterToMove(move: string): string {
  if (move === 'A' || move === 'X') {
    return 'rock';
  }
  if (move === 'B' || move === 'Y') {
    return 'paper';
  }
  if (move === 'C' || move === 'Z') {
    return 'scissors';
  }

  throw new Error(`Invalid Input. Move: ${move}`);
}

function calcScoreForStrategyGuide(oppChoice: string, result: string): number {
  // X: lose, Y: draw, Z: win
  const oppMove = mapLetterToMove(oppChoice);
  if (oppMove === 'rock' && result === 'X') {
    return 3;
  }
  if (oppMove === 'paper' && result === 'X') {
    return 1;
  }
  if (oppMove === 'scissors' && result === 'X') {
    return 2;
  }
  if (oppMove === 'rock' && result === 'Y') {
    return 4;
  }
  if (oppMove === 'paper' && result === 'Y') {
    return 5;
  }
  if (oppMove === 'scissors' && result === 'Y') {
    return 6;
  }
  if (oppMove === 'rock' && result === 'Z') {
    return 8;
  }
  if (oppMove === 'paper' && result === 'Z') {
    return 9;
  }
  if (oppMove === 'scissors' && result === 'Z') {
    return 7;
  }

  throw new Error(
    `Invalid Input. Opponent Move: ${oppMove}, Result: ${result}`
  );
}
