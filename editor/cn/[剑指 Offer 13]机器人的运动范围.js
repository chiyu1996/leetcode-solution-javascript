//地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一
//格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。但
//它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？ 
//
// 
//
// 示例 1： 
//
// 输入：m = 2, n = 3, k = 1
//输出：3
// 
//
// 示例 2： 
//
// 输入：m = 3, n = 1, k = 0
//输出：1
// 
//
// 提示： 
//
// 
// 1 <= n,m <= 100 
// 0 <= k <= 20 
// 
// 👍 164 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
    if (!k) return 1;
    const dir = [[-1, 0], [0, -1], [1, 0], [0, 1]];
    let vis = new Array(m).fill(undefined).map(() => {
        return new Array(n).fill(0);
    });
    const getSum = (number) => {
        let ans = 0;
        while (number) {
            ans += number % 10;
            number = Math.floor(number / 10);
        }
        return ans;
    };
    let ans = 1;
    vis[0][0] = 1;
    let queue = [[0, 0]];
    while (queue.length) {
        let [col, row] = queue.shift();
        for (let i = 0; i < 4; i++) {
            let newCol = col + dir[i][0];
            let newRow = row + dir[i][1];
            if (newCol < 0 || newCol >= m || newRow < 0 || newRow >= n || vis[newCol][newRow] || getSum(newCol) + getSum(newRow) > k) continue;
            queue.push([newCol, newRow]);
            vis[newCol][newRow] = 1;
            ans++;
        }
    }
    return ans;
};
//leetcode submit region end(Prohibit modification and deletion)
