// 给定一个二维网格和一个单词，找出该单词是否存在于网格中。
//
// 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
//
//
//
// 示例:
//
// board =
// [
//  ['A','B','C','E'],
//  ['S','F','C','S'],
//  ['A','D','E','E']
// ]
//
// 给定 word = "ABCCED", 返回 true
// 给定 word = "SEE", 返回 true
// 给定 word = "ABCB", 返回 false
//
//
//
// 提示：
//
//
// board 和 word 中只包含大写和小写英文字母。
// 1 <= board.length <= 200
// 1 <= board[i].length <= 200
// 1 <= word.length <= 10^3
//
// Related Topics 数组 回溯算法
// 👍 638 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const dirs = [[-1, 0], [0, -1], [1, 0], [0, 1]];
  if (!board.length || !board[0].length) return false;
  const m = board.length;
  const n = board[0].length;
  const length = word.length;
  const vis = new Array(m).fill(undefined).map(() => {
    return new Array(n).fill(0);
  });
  const dfs = (x, y, cur) => {
    const now = board[x][y];
    if (now !== word[cur]) return false;
    if (cur === length - 1) {
      return true;
    }
    let result = false;
    for (const dir of dirs) {
      const newX = x + dir[0];
      const newY = y + dir[1];
      if (newX < m && newX >= 0 && newY < n && newY >= 0 && !vis[newX][newY]) {
        vis[newX][newY] = 1;
        result = result || dfs(newX, newY, cur + 1);
        vis[newX][newY] = 0;
      }
    }
    return result;
  };
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      vis[i][j] = 1;
      if (dfs(i, j, 0)) {
        return true;
      }
      vis[i][j] = 0;
    }
  }
  return false;
};
// leetcode submit region end(Prohibit modification and deletion)
