// 实现一个函数，检查二叉树是否平衡。在这个问题中，平衡树的定义如下：任意一个节点，其两棵子树的高度差不超过 1。 示例 1: 给定二叉树 [3,9,20,nu
// ll,null,15,7]     3    / \   9  20     /  \    15   7 返回 true 。示例 2: 给定二叉树 [1,2,
// 2,3,3,null,null,4,4]       1      / \     2   2    / \   3   3  / \ 4   4 返回 fal
// se 。 Related Topics 树 深度优先搜索
// 👍 39 👎 0

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
 * @return {boolean}
 */
var isBalanced = function(root) {
  return getHeight(root) >= 0;
};
function getHeight(root) {
  if (!root) {
    return 0;
  }
  const leftHeight = getHeight(root.left);
  const rightHeight = getHeight(root.right);
  if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
    return -1;
  } else {
    return Math.max(leftHeight, rightHeight) + 1;
  }
}
// leetcode submit region end(Prohibit modification and deletion)
