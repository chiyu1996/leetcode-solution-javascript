// 给出一个完全二叉树，求出该树的节点个数。
//
// 说明：
//
// 完全二叉树的定义如下：在完全二叉树中，除了最底层节点可能没填满外，其余每层节点数都达到最大值，并且最下面一层的节点都集中在该层最左边的若干位置。若最底层为
// 第 h 层，则该层包含 1~ 2h 个节点。
//
// 示例:
//
// 输入:
//    1
//   / \
//  2   3
// / \  /
// 4  5 6
//
// 输出: 6
// Related Topics 树 二分查找
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
 * @return {number}
 */
var countNodes = function(root) {
  if (!root) {
    return 0;
  }
  let h = 0;
  let node = root;
  while (node.left) {
    h++;
    node = node.left;
  }
  const exit = (k) => {
    let node = root;
    let bits = 1 << (h - 1);
    while (node !== null && bits > 0) {
      if ((bits & k) === 0) {
        node = node.left;
      } else {
        node = node.right;
      }
      bits = bits >> 1;
    }
    return node !== null;
  }
  let left = 1 << h; let right = (1 << (h + 1)) - 1;
  while (left < right) {
    const mid = (right - left + 1) / 2 + left;
    if (exit(mid)) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }
  return left;
};
// leetcode submit region end(Prohibit modification and deletion)
