/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let res = [];
  function __p__(openP, closeP, str) {
    if (openP === 0 && closeP === 0) {
      res.push(str);
      return;
    }
    if (openP > 0) {
      __p__(openP - 1, closeP, str + "(");
    }
    if (closeP > 0 && closeP > openP) {
      __p__(openP, closeP - 1, str + ")");
    }
  }
  __p__(n, n, "");
  return res;
};

console.log(generateParenthesis(3));
debugger;
