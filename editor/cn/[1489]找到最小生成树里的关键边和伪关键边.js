// 给你一个 n 个点的带权无向连通图，节点编号为 0 到 n-1 ，同时还有一个数组 edges ，其中 edges[i] = [fromi, toi, we
// ighti] 表示在 fromi 和 toi 节点之间有一条带权无向边。最小生成树 (MST) 是给定图中边的一个子集，它连接了所有节点且没有环，而且这些边的权
// 值和最小。
//
// 请你找到给定图中最小生成树的所有关键边和伪关键边。如果从图中删去某条边，会导致最小生成树的权值和增加，那么我们就说它是一条关键边。伪关键边则是可能会出现在
// 某些最小生成树中但不会出现在所有最小生成树中的边。
//
// 请注意，你可以分别以任意顺序返回关键边的下标和伪关键边的下标。
//
//
//
// 示例 1：
//
//
//
// 输入：n = 5, edges = [[0,1,1],[1,2,1],[2,3,2],[0,3,2],[0,4,3],[3,4,3],[1,4,6]]
// 输出：[[0,1],[2,3,4,5]]
// 解释：上图描述了给定图。
// 下图是所有的最小生成树。
//
// 注意到第 0 条边和第 1 条边出现在了所有最小生成树中，所以它们是关键边，我们将这两个下标作为输出的第一个列表。
// 边 2，3，4 和 5 是所有 MST 的剩余边，所以它们是伪关键边。我们将它们作为输出的第二个列表。
//
//
// 示例 2 ：
//
//
//
// 输入：n = 4, edges = [[0,1,1],[1,2,1],[2,3,1],[0,3,1]]
// 输出：[[],[0,1,2,3]]
// 解释：可以观察到 4 条边都有相同的权值，任选它们中的 3 条可以形成一棵 MST 。所以 4 条边都是伪关键边。
//
//
//
//
// 提示：
//
//
// 2 <= n <= 100
// 1 <= edges.length <= min(200, n * (n - 1) / 2)
// edges[i].length == 3
// 0 <= fromi < toi < n
// 1 <= weighti <= 1000
// 所有 (fromi, toi) 数对都是互不相同的。
//
// Related Topics 深度优先搜索 并查集
// 👍 78 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var findCriticalAndPseudoCriticalEdges = function(n, edges) {
  const m = edges.length;
  let values = 0;
  edges.forEach((edge, index) => {
    edge.push(index);
  })
  edges.sort((a, b) => a[2] - b[2]);
  let ut = new UnionFind(n);
  // 计算最小生成树权值和
  edges.forEach(([from, to, value]) => {
    if (ut.union(from, to)) {
      values += value;
    }
  })
  const result = [[], []];
  for (let i = 0; i < m; i++) {
    ut = new UnionFind(n);
    let v = 0;
    for (let j = 0; j < m; j++) {
      // 跳过第 i 条边是为了测试i是否为关键边
      if (j !== i && ut.union(edges[j][0], edges[j][1])) {
        v += edges[j][2];
      }
    }
    // 如果连通块大于1 或者 最小生成树权值和增加，说明i这条边是关键边
    if (ut.count > 1 || (ut.count === 1 && v > values)) {
      // 因为排序过,所以数组中第4个元素才是原本的序号
      result[0].push(edges[i][3]);
      // 一条边不可能既是关键边又是伪关键边
      continue;
    }
    ut = new UnionFind(n);
    ut.union(edges[i][0], edges[i][1]);
    v = edges[i][2];
    for (let j = 0; j < m; j++) {
      if (j !== i && ut.union(edges[j][0], edges[j][1])) {
        v += edges[j][2];
      }
    }
    if (v === values) {
      result[1].push(edges[i][3]);
    }
  }
  return result;
};
class UnionFind {
  constructor(n) {
    this.count = n;
    this.parent = new Array(n).fill(0).map((value, index) => index);
  }
  union(index1, index2) {
    const u = this.find(index1);
    const v = this.find(index2);
    if (u === v) {
      return false;
    }
    this.parent[u] = v;
    this.count--;
    return true;
  }
  connected(index1, index2) {
    return this.find(index1) === this.find(index2);
  }
  find(index) {
    if (this.parent[index] !== index) {
      this.parent[index] = this.find(this.parent[index]);
    }
    return this.parent[index];
  }
}
// leetcode submit region end(Prohibit modification and deletion)
