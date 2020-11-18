// 给定一个整数数组 nums，其中恰好有两个元素只出现一次，其余所有元素均出现两次。 找出只出现一次的那两个元素。
//
// 示例 :
//
// 输入: [1,2,1,3,2,5]
// 输出: [3,5]
//
// 注意：
//
//
// 结果输出的顺序并不重要，对于上面的例子， [5, 3] 也是正确答案。
// 你的算法应该具有线性时间复杂度。你能否仅使用常数空间复杂度来实现？
//
// Related Topics 位运算
// 👍 300 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  let xor = 0;
  for (const i of nums) {
    xor ^= i;
  }
  let index = 1;
  while ((index & xor) === 0) { index = index << 1; }
  let result1 = 0;
  let result2 = 0;
  for (const i of nums) {
    if ((i & index) === 0) {
      result1 ^= i;
    } else {
      result2 ^= i;
    }
  }
  return [result1, result2];
};
// leetcode submit region end(Prohibit modification and deletion)
