// 给定一个不为空的二叉搜索树和一个目标值 target，请在该二叉搜索树中找到最接近目标值 target 的数值。
//
// 注意：
//
//
// 给定的目标值 target 是一个浮点数
// 题目保证在该二叉搜索树中只会存在一个最接近目标值的数
//
//
// 示例：
//
// 输入: root = [4,2,5,1,3]，目标值 target = 3.714286
//
//    4
//   / \
//  2   5
// / \
// 1   3
//
// 输出: 4
//
// Related Topics 树 二分查找
// 👍 56 👎 0

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
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
  let closest = root.val
  while (root !== null) {
    const val = root.val;
    closest = Math.abs(val - target) < Math.abs(closest - target) ? val : closest;
    root = val < target ? root.right : root.left;
  }
  return closest;
};
// leetcode submit region end(Prohibit modification and deletion)
