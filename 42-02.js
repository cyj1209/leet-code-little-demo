// int trap(vector<int>& height)
// {
//     int left = 0, right = height.size() - 1;
//     int ans = 0;
//     int left_max = 0, right_max = 0;
//     while (left < right) {
//         if (height[left] < height[right]) {
//             height[left] >= left_max ? (left_max = height[left]) : ans += (left_max - height[left]);
//             ++left;
//         }
//         else {
//             height[right] >= right_max ? (right_max = height[right]) : ans += (right_max - height[right]);
//             --right;
//         }
//     }
//     return ans;
// }
var trap = function(height) {
  // 1 那边小那边移动，固定一端求另一端
  let left = 0;
  let right = height.length - 1;
  let ans = 0;
  let left_max = 0;
  let right_max = 0;
  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= left_max) {
        left_max = height[left];
      } else {
        ans += left_max - height[left];
      }
      ++left;
    } else {
      if (height[right] >= right_max) {
        right_max = height[right];
      } else {
        ans += right_max - height[right];
      }
      --right;
    }
  }
  return ans;
}

let height;
// height = [0, 1, 0, 2, 1, 3, 1, 4, 2, 3, 0, 2, 5, 0];
height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

console.log(trap(height));
