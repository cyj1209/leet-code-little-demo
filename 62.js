/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let map = {};
  return __uniquePaths(m, n);
  function __uniquePaths(m, n) {
    let value = map[`${m}-${n}`] || map[`${n}-${m}`];
    if (value !== undefined) {
      return value;
    }
    if (m === 1 || n === 1) {
      return 1;
    } else {
      let a = __uniquePaths(m - 1, n);
      let b = __uniquePaths(m, n - 1);
      map[`${m - 1}-${n}`] = a;
      map[`${m}-${n - 1}`] = b;
      map[`${m}-${n}`] = a + b;
      return a + b;
    }
  }
};

console.log(uniquePaths(3, 4));
// debugger;
