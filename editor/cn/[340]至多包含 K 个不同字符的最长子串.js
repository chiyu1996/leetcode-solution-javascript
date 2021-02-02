// 给定一个字符串 s ，找出 至多 包含 k 个不同字符的最长子串 T。
//
// 示例 1:
//
// 输入: s = "eceba", k = 2
// 输出: 3
// 解释: 则 T 为 "ece"，所以长度为 3。
//
// 示例 2:
//
// 输入: s = "aa", k = 1
// 输出: 2
// 解释: 则 T 为 "aa"，所以长度为 2。
//
// Related Topics 哈希表 双指针 字符串 Sliding Window
// 👍 100 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
  const n = s.length;
  if (n * k === 0) {
    return 0;
  }
  const map = new Map();
  let left = 0; let right = 0;
  let result = 0;
  while (right < n) {
    map.set(s[right], right);
    right++;
    if (map.size === k + 1) {
      const delIndex = Math.min(...map.values());
      map.delete(s[delIndex]);
      left = delIndex + 1;
    }
    result = Math.max(result, right - left);
  }
  return result;
};
// leetcode submit region end(Prohibit modification and deletion)
