// 给出集合 [1,2,3,…,n]，其所有元素共有 n! 种排列。
//
// 按大小顺序列出所有排列情况，并一一标记，当 n = 3 时, 所有排列如下：
//
//
// "123"
// "132"
// "213"
// "231"
// "312"
// "321"
//
//
// 给定 n 和 k，返回第 k 个排列。
//
// 说明：
//
//
// 给定 n 的范围是 [1, 9]。
// 给定 k 的范围是[1, n!]。
//
//
// 示例 1:
//
// 输入: n = 3, k = 3
// 输出: "213"
//
//
// 示例 2:
//
// 输入: n = 4, k = 9
// 输出: "2314"
//
// Related Topics 数学 回溯算法
// 👍 404 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  const fa = [1];
  const nums = [1];
  let tmp = 1;
  for (let i = 1; i <= n; i++) {
    fa.push(tmp * i);
    nums.push('' + (i + 1));
    tmp *= i;
  }
  let ans = '';
  k -= 1;
  for (let i = n - 1; i >= 0; i--) {
    const idx = Math.floor(k / fa[i]);
    k -= fa[i] * idx;
    ans += nums[idx];
    nums.splice(idx, 1);
  }
  return ans;
};
// leetcode submit region end(Prohibit modification and deletion)
