// /**
//  * 失败
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var threeSum = function(nums) {
//   let table = creteTable(nums);
//   let res = [];
//   // console.log(table);
//   let time = {};
//   nums.forEach((value, index) => {
//     if (time[value] === undefined) {
//       if (table[0 - value]) {
//         let a = table[0 - value];
//         for (let i = 0; i < a.length; i++) {
//           if (a[i].indexOf(index) === -1) {
//             res.push([value, nums[a[i][0]], nums[a[i][1]]]);
//           }
//         }
//       }
//       time[value] = 1;
//     } else {
//       time[value]++;
//     }
//   });
//   if (time[0] >= 3) {
//     res.push([0, 0, 0]);
//   }
//   return res;
// };

// function creteTable(nums) {
//   let t = {};
//   let time = {};
//   let length = nums.length;
//   nums.forEach((value, i) => {
//     // if (time[value] === undefined && i < length - 1) {
//     time[value] = 1;
//     for (let j = i + 1; j < length; j++) {
//       if (time[nums[j]] === undefined) {
//         let count = nums[i] + nums[j];
//         if (t[count] === undefined) {
//           t[count] = [[i, j]];
//         } else {
//           t[count].push([i, j]);
//         }
//         time[nums[j]] = 1;
//       }
//     }
//     // }
//   });
//   // console.log(t);
//   return t;
// }


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let table = creteTable(nums);
  let res = [];
  nums.forEach((value, index) => {
    if (table[0 - value]) {
      table[0 - value].forEach(item => {
        if (item.indexOf(index) === -1) {
          res.push([index, ...item]);
        }
      });
    }
  });
  return res;
};

function creteTable(nums) {
  let t = {};
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let count = nums[i] + nums[j];
      if (t[count] === undefined) {
        t[count] = [[i, j]];
      } else {
        t[count].push([i, j]);
      }
    }
  }
  return t;
}


let nums = [
  7,
  5,
  -8,
  -6,
  -13,
  7,
  10,
  1,
  1,
  -4,
  -14,
  0,
  -1,
  -10,
  1,
  -13,
  -4,
  6,
  -11,
  8,
  -6,
  0,
  0,
  -5,
  0,
  11,
  -9,
  8,
  2,
  -6,
  4,
  -14,
  6,
  4,
  -5,
  0,
  -12,
  12,
  -13,
  5,
  -6,
  10,
  -10,
  0,
  7,
  -2,
  -5,
  -12,
  12,
  -9,
  12,
  -9,
  6,
  -11,
  1,
  14,
  8,
  -1,
  7,
  -13,
  8,
  -11,
  -11,
  0,
  0,
  -1,
  -15,
  3,
  -11,
  9,
  -7,
  -10,
  4,
  -2,
  5,
  -4,
  12,
  7,
  -8,
  9,
  14,
  -11,
  7,
  5,
  -15,
  -15,
  -4,
  0,
  0,
  -11,
  3,
  -15,
  -15,
  7,
  0,
  0,
  13,
  -7,
  -12,
  9,
  9,
  -3,
  14,
  -1,
  2,
  5,
  2,
  -9,
  -3,
  1,
  7,
  -12,
  -3,
  -1,
  1,
  -2,
  0,
  12,
  5,
  7,
  8,
  -7,
  7,
  8,
  7,
  -15
];
// nums = [-1, 0, 1, 2, -1, -4, 0, 0];

console.log(threeSum(nums));
debugger;
