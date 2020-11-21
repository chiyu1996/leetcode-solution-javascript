// 给定M×N矩阵，每一行、每一列都按升序排列，请编写代码找出某元素。
//
// 示例:
//
// 现有矩阵 matrix 如下：
//
// [
//  [1,   4,  7, 11, 15],
//  [2,   5,  8, 12, 19],
//  [3,   6,  9, 16, 22],
//  [10, 13, 14, 17, 24],
//  [18, 21, 23, 26, 30]
// ]
//
//
// 给定 target = 5，返回 true。
//
// 给定 target = 20，返回 false。
// Related Topics 双指针 二分查找 分治算法
// 👍 15 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  const m = matrix.length;
  if (!m) return false;
  const n = matrix[0].length;
  let now = n - 1; let row = 0;
  while (now >= 0 && row < m) {
    let l = 0; let r = now;
    while (l <= r) {
      const mid = (l + r) >> 1;
      if (matrix[row][mid] === target) {
        return true;
      } else if (matrix[row][mid] < target) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
    now = r;
    row++;
  }
  return false;
};
// leetcode submit region end(Prohibit modification and deletion)
