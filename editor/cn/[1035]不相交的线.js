//我们在两条独立的水平线上按给定的顺序写下 A 和 B 中的整数。 
//
// 现在，我们可以绘制一些连接两个数字 A[i] 和 B[j] 的直线，只要 A[i] == B[j]，且我们绘制的直线不与任何其他连线（非水平线）相交。 
//
// 以这种方法绘制线条，并返回我们可以绘制的最大连线数。 
//
// 
//
// 示例 1： 
//
// 
//
// 输入：A = [1,4,2], B = [1,2,4]
//输出：2
//解释：
//我们可以画出两条不交叉的线，如上图所示。
//我们无法画出第三条不相交的直线，因为从 A[1]=4 到 B[2]=4 的直线将与从 A[2]=2 到 B[1]=2 的直线相交。 
//
// 示例 2： 
//
// 输入：A = [2,5,1,2,5], B = [10,5,2,1,5,2]
//输出：3
// 
//
// 示例 3： 
//
// 输入：A = [1,3,7,1,7,5], B = [1,9,2,5,1]
//输出：2 
//
// 
//
// 提示： 
//
// 
// 1 <= A.length <= 500 
// 1 <= B.length <= 500 
// 1 <= A[i], B[i] <= 2000 
// 
//
// 
// Related Topics 数组 
// 👍 72 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var maxUncrossedLines = function(A, B) {
    let n= A.length
    let m=B.length
    let dp= new Array(n+1).fill(undefined).map(()=>{
        return new Array(m+1).fill(0)
    })
    let ans=0;
    for(let i=1;i<=n;i++){
        for(let j=1;j<=m;j++){
            if(A[i-1]===B[j-1]){
                dp[i][j]=dp[i-1][j-1]+1
                ans=Math.max(ans,dp[i][j])
            }else{
                dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1])
            }
        }
    }
    return ans;
};
//leetcode submit region end(Prohibit modification and deletion)
