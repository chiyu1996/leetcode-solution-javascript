// 给定一个非负整数数组，a1, a2, ..., an, 和一个目标数，S。现在你有两个符号 + 和 -。对于数组中的任意一个整数，你都可以从 + 或 -中选
// 择一个符号添加在前面。
//
// 返回可以使最终数组和为目标数 S 的所有添加符号的方法数。
//
//
//
// 示例：
//
// 输入：nums: [1, 1, 1, 1, 1], S: 3
// 输出：5
// 解释：
//
// -1+1+1+1+1 = 3
// +1-1+1+1+1 = 3
// +1+1-1+1+1 = 3
// +1+1+1-1+1 = 3
// +1+1+1+1-1 = 3
//
// 一共有5种方法让最终目标和为3。
//
//
//
//
// 提示：
//
//
// 数组非空，且长度不会超过 20 。
// 初始的数组的和不会超过 1000 。
// 保证返回的最终结果能被 32 位整数存下。
//
// Related Topics 深度优先搜索 动态规划
// 👍 493 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
// dfs版 复杂度O(2^n)太慢了
// var findTargetSumWays = function(nums, S) {
//   const n = nums.length;
//   let result = 0;
//   const dfs = (node, depth) => {
//     if (depth === n) {
//       if (S === node) {
//         result += 1;
//       }
//     } else {
//       dfs(node + nums[depth], depth + 1);
//       dfs(node - nums[depth], depth + 1);
//     }
//   }
//   dfs(0, 0);
//   return result;
// };

var findTargetSumWays = function(nums, S) {
  const n = nums.length;
  const dp = new Array(n + 1).fill(undefined).map(() => new Int32Array(2001));
  dp[0][nums[0] + 1000] = 1;
  dp[0][-nums[0] + 1000] += 1;
  for (let i = 1; i < n; i++) {
    for (let sum = -1000; sum <= 1000; sum++) {
      if (dp[i - 1][sum + 1000] > 0) {
        dp[i][sum + nums[i] + 1000] += dp[i - 1][sum + 1000];
        dp[i][sum - nums[i] + 1000] += dp[i - 1][sum + 1000];
      }
    }
  }
  // 有一个S=10000000的case
  return S > 1000 ? 0 : dp[nums.length - 1][S + 1000];
};
// leetcode submit region end(Prohibit modification and deletion)
