/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  candidates = candidates.sort((a, b) => a - b);
  return com(target, 0);
  function com(target, i) {
    let res = [];
    while (candidates[i] <= target && i < candidates.length) {
      if (candidates[i] <= target - candidates[i]) {
        let result = com(target - candidates[i], i + 1);
        res.push(
          ...result.map(item => {
            item.push(candidates[i]);
            return item;
          })
        );
        
      } else if (candidates[i] === target) {
        res.push([candidates[i]]);
      }
      while (candidates[i + 1] === candidates[i]) {
        i++;
      }
      i++;
    }
    return res;
  }
};
let a;
let t;
a = [2, 5, 2, 1, 2];
t = 5;
a = [10,1,2,7,6,1,5]
t = 8;

// console.log(combinationSum(a, t));
combinationSum2(a, t).forEach(item => {
  console.log(item.join(","));
});
debugger;
