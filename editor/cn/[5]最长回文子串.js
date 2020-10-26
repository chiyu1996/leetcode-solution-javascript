F//给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
//
// 示例 1： 
//
// 输入: "babad"
//输出: "bab"
//注意: "aba" 也是一个有效答案。
// 
//
// 示例 2： 
//
// 输入: "cbbd"
//输出: "bb"
// 
// Related Topics 字符串 动态规划 
// 👍 2753 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let len = s.length;
    let dp = new Array(len);
    for (let i = 0; i < len; i++) {
        dp[i] = new Array(len).fill(false);
    }
    if (len === 0) {
        return "";
    }
    let max = 1;
    let ans = s[0];
    for (let i = 0; i < len; i++) {
        dp[i][i] = true;
        if (s[i] === s[i + 1]) {
            dp[i][i + 1] = true;
            max = 2;
            ans = s.substr(i, 2);

        }
    }
    for (let k = 3; k <= len; k++) {
        for (let i = 0; i + k - 1 < len; i++) {
            let j = i + k - 1;
            dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j];
            if (dp[i][j] && k > max) {
                max = k;
                ans = s.substr(i, k);
            }
        }
    }
    return ans;
};
//leetcode submit region end(Prohibit modification and deletion)
