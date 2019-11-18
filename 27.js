/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let i = 0;
  if (nums[0] !== val) {
    i = 1;
  }
  let j = 1;
  let length = nums.length;
  while (j < length) {
    if (nums[j] === val) {
      j++;
    } else {
      nums[i] = nums[j];
      i++;
      j++;
    }
  }
  nums.length = i;
  return nums;
};

let a = [3, 3, 3, 1, 2, 3, 3, 4];
console.log(removeElement(a, 3));

// a = [1, 2, 3, 3, 3, 3, 4];
// console.log(removeElement(a, 3));

debugger;
