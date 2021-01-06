// 给定一个字符串，编写一个函数判定其是否为某个回文串的排列之一。
//
// 回文串是指正反两个方向都一样的单词或短语。排列是指字母的重新排列。
//
// 回文串不一定是字典当中的单词。
//
//
//
// 示例1：
//
// 输入："tactcoa"
// 输出：true（排列有"tacocat"、"atcocta"，等等）
//
//
//
// Related Topics 哈希表 字符串
// 👍 40 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {boolean}
 */
var oneEditAway = function(first, second) {
  if (first === second) {
    return true;
  }
  const n = first.length;
  const m = second.length;
  if (Math.abs(n - m) > 1) {
    return false;
  }
  let [i, j, k] = [0, n - 1, m - 1];
  while (i < n && first[i] === second[i]) {
    i++;
  }
  while (j >= 0 && k >= 0 && first[j] === second[k]) {
    j--;
    k--;
  }
  return j - i < 1 && k - i < 1;
};
// leetcode submit region end(Prohibit modification and deletion)
