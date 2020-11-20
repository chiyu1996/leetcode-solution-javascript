// 给定一个整数 n，求以 1 ... n 为节点组成的二叉搜索树有多少种？
//
// 示例:
//
// 输入: 3
// 输出: 5
// 解释:
// 给定 n = 3, 一共有 5 种不同结构的二叉搜索树:
//
//   1         3     3      2      1
//    \       /     /      / \      \
//     3     2     1      1   3      2
//    /     /       \                 \
//   2     1         2                 3
// Related Topics 树 动态规划
// 👍 841 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  let C = 1;
  for (let i = 0; i < n; i++) {
    C *= 2 * (2 * i + 1) / (i + 2);
  }
  return C;
};
// leetcode submit region end(Prohibit modification and deletion)
