// sample 100 ms submission
// 参考代码但是看不懂
/*
 * @lc app=leetcode id=29 lang=javascript
 *
 * [29] Divide Two Integers
 */
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  let dividendAbs = Math.abs(dividend);
  let divisorAbs = Math.abs(divisor);
  const limit = Math.pow(2, 31);
  let r = [];
  let i = 0;
  let cut = i + 1;
  let remainder = 0;
  while (i < String(dividendAbs).length) {
    while (
      Number(String(remainder) + String(dividendAbs).slice(i, cut)) <
        divisorAbs &&
      cut <= String(divisorAbs).length
    ) {
      cut++;
      r.push(0);
    }
    const result = slowDivide(
      Number(String(remainder) + String(dividendAbs).slice(i, cut)),
      divisorAbs
    );
    // r[cut - 1] = result.r
    r.push(result.r);
    i = cut;
    cut = i + 1;
    remainder = result.remainder;
  }
  const result = Number(r.join(""));
  if ((dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0)) {
    return Math.min(limit - 1, result);
  } else {
    return Math.max(-limit, -result);
  }
};
function slowDivide(dividend, divisor) {
  let r = 0;
  while (divisor <= dividend) {
    dividend = dividend - divisor;
    r++;
  }
  return {
    r,
    remainder: dividend
  };
}
