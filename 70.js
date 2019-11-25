/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n < 3) {
    return n;
  }
  let i = 3;
  let lastTwo = 1;
  let last = 2;
  while (i <= n) {
    [last, lastTwo] = [last + lastTwo, last];
    i++;
  }
  return last;
};

console.log(climbStairs(4));
