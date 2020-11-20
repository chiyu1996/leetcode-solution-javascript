// 给定一个字符串 s，将 s 分割成一些子串，使每个子串都是回文串。
//
// 返回符合要求的最少分割次数。
//
// 示例:
//
// 输入: "aab"
// 输出: 1
// 解释: 进行一次分割就可将 s 分割成 ["aa","b"] 这样两个回文子串。
//
// Related Topics 动态规划
// 👍 210 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
  const n = s.length;
  if (!n) return 0;
  const isPalindrome = new Array(n).fill(undefined).map(() => {
    return new Array(n).fill(false);
  });
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      if (s[i] === s[j] && (j - i <= 1 || isPalindrome[i + 1][j - 1])) {
        isPalindrome[i][j] = true;
      }
    }
  }
  const dp = [];
  for (let i = 0; i < n; i++) {
    if (isPalindrome[0][i]) {
      dp[i] = 0;
      continue;
    }
    for (let j = 0; j < i; j++) {
      if (isPalindrome[j + 1][i]) {
        dp[i] = Math.min(dp[i] || Infinity, dp[j] + 1);
      }
    }
  }
  return dp[n - 1];
};
// leetcode submit region end(Prohibit modification and deletion)
