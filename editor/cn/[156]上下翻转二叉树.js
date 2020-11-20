// 给定一个二叉树，其中所有的右节点要么是具有兄弟节点（拥有相同父节点的左节点）的叶节点，要么为空，将此二叉树上下翻转并将它变成一棵树， 原来的右节点将转换成左
// 叶节点。返回新的根。
//
// 例子:
//
// 输入: [1,2,3,4,5]
//
//    1
//   / \
//  2   3
// / \
// 4   5
//
// 输出: 返回二叉树的根 [4,5,2,#,#,3,1]
//
//   4
//  / \
// 5   2
//    / \
//   3   1
//
//
// 说明:
//
// 对 [4,5,2,#,#,3,1] 感到困惑? 下面详细介绍请查看 二叉树是如何被序列化的。
//
// 二叉树的序列化遵循层次遍历规则，当没有节点存在时，'#' 表示路径终止符。
//
// 这里有一个例子:
//
//    1
//  / \
// 2   3
//    /
//   4
//    \
//     5
//
//
// 上面的二叉树则被序列化为 [1,2,3,#,#,4,#,#,5].
// Related Topics 树
// 👍 49 👎 0

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
var upsideDownBinaryTree = function(root) {
  if (root === null || (root.left === null && root.right === null)) {
    return root;
  }
  const newRoot = upsideDownBinaryTree(root.left);
  root.left.left = root.right;
  root.left.right = root;
  root.left = null;
  root.right = null;
  return newRoot;
};
// leetcode submit region end(Prohibit modification and deletion)
