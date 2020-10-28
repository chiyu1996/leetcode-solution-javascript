//编写一个函数来查找字符串数组中的最长公共前缀。 
//
// 如果不存在公共前缀，返回空字符串 ""。 
//
// 示例 1: 
//
// 输入: ["flower","flow","flight"]
//输出: "fl"
// 
//
// 示例 2: 
//
// 输入: ["dog","racecar","car"]
//输出: ""
//解释: 输入不存在公共前缀。
// 
//
// 说明: 
//
// 所有输入只包含小写字母 a-z 。 
// Related Topics 字符串 
// 👍 1295 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

    let n = strs.length;
    if (n === 0) return "";
    let m = strs[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 1; j < n; j++) {
            let c = strs[0].charAt(i);
            if (i === strs[j].length || strs[j].charAt(i) !== c) {
                return strs[0].substring(0, i);
            }
        }
    }
    return strs[0];
};
//分治
// var longestCommonPrefix = function (strs) {
//
//     const myLongestCommonPrefix = (strs, start, end) => {
//         if (start === end) {
//             return strs[start];
//         } else {
//             let mid = (start + end) >> 1;
//             let left = myLongestCommonPrefix(strs, start, mid);
//             let right = myLongestCommonPrefix(strs, mid + 1, end);
//             return commonPrefix(left, right);
//         }
//     };
//     const commonPrefix = (leftStr, rightStr) => {
//         let minLength = Math.min(leftStr.length, rightStr.length);
//         for (let i = 0; i < minLength; i++) {
//             if (leftStr[i] !== rightStr[i]) {
//                 return leftStr.substr(0, i);
//             }
//         }
//         return leftStr.substr(0, minLength);
//     };
//
//     if (strs === null || strs.length === 0) {
//         return "";
//     } else {
//         return myLongestCommonPrefix(strs, 0, strs.length - 1);
//     }
// };

//leetcode submit region end(Prohibit modification and deletion)
