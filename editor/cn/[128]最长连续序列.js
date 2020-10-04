//给定一个未排序的整数数组，找出最长连续序列的长度。 
//
// 要求算法的时间复杂度为 O(n)。 
//
// 示例: 
//
// 输入: [100, 4, 200, 1, 3, 2]
//输出: 4
//解释: 最长连续序列是 [1, 2, 3, 4]。它的长度为 4。 
// Related Topics 并查集 数组 
// 👍 571 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let n = nums.length;

    const set = new Set(nums);
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (!set.has(nums[i] - 1)) {
            let cur = nums[i];
            let length = 1;
            while (set.has(cur + 1)) {
                length++;
                cur++;
            }
            max = Math.max(length, max);
        }
    }
    return max;
};
//leetcode submit region end(Prohibit modification and deletion)
