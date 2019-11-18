/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  let now = 1;
  let max = n * n;
  let times = 0;
  let i = 0;
  let j = 0;
  let res = [];
  for (; i < n; i++) {
    res.push([]);
  }
  i = 0;

  right(times);
  return res;

  function right(times) {
    do {
      res[i][j] = now;
      now++;
      j++;
    } while (j < n - 1 - times);
    if (now <= max) {
      down(times);
    }
  }
  function down(times) {
    do {
      res[i][j] = now;
      now++;
      i++;
    } while (i < n - 1 - times);
    if (now <= max) {
      left(times);
    }
  }
  function left(times) {
    do {
      res[i][j] = now;
      now++;
      j--;
    } while (j > times);
    if (now <= max) {
      up(times);
    }
  }
  function up(times) {
    do {
      res[i][j] = now;
      now++;
      i--;
    } while (i > times + 1);
    times++;
    if (now <= max) {
      right(times);
    }
  }
};

console.log(generateMatrix(3));
console.log(generateMatrix(4));
console.log(generateMatrix(5));
console.log(generateMatrix(6));

debugger;
