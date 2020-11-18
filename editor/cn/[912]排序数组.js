// 给你一个整数数组 nums，请你将该数组升序排列。
//
//
//
//
//
//
// 示例 1：
//
// 输入：nums = [5,2,3,1]
// 输出：[1,2,3,5]
//
//
// 示例 2：
//
// 输入：nums = [5,1,1,2,0,0]
// 输出：[0,0,1,1,2,5]
//
//
//
//
// 提示：
//
//
// 1 <= nums.length <= 50000
// -50000 <= nums[i] <= 50000
//
// 👍 171 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  const quickSort = (nums, left, right) => {
    if (left >= right) return;
    const p = pagination(nums, left, right);
    quickSort(nums, left, p);
    quickSort(nums, p + 1, right);
  };
  const pagination = (nums, left, right) => {
    const tmp = nums[left];
    while (left < right) {
      while (left < right && tmp <= nums[right]) right--;
      nums[left] = nums[right];
      while (left < right && tmp >= nums[left]) left++;
      nums[right] = nums[left];
    }
    nums[left] = tmp;
    return left;
  };
  quickSort(nums, 0, nums.length - 1);
  return nums;
};
// leetcode submit region end(Prohibit modification and deletion)
