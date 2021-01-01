// 给定一个二叉树，我们称从根节点到任意叶节点的任意路径中的节点值所构成的序列为该二叉树的一个 “有效序列” 。检查一个给定的序列是否是给定二叉树的一个 “有效
// 序列” 。
//
// 我们以整数数组 arr 的形式给出这个序列。从根节点到任意叶节点的任意路径中的节点值所构成的序列都是这个二叉树的 “有效序列” 。
//
//
//
// 示例 1：
//
//
//
//
// 输入：root = [0,1,0,0,1,0,null,null,1,0,0], arr = [0,1,0,1]
// 输出：true
// 解释：
// 路径 0 -> 1 -> 0 -> 1 是一个“有效序列”（图中的绿色节点）。
// 其他的“有效序列”是：
// 0 -> 1 -> 1 -> 0
// 0 -> 0 -> 0
//
//
// 示例 2：
//
//
//
//
// 输入：root = [0,1,0,0,1,0,null,null,1,0,0], arr = [0,0,1]
// 输出：false
// 解释：路径 0 -> 0 -> 1 不存在，所以这不是一个“序列”。
//
//
// 示例 3：
//
//
//
//
// 输入：root = [0,1,0,0,1,0,null,null,1,0,0], arr = [0,1,1]
// 输出：false
// 解释：路径 0 -> 1 -> 1 是一个序列，但不是一个“有效序列”（译者注：因为序列的终点不是叶节点）。
//
//
//
//
// 提示：
//
//
// 1 <= arr.length <= 5000
// 0 <= arr[i] <= 9
// 每个节点的值的取值范围是 [0 - 9]
//
// Related Topics 树
// 👍 4 👎 0

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
 * @param {number[]} arr
 * @return {boolean}
 */
var isValidSequence = function(root, arr) {
  const dfs = (root, index) => {
    if (!root) {
      return false;
    }
    if (root.val !== arr[index]) {
      return false;
    }
    if (!root.left && !root.right) {
      return index + 1 === arr.length;
    }
    return dfs(root.left, index + 1) || dfs(root.right, index + 1);
  }
  return dfs(root, 0);
};
// leetcode submit region end(Prohibit modification and deletion)
