var lengthOfLongestSubstring = function(s) {
  let obj = {};
  let charLength = 0;
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] === undefined) {
      obj[s[i]] = [i];
      charLength++;
    } else {
      obj[s[i]].push(i);
    }
  }
  let i = 0,length = s.length;
  if (charLength < 3) {return charLength;}
  let foundStr = [];
  let maxLength = 0;
  for (; i < length; i++) {
    let oldIndex = findOldIndex(foundStr, obj[s[i]]);
    if (oldIndex === -1) {
      foundStr.push(i);
    } else {
      if (foundStr.length > maxLength) {
        maxLength = foundStr.length;
        if (maxLength === charLength) {
          return maxLength;
        }
      }
      foundStr.splice(0, oldIndex + 1);
      if (foundStr.length + length - i <= maxLength) {
        return maxLength;
      }
      foundStr.push(i);
    }
  }
  foundStr.length > maxLength && (maxLength = foundStr.length);
  return maxLength;
};
function findOldIndex(foundStr, charArray) {
  if (!foundStr) {
    return -1;
  } else {
    let oldIndex = foundStr.findIndex(strIndex => {
      return charArray.indexOf(strIndex) > -1;
    });
    if (oldIndex === undefined) {
      return -1;
    } else {
      return oldIndex;
    }
  }
}
