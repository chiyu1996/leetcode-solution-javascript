//输入一个字符串，打印出该字符串中字符的所有排列。 
//
// 
//
// 你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。 
//
// 
//
// 示例: 
//
// 输入：s = "abc"
//输出：["abc","acb","bac","bca","cab","cba"]
// 
//
// 
//
// 限制： 
//
// 1 <= s 的长度 <= 8 
// Related Topics 回溯算法 
// 👍 111 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
    const PermutationHelper = (str) => {
        let result = [];
        if (str.length === 1) result.push(str);
        else {
            for (let i = 0; i < str.length; i++) {
                if (i === 0 || str[i] !== str[0]) {
                    let array = Array.from(str);
                    let temp = array[i];
                    array[i] = array[0];
                    array[0] = temp;

                    let newResult = PermutationHelper(array.slice(1).join(""));
                    for (let j = 0; j < newResult.length; j++) {
                        result.push(array[0] + newResult[j]);
                    }
                    temp = array[0];
                    array[0] = array[i];
                    array[i] = temp;
                }
            }
        }
        return result;
    };
    s = s.split("").sort().join("");
    let result = PermutationHelper(s);
    let ans = new Set(result);
    return [...ans];
};

//leetcode submit region end(Prohibit modification and deletion)
