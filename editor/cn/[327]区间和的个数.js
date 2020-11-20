// 给定一个整数数组 nums，返回区间和在 [lower, upper] 之间的个数，包含 lower 和 upper。
// 区间和 S(i, j) 表示在 nums 中，位置从 i 到 j 的元素之和，包含 i 和 j (i ≤ j)。
//
// 说明:
// 最直观的算法复杂度是 O(n2) ，请在此基础上优化你的算法。
//
// 示例:
//
// 输入: nums = [-2,5,-1], lower = -2, upper = 2,
// 输出: 3
// 解释: 3个区间分别是: [0,0], [2,2], [0,2]，它们表示的和分别为: -2, -1, 2。
//
// Related Topics 排序 树状数组 线段树 二分查找 分治算法
// 👍 193 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */

var countRangeSum = function(nums, lower, upper) {
  const s = 0;
  const sum = [0];
  nums.reduce((prev, val) => {
    sum.push(prev + val);
    return prev + val;
  }, 0);
  const merge_sort = (lower, upper, left, right) => {
    if (left === right) {
      return 0;
    } else {
      const mid = (left + right) >> 1;
      const len1 = merge_sort(lower, upper, left, mid);
      const len2 = merge_sort(lower, upper, mid + 1, right);
      let total = len1 + len2;
      let i = left;
      let l = mid + 1;
      let r = mid + 1;
      while (i <= mid) {
        while (l <= right && sum[l] - sum[i] < lower) l++;
        while (r <= right && sum[r] - sum[i] <= upper) r++;
        total += (r - l);
        i++;
      }
      const sorted = [];
      let p1 = left; let p2 = mid + 1;
      let p = 0;
      while (p1 <= mid && p2 <= right) {
        sorted[p++] = sum[p1] < sum[p2] ? sum[p1++] : sum[p2++];
      }
      while (p1 <= mid) {
        sorted[p++] = sum[p1++];
      }
      while (p2 <= right) {
        sorted[p++] = sum[p2++]
      }
      for (let i = 0; i < sorted.length; i++) {
        sum[left + i] = sorted[i]
      }
      return total;
    }
  };
  return merge_sort(lower, upper, 0, sum.length - 1);
};
// leetcode submit region end(Prohibit modification and deletion)
