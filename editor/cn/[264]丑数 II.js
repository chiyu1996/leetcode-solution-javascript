//编写一个程序，找出第 n 个丑数。 
//
// 丑数就是质因数只包含 2, 3, 5 的正整数。 
//
// 示例: 
//
// 输入: n = 10
//输出: 12
//解释: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 是前 10 个丑数。 
//
// 说明: 
//
// 
// 1 是丑数。 
// n 不超过1690。 
// 
// Related Topics 堆 数学 动态规划 
// 👍 411 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {number}
 */
const Maxn = 1690;
let uglyNums = [1];
const pre = (n) => {
    let pow2 = 0, pow3 = 0, pow5 = 0;
    for (let i = 1; i <= n; i++) {
        let ugly = Math.min(uglyNums[pow2] * 2, uglyNums[pow3] * 3, uglyNums[pow5] * 5);
        uglyNums[i] = ugly;
        if (ugly === uglyNums[pow2] * 2) {
            pow2 += 1;
        }
        if (ugly === uglyNums[pow3] * 3) {
            pow3 += 1;
        }
        if (ugly === uglyNums[pow5] * 5) {
            pow5 += 1;
        }
    }
};
pre(Maxn);
var nthUglyNumber = function (n) {
    return uglyNums[n - 1];
};
//leetcode submit region end(Prohibit modification and deletion)
