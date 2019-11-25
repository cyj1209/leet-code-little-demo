/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  const res = [0, 0, 1, 0, 0, 1, 0, 1, 1];
  const map = [
    [0, 1, 2, 3, -1, -1],
    [-1, -1, 2, 3, -1, -1],
    [8, -1, 2, 5, 4, -1],
    [-1, -1, 5, -1, -1, -1],
    [-1, 6, 7, -1, -1, -1],
    [8, -1, 5, -1, 4, -1],
    [-1, -1, 7, -1, -1, -1],
    [8, -1, 7, -1, -1, -1],
    [8, -1, -1, -1, -1, -1]
  ];
  let state = 0;
  for (let i = 0; i < s.length; i++) {
    state = map[state][getInputNum(s[i])];
    if (state === -1) {
      return false;
    }
  }
  return Boolean(res[state]);

  function getInputNum(char) {
    if (char === " ") {
      return 0;
    } else if (char === "+" || char === "-") {
      return 1;
    } else if (char > "/" && char < ":") {
      return 2;
    } else if (char === ".") {
      return 3;
    } else if (char === "e") {
      return 4;
    } else {
      return 5;
    }
  }
};

console.log(isNumber(".1"));
