/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let fast = 0;
  let slow = 0;
  let times = 0;
  let lastValue = null;
  while (fast < nums.length) {
    if (nums[fast] === lastValue) {
      if (fast !== slow) {
        [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
      }
      if (times < 2) {
        times++;
        slow++;
      }
    } else {
      lastValue = nums[slow];
      times = 1;
      if (fast !== slow) {
        [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
      }
      slow++;
    }
    fast++;
  }
  return slow;
};

let nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
// nums = [1, 1, 1, 2, 2, 3];
// nums = [1, 2, 2];
// 给定的是排序数组，返回的应该也是排序数组
console.log(removeDuplicates(nums));
