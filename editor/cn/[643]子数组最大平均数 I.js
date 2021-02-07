// 给定 n 个整数，找出平均数最大且长度为 k 的连续子数组，并输出该最大平均数。
//
//
//
// 示例：
//
//
// 输入：[1,12,-5,-6,50,3], k = 4
// 输出：12.75
// 解释：最大平均数 (12-5-6+50)/4 = 51/4 = 12.75
//
//
//
//
// 提示：
//
//
// 1 <= k <= n <= 30,000。
// 所给数据范围 [-10,000，10,000]。
//
// Related Topics 数组
// 👍 166 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let pre = 0;
  const n = nums.length;
  for (let i = 0; i < k; i++) {
    pre += nums[i];
  }
  let result = pre / k;
  for (let i = k; i < n; i++) {
    pre = pre + nums[i] - nums[i - k];
    result = Math.max(result, pre / k);
  }
  return result;
};
// leetcode submit region end(Prohibit modification and deletion)
