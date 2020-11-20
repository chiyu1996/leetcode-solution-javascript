// 给定一个二叉树，原地将它展开为一个单链表。
//
//
//
// 例如，给定二叉树
//
//     1
//   / \
//  2   5
// / \   \
// 3   4   6
//
// 将其展开为：
//
// 1
// \
//  2
//   \
//    3
//     \
//      4
//       \
//        5
//         \
//          6
// Related Topics 树 深度优先搜索
// 👍 571 👎 0

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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  if (root === null) return root;
  let prev = null;
  const stack = [root];
  while (stack.length) {
    const cur = stack.pop();
    if (prev !== null) {
      prev.left = null;
      prev.right = cur;
    }
    if (cur.right !== null) {
      stack.push(cur.right);
    }
    if (cur.left !== null) {
      stack.push(cur.left);
    }

    prev = cur;
  }
};
// leetcode submit region end(Prohibit modification and deletion)
