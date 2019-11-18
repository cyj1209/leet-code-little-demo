/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums = nums.sort((a, b) => a - b);
  let min = Infinity;
  let res;
  let length = nums.length;
  let left, right;
  for (let i = 0; i < length - 2; i++) {
    left = i + 1;
    right = length - 1;
    while (left < right) {
      let value = nums[i] + nums[left] + nums[right];
      let distance = Math.abs(value - target);
      if (distance < min) {
        if (distance === 0) {
          return value;
        }
        min = distance;
        res = value;
      }
      if (value < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return res;
};
console.log(threeSumClosest([1, 2, 4, 8, 16, 32, 64, 128], 82));
debugger;
