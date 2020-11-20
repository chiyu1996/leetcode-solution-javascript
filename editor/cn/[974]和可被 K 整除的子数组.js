// 给定一个整数数组 A，返回其中元素之和可被 K 整除的（连续、非空）子数组的数目。
//
//
//
// 示例：
//
// 输入：A = [4,5,0,-2,-3,1], K = 5
// 输出：7
// 解释：
// 有 7 个子数组满足其元素之和可被 K = 5 整除：
// [4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]
//
//
//
//
// 提示：
//
//
// 1 <= A.length <= 30000
// -10000 <= A[i] <= 10000
// 2 <= K <= 10000
//
// Related Topics 数组 哈希表
// 👍 206 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function(A, K) {
  let ans = 0; let sum = 0;
  const map = new Map();
  map[0] = 1;
  A.forEach(item => {
    sum += item;
    const mod = (sum % K + K) % K;
    if (map[mod] !== undefined) {
      ans += map[mod];
    } else {
      map[mod] = 0;
    }
    ++map[mod];
  });
  return ans;
};
// leetcode submit region end(Prohibit modification and deletion)
