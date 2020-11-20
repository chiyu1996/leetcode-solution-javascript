// 给定一个二叉树和一个目标和，找到所有从根节点到叶子节点路径总和等于给定目标和的路径。
//
// 说明: 叶子节点是指没有子节点的节点。
//
// 示例:
// 给定如下二叉树，以及目标和 sum = 22，
//
//               5
//             / \
//            4   8
//           /   / \
//          11  13  4
//         /  \    / \
//        7    2  5   1
//
//
// 返回:
//
// [
//   [5,4,11,2],
//   [5,8,4,5]
// ]
//
// Related Topics 树 深度优先搜索
// 👍 355 👎 0

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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  if (root === null) {
    return [];
  }
  const result = [];
  const numArr = [];

  function testSum(root) {
    if (root === null) {
      const numSum = numArr.reduce((prev, item) => {
        return prev + item;
      }, 0);
      if (numSum === sum) {
        result.push([...numArr]);
      }
      return;
    }
    numArr.push(root.val);
    if (root.left && root.right === null) {
      testSum(root.left);
    } else if (root.left === null && root.right) {
      testSum(root.right);
    } else if (root.left && root.right) {
      testSum(root.left);
      testSum(root.right);
    } else {
      testSum(root.right);
    }
    numArr.pop();
  }

  testSum(root);
  return result;
};
// leetcode submit region end(Prohibit modification and deletion)
