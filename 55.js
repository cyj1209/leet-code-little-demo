/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let zeroStack = [];
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] !== 0) {
      while (
        nums[i] > zeroStack[zeroStack.length - 1] - i &&
        zeroStack.length
      ) {
        zeroStack.pop();
      }
    } else {
      zeroStack.push(i);
    }
  }
  return Boolean(!zeroStack.length);
};

let nums;

// nums = [3, 2, 1, 0, 4];
nums = [];
console.log(canJump(nums));
nums = [2,0,0];

console.log(canJump(nums));
