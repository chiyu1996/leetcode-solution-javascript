// 给定一个二叉树，返回它的 后序 遍历。
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
// 输出: [3,2,1]
//
// 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
// Related Topics 栈 树
// 👍 452 👎 0

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
var postorderTraversal = function(root) {
  const ans = [];
  const dfs = (root) => {
    if (root === null) return;
    dfs(root.left);
    dfs(root.right);
    ans.push(root.val);
  };
  dfs(root);
  return ans;
};
// 迭代版
var postorderTraversal = function(root) {
  const ans = [];
  if (root === null) return [];
  const stack = [root];
  while (stack.length) {
    const root = stack.pop();
    ans.push(root.val);
    if (root.left !== null) {
      stack.push(root.left);
    }
    if (root.right !== null) {
      stack.push(root.right);
    }
  }
  return ans.reverse();
};
// mirrors遍历
var postorderTraversal = function(root) {
  const ans = [];
  while (root) {
    if (root.right !== null) {
      let pre = root.right;
      while (pre.left !== null && pre.left !== root) {
        pre = pre.left;
      }
      if (pre.left !== null) {
        pre.left = null;
        root = root.left;
      } else {
        ans.push(root.val);
        pre.left = root;
        root = root.right;
      }
    } else {
      ans.push(root.val);
      root = root.left;
    }
  }
  return ans.reverse();
};
// leetcode submit region end(Prohibit modification and deletion)
