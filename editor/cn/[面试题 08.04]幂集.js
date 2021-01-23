// 幂集。编写一种方法，返回某集合的所有子集。集合中不包含重复的元素。
//
// 说明：解集不能包含重复的子集。
//
// 示例:
//
//  输入： nums = [1,2,3]
// 输出：
// [
//  [3],
//  [1],
//  [2],
//  [1,2,3],
//  [1,3],
//  [2,3],
//  [1,2],
//  []
// ]
//
// Related Topics 位运算 数组 回溯算法
// 👍 44 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  nums = [...new Set(nums)];
  const n = nums.length;
  const total = 1 << n;
  const result = [];
  for (let i = 0; i < total; i++) {
    const temp = [];
    for (let j = 0; j < n; j++) {
      if (i & (1 << j)) {
        temp.push(nums[j]);
      }
    }
    result.push(temp);
  }
  return result;
};
// leetcode submit region end(Prohibit modification and deletion)
