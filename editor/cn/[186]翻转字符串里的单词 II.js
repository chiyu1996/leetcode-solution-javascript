// 给定一个字符串，逐个翻转字符串中的每个单词。
//
// 示例：
//
// 输入: ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]
// 输出: ["b","l","u","e"," ","i","s"," ","s","k","y"," ","t","h","e"]
//
// 注意：
//
//
// 单词的定义是不包含空格的一系列字符
// 输入字符串中不会包含前置或尾随的空格
// 单词与单词之间永远是以单个空格隔开的
//
//
// 进阶：使用 O(1) 额外空间复杂度的原地解法。
// Related Topics 字符串
// 👍 46 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function(s) {
  const reverse = (start, end) => {
    while (start < end) {
      [s[start], s[end]] = [s[end], s[start]];
      start++;
      end--;
    }
  }
  let start = 0;
  let end = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ' || i === s.length - 1) {
      end = i === s.length - 1 ? i : i - 1;
      reverse(start, end);
      start = i + 1;
    }
  }
  s.reverse();
  return s;
};
// leetcode submit region end(Prohibit modification and deletion)
