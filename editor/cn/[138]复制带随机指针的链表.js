//给定一个链表，每个节点包含一个额外增加的随机指针，该指针可以指向链表中的任何节点或空节点。 
//
// 要求返回这个链表的 深拷贝。 
//
// 我们用一个由 n 个节点组成的链表来表示输入/输出中的链表。每个节点用一个 [val, random_index] 表示： 
//
// 
// val：一个表示 Node.val 的整数。 
// random_index：随机指针指向的节点索引（范围从 0 到 n-1）；如果不指向任何节点，则为 null 。 
// 
//
// 
//
// 示例 1： 
//
// 
//
// 输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
//输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]
// 
//
// 示例 2： 
//
// 
//
// 输入：head = [[1,1],[2,1]]
//输出：[[1,1],[2,1]]
// 
//
// 示例 3： 
//
// 
//
// 输入：head = [[3,null],[3,0],[3,null]]
//输出：[[3,null],[3,0],[3,null]]
// 
//
// 示例 4： 
//
// 输入：head = []
//输出：[]
//解释：给定的链表为空（空指针），因此返回 null。
// 
//
// 
//
// 提示： 
//
// 
// -10000 <= Node.val <= 10000 
// Node.random 为空（null）或指向链表中的节点。 
// 节点数目不超过 1000 。 
// 
// Related Topics 哈希表 链表 
// 👍 395 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
/*
*解题思路：
*1.遍历链表，复制每个结点，如复制结点A得到A1，将结点A1插到结点A后面;
*2.因为random可能会指向一个还未创建的新节点,所以先把A和A1保存在Map中;
*3.重新遍历链表，复制老结点的随机指针给新结点，如A1.random = A.random;
*/
var copyRandomList = function (head) {
    if (!head) {
        return null;
    }
    const map = new Map();
    let node = head;
    const newHead = new Node(node.val);
    let newNode = newHead;
    map.set(node, newNode);
    //1.复制每个结点，如复制结点A得到A1，将结点A1插到结点A后面；
    while (node.next) {
        newNode.next = new Node(node.next.val);
        node = node.next;
        newNode = newNode.next;
        //2.因为random可能会指向一个还未创建的新节点,所以先把A和A1保存在Map中;
        map.set(node, newNode);
    }
    newNode = newHead;
    node = head;
    //3.重新遍历链表，复制老结点的随机指针给新结点，如A1.random = A.random;
    while (newNode) {
        newNode.random = map.get(node.random);
        newNode = newNode.next;
        node = node.next;
    }
    return newHead;
};


/*
*1.复制每个节点，如：复制节点A得到A1，将A1插入节点A后面
*2.重新遍历链表，A1->random = A->random->next;
*3.将链表拆分成原链表和复制后的链表
* */

var copyRandomList = function (head) {
    if (!head) {
        return null;
    }
    let curNode = head;
    //1.复制每个结点，如复制结点A得到A1，将结点A1插到结点A后面；
    while (curNode) {
        let cloneNode = new Node(curNode.val);
        let nextNode = curNode.next;
        curNode.next = cloneNode;
        cloneNode.next = nextNode;
        curNode = nextNode;
    }
    curNode = head;
    //2.重新遍历链表，复制老结点的随机指针给新结点，如A1.random = A.random;
    while (curNode) {
        curNode.next.random = curNode.random && curNode.random.next;
        curNode = curNode.next.next;
    }
    //3.将链表拆分成原链表和复制后的链表
    curNode = head;
    let cloneHead = head.next;
    while (curNode) {
        let cloneNode = curNode.next;
        curNode.next = cloneNode.next;
        cloneNode.next = cloneNode.next && cloneNode.next.next;
        curNode = curNode.next;
    }
    return cloneHead;
};
//leetcode submit region end(Prohibit modification and deletion)
