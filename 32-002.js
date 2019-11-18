/**
 * @param {string} s
 * @return {number}
 *
 */
var longestValidParentheses = function(s) {
  let i = 0;
  let length = s.length;
  let left = (right = start = maxLength = 0);
  __count__(() => i < length, () => i++, () => right > left);
  i--;
  left = right = 0;
  __count__(() => i >= 0, () => i--, () => left > right);
  return maxLength;
  function __count__(condition, iterator, resetCondition) {
    while (condition()) {
      if (s[i] === "(") {
        left++;
      } else {
        right++;
      }
      if (left === right) {
        maxLength = Math.max(left * 2, maxLength);
      } else if (resetCondition()) {
        left = right = 0;
      }
      iterator();
    }
  }
};

let s;

s = "()(()(((";
console.log(longestValidParentheses(s)); //2

s = "(()())(()";
console.log(longestValidParentheses(s)); //6

s = "(()())";
console.log(longestValidParentheses(s)); // 6

s = "(()()";
console.log(longestValidParentheses(s)); // 4
s = ")()())";
console.log(longestValidParentheses(s)); //4
s = "()(()";
console.log(longestValidParentheses(s)); // 2
s = "()(())";
console.log(longestValidParentheses(s)); // 6
s = "(()";
console.log(longestValidParentheses(s)); // 2
