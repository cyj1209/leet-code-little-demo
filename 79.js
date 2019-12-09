/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  let m = board.length;
  let n = board[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (word.startsWith(board[i][j]) && match(i, j, 0)) {
        return true;
      }
    }
  }
  return false;
  function match(i, j, position) {
    if (position === word.length) {
      return true;
    }
    if (i < 0 || j < 0 || i === m || j === n) {
      return false;
    }
    if (word[position] !== board[i][j]) {
      return false;
    }
    let oldChar = board[i][j];
    board[i][j] = "visited";
    let res =
      match(i, j + 1, position + 1) ||
      match(i, j - 1, position + 1) ||
      match(i - 1, j, position + 1) ||
      match(i + 1, j, position + 1);
    board[i][j] = oldChar;
    return res;
  }
};

let board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"]
];

let word = "BCCEDF";

// board = [
//   ["A", "B", "C", "E"],
//   ["S", "F", "E", "S"],
//   ["A", "D", "E", "E"]
// ];
// word = "ABCEFSADEESE";

console.log(exist(board, word));
