//设计一个算法，找出数组中最小的k个数。以任意顺序返回这k个数均可。 
//
// 示例： 
//
// 输入： arr = [1,3,5,7,2,4,6,8], k = 4
//输出： [1,2,3,4]
// 
//
// 提示： 
//
// 
// 0 <= len(arr) <= 100000 
// 0 <= k <= min(100000, len(arr)) 
// 
// Related Topics 堆 排序 分治算法 
// 👍 32 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var smallestK = function (arr, k) {
    const pagination = (left, right) => {
        let temp = arr[left];
        while (left < right) {
            while (left < right && temp <= arr[right]) {
                right--;
            }
            arr[left] = arr[right];
            while (left < right && temp >= arr[left]) {
                left++;
            }
            arr[right] = arr[left];
        }
        arr[left] = temp;
        return left;
    };
    const quick_sort = (left, right, k) => {
        if (left > right) return arr.slice(0, k);
        let p = pagination(left, right);
        if (p === k) {
            return arr.slice(0, k);
        } else {
            return p < k ? quick_sort(p + 1, right, k) : quick_sort(left, p, k);
        }
    };
    let n = arr.length;
    if (n <= k) return arr;
    if (k <= 0) return [];
    return quick_sort(0, n - 1, k);
};
//leetcode submit region end(Prohibit modification and deletion)
