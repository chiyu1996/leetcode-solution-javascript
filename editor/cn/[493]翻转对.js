// 给定一个数组 nums ，如果 i < j 且 nums[i] > 2*nums[j] 我们就将 (i, j) 称作一个重要翻转对。
//
// 你需要返回给定数组中的重要翻转对的数量。
//
// 示例 1:
//
//
// 输入: [1,3,2,3,1]
// 输出: 2
//
//
// 示例 2:
//
//
// 输入: [2,4,3,5,1]
// 输出: 3
//
//
// 注意:
//
//
// 给定数组的长度不会超过50000。
// 输入数组中的所有数字都在32位整数的表示范围内。
//
// Related Topics 排序 树状数组 线段树 二分查找 分治算法
// 👍 185 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
  if (nums.length === 0) {
    return 0;
  }
  const s = 0;
  const merge_sort = (left, right) => {
    if (left === right) {
      return 0;
    } else {
      const mid = (left + right) >> 1;
      const len1 = merge_sort(left, mid);
      const len2 = merge_sort(mid + 1, right);
      let total = len1 + len2;
      let i = left;
      let r = mid + 1;
      while (i <= mid) {
        while (r <= right && 2 * nums[r] < nums[i]) r++;
        total += (r - mid - 1);
        i++;
      }
      const sorted = [];
      let p1 = left; let p2 = mid + 1;
      let p = 0;
      while (p1 <= mid && p2 <= right) {
        sorted[p++] = nums[p1] < nums[p2] ? nums[p1++] : nums[p2++];
      }
      while (p1 <= mid) {
        sorted[p++] = nums[p1++];
      }
      while (p2 <= right) {
        sorted[p++] = nums[p2++]
      }
      for (let i = 0; i < sorted.length; i++) {
        nums[left + i] = sorted[i]
      }
      return total;
    }
  };
  return merge_sort(0, nums.length - 1);
};
// leetcode submit region end(Prohibit modification and deletion)
