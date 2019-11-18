/**
 * @param {string} digits
 * @return {string[]}
 */
const map = {
  1: [],
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"]
};

var letterCombinations = function(digits) {
  // yao qiu 123 => 23=> 3
  if (!digits) {
    return [];
  }
  let res = [];
  function __combinations__(digits) {
    if (digits.length > 1) {
      let left = digits[0];
      __combinations__(digits.substring(1));
      res = res.reduce((pre, curr) => {
        pre.push(...map[left].map(char => char + curr));
        return pre;
      }, []);
    } else {
      res = map[digits];
    }
  }
  __combinations__(digits);
  return res;
};

console.log(letterCombinations("23"));
debugger;
