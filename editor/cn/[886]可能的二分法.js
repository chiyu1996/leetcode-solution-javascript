// 给定一组 N 人（编号为 1, 2, ..., N）， 我们想把每个人分进任意大小的两组。
//
// 每个人都可能不喜欢其他人，那么他们不应该属于同一组。
//
// 形式上，如果 dislikes[i] = [a, b]，表示不允许将编号为 a 和 b 的人归入同一组。
//
// 当可以用这种方法将所有人分进两组时，返回 true；否则返回 false。
//
//
//
//
//
//
// 示例 1：
//
//
// 输入：N = 4, dislikes = [[1,2],[1,3],[2,4]]
// 输出：true
// 解释：group1 [1,4], group2 [2,3]
//
//
// 示例 2：
//
//
// 输入：N = 3, dislikes = [[1,2],[1,3],[2,3]]
// 输出：false
//
//
// 示例 3：
//
//
// 输入：N = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]]
// 输出：false
//
//
//
//
// 提示：
//
//
// 1 <= N <= 2000
// 0 <= dislikes.length <= 10000
// dislikes[i].length == 2
// 1 <= dislikes[i][j] <= N
// dislikes[i][0] < dislikes[i][1]
// 对于 dislikes[i] == dislikes[j] 不存在 i != j
//
// Related Topics 深度优先搜索 图
// 👍 71 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(N, dislikes) {
  const fa = new Int32Array(2 * N + 1).map((item, index) => index);
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
  for (const dislike of dislikes) {
    const [a, b] = dislike;
    const da = a + N;
    const db = b + N;
    const rootA = find(a);
    const rootB = find(b);
    if (rootA === rootB) {
      return false;
    }
    union(a, db);
    union(b, da);
  }
  return true;
};
// leetcode submit region end(Prohibit modification and deletion)
