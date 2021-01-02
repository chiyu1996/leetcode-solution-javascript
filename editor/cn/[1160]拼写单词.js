// 给你一份『词汇表』（字符串数组） words 和一张『字母表』（字符串） chars。
//
// 假如你可以用 chars 中的『字母』（字符）拼写出 words 中的某个『单词』（字符串），那么我们就认为你掌握了这个单词。
//
// 注意：每次拼写（指拼写词汇表中的一个单词）时，chars 中的每个字母都只能用一次。
//
// 返回词汇表 words 中你掌握的所有单词的 长度之和。
//
//
//
// 示例 1：
//
// 输入：words = ["cat","bt","hat","tree"], chars = "atach"
// 输出：6
// 解释：
// 可以形成字符串 "cat" 和 "hat"，所以答案是 3 + 3 = 6。
//
//
// 示例 2：
//
// 输入：words = ["hello","world","leetcode"], chars = "welldonehoneyr"
// 输出：10
// 解释：
// 可以形成字符串 "hello" 和 "world"，所以答案是 5 + 5 = 10。
//
//
//
//
// 提示：
//
//
// 1 <= words.length <= 1000
// 1 <= words[i].length, chars.length <= 100
// 所有字符串中都仅包含小写英文字母
//
// Related Topics 数组 哈希表
// 👍 123 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
  const n = words.length;
  const hash = new Int32Array(26);
  let result = 0;
  for (let i = 0; i < chars.length; i++) {
    const char_index = chars.charCodeAt(i) - 97;
    hash[char_index]++;
  }
  for (let i = 0; i < n; i++) {
    const cnt = new Int32Array(26);
    const word = words[i];
    for (let j = 0; j < word.length; j++) {
      const char_index = word.charCodeAt(j) - 97;
      cnt[char_index]++;
    }
    let flag = true;
    for (let j = 0; j < 26; j++) {
      if (cnt[j] > hash[j]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      result += word.length;
    }
  }
  return result;
};
// leetcode submit region end(Prohibit modification and deletion)
