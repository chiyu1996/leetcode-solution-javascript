// 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
//
// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
//
// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
//
// 示例：
//
// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807
//
// Related Topics 链表 数学
// 👍 5026 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let p1 = l1;
  let p2 = l2;
  // eslint-disable-next-line no-undef
  const ans = new ListNode();
  let pointer = ans;
  let carry = 0;
  while (p1 || p2 || carry) {
    const num1 = p1 ? p1.val : 0;
    const num2 = p2 ? p2.val : 0;
    const sum = num1 + num2 + carry;
    if (sum > 9) {
      pointer.next = new ListNode(sum % 10);
      carry = 1;
    } else {
      pointer.next = new ListNode(sum);
      carry = 0;
    }
    if (p1) p1 = p1.next;
    if (p2) p2 = p2.next;
    pointer = pointer.next;
  }
  return ans.next;
};
// leetcode submit region end(Prohibit modification and deletion)
