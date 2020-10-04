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
var longestCommonPrefix = function(strs) {

    if(strs.length===0)return''
    let prefix=strs[0]
    for(let i=1;i<strs.length;i++){
        while (strs[i].indexOf(prefix)!=0){
            prefix=prefix.substring(0,prefix.length-1)
            if(prefix===undefined) return ""
        }
    }
    return prefix;

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
