//给定一个数组，包含从 1 到 N 所有的整数，但其中缺了两个数字。你能在 O(N) 时间内只用 O(1) 的空间找到它们吗？ 
//
// 以任意顺序返回这两个数字均可。 
//
// 示例 1: 
//
// 输入: [1]
//输出: [2,3] 
//
// 示例 2: 
//
// 输入: [2,3]
//输出: [1,4] 
//
// 提示： 
//
// 
// nums.length <= 30000 
// 
// Related Topics 数组 数学 
// 👍 26 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var missingTwo = function (nums) {
    let ans = 0, n = nums.length;
    for (let i = 1; i <= n + 2; i++) {
        ans ^= i;
    }
    for (const num of nums) {
        ans ^= num;
    }
    let one = 0;
    let diff = ans & (-ans);
    for (let i = 1; i <= n + 2; i++) {
        if (diff & i) {
            one ^= i;
        }
    }
    for (const num of nums) {
        if (diff & num) {
            one ^= num;
        }
    }
    return [one, one ^ ans];
};
//leetcode submit region end(Prohibit modification and deletion)
