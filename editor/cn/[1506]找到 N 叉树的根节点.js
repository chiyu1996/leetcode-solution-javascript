// 给定一棵 N 叉树 的所有节点在一个数组 Node[] tree 中，树中每个节点都有唯一的值。
//
// 找到并返回 N 叉树的根节点。
//
//
//
// N 叉树的输入序列为其层序遍历序列，每组子节点用 null 分隔（见示例）。
//
//
//
// 上图中的 N 叉树的序列化描述为 [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,
// null,12,null,13,null,null,14] 。
//
// 进阶：你可以使用 O(1) 额外内存空间找到该树的根节点吗？
//
// 备注：
//
//
// 下列输入仅用于测试。
// 你会以任意顺序接收到 N 叉树全部节点的列表。
//
//
//
//
// 示例 1：
//
//
//
//
// 输入：[1,null,3,2,4,null,5,6]
// 输出：[1,null,3,2,4,null,5,6]
//
//
// 示例 2：
//
//
//
//
// 输入：[1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13
//, null,null,14]
// 输出：[1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13
//, null,null,14]
//
//
//
//
// 提示：
//
//
// 节点的总个数在 [1, 5*10^4] 之间。
// 每个节点都有唯一的值。
//
// 👍 6 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {Node[]} tree
 * @return {Node}
 */
var findRoot = function(tree) {
  let ans = 0;
  for (const node of tree) {
    ans ^= node.val;
    for (const child of node.children) {
      ans ^= child.val;
    }
  }
  for (const node of tree) {
    if (node.val === ans) { return node; }
  }
  return null;
};
// leetcode submit region end(Prohibit modification and deletion)
