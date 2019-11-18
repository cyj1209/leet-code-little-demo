/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let i = 0;
  let j = 1;
  while (j < nums.length) {
    if (nums[i] === nums[j]) {
      j++;
    } else {
      i++;
      nums[i] = nums[j];
      j++;
    }
  }
  nums.length = i + 1;
  console.log(nums.length);
  return nums;
};

console.log(removeDuplicates([1, 1, 2]));
debugger;
