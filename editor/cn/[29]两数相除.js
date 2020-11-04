//给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。 
//
// 返回被除数 dividend 除以除数 divisor 得到的商。 
//
// 整数除法的结果应当截去（truncate）其小数部分，例如：truncate(8.345) = 8 以及 truncate(-2.7335) = -2 
//
// 
//
// 示例 1: 
//
// 输入: dividend = 10, divisor = 3
//输出: 3
//解释: 10/3 = truncate(3.33333..) = truncate(3) = 3 
//
// 示例 2: 
//
// 输入: dividend = 7, divisor = -3
//输出: -2
//解释: 7/-3 = truncate(-2.33333..) = -2 
//
// 
//
// 提示： 
//
// 
// 被除数和除数均为 32 位有符号整数。 
// 除数不为 0。 
// 假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−231, 231 − 1]。本题中，如果除法结果溢出，则返回 231 − 1。 
// 
// Related Topics 数学 二分查找 
// 👍 450 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    let p = 1;
    let i = 0;
    let r = 0;
    dividend > 0 ? dividend = -dividend : p = -1;
    divisor > 0 ? divisor = -divisor : p = p > 0 ? -1 : 1;
    while (dividend) {
        while (i <= 31 && divisor >= (-1 << (31 - i)) && (divisor << i) >= dividend) {
            i++;
        }
        if (i === 0) {
            break;
        }
        i--;
        dividend = dividend - (divisor << i);
        r += 1 << i;
        i = 0;
    }
    if (p > 0) {
        return r <= (1 << 31) ? 0x7FFFFFFF : r;
    } else {
        return r <= (1 << 31) ? 1 << 31 : -r;
    }
};

//leetcode submit region end(Prohibit modification and deletion)
