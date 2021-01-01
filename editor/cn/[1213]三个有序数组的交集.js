// 给出三个均为 严格递增排列 的整数数组 arr1，arr2 和 arr3。
//
// 返回一个由 仅 在这三个数组中 同时出现 的整数所构成的有序数组。
//
//
//
// 示例：
//
// 输入: arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]
// 输出: [1,5]
// 解释: 只有 1 和 5 同时在这三个数组中出现.
//
//
//
//
// 提示：
//
//
// 1 <= arr1.length, arr2.length, arr3.length <= 1000
// 1 <= arr1[i], arr2[i], arr3[i] <= 2000
//
// Related Topics 哈希表 双指针
// 👍 21 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
var arraysIntersection = function(arr1, arr2, arr3) {
  const intersection = (arr1, arr2) => {
    let i = 0;
    let j = 0;
    let index = 0;
    const length1 = arr1.length;
    const length2 = arr2.length;
    while (i < length1 && j < length2) {
      if (arr1[i] < arr2[j]) {
        i++;
      } else if (arr1[i] > arr2[j]) {
        j++;
      } else {
        arr1[index++] = arr1[i];
        i++;
        j++;
      }
    }
    return arr1.slice(0, index);
  }
  return intersection(intersection(arr1, arr2), arr3);
};
// leetcode submit region end(Prohibit modification and deletion)
