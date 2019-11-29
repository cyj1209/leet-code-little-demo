/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (!matrix[0]) {
    return false;
  }
  let m = matrix.length;
  let n = matrix[0].length;
  // 折半查找的进阶版，先确定是在那一排，在确定在那一列

  let row = findRow(0, m - 1);
  if (row === "fail") {
    return false;
  }

  return findClo(0, n - 1);

  function findClo(start, finish) {
    let length = finish - start;
    if (length <= 1) {
      if (target === matrix[row][start] || target === matrix[row][finish]) {
        return true;
      }
      return false;
    }
    let middle = start + Math.ceil(length / 2);
    if (target > matrix[row][middle]) {
      return findClo(middle, finish);
    } else if (target < matrix[row][middle]) {
      return findClo(start, middle);
    } else if (target === matrix[row][middle]) {
      return true;
    }
  }

  function findRow(start, finish) {
    let length = finish - start;
    if (length <= 1) {
      if (target >= matrix[start][0] && target <= matrix[start][n - 1]) {
        return start;
      }
      if (target >= matrix[finish][0] && target <= matrix[finish][n - 1]) {
        return finish;
      }
      return "fail";
    }
    let middle = start + Math.ceil(length / 2);
    if (target > matrix[middle][n - 1]) {
      return findRow(middle, finish);
    } else if (target < matrix[middle][0]) {
      return findRow(start, middle);
    } else if (target >= matrix[middle][0] && target <= matrix[middle][n - 1]) {
      return middle;
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
target = -4;

console.log(searchMatrix(matrix, target));
