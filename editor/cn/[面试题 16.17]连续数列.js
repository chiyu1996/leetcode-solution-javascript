//给定一个整数数组，找出总和最大的连续数列，并返回总和。 
//
// 示例： 
//
// 输入： [-2,1,-3,4,-1,2,1,-5,4]
//输出： 6
//解释： 连续子数组 [4,-1,2,1] 的和最大，为 6。
// 
//
// 进阶： 
//
// 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。 
// Related Topics 数组 分治算法 动态规划 
// 👍 47 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let n = nums.length;
    if (!n) return 0;
    let max = nums[0];
    let last = nums[0];
    for (let i = 1; i < n; i++) {
        let now = Math.max(last + nums[i], nums[i]);
        max = Math.max(now, max);
        last = now;
    }
    return max;
};
//leetcode submit region end(Prohibit modification and deletion)
