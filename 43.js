/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 === "0" || num2 === "0") {
    return "0";
  }
  if (num1.length < num2.length) {
    let t;
    t = num2;
    num2 = num1;
    num1 = t;
  }
  num1 = num1.split("").reverse();
  num2 = num2.split("").reverse();
  let length1 = num1.length - 1;
  let length2 = num2.length - 1;
  let maxLength = length1 + length2 + 2;
  let res = "";
  let rest = 0;
  for (let i = 0; i < maxLength; i++) {
    let l, r;
    if (i <= length1) {
      r = 0;
      l = i;
    } else {
      l = length1;
      r = i - length1;
    }
    while (l > r && r <= length2) {
      rest += num1[l] * num2[r];
      if (length2 >= l) {
        rest += num1[r] * num2[l];
      }
      l--;
      r++;
    }
    if (l === r && r <= length2) {
      rest += num1[l] * num2[r];
    }
    res = (rest % 10) + res;
    rest = Math.floor(rest / 10);
  }
  if(res.startsWith('0')){
      return res.substring(1);
  }
  return res;
};

let num1;
let num2;
num1 = "6";
num2 = "501";
console.log(multiply(num1, num2));

num1 = "12345";
num2 = "12345";
console.log(multiply(num1, num2));
num1 = "123456789";
num2 = "987654321";
console.log(multiply(num1, num2));
num1 = "1234567890";
num2 = "9876543210";
console.log(multiply(num1, num2));
num1 = "12345678901";
num2 = "98765432109";
console.log(multiply(num1, num2));
