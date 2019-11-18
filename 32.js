/**
 * @param {string} s
 * @return {number}
 * 
 * 失败
 */
var longestValidParentheses = function(s) {
  let i = 0;
  let length = s.length;
  let stack = [];
  // let isShouldCount = false;
  let maxLength = 0;
  let middleOpenNum = null;
  let l = 0;
  let t = 0;
  // 入栈的时候如果是（ 就将 t 加到length上面 并且将

  while (i < length) {
    if (s[i] === "(") {
      stack.push("(");
      if(middleOpenNum === 0){
        l += t;
        t = 0;
      }
      if (middleOpenNum !== null) {
        middleOpenNum++;
      }
     

    } else {
      if (top() === "(") {
        t += 2;
        if (middleOpenNum === null || middleOpenNum === 0) {
          middleOpenNum = 0;
        } else {
          middleOpenNum--;
        }
        stack.pop();
      } else {
        saveMax();
      }
    }
    i++;
  }
  if (t !== 0) {
    if (!middleOpenNum || middleOpenNum < 0) {
      l += t;
    } else {
      if (t > l) {
        l = t;
      }
    }
  }
  if (l > maxLength) {
    return l;
  }
  return maxLength;

  function saveMax() {
    l += t;
    if (l > maxLength) {
      maxLength = l;
    }
    l = 0;
    t = 0;
    middleOpenNum = null;
  }

  function top() {
    if (stack.length === 0) {
      return undefined;
    }
    return stack[stack.length - 1];
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
