// 给定一个矩阵 A， 返回 A 的转置矩阵。
//
// 矩阵的转置是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。
//
//
//
// 示例 1：
//
// 输入：[[1,2,3],[4,5,6],[7,8,9]]
// 输出：[[1,4,7],[2,5,8],[3,6,9]]
//
//
// 示例 2：
//
// 输入：[[1,2,3],[4,5,6]]
// 输出：[[1,4],[2,5],[3,6]]
//
//
//
//
// 提示：
//
//
// 1 <= A.length <= 1000
// 1 <= A[0].length <= 1000
//
// Related Topics 数组
// 👍 119 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
  const row = A.length;
  const col = A[0].length;
  const B = new Array(col).fill(undefined).map(() => new Array(row));
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      B[j][i] = A[i][j];
    }
  }
  return B;
};
// leetcode submit region end(Prohibit modification and deletion)
