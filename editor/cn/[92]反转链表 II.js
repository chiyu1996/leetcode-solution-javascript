//反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。 
//
// 说明: 
//1 ≤ m ≤ n ≤ 链表长度。 
//
// 示例: 
//
// 输入: 1->2->3->4->5->NULL, m = 2, n = 4
//输出: 1->4->3->2->5->NULL 
// Related Topics 链表 
// 👍 536 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
    let ans = new ListNode(-1);
    ans.next = head;
    let pre = ans;
    let count = 1;
    for (let i = 1; i < m; i++) {
        pre = pre.next;
    }
    head = pre.next;
    for (let i = 0; i < n - m; i++) {
        let next = head.next;
        head.next = next.next;
        next.next = pre.next;
        pre.next = next;
    }
    return ans.next;
};
//leetcode submit region end(Prohibit modification and deletion)
