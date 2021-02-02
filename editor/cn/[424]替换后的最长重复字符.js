// 给你一个仅由大写英文字母组成的字符串，你可以将任意位置上的字符替换成另外的字符，总共可最多替换 k 次。在执行上述操作后，找到包含重复字母的最长子串的长度。
//
//
// 注意：字符串长度 和 k 不会超过 104。
//
//
//
// 示例 1：
//
//
// 输入：s = "ABAB", k = 2
// 输出：4
// 解释：用两个'A'替换为两个'B',反之亦然。
//
//
// 示例 2：
//
//
// 输入：s = "AABABBA", k = 1
// 输出：4
// 解释：
// 将中间的一个'A'替换为'B',字符串变为 "AABBBBA"。
// 子串 "BBBB" 有最长重复字母, 答案为 4。
//
// Related Topics 双指针 Sliding Window
// 👍 315 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  const n = s.length;
  let left = 0; let right = 0;
  const count = new Int32Array(26);
  let result = 0;
  let maxCount = 0;
  while (right < n) {
    const rightIndex = s.charCodeAt(right) - 65;
    count[rightIndex]++;
    maxCount = Math.max(maxCount, count[rightIndex]);
    right++;
    if (right - left > maxCount + k) {
      const leftIndex = s.charCodeAt(left) - 65;
      count[leftIndex]--;
      left++;
    }
    result = Math.max(result, right - left);
  }
  return result;
};
// leetcode submit region end(Prohibit modification and deletion)
