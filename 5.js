/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  //  怎么确定循环的字符串
  //  拿一个数组存储 看看他还有可能成为回文数吗？
  let sLength = s.length;
  if (sLength < 2) {
    return s;
  }
  let obj = {};
  let reallyPdm = [];
  let maxStr = "";
  let char;

  for (let i = 0; i < sLength; i++) {
    char = s[i];
    if (obj[char] === undefined) {
      obj[char] = [i];
    } else {
      for (let j = 0; j < obj[char].length; j++) {
        let start = obj[char][j];
        if (i - start < 3) {
          // 可以确定是一个回文
          savaPdm(start, i);
          break;
        } else {
          if (
            isPdm(start, i) ||
            // (isPdm(start, i - 1) && isSameChar(start, i))
            (isSameChar(start,i))
          ) {
            savaPdm(start, i);
            break;
          }
        }
      }
      obj[char].push(i);
    }
  }
  if (!maxStr) {
    return s[0];
  }
    console.log(obj);
    console.log(reallyPdm);
  return maxStr;

  function savaPdm(start, finish) {
    if (reallyPdm[start] === undefined) {
      reallyPdm[start] = [finish];
    } else {
      reallyPdm[start].push(finish);
    }
    if (maxStr.length < finish - start + 1) {
      maxStr = s.substring(start, finish + 1);
    }
    console.log(s.substring(start, finish + 1));
    console.log(start, finish);
  }

  function isPdm(start, finish) {
    if (reallyPdm[start + 1] === undefined) {
      for (start-1; start > 0; start--) {
        if (reallyPdm[start-1] !== undefined) {
          if (reallyPdm[start-1][reallyPdm[start-1].length - 1] >= finish -1 ) {
            return true;
          }
        }
      }
      return false;
    } else {
      return (
        reallyPdm[start + 1][reallyPdm[start + 1].length - 1] >= finish - 1
      );
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

let s = "aafcffaa";
// let s = 'bafefabb';
//  s = "ababababababa";
// s = "321012321001232101232100123210123"
s='abaccabacaba'

function isPdm(s){
    let i=0,j = s.length-1;
    for(;i<j;i++,j--){
        console.log(s[i],s[j],i);
        if(s[i]!== s[j]){
            return false;
        }
    }
    return true ;   
}

console.log(longestPalindrome(s));
// console.log(isPdm(s)) ;

// console.log("32101232100123210123")
console.log(s)
// log(s)
debugger;

function log(s){
    let str = '';
    for (let i = s.length -1; i >= 0; i--){
        str += s[i];
    }
    console.log(s);
    console.log(str);
}


