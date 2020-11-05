//给定一个 n x n 矩阵，其中每行和每列元素均按升序排序，找到矩阵中第 k 小的元素。 
//请注意，它是排序后的第 k 小元素，而不是第 k 个不同的元素。 
//
// 
//
// 示例： 
//
// matrix = [
//   [ 1,  5,  9],
//   [10, 11, 13],
//   [12, 13, 15]
//],
//k = 8,
//
//返回 13。
// 
//
// 
//
// 提示： 
//你可以假设 k 的值永远是有效的，1 ≤ k ≤ n2 。 
// Related Topics 堆 二分查找 
// 👍 462 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
    let n = matrix.length;
    const possible = (target, k) => {
        let i = n - 1;
        let j = 0;
        let cnt = 0;
        while (i >= 0 && j < n) {
            if (matrix[i][j] <= target) {
                cnt += i + 1;
                j++;
            } else {
                i--;
            }
        }
        return cnt >= k;
    };
    let left = matrix[0][0], right = matrix[n - 1][n - 1];
    while (left < right) {
        let mid = (left + right) >> 1;
        if (!possible(mid,k)) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
};
//leetcode submit region end(Prohibit modification and deletion)
