//给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。 
//
// 
//
// 示例 1: 
//
// 输入: [2,3,-2,4]
//输出: 6
//解释: 子数组 [2,3] 有最大乘积 6。
// 
//
// 示例 2: 
//
// 输入: [-2,0,-1]
//输出: 0
//解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。 
// Related Topics 数组 动态规划 
// 👍 778 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let n = nums.length;
    if (!n) return 0;
    let maxF = nums[0];
    let minF = nums[0];
    let ans = nums[0];
    for (let i = 1; i < n; i++) {
        let ma = maxF;
        let mi = minF;
        maxF = Math.max(nums[i], nums[i] * mi, nums[i] * ma);
        minF = Math.min(nums[i], nums[i] * mi, nums[i] * ma);
        ans = Math.max(ans, maxF);
    }
    return ans;
};
//leetcode submit region end(Prohibit modification and deletion)
