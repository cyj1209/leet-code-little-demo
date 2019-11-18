/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  nums = nums.sort((a, b) => a - b);
  let res = [];
  let length = nums.length;
  let j;
  let l, r, value;
  for (let i = 0; i < length - 3; i++) {
    for (j = i + 1; j < length - 2; j++) {
      l = j + 1;
      r = length - 1;
      while (l < r) {
        value = nums[i] + nums[j] + nums[l] + nums[r];
        if (value === target) {
          res.push([nums[i], nums[j], nums[l], nums[r]]);
          r--;
          l++;
          while (nums[r + 1] === nums[r]) {
            r--;
          }
          while (nums[l - 1] === nums[l]) {
            l++;
          }
        } else if (value > target) {
          r--;
          while (nums[r + 1] === nums[r]) {
            r--;
          }
        } else {
          l++;
          while (nums[l - 1] === nums[l]) {
            l++;
          }
        }
      }
      while (nums[j + 1] === nums[j]) {
        j++;
      }
    }
    while (nums[i] === nums[i + 1]) {
      i++;
    }
  }
  return res;
};

// [1,0,-1,0,-2,2]
// 0

console.log(fourSum([-3, -2, -1, 0, 0, 1, 2, 3], 0));
debugger;
