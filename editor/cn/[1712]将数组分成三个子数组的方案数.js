// 我们称一个分割整数数组的方案是 好的 ，当它满足：
//
//
// 数组被分成三个 非空 连续子数组，从左至右分别命名为 left ， mid ， right 。
// left 中元素和小于等于 mid 中元素和，mid 中元素和小于等于 right 中元素和。
//
//
// 给你一个 非负 整数数组 nums ，请你返回 好的 分割 nums 方案数目。由于答案可能会很大，请你将结果对 109 + 7 取余后返回。
//
//
//
// 示例 1：
//
//
// 输入：nums = [1,1,1]
// 输出：1
// 解释：唯一一种好的分割方案是将 nums 分成 [1] [1] [1] 。
//
// 示例 2：
//
//
// 输入：nums = [1,2,2,2,5,0]
// 输出：3
// 解释：nums 总共有 3 种好的分割方案：
// [1] [2] [2,2,5,0]
// [1] [2,2] [2,5,0]
// [1,2] [2,2] [5,0]
//
//
// 示例 3：
//
//
// 输入：nums = [3,2,1]
// 输出：0
// 解释：没有好的分割方案。
//
//
//
// 提示：
//
//
// 3 <= nums.length <= 105
// 0 <= nums[i] <= 104
//
// Related Topics 双指针 二分查找
// 👍 23 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplit = function(nums) {
  const n = nums.length;
  const pre_sum = new Int32Array(n + 1);
  const mod = 1e9 + 7;
  pre_sum[0] = nums[0];
  for (let i = 1; i < n; i++) {
    pre_sum[i] = pre_sum[i - 1] + nums[i];
  }
  const sum = pre_sum[n - 1];
  let result = 0;
  for (let i = 0; i < n - 1; i++) {
    if (pre_sum[i] * 3 > sum) {
      break;
    }
    let [l, r, ll, rr] = [i + 1, n - 2];
    while (l <= r) {
      const mid = (l + r) >> 1;
      if (pre_sum[mid] >= 2 * pre_sum[i]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
    ll = l;
    [l, r] = [i + 1, n - 2];
    while (l <= r) {
      const mid = (l + r) >> 1;
      if (sum - pre_sum[mid] >= pre_sum[mid] - pre_sum[i]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
    rr = r;
    result += (rr - ll + 1) % mod;
  }
  return result % mod;
};
// leetcode submit region end(Prohibit modification and deletion)
