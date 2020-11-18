// 给定一个 N 叉树，返回其节点值的前序遍历。
//
// 例如，给定一个 3叉树 :
//
//
//
//
//
//
//
// 返回其前序遍历: [1,3,5,6,2,4]。
//
//
//
// 说明: 递归法很简单，你可以使用迭代法完成此题吗? Related Topics 树
// 👍 107 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */

// 迭代版
var preorder = function(root) {
  const ans = [];
  if (root == null) {
    return ans;
  }
  const stack = [];
  stack.push(root);
  while (stack.length) {
    const node = stack.pop();
    ans.push(node.val);
    node.children.reverse();
    for (const item of node.children) {
      stack.push(item);
    }
  }
  return ans;
};
// 递归版
// var preorder = function (root) {
//     let ans = [];
//     const dfs = (root) => {
//         if (root === null) return;
//         ans.push(root.val);
//         for (let item of root.children) {
//             dfs(item);
//         }
//
//     };
//     dfs(root);
//     return ans;
// };
// leetcode submit region end(Prohibit modification and deletion)
