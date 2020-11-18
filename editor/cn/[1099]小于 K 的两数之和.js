// 给你一个整数数组 A 和一个整数 K，请在该数组中找出两个元素，使它们的和小于 K 但尽可能地接近 K，返回这两个元素的和。
//
// 如不存在这样的两个元素，请返回 -1。
//
//
//
// 示例 1：
//
// 输入：A = [34,23,1,24,75,33,54,8], K = 60
// 输出：58
// 解释：
// 34 和 24 相加得到 58，58 小于 60，满足题意。
//
//
// 示例 2：
//
// 输入：A = [10,20,30], K = 15
// 输出：-1
// 解释：
// 我们无法找到和小于 15 的两个元素。
//
//
//
// 提示：
//
//
// 1 <= A.length <= 100
// 1 <= A[i] <= 1000
// 1 <= K <= 2000
//
// Related Topics 数组
// 👍 26 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var twoSumLessThanK = function(A, K) {
  const n = A.length;
  A.sort((a, b) => a - b);
  let l = 0; let r = n - 1;
  let ans = -1;
  while (l < r) {
    const target = A[l] + A[r];
    if (target < K) {
      ans = Math.max(ans, target);
      l++;
    } else {
      r--;
    }
  }
  return ans;
};
// leetcode submit region end(Prohibit modification and deletion)
