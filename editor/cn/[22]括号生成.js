// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
//
//
//
// 示例：
//
// 输入：n = 3
// 输出：[
//       "((()))",
//       "(()())",
//       "(())()",
//       "()(())",
//       "()()()"
//     ]
//
// Related Topics 字符串 回溯算法
// 👍 1339 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const res = [];
  const ans = [];

  function find(open, close, max) {
    if (res.length === max * 2) {
      ans.push(res.join(''));
      return;
    }
    if (open < max) {
      res.push('(');
      find(open + 1, close, max);
      res.pop();
    }
    if (close < open) {
      res.push(')');
      find(open, close + 1, max);
      res.pop();
    }
  }

  find(0, 0, n);
  return ans;
};
// leetcode submit region end(Prohibit modification and deletion)
