var firstMissingPositive = function(nums) {
  let t = [];
  let length = nums.length;
  nums.forEach(num => {
    if (num <= length) {
      if (num > 0) {
        let index = Math.floor((num-1) / 31);
        let value = Math.pow(2, num - index *31 - 1) 
        t[index] = t[index] | value;
      }
    }
  });
  let res = 1;
  for (let i = 0; i < t.length; i++) {
    if (!t[i]) {
      return 31 * i + 1;
    } else {
      let maxF = Math.floor(Math.log2(t[i])) + 1;
      let value = Math.pow(2, maxF) - 1;
      let f = value ^ t[i];
      if (f !== 0) {
        let j = 0;
        while (1) {
          if ((f & Math.pow(2, j)) !== 0) {
            return i * 31 + j +1;
          }
          j++;
        }
      } else {
        if (maxF !== 31 ) {
          return maxF +31 * (i) + 1 ;
        }
      }
    }
  }
  return res;
};
let a;
// a = [1,2,0]; // 3
// console.log(firstMissingPositive(a));
// a = [3,4,-1,1] // 2
// console.log(firstMissingPositive(a));
// a = [7,8,9,11,12]; //1
// console.log(firstMissingPositive(a));
// a = [4,1,2,3];
// console.log(firstMissingPositive(a));
// a = [10];
// console.log(firstMissingPositive(a));
a = [
  99,
  94,
  96,
  11,
  92,
  5,
  91,
  89,
  57,
  85,
  66,
  63,
  84,
  81,
  79,
  61,
  74,
  78,
  77,
  30,
  64,
  13,
  58,
  18,
  70,
  69,
  51,
  12,
  32,
  34,
  9,
  43,
  39,
  8,
  1,
  38,
  49,
  27,
  21,
  45,
  47,
  44,
  53,
  52,
  48,
  19,
  50,
  59,
  3,
  40,
  31,
  82,
  23,
  56,
  37,
  41,
  16,
  28,
  22,
  33,
  65,
  42,
  54,
  20,
  29,
  25,
  10,
  26,
  4,
  60,
  67,
  83,
  62,
  71,
  24,
  35,
  72,
  55,
  75,
  0,
  2,
  46,
  15,
  80,
  6,
  36,
  14,
  73,
  76,
  86,
  88,
  7,
  17,
  87,
  68,
  90,
  95,
  93,
  97,
  98
];
console.log(firstMissingPositive(a));
// let l = Math.pow(2,33) + Math.pow(2,31)
// console.log(l);
