//给你一个整数数组 nums 。 
//
// 如果一组数字 (i,j) 满足 nums[i] == nums[j] 且 i < j ，就可以认为这是一组 好数对 。 
//
// 返回好数对的数目。 
//
// 
//
// 示例 1： 
//
// 输入：nums = [1,2,3,1,1,3]
//输出：4
//解释：有 4 组好数对，分别是 (0,3), (0,4), (3,4), (2,5) ，下标从 0 开始
// 
//
// 示例 2： 
//
// 输入：nums = [1,1,1,1]
//输出：6
//解释：数组中的每组数字都是好数对 
//
// 示例 3： 
//
// 输入：nums = [1,2,3]
//输出：0
// 
//
// 
//
// 提示： 
//
// 
// 1 <= nums.length <= 100 
// 1 <= nums[i] <= 100 
// 
// Related Topics 数组 哈希表 数学 
// 👍 28 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
    let map = {};
    for (let num of nums) {
        map[num] = (map[num] || 0) + 1;
    }
    let sum = 0;
    Object.keys(map).forEach(key => {
        const v = map[key];
        sum += (v) * (v - 1) / 2;
    });
    return sum;
};
//leetcode submit region end(Prohibit modification and deletion)
