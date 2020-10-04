//给定一个整数序列：a1, a2, ..., an，一个132模式的子序列 ai, aj, ak 被定义为：当 i < j < k 时，ai < ak < a
//j。设计一个算法，当给定有 n 个数字的序列时，验证这个序列中是否含有132模式的子序列。 
//
// 注意：n 的值小于15000。 
//
// 示例1: 
//
// 
//输入: [1, 2, 3, 4]
//
//输出: False
//
//解释: 序列中不存在132模式的子序列。
// 
//
// 示例 2: 
//
// 
//输入: [3, 1, 4, 2]
//
//输出: True
//
//解释: 序列中有 1 个132模式的子序列： [1, 4, 2].
// 
//
// 示例 3: 
//
// 
//输入: [-1, 3, 2, 0]
//
//输出: True
//
//解释: 序列中有 3 个132模式的的子序列: [-1, 3, 2], [-1, 3, 0] 和 [-1, 2, 0].
// 
// Related Topics 栈 
// 👍 218 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
    let n = nums.length;
    if (n < 3) return false;
    let stack = [];
    let middle = -Infinity;
    for (let i = n - 1; i >= 0; i--) {
        if (nums[i] < middle) return true;
        while (stack && stack[stack.length - 1] < nums[i]) {
            middle = stack[stack.length - 1];
            stack.pop();
        }
        stack.push(nums[i]);
    }
    return false;
};
//leetcode submit region end(Prohibit modification and deletion)
