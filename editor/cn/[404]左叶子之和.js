//计算给定二叉树的所有左叶子之和。 
//
// 示例： 
//
// 
//    3
//   / \
//  9  20
//    /  \
//   15   7
//
//在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24 
//
// 
// Related Topics 树 
// 👍 241 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
    let ans = 0;
    const dfs = (root, isLeft) => {
        if (root === null) return;
        if (isLeft && root.left === null && root.right === null) {
            ans += root.val;
        }
        dfs(root.left, true);
        dfs(root.right, false);
    };
    dfs(root, false);
    return ans;
};
//leetcode submit region end(Prohibit modification and deletion)
