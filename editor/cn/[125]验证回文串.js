//给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。 
//
// 说明：本题中，我们将空字符串定义为有效的回文串。 
//
// 示例 1: 
//
// 输入: "A man, a plan, a canal: Panama"
//输出: true
// 
//
// 示例 2: 
//
// 输入: "race a car"
//输出: false
// 
// Related Topics 双指针 字符串 
// 👍 282 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let n = s.length;
    let left = 0, right = n - 1;
    const check = (char) => {
        return (char >= "a" && char <= "z") || (char >= "A" && char <= "Z") || (char >= "0" && char <= "9");
    };
    while (left < right) {
        while (left < right && !check(s[left])) {
            ++left;
        }
        while (left < right && !check(s[right])) {
            --right;
        }
        if (left < right) {
            if (s[left].toLocaleLowerCase() !== s[right].toLocaleLowerCase()) {
                return false;
            }
            ++left;
            --right;
        }
    }
    return true;
};
//leetcode submit region end(Prohibit modification and deletion)
