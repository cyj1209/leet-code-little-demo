/**
 * @param {string} s
 * @return {string}
 */
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
        obj[char].forEach(start => {
          if (i - start < 3) {
            savaPdm(start, i);
          } else {
            if (isPdm(start + 1, i - 1)) {
              savaPdm(start, i);
            }
          }
        });
        obj[char].push(i);
        if(obj[char].length >= 3){
            obj[char].splice(1,1);
        }
      }
    }
    if (!maxStr) {
      return s[0];
    }
    return maxStr;
      
    function savaPdm(start, finish) {
      reallyPdm[start] = finish;
      if (maxStr.length < finish - start + 1) {
        maxStr = s.substring(start, finish + 1);
      }
    }
  
    function isPdm(start, finish) {
      if (reallyPdm[start] === undefined) {
        return false;
      } else {
        return reallyPdm[start] === finish;
      }
    }
  };