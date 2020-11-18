// 有些数的素因子只有 3，5，7，请设计一个算法找出第 k 个数。注意，不是必须有这些素因子，而是必须不包含其他的素因子。例如，前几个数按顺序应该是 1，3，
// 5，7，9，15，21。
//
// 示例 1:
//
// 输入: k = 5
//
// 输出: 9
//
// Related Topics 堆 队列 数学
// 👍 36 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} k
 * @return {number}
 */
var getKthMagicNumber = function(k) {
  const magicNums = [1];
  let pow3 = 0; let pow5 = 0; let pow7 = 0;
  for (let i = 1; i <= k; i++) {
    const magicNum = Math.min(magicNums[pow3] * 3, magicNums[pow5] * 5, magicNums[pow7] * 7);
    magicNums[i] = magicNum;
    if (magicNum === magicNums[pow3] * 3) {
      pow3 += 1;
    }
    if (magicNum === magicNums[pow5] * 5) {
      pow5 += 1;
    }
    if (magicNum === magicNums[pow7] * 7) {
      pow7 += 1;
    }
  }
  return magicNums[k - 1]
};
// leetcode submit region end(Prohibit modification and deletion)
