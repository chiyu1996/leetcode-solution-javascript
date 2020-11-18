// 给你一个整数数组 A，只有可以将其划分为三个和相等的非空部分时才返回 true，否则返回 false。
//
// 形式上，如果可以找出索引 i+1 < j 且满足 A[0] + A[1] + ... + A[i] == A[i+1] + A[i+2] + ... +
// A[j-1] == A[j] + A[j-1] + ... + A[A.length - 1] 就可以将数组三等分。
//
//
//
// 示例 1：
//
// 输入：[0,2,1,-6,6,-7,9,1,2,0,1]
// 输出：true
// 解释：0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1
//
//
// 示例 2：
//
// 输入：[0,2,1,-6,6,7,9,-1,2,0,1]
// 输出：false
//
//
// 示例 3：
//
// 输入：[3,3,6,5,-2,2,5,1,-9,4]
// 输出：true
// 解释：3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4
//
//
//
//
// 提示：
//
//
// 3 <= A.length <= 50000
// -10^4 <= A[i] <= 10^4
//
// Related Topics 数组
// 👍 121 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
  const sum = A.reduce((prev, cur) => {
    return prev + cur;
  }, 0);
  if (sum % 3 !== 0) {
    return false;
  }
  let cur = 0;
  let count = 0;
  for (const item of A) {
    cur += item;
    if (cur * 3 === sum) {
      count++;
      cur = 0;
    }
    if (count === 3) {
      return true;
    }
  }
  return false;
};
// leetcode submit region end(Prohibit modification and deletion)
