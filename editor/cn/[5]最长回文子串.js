F;//给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
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
//动态规划
var longestPalindrome = function (s) {
    let n = s.length;
    if (n === 0) {
        return "";
    }
    let dp = new Array(n).fill(undefined).map(() => new Array(n).fill(false));
    let ans = "";
    for (let i = n - 1; i >= 0; i--) {
        for (let j = i; j < n; j++) {
            if (s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1])) {
                dp[i][j] = true;
                if (j - i + 1 > ans.length) {
                    ans = s.substring(i, j + 1);
                }
            }
        }
    }
    return ans;
};
//中心扩展法
var longestPalindrome = function (s) {
    let length = s.length;
    if (length < 2) {
        return s;
    }
    let [start, maxLength] = [0, 1];

    //判断一个字符串是否为回文
    function isPalindrome(left, right) {
        while (left >= 0 && right < length && s[left] === s[right]) {
            if (right - left + 1 > maxLength) {
                maxLength = right - left + 1;
                start = left;
            }
            left--;
            right++;
        }
    }

    for (let i = 0; i < length; i++) {
        isPalindrome(i - 1, i + 1);
        isPalindrome(i, i + 1);
    }
    return s.substring(start, start + maxLength);
};
//leetcode submit region end(Prohibit modification and deletion)
