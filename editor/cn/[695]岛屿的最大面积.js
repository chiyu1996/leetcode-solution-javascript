//给定一个包含了一些 0 和 1 的非空二维数组 grid 。 
//
// 一个 岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在水平或者竖直方向上相邻。你可以假设 grid 的四个边缘都被 
//0（代表水）包围着。 
//
// 找到给定的二维数组中最大的岛屿面积。(如果没有岛屿，则返回面积为 0 。) 
//
// 
//
// 示例 1: 
//
// [[0,0,1,0,0,0,0,1,0,0,0,0,0],
// [0,0,0,0,0,0,0,1,1,1,0,0,0],
// [0,1,1,0,1,0,0,0,0,0,0,0,0],
// [0,1,0,0,1,1,0,0,1,0,1,0,0],
// [0,1,0,0,1,1,0,0,1,1,1,0,0],
// [0,0,0,0,0,0,0,0,0,0,1,0,0],
// [0,0,0,0,0,0,0,1,1,1,0,0,0],
// [0,0,0,0,0,0,0,1,1,0,0,0,0]]
// 
//
// 对于上面这个给定矩阵应返回 6。注意答案不应该是 11 ，因为岛屿只能包含水平或垂直的四个方向的 1 。 
//
// 示例 2: 
//
// [[0,0,0,0,0,0,0,0]] 
//
// 对于上面这个给定的矩阵, 返回 0。 
//
// 
//
// 注意: 给定的矩阵grid 的长度和宽度都不超过 50。 
// Related Topics 深度优先搜索 数组 
// 👍 366 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    let m = grid.length;
    let n = grid[0].length;
    let dir = [[-1, 0], [0, -1], [1, 0], [0, 1]];

    function dfs(grid, x, y) {
        if (x < 0 || y < 0 || x === m || y === n || grid[x][y] === 0) {
            return 0;
        }
        grid[x][y] = 0;
        let ans = 1;

        for (let k = 0; k < 4; k++) {
            let next_x = x + dir[k][0];
            let next_y = y + dir[k][1];
            ans += dfs(grid, next_x, next_y);
        }
        return ans;
    }

    let ans = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] !== 0) {
                ans = Math.max(ans, dfs(grid, i, j));
            }

        }
    }

    return ans;
};
//leetcode submit region end(Prohibit modification and deletion)
