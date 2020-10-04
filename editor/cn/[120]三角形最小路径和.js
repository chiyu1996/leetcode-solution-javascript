//给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。 
//
// 相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。 
//
// 
//
// 例如，给定三角形： 
//
// [
//     [2],
//    [3,4],
//   [6,5,7],
//  [4,1,8,3]
//]
// 
//
// 自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。 
//
// 
//
// 说明： 
//
// 如果你可以只使用 O(n) 的额外空间（n 为三角形的总行数）来解决这个问题，那么你的算法会很加分。 
// Related Topics 数组 动态规划 
// 👍 610 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    if (!triangle && !triangle.length) return 0;
    let n = triangle.length;
    let dp = [triangle[0][0]];
    if (n === 1) return dp[0];
    let ans = Infinity;
    for (let i = 1; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            let start = i * (i + 1) / 2;
            if (j === 0) {
                dp[start + j] = dp[start + j - i] + triangle[i][j];
            } else if (j === i) {
                dp[start + j] = dp[start + j - i - 1] + triangle[i][j];
            } else {
                dp[start + j] = Math.min(dp[start + j - i - 1], dp[start + j - i]) + triangle[i][j];
            }
            if (i === n - 1) {
                ans = Math.min(ans, dp[start + j]);
            }

        }
    }
    return ans;
};
//leetcode submit region end(Prohibit modification and deletion)
