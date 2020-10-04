//给你两个 非空 链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。 
//
// 你可以假设除了数字 0 之外，这两个数字都不会以零开头。 
//
// 
//
// 进阶： 
//
// 如果输入链表不能修改该如何处理？换句话说，你不能对列表中的节点进行翻转。 
//
// 
//
// 示例： 
//
// 输入：(7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
//输出：7 -> 8 -> 0 -> 7
// 
// Related Topics 链表 
// 👍 286 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
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
var addTwoNumbers = function (l1, l2) {
    let arr1 = [];
    let arr2 = [];
    while (l1) {
        arr1.push(l1.val);
        l1 = l1.next;
    }
    while (l2) {
        arr2.push(l2.val);
        l2 = l2.next;
    }
    let ans = null;
    let carry = 0;
    while (!!arr1.length || !!arr2.length || carry) {
        let a = !arr1.length ? 0 : arr1.pop();
        let b = !arr2.length ? 0 : arr2.pop();
        let cur = a + b + carry;
        carry = Math.floor(cur / 10);
        cur %= 10;
        let curnode = new ListNode(cur);
        curnode.next = ans;
        ans = curnode;
    }
    return ans;
};
//leetcode submit region end(Prohibit modification and deletion)
