/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  let xMap = new Array(9).fill(0);
  let yMap = new Array(9).fill(0);
  let zMap = new Array(9).fill(0);
  let value;
  let z;
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      value = board[i][j];
      if (value !== ".") {
        value =  Math.pow(2, value - 1);
        if ((value & xMap[i]) !== 0) {
          return false;
        } else {
          xMap[i] += value;
        }
        if ((value & yMap[j]) !== 0) {
          return false;
        } else {
          yMap[j] += value;
        }
        z = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        if ((value & zMap[z]) !== 0) {
          return false;
        } else {
          zMap[z] += value;
        }
      }
    }
  }
  return true;
};

let board;
board = [
  ["8", "1", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];
console.log(isValidSudoku(board));
