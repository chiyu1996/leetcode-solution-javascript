// 给定一个整数矩阵，找出最长递增路径的长度。
//
// 对于每个单元格，你可以往上，下，左，右四个方向移动。 你不能在对角线方向上移动或移动到边界外（即不允许环绕）。
//
// 示例 1:
//
// 输入: nums =
// [
//  [9,9,4],
//  [6,6,8],
//  [2,1,1]
// ]
// 输出: 4
// 解释: 最长递增路径为 [1, 2, 6, 9]。
//
// 示例 2:
//
// 输入: nums =
// [
//  [3,4,5],
//  [3,2,6],
//  [2,2,1]
// ]
// 输出: 4
// 解释: 最长递增路径是 [3, 4, 5, 6]。注意不允许在对角线方向上移动。
//
// Related Topics 深度优先搜索 拓扑排序 记忆化
// 👍 347 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
  const dirs = [[-1, 0], [0, -1], [1, 0], [0, 1]];
  if (!matrix || !matrix.length || !matrix[0].length) return 0;
  const m = matrix.length;
  const n = matrix[0].length;
  const memo = new Array(m).fill(undefined).map(item => {
    return new Array(n).fill(0);
  });
  const dfs = (matrix, memo, row, col) => {
    if (memo[row][col] !== 0) return memo[row][col];
    ++memo[row][col];

    for (const dir of dirs) {
      const newRow = row + dir[0]; const newCol = col + dir[1];
      if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n && matrix[newRow][newCol] > matrix[row][col]) {
        memo[row][col] = Math.max(memo[row][col], dfs(matrix, memo, newRow, newCol) + 1);
      }
    }
    return memo[row][col];
  };
  let ans = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      ans = Math.max(ans, dfs(matrix, memo, i, j));
    }
  }
  return ans;
};
// leetcode submit region end(Prohibit modification and deletion)
