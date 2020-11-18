// 给定一个字符串 s，将 s 分割成一些子串，使每个子串都是回文串。
//
// 返回 s 所有可能的分割方案。
//
// 示例:
//
// 输入: "aab"
// 输出:
// [
//  ["aa","b"],
//  ["a","a","b"]
// ]
// Related Topics 回溯算法
// 👍 398 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  const ans = [];
  const dfs = (start, path) => {
    if (start === s.length) {
      ans.push([...path]);
      return;
    }
    for (let i = start; i < s.length; i++) {
      if (!dp[start][i]) {
        continue;
      }
      path.push(s.slice(start, i + 1));
      dfs(i + 1, path);
      path.pop();
    }
  };
  const n = s.length;
  const dp = new Array(n).fill(undefined).map(() => {
    return new Array(n).fill(false);
  });
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      if (s[i] === s[j] && j - i <= 1 || dp[i + 1][j - 1]) {
        dp[i][j] = true;
      }
    }
  }
  dfs(0, []);
  return ans;
};
// leetcode submit region end(Prohibit modification and deletion)
