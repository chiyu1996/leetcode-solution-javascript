//给你一个 m * n 的网格，其中每个单元格不是 0（空）就是 1（障碍物）。每一步，您都可以在空白单元格中上、下、左、右移动。 
//
// 如果您 最多 可以消除 k 个障碍物，请找出从左上角 (0, 0) 到右下角 (m-1, n-1) 的最短路径，并返回通过该路径所需的步数。如果找不到这样
//的路径，则返回 -1。 
//
// 
//
// 示例 1： 
//
// 输入： 
//grid = 
//[[0,0,0],
// [1,1,0],
// [0,0,0],
// [0,1,1],
// [0,0,0]], 
//k = 1
//输出：6
//解释：
//不消除任何障碍的最短路径是 10。
//消除位置 (3,2) 处的障碍后，最短路径是 6 。该路径是 (0,0) -> (0,1) -> (0,2) -> (1,2) -> (2,2) -> (3
//,2) -> (4,2).
// 
//
// 
//
// 示例 2： 
//
// 输入：
//grid = 
//[[0,1,1],
// [1,1,1],
// [1,0,0]], 
//k = 1
//输出：-1
//解释：
//我们至少需要消除两个障碍才能找到这样的路径。
// 
//
// 
//
// 提示： 
//
// 
// grid.length == m 
// grid[0].length == n 
// 1 <= m, n <= 40 
// 1 <= k <= m*n 
// grid[i][j] == 0 or 1 
// grid[0][0] == grid[m-1][n-1] == 0 
// 
// Related Topics 广度优先搜索 
// 👍 89 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var shortestPath = function (grid, k) {
    const dirs = [[-1, 0], [0, -1], [1, 0], [0, 1]];
    let m = grid.length;
    let n = grid[0].length;
    if (m === 1 && n === 1) return 0;
    k = Math.min(k,m+n-3)
    let vis = new Array(m).fill(undefined).map(() => {
        return new Array(n).fill(undefined).map(() => {
            return new Array(k).fill(false);
        });
    });
    let queue = [[0, 0, 0, 0]];
    vis[0][0][0] = true;
    while (queue.length) {
        let [x, y, curK, step] = queue.shift();
        if (x === m - 1 && y === n - 1) {
            return step;
        }
        for (let dir of dirs) {
            let newX = x + dir[0];
            let newY = y + dir[1];
            if (newX < 0 || newX >= m || newY < 0 || newY >= n) {
                continue;
            }
            if (grid[newX][newY] === 1 && curK >= k) {
                continue;
            }
            let newK = grid[newX][newY] ? curK + 1 : curK;
            if (vis[newX][newY][newK]) {
                continue;
            } else {
                vis[newX][newY][newK] = true;
            }
            queue.push([newX, newY, newK, step + 1]);
        }

    }
    return -1;
};
//leetcode submit region end(Prohibit modification and deletion)
