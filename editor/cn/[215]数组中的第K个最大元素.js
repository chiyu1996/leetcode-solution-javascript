// 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
//
// 示例 1:
//
// 输入: [3,2,1,5,6,4] 和 k = 2
// 输出: 5
//
//
// 示例 2:
//
// 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
// 输出: 4
//
// 说明:
//
// 你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。
// Related Topics 堆 分治算法
// 👍 728 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  const quickSelect = (nums, l, r, index) => {
    const random = Math.floor(Math.random() * (r - l + 1)) + l; // 随机选取一个index
    swap(nums, random, r);
    const p = pagination(nums, l, r);
    if (p === index) {
      return nums[p];
    } else {
      return p < index ? quickSelect(nums, p + 1, r, index) : quickSelect(nums, l, p - 1, index);
    }
  };
  const pagination = (nums, l, r) => {
    const v = nums[l];
    while (l < r) {
      while (l < r && nums[r] >= v) r--;
      nums[l] = nums[r];
      while (l < r && nums[l] <= v) l++;
      nums[r] = nums[l];
    }
    nums[l] = v;
    return l;
  };
  const swap = (nums, p, q) => {
    const temp = nums[p];
    nums[p] = nums[q];
    nums[q] = temp;
  };
  const n = nums.length;
  return quickSelect(nums, 0, n - 1, n - k);
};

// leetcode submit region end(Prohibit modification and deletion)
