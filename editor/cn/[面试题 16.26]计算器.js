// 给定一个包含正整数、加(+)、减(-)、乘(*)、除(/)的算数表达式(括号除外)，计算其结果。
//
// 表达式仅包含非负整数，+， - ，*，/ 四种运算符和空格 。 整数除法仅保留整数部分。
//
// 示例 1:
//
// 输入: "3+2*2"
// 输出: 7
//
//
// 示例 2:
//
// 输入: " 3/2 "
// 输出: 1
//
// 示例 3:
//
// 输入: " 3+5 / 2 "
// 输出: 5
//
//
// 说明：
//
//
// 你可以假设所给定的表达式都是有效的。
// 请不要使用内置的库函数 eval。
//
// Related Topics 字符串
// 👍 27 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  s = s.trim();
  const n = s.length;
  const stack = [];
  let num = 0;
  let op = '+';
  let result = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] >= '0' && s[i] <= '9') {
      num = num * 10 + (+s[i]);
    }
    if (s[i] === ' ') {
      continue;
    }
    if (s[i] < '0' || s[i] > '9' || i === n - 1) {
      if (op === '+') {
        stack.push(num);
      } else if (op === '-') {
        stack.push(-num);
      } else if (op === '*') {
        const pre = stack.pop();
        stack.push(num * pre);
      } else if (op === '/') {
        const pre = stack.pop();
        stack.push((pre / num) | 0)
      }
      op = s[i];
      num = 0;
    }
  }
  while (stack.length) {
    result += stack.pop();
  }
  return result;
};
// leetcode submit region end(Prohibit modification and deletion)
