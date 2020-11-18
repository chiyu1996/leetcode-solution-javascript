// 给你一个整数数组 nums 和一个整数 k。
//
// 如果某个 连续 子数组中恰好有 k 个奇数数字，我们就认为这个子数组是「优美子数组」。
//
// 请返回这个数组中「优美子数组」的数目。
//
//
//
// 示例 1：
//
// 输入：nums = [1,1,2,1,1], k = 3
// 输出：2
// 解释：包含 3 个奇数的子数组是 [1,1,2,1] 和 [1,2,1,1] 。
//
//
// 示例 2：
//
// 输入：nums = [2,4,6], k = 1
// 输出：0
// 解释：数列中不包含任何奇数，所以不存在优美子数组。
//
//
// 示例 3：
//
// 输入：nums = [2,2,2,1,2,2,1,2,2,2], k = 2
// 输出：16
//
//
//
//
// 提示：
//
//
// 1 <= nums.length <= 50000
// 1 <= nums[i] <= 10^5
// 1 <= k <= nums.length
//
// Related Topics 双指针
// 👍 132 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
  const pre = new Array(nums.length + 1).fill(0);
  pre[0] = 1;
  let sum = 0;
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i] & 1;
    pre[sum] += 1;
    if (sum >= k) {
      ans += pre[sum - k];
    }
  }
  return ans;
};
// leetcode submit region end(Prohibit modification and deletion)
