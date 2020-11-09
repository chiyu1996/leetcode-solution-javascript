// 给定一个字符串 s ，找出 至多 包含两个不同字符的最长子串 t ，并返回该子串的长度。
//
// 示例 1:
//
// 输入: "eceba"
// 输出: 3
// 解释: t 是 "ece"，长度为3。
//
//
// 示例 2:
//
// 输入: "ccaabbb"
// 输出: 5
// 解释: t 是 "aabbb"，长度为5。
//
// Related Topics 哈希表 双指针 字符串 Sliding Window
// 👍 78 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
  const n = s.length;
  if (n <= 2) {
    return n;
  }
  let max = 2;
  const map = new Map();
  let left = 0; let right = 0;
  while (right < n) {
    if (map.size < 3) {
      map.set(s[right], right++);
    }
    if (map.size === 3) {
      const del = Math.min(...map.values());
      map.delete(s[del]);
      left = del + 1;
    }
    max = Math.max(max, right - left);
  }
  return max;
};
// leetcode submit region end(Prohibit modification and deletion)
