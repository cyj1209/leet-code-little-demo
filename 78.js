/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  // 不含重复元素的整数数组
  if (nums[0] === undefined) {
    return [[]];
  }
  // 我应该尽可能的操作下标
  let n = nums.length;
  let digit = 0;
  let lastState = [];
  let res = [[]];
  while (digit < n - 1) {
    let i = digit;
    let t = [];
    //   while(){

    //   }
    digit++;
  }
};
let a = [
  58.74,
  69.76,
  171.17,
  456.45,
  285.28,
  76.69,
  35.31,
  291.86,
  6.47,
  58.2,
  66.37,
  2.68,
  1806.86,
  331.09,
  929.27,
  532.64,
  742.92,
  607.26,
  613.72,
  607.26,
  2721.04,
  82.43,
  1236.3,
  85.16,
  17.67,
  2383.0,
  647.85,
  463.19,
  5298.86
];
let sum = a.reduce((curr, pre) => (curr += pre), 0);
console.log(sum);
