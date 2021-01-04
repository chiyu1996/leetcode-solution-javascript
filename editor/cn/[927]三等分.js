// 给定一个由 0 和 1 组成的数组 A，将数组分成 3 个非空的部分，使得所有这些部分表示相同的二进制值。
//
// 如果可以做到，请返回任何 [i, j]，其中 i+1 < j，这样一来：
//
//
// A[0], A[1], ..., A[i] 组成第一部分；
// A[i+1], A[i+2], ..., A[j-1] 作为第二部分；
// A[j], A[j+1], ..., A[A.length - 1] 是第三部分。
// 这三个部分所表示的二进制值相等。
//
//
// 如果无法做到，就返回 [-1, -1]。
//
// 注意，在考虑每个部分所表示的二进制时，应当将其看作一个整体。例如，[1,1,0] 表示十进制中的 6，而不会是 3。此外，前导零也是被允许的，所以 [0,
// 1,1] 和 [1,1] 表示相同的值。
//
//
//
// 示例 1：
//
// 输入：[1,0,1,0,1]
// 输出：[0,3]
//
//
// 示例 2：
//
// 输出：[1,1,0,1,1]
// 输出：[-1,-1]
//
//
//
// 提示：
//
//
// 3 <= A.length <= 30000
// A[i] == 0 或 A[i] == 1
//
//
//
// Related Topics 贪心算法 数学 二分查找
// 👍 37 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} A
 * @return {number[]}
 */
/**
 * @param {number[]} A
 * @return {number[]}
 */
var threeEqualParts = function(A) {
  const sum = A.reduce((prev, val) => prev + val);
  const noAns = [-1, -1];
  if (sum % 3) {
    return noAns;
  }
  const n = A.length;
  const T = sum / 3;
  if (T === 0) {
    return [0, n - 1];
  }
  let i1 = -1;
  let j1 = -1;
  let i2 = -1;
  let j2 = -1;
  let i3 = -1;
  let j3 = -1;
  let cnt = 0
  for (let i = 0; i < n; i++) {
    if (A[i] === 1) {
      cnt++;
      if (cnt === 1) i1 = i;
      if (cnt === T) j1 = i;
      if (cnt === T + 1) i2 = i;
      if (cnt === 2 * T) j2 = i;
      if (cnt === 2 * T + 1) i3 = i;
      if (cnt === 3 * T) j3 = i;
    }
  }
  const part1 = A.slice(i1, j1 + 1);
  const part2 = A.slice(i2, j2 + 1);
  const part3 = A.slice(i3, j3 + 1);
  if (part1.toString() !== part2.toString() || part2.toString() !== part3.toString()) {
    return noAns;
  }
  const x = i2 - j1 - 1;
  const y = i3 - j2 - 1;
  const z = n - j3 - 1;
  if (x < z || y < z) {
    return noAns;
  }
  return [j1 + z, j2 + z + 1];
};
// leetcode submit region end(Prohibit modification and deletion)
