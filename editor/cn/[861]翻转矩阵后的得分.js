// 有一个二维矩阵 A 其中每个元素的值为 0 或 1 。
//
// 移动是指选择任一行或列，并转换该行或列中的每一个值：将所有 0 都更改为 1，将所有 1 都更改为 0。
//
// 在做出任意次数的移动后，将该矩阵的每一行都按照二进制数来解释，矩阵的得分就是这些数字的总和。
//
// 返回尽可能高的分数。
//
//
//
//
//
//
// 示例：
//
// 输入：[[0,0,1,1],[1,0,1,0],[1,1,0,0]]
// 输出：39
// 解释：
// 转换为 [[1,1,1,1],[1,0,0,1],[1,1,1,1]]
// 0b1111 + 0b1001 + 0b1111 = 15 + 9 + 15 = 39
//
//
//
// 提示：
//
//
// 1 <= A.length <= 20
// 1 <= A[0].length <= 20
// A[i][j] 是 0 或 1
//
// Related Topics 贪心算法
// 👍 138 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function(A) {
  const m = A.length;
  const n = A[0].length;
  for (let i = 0; i < m; i++) {
    if (A[i][0] === 0) {
      for (let j = 0; j < n; j++) {
        A[i][j] = 1 ^ A[i][j];
      }
    }
  }
  const num = new Array(m).fill(0);
  for (let j = 0; j < n; j++) {
    let one = 0;
    let zero = 0;
    for (let i = 0; i < m; i++) {
      if (A[i][j] === 1) {
        one++;
      } else {
        zero++;
      }
    }

    for (let i = 0; i < m; i++) {
      if (zero > one) {
        num[i] = num[i] * 2 + 1 ^ A[i][j];
      } else {
        num[i] = num[i] * 2 + A[i][j];
      }
    }
  }
  return num.reduce((prev, val) => prev + val);
};
// leetcode submit region end(Prohibit modification and deletion)
