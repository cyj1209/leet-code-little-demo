/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  // start with the first number and at each stage decide whether it makes sense to keep the previous chain or restart
  let currentSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; ++i) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
};
