// 给定一个二叉搜索树的根节点 root，返回树中任意两节点的差的最小值。
//
//
//
// 示例：
//
// 输入: root = [4,2,6,1,3,null,null]
// 输出: 1
// 解释:
// 注意，root是树节点对象(TreeNode object)，而不是数组。
//
// 给定的树 [4,2,6,1,3,null,null] 可表示为下图:
//
//          4
//        /   \
//      2      6
//     / \
//    1   3
//
// 最小的差值是 1, 它是节点1和节点2的差值, 也是节点3和节点2的差值。
//
//
//
// 注意：
//
//
// 二叉树的大小范围在 2 到 100。
// 二叉树总是有效的，每个节点的值都是整数，且不重复。
// 本题与 530：https://leetcode-cn.com/problems/minimum-absolute-difference-in-bst/
// 相同
//
// Related Topics 树 递归
// 👍 88 👎 0

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
var minDiffInBST = function(root) {
  let pre;
  let ans = Infinity;
  let preVal = Infinity;
  while (root) {
    if (root.left) {
      pre = root.left;
      while (pre.right && pre.right !== root) {
        pre = pre.right;
      }
      if (!pre.right) {
        pre.right = root;
        root = root.left;
      } else {
        ans = Math.min(ans, Math.abs(root.val - preVal));
        preVal = root.val;
        pre.right = null;
        root = root.right;
      }
    } else {
      ans = Math.min(ans, Math.abs(root.val - preVal));
      preVal = root.val;
      root = root.right;
    }
  }
  return ans;
};
// leetcode submit region end(Prohibit modification and deletion)
