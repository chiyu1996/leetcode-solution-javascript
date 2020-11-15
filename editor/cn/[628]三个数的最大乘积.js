// 给定一个整型数组，在数组中找出由三个数组成的最大乘积，并输出这个乘积。
//
// 示例 1:
//
//
// 输入: [1,2,3]
// 输出: 6
//
//
// 示例 2:
//
//
// 输入: [1,2,3,4]
// 输出: 24
//
//
// 注意:
//
//
// 给定的整型数组长度范围是[3,104]，数组中所有的元素范围是[-1000, 1000]。
// 输入的数组中任意三个数的乘积不会超出32位有符号整数的范围。
//
// Related Topics 数组 数学
// 👍 190 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  let max1 = -Infinity; let max2 = -Infinity; let max3 = -Infinity;
  let min1 = Infinity; let min2 = Infinity;
  for (const num of nums) {
    if (num < min1) {
      min2 = min1;
      min1 = num;
    } else if (num < min2) {
      min2 = num;
    }
    if (num > max1) {
      max3 = max2;
      max2 = max1
      max1 = num;
    } else if (num > max2) {
      max3 = max2;
      max2 = num;
    } else if (num > max3) {
      max3 = num;
    }
  }
  return Math.max(min1 * min2 * max1, max1 * max2 * max3);
};
// leetcode submit region end(Prohibit modification and deletion)
