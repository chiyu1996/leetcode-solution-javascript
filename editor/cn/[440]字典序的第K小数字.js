// 给定整数 n 和 k，找到 1 到 n 中字典序第 k 小的数字。
//
// 注意：1 ≤ k ≤ n ≤ 109。
//
// 示例 :
//
//
// 输入:
// n: 13   k: 2
//
// 输出:
// 10
//
// 解释:
// 字典序的排列是 [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9]，所以第二小的数字是 10。
//
// 👍 160 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(n, k) {
  if (k > n) return -1;
  if (k === 1) return 1;
  const getCount = (pre, n) => {
    let count = 0;
    for (let cur = pre, next = cur + 1; cur <= n; cur *= 10, next *= 10) {
      count += Math.min(next, n + 1) - cur;
    }
    return count;
  };
  let p = 1;
  let pre = 1;
  while (p < k) {
    const count = getCount(pre, n);
    if (p + count > k) {
      pre *= 10;
      p++;
    } else {
      pre++;
      p += count;
    }
  }
  return pre;
};
// leetcode submit region end(Prohibit modification and deletion)
