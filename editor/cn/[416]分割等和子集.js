//给定一个只包含正整数的非空数组。是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。 
//
// 注意: 
//
// 
// 每个数组中的元素不会超过 100 
// 数组的大小不会超过 200 
// 
//
// 示例 1: 
//
// 输入: [1, 5, 11, 5]
//
//输出: true
//
//解释: 数组可以分割成 [1, 5, 5] 和 [11].
// 
//
// 
//
// 示例 2: 
//
// 输入: [1, 2, 3, 5]
//
//输出: false
//
//解释: 数组不能分割成两个元素和相等的子集.
// 
//
// 
// Related Topics 动态规划 
// 👍 515 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    if (nums.length < 2) return false;
    let max = 0;
    let sum = nums.reduce((prev, val) => {
        max = Math.max(max, val);
        return prev + val;
    }, 0);
    if (sum % 2 !== 0) return false;
    let target = sum / 2;
    if (target < max) return false;
    let dp = new Array(target + 1).fill(false);
    dp[0] = true;
    for (let i = 0; i < nums.length; i++) {
        for (let j = target; j >= nums[i]; j--) {
            dp[j] |= dp[j - nums[i]];
        }
    }
    return dp[target];
};
//leetcode submit region end(Prohibit modification and deletion)
