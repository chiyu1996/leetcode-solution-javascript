//给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。 
//
// 示例 1: 
//
// 输入: 123
//输出: 321
// 
//
// 示例 2: 
//
// 输入: -123
//输出: -321
// 
//
// 示例 3: 
//
// 输入: 120
//输出: 21
// 
//
// 注意: 
//
// 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231, 231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。 
// Related Topics 数学 
// 👍 2228 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let rev = 0;
    let Max = (2 ** 31 - 1) / 10 | 0;
    let Min = -(2 ** 31) / 10 | 0;
    while (x !== 0) {
        let last = x % 10;
        x = x / 10 | 0;
        if (rev > Max || (rev === Max && last > 7)) return 0;
        if (rev < Min || (rev === Min && last < -8)) return 0;
        rev = rev * 10 + last;
    }
    return rev;
};
//leetcode submit region end(Prohibit modification and deletion)
