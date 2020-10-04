//给定一个非负整数数组和一个整数 m，你需要将这个数组分成 m 个非空的连续子数组。设计一个算法使得这 m 个子数组各自和的最大值最小。 
//
// 注意: 
//数组长度 n 满足以下条件: 
//
// 
// 1 ≤ n ≤ 1000 
// 1 ≤ m ≤ min(50, n) 
// 
//
// 示例: 
//
// 
//输入:
//nums = [7,2,5,10,8]
//m = 2
//
//输出:
//18
//
//解释:
//一共有四种方法将nums分割为2个子数组。
//其中最好的方式是将其分为[7,2,5] 和 [10,8]，
//因为此时这两个子数组各自的和的最大值为18，在所有情况中最小。
// 
// Related Topics 二分查找 动态规划 
// 👍 350 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function (nums, m) {
    let n = nums.length;
    let sub = [0];
    nums.reduce((pre, val) => {
        sum = pre + val;
        sub.push(sum);
        return sum;
    }, 0);
    let dp = new Array(n + 1).fill(undefined).map(() => {
        return new Array(m + 1).fill(Infinity);
    });
    dp[0][0] = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= Math.min(i, m); j++) {
            for (let k = 0; k < i; k++) {
                dp[i][j] = Math.min(dp[i][j], Math.max(dp[k][j - 1], sub[i] - sub[k]));
            }

        }
    }
    return dp[n][m];
};
//leetcode submit region end(Prohibit modification and deletion)
