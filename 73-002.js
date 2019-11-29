/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  let xZero = false;
  let yZero = false;
  let i = 0;
  let j = 0;
  if (matrix[0][0] === 0) {
    xZero = yZero = true;
  }
  for (i = 1; i < matrix[0].length; i++) {
    if (matrix[0][i] === 0) {
      xZero = true;
      matrix[0][i] = "zero";
    }
  }
  for (i = 1; i < matrix.length; i++) {
    if (matrix[i][0] === 0) {
      yZero = true;
      matrix[i][0] = "zero";
    }
  }
  for (i = 1; i < matrix.length; i++) {
    for (j = 1; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = "zero";
        matrix[0][j] = "zero";
      }
    }
  }

  for (i = 1; i < matrix.length; i++) {
    if (matrix[i][0] === "zero") {
      matrix[i] = new Array(matrix[0].length).fill(0);
    }
  }
  for (j = 1; j < matrix[0].length; j++) {
    if (matrix[0][j] === "zero") {
      for (let i = 0; i < matrix.length; i++) {
        matrix[i][j] = 0;
      }
    }
  }
  if (xZero) {
    matrix[0] = new Array(matrix[0].length).fill(0);
  }
  if (yZero) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][0] = 0;
    }
  }
};

let a = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5]
];

setZeroes(a);
console.log(a);
debugger;
