//给两个整数数组 A 和 B ，返回两个数组中公共的、长度最长的子数组的长度。 
//
// 
//
// 示例： 
//
// 输入：
//A: [1,2,3,2,1]
//B: [3,2,1,4,7]
//输出：3
//解释：
//长度最长的公共子数组是 [3, 2, 1] 。
// 
//
// 
//
// 提示： 
//
// 
// 1 <= len(A), len(B) <= 1000 
// 0 <= A[i], B[i] < 100 
// 
// Related Topics 数组 哈希表 二分查找 动态规划 
// 👍 336 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function (A, B) {
    let m = A.length;
    let n = B.length;
    let dp = new Int32Array(n + 1);
    let cur = 0;
    let lastTop = 0;
    let ans = 0;
    for (let i = 1; i <= m; i++) {
        cur = 0;
        for (let j = 1; j <= n; j++) {
            lastTop = cur;
            cur = dp[j];
            if (A[i - 1] === B[j - 1]) {
                dp[j] = lastTop + 1;
                ans = Math.max(ans, dp[j]);
            } else {
                dp[j] = 0;
            }
        }
    }
    return ans;
};
//leetcode submit region end(Prohibit modification and deletion)
