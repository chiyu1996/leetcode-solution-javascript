// 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c +
// d 的值与 target 相等？找出所有满足条件且不重复的四元组。
//
// 注意：
//
// 答案中不可以包含重复的四元组。
//
// 示例：
//
// 给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。
//
// 满足要求的四元组集合为：
// [
//  [-1,  0, 0, 1],
//  [-2, -1, 1, 2],
//  [-2,  0, 0, 2]
// ]
//
// Related Topics 数组 哈希表 双指针
// 👍 579 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  const array = [];
  const len = nums.length;
  if (len < 4) return array;
  nums.sort((a, b) => a - b);
  for (let i = 0; i <= len - 4; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j <= len - 3; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      let L = j + 1;
      let R = len - 1;
      while (L < R) {
        const sum = nums[i] + nums[j] + nums[L] + nums[R];
        if (sum > target) {
          R--;
        } else if (sum < target) {
          L++;
        } else if (sum === target) {
          array.push([nums[i], nums[j], nums[L], nums[R]]);
          while (L < R && nums[L] === nums[L + 1]) L++;
          while (L < R && nums[R] === nums[R - 1]) R--;
          L++;
          R--;
        }
      }
    }
  }
  return array;
};
// leetcode submit region end(Prohibit modification and deletion)
