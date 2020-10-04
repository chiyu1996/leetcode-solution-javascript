//给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。 
//
// 示例: 
//
// 输入: n = 4, k = 2
//输出:
//[
//  [2,4],
//  [3,4],
//  [2,3],
//  [1,2],
//  [1,3],
//  [1,4],
//] 
// Related Topics 回溯算法 
// 👍 407 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    let ans = [];
    let dfs = (result, dep) => {
        if (dep === k) {
            ans.push([...result]);
            return;
        }
        let last = dep ? result[dep - 1] : 0;
        for (let i = last + 1; i + k - dep <= n + 1; i++) {
            result.push(i);
            dfs(result, dep + 1);
            result.pop();
        }
    };
    dfs([], 0);
    return ans;
};
//leetcode submit region end(Prohibit modification and deletion)
