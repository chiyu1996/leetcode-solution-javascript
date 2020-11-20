// 给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
//
// 例如：
// 给定二叉树 [3,9,20,null,null,15,7],
//
//     3
//   / \
//  9  20
//    /  \
//   15   7
//
//
// 返回其自底向上的层次遍历为：
//
// [
//  [15,7],
//  [9,20],
//  [3]
// ]
//
// Related Topics 树 广度优先搜索
// 👍 342 👎 0

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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  const list = [];
  if (!root) return list;
  const queue = [root];
  while (queue.length) {
    const level = [];
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const top = queue.shift();
      level.push(top.val);
      if (top.left) {
        queue.push(top.left);
      }
      if (top.right) {
        queue.push(top.right);
      }
    }
    list.push(level);
  }
  return list.reverse();
};
// leetcode submit region end(Prohibit modification and deletion)
