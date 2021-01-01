// 编写一种算法，若M × N矩阵中某个元素为0，则将其所在的行与列清零。
//
//
//
// 示例 1：
//
// 输入：
// [
//  [1,1,1],
//  [1,0,1],
//  [1,1,1]
// ]
// 输出：
// [
//  [1,0,1],
//  [0,0,0],
//  [1,0,1]
// ]
//
//
// 示例 2：
//
// 输入：
// [
//  [0,1,2,0],
//  [3,4,5,2],
//  [1,3,1,5]
// ]
// 输出：
// [
//  [0,0,0,0],
//  [0,4,5,0],
//  [0,3,1,0]
// ]
//
// Related Topics 数组
// 👍 19 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  const coordinates = [];
  const n = matrix.length;
  if (n === 0) {
    return matrix;
  }
  const m = matrix[0].length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 0) {
        coordinates.push([i, j]);
      }
    }
  }
  for (const [x, y] of coordinates) {
    for (let i = 0; i < n; i++) {
      matrix[i][y] = 0;
    }
    for (let j = 0; j < m; j++) {
      matrix[x][j] = 0;
    }
  }
  return matrix;
};
// leetcode submit region end(Prohibit modification and deletion)
