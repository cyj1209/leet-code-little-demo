/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n === 0) {
    return 1;
  }
  if (n > 0) {
    return __pow(n);
  } else {
    return 1 / __pow(-n);
  }
  function __pow(n) {
    if (n === 2) {
      return x * x;
    }
    if (n === 1) {
      return x;
    }
    if (n % 2 === 0) {
      let t = __pow(n / 2);
      return t * t;
    } else {
      let t = __pow((n - 1) / 2);
      return t * t * x;
    }
  }
};

let x, n;
x = -2.1;
n =10;
console.log(myPow(x, n));
