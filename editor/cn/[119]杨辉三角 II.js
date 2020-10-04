//给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。 
//
// 
//
// 在杨辉三角中，每个数是它左上方和右上方的数的和。 
//
// 示例: 
//
// 输入: 3
//输出: [1,3,3,1]
// 
//
// 进阶： 
//
// 你可以优化你的算法到 O(k) 空间复杂度吗？ 
// Related Topics 数组 
// 👍 183 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let ans=[]
    for(let i=0;i<=rowIndex;i++){
        let last=[...ans]
        ans[0]=1;
        for(let j=1;j<=i;j++){
            ans[j]=(last[j]||0)+(last[j-1]||0)
        }
    }
    return ans
};
//leetcode submit region end(Prohibit modification and deletion)
