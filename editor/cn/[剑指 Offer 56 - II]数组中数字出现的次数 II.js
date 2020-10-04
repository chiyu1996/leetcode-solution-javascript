//在一个数组 nums 中除一个数字只出现一次之外，其他数字都出现了三次。请找出那个只出现一次的数字。 
//
// 
//
// 示例 1： 
//
// 输入：nums = [3,4,3,3]
//输出：4
// 
//
// 示例 2： 
//
// 输入：nums = [9,1,7,9,7,9,7]
//输出：1 
//
// 
//
// 限制： 
//
// 
// 1 <= nums.length <= 10000 
// 1 <= nums[i] < 2^31 
// 
//
// 
// 👍 84 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    if (nums.length === 0) return;
    let n = nums.length;
    let bitMap = new Array(32).fill(0);
    for (let i = 0; i < n; i++) {
        let bit = 1;
        for (let j = 31; j >= 0; j--) {
            if (nums[i] & bit) bitMap[j]++;
            bit = bit << 1;
        }
    }
    let ans = 0;
    for (let i = 0; i < 32; i++) {
        ans = ans << 1;
        ans += bitMap[i] % 3;
    }
    return ans;
};
//leetcode submit region end(Prohibit modification and deletion)
