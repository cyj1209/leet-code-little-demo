/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  //推导公式 牛顿法  两点无限接近的时候用切斜代替曲线。
  // 1 用斜率等式化简， 2 令 f(x) = 0 ; 3 求出递推公式
  let res = x;
  while (res * res < x) {
    res = (res + x / res) / 2;
  }
  return Math.floor(res);
};

console.log(mySqrt(0));

function sqrt3(a) {
  let x = a;
  while (x * x * x > a) {
    x = (2 * x * x * x + a) / (3 * x * x);
  }
  return Math.floor(x);
}

console.log(sqrt3(27));
