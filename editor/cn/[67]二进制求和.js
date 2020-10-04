//给你两个二进制字符串，返回它们的和（用二进制表示）。 
//
// 输入为 非空 字符串且只包含数字 1 和 0。 
//
// 
//
// 示例 1: 
//
// 输入: a = "11", b = "1"
//输出: "100" 
//
// 示例 2: 
//
// 输入: a = "1010", b = "1011"
//输出: "10101" 
//
// 
//
// 提示： 
//
// 
// 每个字符串仅由字符 '0' 或 '1' 组成。 
// 1 <= a.length, b.length <= 10^4 
// 字符串如果不是 "0" ，就都不含前导零。 
// 
// Related Topics 数学 字符串 
// 👍 489 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
//纯模拟
var addBinary = function(a, b) {
    if(a.length<b.length){
        [b,a]=[a,b]
    }
    let carry=0;
    a=a.split('').reverse()
    b=b.split('').reverse()
    let ans=[]
    let length=a.length;
    for(let i=0;i<length;i++){
        if (a[i] === '1')
            carry += 1
        if (b[i] === '1')
            carry += 1
        if (carry % 2 === 1){
            ans.push('1')
        }
        else{
            ans.push('0')
        }
        carry=carry >>> 1
    }
    if(carry)
        ans.push('1')
    return ans.reverse().join('')
};
//bigInt
// var addBinary = function(a, b) {
//     return (BigInt('0b' + a) + BigInt('0b' + b)).toString(2);
// };
//leetcode submit region end(Prohibit modification and deletion)
