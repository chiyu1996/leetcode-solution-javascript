// 堆箱子。给你一堆n个箱子，箱子宽 wi、深 di、高 hi。箱子不能翻转，将箱子堆起来时，下面箱子的宽度、高度和深度必须大于上面的箱子。实现一种方法，搭出最
// 高的一堆箱子。箱堆的高度为每个箱子高度的总和。
//
// 输入使用数组[wi, di, hi]表示每个箱子。
//
// 示例1:
//
//  输入：box = [[1, 1, 1], [2, 2, 2], [3, 3, 3]]
// 输出：6
//
//
// 示例2:
//
//  输入：box = [[1, 1, 1], [2, 3, 4], [2, 6, 7], [3, 4, 5]]
// 输出：10
//
//
// 提示:
//
//
// 箱子的数目不大于3000个。
//
// Related Topics 动态规划 回溯算法
// 👍 33 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} box
 * @return {number}
 */
var pileBox = function(box) {
  box.sort((a, b) => a[0] - b[0])
  const n = box.length;
  const dp = new Int32Array(n + 1);
  let result = 0;
  for (let i = 0; i < n; i++) {
    dp[i] = box[i][2];
    result = Math.max(result, dp[i]);
    for (let j = 0; j < i; j++) {
      if (box[i][0] > box[j][0] && box[i][1] > box[j][1] && box[i][2] > box[j][2]) {
        dp[i] = Math.max(dp[i], dp[j] + box[i][2]);
        result = Math.max(result, dp[i]);
      }
    }
  }
  return result;
};
// leetcode submit region end(Prohibit modification and deletion)
