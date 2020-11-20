// 我们把只包含质因子 2、3 和 5 的数称作丑数（Ugly Number）。求按从小到大的顺序的第 n 个丑数。
//
//
//
// 示例:
//
// 输入: n = 10
// 输出: 12
// 解释: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 是前 10 个丑数。
//
// 说明:
//
//
// 1 是丑数。
// n 不超过1690。
//
//
// 注意：本题与主站 264 题相同：https://leetcode-cn.com/problems/ugly-number-ii/
// Related Topics 数学
// 👍 76 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  const dp = new Array(n).fill(1);
  let a = 0; let b = 0; let c = 0;
  for (let i = 1; i < n; i++) {
    const [n2, n3, n5] = [dp[a] * 2, dp[b] * 3, dp[c] * 5];

    dp[i] = Math.min(n2, n3, n5);
    if (dp[i] === n2) a++;
    if (dp[i] === n3) b++;
    if (dp[i] === n5) c++;
  }

  return dp[n - 1];
};
// leetcode submit region end(Prohibit modification and deletion)
