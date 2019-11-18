/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  let i = nums.length - 1;
  let start = findStart(i);
  if (start === -1) {
    reversal(0, i);
    return;
  }
  let j = start + 1;
  while (j <= i) {
    if (nums[j] <= nums[start]) {
      change(start, j - 1);
      break;
    }
    j++;
  }
  if (j === i + 1) {
    change(start, i);
  }
  reversal(start + 1, i);
  return;

  function findStart(i) {
    while (i > 0) {
      if (nums[i - 1] < nums[i]) {
        return i - 1;
      }
      i--;
    }
    return -1;
  }
  function change(start, finish) {
    let t = nums[start];
    nums[start] = nums[finish];
    nums[finish] = t;
  }
  function reversal(start, finish) {
    while (start < finish) {
      change(start, finish);
      start++;
      finish--;
    }
  }
};
let a = [3, 2, 1, 4];
a = [];
console.log(nextPermutation(a));

// 1,2,3 → 1,3,2 -> 2,1,3 -> 2,3,1 -> 3,1,2 -> 3,2,1
// 1,2,3,4 -> 1,2,4,3->1,3,2,4,->1,3,4,2 -> 1,4,2,3->1,4,3,2

// 3,2,1 → 1,2,3
// 1,1,5 → 1,5,1
