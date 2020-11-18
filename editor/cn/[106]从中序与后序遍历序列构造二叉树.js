// 根据一棵树的中序遍历与后序遍历构造二叉树。
//
// 注意:
// 你可以假设树中没有重复的元素。
//
// 例如，给出
//
// 中序遍历 inorder = [9,3,15,20,7]
// 后序遍历 postorder = [9,15,7,20,3]
//
// 返回如下的二叉树：
//
//     3
//   / \
//  9  20
//    /  \
//   15   7
//
// Related Topics 树 深度优先搜索 数组
// 👍 381 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  const myBuildTree = (postorder, inorder, postorder_left, postorder_right, inorder_left, inorder_right) => {
    if (postorder_left > postorder_right) {
      return null;
    }
    const postRoot = postorder_right;
    const inRoot = index[postorder[postRoot]];
    const sub_tree_num = inRoot - inorder_left;
    const root = new TreeNode(postorder[postRoot]);
    root.left = myBuildTree(postorder, inorder, postorder_left, postorder_left + sub_tree_num - 1, inorder_left, inRoot - 1);
    root.right = myBuildTree(postorder, inorder, postorder_left + sub_tree_num, postorder_right - 1, inRoot + 1, inorder_right);
    return root;
  };
  const index = {};
  const n = inorder.length;
  for (let i = 0; i < inorder.length; i++) {
    index[inorder[i]] = i;
  }
  return myBuildTree(postorder, inorder, 0, n - 1, 0, n - 1);
};
// leetcode submit region end(Prohibit modification and deletion)
