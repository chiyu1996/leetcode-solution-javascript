//给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的中位数。 
//
// 进阶：你能设计一个时间复杂度为 O(log (m+n)) 的算法解决此问题吗？ 
//
// 
//
// 示例 1： 
//
// 输入：nums1 = [1,3], nums2 = [2]
//输出：2.00000
//解释：合并数组 = [1,2,3] ，中位数 2
// 
//
// 示例 2： 
//
// 输入：nums1 = [1,2], nums2 = [3,4]
//输出：2.50000
//解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
// 
//
// 示例 3： 
//
// 输入：nums1 = [0,0], nums2 = [0,0]
//输出：0.00000
// 
//
// 示例 4： 
//
// 输入：nums1 = [], nums2 = [1]
//输出：1.00000
// 
//
// 示例 5： 
//
// 输入：nums1 = [2], nums2 = []
//输出：2.00000
// 
//
// 
//
// 提示： 
//
// 
// nums1.length == m 
// nums2.length == n 
// 0 <= m <= 1000 
// 0 <= n <= 1000 
// 1 <= m + n <= 2000 
// -106 <= nums1[i], nums2[i] <= 106 
// 
// Related Topics 数组 二分查找 分治算法 
// 👍 3263 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let m = nums1.length;
    let n = nums2.length;
    if (m > n) {
        let temp = nums1;
        nums1 = nums2;
        nums2 = temp;
        let tmp = m;
        m = n;
        n = tmp;
    }
    let iMin = 0, iMax = m, halfLen = Math.floor((m + n + 1) / 2);
    while (iMin <= iMax) {
        let i = Math.floor((iMin + iMax) / 2);
        let j = halfLen - i;
        if (i < iMax && nums2[j - 1] > nums1[i]) {
            iMin = i + 1;
        } else if (i > iMin && nums1[i - 1] > nums2[j]) {
            iMax = i - 1;
        } else {
            let maxLeft = 0;
            if (i === 0) {
                maxLeft = nums2[j - 1];
            } else if (j === 0) {
                maxLeft = nums1[i - 1];
            } else {
                maxLeft = Math.max(nums1[i - 1], nums2[j - 1]);
            }
            if ((m + n) % 2 === 1) {
                return maxLeft;
            }
            let minRight = 0;
            if (i === m) {
                minRight = nums2[j];
            } else if (j === n) {
                minRight = nums1[i];
            } else {
                minRight = Math.min(nums2[j], nums1[i]);
            }
            return (maxLeft + minRight) / 2;
        }
    }
    return 0.0;
};
//leetcode submit region end(Prohibit modification and deletion)
