//在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积。 
//
// 示例: 
//
// 输入: 
//
//1 0 1 0 0
//1 0 1 1 1
//1 1 1 1 1
//1 0 0 1 0
//
//输出: 4 
// Related Topics 动态规划 
// 👍 575 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    if (!matrix.length || !matrix[0].length) return 0;
    let m = matrix.length;
    let n = matrix[0].length;
    let dp = new Array(m).fill(undefined).map(() => {
        return new Array(n).fill(0);
    });
    let ans = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {

            if (matrix[i][j] === "1") {
                if (i === 0 || j === 0) {
                    dp[i][j] = 1;
                } else {
                    dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
                }
                ans = Math.max(ans, dp[i][j]);
            }
        }
    }
    return ans ** 2;
};
//leetcode submit region end(Prohibit modification and deletion)
