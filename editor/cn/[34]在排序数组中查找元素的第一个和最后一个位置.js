//给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。 
//
// 你的算法时间复杂度必须是 O(log n) 级别。 
//
// 如果数组中不存在目标值，返回 [-1, -1]。 
//
// 示例 1: 
//
// 输入: nums = [5,7,7,8,8,10], target = 8
//输出: [3,4] 
//
// 示例 2: 
//
// 输入: nums = [5,7,7,8,8,10], target = 6
//输出: [-1,-1] 
// Related Topics 数组 二分查找 
// 👍 605 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
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
        return [-1, -1];
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
    return [ll, rr];
};
//leetcode submit region end(Prohibit modification and deletion)
