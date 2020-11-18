// 两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目。
//
// 给出两个整数 x 和 y，计算它们之间的汉明距离。
//
// 注意：
// 0 ≤ x, y < 231.
//
// 示例:
//
//
// 输入: x = 1, y = 4
//
// 输出: 2
//
// 解释:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//       ↑   ↑
//
// 上面的箭头指出了对应二进制位不同的位置。
//
// Related Topics 位运算
// 👍 341 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
// 最简单的思路
var hammingDistance = function(x, y) {
  let cnt = 0;
  while (x > 0 || y > 0) {
    const reminder_x = x % 2;
    const reminder_y = y % 2;
    if (reminder_x !== reminder_y) {
      cnt++;
    }
    x >>>= 1;
    y >>>= 1;
  }
  return cnt;
};
// 异或
var hammingDistance = function(x, y) {
  let xor = x ^ y;
  let cnt = 0;
  while (xor) {
    if (xor & 1) {
      cnt++;
    }
    xor >>>= 1;
  }
  return cnt;
};

// leetcode submit region end(Prohibit modification and deletion)
