/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let str = "";
  const table = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M"
  };
  if (num < 10) {
    transform(num, 1);
  } else if (num < 100) {
    transform(num, 10);
  } else if (num < 1000) {
    transform(num, 100);
  } else {
    transform(num, 1000);
  }

  return str;
  function transform(num, places) {
    let now = Math.floor(num / places);
    let a = t(now);
    for (let i = 0; i < a.length; i++) {
      str += table[a[i] * places];
    }
    if (places > 1) {
      transform(num % places, places / 10);
    }
  }

  function t(num) {
    if (num < 4) {
      return new Array(num).fill(1);
    } else if (num < 6 || num === 9) {
      return [num];
    } else if (num < 9) {
      let res = new Array(num - 5).fill(1);
      res.unshift(5);
      return res;
    }
  }
};

console.log(intToRoman(1994));


var intToRoman = function(num) {
    let str = ''
    while(0 < num){
        if(num >= 1000) {str += 'M'; num -= 1000;}
        else if(num >= 900){str += 'CM'; num -= 900;}
        else if(num >= 500){str += 'D'; num -= 500;}
        else if(num >= 400){str += 'CD'; num -= 400;}
        else if(num >= 100){str += 'C'; num -= 100;}
        else if(num >= 90){str += 'XC'; num -= 90;}
        else if(num >= 50){str += 'L'; num -= 50;}
        else if(num >= 40){str += 'XL'; num -= 40;}
        else if(num >= 10){str += 'X'; num -= 10;}
        else if(num >= 9){str += 'IX'; num -= 9;}
        else if(num >= 5){str += 'V'; num -= 5;}
        else if(num >= 4){str += 'IV'; num -= 4;}
        else if(num >= 1){str += 'I'; num -= 1;}
    }
    return str
};
