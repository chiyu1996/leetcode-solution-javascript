// 给定一个单链表 L：L0→L1→…→Ln-1→Ln ，
// 将其重新排列后变为： L0→Ln→L1→Ln-1→L2→Ln-2→…
//
// 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
//
// 示例 1:
//
// 给定链表 1->2->3->4, 重新排列为 1->4->2->3.
//
// 示例 2:
//
// 给定链表 1->2->3->4->5, 重新排列为 1->5->2->4->3.
// Related Topics 链表
// 👍 430 👎 0

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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  if (!head) return null;
  const merge = (l1, l2) => {
    let l1_tmp, l2_tmp;
    while (l1 && l2) {
      l1_tmp = l1.next;
      l2_tmp = l2.next;
      l1.next = l2;
      l1 = l1_tmp;
      l2.next = l1;
      l2 = l2_tmp;
    }
  };
  const reverse = (head) => {
    let pre;
    let cur = head;
    while (cur) {
      const next = cur.next;
      cur.next = pre;
      pre = cur;
      cur = next;
    }
    return pre;
  };
  const getMid = (head) => {
    let fast = head;
    let slow = head;
    while (slow.next && fast.next && fast.next.next) {
      fast = fast.next.next;
      slow = slow.next;
    }
    return slow;
  };
  const l1 = head;
  const mid = getMid(head);
  let l2 = mid.next;
  mid.next = null;
  l2 = reverse(l2);
  merge(l1, l2);
  return l1;
};
// leetcode submit region end(Prohibit modification and deletion)
