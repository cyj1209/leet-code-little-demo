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

  positiveArray.forEach(positive => {
    minusArray.forEach(minus => {
      let opposite = -(positive + minus);
      if (opposite > 0) {
        if (opposite >= positive) {
          if (opposite == positive) {
            saveSame(opposite, positiveObj, minus);
          } else {
            saveRes(minus, positive, opposite, positiveObj);
          }
        }
      } else if (opposite < 0) {
        if (opposite >= minus) {
          if (opposite == minus) {
            saveSame(opposite, minusObj, positive);
          } else {
            saveRes(minus, positive, opposite, minusObj);
          }
        }
      } else if (zeroTimes > 0) {
        res.push([minus, 0, positive]);
      }
    });
  });
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

// let a = [3, 0, -2, -1, 1, 2];

// console.log(threeSum(a));
// debugger;
