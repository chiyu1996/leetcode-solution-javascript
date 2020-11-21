// 有个内含单词的超大文本文件，给定任意两个单词，找出在这个文件中这两个单词的最短距离(相隔单词数)。如果寻找过程在这个文件中会重复多次，而每次寻找的单词不同，
// 你能对此优化吗?
//
// 示例：
//
// 输入：words = ["I","am","a","student","from","a","university","in","a","city"],
// word1 = "a", word2 = "student"
// 输出：1
//
// 提示：
//
//
// words.length <= 100000
//
// Related Topics 双指针 字符串
// 👍 12 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var findClosest = function(words, word1, word2) {
  const n = words.length;
  const list1 = [];
  const list2 = [];
  for (let i = 0; i < n; i++) {
    const word = words[i];
    if (word === word1) {
      list1.push(i)
    }
    if (word === word2) {
      list2.push(i)
    }
  }
  let i = 0;
  let j = 0;
  let min = Infinity;
  const l1 = list1.length;
  const l2 = list2.length;
  while ((i < l1) && (j < l2)) {
    const curr1 = list1[i];
    const curr2 = list2[j];
    min = Math.min(min, Math.abs(curr1 - curr2));
    if (curr1 < curr2) {
      i++
    } else {
      j++;
    }
  }
  return min;
};
// leetcode submit region end(Prohibit modification and deletion)
