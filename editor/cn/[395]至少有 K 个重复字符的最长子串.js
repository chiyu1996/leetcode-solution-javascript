// 给你一个字符串 s 和一个整数 k ，请你找出 s 中的最长子串， 要求该子串中的每一字符出现次数都不少于 k 。返回这一子串的长度。
//
//
//
// 示例 1：
//
//
// 输入：s = "aaabb", k = 3
// 输出：3
// 解释：最长子串为 "aaa" ，其中 'a' 重复了 3 次。
//
//
// 示例 2：
//
//
// 输入：s = "ababbc", k = 2
// 输出：5
// 解释：最长子串为 "ababb" ，其中 'a' 重复了 2 次， 'b' 重复了 3 次。
//
//
//
// 提示：
//
//
// 1 <= s.length <= 104
// s 仅由小写英文字母组成
// 1 <= k <= 105
//
// Related Topics 递归 分治算法 Sliding Window
// 👍 351 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
  const dfs = (left, right) => {
    const count = new Int32Array(26);
    let result = 0;
    let split = 0;
    for (let i = left; i <= right; i++) {
      count[s.charCodeAt(i) - 97]++;
    }
    for (let i = 0; i < 26; i++) {
      if (count[i] > 0 && count[i] < k) {
        split = String.fromCharCode(97 + i);
        break;
      }
    }
    if (split === 0) {
      return right - left + 1;
    }
    let i = left;
    while (i <= right) {
      while (i <= right && s[i] === split) {
        i++;
      }
      if (i > right) {
        break;
      }
      const start = i;
      while (i <= right && s[i] !== split) {
        i++;
      }
      const temp = dfs(start, i - 1);
      result = Math.max(result, temp);
    }
    return result;
  }
  const n = s.length;
  return dfs(0, n - 1);
};
// leetcode submit region end(Prohibit modification and deletion)
