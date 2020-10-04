//给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。 
//
// 示例: 
//
// 输入: [1,2,3,null,5,null,4]
//输出: [1, 3, 4]
//解释:
//
//   1            <---
// /   \
//2     3         <---
// \     \
//  5     4       <---
// 
// Related Topics 树 深度优先搜索 广度优先搜索 
// 👍 330 👎 0


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
 * @return {number[]}
 */
var rightSideView = function (root) {
    const dfs = (root, step, res) => {
        if (root) {
            if (res.length === step) {
                res.push(root.val);           // 当数组长度等于当前 深度 时, 把当前的值加入数组
            }
            dfs(root.right, step + 1, res); // 先从右边开始, 当右边没了, 再轮到左边
            dfs(root.left, step + 1, res);
        }
    };
    if (!root) return [];
    let arr = [];
    dfs(root, 0, arr);
    return arr;
};

//leetcode submit region end(Prohibit modification and deletion)
