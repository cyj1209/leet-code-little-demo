/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  // 一次折半
  if (!matrix[0] || !matrix[0][0]) {
    return false;
  }
  let m = matrix.length;
  let n = matrix[0].length;
  return search(0, m * n - 1);
  function search(start, finish) {
    let length = finish - start;
    if (length <= 1) {
      let sI = Math.floor(start / n);
      let sJ = start % n;
      let fI = Math.floor(finish / n);
      let fJ = finish % n;
      if (target !== matrix[sI][sJ] && target !== matrix[fI][fJ]) {
        return false;
      }
      return true;
    }
    let middle = start + Math.ceil(length / 2);
    let i = Math.floor(middle / n);
    let j = middle % n;
    if (target > matrix[i][j]) {
      return search(middle, finish);
    } else if (target < matrix[i][j]) {
      return search(start, middle);
    } else {
      return true;
    }
  }
};

let matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
];
let target = 3;

matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
];
target = 0;

matrix = [];
// matrix = [[1]];

matrix = [
  [-9, -7, -7, -5, -3],
  [-1, 0, 1, 3, 3],
  [5, 7, 9, 11, 12],
  [13, 14, 15, 16, 18],
  [19, 21, 22, 22, 22]
];

matrix = [[1, 1]];

target = -4;

console.log(searchMatrix(matrix, target));
