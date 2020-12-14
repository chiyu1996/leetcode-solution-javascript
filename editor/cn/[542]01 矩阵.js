// 给定一个由 0 和 1 组成的矩阵，找出每个元素到最近的 0 的距离。
//
// 两个相邻元素间的距离为 1 。
//
//
//
// 示例 1：
//
//
// 输入：
// [[0,0,0],
// [0,1,0],
// [0,0,0]]
//
// 输出：
// [[0,0,0],
// [0,1,0],
// [0,0,0]]
//
//
// 示例 2：
//
//
// 输入：
// [[0,0,0],
// [0,1,0],
// [1,1,1]]
//
// 输出：
// [[0,0,0],
// [0,1,0],
// [1,2,1]]
//
//
//
//
// 提示：
//
//
// 给定矩阵的元素个数不超过 10000。
// 给定矩阵中至少有一个元素是 0。
// 矩阵中的元素只在四个方向上相邻: 上、下、左、右。
//
// Related Topics 深度优先搜索 广度优先搜索
// 👍 357 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
  const queue = [];
  const dirs = [[-1, 0], [0, -1], [1, 0], [0, 1]];
  const n = matrix.length;
  const m = matrix[0].length;
  const vis = new Array(n).fill(undefined).map(() => new Int32Array(m));
  const dis = new Array(n).fill(undefined).map(() => new Int32Array(m))
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!matrix[i][j]) {
        queue.push([i, j]);
        vis[i][j] = 1;
      }
    }
  }
  while (queue.length) {
    const [x, y] = queue.shift();
    for (const [offsetX, offsetY] of dirs) {
      const newX = x + offsetX;
      const newY = y + offsetY;
      if (newX >= 0 && newX < n && newY >= 0 && newY < m && !vis[newX][newY]) {
        dis[newX][newY] = dis[x][y] + 1;
        queue.push([newX, newY]);
        vis[newX][newY] = 1;
      }
    }
  }
  return dis;
};
// leetcode submit region end(Prohibit modification and deletion)
