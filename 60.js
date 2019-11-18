/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  let a = [];
  for (let i = 1; i <= n; i++) {
    a.push(i);
  }
  let res = "";
  let factorialArray = factorial(n - 1);
  let length = factorialArray.length - 1;
  setRes(k, 0);
  return res;

  function setRes(k, position) {
    if (k === 1) {
      res += a.join("");
      return;
    }
    if (k === 0) {
      for (let i = a.length - 1; i >= 0; i--) {
        res += a[i];
      }
      return;
    }
    if (position === n - 2) {
      res += a[1];
      res += a[0];
      return;
    }

    let index = 0;
    if (k > factorialArray[length - position]) {
      index = Math.ceil(k / factorialArray[length - position]) - 1;
      k -= factorialArray[length - position];
    }
    res += a[index];
    a.splice(index, 1);
    if (k > factorialArray[length - position]) {
      k = k % factorialArray[length - position];
    }
    setRes(k, position + 1);
  }

  function factorial(n) {
    let res = [2];
    let t = 2;
    for (let i = 3; i <= n; i++) {
      t *= i;
      res.push(t);
    }
    return res;
  }
};
console.log(getPermutation(5, 37)); // 24135
console.log(getPermutation(4, 18)); // 3421
console.log(getPermutation(3, 5)); // 312
console.log(getPermutation(4, 13)); //3124
