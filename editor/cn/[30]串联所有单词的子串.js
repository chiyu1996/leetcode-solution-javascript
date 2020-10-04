//给定一个字符串 s 和一些长度相同的单词 words。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。 
//
// 注意子串要与 words 中的单词完全匹配，中间不能有其他字符，但不需要考虑 words 中单词串联的顺序。 
//
// 
//
// 示例 1： 
//
// 输入：
//  s = "barfoothefoobarman",
//  words = ["foo","bar"]
//输出：[0,9]
//解释：
//从索引 0 和 9 开始的子串分别是 "barfoo" 和 "foobar" 。
//输出的顺序不重要, [9,0] 也是有效答案。
// 
//
// 示例 2： 
//
// 输入：
//  s = "wordgoodgoodgoodbestword",
//  words = ["word","good","best","word"]
//输出：[]
// 
// Related Topics 哈希表 双指针 字符串 
// 👍 356 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    if (words.length === 0 || s.length === 0) return [];
    const Counter = (array) => {
        let map = new Map();
        for (let i = 0; array && i < array.length; i++) {
            let tmp = map.get(array[i]);
            if (tmp !== undefined) {
                map.set(array[i], tmp + 1);
            } else {
                map.set(array[i], 1);
            }
        }
        return map;
    };
    let word_num = words.length;
    let one_word = words[0].length;
    let n = s.length;
    if (n < one_word) return [];
    let ans = [];
    words = Counter(words);
    for (let i = 0; i < one_word; i++) {
        let left = i;
        let right = i;
        let cur_map = Counter();
        let cnt = 0;
        while (right + one_word <= n) {
            let w = s.slice(right, right + one_word);
            right += one_word;
            if (words.get(w)) {
                cnt += 1;
                if (cur_map.get(w)) {
                    cur_map.set(w, cur_map.get(w) + 1);
                } else {
                    cur_map.set(w, 1);
                }
                while (cur_map.get(w) > words.get(w)) {
                    let left_w = s.slice(left, left + one_word);
                    left += one_word;
                    if (cur_map.get(left_w)) {
                        cur_map.set(left_w, cur_map.get(left_w) - 1);
                    } else {
                        cur_map.set(left_w, 0);
                    }
                    cnt -= 1;
                }
                if (cnt === word_num) ans.push(left);
            } else {
                cnt = 0;
                left = right;
                cur_map.clear();
            }
        }
    }
    return ans;
};
//leetcode submit region end(Prohibit modification and deletion)
