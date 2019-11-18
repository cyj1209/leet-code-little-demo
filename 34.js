/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  // 思路先二分查找在找相同值
  let length = nums.length;
  let index;
  let res = [];
  if (target === nums[0]) {
    index = 0;
  } else if (target === nums[length - 1]) {
    index = length - 1;
  }
  if (index === undefined) {
    index = binSearch(1, length - 2);
  }
  if (index === -1) {
    return [-1, -1];
  }
  res.push(getStart(index));
  res.push(getFinish(index));
  return res;

  function binSearch(start, finish) {
    if (start < finish) {
      let middle = start + Math.floor((finish - start) / 2);
      if (nums[middle] > target) {
        return binSearch(start, middle - 1);
      } else if (nums[middle] < target) {
        return binSearch(middle + 1, finish);
      } else {
        return middle;
      }
    } else {
      if (nums[start] === target) {
        return start;
      } else {
        return -1;
      }
    }
  }
  function getStart(index) {
    while (index > 0) {
      index--;
      if (nums[index] !== target) {
        return index + 1;
      }
    }
    return 0;
  }

  function getFinish(index) {
    while (index < length - 1) {
      index++;
      if (nums[index] !== target) {
        return index - 1;
      }
    }
    return length - 1;
  }
};

let a, target;
a = [1, 2, 3];
target = 2;
console.log(searchRange(a, target));
