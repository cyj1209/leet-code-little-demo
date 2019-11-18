/**
 * @param {string} s
 * @return {string}
 */
// 想用finish做为reallyPdm的key  失败
var longestPalindrome = function(s) {
  if (s.length < 2) {
    return s;
  }
  let obj = {};
  let reallyPdm = {};
  let maxStr = "";
  let char;

  for (let i = 0; i < s.length; i++) {
    char = s[i];
    if (obj[char] === undefined) {
      obj[char] = [i];
    } else {
      for (let j = 0; j < obj[char].length; j++) {
        const start = obj[char][j];
        if (i - start < 3) {
          savaPdm(start, i);
          break;
        } else {
          if (isPdm(start + 1, i - 1, s[i])) {
            savaPdm(start, i);
            break;
          }
        }
      }
      obj[char].push(i);
    }
    // console.log(reallyPdm);
  }
  if (!maxStr) {
    return s[0];
  }
  return maxStr;

  function savaPdm(start, finish) {
    //   reallyPdm[start] = finish;
    reallyPdm[finish] = start;
    if (maxStr.length < finish - start + 1) {
      maxStr = s.substring(start, finish + 1);
    }
    console.log(start,finish);
  }

  function isPdm(start, finish, char) {
    if (reallyPdm[finish] === undefined) {
      return false;
    } else {
      if (reallyPdm[finish] <= start && reallyPdm[finish] !== start-1){
        return true;
      }else{
          return isSameChar(start,finish+1);
      }
    }
  }

  function isSameChar(start, finish) {
    let char = s[start];
    for (start++; start < finish; start++) {
      if (s[start] !== char) {
        return false;
      }
    }
    return true;
  }
};

let s = "aaabbbaaaa";
// console.log(longestPalindrome(s));
// console.log("aaabaaa");
// s = "aaaa";
// console.log(longestPalindrome(s));
// console.log("aaaa");
// s = "ababababababa";
// console.log(longestPalindrome(s));
// console.log("ababababababa");

// s = "fafklkff";
// console.log(longestPalindrome(s));
// console.log("fklkf");
// s = 'abccbaabccba'
// console.log(longestPalindrome(s));
// console.log(s);
// s = 'aaabbbbbbbbbbbbbbaaaaaabbbbbbbbbbbbbbaaa'
s = 'aabbaaaabbaa'
console.log(longestPalindrome(s));
console.log(s);

debugger;