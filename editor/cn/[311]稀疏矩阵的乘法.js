// 给你两个 稀疏矩阵 A 和 B，请你返回 AB 的结果。你可以默认 A 的列数等于 B 的行数。
//
// 请仔细阅读下面的示例。
//
//
//
// 示例：
//
// 输入：
//
// A = [
//  [ 1, 0, 0],
//  [-1, 0, 3]
// ]
//
// B = [
//  [ 7, 0, 0 ],
//  [ 0, 0, 0 ],
//  [ 0, 0, 1 ]
// ]
//
// 输出：
//
//     |  1 0 0 |   | 7 0 0 |   |  7 0 0 |
// AB = | -1 0 3 | x | 0 0 0 | = | -7 0 3 |
//                  | 0 0 1 |
//
// Related Topics 哈希表
// 👍 36 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var multiply = function(A, B) {
  if (!A || !A.length) return A;
  const row = A.length;
  const col1 = A[0].length;
  const col2 = B[0].length;
  const result = new Array(row).fill(undefined).map(() => new Array(col2).fill(0));
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col1; j++) {
      for (let k = 0; k < col2; k++) {
        result[i][k] += A[i][j] * B[j][k];
      }
    }
  }
  return result
};
// leetcode submit region end(Prohibit modification and deletion)
