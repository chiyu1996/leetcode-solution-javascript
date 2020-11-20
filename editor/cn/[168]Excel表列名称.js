// 给定一个正整数，返回它在 Excel 表中相对应的列名称。
//
// 例如，
//
//     1 -> A
//    2 -> B
//    3 -> C
//    ...
//    26 -> Z
//    27 -> AA
//    28 -> AB
//    ...
//
//
// 示例 1:
//
// 输入: 1
// 输出: "A"
//
//
// 示例 2:
//
// 输入: 28
// 输出: "AB"
//
//
// 示例 3:
//
// 输入: 701
// 输出: "ZY"
//
// Related Topics 数学
// 👍 272 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  let s = '';

  function helper(n) {
    if (n === 0) return;
    const curChar = (n - 1) % 26;
    s = String.fromCharCode(65 + curChar) + s;
    const nextN = Math.floor((n - 1) / 26);
    helper(nextN);
  }

  helper(n);
  return s;
};
// leetcode submit region end(Prohibit modification and deletion)
