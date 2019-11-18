/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let maxSize = 0;
  let i = 0;
  let j = height.length-1;
  while (i < j) {
    maxSize = Math.max(maxSize, (j - i) * Math.min(height[i], height[j]));
    if (height[i] > height[j]) {
      j--;
    } else {
      i++;
    }
  }
  return maxSize;
};
