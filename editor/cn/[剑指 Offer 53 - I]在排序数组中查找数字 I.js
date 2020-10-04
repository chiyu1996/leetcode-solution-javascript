//统计一个数字在排序数组中出现的次数。 
//
// 
//
// 示例 1: 
//
// 输入: nums = [5,7,7,8,8,10], target = 8
//输出: 2 
//
// 示例 2: 
//
// 输入: nums = [5,7,7,8,8,10], target = 6
//输出: 0 
//
// 
//
// 限制： 
//
// 0 <= 数组长度 <= 50000 
//
// 
//
// 注意：本题与主站 34 题相同（仅返回值不同）：https://leetcode-cn.com/problems/find-first-and-last-
//position-of-element-in-sorted-array/ 
// Related Topics 数组 二分查找 
// 👍 68 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let n = nums.length;
    let l = 0, r = n;
    let ll = -1, rr = -1;
    while (l < r) {
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] >= target) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }
    ll = l;
    if (ll === n || nums[ll] !== target) {
        return 0;
    }
    l = 0, r = n;
    while (l < r) {
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] > target) {
            r = mid;
        } else {
            l = mid + 1;
        }

    }
    rr = l - 1;
    return rr - ll + 1;
};
//leetcode submit region end(Prohibit modification and deletion)
