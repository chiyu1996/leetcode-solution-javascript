// 给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，在字符串中增加空格来构建一个句子，使得句子中所有的单词都在词典中。返回所有这些可能的
// 句子。
//
// 说明：
//
//
// 分隔时可以重复使用字典中的单词。
// 你可以假设字典中没有重复的单词。
//
//
// 示例 1：
//
// 输入:
// s = "catsanddog"
// wordDict = ["cat", "cats", "and", "sand", "dog"]
// 输出:
// [
//  "cats and dog",
//  "cat sand dog"
// ]
//
//
// 示例 2：
//
// 输入:
// s = "pineapplepenapple"
// wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
// 输出:
// [
//  "pine apple pen apple",
//  "pineapple pen apple",
//  "pine applepen apple"
// ]
// 解释: 注意你可以重复使用字典中的单词。
//
//
// 示例 3：
//
// 输入:
// s = "catsandog"
// wordDict = ["cats", "dog", "sand", "and", "cat"]
// 输出:
// []
//
// Related Topics 动态规划 回溯算法
// 👍 301 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
  const Trie = function() {
    this.next = [];
    this.isEnd = false;
    this.word = null;
  };
  const initTrie = (root) => {
    for (const word of wordDict) {
      let cur = root;
      for (let i = 0; i < word.length; i++) {
        const now = word.charCodeAt(i) - 97;
        if (cur.next[now] === undefined) {
          cur.next[now] = new Trie();
        }
        cur = cur.next[now];
      }
      cur.isEnd = true;
      cur.word = word;
    }
  };
  const dfs = (start, arr = []) => {
    if (head[start]) {
      return head[start];
    }
    if (start === s.length) {
      return [[]];
    }
    let cur = root;
    for (let i = start; i < s.length; i++) {
      const char_index = s.charCodeAt(i) - 97;
      cur = cur.next[char_index]
      if (cur) {
        if (cur.isEnd) {
          if (s.substring(start, i + 1) === cur.word) {
            dfs(i + 1).forEach(w => {
              arr.push([cur.word].concat(w));
            });
          } else {
            break;
          }
        }
      } else {
        break;
      }
    }
    return head[start] = arr;
  };
  const root = new Trie();
  const head = {};
  initTrie(root);
  return dfs(0).map(v => v.join(' '));
};
// leetcode submit region end(Prohibit modification and deletion)
