/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n === 1) {
    return "1";
  } else {
    let res = countAndSay(n - 1);
    let i = 0;
    let j = 1;
    let str = "";
    while (j < res.length) {
      if (res[i] !== res[j]) {
        str += `${j - i}${res[i]}`;
        i = j;
      }
      j++;
    }
    str += `${j - i}${res[i]}`;
    return str;
  }
};

// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221

console.log(countAndSay(5));
