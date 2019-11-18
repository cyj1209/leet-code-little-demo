/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let i = 0;
  let j = nums.length - 1;
  while (i <= j) {
    while (nums[j] === val) {
      j--;
    }
    while (nums[i] !== val&&i<=j) {
      i++;
    }
    if (i < j) {
      nums[i] = nums[j];
      i++;
      j--;
    }
  }
  nums.length = i;
  return nums;
};

let a = [3, 3, 3, 1, 2, 3, 3, 4];
// console.log(removeElement(a, 3));

// a = [1, 2, 3, 3, 3, 3, 4];
// console.log(removeElement(a, 3));

a = [3, 2, 2, 3];
console.log(removeElement(a, 3));

debugger;
