// 有一个 m x n 的二元网格，其中 1 表示砖块，0 表示空白。砖块 稳定（不会掉落）的前提是：
//
//
// 一块砖直接连接到网格的顶部，或者
// 至少有一块相邻（4 个方向之一）砖块 稳定 不会掉落时
//
//
// 给你一个数组 hits ，这是需要依次消除砖块的位置。每当消除 hits[i] = (rowi, coli) 位置上的砖块时，对应位置的砖块（若存在）会消
// 失，然后其他的砖块可能因为这一消除操作而掉落。一旦砖块掉落，它会立即从网格中消失（即，它不会落在其他稳定的砖块上）。
//
// 返回一个数组 result ，其中 result[i] 表示第 i 次消除操作对应掉落的砖块数目。
//
// 注意，消除可能指向是没有砖块的空白位置，如果发生这种情况，则没有砖块掉落。
//
//
//
// 示例 1：
//
//
// 输入：grid = [[1,0,0,0],[1,1,1,0]], hits = [[1,0]]
// 输出：[2]
// 解释：
// 网格开始为：
// [[1,0,0,0]，
// [1,1,1,0]]
// 消除 (1,0) 处加粗的砖块，得到网格：
// [[1,0,0,0]
// [0,1,1,0]]
// 两个加粗的砖不再稳定，因为它们不再与顶部相连，也不再与另一个稳定的砖相邻，因此它们将掉落。得到网格：
// [[1,0,0,0],
// [0,0,0,0]]
// 因此，结果为 [2] 。
//
//
// 示例 2：
//
//
// 输入：grid = [[1,0,0,0],[1,1,0,0]], hits = [[1,1],[1,0]]
// 输出：[0,0]
// 解释：
// 网格开始为：
// [[1,0,0,0],
// [1,1,0,0]]
// 消除 (1,1) 处加粗的砖块，得到网格：
// [[1,0,0,0],
// [1,0,0,0]]
// 剩下的砖都很稳定，所以不会掉落。网格保持不变：
// [[1,0,0,0],
// [1,0,0,0]]
// 接下来消除 (1,0) 处加粗的砖块，得到网格：
// [[1,0,0,0],
// [0,0,0,0]]
// 剩下的砖块仍然是稳定的，所以不会有砖块掉落。
// 因此，结果为 [0,0] 。
//
//
//
// 提示：
//
//
// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 200
// grid[i][j] 为 0 或 1
// 1 <= hits.length <= 4 * 104
// hits[i].length == 2
// 0 <= xi <= m - 1
// 0 <= yi <= n - 1
// 所有 (xi, yi) 互不相同
//
// Related Topics 并查集
// 👍 142 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
var hitBricks = function(grid, hits) {
  const m = grid.length;
  const n = grid[0].length;
  const fa = [];
  const size = [];
  const dirs = [[-1, 0], [0, -1], [1, 0], [0, 1]];
  const find = (x) => {
    if (x !== fa[x]) {
      fa[x] = find(fa[x]);
    }
    return fa[x];
  };
  const union = (u, v) => {
    const x = find(u);
    const y = find(v);
    if (x === y) {
      return;
    }
    fa[x] = y;
    size[y] += size[x];
  }
  const getIndex = (x, y) => {
    return x * n + y;
  }
  const inArea = (x, y) => {
    return x >= 0 && x < m && y >= 0 && y < n;
  }
  const getSize = (x) => {
    const root = find(x);
    return size[root];
  }
  for (let i = 0; i <= n * m; i++) {
    fa[i] = i;
    size[i] = 1;
  }
  const copy = new Array(m).fill(undefined).map(() => new Array(n));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      copy[i][j] = grid[i][j];
    }
  }
  for (const [x, y] of hits) {
    copy[x][y] = 0;
  }
  for (let j = 0; j < n; j++) {
    if (copy[0][j] === 1) {
      union(j, m * n);
    }
  }
  for (let i = 1; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (copy[i][j] === 1) {
        if (copy[i - 1][j] === 1) {
          union(getIndex(i - 1, j), getIndex(i, j));
        }
        if (j > 0 && copy[i][j - 1] === 1) {
          union(getIndex(i, j - 1), getIndex(i, j));
        }
      }
    }
  }
  const hitLength = hits.length;
  const result = new Array(hitLength);
  for (let i = hitLength - 1; i >= 0; i--) {
    const [x, y] = hits[i];
    if (grid[x][y] === 0) {
      result[i] = 0;
      continue;
    }
    const before = getSize(m * n);
    if (x === 0) {
      union(y, m * n);
    }
    for (const [offsetX, offsetY] of dirs) {
      const newX = x + offsetX;
      const newY = y + offsetY;
      if (inArea(newX, newY) && copy[newX][newY] === 1) {
        union(getIndex(x, y), getIndex(newX, newY));
      }
    }
    const now = getSize(m * n);
    result[i] = Math.max(0, now - before - 1); // 需要减去根节点本身
    copy[x][y] = 1;
  }
  return result;
};
// leetcode submit region end(Prohibit modification and deletion)
