/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const table = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  let num = 0;
  let lastNum = 0;
  let i = s.length - 1;
  while (i > -1) {
      let now = table[s[i]];
      if(now >= lastNum){
          num += now;
      }else{
        num -= now;
      }
      lastNum = now;
      i--;
  }
  return num ;
};

console.log(romanToInt('IV'))


