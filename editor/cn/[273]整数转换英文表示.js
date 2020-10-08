//将非负整数转换为其对应的英文表示。可以保证给定输入小于 231 - 1 。 
//
// 示例 1: 
//
// 输入: 123
//输出: "One Hundred Twenty Three"
// 
//
// 示例 2: 
//
// 输入: 12345
//输出: "Twelve Thousand Three Hundred Forty Five" 
//
// 示例 3: 
//
// 输入: 1234567
//输出: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven" 
//
// 示例 4: 
//
// 输入: 1234567891
//输出: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thou
//sand Eight Hundred Ninety One" 
// Related Topics 数学 字符串 
// 👍 103 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num) {
    if (num === 0) return "Zero";
    const LESS_THAN_TWENTY = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    const TWENTY = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    const THOUSAND = ["", "Thousand", "Million", "Billion"];
    const helper = (num) => {
        if (num === 0) return "";
        let str = "";
        if (num >= 100) {
            str += LESS_THAN_TWENTY[Math.floor(num / 100)] + " Hundred ";
            num %= 100;
        }
        if (num < 100 && num >= 20) {
            str += TWENTY[Math.floor(num / 10)] + " ";
            num %= 10;
        }
        if (num < 20 && num > 0) {
            str += LESS_THAN_TWENTY[num] + " ";
        }
        return str;
    };
    let ans = "";
    let index = 0;
    while (num > 0) {
        if (num % 1000 !== 0) {
            let str = helper(num % 1000);
            ans = str + THOUSAND[index] + " " + ans;
        }
        index++;
        num = Math.floor(num / 1000);
    }
    return ans.trim();
};
//leetcode submit region end(Prohibit modification and deletion)
