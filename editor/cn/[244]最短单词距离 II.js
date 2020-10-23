//请设计一个类，使该类的构造函数能够接收一个单词列表。然后再实现一个方法，该方法能够分别接收两个单词 word1 和 word2，并返回列表中这两个单词之间的
//最短距离。您的方法将被以不同的参数调用 多次。 
//
// 示例: 
//假设 words = ["practice", "makes", "perfect", "coding", "makes"] 
//
// 输入: word1 = “coding”, word2 = “practice”
//输出: 3
// 
//
// 输入: word1 = "makes", word2 = "coding"
//输出: 1 
//
// 注意: 
//你可以假设 word1 不等于 word2, 并且 word1 和 word2 都在列表里。 
// Related Topics 设计 哈希表 
// 👍 26 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string[]} words
 */
var WordDistance = function (words) {
    let map = new Map();
    for (let i = 0; i < words.length; i++) {
        if (map.has(words[i])) {
            map.get(words[i]).push(i);
        } else {
            map.set(words[i], [i]);
        }
    }
    this.map = map;
};

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
WordDistance.prototype.shortest = function (word1, word2) {
    let i = 0, j = 0;
    let index1 = this.map.get(word1);
    let index2 = this.map.get(word2);
    let dis = Infinity;
    while (i < index1.length && j < index2.length) {
        dis = Math.min(dis, Math.abs(index1[i] - index2[j]));
        if (index1[i] > index2[j]) {
            j++;
        } else {
            i++;
        }
    }
    return dis;
};

/**
 * Your WordDistance object will be instantiated and called as such:
 * var obj = new WordDistance(words)
 * var param_1 = obj.shortest(word1,word2)
 */
//leetcode submit region end(Prohibit modification and deletion)
