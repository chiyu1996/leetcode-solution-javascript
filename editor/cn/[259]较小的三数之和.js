// 给定一个长度为 n 的整数数组和一个目标值 target，寻找能够使条件 nums[i] + nums[j] + nums[k] < target 成立的三
// 元组 i, j, k 个数（0 <= i < j < k < n）。
//
// 示例：
//
// 输入: nums = [-2,0,1,3], target = 2
// 输出: 2
// 解释: 因为一共有两个三元组满足累加和小于 2:
//     [-2,0,1]
//     [-2,0,3]
//
//
// 进阶：是否能在 O(n2) 的时间复杂度内解决？
// Related Topics 数组 双指针
// 👍 51 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function(nums, target) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let ans = 0;
  for (let i = 1; i < n; i++) {
    let left = 0; let right = n - 1;
    while (left < i && i < right) {
      const sum = nums[left] + nums[i] + nums[right];
      if (sum < target) {
        ans += right - i;
        left++;
      } else {
        right--;
      }
    }
  }
  return ans;
};
// leetcode submit region end(Prohibit modification and deletion)
