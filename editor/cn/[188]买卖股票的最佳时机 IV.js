// 给定一个整数数组 prices ，它的第 i 个元素 prices[i] 是一支给定的股票在第 i 天的价格。
//
// 设计一个算法来计算你所能获取的最大利润。你最多可以完成 k 笔交易。
//
// 注意: 你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
//
//
//
// 示例 1：
//
//
// 输入：k = 2, prices = [2,4,1]
// 输出：2
// 解释：在第 1 天 (股票价格 = 2) 的时候买入，在第 2 天 (股票价格 = 4) 的时候卖出，这笔交易所能获得利润 = 4-2 = 2 。
//
// 示例 2：
//
//
// 输入：k = 2, prices = [3,2,6,5,0,3]
// 输出：7
// 解释：在第 2 天 (股票价格 = 2) 的时候买入，在第 3 天 (股票价格 = 6) 的时候卖出, 这笔交易所能获得利润 = 6-2 = 4 。
//     随后，在第 5 天 (股票价格 = 0) 的时候买入，在第 6 天 (股票价格 = 3) 的时候卖出, 这笔交易所能获得利润 = 3-0 = 3
// 。
//
//
//
// 提示：
//
//
// 0 <= k <= 109
// 0 <= prices.length <= 104
// 0 <= prices[i] <= 1000
//
// Related Topics 动态规划
// 👍 319 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
  const n = prices.length;
  if (n === 0) {
    return 0;
  }
  if ((n) / 2 <= k) {
    let ans = 0;
    for (let i = 1; i < n; i++) {
      if (prices[i] > prices[i - 1]) {
        ans += prices[i] - prices[i - 1];
      }
    }
    return ans;
  }
  const dp = new Array(k + 1).fill(undefined).map(() => {
    return [0, -Infinity];
  });
  dp[0] = [0, -prices[0]];
  let ans = 0;
  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= k; j++) {
      if (j === 0) {
        dp[j][1] = Math.max(dp[j][1], -prices[i]);
      } else {
        dp[j][1] = Math.max(dp[j][1], dp[j][0] - prices[i]);
        dp[j][0] = Math.max(dp[j][0], dp[j - 1][1] + prices[i]);
        ans = Math.max(ans, dp[j][0]);
      }
    }
  }
  return ans;
};
// leetcode submit region end(Prohibit modification and deletion)
