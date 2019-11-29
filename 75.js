/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  // 模仿快排 双指针，首位
  let l = 0;
  let r = nums.length - 1;
  let one = 0;

  while (one <= r) {
    if (nums[one] === 0) {
      [nums[l], nums[one]] = [nums[one], nums[l]];
      l++;
      one++;
    } else if (nums[one] === 1) {
      one++;
    } else {
      [nums[r], nums[one]] = [nums[one], nums[r]];
      r--;
    }
  }
};

let nums = [2, 0, 2, 1, 1, 0];

nums = [2, 0, 1];
// nums = [0, 0];
sortColors(nums);
console.log(nums);
debugger;
