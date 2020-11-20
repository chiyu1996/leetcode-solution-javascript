// 给定一个有相同值的二叉搜索树（BST），找出 BST 中的所有众数（出现频率最高的元素）。
//
// 假定 BST 有如下定义：
//
//
// 结点左子树中所含结点的值小于等于当前结点的值
// 结点右子树中所含结点的值大于等于当前结点的值
// 左子树和右子树都是二叉搜索树
//
//
// 例如：
// 给定 BST [1,null,2,2],
//
//    1
//    \
//     2
//    /
//   2
//
//
// 返回[2].
//
// 提示：如果众数超过1个，不需考虑输出顺序
//
// 进阶：你可以不使用额外的空间吗？（假设由递归产生的隐式调用栈的开销不被计算在内）
// Related Topics 树
// 👍 221 👎 0

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
 * @return {number[]}
 */
var findMode = function(root) {
  if (!root) return [];
  let max = 0;
  let num = 0;
  let count = 0;
  let ans = [];
  const update = (val) => {
    if (val === num) {
      count++;
    } else {
      num = val;
      count = 1;
    }
    if (count === max) {
      ans.push(val);
    } else if (count > max) {
      max = count;
      ans = [val];
    }
  };
  let cur = root;
  while (cur) {
    if (cur.left === null) {
      update(cur.val);
      cur = cur.right;
      continue;
    }
    let pre = cur.left;
    while (pre.right !== null && pre.right !== cur) {
      pre = pre.right;
    }
    if (pre.right === null) {
      pre.right = cur;
      cur = cur.left;
    } else {
      pre.right = null;
      update(cur.val);
      cur = cur.right;
    }
  }
  return ans;
};
// leetcode submit region end(Prohibit modification and deletion)
