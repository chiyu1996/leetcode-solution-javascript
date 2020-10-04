//给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。 
//
// 示例: 
//
// 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
//输出: [3,3,5,5,6,7] 
//解释: 
//
//  滑动窗口的位置                最大值
//---------------               -----
//[1  3  -1] -3  5  3  6  7       3
// 1 [3  -1  -3] 5  3  6  7       3
// 1  3 [-1  -3  5] 3  6  7       5
// 1  3  -1 [-3  5  3] 6  7       5
// 1  3  -1  -3 [5  3  6] 7       6
// 1  3  -1  -3  5 [3  6  7]      7 
//
// 
//
// 提示： 
//
// 你可以假设 k 总是有效的，在输入数组不为空的情况下，1 ≤ k ≤ 输入数组的大小。 
//
// 注意：本题与主站 239 题相同：https://leetcode-cn.com/problems/sliding-window-maximum/ 
// Related Topics 队列 Sliding Window 
// 👍 120 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    if (nums.length === 0) return [];
    let n = nums.length;
    let left = [], right = [];
    left[0] = nums[0];
    right[n - 1] = nums[n - 1];
    for (let i = 1; i < n; i++) {
        if (i % k) {
            left[i] = Math.max(left[i - 1], nums[i]);
        } else {
            left[i] = nums[i];
        }
        let j = n - i - 1;
        if ((j + 1) % k) {
            right[j] = Math.max(right[j + 1], nums[j]);
        } else {
            right[j] = nums[j];
        }

    }
    let res = [];
    for (let i = 0; i < n - k + 1; i++) {
        res.push(Math.max(right[i], left[i + k - 1]));
    }
    return res;
};
//leetcode submit region end(Prohibit modification and deletion)
