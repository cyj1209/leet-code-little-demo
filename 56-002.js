/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if (!intervals[0]) {
    return [];
  }
  let res = [];
  intervals.sort((a, b) => a[0] - b[0]);
  let l = intervals[0][0];
  let r = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    const [left, right] = intervals[i];
    if (left <= r) {
      r = Math.max(r, right);
    } else {
      res.push([l, r]);
      l = left;
      r = right;
    }
  }
  res.push([l, r]);
  return res;
};

let intervals;
// intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
intervals = [[1, 4], [4, 5]];

console.log(merge(intervals));
debugger;
