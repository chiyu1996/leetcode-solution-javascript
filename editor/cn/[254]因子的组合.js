// 整数可以被看作是其因子的乘积。
//
// 例如：
//
// 8 = 2 x 2 x 2;
//  = 2 x 4.
//
// 请实现一个函数，该函数接收一个整数 n 并返回该整数所有的因子组合。
//
// 注意：
//
//
// 你可以假定 n 为永远为正数。
// 因子必须大于 1 并且小于 n。
//
//
// 示例 1：
//
// 输入: 1
// 输出: []
//
//
// 示例 2：
//
// 输入: 37
// 输出: []
//
// 示例 3：
//
// 输入: 12
// 输出:
// [
//  [2, 6],
//  [2, 2, 3],
//  [3, 4]
// ]
//
// 示例 4:
//
// 输入: 32
// 输出:
// [
//  [2, 16],
//  [2, 2, 8],
//  [2, 2, 2, 4],
//  [2, 2, 2, 2, 2],
//  [2, 4, 4],
//  [4, 8]
// ]
//
// Related Topics 回溯算法
// 👍 51 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {number[][]}
 */
var getFactors = function(n) {
  const ans = [];
  const dfs = (n, start, arr) => {
    if (n < 2) return;
    const max = Math.sqrt(n);
    for (let i = start; i <= max; i++) {
      if (n % i === 0 && (i >= arr[arr.length - 1] || arr.length === 0)) {
        const next = n / i;
        const temp = arr.concat(i);
        ans.push(temp.concat(next));
        dfs(next, i, temp);
      }
    }
  };
  dfs(n, 2, []);
  return ans;
};
// leetcode submit region end(Prohibit modification and deletion)
