/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  // 我每次计算出能跳的最大长度，如果最大长度都不能越过0l 那么就跳不过了
  if (nums.length < 2) {
    return true;
  }
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      max = Math.max(max, nums[i] + i);
      if (max >= nums.length - 1) {
        return true;
      }
    } else {
      if (max <= i) {
        return false;
      }
    }
  }
  return true;
};

let nums;

// nums = [3, 2, 1, 0, 4];
// console.log(canJump(nums));
// nums = [];
// console.log(canJump(nums));
nums = [2, 0, 0];
console.log(canJump(nums));
// nums = [0];
// console.log(canJump(nums));
