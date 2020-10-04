//编写一个函数，不用临时变量，直接交换numbers = [a, b]中a与b的值。 
// 示例： 
// 输入: numbers = [1,2]
//输出: [2,1]
// 
// 提示： 
// 
// numbers.length == 2 
// 
// Related Topics 位运算 数学 
// 👍 25 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} numbers
 * @return {number[]}
 */
var swapNumbers = function (numbers) {
    [numbers[0], numbers[1]] = [numbers[1], numbers[0]];
    return numbers;

};
//leetcode submit region end(Prohibit modification and deletion)
