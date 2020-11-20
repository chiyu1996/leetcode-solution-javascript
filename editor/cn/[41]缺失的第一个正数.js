// 给你一个未排序的整数数组，请你找出其中没有出现的最小的正整数。
//
//
//
// 示例 1:
//
// 输入: [1,2,0]
// 输出: 3
//
//
// 示例 2:
//
// 输入: [3,4,-1,1]
// 输出: 2
//
//
// 示例 3:
//
// 输入: [7,8,9,11,12]
// 输出: 1
//
//
//
//
// 提示：
//
// 你的算法的时间复杂度应为O(n)，并且只能使用常数级别的额外空间。
// Related Topics 数组
// 👍 811 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
      const tmp = nums[nums[i] - 1];
      nums[nums[i] - 1] = nums[i];
      nums[i] = tmp;
    }
  }
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }
  return n + 1;
};
// leetcode submit region end(Prohibit modification and deletion)
