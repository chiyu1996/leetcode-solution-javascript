//请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。 
//
// 
//
// 例如: 
//给定二叉树: [3,9,20,null,null,15,7], 
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
//  [20,9],
//  [15,7]
//]
// 
//
// 
//
// 提示： 
//
// 
// 节点总数 <= 1000 
// 
// Related Topics 树 广度优先搜索 
// 👍 48 👎 0


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
    if (root === null) return [];
    let res = [];
    let queue = [root];
    let isReverse = false;
    while (queue.length !== 0) {
        let next = [];
        let val = [];
        for (let i = 0; i < queue.length; i++) {
            let child = queue[i];
            val.push(child.val);
            if (child.left)
                next.push(child.left);
            if (child.right)
                next.push(child.right);
        }
        queue = next;
        res.push((isReverse ? val.reverse() : val));
        isReverse = !isReverse;
    }
    return res;
};
//leetcode submit region end(Prohibit modification and deletion)
