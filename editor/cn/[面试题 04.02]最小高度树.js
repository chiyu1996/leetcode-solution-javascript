//给定一个有序整数数组，元素各不相同且按升序排列，编写一个算法，创建一棵高度最小的二叉搜索树。示例: 给定有序数组: [-10,-3,0,5,9], 一个可能
//的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：           0          / \        -3 
//  9        /   /      -10  5 Related Topics 树 深度优先搜索 
// 👍 57 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    const helper = (nums, low, high) => {
        if (low > high) {
            return null;
        }

        let mid = (high + low) >> 1;
        let root = new TreeNode(nums[mid]);
        root.left = helper(nums, low, mid - 1);
        root.right = helper(nums, mid + 1, high);
        return root;
    };
    return helper(nums, 0, nums.length - 1);
};
//leetcode submit region end(Prohibit modification and deletion)
