// 给你一棵二叉树，请按以下要求的顺序收集它的全部节点：
//
//
// 依次从左到右，每次收集并删除所有的叶子节点
// 重复如上过程直到整棵树为空
//
//
//
//
// 示例:
//
// 输入: [1,2,3,4,5]
//
//          1
//         / \
//        2   3
//       / \
//      4   5
//
// 输出: [[4,5,3],[2],[1]]
//
//
//
//
// 解释:
//
// 1. 删除叶子节点 [4,5,3] ，得到如下树结构：
//
//           1
//         /
//        2
//
//
//
//
// 2. 现在删去叶子节点 [2] ，得到如下树结构：
//
//           1
//
//
//
//
// 3. 现在删去叶子节点 [1] ，得到空树：
//
//           []
//
// Related Topics 树 深度优先搜索
// 👍 81 👎 0

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
 * @return {number[][]}
 */
var findLeaves = function(root) {
  const ans = [];
  const dfs = (root, list) => {
    if (!root) {
      return root;
    }
    if (!root.left && !root.right) {
      list.push(root.val);
      return null;
    }
    root.left = dfs(root.left, list);
    root.right = dfs(root.right, list);

    return root;
  }
  while (root) {
    const list = [];
    root = dfs(root, list);
    ans.push(list);
  }
  return ans;
};
// leetcode submit region end(Prohibit modification and deletion)
