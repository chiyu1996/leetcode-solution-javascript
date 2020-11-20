// 给定一个非空整数数组，找到使所有数组元素相等所需的最小移动数，其中每次移动可将选定的一个元素加1或减1。 您可以假设数组的长度最多为10000。
//
// 例如:
//
//
// 输入:
// [1,2,3]
//
// 输出:
// 2
//
// 说明：
// 只有两个动作是必要的（记得每一步仅可使其中一个元素加1或减1）：
//
// [1,2,3]  =>  [2,2,3]  =>  [2,2,2]
//
// Related Topics 数学
// 👍 101 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
  nums.sort((a, b) => a - b);
  let ans = 0;
  const mid = nums.length / 2 | 0;
  nums.forEach((item) => {
    ans += Math.abs(nums[mid] - item);
  });
  return ans;
};
// leetcode submit region end(Prohibit modification and deletion)
