// 给定两个用链表表示的整数，每个节点包含一个数位。
//
// 这些数位是反向存放的，也就是个位排在链表首部。
//
// 编写函数对这两个整数求和，并用链表形式返回结果。
//
//
//
// 示例：
//
// 输入：(7 -> 1 -> 6) + (5 -> 9 -> 2)，即617 + 295
// 输出：2 -> 1 -> 9，即912
//
//
// 进阶：思考一下，假设这些数位是正向存放的，又该如何解决呢?
//
// 示例：
//
// 输入：(6 -> 1 -> 7) + (2 -> 9 -> 5)，即617 + 295
// 输出：9 -> 1 -> 2，即912
//
// Related Topics 链表 数学
// 👍 43 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let [p1, p2] = [l1, l2];
  let carry = 0;
  const ans = new ListNode();
  let point = ans;
  while (p1 || p2 || carry) {
    const num1 = p1 ? p1.val : 0;
    const num2 = p2 ? p2.val : 0;
    const sum = num1 + num2 + carry;
    if (sum > 9) {
      point.next = new ListNode(sum % 10);
      carry = 1;
    } else {
      point.next = new ListNode(sum);
      carry = 0;
    }
    if (p1) p1 = p1.next;
    if (p2) p2 = p2.next;
    point = point.next;
  }
  return ans.next;
};
// leetcode submit region end(Prohibit modification and deletion)
