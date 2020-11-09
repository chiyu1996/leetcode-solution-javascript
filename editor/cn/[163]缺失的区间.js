// 给定一个排序的整数数组 nums ，其中元素的范围在 闭区间 [lower, upper] 当中，返回不包含在数组中的缺失区间。
//
// 示例：
//
// 输入: nums = [0, 1, 3, 50, 75], lower = 0 和 upper = 99,
// 输出: ["2", "4->49", "51->74", "76->99"]
//
// Related Topics 数组
// 👍 29 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function(nums, lower, upper) {
  const ans = [];
  if (!nums.length) {
    if (lower === upper) {
      return [`${lower}`];
    } else {
      return [`${lower}->${upper}`];
    }
  }
  const n = nums.length;
  if (nums[0] - lower !== 0) {
    ans.push(nums[0] - lower === 1 ? `${lower}` : `${lower}->${nums[0] - 1}`);
  }
  for (let i = 1; i < n; i++) {
    if (nums[i] - nums[i - 1] > 2) {
      ans.push(`${nums[i - 1] + 1}->${nums[i] - 1}`);
    } else if (nums[i] - nums[i - 1] === 2) {
      ans.push(`${nums[i - 1] + 1}`);
    }
  }
  if (upper - nums[n - 1] !== 0) {
    ans.push(upper - nums[n - 1] === 1 ? `${upper}` : `${nums[n - 1] + 1}->${upper}`);
  }
  return ans;
};
// leetcode submit region end(Prohibit modification and deletion)
