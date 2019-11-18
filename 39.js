/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  candidates = candidates.sort((a, b) => a - b);
  return com(target, 0);
  function com(target, i) {
    let res = [];
    while (candidates[i] <= target) {
      if (candidates[i] <= target - candidates[i]) {
        let result = com(target - candidates[i], i);
        res.push(
          ...result.map(item => {
            item.push(candidates[i]);
            return item;
          })
        );
      } else if (candidates[i] === target) {
        res.push([candidates[i]]);
      }
      i++;
    }
    return res;
  }
};

let a = [2, 3, 6, 7];
let t = 7;
a = [2, 3, 4, 5, 6, 7, 8, 9, 10];
t = 10;
a = [8, 7, 4, 3];
t = 8;
a = [10,2,7,6,1,5];
t = 10

// console.log(combinationSum(a, t));
combinationSum(a, t).forEach(item => {
  console.log(item.join(","));
});
debugger;

// [2,3,4,5,6,7,8,9,10] 10
//  [
//     [2,8],
//         [2,6],
//             [2,4],
//                 [2,2]
//                 [4]
//             [3,3],
//             [6]
//         [3,5],
//             [2,3],
//             [5],
//         [4,4],
//             [2,2],
//             [4]
//         [8]
//     [3,7],
//         [2,5],
//             [2,3],
//             [5]
//         [3,4]
//             [2,2],
//             [4],
//         [7],
//     [4,6],
//         [2,4],
//             [2,2],
//             [4],
//         [3,3],
//         [6]
//     [5,5],
//     // [6,4],
//     // [7,3],
//     // [8,2],
//     [10],
// ]

// [2,3,6,7] 7
[[2, 5], [2, 3][(3, 4)], [2, 2][7]];
