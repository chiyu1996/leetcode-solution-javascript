// 在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序。
//
// 示例 1:
//
// 输入: 4->2->1->3
// 输出: 1->2->3->4
//
//
// 示例 2:
//
// 输入: -1->5->3->4->0
// 输出: -1->0->3->4->5
// Related Topics 排序 链表
// 👍 756 👎 0

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
var sortList = function(head) {
  const middleNode = (head) => {
    let fast = head; let slow = head;
    while (fast && fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  };
  const mergeList = (a, b) => {
    if ((!a) || (!b)) return a || b;
    const head = new ListNode();
    let cur = head;
    let aPtr = a;
    let bPtr = b;
    while (aPtr && bPtr) {
      if (aPtr.val < bPtr.val) {
        cur.next = aPtr;
        aPtr = aPtr.next;
      } else {
        cur.next = bPtr;
        bPtr = bPtr.next;
      }
      cur = cur.next;
    }
    cur.next = aPtr || bPtr;
    return head.next;
  };
  const sort = (head) => {
    if (!head || !head.next) {
      return head;
    }
    const middle = middleNode(head);
    const temp = middle.next;
    middle.next = null;
    let left = head; let right = temp;
    left = sort(left);
    right = sort(right);
    return mergeList(left, right);
  };
  return sort(head);
};

// leetcode submit region end(Prohibit modification and deletion)
