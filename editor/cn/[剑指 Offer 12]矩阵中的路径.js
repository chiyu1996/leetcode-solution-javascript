//请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。路径可以从矩阵中的任意一格开始，每一步可以在矩阵中向左、右、上、下移动一格。如果
//一条路径经过了矩阵的某一格，那么该路径不能再次进入该格子。例如，在下面的3×4的矩阵中包含一条字符串“bfce”的路径（路径中的字母用加粗标出）。 
//
// [["a","b","c","e"], 
//["s","f","c","s"], 
//["a","d","e","e"]] 
//
// 但矩阵中不包含字符串“abfb”的路径，因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，路径不能再次进入这个格子。 
//
// 
//
// 示例 1： 
//
// 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "A
//BCCED"
//输出：true
// 
//
// 示例 2： 
//
// 输入：board = [["a","b"],["c","d"]], word = "abcd"
//输出：false
// 
//
// 提示： 
//
// 
// 1 <= board.length <= 200 
// 1 <= board[i].length <= 200 
// 
//
// 注意：本题与主站 79 题相同：https://leetcode-cn.com/problems/word-search/ 
// Related Topics 深度优先搜索 
// 👍 178 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    if (!board || board.length === 0 || board[0].length === 0) return false;
    let m = board.length, n = board[0].length;
    const dir = [[-1, 0], [0, -1], [1, 0], [0, 1]];
    let vis = new Array(m).fill(undefined).map(() => {
        return new Array(n).fill(0);
    });
    const dfs = (board, word, vis, col, row, step) => {
        if (step == word.length) {
            return true;
        }
        let result = false;
        for (let i = 0; i < 4; i++) {
            let newCol = col + dir[i][0];
            let newRow = row + dir[i][1];

            if (newCol >= 0 && newCol < m && newRow >= 0 && newRow < n && board[newCol][newRow] === word[step] && !vis[newCol][newRow]) {

                vis[newCol][newRow] = 1;
                result = result || dfs(board, word, vis, newCol, newRow, step + 1);
                vis[newCol][newRow] = 0;
            }
        }
        return result;

    };
    let result = false;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === word[0]) {
                vis[i][j] = 1;
                if (dfs(board, word, vis, i, j, 1)) return true;
                vis[i][j] = 0;
            }

        }
    }
    return result;
};
//leetcode submit region end(Prohibit modification and deletion)
