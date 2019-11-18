/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  // 特殊值 1 的时候只有一个解 [['Q']]
  // n < 4 的时候无解（可以自己在纸上画一画）
  if (n === 1) {
    return [["Q"]];
  }
  let res = [];
  let max = Math.pow(2, n) - 1;
  for (let i = 0; i < n; i++) {
    find(fillMap(new Array(n).fill(max), 0, i), 1);
  }
  return res;

  function fillMap(map, y, x) {
    let h = Math.pow(2, x);
    map[y] = h;
    // i的初始值为y+1 ==> 即计算下一排的数值
    for (let i = y + 1; i < n; i++) {
      let t = h;
      //   k = 1 ; =》 可以根据公式y - yo = k(x-xo) 计算 得出
      let positiveX = i - y + x;
      if (positiveX >= 0 && positiveX < n) {
        t += Math.pow(2, positiveX);
      }
      //   k = -1
      let negativeX = x + y - i;
      if (negativeX < n && negativeX >= 0) {
        t += Math.pow(2, negativeX);
      }
      map[i] &= max - t;
    }
    return map;
  }

  function find(map, y) {
    if (y === n - 1) {
      if (map[y] !== 0) {
        res.push(
          map.map(item => {
            let x = Math.log2(item);
            return ".".repeat(x) + "Q" + ".".repeat(n - 1 - x);
          })
        );
      }
      return;
    }
    while (map[y] !== 0) {
      let x = Math.floor(Math.log2(map[y]));
      find(fillMap([...map], y, x), y + 1);
      map[y] -= Math.pow(2, x);
    }
  }
};
