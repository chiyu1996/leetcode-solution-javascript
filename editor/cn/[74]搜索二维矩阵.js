// 编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：
//
//
// 每行中的整数从左到右按升序排列。
// 每行的第一个整数大于前一行的最后一个整数。
//
//
//
//
// 示例 1：
//
//
// 输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]], target = 3
// 输出：true
//
//
// 示例 2：
//
//
// 输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]], target = 13
// 输出：false
//
//
// 示例 3：
//
//
// 输入：matrix = [], target = 0
// 输出：false
//
//
//
//
// 提示：
//
//
// m == matrix.length
// n == matrix[i].length
// 0 <= m, n <= 100
// -104 <= matrix[i][j], target <= 104
//
// Related Topics 数组 二分查找
// 👍 265 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (!matrix || matrix.length === 0) return false;
  const n = matrix.length; const m = matrix[0].length;
  let left = 0; let right = n * m - 1;
  while (left <= right) {
    const mid = (left + right) >> 1;
    const item = matrix[Math.floor(mid / m)][mid % m];
    if (item === target) {
      return true;
    } else if (item < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
};
// leetcode submit region end(Prohibit modification and deletion)
