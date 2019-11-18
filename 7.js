/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let res;
  if (x < 0) {
    res = -__reverse__(x.toString().substring(1));
    if (res < -2147483648) {
      return 0;
    }
    return res;
  } else {
    // return __reverse__(x.toString());
    res = __reverse__(x.toString());
    if (res > 2147483647) {
      return 0;
    }
    return res;
  }
  function __reverse__(str) {
    console.log(str);
    let s = "";
    let i = str.length - 1;
    for (i; i >= 0; i--) {
      s += str[i];
    }
    console.log(s);
    return parseInt(s, 10);
    //   return Number(s)
  }
};

let x = 1534236469;

let res = reverse(x);
console.log(typeof res);
console.log(res);
