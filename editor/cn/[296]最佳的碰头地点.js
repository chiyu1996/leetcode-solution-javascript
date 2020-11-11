// 有一队人（两人或以上）想要在一个地方碰面，他们希望能够最小化他们的总行走距离。
//
// 给你一个 2D 网格，其中各个格子内的值要么是 0，要么是 1。
//
// 1 表示某个人的家所处的位置。这里，我们将使用 曼哈顿距离 来计算，其中 distance(p1, p2) = |p2.x - p1.x| + |p2.y
// - p1.y|。
//
// 示例：
//
// 输入:
//
// 1 - 0 - 0 - 0 - 1
// |   |   |   |   |
// 0 - 0 - 0 - 0 - 0
// |   |   |   |   |
// 0 - 0 - 1 - 0 - 0
//
// 输出: 6
//
// 解析: 给定的三个人分别住在(0,0)，(0,4) 和 (2,2):
//     (0,2) 是一个最佳的碰面点，其总行走距离为 2 + 2 + 2 = 6，最小，因此返回 6。
// Related Topics 排序 数学
// 👍 48 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minTotalDistance = function(grid) {
  const getRows = () => {
    const rows = []
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] === 1) {
          rows.push(i)
        }
      }
    }
    return rows;
  };
  const getCols = () => {
    const cols = []
    for (let j = 0; j < grid[0].length; j++) {
      for (let i = 0; i < grid.length; i++) {
        if (grid[i][j] === 1) {
          cols.push(j)
        }
      }
    }
    return cols;
  };
  const getDistance = (arr) => {
    let start = 0; let end = arr.length - 1;
    let dis = 0;
    while (start < end) {
      dis += arr[end] - arr[start];
      end--;
      start++;
    }
    return dis;
  };
  const Rows = getRows();
  const Cols = getCols();
  return getDistance(Cols) + getDistance(Rows);
};
// leetcode submit region end(Prohibit modification and deletion)
