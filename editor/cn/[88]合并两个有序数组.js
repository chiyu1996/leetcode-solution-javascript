//给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。 
//
// 
//
// 说明: 
//
// 
// 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。 
// 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。 
// 
//
// 
//
// 示例: 
//
// 输入:
//nums1 = [1,2,3,0,0,0], m = 3
//nums2 = [2,5,6],       n = 3
//
//输出: [1,2,2,3,5,6] 
// Related Topics 数组 双指针 
// 👍 640 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let nums1_copy = [...nums1];
    let first = 0, slow = 0, p = 0;
    while ((first < m) && (slow < n)) {
        nums1[p++] = nums1_copy[first] < nums2[slow] ? nums1_copy[first++] : nums2[slow++];
    }
    nums1.splice(p);
    if (first < m) {
        nums1.push(...nums1_copy.splice(first, m - first));
    }
    if (slow < n) {
        nums1.push(...nums2.splice(slow, n - slow));
    }
};
//leetcode submit region end(Prohibit modification and deletion)
