/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  if (obstacleGrid[0][0] === 1) {
    return 0;
  }
  obstacleGrid[0][0] = 1;
  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;
  let min = Math.min(m, n);
  let t = 0;
  for (let i = 1; i < n; i++) {
    if (obstacleGrid[t][i] === 0) {
      obstacleGrid[t][i] = obstacleGrid[t][i - 1];
    } else {
      obstacleGrid[t][i] = 0;
    }
  }
  for (let i = 1; i < m; i++) {
    if (obstacleGrid[i][t] === 0) {
      obstacleGrid[i][t] = obstacleGrid[i - 1][t];
    } else {
      obstacleGrid[i][t] = 0;
    }
  }
  t++;
  for (; t < min; t++) {
    setMap(t, t);
    for (let i = t + 1; i < n; i++) {
      setMap(t, i);
    }
    for (let j = t + 1; j < m; j++) {
      setMap(j, t);
    }
  }
  return obstacleGrid[m - 1][n - 1];
  function setMap(i, j) {
    if (obstacleGrid[i][j] === 0) {
      obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1];
    } else {
      obstacleGrid[i][j] = 0;
    }
  }
};

let a = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
];


console.log(uniquePathsWithObstacles(a));
