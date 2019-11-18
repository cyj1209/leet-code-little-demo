/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  // 先转置 ，在翻转
  // in-place 怎么转置
  let length = matrix.length;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      let t = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = t;
    }
  }
  let s = 0;
  while (s < length) {
    let l = 0;
    let r = length - 1;
    while (l < r) {
      let t = matrix[s][l];
      matrix[s][l] = matrix[s][r];
      matrix[s][r] = t;
      l++;
      r--;
    }
    s++;
  }
};

let matrix;

matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// rotate(matrix);
matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];

matrix = [
  [1, 1, 1, 1, 1],
  [2, 2, 2, 2, 2],
  [3, 3, 3, 3, 3],
  [4, 4, 4, 4, 4],
  [5, 5, 5, 5, 5]
];
rotate(matrix);
