var twoSum = function(nums, target) {
  let obj = {};
  nums.forEach((value, index) => {
    obj[value] = index;
  });
  let i = 0,
    length = nums.length;
  for (; i < length; i++) {
    let rest = target - nums[i];
    if (obj[rest] !== undefined && obj[rest] !== i) {
      return [i, obj[rest]];
    }
  }
  return undefined;
};

let numArry = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(numArry, target));
