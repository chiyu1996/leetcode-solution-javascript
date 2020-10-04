//给定一个整数数组 nums，求出数组从索引 i 到 j (i ≤ j) 范围内元素的总和，包含 i, j 两点。 
//
// 示例： 
//
// 给定 nums = [-2, 0, 3, -5, 2, -1]，求和函数为 sumRange()
//
//sumRange(0, 2) -> 1
//sumRange(2, 5) -> -1
//sumRange(0, 5) -> -3 
//
// 说明: 
//
// 
// 你可以假设数组不可变。 
// 会多次调用 sumRange 方法。 
// 
// Related Topics 动态规划 
// 👍 192 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    this.prefixSum = new Array(nums.length + 1);
    this.prefixSum[0] = 0;
    for (let i = 1; i < nums.length + 1; i++) {
        this.prefixSum[i] = this.prefixSum[i - 1] + nums[i - 1];
    }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
    if (i === 0) return this.prefixSum[j + 1]; // i=0时，this.prefixSum[-1]=0
    return this.prefixSum[j + 1] - this.prefixSum[i];
};
/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
//leetcode submit region end(Prohibit modification and deletion)
