// 稀疏数组搜索。有个排好序的字符串数组，其中散布着一些空字符串，编写一种方法，找出给定字符串的位置。
//
// 示例1:
//
//  输入: words = ["at", "", "", "", "ball", "", "", "car", "", "","dad", "", ""],
// s = "ta"
// 输出：-1
// 说明: 不存在返回-1。
//
//
// 示例2:
//
//  输入：words = ["at", "", "", "", "ball", "", "", "car", "", "","dad", "", ""],
// s = "ball"
// 输出：4
//
//
// 提示:
//
//
// words的长度在[1, 1000000]之间
//
// Related Topics 二分查找
// 👍 23 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var findString = function(words, s) {
  let left = 0; let right = words.length - 1;
  while (left <= right) {
    let mid = (left + right) >> 1;
    while (mid < right && words[mid] === '') {
      mid++;
    }
    if (words[mid] === s) {
      return mid;
    }
    if (right === mid) {
      right = ((left + right) >> 1) - 1;
      continue;
    }
    if (words[mid] < s) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};
// leetcode submit region end(Prohibit modification and deletion)
