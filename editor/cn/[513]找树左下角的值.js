// 给定一个二叉树，在树的最后一行找到最左边的值。
//
// 示例 1:
//
//
// 输入:
//
//    2
//   / \
//  1   3
//
// 输出:
// 1
//
//
//
//
// 示例 2:
//
//
// 输入:
//
//        1
//       / \
//      2   3
//     /   / \
//    4   5   6
//       /
//      7
//
// 输出:
// 7
//
//
//
//
// 注意: 您可以假设树（即给定的根节点）不为 NULL。
// Related Topics 树 深度优先搜索 广度优先搜索
// 👍 143 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {
  let maxLevel = 1;
  let result = root.val;
  const dfs = (root, level) => {
    if (!root) {
      return;
    }
    if (level > maxLevel) {
      result = root.val;
      maxLevel = level;
    }
    dfs(root.left, level + 1);
    dfs(root.right, level + 1);
  }
  dfs(root, maxLevel);
  return result;
};
// leetcode submit region end(Prohibit modification and deletion)
