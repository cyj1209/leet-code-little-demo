/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let i = 2;
  let length = height.length;
  let maxSize = 0;
  getSize(0, 1);
  for (i; i < length; i++) {
    for (j = i - 1; j >= 0; j--) {
      getSize(j, i);
    }
  }
  return maxSize;

  function getSize(start, finish) {
    let size = Math.min(height[start], height[finish]) * (finish - start);
    if (size > maxSize) {
      maxSize = size;
    }
  }
};

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));
