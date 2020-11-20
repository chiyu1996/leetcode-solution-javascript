// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
//
// 示例 1:
//
// 输入: s = "anagram", t = "nagaram"
// 输出: true
//
//
// 示例 2:
//
// 输入: s = "rat", t = "car"
// 输出: false
//
// 说明:
// 你可以假设字符串只包含小写字母。
//
// 进阶:
// 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
// Related Topics 排序 哈希表
// 👍 266 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  const prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103];
  const mod = 1e9 + 7;
  let hash_s = 1; let hash_t = 1;
  for (let i = 0; i < s.length; i++) {
    const num_s = s.charCodeAt(i) - 97;
    const num_t = t.charCodeAt(i) - 97;
    hash_s = ((hash_s % mod) * (prime[num_s] % mod)) % mod;
    hash_t = ((hash_t % mod) * (prime[num_t] % mod)) % mod;
  }
  return hash_s === hash_t;
};
// leetcode submit region end(Prohibit modification and deletion)
