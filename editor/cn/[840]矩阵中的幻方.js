// 3 x 3 的幻方是一个填充有从 1 到 9 的不同数字的 3 x 3 矩阵，其中每行，每列以及两条对角线上的各数之和都相等。
//
// 给定一个由整数组成的 grid，其中有多少个 3 × 3 的 “幻方” 子矩阵？（每个子矩阵都是连续的）。
//
//
//
// 示例：
//
// 输入: [[4,3,8,4],
//      [9,5,1,9],
//      [2,7,6,2]]
// 输出: 1
// 解释:
// 下面的子矩阵是一个 3 x 3 的幻方：
// 438
// 951
// 276
//
// 而这一个不是：
// 384
// 519
// 762
//
// 总的来说，在本示例所给定的矩阵中只有一个 3 x 3 的幻方子矩阵。
//
//
// 提示:
//
//
// 1 <= grid.length <= 10
// 1 <= grid[0].length <= 10
// 0 <= grid[i][j] <= 15
//
// Related Topics 数组
// 👍 44 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
  const n = grid.length;
  const m = grid[0].length;
  let result = 0;
  const check = (arr) => {
    const num = new Int32Array(10);
    arr.forEach(item => {
      num[item]++;
    })
    for (let i = 1; i < 10; i++) {
      if (num[i] !== 1) {
        return false;
      }
    }
    const [a, b, c, d, e, f, g, h, i] = arr;
    return a + b + c === 15 && d + e + f === 15 && g + h + i === 15 && a + d + g === 15 && b + e + h === 15 && c + f + i === 15 &&
      a + e + i === 15 && c + e + g === 15;
  }
  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < m - 2; j++) {
      if (grid[i + 1][j + 1] !== 5) {
        continue;
      }
      if (check([grid[i][j], grid[i][j + 1], grid[i][j + 2],
        grid[i + 1][j], grid[i + 1][j + 1], grid[i + 1][j + 2],
        grid[i + 2][j], grid[i + 2][j + 1], grid[i + 2][j + 2]
      ])) {
        result++;
      }
    }
  }
  return result;
};
// leetcode submit region end(Prohibit modification and deletion)
