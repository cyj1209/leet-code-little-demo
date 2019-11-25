/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  let i = 1,
    j = 1;
  let m = grid.length;
  let n = grid[0].length;
  while (i < m) {
    grid[i][0] += grid[i - 1][0];
    i++;
  }
  while (j < n) {
    grid[0][j] += grid[0][j - 1];
    j++;
  }
  i = 1;
  while (i < m) {
    j = 1;
    while (j < n) {
      grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
      j++;
    }
    i++;
  }
  return grid[m - 1][n - 1];
};

let a = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1]
];

console.log(minPathSum(a));
