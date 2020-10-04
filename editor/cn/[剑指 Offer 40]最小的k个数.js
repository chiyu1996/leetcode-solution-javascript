//输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。 
//
// 
//
// 示例 1： 
//
// 输入：arr = [3,2,1], k = 2
//输出：[1,2] 或者 [2,1]
// 
//
// 示例 2： 
//
// 输入：arr = [0,1,2,1], k = 1
//输出：[0] 
//
// 
//
// 限制： 
//
// 
// 0 <= k <= arr.length <= 10000 
// 0 <= arr[i] <= 10000 
// 
// Related Topics 堆 分治算法 
// 👍 141 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
    if (arr.length === 0) return [];
    let n = arr.length;
    const pagination = (arr, l, r) => {
        let tmp = arr[l];
        while (l < r) {
            while (l < r && arr[r] >= tmp) r--;
            arr[l] = arr[r];
            while (l < r && arr[l] <= tmp) l++;
            arr[r] = arr[l];
        }
        arr[l] = tmp;
        return l;
    };
    const quicksortK = (arr, l, r, k) => {
        if (l >= r) return;
        let p = pagination(arr, l, r);
        if (p === k) {
            return;
        } else {
            quicksortK(arr, l, p, k);
            quicksortK(arr, p + 1, r, k);
        }

    };
    quicksortK(arr, 0, n - 1, k);
    return arr.splice(0, k);

};
//leetcode submit region end(Prohibit modification and deletion)
