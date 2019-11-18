/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  let point = [];
  let leftNum = 0;
  let res = [];
  intervals.forEach(([left, right]) => {
    point.push(
      {
        value: left,
        isLeft: true
      },
      {
        value: right,
        isLeft: false
      }
    );
  });
  let t;
  point
    .sort((a, b) => {
      if (a.value === b.value) {
        if (a.isLeft) {
          return -1;
        }else if(b.isLeft){
          return 1;
        }
      }
      return a.value - b.value;
    })
    .forEach(({ value, isLeft }) => {
      if (isLeft) {
        if (leftNum === 0) {
          t = value;
        }
        leftNum++;
      } else {
        leftNum--;
        if (leftNum === 0) {
          res.push([t, value]);
        }
      }
    });
  return res;
};

let intervals;
// intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
intervals = [[1, 4], [4, 5]];

console.log(merge(intervals));
debugger;
