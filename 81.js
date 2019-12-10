/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let isOrder = false;
  while (left <= right) {
    let length = right - left;
    if (length < 2) {
      return target === nums[left] || nums[right] === target;
    }
    let middle = left + Math.floor(length / 2);
    if (nums[middle] === target) {
      return true;
    }
    if(nums[left] === nums[middle]){
        left ++ ;
        continue
    }
    if (nums[left] < nums[middle]) {
      if (isOrder && target < nums[left]) {
        return false;
      }
      if (nums[middle] >= target && nums[left] <= target) {
        // 确定在左边升序的部分中
        isOrder = true;
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    } else {
      if (isOrder && target > nums[right]) {
        return false;
      }
      if (nums[middle] < target && target <= nums[right]) {
        // 确定在后边升序的部分
        isOrder = true;
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }
  return false;
};

let nums = [7, 8, 8, 9, 0, 0, 1, 2, 4, 5, 6, 7];
let target = 3;

// nums = [1, 3, 1, 1, 1];

nums = [1,1,3, 1];

// nums = [3, 5, 1];

console.log(search(nums, target));
