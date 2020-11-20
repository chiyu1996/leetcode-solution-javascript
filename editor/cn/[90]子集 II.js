// 给定一个可能包含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
//
// 说明：解集不能包含重复的子集。
//
// 示例:
//
// 输入: [1,2,2]
// 输出:
// [
//  [2],
//  [1],
//  [1,2,2],
//  [2,2],
//  [1,2],
//  []
// ]
// Related Topics 数组 回溯算法
// 👍 345 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  let tmp = [];
  const ans = [];
  const n = nums.length;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < (1 << n); i++) {
    tmp = [];
    let flag = true;
    for (let j = 0; j < n && flag; j++) {
      if (i & (1 << j)) {
        if (j > 0 && nums[j - 1] === nums[j] && (i & (1 << (j - 1))) === 0) {
          flag = false;
          break;
        } else {
          tmp.push(nums[j]);
        }
      }
    }
    if (flag) {
      ans.push(tmp);
    }
  }
  return ans;
};
// leetcode submit region end(Prohibit modification and deletion)
