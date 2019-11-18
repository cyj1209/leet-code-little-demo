var threeSum = function(nums) {
  let positiveObj = {};
  let minusObj = {};
  let positiveArray = [];
  let minusArray = [];
  let zeroTimes = 0;
  let res = [];
  // let index = 0;
  // nums = nums.sort((a, b) => a - b);
  nums.forEach(value => {
    if (value > 0) {
      addToMap(value, positiveObj, positiveArray);
    } else if (value < 0) {
      addToMap(value, minusObj, minusArray);
    } else {
      zeroTimes++;
    }
  });

  if (zeroTimes > 2) {
    res.push([0, 0, 0]);
  }

  positiveArray = positiveArray.sort((a, b) => a - b);
  minusArray = minusArray.sort((a, b) => a - b);
  let i = 0;
  let j;
  let opposite = 0;
  let max = positiveArray[positiveArray.length - 1];
  let min = minusArray[0];
  for (i; i < positiveArray.length; i++) {
    let positive = positiveArray[i];
    for (j = minusArray.length - 1; j > -1; j--) {
      let minus = minusArray[j];
      opposite = -(positive + minus);
        console.log(minus, positive, opposite);
      if (opposite > 0) {
        if (opposite <= max) {
          if (opposite > positive) {
            saveRes(minus, positive, opposite, positiveObj);
          } else if (opposite === positive) {
            saveSame(opposite, positiveObj, minus);
          }
        } else {
          break;
        }
      } else if (opposite < 0) {
        // if (opposite >= min) {
        if (opposite < minus) {
          saveRes(minus, positive, opposite, minusObj);
        } else {
          if (opposite === minus) {
            saveSame(opposite, minusObj, positive);
          }
          break;
        }
        // } else {
        //   break;
        // }
      } else if (zeroTimes > 0) {
        res.push([minus, 0, positive]);
      }
    }
    if (opposite < min) {
      break;
    }
  }
  return res;

  function addToMap(value, map, array) {
    if (map[value] === undefined) {
      map[value] = 1;
      array.push(value);
    } else {
      map[value] += 1;
    }
  }

  function saveSame(same, map, rest) {
    if (map[same] > 1) {
      res.push([same, same, rest]);
    }
  }

  function saveRes(minus, positive, opposite, map) {
    if (map[opposite] !== undefined) {
      res.push([minus, opposite, positive]);
    }
  }
};

let a = [3, 0, -2, -1, 1, 2];
// a = [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6];
// a = [-1, 0, 1, 2, -1, -4];
// a = [6, 2, 2, 1, -1, 3, 5, -4, -4, 3, -4, 4, 9, -2, 5, 7, -3];

console.log(threeSum(a));
debugger;
