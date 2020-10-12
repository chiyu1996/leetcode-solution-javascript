//给你一棵所有节点为非负值的二叉搜索树，请你计算树中任意两节点的差的绝对值的最小值。 
//
// 
//
// 示例： 
//
// 输入：
//
//   1
//    \
//     3
//    /
//   2
//
//输出：
//1
//
//解释：
//最小绝对差为 1，其中 2 和 1 的差的绝对值为 1（或者 2 和 3）。
// 
//
// 
//
// 提示： 
//
// 
// 树中至少有 2 个节点。 
// 本题与 783 https://leetcode-cn.com/problems/minimum-distance-between-bst-nodes/ 
//相同 
// 
// Related Topics 树 
// 👍 168 👎 0


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
var getMinimumDifference = function (root) {
    let pre;
    let ans = Infinity;
    let preVal = Infinity;
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
                ans = Math.min(ans, Math.abs(root.val - preVal));
                preVal = root.val;
                pre.right = null;
                root = root.right;
            }
        } else {
            ans = Math.min(ans, Math.abs(root.val - preVal));
            preVal = root.val;
            root = root.right;
        }
    }
    return ans;
};
//leetcode submit region end(Prohibit modification and deletion)
