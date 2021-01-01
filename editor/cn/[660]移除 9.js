// 从 1 开始，移除所有包含数字 9 的所有整数，例如 9，19，29，……
//
// 这样就获得了一个新的整数数列：1，2，3，4，5，6，7，8，10，11，……
//
// 给定正整数 n，请你返回新数列中第 n 个数字是多少。1 是新数列中的第一个数字。
//
//
//
// 样例 1:
//
// 输入: 9
// 输出: 10
//
//
//
//
// 注释 ：n 不会超过 9 x 10^8。
// Related Topics 数学
// 👍 12 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {number}
 */
var newInteger = function(n) {
  return n.toString(9);
};
// leetcode submit region end(Prohibit modification and deletion)
