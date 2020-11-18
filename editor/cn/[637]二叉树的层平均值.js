// 给定一个非空二叉树, 返回一个由每层节点平均值组成的数组。
//
//
//
// 示例 1：
//
// 输入：
//    3
//   / \
//  9  20
//    /  \
//   15   7
// 输出：[3, 14.5, 11]
// 解释：
// 第 0 层的平均值是 3 ,  第1层是 14.5 , 第2层是 11 。因此返回 [3, 14.5, 11] 。
//
//
//
//
// 提示：
//
//
// 节点值的范围在32位有符号整数范围内。
//
// Related Topics 树
// 👍 199 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  const sums = [];
  const counts = [];
  const dfs = (root, depth) => {
    if (!root) return;
    if (depth < sums.length) {
      sums[depth] = (sums[depth] || 0) + root.val;
      counts[depth] = counts[depth] + 1;
    } else {
      sums.push(root.val);
      counts.push(1);
    }
    dfs(root.left, depth + 1);
    dfs(root.right, depth + 1);
  };

  dfs(root, 0);
  const ans = [];
  for (let i = 0; i < sums.length; i++) {
    ans.push(sums[i] / counts[i]);
  }
  return ans;
};
// leetcode submit region end(Prohibit modification and deletion)
