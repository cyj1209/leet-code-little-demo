/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  // 我应该尽可能的操作下标
  let n = nums.length - 1;
  let res = [[]];
  let queue = nums.map((item, index) => [index]);

  while (queue.length) {
    let head = queue.shift();
    res.push(head.map(i => nums[i]));
    let lastIndex = head[head.length - 1];
    if (lastIndex !== n) {
      lastIndex++;
      while (lastIndex <= n) {
        queue.push([...head, lastIndex]);
        lastIndex++;
      }
    }
  }
  return res;
};

let nums = [1, 2, 3];

console.log(subsets(nums));
debugger;
