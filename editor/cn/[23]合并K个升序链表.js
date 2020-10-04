//给你一个链表数组，每个链表都已经按升序排列。 
//
// 请你将所有链表合并到一个升序链表中，返回合并后的链表。 
//
// 
//
// 示例 1： 
//
// 输入：lists = [[1,4,5],[1,3,4],[2,6]]
//输出：[1,1,2,3,4,4,5,6]
//解释：链表数组如下：
//[
//  1->4->5,
//  1->3->4,
//  2->6
//]
//将它们合并到一个有序链表中得到。
//1->1->2->3->4->4->5->6
// 
//
// 示例 2： 
//
// 输入：lists = []
//输出：[]
// 
//
// 示例 3： 
//
// 输入：lists = [[]]
//输出：[]
// 
//
// 
//
// 提示： 
//
// 
// k == lists.length 
// 0 <= k <= 10^4 
// 0 <= lists[i].length <= 500 
// -10^4 <= lists[i][j] <= 10^4 
// lists[i] 按 升序 排列 
// lists[i].length 的总和不超过 10^4 
// 
// Related Topics 堆 链表 分治算法 
// 👍 937 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

var mergeKLists = function (lists) {
    const merge = (lists, l, r) => {
        if (l === r) return lists[l];
        if (l > r) return null;
        let mid = (l + r) >> 1;
        return mergeList(merge(lists, l, mid), merge(lists, mid + 1, r));
    };
    const mergeList = (a, b) => {
        if ((!a) || (!b)) return a ? a : b;
        let head = new ListNode();
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
        cur.next = aPtr ? aPtr : bPtr;
        return head.next;
    };
    return merge(lists, 0, lists.length - 1);
};
//leetcode submit region end(Prohibit modification and deletion)
