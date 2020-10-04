//给定范围 [m, n]，其中 0 <= m <= n <= 2147483647，返回此范围内所有数字的按位与（包含 m, n 两端点）。 
//
// 示例 1: 
//
// 输入: [5,7]
//输出: 4 
//
// 示例 2: 
//
// 输入: [0,1]
//输出: 0 
// Related Topics 位运算 
// 👍 233 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function (m, n) {
    let shift = 0;
    while (m < n) {
        m = m >> 1;
        n = n >> 1;
        shift += 1;
    }
    return m << shift;
};
//leetcode submit region end(Prohibit modification and deletion)
