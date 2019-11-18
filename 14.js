/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs[0]) {
    return "";
  } else if (strs.length === 1) {
    return strs[0];
  }
  let pre = "";
  let i;
  let length = strs.length;
  let isContinue = true;
  let isNotSave = false;
  while (isContinue) {
    let j = pre.length;
    for (i = 0; i < length - 1; i++) {
      if (j >= strs[i].length - 1) {
        isContinue = false;
      }
      if (strs[i][j] !== strs[i + 1][j]) {
        isNotSave = true;
        isContinue = false;
        break;
      }
    }
    isNotSave || (pre += strs[0][j]);
  }
  return pre;
};
let strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(["", ""]));
