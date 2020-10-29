//给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。 
//
// 示例: 
//
// 输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
//输出:
//[
//  ["ate","eat","tea"],
//  ["nat","tan"],
//  ["bat"]
//] 
//
// 说明： 
//
// 
// 所有输入均为小写字母。 
// 不考虑答案输出的顺序。 
// 
// Related Topics 哈希表 字符串 
// 👍 480 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let n = strs.length;
    let ans = new Map();
    const prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103];
    let mod = 1e9 + 7;
    for (let i = 0; i < n; i++) {
        let hash = 1;
        for (let j = 0; j < strs[i].length; j++) {
            let num = strs[i].charCodeAt(j) - 97;
            hash = ((hash % mod) * (prime[num] % mod)) % mod;
        }
        if (!ans.get(hash)) ans.set(hash, []);
        ans.get(hash).push(strs[i]);
    }
    return [...ans.values()];
};
//leetcode submit region end(Prohibit modification and deletion)
