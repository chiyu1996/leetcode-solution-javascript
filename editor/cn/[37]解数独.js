// 编写一个程序，通过填充空格来解决数独问题。
//
// 一个数独的解法需遵循如下规则：
//
//
// 数字 1-9 在每一行只能出现一次。
// 数字 1-9 在每一列只能出现一次。
// 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
//
//
// 空白格用 '.' 表示。
//
//
//
// 一个数独。
//
//
//
// 答案被标成红色。
//
// 提示：
//
//
// 给定的数独序列只包含数字 1-9 和字符 '.' 。
// 你可以假设给定的数独只有唯一解。
// 给定数独永远是 9x9 形式的。
//
// Related Topics 哈希表 回溯算法
// 👍 653 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  const col = Array.from(new Array(9), () => new Set());
  const row = Array.from(new Array(9), () => new Set());
  const block = Array.from(new Array(9), () => new Set());
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== '.') {
        row[i].add(board[i][j]);
        col[j].add(board[i][j]);
        block[Math.floor(i / 3) * 3 + Math.floor(j / 3)].add(board[i][j]);
      }
    }
  }
  const judge = (number, m, n) => {
    if (col[n].has(number)) {
      return false;
    }
    if (row[m].has(number)) {
      return false;
    }
    if (block[Math.floor(m / 3) * 3 + Math.floor(n / 3)].has(number)) {
      return false;
    }
    return true;
    // return !col[n].has(number)&&!row[m].has(number)&&!block[Math.floor( m/ 3) * 3 + Math.floor( n / 3)].has(number)
  };
  const dfs = (m, n) => {
    if (m === 9 && n === 0) {
      return true;
    }
    const newCol = (n + 1) % 9;
    const newRow = n + 1 === 9 ? m + 1 : m;
    if (board[m][n] === '.') {
      for (let i = 1; i <= 9; i++) {
        const str = i + '';
        if (judge(str, m, n)) {
          board[m][n] = str;
          col[n].add(str);
          row[m].add(str);
          block[Math.floor(m / 3) * 3 + Math.floor(n / 3)].add(str);
          if (dfs(newRow, newCol)) {
            return true;
          }
          board[m][n] = '.';
          col[n].delete(str);
          row[m].delete(str);
          block[Math.floor(m / 3) * 3 + Math.floor(n / 3)].delete(str);
        }
      }
    } else {
      return dfs(newRow, newCol);
    }
    return false;
  };
  dfs(0, 0);
  return board;
};
// leetcode submit region end(Prohibit modification and deletion)
