/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = nums[0];
  let middle = 0;
  let before = 0;
  for (let i = 1; i < nums.length; i++) {
    let now = nums[i];
    if (now > max) {
      if (before > 0) {
        max = before + now;
        before = 0;
      } else if (before === 0) {
        if (middle + max > 0) {
          max += middle + now;
        } else {
          max = now;
        }
      } else {
        max = now;
        before = 0;
      }
      middle = 0;
    } else {
      if (now > 0) {
        if (before === 0) {
          if (middle + now > 0) {
            max += middle + now;
          } else {
            if (max + middle > 0) {
              before = max + middle + now;
            } else {
              before = now;
            }
          }
        } else if (before > 0) {
          before += now;
          if (before > max) {
            max = before;
            before = 0;
          }
        } else {
          before = now;
        }
        middle = 0;
      } else {
        if (before === 0) {
          middle += now;
        } else {
          if (before + now > 0) {
            before += now;
          } else {
            before = -1;
            middle = 0;
          }
        }
      }
    }
  }
  return max;
};

let nums;

// nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; // 6
// console.log(maxSubArray(nums), 6);
// nums = [8, -19, 5, -4, 20]; //21
// console.log(maxSubArray(nums), 21);
// nums = [1, 2, -1, -2, 2, 1, -2, 1, 4, -5, 4]; // 6
// console.log(maxSubArray(nums), 6);
// nums = [2, -1, 1, 1];
// console.log(maxSubArray(nums), 3);
// nums = [2, -3, 1, 3, -3, 2, 2, 1];
// console.log(maxSubArray(nums), 6);
// nums = [-7, 0, -4, 3, -1, 7, 4, -6, -3, 9, -5, 1, 0];
// console.log(maxSubArray(nums), 13);
// nums = [-9, -3, 2, 8, -6, 5, 2, -3, -9, 5, -5, -1, 9, -7, 4, 0, 1, 7, -4];
// console.log(maxSubArray(nums), 14);
// nums = [2, -1, -1, 2, 0, -3, 3];
// console.log(maxSubArray(nums), 3);
nums = [-8, 2, 2, -6, 2, -7, -7, 7, 1, 8, 1, -8];
console.log(maxSubArray(nums), 17);
