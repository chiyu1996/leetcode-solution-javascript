// 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和
// 。假定每组输入只存在唯一答案。
//
//
//
// 示例：
//
// 输入：nums = [-1,2,1,-4], target = 1
// 输出：2
// 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
//
//
//
//
// 提示：
//
//
// 3 <= nums.length <= 10^3
// -10^3 <= nums[i] <= 10^3
// -10^4 <= target <= 10^4
//
// Related Topics 数组 双指针
// 👍 588 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums = nums.sort((a, b) => a - b);
  const n = nums.length;
  let best = 1e6;

  function update(sum) {
    if (Math.abs(sum - target) < Math.abs(best - target)) { best = sum; }
  }

  for (let i = 0; i < n; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let l = i + 1;
    let r = n - 1;
    while (l < r) {
      sum = nums[i] + nums[l] + nums[r];
      if (sum === target) {
        return target;
      }

      update(sum);
      if (sum > target) {
        let r0 = r - 1;
        while (r0 > l && nums[r0] === nums[r]) r0--;
        r = r0;
      } else {
        let l0 = l + 1;
        while (l0 < r && nums[l0] === nums[l]) l0++;
        l = l0;
      }
    }
  }
  return best;
};
// leetcode submit region end(Prohibit modification and deletion)
