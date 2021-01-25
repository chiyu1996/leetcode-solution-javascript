// 在由 1 x 1 方格组成的 N x N 网格 grid 中，每个 1 x 1 方块由 /、\ 或空格构成。这些字符会将方块划分为一些共边的区域。
//
// （请注意，反斜杠字符是转义的，因此 \ 用 "\\" 表示。）。
//
// 返回区域的数目。
//
//
//
//
//
//
// 示例 1：
//
// 输入：
// [
//  " /",
//  "/ "
// ]
// 输出：2
// 解释：2x2 网格如下：
//
//
// 示例 2：
//
// 输入：
// [
//  " /",
//  "  "
// ]
// 输出：1
// 解释：2x2 网格如下：
//
//
// 示例 3：
//
// 输入：
// [
//  "\\/",
//  "/\\"
// ]
// 输出：4
// 解释：（回想一下，因为 \ 字符是转义的，所以 "\\/" 表示 \/，而 "/\\" 表示 /\。）
// 2x2 网格如下：
//
//
// 示例 4：
//
// 输入：
// [
//  "/\\",
//  "\\/"
// ]
// 输出：5
// 解释：（回想一下，因为 \ 字符是转义的，所以 "/\\" 表示 /\，而 "\\/" 表示 \/。）
// 2x2 网格如下：
//
//
// 示例 5：
//
// 输入：
// [
//  "//",
//  "/ "
// ]
// 输出：3
// 解释：2x2 网格如下：
//
//
//
//
//
// 提示：
//
//
// 1 <= grid.length == grid[0].length <= 30
// grid[i][j] 是 '/'、'\'、或 ' '。
//
// Related Topics 深度优先搜索 并查集 图
// 👍 198 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function(grid) {
  const n = grid.length;
  const size = 4 * n * n;
  const uf = new UnionFind(size);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const index = 4 * (i * n + j);
      const c = grid[i][j];
      if (c === '/') {
        uf.union(index, index + 1);
        uf.union(index + 2, index + 3);
      } else if (c === '\\') {
        uf.union(index + 1, index + 2);
        uf.union(index, index + 3);
      } else {
        uf.union(index, index + 1);
        uf.union(index + 1, index + 2);
        uf.union(index + 2, index + 3);
      }
      if (j + 1 < n) {
        uf.union(index + 2, 4 * (i * n + j + 1));
      }
      if (i + 1 < n) {
        uf.union(index + 3, 4 * ((i + 1) * n + j) + 1)
      }
    }
  }
  return uf.count;
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
  find(index) {
    if (this.parent[index] !== index) {
      this.parent[index] = this.find(this.parent[index]);
    }
    return this.parent[index];
  }
}
// leetcode submit region end(Prohibit modification and deletion)
