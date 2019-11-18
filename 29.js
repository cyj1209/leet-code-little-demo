/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  if (dividend === 0) {
    return 0;
  }
  if (divisor === 1) {
    return dividend;
  }
  if (divisor === -1 && dividend <= -2147483648) {
    return 2147483647;
  }
  let flag = true;
  if (dividend < 0 === divisor < 0) {
    flag = false;
  }
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  let n = 0;
  while (dividend >= divisor) {
    dividend -= divisor;
    n++;
  }
  //   dividend = parseInt(dividend, 2);
  if (flag) {
    return 0 - n;
  }
  if (0 - dividend >= 2147483647) {
    return 2147483647;
  }
  return n;
};

let dividend = 11;
let divisor = 3;
// -2147483648
// -1

console.log(divide(-2147483648, -1));
