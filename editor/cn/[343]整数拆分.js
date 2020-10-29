//给定一个正整数 n，将其拆分为至少两个正整数的和，并使这些整数的乘积最大化。 返回你可以获得的最大乘积。 
//
// 示例 1: 
//
// 输入: 2
//输出: 1
//解释: 2 = 1 + 1, 1 × 1 = 1。 
//
// 示例 2: 
//
// 输入: 10
//输出: 36
//解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36。 
//
// 说明: 你可以假设 n 不小于 2 且不大于 58。 
// Related Topics 数学 动态规划 
// 👍 395 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
    if (n <= 3) return n - 1;
    let digits = n / 3 | 0;
    let last = n % 3;

    if (last === 0) {
        return 3 ** digits;
    } else if (last === 1) {
        return (3 ** (digits - 1)) * 4;
    } else {
        return (3 ** digits) * 2;
    }
};
//leetcode submit region end(Prohibit modification and deletion)
