/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const map = {
    "]": "[",
    "}": "{",
    ")": "("
  };
  s = s.trim();
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (map[char] === undefined) {
      stack.push(char);
    } else {
      let top = getTop();
      if (top !== map[char] && top !== " ") {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;

  function getTop() {
    if (stack.length === 0) {
      return undefined;
    }
    return stack[stack.length - 1];
  }
};

console.log(isValid("()"));
