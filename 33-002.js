/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  // 1 先确定是在前半部分还是后半部分
  let length = nums.length;
  if (nums[0] < nums[length - 1]) {
    return normalBinSearch(0, length, ascContinueSearch);
  }

  if (target > nums[0]) {
    // 存在去前部
    // 先折半找到
    return superBinSearch(nums[0], 0, length - 1);
  } else if (target < nums[length - 1]) {
    // 存在于后部
    return superBinSearch2(nums[length - 1], 0, length - 1);
  } else if (target === nums[0]) {
    return 0;
  } else if (target === nums[length - 1]) {
    return length - 1;
  } else {
    return -1;
  }

  function superBinSearch(min, start, finish) {
    let size = finish - start;
    if (size < 2) {
      return onTwoSize(start);
    }
    let middle = start + Math.floor(size / 2);
    if (nums[middle] < min) {
      return superBinSearch(min, start, middle - 1);
    } else if (nums[middle] > target) {
      // 转换为普通的二分查找
      return normalBinSearch(start, middle - 1, ascContinueSearch);
    } else if (nums[middle] < target) {
      // 需要强化的二分查找
      return superBinSearch(nums[middle], middle, finish);
    } else {
      // 既不大于又不小于，那就只有等于了
      return middle;
    }
  }

  function ascContinueSearch(middle) {
    if (nums[middle] < target) {
      return 1;
    } else if (nums[middle] > target) {
      return -1;
    } else {
      return 0;
    }
  }

  function superBinSearch2(max, start, finish) {
    let size = finish - start;
    if (size <= 2) {
      return onTwoSize(start);
    }
    let middle = start + Math.floor(size / 2);
    // 1 继续强化二分查找，-1 转化为普通二分查找， 0 返回middle

    if (max < nums[middle]) {
      return superBinSearch2(max, middle + 1, finish);
    } else if (nums[middle] < target) {
      // 转换为普通的二分查找
      return normalBinSearch(middle+1, finish , middle => {
        if (target > nums[middle]) {
          //
          return 1;
        } else if (target < nums[middle]) {
          // 抛弃右边继续找左边
          return -1;
        } else {
          return 0;
        }
      });
    } else if (nums[middle] > target) {
      // 需要强化的二分查找
      return superBinSearch2(nums[middle], start, middle - 1);
    } else {
      // 既不大于又不小于，那就只有等于了
      return middle;
    }
  }

  function normalBinSearch(start, finish, continueSearch) {
    let size = finish - start;
    if (size < 2) {
      return onTwoSize(start);
    }
    let middle = start + Math.floor(size / 2);
    //  -1 左边，0 就是middle ， 1 右边
    let flag = continueSearch(middle);
    if (flag === -1) {
      return normalBinSearch(start, middle - 1, continueSearch);
    } else if (flag === 1) {
      // 是否需要 +1
      return normalBinSearch(middle + 1, finish, continueSearch);
    } else {
      return middle;
    }
  }

  function onTwoSize(start) {
    if (nums[start] === target) {
      return start;
    } else if (nums[start + 1] === target) {
      return start + 1;
    } else {
      return -1;
    }
  }
};
let a, target;
a = [15,16,19,20,25,1,3,4,5,7,10,14]
target = 25;
console.log(search(a,target));

target = 6;
console.log(search(a, target));
console.log("·····················");

a = [4, 5, 6, 7, 0, 1, 2];
target = 5.5;
console.log(search(a, target));

target = 4;
console.log(search(a, target));
target = 5;
console.log(search(a, target));
target = 6;
console.log(search(a, target));
target = 7;
console.log(search(a, target));
target = 0;
console.log(search(a, target));
target = 1;
console.log(search(a, target));
target = 2;
console.log(search(a, target));

console.log("·····················");
a = [1, 3];
target = 0;
console.log(search(a, target));
a = [1, 3, 5];
target = 5;
console.log(search(a, target));
