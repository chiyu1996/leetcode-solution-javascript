// 给定一个二叉树，返回其节点值的锯齿形层次遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
//
// 例如：
// 给定二叉树 [3,9,20,null,null,15,7],
//
//     3
//   / \
//  9  20
//    /  \
//   15   7
//
//
// 返回锯齿形层次遍历如下：
//
// [
//  [3],
//  [20,9],
//  [15,7]
// ]
//
// Related Topics 栈 树 广度优先搜索
// 👍 273 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
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
var zigzagLevelOrder = function(root) {
  if (!root) return [];
  let level = 1;
  let curRoot = [root];
  const result = [];
  while (curRoot.length) {
    const nextRoot = [];
    const curRootVals = [];
    for (let i = 0; i < curRoot.length; i++) {
      if (level % 2) {
        curRootVals.push(curRoot[i].val);
      } else {
        curRootVals.unshift(curRoot[i].val);
      }
      if (curRoot[i].left) {
        nextRoot.push(curRoot[i].left);
      }
      if (curRoot[i].right) {
        nextRoot.push(curRoot[i].right);
      }
    }
    result.push([...curRootVals]);
    curRoot = nextRoot;
    level++;
  }
  return result;
};
// leetcode submit region end(Prohibit modification and deletion)
