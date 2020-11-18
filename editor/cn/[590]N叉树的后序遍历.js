// 给定一个 N 叉树，返回其节点值的后序遍历。
//
// 例如，给定一个 3叉树 :
//
//
//
//
//
//
//
// 返回其后序遍历: [5,6,3,2,4,1].
//
//
//
// 说明: 递归法很简单，你可以使用迭代法完成此题吗? Related Topics 树
// 👍 103 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
// 迭代版
var postorder = function(root) {
  const ans = [];
  if (root == null) {
    return ans;
  }
  const stack = [];
  stack.push(root);
  while (stack.length) {
    const node = stack.pop();
    ans.push(node.val);
    for (const item of node.children) {
      stack.push(item);
    }
  }
  return ans.reverse();
};
// 递归版
// var postorder = function (root) {
//     let ans = [];
//     const dfs = (root) => {
//         if (root === null) return;
//         for (let item of root.children) {
//             dfs(item);
//         }
//         ans.push(root.val);
//     };
//     dfs(root);
//     return ans;
// };
// leetcode submit region end(Prohibit modification and deletion)
