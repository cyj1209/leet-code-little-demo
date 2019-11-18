var lengthOfLongestSubstring = function(s) {
  let obj = {};
  let length = s.length;
  let i = 0;
  let foundStr = "";
  let maxLength = 0;
  let char = s[0];  
  while (char !== undefined) {
    if (obj[char] === undefined) {
      obj[char] = char;
      foundStr += char;
    } else {
      if (foundStr.length > maxLength) {
        maxLength = foundStr.length;
      }
      let [left, right] = foundStr.split(obj[char]);
      if (right !== undefined) {
        foundStr = right + char;
      } else {
        foundStr = left + char;
      }
      obj[char] = char;
      if (foundStr.length + length - i <= maxLength) {
        return maxLength;
      }
    }
    i++ ;
    char= s[i];
  }
  foundStr.length > maxLength && (maxLength = foundStr.length);
  return maxLength;
};

let s = "abcabcbb";

console.log(lengthOfLongestSubstring(s));

// debugger;
