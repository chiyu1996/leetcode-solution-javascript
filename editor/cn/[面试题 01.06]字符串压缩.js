//字符串压缩。利用字符重复出现的次数，编写一种方法，实现基本的字符串压缩功能。比如，字符串aabcccccaaa会变为a2b1c5a3。若“压缩”后的字符串没
//有变短，则返回原先的字符串。你可以假设字符串中只包含大小写英文字母（a至z）。 
//
// 示例1: 
//
// 
// 输入："aabcccccaaa"
// 输出："a2b1c5a3"
// 
//
// 示例2: 
//
// 
// 输入："abbccd"
// 输出："abbccd"
// 解释："abbccd"压缩后为"a1b2c2d1"，比原字符串长度更长。
// 
//
// 提示： 
//
// 
// 字符串长度在[0, 50000]范围内。 
// 
// Related Topics 字符串 
// 👍 54 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} S
 * @return {string}
 */
var compressString = function (S) {
    let length = S.length;
    let trans = "";
    let multi = 1;
    let cur = S[0];
    for (let i = 1; i < length; ++i) {
        if (cur === S[i]) multi++;
        else {
            trans += cur + multi;
            cur = S[i];
            multi = 1;
        }
    }
    trans += cur + multi;
    if (trans.length >= length) {
        return S;
    } else {
        return trans;
    }
};
//leetcode submit region end(Prohibit modification and deletion)
