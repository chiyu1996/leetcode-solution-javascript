// 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
//
// 说明：解集不能包含重复的子集。
//
// 示例:
//
// 输入: nums = [1,2,3]
// 输出:
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
// Related Topics 位运算 数组 回溯算法
// 👍 822 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let tmp = [];
  const ans = [];
  const n = nums.length;
  for (let i = 0; i < (1 << n); i++) {
    tmp = [];
    for (let j = 0; j < n; j++) {
      if ((i & (1 << j))) {
        tmp.push(nums[j]);
      }
    }
    ans.push(tmp);
  }
  return ans;
};
// leetcode submit region end(Prohibit modification and deletion)
