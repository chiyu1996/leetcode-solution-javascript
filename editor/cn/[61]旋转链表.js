// 给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。
//
// 示例 1:
//
// 输入: 1->2->3->4->5->NULL, k = 2
// 输出: 4->5->1->2->3->NULL
// 解释:
// 向右旋转 1 步: 5->1->2->3->4->NULL
// 向右旋转 2 步: 4->5->1->2->3->NULL
//
//
// 示例 2:
//
// 输入: 0->1->2->NULL, k = 4
// 输出: 2->0->1->NULL
// 解释:
// 向右旋转 1 步: 2->0->1->NULL
// 向右旋转 2 步: 1->2->0->NULL
// 向右旋转 3 步: 0->1->2->NULL
// 向右旋转 4 步: 2->0->1->NULL
// Related Topics 链表 双指针
// 👍 360 👎 0

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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (!head || !head.next || !k) return head;
  const first = head;
  let len = 1;
  for (; head.next !== null; len++) {
    head = head.next;
  }
  head.next = first;
  let tail = first;
  for (let i = 0; i < len - k % len - 1; i++) {
    tail = tail.next;
  }
  const newHead = tail.next;
  tail.next = null;
  return newHead;
};
// leetcode submit region end(Prohibit modification and deletion)
