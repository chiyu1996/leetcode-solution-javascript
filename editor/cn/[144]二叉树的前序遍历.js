// 给定一个二叉树，返回它的 前序 遍历。
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
// 输出: [1,2,3]
//
//
// 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
// Related Topics 栈 树
// 👍 377 👎 0

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
// 递归版
var preorderTraversal = function(root) {
  const ans = [];
  const dfs = (root) => {
    if (root === null) return;
    ans.push(root.val);
    dfs(root.left);
    dfs(root.right);
  };
  dfs(root);
  return ans;
};
// 迭代版
var preorderTraversal = function(root) {
  if (root === null) return [];
  const ans = [];
  const stack = [root];
  while (stack.length) {
    const root = stack.pop();
    ans.push(root.val);
    if (root.right !== null) {
      stack.push(root.right);
    }
    if (root.left !== null) {
      stack.push(root.left);
    }
  }
  return ans;
};
// mirror遍历
var preorderTraversal = function(root) {
  const ans = [];
  while (root) {
    if (root.left !== null) {
      let pre = root.left;
      while (pre.right !== null && pre.right !== root) {
        pre = pre.right;
      }
      if (pre.right === root) {
        pre.right = null;
        ans.push(root.val);
        root = root.right;
      } else {
        pre.right = root;

        root = root.left;
      }
    } else {
      ans.push(root.val);
      root = root.right;
    }
  }
  return ans;
};
// leetcode submit region end(Prohibit modification and deletion)
