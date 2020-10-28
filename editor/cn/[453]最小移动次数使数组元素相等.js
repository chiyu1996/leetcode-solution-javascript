//给定一个长度为 n 的非空整数数组，找到让数组所有元素相等的最小移动次数。每次移动将会使 n - 1 个元素增加 1。 
//
// 
//
// 示例: 
//
// 输入:
//[1,2,3]
//
//输出:
//3
//
//解释:
//只需要3次移动（注意每次移动会增加两个元素的值）：
//
//[1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
// 
// Related Topics 数学 
// 👍 152 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
    if (nums === null | nums.length === 0) return 0;
    let moves = 0;
    let min = nums[0];
    for (let i = 1; i < nums.length; i++) {
        min = Math.min(min, nums[i]);
    }
    for (let i = 0; i < nums.length; i++) {
        moves += nums[i] - min;
    }
    return moves;
};
//leetcode submit region end(Prohibit modification and deletion)
