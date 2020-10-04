//给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。 
//
// 示例： 
//
// 给定一个链表: 1->2->3->4->5, 和 n = 2.
//
//当删除了倒数第二个节点后，链表变为 1->2->3->5.
// 
//
// 说明： 
//
// 给定的 n 保证是有效的。 
//
// 进阶： 
//
// 你能尝试使用一趟扫描实现吗？ 
// Related Topics 链表 双指针 
// 👍 1011 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let ans = new ListNode(0);
    ans.next = head;
    let fast = ans;
    let slow = ans;
    for (let i = 1; i <= n + 1; i++) {
        fast = fast.next;
    }
    while (fast) {
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;
    return ans.next;
};
//leetcode submit region end(Prohibit modification and deletion)
