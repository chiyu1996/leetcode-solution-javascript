// 给出一个单词列表，其中每个单词都由小写英文字母组成。
//
// 如果我们可以在 word1 的任何地方添加一个字母使其变成 word2，那么我们认为 word1 是 word2 的前身。例如，"abc" 是 "abac
// " 的前身。
//
// 词链是单词 [word_1, word_2, ..., word_k] 组成的序列，k >= 1，其中 word_1 是 word_2 的前身，word_
// 2 是 word_3 的前身，依此类推。
//
// 从给定单词列表 words 中选择单词组成词链，返回词链的最长可能长度。
//
//
// 示例：
//
// 输入：["a","b","ba","bca","bda","bdca"]
// 输出：4
// 解释：最长单词链之一为 "a","ba","bda","bdca"。
//
//
//
//
// 提示：
//
//
// 1 <= words.length <= 1000
// 1 <= words[i].length <= 16
// words[i] 仅由小写英文字母组成。
//
//
//
// Related Topics 哈希表 动态规划
// 👍 94 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string[]} words
 * @return {number}
 */
const isMatch = (str1, str2) => {
  const [len1, len2] = [str1.length, str2.length];
  if (str1.length - str2.length !== 1) {
    return false;
  }
  let [first, second] = [0, 0];
  while (first < len1 && second < len2) {
    if (str1[first] === str2[second]) {
      first++;
      second++;
    } else {
      first++;
    }
  }
  return second === len2;
}
var longestStrChain = function(words) {
  words.sort((a, b) => a.length - b.length);
  const n = words.length;
  const dp = new Array(n).fill(1);
  let result = 1;
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (isMatch(words[i], words[j])) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
        result = Math.max(result, dp[i]);
      }
    }
  }
  return result;
};
// leetcode submit region end(Prohibit modification and deletion)
