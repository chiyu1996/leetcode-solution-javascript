// 找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。
//
// 说明：
//
//
// 所有数字都是正整数。
// 解集不能包含重复的组合。
//
//
// 示例 1:
//
// 输入: k = 3, n = 7
// 输出: [[1,2,4]]
//
//
// 示例 2:
//
// 输入: k = 3, n = 9
// 输出: [[1,2,6], [1,3,5], [2,3,4]]
//
// Related Topics 数组 回溯算法
// 👍 212 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  const temp = [];
  const res = [];
  const dfs = (cur, n, k, sum, res) => {
    if (temp.length + (n - cur + 1) < k || temp.length > k) {
      return;
    }
    if (temp.length === k && temp.reduce((previous, value) => previous + value, 0) === sum) {
      res.push(temp.slice());
      return;
    }
    temp.push(cur);
    dfs(cur + 1, n, k, sum, res);
    temp.pop();
    dfs(cur + 1, n, k, sum, res);
  };

  dfs(1, 9, k, n, res);
  return res;
};
// leetcode submit region end(Prohibit modification and deletion)
