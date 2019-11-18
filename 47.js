/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  if (!nums) {
    return [];
  }
  let map = {};
  nums.forEach(value => {
    if (map[value] === undefined) {
      map[value] = 1;
    } else {
      map[value]++;
    }
  });
  let res = Object.keys(map).map(key => {
    return {
      value: [key],
      map: createNewMap(map, key)
    };
  });

  for (let time = 1; time < nums.length; time++) {
    let newRes = [];
    res.forEach(item => {
      newRes.push(
        ...Object.keys(item.map).map(key => {
          return {
            value: [...item.value, key],
            map: createNewMap(item.map, key)
          };
        })
      );
    });
    res = newRes;
  }

  return res.map(item => item.value);

  function createNewMap(map, key) {
    let newMap;
    if (map[key] === 1) {
      newMap = { ...map };
      delete newMap[key];
    } else {
      newMap = {
        ...map,
        [key]: map[key] - 1
      };
    }
    return newMap;
  }
};

let nums;
nums = [1, 1, 2, 2];

console.log(permuteUnique(nums));
debugger;
