// 从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。
//
//
//
// 例如:
// 给定二叉树: [3,9,20,null,null,15,7],
//
//     3
//   / \
//  9  20
//    /  \
//   15   7
//
//
// 返回其层次遍历结果：
//
// [
//  [3],
//  [9,20],
//  [15,7]
// ]
//
//
//
//
// 提示：
//
//
// 节点总数 <= 1000
//
//
// 注意：本题与主站 102 题相同：https://leetcode-cn.com/problems/binary-tree-level-order-tra
// versal/
// Related Topics 树 广度优先搜索
// 👍 55 👎 0

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
var levelOrder = function(root) {
  if (root === null) return [];
  const res = [];
  let queue = [root];
  while (queue.length !== 0) {
    const next = [];
    const val = [];
    for (let i = 0; i < queue.length; i++) {
      const child = queue[i];
      val.push(child.val);
      if (child.left) { next.push(child.left); }
      if (child.right) { next.push(child.right); }
    }
    queue = next;
    res.push(val);
  }
  return res;
};
// leetcode submit region end(Prohibit modification and deletion)
