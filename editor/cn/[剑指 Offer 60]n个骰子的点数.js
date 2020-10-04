//把n个骰子扔在地上，所有骰子朝上一面的点数之和为s。输入n，打印出s的所有可能的值出现的概率。 
//
// 
//
// 你需要用一个浮点数数组返回答案，其中第 i 个元素代表这 n 个骰子所能掷出的点数集合中第 i 小的那个的概率。 
//
// 
//
// 示例 1: 
//
// 输入: 1
//输出: [0.16667,0.16667,0.16667,0.16667,0.16667,0.16667]
// 
//
// 示例 2: 
//
// 输入: 2
//输出: [0.02778,0.05556,0.08333,0.11111,0.13889,0.16667,0.13889,0.11111,0.08333,0
//.05556,0.02778] 
//
// 
//
// 限制： 
//
// 1 <= n <= 11 
// 👍 120 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {number[]}
 */
var twoSum = function (n) {
    let dp = new Array(n + 1).fill(undefined).map(() => {
        return new Array(6 * n + 1).fill(0);
    });
    for (let i = 1; i <= 6; i++) {
        dp[1][i] = 1;
    }
    for (let dice = 2; dice <= n; dice++) {
        for (let j = dice; j <= 6 * dice; j++) {
            for (let i = 1; i <= 6; i++) {
                if (j - i <= 0) {
                    break;
                }
                dp[dice][j] += dp[dice - 1][j - i];
            }
        }
    }
    let total = 6 ** n;
    let ans = [];
    for (let i = n; i < dp[n].length; i++) {
        ans.push((dp[n][i] / total).toFixed(5));
    }
    return ans;
};
//leetcode submit region end(Prohibit modification and deletion)
