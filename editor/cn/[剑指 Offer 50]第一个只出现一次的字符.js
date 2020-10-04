//在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。 
//
// 示例: 
//
// s = "abaccdeff"
//返回 "b"
//
//s = "" 
//返回 " "
// 
//
// 
//
// 限制： 
//
// 0 <= s 的长度 <= 50000 
// Related Topics 哈希表 
// 👍 50 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
    let array = new Array(50).fill(0);
    let sArray = Array.from(s);
    let aCode = "a".charCodeAt();
    let ACode = "A".charCodeAt();
    for (let c of sArray) {
        array[c.charCodeAt() - aCode]++;
    }
    for (let c of sArray) {
        if (array[c.charCodeAt() - aCode] === 1) {
            return c;
        }
    }
    return " ";
};
//leetcode submit region end(Prohibit modification and deletion)
