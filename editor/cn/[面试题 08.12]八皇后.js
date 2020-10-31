//设计一种算法，打印 N 皇后在 N × N 棋盘上的各种摆法，其中每个皇后都不同行、不同列，也不在对角线上。这里的“对角线”指的是所有的对角线，不只是平分整
//个棋盘的那两条对角线。 
//
// 注意：本题相对原题做了扩展 
//
// 示例: 
//
//  输入：4
// 输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
// 解释: 4 皇后问题存在如下两个不同的解法。
//[
// [".Q..",  // 解法 1
//  "...Q",
//  "Q...",
//  "..Q."],
//
// ["..Q.",  // 解法 2
//  "Q...",
//  "...Q",
//  ".Q.."]
//]
// 
// Related Topics 回溯算法 
// 👍 47 👎 0


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
