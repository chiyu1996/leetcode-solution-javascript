// 给定一个直方图(也称柱状图)，假设有人从上面源源不断地倒水，最后直方图能存多少水量?直方图的宽度为 1。
//
//
//
// 上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的直方图，在这种情况下，可以接 6 个单位的水（蓝色部分表示水）。 感谢 Marco
// s 贡献此图。
//
// 示例:
//
// 输入: [0,1,0,2,1,0,1,3,2,1,2,1]
// 输出: 6
// Related Topics 栈 数组 双指针
// 👍 28 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let ans = 0;
  let left_max = 0;
  let right_max = 0;
  let left = 0; let right = height.length - 1;
  while (left < right) {
    if (height[left] < height[right]) {
      height[left] >= left_max ? (left_max = height[left]) : ans += (left_max - height[left]);
      left++;
    } else {
      height[right] >= right_max ? (right_max = height[right]) : ans += (right_max - height[right]);
      right--;
    }
  }
  return ans;
};
// leetcode submit region end(Prohibit modification and deletion)
