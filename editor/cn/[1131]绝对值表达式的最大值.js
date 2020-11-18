// 给你两个长度相等的整数数组，返回下面表达式的最大值：
//
// |arr1[i] - arr1[j]| + |arr2[i] - arr2[j]| + |i - j|
//
// 其中下标 i，j 满足 0 <= i, j < arr1.length。
//
//
//
// 示例 1：
//
// 输入：arr1 = [1,2,3,4], arr2 = [-1,4,5,6]
// 输出：13
//
//
// 示例 2：
//
// 输入：arr1 = [1,-2,-5,0,10], arr2 = [0,-2,-1,-7,-4]
// 输出：20
//
//
//
// 提示：
//
//
// 2 <= arr1.length == arr2.length <= 40000
// -10^6 <= arr1[i], arr2[i] <= 10^6
//
// Related Topics 位运算 数学
// 👍 34 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var maxAbsValExpr = function(arr1, arr2) {
  const n = arr1.length;
  const A = []; const B = []; const C = []; const D = [];

  for (let i = 0; i < n; i++) {
    const x = arr1[i]; const y = arr2[i];
    A.push(x + y + i);
    B.push(x + y - i);
    C.push(x - y + i);
    D.push(x - y - i);
  }
  return Math.max(Math.max(...A) - Math.min(...A), Math.max(...B) - Math.min(...B), Math.max(...C) - Math.min(...C), Math.max(...D) - Math.min(...D));
};
// leetcode submit region end(Prohibit modification and deletion)
