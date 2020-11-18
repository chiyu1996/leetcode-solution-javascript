// 给定一个二叉树，它的每个结点都存放一个 0-9 的数字，每条从根到叶子节点的路径都代表一个数字。
//
// 例如，从根到叶子节点路径 1->2->3 代表数字 123。
//
// 计算从根到叶子节点生成的所有数字之和。
//
// 说明: 叶子节点是指没有子节点的节点。
//
// 示例 1:
//
// 输入: [1,2,3]
//    1
//   / \
//  2   3
// 输出: 25
// 解释:
// 从根到叶子节点路径 1->2 代表数字 12.
// 从根到叶子节点路径 1->3 代表数字 13.
// 因此，数字总和 = 12 + 13 = 25.
//
// 示例 2:
//
// 输入: [4,9,0,5,1]
//    4
//   / \
//  9   0
// / \
// 5   1
// 输出: 1026
// 解释:
// 从根到叶子节点路径 4->9->5 代表数字 495.
// 从根到叶子节点路径 4->9->1 代表数字 491.
// 从根到叶子节点路径 4->0 代表数字 40.
// 因此，数字总和 = 495 + 491 + 40 = 1026.
// Related Topics 树 深度优先搜索
// 👍 201 👎 0

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
 * @return {number}
 */
var sumNumbers = function(root) {
  if (!root) return 0;
  const dfs = (root, sum) => {
    if (root === null) return 0;
    sum = sum * 10 + root.val;
    if (!root.left && !root.right) {
      return sum;
    }
    return dfs(root.left, sum) + dfs(root.right, sum);
  };
  return dfs(root, 0);
};
// leetcode submit region end(Prohibit modification and deletion)
