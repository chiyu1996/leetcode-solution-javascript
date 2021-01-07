//
//
// 有 n 个城市，其中一些彼此相连，另一些没有相连。如果城市 a 与城市 b 直接相连，且城市 b 与城市 c 直接相连，那么城市 a 与城市 c 间接相连
// 。
//
// 省份 是一组直接或间接相连的城市，组内不含其他没有相连的城市。
//
// 给你一个 n x n 的矩阵 isConnected ，其中 isConnected[i][j] = 1 表示第 i 个城市和第 j 个城市直接相连，而
// isConnected[i][j] = 0 表示二者不直接相连。
//
// 返回矩阵中 省份 的数量。
//
//
//
// 示例 1：
//
//
// 输入：isConnected = [[1,1,0],[1,1,0],[0,0,1]]
// 输出：2
//
//
// 示例 2：
//
//
// 输入：isConnected = [[1,0,0],[0,1,0],[0,0,1]]
// 输出：3
//
//
//
//
// 提示：
//
//
// 1 <= n <= 200
// n == isConnected.length
// n == isConnected[i].length
// isConnected[i][j] 为 1 或 0
// isConnected[i][i] == 1
// isConnected[i][j] == isConnected[j][i]
//
//
//
// Related Topics 深度优先搜索 并查集
// 👍 435 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
  const fa = [];
  const find = (root) => {
    let son = root;
    while (root !== fa[root]) {
      root = fa[root];
    }
    while (son !== root) {
      [son, fa[son]] = [fa[son], root];
    }
    return root;
  };
  const union = (x, y) => {
    const a = find(x);
    const b = find(y);
    if (a !== b) {
      fa[a] = b;
    }
  };
  const n = isConnected.length;
  for (let i = 0; i < n; i++) {
    fa[i] = i;
  }
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (isConnected[i][j] === 1) {
        union(i, j);
      }
    }
  }
  let result = 0;
  for (let i = 0; i < n; i++) {
    if (fa[i] === i) {
      result++;
    }
  }
  return result;
};
// leetcode submit region end(Prohibit modification and deletion)
