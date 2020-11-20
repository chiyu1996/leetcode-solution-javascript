// 输入两棵二叉树A和B，判断B是不是A的子结构。(约定空树不是任意一个树的子结构)
//
// B是A的子结构， 即 A中有出现和B相同的结构和节点值。
//
// 例如:
// 给定的树 A:
//
// 3
// / \
// 4 5
// / \
// 1 2
// 给定的树 B：
//
// 4
// /
// 1
// 返回 true，因为 B 与 A 的一个子树拥有相同的结构和节点值。
//
// 示例 1：
//
// 输入：A = [1,2,3], B = [3,1]
// 输出：false
//
//
// 示例 2：
//
// 输入：A = [3,4,5,1,2], B = [4,1]
// 输出：true
//
// 限制：
//
// 0 <= 节点个数 <= 10000
// Related Topics 树
// 👍 125 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */

var isSubStructure = function(A, B) {
  if (A === null || B === null) return false;
  const dfs = (pRoot1, pRoot2) => {
    if (pRoot2 === null) return true;
    if (pRoot1 === null) return false;
    if (pRoot1.val === pRoot2.val) {
      return dfs(pRoot1.left, pRoot2.left) && dfs(pRoot1.right, pRoot2.right);
    } else {
      return false;
    }
  };
  return dfs(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);
};
// leetcode submit region end(Prohibit modification and deletion)
