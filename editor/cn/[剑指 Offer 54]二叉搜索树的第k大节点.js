// 给定一棵二叉搜索树，请找出其中第k大的节点。
//
//
//
// 示例 1:
//
// 输入: root = [3,1,4,null,2], k = 1
//   3
//  / \
// 1   4
//  \
//   2
// 输出: 4
//
// 示例 2:
//
// 输入: root = [5,3,6,2,4,null,null,1], k = 3
//       5
//      / \
//     3   6
//    / \
//   2   4
//  /
// 1
// 输出: 4
//
//
//
// 限制：
//
// 1 ≤ k ≤ 二叉搜索树元素个数
// Related Topics 树
// 👍 69 👎 0

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
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
  let ans;
  const dfs = (root) => {
    if (!root) return;
    dfs(root.right);
    if (k === 0) return;
    k--;
    if (k === 0) return ans = root.val;
    dfs(root.left);
  };
  dfs(root);
  return ans;
};
// leetcode submit region end(Prohibit modification and deletion)
