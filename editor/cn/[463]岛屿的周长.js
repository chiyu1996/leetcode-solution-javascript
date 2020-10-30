//给定一个包含 0 和 1 的二维网格地图，其中 1 表示陆地 0 表示水域。 
//
// 网格中的格子水平和垂直方向相连（对角线方向不相连）。整个网格被水完全包围，但其中恰好有一个岛屿（或者说，一个或多个表示陆地的格子相连组成的岛屿）。 
//
// 岛屿中没有“湖”（“湖” 指水域在岛屿内部且不和岛屿周围的水相连）。格子是边长为 1 的正方形。网格为长方形，且宽度和高度均不超过 100 。计算这个岛屿
//的周长。 
//
// 
//
// 示例 : 
//
// 输入:
//[[0,1,0,0],
// [1,1,1,0],
// [0,1,0,0],
// [1,1,0,0]]
//
//输出: 16
//
//解释: 它的周长是下面图片中的 16 个黄色的边：
//
//
// 
// Related Topics 哈希表 
// 👍 305 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    if (!grid || !grid.length) return 0;
    let m = grid.length;
    let n = grid[0].length;
    let dirs = [[-1, 0], [0, -1], [1, 0], [0, 1]];
    const getEdges = (x, y) => {
        let cnt = 4;
        for (let [offsetX, offsetY] of dirs) {
            let newX = x + offsetX;
            let newY = y + offsetY;
            if (newX < 0 || newX >= m || newY < 0 || newY >= n) {
                continue;
            }
            if (grid[newX][newY] === 1) {
                cnt--;
            }
        }
        return cnt;
    };
    let ans = 0;
    grid.forEach((row, i) => {
        row.forEach((item, j) => {
            if (item === 1) {
                ans += getEdges(i, j);
            }
        });
    });
    return ans;
};
//leetcode submit region end(Prohibit modification and deletion)
