// 给你一个整数数组 arr ，以及 a、b 、c 三个整数。请你统计其中好三元组的数量。
//
// 如果三元组 (arr[i], arr[j], arr[k]) 满足下列全部条件，则认为它是一个 好三元组 。
//
//
// 0 <= i < j < k < arr.length
// |arr[i] - arr[j]| <= a
// |arr[j] - arr[k]| <= b
// |arr[i] - arr[k]| <= c
//
//
// 其中 |x| 表示 x 的绝对值。
//
// 返回 好三元组的数量 。
//
//
//
// 示例 1：
//
// 输入：arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3
// 输出：4
// 解释：一共有 4 个好三元组：[(3,0,1), (3,0,1), (3,1,1), (0,1,1)] 。
//
//
// 示例 2：
//
// 输入：arr = [1,1,2,2,3], a = 0, b = 0, c = 1
// 输出：0
// 解释：不存在满足所有条件的三元组。
//
//
//
//
// 提示：
//
//
// 3 <= arr.length <= 100
// 0 <= arr[i] <= 1000
// 0 <= a, b, c <= 1000
//
// Related Topics 数组
// 👍 15 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {
  const n = arr.length;
  const sum = new Int32Array(1001);
  let result = 0;
  for (let j = 0; j < n; j++) {
    for (let k = j + 1; k < n; k++) {
      if (Math.abs(arr[j] - arr[k]) <= b) {
        const [lj, rj, lk, rk] = [arr[j] - a, arr[j] + a, arr[k] - c, arr[k] + c];
        const l = Math.max(0, Math.max(lj, lk));
        const r = Math.min(1000, Math.min(rj, rk));
        if (l <= r) {
          if (l === 0) {
            result += sum[r];
          } else {
            result += sum[r] - sum[l - 1];
          }
        }
      }
    }
    for (let k = arr[j]; k <= 1000; k++) {
      sum[k] += 1;
    }
  }
  return result;
};
// leetcode submit region end(Prohibit modification and deletion)
