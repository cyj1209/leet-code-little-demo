/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  if (!s) {
    if (p === "*" || p === s) {
      return true;
    } else {
      return false;
    }
  }
  let sLeft = 0;
  let pLeft = 0;
  let sRight = s.length - 1;
  let pRight = p.length - 1;
  while (p[pLeft] !== "*") {
    if (p[pLeft] !== s[sLeft] && p[pLeft] !== "?") {
      return false;
    }
    pLeft++;
    sLeft++;
    if (sLeft > sRight) {
      while (pLeft <= pRight) {
        if (p[pLeft] !== "*") {
          return false;
        }
        pLeft++;
      }
      return true;
    }
    if (pLeft > pRight) {
      return false;
    }
  }
  if (pLeft === pRight) {
    return true;
  }
  while (p[pRight] !== "*") {
    if (p[pRight] !== s[sRight] && p[pRight] !== "?") {
      return false;
    }
    pRight--;
    sRight--;
    if (sLeft > sRight) {
      while (pLeft <= pRight) {
        if (p[pLeft] !== "*") {
          return false;
        }
        pLeft++;
      }
      return true;
    }
  }
  if (pLeft > pRight) {
    return true;
  }
  return feeler();
  function feeler() {
    ++pLeft;
    --pRight;
    while (p[pLeft] === "?") {
      sLeft++;
      pLeft++;
      if (sLeft > sRight) {
        while (pLeft <= pRight) {
          if (p[pLeft] !== "*") {
            return false;
          }
          pLeft++;
        }
        return true;
      }
    }
    if (pLeft > pRight) {
      return true;
    }
    while (p[pRight] === "?") {
      sRight--;
      pRight--;
      if (sLeft > sRight) {
        while (pLeft <= pRight) {
          if (p[pLeft] !== "*") {
            return false;
          }
          pLeft++;
        }
        return true;
      }
    }
    if (pLeft > pRight) {
      return true;
    }
    let start = pLeft;
    let finish = pRight;
    while (sLeft <= sRight) {
      if (p[start] !== "*") {
        let res = "continue";
        if (s[sLeft] === p[start] || p[start] === "?") {
          res = __isLeftMatch__(sLeft + 1, sRight, pLeft + 1, pRight);
        }
        if (res === "continue") {
          sLeft++;
        } else if (res === "success") {
          return true;
        } else if (res === "fail") {
          return false;
        } else {
          sLeft = res.ss;
          pLeft = res.ps;
        }
      } else if (p[finish] !== "*") {
        if (s[sRight] === p[finish] || p[sRight] === "?") {
          finish--;
        } else {
          if (s[sRight] === p[pRight]) {
            finish = pRight - 1;
          } else {
            finish = pRight;
          }
        }
        sRight--;
      } else {
        pLeft = start;
        pRight = finish;
        return feeler();
      }
      if (start > finish) {
        return true;
      }
      if (sLeft > sRight) {
        if (start === finish && p[start] === "*") {
          return true;
        }
        return false;
      }
    }
    return false;
  }
  function __isLeftMatch__(ss, sf, ps, pf) {
    // 我这里我要干什么呢？
    // 1 开始匹配看看能不能匹配完，或者匹配到下一个*
    while (true) {
      if (p[ps] !== "*") {
        if (s[ss] === p[ps] || p[ps] === "?") {
          ss++;
          ps++;
          // 结束条件 成功的条件是被匹配的字符串完了
          if(ss > sf){

          }
          if (ps > pf) {
            return "success";
          }
        } else {
          return "continue";
        }
      } else {
        return {
          ss,
          ps
        };
      }
    }
  }

  function __isRightMatch__(ss, sf, ps, pf) {
    while (ss <= sf) {
      if (p[pf] !== "*") {
        if (s[sf] === p[pf] || p[pf] === "?") {
          sf--;
          pf--;
          if(){
            
          }
        } else {
          return "continue";
        }
      } else {
        return {
          sf,
          pf
        };
      }
    }
  }
};
let s, p;
// s = "a";
// p = "*a*";
// console.log(isMatch(s, p)),true;
// p = "*b*";
// console.log(isMatch(s, p),false);
s = "mississippi";
p = "m*iss*iss*";
console.log(isMatch(s, p));
p = "m??*ss*?i*pi";
console.log(isMatch(s, p));
s = "abefcdgiescdfimde";
p = "ab*cd?i*de";
console.log(isMatch(s, p));
s = "";
p = "*";
console.log(isMatch(s, p));
s = "ab";
p = "*?*?*";
console.log(isMatch(s, p));
