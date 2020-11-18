// 在本问题中，有根树指满足以下条件的有向图。该树只有一个根节点，所有其他节点都是该根节点的后继。每一个节点只有一个父节点，除了根节点没有父节点。
//
// 输入一个有向图，该图由一个有着N个节点 (节点值不重复1, 2, ..., N) 的树及一条附加的边构成。附加的边的两个顶点包含在1到N中间，这条附加的边
// 不属于树中已存在的边。
//
// 结果图是一个以边组成的二维数组。 每一个边 的元素是一对 [u, v]，用以表示有向图中连接顶点 u 和顶点 v 的边，其中 u 是 v 的一个父节点。
//
//
// 返回一条能删除的边，使得剩下的图是有N个节点的有根树。若有多个答案，返回最后出现在给定二维数组的答案。
//
// 示例 1:
//
// 输入: [[1,2], [1,3], [2,3]]
// 输出: [2,3]
// 解释: 给定的有向图如下:
//  1
// / \
// v   v
// 2-->3
//
//
// 示例 2:
//
// 输入: [[1,2], [2,3], [3,4], [4,1], [1,5]]
// 输出: [4,1]
// 解释: 给定的有向图如下:
// 5 <- 1 -> 2
//     ^    |
//     |    v
//     4 <- 3
//
//
// 注意:
//
//
// 二维数组大小的在3到1000范围内。
// 二维数组中的每个整数在1到N之间，其中 N 是二维数组的大小。
//
// Related Topics 树 深度优先搜索 并查集 图
// 👍 188 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantDirectedConnection = function(edges) {
  const len = edges.length; const indegree = new Array(len + 1).fill(0);

  const dfs = (j, n) => {
    for (let x = 0; x < len; ++x) {
      if (edges[x][0] === j) {
        if (edges[x][1] === n) return j;
        return dfs(edges[x][1], n);
      }
    }
  };

  for (const edge of edges) {
    ++indegree[edge[1]];
    if (indegree[edge[1]] === 2) {
      const num = dfs(edge[1], edge[1]);
      if (typeof num === 'number') {
        return [num, edge[1]];
      }
      return edge;
    }
  }

  for (let i = len - 1; i >= 0; --i) {
    if (typeof dfs(edges[i][1], edges[i][1]) === 'number') return edges[i];
  }
};
// leetcode submit region end(Prohibit modification and deletion)
