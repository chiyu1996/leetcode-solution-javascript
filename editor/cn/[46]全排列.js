// 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
//
// 示例:
//
// 输入: [1,2,3]
// 输出:
// [
//  [1,2,3],
//  [1,3,2],
//  [2,1,3],
//  [2,3,1],
//  [3,1,2],
//  [3,2,1]
// ]
// Related Topics 回溯算法
// 👍 930 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const res = [];

  function binary(start, array, length) {
    if (start === length) {
      res.push([...array]);
      return;
    }
    for (let j = start; j < length; j++) {
      array.splice(start, 1, ...array.splice(j, 1, array[start]));
      binary(start + 1, array, length);
      array.splice(start, 1, ...array.splice(j, 1, array[start]));
    }
  }

  binary(0, nums, nums.length);
  return res;
};
// leetcode submit region end(Prohibit modification and deletion)
