//统计所有小于非负整数 n 的质数的数量。 
//
// 
//
// 示例 1： 
//
// 输入：n = 10
//输出：4
//解释：小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
// 
//
// 示例 2： 
//
// 输入：n = 0
//输出：0
// 
//
// 示例 3： 
//
// 输入：n = 1
//输出：0
// 
//
// 
//
// 提示： 
//
// 
// 0 <= n <= 5 * 106 
// 
// Related Topics 哈希表 数学 
// 👍 460 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let p = [];
    let nCount = 0;
    let a = new Array(n + 5).fill(0);
    const getPrime = (n) => {
        for (let i = 2; i <= n; i++) {
            if (a[i] === 0) {
                p.push(i);
                ++nCount;
            }
            for (let j = 0, k; (j <= nCount) && (k = i * p[j]) <= n; j++) {
                a[k] = 1;
                if (i % p[j] === 0) break;
            }
        }
    };
    getPrime(n);
    for (let i = 0; i < nCount; i++){
        if (p[i] >= n) {
            return i;
        }
    }
    return nCount
};
//leetcode submit region end(Prohibit modification and deletion)
