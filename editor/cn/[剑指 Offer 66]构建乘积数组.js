// 给定一个数组 A[0,1,…,n-1]，请构建一个数组 B[0,1,…,n-1]，其中 B 中的元素 B[i]=A[0]×A[1]×…×A[i-1]×A[i
// +1]×…×A[n-1]。不能使用除法。
//
//
//
// 示例:
//
// 输入: [1,2,3,4,5]
// 输出: [120,60,40,30,24]
//
//
//
// 提示：
//
//
// 所有元素乘积之和不会溢出 32 位整数
// a.length <= 100000
//
// 👍 54 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function(a) {
  if (!a.length) return [];
  const len = a.length;
  let left = 1; let right = 1;
  const dp = new Array(len).fill(1);
  for (let i = 0; i < len; i++) {
    dp[i] *= left;
    left *= a[i];
    dp[len - i - 1] *= right;
    right *= a[len - i - 1];
  }
  return dp;
};
// leetcode submit region end(Prohibit modification and deletion)
