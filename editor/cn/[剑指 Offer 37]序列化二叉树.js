//请实现两个函数，分别用来序列化和反序列化二叉树。 
//
// 示例: 
//
// 你可以将以下二叉树：
//
//    1
//   / \
//  2   3
//     / \
//    4   5
//
//序列化为 "[1,2,3,null,null,4,5]" 
//
// 注意：本题与主站 297 题相同：https://leetcode-cn.com/problems/serialize-and-deserialize-b
//inary-tree/ 
// Related Topics 树 设计 
// 👍 77 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    if (root === null) return "X,";
    let left = serialize(root.left);
    let right = serialize(root.right);
    return root.val + "," + left + right;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    const list = data.split(",");
    const buildTree = (list) => {
        const rootVal = list.shift();
        if (rootVal === "X") {
            return null;
        }
        const root = new TreeNode(rootVal);
        root.left = buildTree(list);
        root.right = buildTree(list);
        return root;
    };
    return buildTree(list);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
//leetcode submit region end(Prohibit modification and deletion)
