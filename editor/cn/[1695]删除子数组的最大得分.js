// 给你一个正整数数组 nums ，请你从中删除一个含有 若干不同元素 的子数组。删除子数组的 得分 就是子数组各元素之 和 。
//
// 返回 只删除一个 子数组可获得的 最大得分 。
//
// 如果数组 b 是数组 a 的一个连续子序列，即如果它等于 a[l],a[l+1],...,a[r] ，那么它就是 a 的一个子数组。
//
//
//
// 示例 1：
//
//
// 输入：nums = [4,2,4,5,6]
// 输出：17
// 解释：最优子数组是 [2,4,5,6]
//
//
// 示例 2：
//
//
// 输入：nums = [5,2,1,2,5,2,1,2,5]
// 输出：8
// 解释：最优子数组是 [5,2,1] 或 [1,2,5]
//
//
//
//
// 提示：
//
//
// 1 <= nums.length <= 105
// 1 <= nums[i] <= 104
//
// Related Topics 双指针
// 👍 19 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */

var maximumUniqueSubarray = function(nums) {
  const n = nums.length;
  if (n === 1) {
    return nums[0]
  }
  let result = 0;
  let left = 0;
  const map = new Map();
  const sum = new Int32Array(n);
  sum[0] = nums[0];
  map.set(nums[0], 0);
  for (let i = 1; i < n; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], i);
    } else if (map.get(nums[i]) >= left) {
      result = Math.max(result, sum[i - 1] - sum[left] + nums[left]);
      left = map.get(nums[i]) + 1;
    }
    map.set(nums[i], i);
    sum[i] = sum[i - 1] + nums[i];
  }
  return Math.max(result, sum[n - 1] - sum[left] + nums[left]);
};
// leetcode submit region end(Prohibit modification and deletion)
