//根据一棵树的前序遍历与中序遍历构造二叉树。 
//
// 注意: 
//你可以假设树中没有重复的元素。 
//
// 例如，给出 
//
// 前序遍历 preorder = [3,9,20,15,7]
//中序遍历 inorder = [9,3,15,20,7] 
//
// 返回如下的二叉树： 
//
//     3
//   / \
//  9  20
//    /  \
//   15   7 
// Related Topics 树 深度优先搜索 数组 
// 👍 703 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    const myBuildTree = (preorder, inorder, preorder_left, preorder_right, inorder_left, inorder_right) => {
        if (preorder_left > preorder_right) {
            return null;
        }
        let preRoot = preorder_left;
        let inRoot = index[preorder[preRoot]];
        let sub_tree_num = inRoot - inorder_left;
        let root = new TreeNode(preorder[preRoot]);
        root.left = myBuildTree(preorder, inorder, preRoot + 1, preRoot + sub_tree_num, inorder_left, inRoot - 1);
        root.right = myBuildTree(preorder, inorder, preRoot + sub_tree_num + 1, preorder_right, inRoot + 1, inorder_right);
        return root;
    };
    let index = {};
    let n = inorder.length;
    for (let i = 0; i < inorder.length; i++) {
        index[inorder[i]] = i;
    }
    return myBuildTree(preorder, inorder, 0, n - 1, 0, n - 1);
};
//leetcode submit region end(Prohibit modification and deletion)
