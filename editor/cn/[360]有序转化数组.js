// 给你一个已经 排好序 的整数数组 nums 和整数 a、b、c。对于数组中的每一个数 x，计算函数值 f(x) = ax2 + bx + c，请将函数值产生
// 的数组返回。
//
// 要注意，返回的这个数组必须按照 升序排列，并且我们所期望的解法时间复杂度为 O(n)。
//
// 示例 1：
//
// 输入: nums = [-4,-2,2,4], a = 1, b = 3, c = 5
// 输出: [3,9,15,33]
//
//
// 示例 2：
//
// 输入: nums = [-4,-2,2,4], a = -1, b = 3, c = 5
// 输出: [-23,-5,1,7]
//
// Related Topics 数学 双指针
// 👍 34 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var sortTransformedArray = function(nums, a, b, c) {
  const ans = [];
  const n = nums.length;
  let left = 0; let right = n - 1;
  const getVal = (x) => {
    return x * x * a + b * x + c;
  }
  for (let i = 0; i < n; i++) {
    const val_left = getVal(nums[left]);
    const val_right = getVal(nums[right]);
    if (a < 0) {
      if (val_left < val_right) {
        ans[i] = val_left;
        left++;
      } else {
        ans[i] = val_right;
        right--;
      }
    } else {
      if (val_left < val_right) {
        ans[n - i - 1] = val_right;
        right--;
      } else {
        ans[n - i - 1] = val_left;
        left++;
      }
    }
  }
  return ans;
};
// leetcode submit region end(Prohibit modification and deletion)
