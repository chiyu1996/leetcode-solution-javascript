// 给你两个单词 word1 和 word2，请你计算出将 word1 转换成 word2 所使用的最少操作数 。
//
// 你可以对一个单词进行如下三种操作：
//
//
// 插入一个字符
// 删除一个字符
// 替换一个字符
//
//
//
//
// 示例 1：
//
// 输入：word1 = "horse", word2 = "ros"
// 输出：3
// 解释：
// horse -> rorse (将 'h' 替换为 'r')
// rorse -> rose (删除 'r')
// rose -> ros (删除 'e')
//
//
// 示例 2：
//
// 输入：word1 = "intention", word2 = "execution"
// 输出：5
// 解释：
// intention -> inention (删除 't')
// inention -> enention (将 'i' 替换为 'e')
// enention -> exention (将 'n' 替换为 'x')
// exention -> exection (将 'n' 替换为 'c')
// exection -> execution (插入 'u')
//
// Related Topics 字符串 动态规划
// 👍 1173 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  const length1 = word1.length;
  const length2 = word2.length;
  const dp = new Array(length1 + 1).fill(undefined).map(() => new Array(length2 + 1).fill(0));
  for (let i = 0; i < length1 + 1; i++) {
    dp[i][0] = i;
  }
  for (let j = 0; j < length2 + 1; j++) {
    dp[0][j] = j;
  }
  for (let i = 1; i < length1 + 1; i++) {
    for (let j = 1; j < length2 + 1; j++) {
      const left = dp[i][j - 1] + 1;
      let left_top = dp[i - 1][j - 1];
      const top = dp[i - 1][j] + 1;
      if (word1.charAt(i - 1) !== word2.charAt(j - 1)) {
        left_top += 1;
      }
      dp[i][j] = Math.min(left, left_top, top);
    }
  }
  return dp[length1][length2];
};
// leetcode submit region end(Prohibit modification and deletion)
