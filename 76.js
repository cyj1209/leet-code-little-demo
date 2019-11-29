/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let map = {};
  let windowMap = {};
  for (let i = 0; i < t.length; i++) {
    if (map[t[i]] === undefined) {
      map[t[i]] = 1;
      windowMap[t[i]] = 0;
    } else {
      map[t[i]] += 1;
    }
  }
  let left = 0;
  let right = 0;
  let bits = 0;
  let res = "";
  while (right < s.length) {
    if (windowMap[s[right]] !== undefined) {
      windowMap[s[right]]++;
      if (windowMap[s[right]] <= map[s[right]]) {
        bits++;
        while (bits === t.length) {
          if (res === "" || res.length > right - left) {
            res = s.substring(left, right + 1);
            if (res.length === t.length) {
              return res;
            }
          }
          if (windowMap[s[left]] !== undefined) {
            windowMap[s[left]]--;
            if (windowMap[s[left]] < map[s[left]]) {
              bits--;
            }
          }

          left++;
        }
      }
    }
    right++;
  }
  return res;
};

let s = "ADOBECODEBANC";
let t = "ABC";

s = "cabwefgewcwaefgcf";
t = "cae";

console.log(minWindow(s, t));
