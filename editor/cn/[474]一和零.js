// 给你一个二进制字符串数组 strs 和两个整数 m 和 n 。
//
//
// 请你找出并返回 strs 的最大子集的大小，该子集中 最多 有 m 个 0 和 n 个 1 。
//
// 如果 x 的所有元素也是 y 的元素，集合 x 是集合 y 的 子集 。
//
//
//
//
// 示例 1：
//
//
// 输入：strs = ["10", "0001", "111001", "1", "0"], m = 5, n = 3
// 输出：4
// 解释：最多有 5 个 0 和 3 个 1 的最大子集是 {"10","0001","1","0"} ，因此答案是 4 。
// 其他满足题意但较小的子集包括 {"0001","1"} 和 {"10","1","0"} 。{"111001"} 不满足题意，因为它含 4 个 1 ，大于
// n 的值 3 。
//
//
// 示例 2：
//
//
// 输入：strs = ["10", "0", "1"], m = 1, n = 1
// 输出：2
// 解释：最大的子集是 {"0", "1"} ，所以答案是 2 。
//
//
//
//
// 提示：
//
//
// 1 <= strs.length <= 600
// 1 <= strs[i].length <= 100
// strs[i] 仅由 '0' 和 '1' 组成
// 1 <= m, n <= 100
//
// Related Topics 动态规划
// 👍 308 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const getCount = (str) => {
  const count = new Int32Array(2);
  const n = str.length;
  for (let i = 0; i < n; i++) {
    const index = str.charCodeAt(i) - 48;
    count[index]++;
  }
  return count;
}
var findMaxForm = function(strs, m, n) {
  const dp = new Array(m + 1).fill(undefined).map(() => new Array(n + 1).fill(0));
  const length = strs.length;
  for (let i = 0; i < length; i++) {
    const count = getCount(strs[i]);
    for (let j = m; j >= count[0]; j--) {
      for (let k = n; k >= count[1]; k--) {
        dp[j][k] = Math.max(dp[j][k], 1 + dp[j - count[0]][k - count[1]])
      }
    }
  }
  return dp[m][n];
};
// leetcode submit region end(Prohibit modification and deletion)
