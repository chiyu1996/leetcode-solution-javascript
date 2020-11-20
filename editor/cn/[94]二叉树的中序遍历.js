// 给定一个二叉树，返回它的中序 遍历。
//
// 示例:
//
// 输入: [1,null,2,3]
//   1
//    \
//     2
//    /
//   3
//
// 输出: [1,3,2]
//
// 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
// Related Topics 栈 树 哈希表
// 👍 735 👎 0

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
 * @return {number[]}
 */

// 迭代版
var inorderTraversal = function(root) {
  const ans = [];
  const stack = [];
  while (root || stack.length) {
    while (root != null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    ans.push(root.val);
    root = root.right;
  }
  return ans;
};
// 递归版
var inorderTraversal = function(root) {
  const ans = [];
  const dfs = (root) => {
    root.left && dfs(root.left);
    ans.push(root.val);
    root.right && dfs(root.right);
  };
  root && dfs(root);
  return ans;
};
// mirrors遍历
var inorderTraversal = function(root) {
  const ans = [];
  let pre = null;
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
        ans.push(root.val);
        pre.right = null;
        root = root.right;
      }
    } else {
      ans.push(root.val);
      root = root.right;
    }
  }
  return ans;
};
// leetcode submit region end(Prohibit modification and deletion)
