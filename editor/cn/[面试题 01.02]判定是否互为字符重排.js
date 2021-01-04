// 给定两个字符串 s1 和 s2，请编写一个程序，确定其中一个字符串的字符重新排列后，能否变成另一个字符串。
//
// 示例 1：
//
// 输入: s1 = "abc", s2 = "bca"
// 输出: true
//
//
// 示例 2：
//
// 输入: s1 = "abc", s2 = "bad"
// 输出: false
//
//
// 说明：
//
//
// 0 <= len(s1) <= 100
// 0 <= len(s2) <= 100
//
// Related Topics 数组 字符串
// 👍 22 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103];
const mod = 1e9 + 7;
const getHash = (str) => {
  let hash = 1;
  const n = str.length;
  for (let i = 0; i < n; i++) {
    const num = str.charCodeAt(i) - 97;
    hash = ((hash % mod) * (prime[num] % mod)) % mod;
  }
  return hash;
}
var CheckPermutation = function(s1, s2) {
  const n = s1.length;
  const m = s2.length;
  if (n !== m) {
    return false;
  }
  return getHash(s1) === getHash(s2);
};
// leetcode submit region end(Prohibit modification and deletion)
