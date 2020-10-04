//给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。 
//
// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。 
//
// 
//
// 示例: 
//
// 输入："23"
//输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
// 
//
// 说明: 
//尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。 
// Related Topics 字符串 回溯算法 
// 👍 941 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const map = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    };
    const res = [];
    for (let num of digits) {
        let w = map[num];
        if (res.length > 0) {
            let tmp = [];
            for (let i = 0; i < res.length; i++) {
                let w1 = w.length;
                for (let j = 1; j < w1; j++) {
                    tmp.push(res[i] + w[j]);
                }
                res[i] += w[0];

            }
            res.push(...tmp);
        } else {
            res.push(...w);
        }

    }
    return res;
};
//leetcode submit region end(Prohibit modification and deletion)
