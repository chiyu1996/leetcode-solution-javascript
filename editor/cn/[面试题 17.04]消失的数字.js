// 数组nums包含从0到n的所有整数，但其中缺了一个。请编写代码找出那个缺失的整数。你有办法在O(n)时间内完成吗？
//
// 注意：本题相对书上原题稍作改动
//
// 示例 1：
//
// 输入：[3,0,1]
// 输出：2
//
//
//
// 示例 2：
//
// 输入：[9,6,4,2,3,5,7,0,1]
// 输出：8
//
// Related Topics 位运算 数组 数学
// 👍 30 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const sum = nums.reduce((prev, val) => prev + val);
  const n = nums.length;
  return n * (n + 1) / 2 - sum;
};
// leetcode submit region end(Prohibit modification and deletion)
