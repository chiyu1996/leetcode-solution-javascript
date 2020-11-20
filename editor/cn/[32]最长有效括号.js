// 给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。
//
// 示例 1:
//
// 输入: "(()"
// 输出: 2
// 解释: 最长有效括号子串为 "()"
//
//
// 示例 2:
//
// 输入: ")()())"
// 输出: 4
// 解释: 最长有效括号子串为 "()()"
//
// Related Topics 字符串 动态规划
// 👍 1002 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  const n = s.length;
  let left = 0;
  let right = 0;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === '(') {
      left++;
    } else {
      right++;
    }
    if (left === right) {
      ans = Math.max(ans, left * 2);
    } else if (right > left) {
      left = right = 0;
    }
  }
  left = right = 0;
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === '(') {
      left++;
    } else {
      right++;
    }
    if (left === right) {
      ans = Math.max(ans, left * 2);
    } else if (left > right) {
      left = right = 0;
    }
  }
  return ans;
};
// leetcode submit region end(Prohibit modification and deletion)
