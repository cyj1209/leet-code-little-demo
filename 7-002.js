/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let y = 0;
  if (x < 0) {
    y = -__reverse__(-x, 0);
    if (y < -2147483648) {
      return 0;
    }
  } else {
    y = __reverse__(x, 0);
    if (y > 2147483647) {
      return 0;
    }
  }
  return y;

  function __reverse__(x, base) {
    if (x > 0) {
      base = base * 10 + (x % 10);
      console.log(x, base);
      return __reverse__(Math.floor(x / 10), base);
    } else {
      return base;
    }
  }
};

const x = 123;
console.log(reverse(x));
