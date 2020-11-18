// 给定一个字符串，判断该字符串中是否可以通过重新排列组合，形成一个回文字符串。
//
// 示例 1：
//
// 输入: "code"
// 输出: false
//
// 示例 2：
//
// 输入: "aab"
// 输出: true
//
// 示例 3：
//
// 输入: "carerac"
// 输出: true
// Related Topics 哈希表
// 👍 30 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
  const count = new Array(128).fill(0);
  const n = s.length;
  for (let i = 0; i < n; i++) {
    const char_index = s.charCodeAt(i);
    count[char_index] += 1;
  }
  let f = 0;
  for (let i = 0; i < 128; i++) {
    if (count[i] % 2) {
      if (f) {
        return false;
      }
      {
        f = 1;
      }
    }
  }
  return true;
};
// leetcode submit region end(Prohibit modification and deletion)
