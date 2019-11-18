/**
 * @param {number} n
 * @return {string[][]}
 */
var totalNQueens = function(n) {
  if (n === 1) {
    return 1;
  }
  if (n < 4) {
    return 0;
  }
  let res = 0;
  let max = Math.pow(2, n) - 1;
  for (let i = 0; i < n; i++) {
    find(fillMap(new Array(n).fill(max), 0, i), 1);
  }
  return res;

  function find(map, y) {
    if (y === n - 1) {
      if (map[y] !== 0) {
        res++;
      }
      return;
    }
    while (map[y] !== 0) {
      let x = Math.floor(Math.log2(map[y]));
      find(fillMap([...map], y, x), y + 1);
      map[y] -= Math.pow(2, x);
    }
    return;
  }

  function fillMap(map, y, x) {
    let h = Math.pow(2, x);
    map[y] = h;
    for (let i = y + 1; i < n; i++) {
      let t = h;
      let positiveX = i - y + x;
      if (positiveX >= 0 && positiveX < n) {
        t += Math.pow(2, positiveX);
      }
      let negativeX = x + y - i;
      if (negativeX < n && negativeX >= 0) {
        t += Math.pow(2, negativeX);
      }
      map[i] &= max - t;
    }
    return map;
  }
};

console.log(totalNQueens(5));

