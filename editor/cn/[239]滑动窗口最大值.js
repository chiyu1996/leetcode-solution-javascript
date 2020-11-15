// 给定一个数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
//
//
// 返回滑动窗口中的最大值。
//
//
//
// 进阶：
//
// 你能在线性时间复杂度内解决此题吗？
//
//
//
// 示例:
//
// 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
// 输出: [3,3,5,5,6,7]
// 解释:
//
//  滑动窗口的位置                最大值
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
// 1 [3  -1  -3] 5  3  6  7       3
// 1  3 [-1  -3  5] 3  6  7       5
// 1  3  -1 [-3  5  3] 6  7       5
// 1  3  -1  -3 [5  3  6] 7       6
// 1  3  -1  -3  5 [3  6  7]      7
//
//
//
// 提示：
//
//
// 1 <= nums.length <= 10^5
// -10^4 <= nums[i] <= 10^4
// 1 <= k <= nums.length
//
// Related Topics 堆 Sliding Window
// 👍 577 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  if (nums.length === 0) return [];
  const n = nums.length;
  const left = []; const right = [];
  left[0] = nums[0];
  right[n - 1] = nums[n - 1];
  for (let i = 1; i < n; i++) {
    if (i % k) {
      left[i] = Math.max(left[i - 1], nums[i]);
    } else {
      left[i] = nums[i];
    }
    const j = n - i - 1;
    if ((j + 1) % k) {
      right[j] = Math.max(right[j + 1], nums[j]);
    } else {
      right[j] = nums[j];
    }
  }
  const res = [];
  for (let i = 0; i < n - k + 1; i++) {
    res.push(Math.max(right[i], left[i + k - 1]));
  }
  return res;
};
// leetcode submit region end(Prohibit modification and deletion)
