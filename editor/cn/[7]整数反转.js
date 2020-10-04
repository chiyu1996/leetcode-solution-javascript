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
    let s = x + "";
    let sym = s[0];
    const len = s.length;
    let ans = 0;
    for (let i = len - 1; i > 0; i--) {
        ans = ans * 10 + Number(s[i]);
    }
    if (sym !== "-") {
        ans = ans * 10 + Number(sym);
    } else {
        ans *= -1;
    }
    if (ans > Math.pow(2, 31) || ans < -(Math.pow(2, 31) - 1)) {
        ans = 0;
    }
    return ans;
};
//leetcode submit region end(Prohibit modification and deletion)
