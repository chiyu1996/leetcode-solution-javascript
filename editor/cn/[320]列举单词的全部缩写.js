// 请你写出一个能够举单词全部缩写的函数。
//
// 注意：输出的顺序并不重要。
//
// 示例：
//
// 输入: "word"
// 输出:
// ["word", "1ord", "w1rd", "wo1d", "wor1", "2rd", "w2d", "wo2", "1o1d", "1or1",
// "w1r1", "1o2", "2r1", "3d", "w3", "4"]
//
//
//
// Related Topics 位运算 回溯算法
// 👍 45 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} word
 * @return {string[]}
 */
var generateAbbreviations = function(word) {
  const n = word.length;
  const total = 1 << n;
  const result = [];
  const getString = (x) => {
    let string = '';
    let zero = 0;
    for (let i = n - 1; i >= 0; i--) {
      if (x & (1 << i)) {
        if (zero !== 0) {
          string += zero;
        }
        zero = 0;
        string += word[n - i - 1];
      } else {
        zero++;
      }
    }
    if (zero !== 0) {
      string += zero;
    }
    return string;
  }
  for (let i = 0; i < total; i++) {
    result.push(getString(i));
  }
  return result;
};
// leetcode submit region end(Prohibit modification and deletion)
