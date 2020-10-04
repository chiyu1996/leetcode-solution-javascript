//在第一行我们写上一个 0。接下来的每一行，将前一行中的0替换为01，1替换为10。 
//
// 给定行数 N 和序数 K，返回第 N 行中第 K个字符。（K从1开始） 
//
// 
//例子: 
//
// 输入: N = 1, K = 1
//输出: 0
//
//输入: N = 2, K = 1
//输出: 0
//
//输入: N = 2, K = 2
//输出: 1
//
//输入: N = 4, K = 5
//输出: 1
//
//解释:
//第一行: 0
//第二行: 01
//第三行: 0110
//第四行: 01101001
// 
//
// 
//注意： 
//
// 
// N 的范围 [1, 30]. 
// K 的范围 [1, 2^(N-1)]. 
// 
// Related Topics 递归 
// 👍 96 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var kthGrammar = function (N, K) {
    if (N === 1) return 0;
    return kthGrammar(N - 1, Math.floor((K + 1) / 2)) ? K % 2 : 1 - K % 2;
};
//leetcode submit region end(Prohibit modification and deletion)
