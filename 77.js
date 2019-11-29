/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let res = [];
  let i = 1;

  while (i <= n - k + 1) {
    res.push([i]);
    i++;
  }
  let digit = 1;
  while (digit < k) {
    let newRes = [];
    res.forEach(item => {
      let t = [];
      i = item[digit - 1] + 1;
      while (i <= n && i <= n - k + digit + 1) {
        t.push(item.concat(i));
        i++;
      }
      newRes = newRes.concat(t);
    });
    res = newRes;
    digit++;
  }
  return res;
};

console.log(combine(6, 4));
debugger;
