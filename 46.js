/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let res = [[nums[0]]];
  for (let i = 1; i < nums.length; i++) {
    let newRes = [];
    let length = res[0].length;
    res.forEach(child => {
      for (let j = 0; j < length; j++) {
        let t = [];
        child.forEach((item, index) => {
          if (index === j) {
            t.push(nums[i]);
          }
          t.push(item);
        });
        newRes.push(t);
      }
      newRes.push([...child, nums[i]]);
    });
    res = newRes;
  }
  return res;
};

let nums;
nums = [1, 2, 3];
console.log(permute(nums));
debugger;
