// 给定一个链表和一个特定值 x，对链表进行分隔，使得所有小于 x 的节点都在大于或等于 x 的节点之前。
//
// 你应当保留两个分区中每个节点的初始相对位置。
//
//
//
// 示例:
//
// 输入: head = 1->4->3->2->5->2, x = 3
// 输出: 1->2->2->4->3->5
//
// Related Topics 链表 双指针
// 👍 279 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  const after_head = new ListNode();
  let after = after_head;
  const before_head = new ListNode();
  let before = before_head;
  while (head) {
    if (head.val >= x) {
      after.next = head;
      after = after.next;
    } else {
      before.next = head;
      before = before.next;
    }
    head = head.next;
  }
  after.next = null;
  before.next = after_head.next;
  return before_head.next;
};
// leetcode submit region end(Prohibit modification and deletion)
