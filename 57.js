/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  if (!intervals[0]) {
    return [newInterval];
  }
  intervals.splice(findIndex(newInterval[0], 0, intervals.length - 1), 0, newInterval);
  let res = [];
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

  function findIndex(value, start, finish) {
    if (finish - start < 2) {
      if (value <= intervals[start][0]) {
        return start;
      } else if (value < intervals[finish][0]) {
        return finish;
      } else {
        return finish + 1;
      }
    }
    let middle = start + Math.floor((finish - start) / 2);
    if (value === intervals[middle][0]) {
      return middle;
    } else if (value > intervals[middle][0]) {
      return findIndex(value, middle + 1, finish);
    } else {
      return findIndex(value, start, middle - 1);
    }
  }
};

let intervals;
let newInterval;
intervals = [[0, 0], [1, 3], [5, 8], [9, 14], [15, 17], [19, 21]];
newInterval = [10, 18];
console.log(insert(intervals, newInterval));
// intervals = [[1, 3], [6, 9]];
// newInterval = [2, 5];
// console.log(insert(intervals, newInterval));

// intervals = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]];
// newInterval = [4, 8];
// console.log(insert(intervals, newInterval));
debugger;
