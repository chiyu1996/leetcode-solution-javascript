// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
//
//
//
// 上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 感谢 Mar
// cos 贡献此图。
//
// 示例:
//
// 输入: [0,1,0,2,1,0,1,3,2,1,2,1]
// 输出: 6
// Related Topics 栈 数组 双指针
// 👍 1716 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let ans = 0;
  const length = height.length;
  const left_max = new Array(length);
  const right_max = new Array(length);
  left_max[0] = height[0];
  for (let i = 1; i < length; i++) {
    left_max[i] = Math.max(height[i], left_max[i - 1]);
  }
  right_max[length - 1] = height[length - 1];
  for (let i = length - 2; i >= 0; i--) {
    right_max[i] = Math.max(height[i], right_max[i + 1]);
  }
  for (let i = 0; i < length; i++) {
    ans += Math.min(left_max[i], right_max[i]) - height[i];
  }
  return ans;
};
// 双指针版
var trap = function(height) {
  const n = height.length;
  let [left, right, left_max, right_max] = [0, n - 1, 0, 0];
  let result = 0;
  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= left_max) {
        left_max = height[left];
      } else {
        result += left_max - height[left];
      }
      +left++;
    } else {
      if (height[right] > right_max) {
        right_max = height[right];
      } else {
        result += (right_max - height[right]);
      }
      right--;
    }
  }
  return result;
};
// leetcode submit region end(Prohibit modification and deletion)
