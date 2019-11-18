var swap = function(nums, i, j) {
    if (i === j)
        return;
    const t = nums[i];
    nums[i] = nums[j];
    nums[j] = t;
};

var cal = function (nums, first, result) {
    if (nums.length === first) {
        result.push([...nums]);
        return;
    }

    const map = new Map();
    for (let i = first; i < nums.length; i++) {
        if (!map.get(nums[i])) {
            map.set(nums[i], true);
            swap(nums, first, i);
            cal(nums, first + 1, result);
            swap(nums, first, i);
        }
    }
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    if (nums == null)
        return;
    
    nums.sort((a, b) => a - b);
    const res = [];
    cal(nums, 0, res);
    return res; 
};

// 作者：ge-zi-xiao-mian-bao
// 链接：https://leetcode-cn.com/problems/permutations-ii/solution/hui-su-jian-zhi-deng-jie-ji-chu-quan-pai-lie-by-ge/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。