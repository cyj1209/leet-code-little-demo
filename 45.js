/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  if(nums.length === 1){
    return 0 ;
  }
  if(nums[0] >= nums.length-1){
    return 1 ;
  }
  let index = 0;
  let length = nums.length;
  let times = 0;
  while (index < length) {
    //找到下一次能跳的最长
    let max = 0;
    let maxIndex = index;
    for (let i = 1; i <= nums[index]; i++) {
      let num = i + nums[index + i] + index;
      // 边界问题 是否已经到达了最后面
      if (num > max) {
        if (num >= length - 1) {
          return times + 2;
        }
        max = num;
        maxIndex = index + i;
      }
    }
    index = maxIndex;
    times++;
  }
};

let nums;
nums = [2, 3, 1, 1, 1, 4];
nums = [0];

console.log(jump(nums));
