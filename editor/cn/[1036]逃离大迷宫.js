// 在一个 10^6 x 10^6 的网格中，每个网格块的坐标为 (x, y)，其中 0 <= x, y < 10^6。
//
// 我们从源方格 source 开始出发，意图赶往目标方格 target。每次移动，我们都可以走到网格中在四个方向上相邻的方格，只要该方格不在给出的封锁列表
// blocked 上。
//
// 只有在可以通过一系列的移动到达目标方格时才返回 true。否则，返回 false。
//
//
//
// 示例 1：
//
// 输入：blocked = [[0,1],[1,0]], source = [0,0], target = [0,2]
// 输出：false
// 解释：
// 从源方格无法到达目标方格，因为我们无法在网格中移动。
//
//
// 示例 2：
//
// 输入：blocked = [], source = [0,0], target = [999999,999999]
// 输出：true
// 解释：
// 因为没有方格被封锁，所以一定可以到达目标方格。
//
//
//
//
// 提示：
//
//
// 0 <= blocked.length <= 200
// blocked[i].length == 2
// 0 <= blocked[i][j] < 10^6
// source.length == target.length == 2
// 0 <= source[i][j], target[i][j] < 10^6
// source != target
//
// Related Topics 广度优先搜索
// 👍 40 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} blocked
 * @param {number[]} source
 * @param {number[]} target
 * @return {boolean}
 */
var isEscapePossible = function(blocked, source, target) {
  const blocks = new Set();
  for (const block of blocked) {
    blocks.add(`${block[0]}:${block[1]}`);
  }
  const maxCount = (blocked.length * (blocked.length + 1)) >> 1;
  const bfs = (blocked, source, target) => {
    const queue = [[...source]];
    let top = 0;
    const dirs = [[-1, 0], [0, -1], [1, 0], [0, 1]];
    const vis = new Set();
    const path = `${source[0]}:${source[1]}`;
    vis.add(path);
    const limit = 1e6;
    while (queue.length - top > 0) {
      const front = queue[top++];
      for (const dir of dirs) {
        const newX = front[0] + dir[0];
        const newY = front[1] + dir[1];
        const path = `${newX}:${newY}`;
        if (newX < 0 || newX >= limit || newY < 0 || newY >= limit || vis.has(path) || blocks.has(path)) continue;
        if (newX === target[0] && newY === target[1]) return true;
        queue.push([newX, newY]);
        vis.add(path);
      }
      if (vis.size > maxCount) {
        return true;
      }
    }
    return false;
  };
  return bfs(blocked, source, target) && bfs(blocked, target, source);
};
// leetcode submit region end(Prohibit modification and deletion)
