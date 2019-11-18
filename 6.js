/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  // // 第一行的
  // index = i + 2 * (numRows-1);
  // // 第二行
  // index = i + 2 * (numRows- 1 - 1)
  // // 第三行
  // index = i + 2 * (numRows - 1 - 1 -1)
  let i = 0;
  let startIndex = 0;
  let length = s.length;
  let res = new Array(numRows).fill("");
  if(numRows  === 1){
    return s;
  }
  while (startIndex < length) {
    for (i = 0; i < numRows; i++) {
      if (startIndex + i >= length) {
        return res.join("");
      }
      res[i] += s[startIndex + i];
      if (i !== 0 && i !== numRows - 1) {
        if (startIndex + 2 * (numRows - 1) - i < length) {
          res[i] += s[startIndex + (2 * (numRows - 1) - i)];
        }
      }
    }
    startIndex += 2 * (numRows - 1);
  }
  return res.join("");
};

let s = "A";
let num = 1;
console.log(convert(s, num));

debugger;

