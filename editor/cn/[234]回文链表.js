//请判断一个链表是否为回文链表。 
//
// 示例 1: 
//
// 输入: 1->2
//输出: false 
//
// 示例 2: 
//
// 输入: 1->2->2->1
//输出: true
// 
//
// 进阶： 
//你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？ 
// Related Topics 链表 双指针 
// 👍 653 👎 0


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
 * @return {boolean}
 */
var isPalindrome = function (head) {
    if (head === null) return true;
    const reverseList = (head) => {
        let pre = null;
        let cur = head;
        while (cur !== null) {
            let next = cur.next;
            cur.next = pre;
            pre = cur;
            cur = next;
        }
        return pre;
    };
    const getHalfList = (head) => {
        let fast = head;
        let slow = head;
        while (fast.next !== null && fast.next.next !== null) {
            fast = fast.next.next;
            slow = slow.next;
        }
        return slow;
    };
    let half = getHalfList(head);
    let second = reverseList(half.next);
    let first = head;
    let result = true;
    while (result && second) {
        if (first.val !== second.val) {
            result = false;
        }
        first = first.next;
        second = second.next;
    }
    return result;
};
//leetcode submit region end(Prohibit modification and deletion)
