// 三步问题。有个小孩正在上楼梯，楼梯有n阶台阶，小孩一次可以上1阶、2阶或3阶。实现一种方法，计算小孩有多少种上楼梯的方式。结果可能很大，你需要对结果模100
// 0000007。
//
// 示例1:
//
//
// 输入：n = 3
// 输出：4
// 说明: 有四种走法
//
//
// 示例2:
//
//
// 输入：n = 5
// 输出：13
//
//
// 提示:
//
//
// n范围在[1, 1000000]之间
//
// Related Topics 动态规划
// 👍 23 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {number}
 */
var waysToStep = function(n) {
  if (n == 1) { return 1; }
  if (n == 2) { return 2; }
  let [a, b, c] = [1, 1, 2];
  const mod = 1e9 + 7;
  for (let i = 3; i < n + 1; i++) {
    [a, b, c] = [b, c, (a + b + c) % mod];
  }
  return c;
};
// leetcode submit region end(Prohibit modification and deletion)
