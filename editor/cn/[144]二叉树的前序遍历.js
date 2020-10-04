//给定一个二叉树，返回它的 前序 遍历。 
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
//输出: [1,2,3]
// 
//
// 进阶: 递归算法很简单，你可以通过迭代算法完成吗？ 
// Related Topics 栈 树 
// 👍 377 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
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
var preorderTraversal = function (root) {
    if (root === null) return [];
    let ans = [];
    let stack = [root];
    while (stack.length) {
        let root = stack.pop();
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
//leetcode submit region end(Prohibit modification and deletion)
