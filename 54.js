/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (!matrix[0]) {
    return [];
  }
  if (matrix[0].length === 1) {
    return matrix.map(item => item[0]);
  }
  let m = matrix.length;
  let n = matrix[0].length;
  let res = [matrix[0][0]];
  let times = 0;
  let i = 0;
  let j = 0;
  right(times);
  return res;


  function right(times) {
    j++;
    while (j < n - 1 - times) {
      res.push(matrix[i][j]);
      j++;
    }
    res.push(matrix[i][j]);
    if (m - 1 - times > i) {
      down(times);
    }
  }
  function down(times) {
    i++;
    while (i < m - 1 - times) {
      res.push(matrix[i][j]);
      i++;
    }
    res.push(matrix[i][j]);
    if (times < j) {
      left(times);
    }
  }
  function left(times) {
    j--;
    while (j > times) {
      res.push(matrix[i][j]);
      j--;
    }
    res.push(matrix[i][j]);
    if (times + 1 < i) {
      up(times);
    }
  }
  function up(times) {
    i--;
    while (i > times + 1) {
      res.push(matrix[i][j]);
      i--;
    }
    res.push(matrix[i][j]);
    times++;
    if (n - 1 - times > j) {
      right(times);
    }
  }
};

let matrix;

// matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
// // matrix = [[1, 2], [3, 4]];
matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
// matrix = [[1], [2]];

console.log(spiralOrder(matrix));
debugger;
