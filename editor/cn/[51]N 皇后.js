//n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。 
//
// 
//
// 上图为 8 皇后问题的一种解法。 
//
// 给定一个整数 n，返回所有不同的 n 皇后问题的解决方案。 
//
// 每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。 
//
// 
//
// 示例： 
//
// 输入：4
//输出：[
// [".Q..",  // 解法 1
//  "...Q",
//  "Q...",
//  "..Q."],
//
// ["..Q.",  // 解法 2
//  "Q...",
//  "...Q",
//  ".Q.."]
//]
//解释: 4 皇后问题存在两个不同的解法。
// 
//
// 
//
// 提示： 
//
// 
// 皇后彼此不能相互攻击，也就是说：任何两个皇后都不能处于同一条横行、纵行或斜线上。 
// 
// Related Topics 回溯算法 
// 👍 622 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    let ans = [];
    let board = new Array(n).fill(undefined).map(() => {
        return new Array(n).fill(".");
    });
    let cols = new Set();
    let dia1 = new Set();
    let dia2 = new Set();
    let dfs = (row) => {
        if (row === n) {
            const cur = board.slice();
            for (let i = 0; i < n; i++) {
                cur[i] = cur[i].join("");
            }
            ans.push(cur);
            return;
        }
        for (let col = 0; col < n; col++) {
            if (!cols.has(col) && !dia1.has(row + col) && !dia2.has(row - col)) {
                board[row][col] = "Q";
                cols.add(col);
                dia1.add(row + col);
                dia2.add(row - col);
                dfs(row + 1);
                board[row][col] = ".";
                cols.delete(col);
                dia1.delete(row + col);
                dia2.delete(row - col);
            }
        }
    };
    dfs(0);
    return ans;

};
//leetcode submit region end(Prohibit modification and deletion)
