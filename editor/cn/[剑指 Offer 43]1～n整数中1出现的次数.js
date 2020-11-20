// 输入一个整数 n ，求1～n这n个整数的十进制表示中1出现的次数。
//
// 例如，输入12，1～12这些整数中包含1 的数字有1、10、11和12，1一共出现了5次。
//
//
//
// 示例 1：
//
// 输入：n = 12
// 输出：5
//
//
// 示例 2：
//
// 输入：n = 13
// 输出：6
//
//
//
// 限制：
//
//
// 1 <= n < 2^31
//
//
// 注意：本题与主站 233 题相同：https://leetcode-cn.com/problems/number-of-digit-one/
// Related Topics 数学
// 👍 99 👎 0

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
