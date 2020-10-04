//哦，不！你不小心把一个长篇文章中的空格、标点都删掉了，并且大写也弄成了小写。像句子"I reset the computer. It still didn’
//t boot!"已经变成了"iresetthecomputeritstilldidntboot"。在处理标点符号和大小写之前，你得先把它断成词语。当然了，你有一
//本厚厚的词典dictionary，不过，有些词没在词典里。假设文章用sentence表示，设计一个算法，把文章断开，要求未识别的字符最少，返回未识别的字符数。 
//
//
// 注意：本题相对原题稍作改动，只需返回未识别的字符数 
//
// 
//
// 示例： 
//
// 输入：
//dictionary = ["looked","just","like","her","brother"]
//sentence = "jesslookedjustliketimherbrother"
//输出： 7
//解释： 断句后为"jess looked just like tim her brother"，共7个未识别字符。
// 
//
// 提示： 
//
// 
// 0 <= len(sentence) <= 1000 
// dictionary中总字符数不超过 150000。 
// 你可以认为dictionary和sentence中只包含小写字母。 
// 
// Related Topics 记忆化 字符串 
// 👍 149 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {number}
 */
class point {
    constructor(){
        this.next=[]
        this.isEnd=false
    }
}
var respace = function (dictionary, sentence) {
    const insert = (root, word) => {
        let cur = root;
        for (let i = word.length - 1; i >= 0; i--) {
            let now = word.charCodeAt(i) - "a".charCodeAt(0);
            if (cur.next[now] === undefined) {
                cur.next[now] = new point();
            }
            cur = cur.next[now];
        }
        cur.isEnd = true;
    };

    let root = new point();
    let length = sentence.length;
    for (let word of dictionary) {
        insert(root, word);
    }



    let dp = new Array(length + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i <= sentence.length; i++) {
        dp[i] = dp[i - 1] + 1;
        let cur = root;
        for (let j = i; j >= 1; j--) {
            let now = sentence[j - 1].charCodeAt(0) - "a".charCodeAt(0);
            if (cur.next[now] === undefined) {
                break;
            } else if (cur.next[now].isEnd) {
                dp[i] = Math.min(dp[i], dp[j - 1]);
            }
            if (dp[i] === 0) {
                break;
            }
            cur = cur.next[now];
        }
    }
    return dp[length];
};
//leetcode submit region end(Prohibit modification and deletion)
