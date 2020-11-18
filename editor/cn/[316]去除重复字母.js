// 给你一个仅包含小写字母的字符串，请你去除字符串中重复的字母，使得每个字母只出现一次。需保证返回结果的字典序最小（要求不能打乱其他字符的相对位置）。
//
//
//
// 示例 1:
//
// 输入: "bcabc"
// 输出: "abc"
//
//
// 示例 2:
//
// 输入: "cbacdcbc"
// 输出: "acdb"
//
//
//
// 注意：该题与 1081 https://leetcode-cn.com/problems/smallest-subsequence-of-distinct
// -characters 相同
// Related Topics 栈 贪心算法
// 👍 232 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
  const temp = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (temp.indexOf(char) > -1) continue;
    while (temp.length > 0 && temp[temp.length - 1] > char && s.indexOf(temp[temp.length - 1], i) > i) {
      temp.pop();
    }
    temp.push(char);
  }
  return temp.join('');
};
// leetcode submit region end(Prohibit modification and deletion)
