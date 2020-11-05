//几乎每一个人都用 乘法表。但是你能在乘法表中快速找到第k小的数字吗？ 
//
// 给定高度m 、宽度n 的一张 m * n的乘法表，以及正整数k，你需要返回表中第k 小的数字。 
//
// 例 1： 
//
// 
//输入: m = 3, n = 3, k = 5
//输出: 3
//解释: 
//乘法表:
//1	2	3
//2	4	6
//3	6	9
//
//第5小的数字是 3 (1, 2, 2, 3, 3).
// 
//
// 例 2： 
//
// 
//输入: m = 2, n = 3, k = 6
//输出: 6
//解释: 
//乘法表:
//1	2	3
//2	4	6
//
//第6小的数字是 6 (1, 2, 2, 3, 4, 6).
// 
//
// 注意： 
//
// 
// m 和 n 的范围在 [1, 30000] 之间。 
// k 的范围在 [1, m * n] 之间。 
// 
// Related Topics 二分查找 
// 👍 111 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (m, n, k) {
    const possible = (x, k) => {
        let cnt = 0;
        for (let i = 1; i <= m; i++) {
            cnt += Math.min(Math.floor(x / i), n);
        }
        console.log(cnt)
        return cnt >= k;
    };
    let left = 1, right = m * n;
    while (left < right) {
        let mid = (left + right) >> 1;
        if (!possible(mid, k)) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
};
//leetcode submit region end(Prohibit modification and deletion)
