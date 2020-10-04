//给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。 
//
// 
//
// 示例： 
//二叉树：[3,9,20,null,null,15,7], 
//
//     3
//   / \
//  9  20
//    /  \
//   15   7
// 
//
// 返回其层次遍历结果： 
//
// [
//  [3],
//  [9,20],
//  [15,7]
//]
// 
// Related Topics 树 广度优先搜索 
// 👍 659 👎 0


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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    const dfs = (root, dep, result) => {
        if (!root) return;
        if (!result[dep]) result[dep] = [];
        result[dep] = [...result[dep], root.val];
        root.left && dfs(root.left, dep + 1, result);
        root.right && dfs(root.right, dep + 1, result);
    };
    if (!root) return [];
    let result = [];
    dfs(root, 0, result);
    return result;
};

//leetcode submit region end(Prohibit modification and deletion)
