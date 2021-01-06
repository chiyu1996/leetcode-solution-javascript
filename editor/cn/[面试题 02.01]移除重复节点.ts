//编写代码，移除未排序链表中的重复节点。保留最开始出现的节点。
//
// 示例1:
//
//
// 输入：[1, 2, 3, 3, 2, 1]
// 输出：[1, 2, 3]
//
//
// 示例2:
//
//
// 输入：[1, 1, 1, 1, 2]
// 输出：[1, 2]
//
//
// 提示：
//
//
// 链表长度在[0, 20000]范围内。
// 链表元素在[0, 20000]范围内。
//
//
// 进阶：
//
// 如果不得使用临时缓冲区，该怎么解决？
// Related Topics 链表
// 👍 85 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
//使用临时缓存区
function removeDuplicateNodes(head: ListNode | null): ListNode | null {
    if(head === null) {
        return head;
    }
    const set = new Set();
    let first = head;
    set.add(head.val);
    while (first.next !== null) {
        if(set.has(first.next.val)){
            first.next = first.next.next;
        }else{
            set.add(first.next.val);
            first = first.next;
        }
    }
    return head;
};
// 不使用临时缓存区
function removeDuplicateNodes(head: ListNode | null): ListNode | null {
    let first = head;
    while (first !== null) {
        let second = first;
        while(second !== null &&  second.next !==null){
            if(second.next.val === first.val) {
                second.next = second.next.next;
            }else{
                second = second.next;
            }
        }
        first = first.next;
    }
    return head;
};
//leetcode submit region end(Prohibit modification and deletion)
