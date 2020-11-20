// 给定一个单链表，其中的元素按升序排序，将其转换为高度平衡的二叉搜索树。
//
// 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
//
// 示例:
//
// 给定的有序链表： [-10, -3, 0, 5, 9],
//
// 一个可能的答案是：[0, -3, 9, -10, null, 5], 它可以表示下面这个高度平衡二叉搜索树：
//
//      0
//     / \
//   -3   9
//   /   /
// -10  5
//
// Related Topics 深度优先搜索 链表
// 👍 386 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  const getBSTLen = (head) => {
    let count = 0;
    while (head) {
      count++;
      head = head.next;
    }
    return count;
  };
  const helper = (left, right) => {
    if (left > right) return null;
    const mid = (left + right) >>> 1;
    const root = new TreeNode();
    root.left = helper(left, mid - 1);
    root.val = ptr.val;
    ptr = ptr.next;
    root.right = helper(mid + 1, right);
    return root;
  };
  let ptr = head;
  const len = getBSTLen(head);
  return helper(0, len - 1);
};
// leetcode submit region end(Prohibit modification and deletion)
