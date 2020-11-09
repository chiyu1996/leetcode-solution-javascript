// 我们有一个由平面上的点组成的列表 points。需要从中找出 K 个距离原点 (0, 0) 最近的点。
//
// （这里，平面上两点之间的距离是欧几里德距离。）
//
// 你可以按任何顺序返回答案。除了点坐标的顺序之外，答案确保是唯一的。
//
//
//
// 示例 1：
//
// 输入：points = [[1,3],[-2,2]], K = 1
// 输出：[[-2,2]]
// 解释：
// (1, 3) 和原点之间的距离为 sqrt(10)，
// (-2, 2) 和原点之间的距离为 sqrt(8)，
// 由于 sqrt(8) < sqrt(10)，(-2, 2) 离原点更近。
// 我们只需要距离原点最近的 K = 1 个点，所以答案就是 [[-2,2]]。
//
//
// 示例 2：
//
// 输入：points = [[3,3],[5,-1],[-2,4]], K = 2
// 输出：[[3,3],[-2,4]]
// （答案 [[-2,4],[3,3]] 也会被接受。）
//
//
//
//
// 提示：
//
//
// 1 <= K <= points.length <= 10000
// -10000 < points[i][0] < 10000
// -10000 < points[i][1] < 10000
//
// Related Topics 堆 排序 分治算法
// 👍 167 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
  const getDis = ([x, y]) => {
    return x * x + y * y;
  }
  const pagination = (left, right) => {
    const temp = [...points[left]]
    const dis = getDis(points[left])
    while (left < right) {
      while (left < right && dis <= getDis(points[right])) {
        right--;
      }
      points[left] = [...points[right]];
      while (left < right && dis >= getDis(points[left])) {
        left++;
      }
      points[right] = [...points[left]]
    }
    points[left] = [...temp];
    return left;
  };
  const quick_sort = (left, right, K) => {
    if (left > right) return points.slice(0, K);
    const p = pagination(left, right);
    if (p === K) {
      return points.slice(0, K);
    } else {
      return p < K ? quick_sort(p + 1, right, K) : quick_sort(left, p, K);
    }
  };
  const n = points.length;
  if (n <= K) return points;
  if (K <= 0) return [];
  return quick_sort(0, n - 1, K);
};
// leetcode submit region end(Prohibit modification and deletion)
