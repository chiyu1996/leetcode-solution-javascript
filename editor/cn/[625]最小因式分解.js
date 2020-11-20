// 给定一个正整数 a，找出最小的正整数 b 使得 b 的所有数位相乘恰好等于 a。
//
// 如果不存在这样的结果或者结果不是 32 位有符号整数，返回 0。
//
//
//
// 样例 1
//
// 输入：
//
// 48
//
//
// 输出：
//
// 68
//
//
//
// 样例 2
//
// 输入：
//
// 15
//
//
// 输出：
//
// 35
//
//
// Related Topics 递归 数学
// 👍 20 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} a
 * @return {number}
 */
var smallestFactorization = function(a) {
  let str = '';
  let mod = 9;
  if (a === 1) return 1;
  while (a > 1 && mod > 1) {
    if (a % mod === 0) {
      a /= mod;
      str += mod;
    } else {
      mod--;
    }
  }
  const num = Number(str.split('').reverse().join(''));
  return a > 1 ? 0 : Number.isSafeInteger(num) ? num > Math.pow(2, 31) ? 0 : num : 0;
};
// leetcode submit region end(Prohibit modification and deletion)
