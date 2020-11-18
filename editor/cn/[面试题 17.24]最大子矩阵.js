// 给定一个正整数、负整数和 0 组成的 N × M 矩阵，编写代码找出元素总和最大的子矩阵。
//
// 返回一个数组 [r1, c1, r2, c2]，其中 r1, c1 分别代表子矩阵左上角的行号和列号，r2, c2 分别代表右下角的行号和列号。若有多个满
// 足条件的子矩阵，返回任意一个均可。
//
// 注意：本题相对书上原题稍作改动
//
// 示例：
//
// 输入：
// [
//   [-1,0],
//   [0,-1]
// ]
// 输出：[0,1,0,1]
// 解释：输入中标粗的元素即为输出所表示的矩阵
//
//
//
// 说明：
//
//
// 1 <= matrix.length, matrix[0].length <= 200
//
// Related Topics 动态规划
// 👍 31 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var getMaxMatrix = function(matrix) {
  const n = matrix.length;
  const m = matrix[0].length;
  const d = new Array(m).fill(0);
  let maxSum = -Infinity;
  let r1, c1;
  let ans, sum;
  for (let i = 0; i < n; i++) {
    for (let t = 0; t < m; t++) d[t] = 0;
    for (let j = i; j < n; j++) {
      sum = 0;
      for (let k = 0; k < m; k++) {
        d[k] += matrix[j][k];
        if (sum > 0) {
          sum += d[k];
        } else {
          sum = d[k];
          r1 = i;
          c1 = k;
        }
        if (sum > maxSum) {
          maxSum = sum;
          ans = [r1, c1, j, k];
        }
      }
    }
  }
  return ans;
};
// leetcode submit region end(Prohibit modification and deletion)
