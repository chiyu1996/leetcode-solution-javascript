//给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。 
//
// 示例 1: 
//
// 输入: n = 12
//输出: 3 
//解释: 12 = 4 + 4 + 4. 
//
// 示例 2: 
//
// 输入: n = 13
//输出: 2
//解释: 13 = 4 + 9. 
// Related Topics 广度优先搜索 数学 动态规划 
// 👍 646 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    const isSqrt = (num) => {
        let sqrt = Math.sqrt(num) | 0;
        return sqrt * sqrt === num;
    };
    while (n % 4 === 0)
        n >>= 2;
    if (n % 8 === 7) {
        return 4;
    }
    if (isSqrt(n))
        return 1;
    for (let i = 1; i < Math.sqrt(n); i++) {
        if (isSqrt(n - i * i)) {
            return 2;
        }
    }
    return 3;
};
//leetcode submit region end(Prohibit modification and deletion)
