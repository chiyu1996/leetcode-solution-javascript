// 给定一个整数数组，你需要验证它是否是一个二叉搜索树正确的先序遍历序列。
//
// 你可以假定该序列中的数都是不相同的。
//
// 参考以下这颗二叉搜索树：
//
//      5
//    / \
//   2   6
//  / \
// 1   3
//
// 示例 1：
//
// 输入: [5,2,6,1,3]
// 输出: false
//
// 示例 2：
//
// 输入: [5,2,1,3,6]
// 输出: true
//
// 进阶挑战：
//
// 您能否使用恒定的空间复杂度来完成此题？
// Related Topics 栈 树
// 👍 68 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} preorder
 * @return {boolean}
 */
var verifyPreorder = function(preorder) {
  if (preorder.length === 0) {
    return true;
  }
  const stack = [];
  let root = -Infinity;
  for (const val of preorder) {
    if (val < root) {
      return false;
    }
    while (stack.length && stack[stack.length - 1] < val) {
      root = stack.pop();
    }
    stack.push(val);
  }
  return true
};
// leetcode submit region end(Prohibit modification and deletion)
