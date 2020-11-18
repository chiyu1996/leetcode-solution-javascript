// 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
//
// 说明：每次只能向下或者向右移动一步。
//
// 示例:
//
// 输入:
// [
//  [1,3,1],
//  [1,5,1],
//  [4,2,1]
// ]
// 输出: 7
// 解释: 因为路径 1→3→1→1→1 的总和最小。
//
// Related Topics 数组 动态规划
// 👍 688 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const dp = new Array(m).fill(0).map(() => {
    return new Array(n).fill(0);
  });
  dp[0][0] = grid[0][0];
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }
  for (let j = 1; j < n; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j]) + grid[i][j];
    }
  }
  return dp[m - 1][n - 1];
};
// leetcode submit region end(Prohibit modification and deletion)
