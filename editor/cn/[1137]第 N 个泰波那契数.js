// 泰波那契序列 Tn 定义如下：
//
// T0 = 0, T1 = 1, T2 = 1, 且在 n >= 0 的条件下 Tn+3 = Tn + Tn+1 + Tn+2
//
// 给你整数 n，请返回第 n 个泰波那契数 Tn 的值。
//
//
//
// 示例 1：
//
// 输入：n = 4
// 输出：4
// 解释：
// T_3 = 0 + 1 + 1 = 2
// T_4 = 1 + 1 + 2 = 4
//
//
// 示例 2：
//
// 输入：n = 25
// 输出：1389537
//
//
//
//
// 提示：
//
//
// 0 <= n <= 37
// 答案保证是一个 32 位整数，即 answer <= 2^31 - 1。
//
// Related Topics 递归
// 👍 53 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  if (n < 3) {
    return n ? 1 : 0;
  }
  let a = 0; let b = 1; let c = 1;
  for (let i = 2; i < n; i++) {
    [a, b, c] = [b, c, a + b + c];
  }
  return c;
};
// leetcode submit region end(Prohibit modification and deletion)
