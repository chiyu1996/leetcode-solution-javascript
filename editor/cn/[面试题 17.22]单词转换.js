// 给定字典中的两个词，长度相等。写一个方法，把一个词转换成另一个词， 但是一次只能改变一个字符。每一步得到的新词都必须能在字典中找到。
//
// 编写一个程序，返回一个可能的转换序列。如有多个可能的转换序列，你可以返回任何一个。
//
// 示例 1:
//
// 输入:
// beginWord = "hit",
// endWord = "cog",
// wordList = ["hot","dot","dog","lot","log","cog"]
//
// 输出:
// ["hit","hot","dot","lot","log","cog"]
//
//
// 示例 2:
//
// 输入:
// beginWord = "hit"
// endWord = "cog"
// wordList = ["hot","dot","dog","lot","log"]
//
// 输出: []
//
// 解释: endWord "cog" 不在字典中，所以不存在符合要求的转换序列。
// Related Topics 深度优先搜索 广度优先搜索 数组 字符串
// 👍 27 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[]}
 */
var findLadders = function(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return [];
  if (beginWord === endWord) return [];
  let ans = [];
  const visited = new Map();
  const set = new Set();
  visited.set(beginWord, true);
  const isValid = (str1, str2) => {
    const len1 = str1.length;
    const len2 = str1.length;
    if (len1 !== len2) {
      return false;
    }
    let cnt = 0;
    for (let i = 0; i < len1; i++) {
      if (str1[i] !== str2[i]) {
        cnt++;
      }
      if (cnt > 1) {
        return false;
      }
    }
    return cnt === 1;
  }
  let flag = false;
  const dfs = (word, path) => {
    if (!flag && word === endWord) {
      ans = [...path];
      flag = true;
      return;
    }
    for (const newWord of wordSet) {
      if (flag) return;
      if (set.has(newWord) || visited.has(newWord)) continue;
      if (isValid(newWord, word)) {
        path.push(newWord);
        visited.set(newWord, true);
        dfs(newWord, path);
        path.pop();
        visited.delete(newWord);
        set.add(newWord)
      }
    }
  }
  dfs(beginWord, [beginWord]);
  return ans;
};
// leetcode submit region end(Prohibit modification and deletion)
