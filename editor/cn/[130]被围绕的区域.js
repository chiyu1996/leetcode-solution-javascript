// 给定一个二维的矩阵，包含 'X' 和 'O'（字母 O）。
//
// 找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充。
//
// 示例:
//
// X X X X
// X O O X
// X X O X
// X O X X
//
//
// 运行你的函数后，矩阵变为：
//
// X X X X
// X X X X
// X X X X
// X O X X
//
//
// 解释:
//
// 被围绕的区间不会存在于边界上，换句话说，任何边界上的 'O' 都不会被填充为 'X'。 任何不在边界上，或不与边界上的 'O' 相连的 'O' 最终都会被
// 填充为 'X'。如果两个元素在水平或垂直方向相邻，则称它们是“相连”的。
// Related Topics 深度优先搜索 广度优先搜索 并查集
// 👍 447 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  const n = board.length;
  if (n === 0) {
    return board;
  }
  const m = board[0].length;
  const dfs = (x, y) => {
    if (x < 0 || x >= n || y < 0 || y >= m || board[x][y] !== 'O') {
      return;
    }
    board[x][y] = 'A';
    dfs(x - 1, y);
    dfs(x, y - 1);
    dfs(x + 1, y);
    dfs(x, y + 1);
  }
  for (let i = 0; i < n; i++) {
    dfs(i, 0);
    dfs(i, m - 1);
  }
  for (let j = 0; j < m; j++) {
    dfs(0, j);
    dfs(n - 1, j);
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 'A') {
        board[i][j] = 'O';
      } else if (board[i][j] === 'O') {
        board[i][j] = 'X';
      }
    }
  }
  return board;
};
// leetcode submit region end(Prohibit modification and deletion)
