/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let longer = a.length - 1;
  let shorter = b.length - 1;
  
  if (longer < shorter) {
    [a, b] = [b, a];
    [longer, shorter] = [shorter, longer];
  }
  let carry = 0;
  let i =0;
  let res = "";
  let t;
  while (i <= shorter) {
    t = getCharRes(Number(a[longer-i]) + Number(b[shorter-i]) + carry)
    res = t[1] + res;
    carry = t[0];
    i++;
  }
  while (i <= longer) {
    t = getCharRes(Number(a[longer-i]) + carry);
    res = t[1] + res;
    carry = t[0];
    i++;
  }
  if (carry === 1) {
    res = "1" + res;
  }

  return res;

  function getCharRes(sum){
      switch(sum){
        case  0:
        return [0,0];
        case 1 :
        return [0,1];
        case 2 : 
        return [1,0];
        case 3 : 
        return [1,1]
      }
  }
};

let a = "101010";
let b = "1111";

console.log(addBinary(a, b));
