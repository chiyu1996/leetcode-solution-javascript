//n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。 
//
// 
//
// 上图为 8 皇后问题的一种解法。 
//
// 给定一个整数 n，返回 n 皇后不同的解决方案的数量。 
//
// 示例: 
//
// 输入: 4
//输出: 2
//解释: 4 皇后问题存在如下两个不同的解法。
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
//
// 
//
// 提示： 
//
// 
// 皇后，是国际象棋中的棋子，意味着国王的妻子。皇后只做一件事，那就是“吃子”。当她遇见可以吃的棋子时，就迅速冲上去吃掉棋子。当然，她横、竖、斜都可走一或 N
//-1 步，可进可退。（引用自 百度百科 - 皇后 ） 
// 
// Related Topics 回溯算法 
// 👍 152 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
    let ans = [];
    let board = new Array(n).fill(undefined).map(() => {
        return new Array(n).fill(".");
    });
    let cols = new Set();
    let dia1 = new Set();
    let dia2 = new Set();
    const dfs = (row) => {
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
    return ans.length;
};
//leetcode submit region end(Prohibit modification and deletion)
