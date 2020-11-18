// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现了三次。找出那个只出现了一次的元素。
//
// 说明：
//
// 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
//
// 示例 1:
//
// 输入: [2,2,3,2]
// 输出: 3
//
//
// 示例 2:
//
// 输入: [0,1,0,1,0,1,99]
// 输出: 99
// Related Topics 位运算
// 👍 439 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  if (nums.length === 0) return;
  const n = nums.length;
  const bitMap = new Array(32).fill(0);
  for (let i = 0; i < n; i++) {
    let bit = 1;
    for (let j = 31; j >= 0; j--) {
      if (nums[i] & bit) bitMap[j]++;
      bit = bit << 1;
    }
  }
  let ans = 0;
  for (let i = 0; i < 32; i++) {
    ans = ans << 1;
    ans += bitMap[i] % 3;
  }
  return ans;
};
// leetcode submit region end(Prohibit modification and deletion)
