// 从扑克牌中随机抽5张牌，判断是不是一个顺子，即这5张牌是不是连续的。2～10为数字本身，A为1，J为11，Q为12，K为13，而大、小王为 0 ，可以看成任
// 意数字。A 不能视为 14。
//
//
//
// 示例 1:
//
// 输入: [1,2,3,4,5]
// 输出: True
//
//
//
// 示例 2:
//
// 输入: [0,0,1,2,5]
// 输出: True
//
//
//
// 限制：
//
// 数组长度为 5
//
// 数组的数取值为 [0, 13] .
// 👍 67 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function(nums) {
  const repeat = new Set();
  let max = -1;
  let min = 15;
  for (let i = 0; i < 5; i++) {
    if (nums[i] === 0) continue;
    max = Math.max(max, nums[i]);
    min = Math.min(min, nums[i]);
    if (repeat.has(nums[i])) return false;
    repeat.add(nums[i]);
  }
  return max - min < 5;
};
// leetcode submit region end(Prohibit modification and deletion)
