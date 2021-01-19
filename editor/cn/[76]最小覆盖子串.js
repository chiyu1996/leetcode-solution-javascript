// 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
//
// 注意：如果 s 中存在这样的子串，我们保证它是唯一的答案。
//
//
//
// 示例 1：
//
//
// 输入：s = "ADOBECODEBANC", t = "ABC"
// 输出："BANC"
//
//
// 示例 2：
//
//
// 输入：s = "a", t = "a"
// 输出："a"
//
//
//
//
// 提示：
//
//
// 1 <= s.length, t.length <= 105
// s 和 t 由英文字母组成
//
//
//
// 进阶：你能设计一个在 o(n) 时间内解决此问题的算法吗？ Related Topics 哈希表 双指针 字符串 Sliding Window
// 👍 906 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  const needs = new Int32Array(128);
  let needCount = t.length;
  const len = s.length;
  for (let i = 0; i < needCount; i++) {
    needs[t.charCodeAt(i)]++;
  }
  let slow = 0;
  let minLen = Infinity;
  let start = 0;
  for (let fast = 0; fast < len; fast++) {
    if (needs[s.charCodeAt(fast)] > 0) {
      needCount--;
    }
    needs[s.charCodeAt(fast)]--;
    if (needCount === 0) {
      while (slow < fast && needs[s.charCodeAt(slow)] < 0) {
        needs[s.charCodeAt(slow)]++;
        slow++;
      }
      if (fast - slow + 1 < minLen) {
        minLen = fast - slow + 1;
        start = slow;
      }
      needCount++;
      needs[s.charCodeAt(slow)]++;
      slow++;
    }
  }
  return minLen === Infinity ? '' : s.slice(start, start + minLen)
};
// leetcode submit region end(Prohibit modification and deletion)
