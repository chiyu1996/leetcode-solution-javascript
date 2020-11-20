// 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
//
// 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
//
//
//
// 示例:
//
// 给定 1->2->3->4, 你应该返回 2->1->4->3.
//
// Related Topics 链表
// 👍 641 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  const ans = new ListNode(-1);
  ans.next = head;
  let pre = ans;
  while (head !== null && head.next !== null) {
    const first = head;
    const second = head.next;
    pre.next = second;
    first.next = second.next;
    second.next = first;
    pre = first;
    head = pre.next;
  }
  return ans.next;
};
// leetcode submit region end(Prohibit modification and deletion)
