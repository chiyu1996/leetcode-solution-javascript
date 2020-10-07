//二叉搜索树中的两个节点被错误地交换。 
//
// 请在不改变其结构的情况下，恢复这棵树。 
//
// 示例 1: 
//
// 输入: [1,3,null,null,2]
//
//   1
//  /
// 3
//  \
//   2
//
//输出: [3,1,null,null,2]
//
//   3
//  /
// 1
//  \
//   2
// 
//
// 示例 2: 
//
// 输入: [3,1,4,null,null,2]
//
//  3
// / \
//1   4
//   /
//  2
//
//输出: [2,1,4,null,null,3]
//
//  2
// / \
//1   4
//   /
//  3 
//
// 进阶: 
//
// 
// 使用 O(n) 空间复杂度的解法很容易实现。 
// 你能想出一个只使用常数空间的解决方案吗？ 
// 
// Related Topics 树 深度优先搜索 
// 👍 352 👎 0


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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
    const swap = (a, b) => {
        [a.val, b.val] = [b.val, a.val];
    };
    const mirrors = (root) => {
        let x = null, y = null, pre = null, pred = null;
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
                    if (pred !== null && pred.val > root.val) {
                        y = root;
                        if (x === null) {
                            x = pred;
                        }
                    }
                    pred = root;
                    pre.right = null;
                    root = root.right;
                }
            } else {
                if (pred !== null && pred.val > root.val) {
                    y = root;
                    if (x === null) {
                        x = pred;
                    }
                }
                pred = root;
                root = root.right;
            }
        }
        swap(x, y);
    };
    mirrors(root);
    return root;
};
//leetcode submit region end(Prohibit modification and deletion)
