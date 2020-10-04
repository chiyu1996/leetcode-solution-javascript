//给定一个字符串 s，你可以通过在字符串前面添加字符将其转换为回文串。找到并返回可以用这种方式转换的最短回文串。 
//
// 示例 1: 
//
// 输入: "aacecaaa"
//输出: "aaacecaaa"
// 
//
// 示例 2: 
//
// 输入: "abcd"
//输出: "dcbabcd" 
// Related Topics 字符串 
// 👍 274 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
    let n = s.length;
    let next = new Array(n).fill(-1);
    for (let i = 1; i < n; i++) {
        let j = next[i - 1];
        while (j != -1 && s[j + 1] !== s[i]) {
            j = next[j];
        }
        if (s[j + 1] === s[i]) {
            next[i] = j + 1;
        }
    }
    let best = -1;
    for (let i = n - 1; i >= 0; i--) {
        while (best !== -1 && s[best + 1] !== s[i]) {
            best = next[best];
        }
        if (s[best + 1] === s[i]) {
            ++best;
        }
    }
    let add = best === n - 1 ? "" : s.substr(best + 1, n);
    add = add.split("").reverse().join("");
    return add + s;
};
//leetcode submit region end(Prohibit modification and deletion)
