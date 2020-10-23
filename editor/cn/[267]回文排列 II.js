//给定一个字符串 s ，返回其通过重新排列组合后所有可能的回文字符串，并去除重复的组合。 
//
// 如不能形成任何回文排列时，则返回一个空列表。 
//
// 示例 1： 
//
// 输入: "aabb"
//输出: ["abba", "baab"] 
//
// 示例 2： 
//
// 输入: "abc"
//输出: [] 
// Related Topics 回溯算法 
// 👍 43 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {string[]}
 */

var generatePalindromes = function (s) {
    let count = new Array(128).fill(0);
    let set = new Set();
    const canPermutePalindrome = (s) => {
        let n = s.length;
        for (let i = 0; i < n; i++) {
            let char_index = s.charCodeAt(i);
            count[char_index] += 1;
        }
        let f = 0;
        for (let i = 0; i < 128; i++) {
            if (count[i] % 2) {
                if (f) {
                    return false;
                }
                {
                    f = 1;
                }
            }
        }
        return true;
    };
    if (!canPermutePalindrome(s)) {
        return [];
    }
    let mid = "";
    let k = 0;
    let dic = [];
    for (let i = 0; i < 128; i++) {
        if (count[i] % 2) {
            mid = String.fromCharCode(i);
        }
        for (let j = 0; j < (count[i] >> 1); j++) {
            dic[k++] = String.fromCharCode(i);
        }
    }
    const dfs = (length) => {
        if (length === dic.length) {
            let reverse = [...dic].reverse();
            set.add([...dic, mid, ...reverse].join(""));
        } else {
            for (let i = length; i < dic.length; i++) {
                if (dic[length] !== dic[i] || length === i) {
                    [dic[i], dic[length]] = [dic[length], dic[i]];
                    dfs(length + 1);
                    [dic[i], dic[length]] = [dic[length], dic[i]];
                }
            }
        }
    };
    dfs(0);
    return [...set];
};

//leetcode submit region end(Prohibit modification and deletion)
