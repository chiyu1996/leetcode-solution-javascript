//请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。例如，字符串"+100"、"5e2"、"-123"、"3.1416"、"-1E-16"、"012
//3"都表示数值，但"12e"、"1a3.14"、"1.2.3"、"+-5"及"12e+5.4"都不是。 
//
// 
// Related Topics 数学 
// 👍 111 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
    return s.trim() ? !isNaN(Number(s)) : false;
};
//leetcode submit region end(Prohibit modification and deletion)
