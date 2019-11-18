/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle.length === 0) {
    return 0;
  } else if (haystack.length < needle.length) {
    return -1;
  }
  let length = haystack.length;
  let needleLength = needle.length;
  // 双指针 间隔双指针 ？
  let i = 0;
  let j = needle.length - 1;
  while (j < length) {
    if (haystack[i] === needle[0] && haystack[j] === needle[needleLength - 1]) {
      let n = 1;
      while (n < needleLength - 1) {
        if (haystack[i + n] !== needle[n]) {
          break;
        }
        n++;
      }
      if (n >= needleLength - 1) {
        return i;
      }
    }
    i++;
    j++;
  }
  return -1;
};

let str = "aabacaabcedfabc";
let needle = "abc";

str= 'a';
needle = 'a'

console.log(strStr(str, needle));
