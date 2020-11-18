// 在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组，求出这个数组中的逆序对的总数。
//
//
//
// 示例 1:
//
// 输入: [7,5,6,4]
// 输出: 5
//
//
//
// 限制：
//
// 0 <= 数组长度 <= 50000
// 👍 245 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
  const mergeSort = (array, left, right) => {
    if (left >= right) return 0;
    const mid = parseInt(left + ((right - left) >> 1));
    let count = mergeSort(array, left, mid) + mergeSort(array, mid + 1, right);
    const help = [];
    let i = 0;
    let p1 = left;
    let p2 = mid + 1;
    while (p1 <= mid && p2 <= right) {
      if (array[p1] <= array[p2]) {
        help[i++] = array[p1++];
        count += (p2 - (mid + 1));
      } else {
        help[i++] = array[p2++];
      }
    }
    while (p1 <= mid) {
      count += (p2 - (mid + 1));
      help[i++] = array[p1++];
    }
    while (p2 <= right) {
      help[i++] = array[p2++];
    }
    for (let i = 0; i < help.length; i++) {
      array[left + i] = help[i];
    }
    return count;
  };
  return mergeSort(nums, 0, nums.length - 1);
};
// leetcode submit region end(Prohibit modification and deletion)
