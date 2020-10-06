//给定一个无向、连通的树。树中有 N 个标记为 0...N-1 的节点以及 N-1 条边 。 
//
// 第 i 条边连接节点 edges[i][0] 和 edges[i][1] 。 
//
// 返回一个表示节点 i 与其他所有节点距离之和的列表 ans。 
//
// 示例 1: 
//
// 
//输入: N = 6, edges = [[0,1],[0,2],[2,3],[2,4],[2,5]]
//输出: [8,12,6,10,10,10]
//解释: 
//如下为给定的树的示意图：
//  0
// / \
//1   2
//   /|\
//  3 4 5
//
//我们可以计算出 dist(0,1) + dist(0,2) + dist(0,3) + dist(0,4) + dist(0,5) 
//也就是 1 + 1 + 2 + 2 + 2 = 8。 因此，answer[0] = 8，以此类推。
// 
//
// 说明: 1 <= N <= 10000 
// Related Topics 树 深度优先搜索 
// 👍 189 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} N
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function (N, edges) {
    let ans = new Array(N).fill(0);
    let size = new Array(N).fill(0);
    let dp = new Array(N).fill(0);
    let graph = new Array(N).fill(undefined).map(() => []);
    const dfs1 = (u, pre) => {
        size[u] = 1;
        dp[u] = 0;
        for (const v of graph[u]) {
            if (v === pre) {
                continue;
            }
            dfs1(v, u);
            dp[u] += dp[v] + size[v];
            size[u] += size[v];
        }
    };
    const dfs2 = (u, pre) => {
        ans[u] = dp[u];
        for (const v of graph[u]) {
            if (v === pre) {
                continue;
            }
            const pu = dp[u], pv = dp[v];
            const su = size[u], sv = size[v];
            dp[u] -= dp[v] + size[v];
            size[u] -= size[v];
            dp[v] += dp[u] + size[u];
            size[v] += size[u];
            dfs2(v, u);
            dp[u] = pu;
            dp[v] = pv;
            size[u] = su;
            size[v] = sv;
        }
    };
    for (let edge of edges) {
        const [u, v] = edge;
        graph[u].push(v);
        graph[v].push(u);
    }
    dfs1(0, -1);
    dfs2(0, -1);
    return ans;
};
//leetcode submit region end(Prohibit modification and deletion)
