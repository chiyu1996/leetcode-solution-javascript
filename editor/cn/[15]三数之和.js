//给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复
//的三元组。 
//
// 注意：答案中不可以包含重复的三元组。 
//
// 
//
// 示例： 
//
// 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
//
//满足要求的三元组集合为：
//[
//  [-1, 0, 1],
//  [-1, -1, 2]
//]
// 
// Related Topics 数组 双指针 
// 👍 2640 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let array = [];
    const len = nums.length;
    if (len < 3) return array;
    nums.sort((a, b) => a - b);
    console.log(nums);
    for (let i = 0; i < len; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let L = i + 1;
        let R = len - 1;
        while (L < R) {
            let sum = nums[i] + nums[L] + nums[R];
            if (sum === 0) {
                array.push([nums[i], nums[L], nums[R]]);
                while (L < R && nums[L] === nums[L + 1]) L++;
                while (L < R && nums[R] === nums[R - 1]) R--;
                L++;
                R--;
            } else if (sum > 0) {
                R--;
            } else {
                L++;
            }
        }
    }
    return array;
};
//leetcode submit region end(Prohibit modification and deletion)
