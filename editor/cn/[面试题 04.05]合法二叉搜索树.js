// 实现一个函数，检查一棵二叉树是否为二叉搜索树。示例 1: 输入:     2    / \   1   3 输出: true 示例 2: 输入:     5
//    / \   1   4      / \     3   6 输出: false 解释: 输入为: [5,1,4,null,null,3,6]。
//  根节点的值为 5 ，但是其右子节点值为 4 。 Related Topics 树 深度优先搜索
// 👍 40 👎 0

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
var isValidBST = function(root) {
  const dfs = (root, lower, upper) => {
    if (root === null) return true;
    return !(root.val <= lower || root.val >= upper) && dfs(root.left, lower, root.val) && dfs(root.right, root.val, upper);
  }
  return dfs(root, -Infinity, Infinity);
};
// leetcode submit region end(Prohibit modification and deletion)
