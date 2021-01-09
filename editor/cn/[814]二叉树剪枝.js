// 给定二叉树根结点 root ，此外树的每个结点的值要么是 0，要么是 1。
//
// 返回移除了所有不包含 1 的子树的原二叉树。
//
// ( 节点 X 的子树为 X 本身，以及所有 X 的后代。)
//
//
// 示例1:
// 输入: [1,null,0,0,1]
// 输出: [1,null,0,null,1]
//
// 解释:
// 只有红色节点满足条件“所有不包含 1 的子树”。
// 右图为返回的答案。
//
//
//
//
//
// 示例2:
// 输入: [1,0,1,0,0,0,1]
// 输出: [1,null,1,null,1]
//
//
//
//
//
//
// 示例3:
// 输入: [1,1,0,1,1,0,1,0]
// 输出: [1,1,0,1,1,null,1]
//
//
//
//
//
// 说明:
//
//
// 给定的二叉树最多有 100 个节点。
// 每个节点的值只会为 0 或 1 。
//
// Related Topics 树
// 👍 132 👎 0

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
 * @return {TreeNode}
 */
var pruneTree = function(root) {
  if (!root) {
    return root;
  }
  const leftOne = pruneTree(root.left);
  const rightOne = pruneTree(root.right);
  if (!leftOne) {
    root.left = null;
  }
  if (!rightOne) {
    root.right = null;
  }
  if (root.val === 0 && root.left === null && root.right === null) {
    return null;
  }
  return root;
};
// leetcode submit region end(Prohibit modification and deletion)
