/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let last = digits.length - 1;

  __plusOne(last);
  return digits;

  function __plusOne(last) {
    if (digits[last] === 9) {
      digits[last] = 0;
      if (last === 0) {
        digits.unshift(1);
      } else {
        __plusOne(last - 1);
      }
    } else {
      digits[last] += 1;
    }
  }
};

let a = [1, 2, 3];
a = [9, 9, 9];

console.log(plusOne(a));

debugger;
