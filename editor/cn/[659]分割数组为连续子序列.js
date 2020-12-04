// 给你一个按升序排序的整数数组 num（可能包含重复数字），请你将它们分割成一个或多个子序列，其中每个子序列都由连续整数组成且长度至少为 3 。
//
// 如果可以完成上述分割，则返回 true ；否则，返回 false 。
//
//
//
// 示例 1：
//
// 输入: [1,2,3,3,4,5]
// 输出: True
// 解释:
// 你可以分割出这样两个连续子序列 :
// 1, 2, 3
// 3, 4, 5
//
//
//
//
// 示例 2：
//
// 输入: [1,2,3,3,4,4,5,5]
// 输出: True
// 解释:
// 你可以分割出这样两个连续子序列 :
// 1, 2, 3, 4, 5
// 3, 4, 5
//
//
//
//
// 示例 3：
//
// 输入: [1,2,3,4,4,5]
// 输出: False
//
//
//
//
// 提示：
//
//
// 输入的数组长度范围为 [1, 10000]
//
//
//
// Related Topics 堆 贪心算法
// 👍 205 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
  const count = new Map();
  const last = new Map();
  for (const num of nums) {
    const cnt = (count.get(num) || 0) + 1;
    count.set(num, cnt);
  }
  for (const num of nums) {
    const cnt = count.get(num) || 0;
    if (cnt > 0) {
      const pre = last.get(num - 1) || 0;
      if (pre > 0) {
        count.set(num, cnt - 1);
        last.set(num - 1, pre - 1);
        last.set(num, (last.get(num) || 0) + 1);
      } else {
        const next1 = count.get(num + 1) || 0;
        const next2 = count.get(num + 2) || 0;
        if (next1 > 0 && next2 > 0) {
          count.set(num, cnt - 1);
          count.set(num + 1, next1 - 1);
          count.set(num + 2, next2 - 1);
          last.set(num + 2, (last.get(num + 2) || 0) + 1);
        } else {
          return false;
        }
      }
    }
  }
  return true;
};
// leetcode submit region end(Prohibit modification and deletion)
