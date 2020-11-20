// 给定一个整数 n，计算所有小于等于 n 的非负整数中数字 1 出现的个数。
//
// 示例:
//
// 输入: 13
// 输出: 6
// 解释: 数字 1 出现在以下数字中: 1, 10, 11, 12, 13 。
// Related Topics 数学
// 👍 174 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
  let count = 0;
  for (let i = 1; i <= n; i *= 10) {
    const a = Math.floor(n / i); const b = n % i;
    count = count + Math.floor((a + 8) / 10) * i + (a % 10 === 1 ? b + 1 : 0);
  }
  return count;
};
// leetcode submit region end(Prohibit modification and deletion)
