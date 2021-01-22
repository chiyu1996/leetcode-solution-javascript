//请你设计一个数据结构，支持 添加新单词 和 查找字符串是否与任何先前添加的字符串匹配 。
//
// 实现词典类 WordDictionary ：
//
//
// WordDictionary() 初始化词典对象
// void addWord(word) 将 word 添加到数据结构中，之后可以对它进行匹配
// bool search(word) 如果数据结构中存在字符串与 word 匹配，则返回 true ；否则，返回 false 。word 中可能包含一些 '
//.' ，每个 . 都可以表示任何一个字母。
//
//
//
//
// 示例：
//
//
//输入：
//["WordDictionary","addWord","addWord","addWord","search","search","search","se
//arch"]
//[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
//输出：
//[null,null,null,null,false,true,true,true]
//
//解释：
//WordDictionary wordDictionary = new WordDictionary();
//wordDictionary.addWord("bad");
//wordDictionary.addWord("dad");
//wordDictionary.addWord("mad");
//wordDictionary.search("pad"); // return False
//wordDictionary.search("bad"); // return True
//wordDictionary.search(".ad"); // return True
//wordDictionary.search("b.."); // return True
//
//
//
//
// 提示：
//
//
// 1 <= word.length <= 500
// addWord 中的 word 由小写英文字母组成
// search 中的 word 由 '.' 或小写英文字母组成
// 最调用多 50000 次 addWord 和 search
//
// Related Topics 深度优先搜索 设计 字典树 回溯算法
// 👍 201 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Initialize your data structure here.
 */
const Trie = function() {
  this.next = new Array(26);
  this.isEnd = false;
  this.word = null;
};
var WordDictionary = function() {
  this.root = new Trie();
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  let node = this.root;
  for (let i = 0; i < word.length; i++) {
    const now = word.charCodeAt(i) - 97;
    if (node.next[now] === undefined) {
      node.next[now] = new Trie();
    }
    node = node.next[now];
  }
  node.isEnd = true;
  node.word = word;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  if(!word.length) {
    return false;
  }
  return this.dfs(this.root, word);
};
WordDictionary.prototype.dfs = function(root, word) {
  const length = word.length;
  let node = root;
  for (let i = 0; i < length; ++i) {
    const ch = word[i];
    if (ch === ".") {
      for (let j = 0; j < 26; j++) {
        if(node.next[j]) {
          const found = this.dfs(node.next[j], word.slice(i + 1));
          if (found) return true;
        }
      }
      return false;
    }
    const index = word.charCodeAt(i) - 97;
    if (!node.next[index]) {
      return false;
    }
    node = node.next[index];
  }
  return node.isEnd;
};
/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
//leetcode submit region end(Prohibit modification and deletion)
