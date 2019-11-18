/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  var solutions = [];
  var l;
  var r;

  nums = nums.sort(function(a, b) {
    return a - b;
  });

  for (i = 0; i < nums.length - 2; i++) {
    if (i - 1 >= 0 && nums[i] == nums[i - 1]) continue; // Skip equal elements to avoid duplicates
    l = i + 1;
    r = nums.length - 1;

    while (l < r ) {
      sum = nums[i] + nums[l] + nums[r];
      if (sum == 0) {
        solutions.push([nums[i], nums[l], nums[r]]);
        while (l < r && nums[l] === nums[l + 1]) l++;
        while (l < r && nums[r] === nums[r - 1]) r++;
        l += 1;
        r -= 1;
      } else if (sum < 0) {
        l++;
      } else {
        r--;
      }
    }
  }

  return solutions;
};
let a = [1, 1, -2];

console.log(threeSum(a));
debugger;
