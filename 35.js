/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  // 假设都是升序的
  let length = nums.length;
  if (target > nums[length - 1]) {
    return length;
  }
  if (target <= nums[0]) {
    return 0;

    if (target === nums[length - 1]) {
      return length - 1;
    }

    return binSearch(1, length - 2);

    function binSearch(start, finish) {
      let size = finish - start;
      if (size < 2) {
        if (start === finish) {
          if (target <= nums[start]) {
            return start;
          } else {
            return start + 1;
          }
        }
        if (nums[start] >= target) {
          return start;
        } else {
          return finish;
        }
      }
      let middle = start + Math.floor(size / 2);
      if (nums[middle] === target) {
        return middle;
      }
      if (nums[middle] < target) {
        return binSearch(middle + 1, finish);
      } else {
        return binSearch(start, middle - 1);
      }
    }
  }
};

let nums, target;

nums = [1, 3, 6, 9];
target = 9;

console.log(searchInsert(nums, target));
