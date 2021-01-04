// 栈排序。 编写程序，对栈进行排序使最小元素位于栈顶。最多只能使用一个其他的临时栈存放数据，但不得将元素复制到别的数据结构（如数组）中。该栈支持如下操作：pu
// sh、pop、peek 和 isEmpty。当栈为空时，peek 返回 -1。
//
// 示例1:
//
//  输入：
// ["SortedStack", "push", "push", "peek", "pop", "peek"]
// [[], [1], [2], [], [], []]
// 输出：
// [null,null,null,1,null,2]
//
//
// 示例2:
//
//  输入：
// ["SortedStack", "pop", "pop", "push", "pop", "isEmpty"]
// [[], [], [], [1], [], []]
// 输出：
// [null,null,null,null,null,true]
//
//
// 说明:
//
//
// 栈中的元素数目在[0, 5000]范围内。
//
// Related Topics 设计
// 👍 27 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
var SortedStack = function() {
  this.big = [];
  this.small = [];
};

/**
 * @param {number} val
 * @return {void}
 */
SortedStack.prototype.push = function(val) {
  while (this.small.length && this.small[this.small.length - 1] > val) {
    this.big.push(this.small.pop());
  }
  while (this.big.length && this.big[this.big.length - 1] < val) {
    this.small.push(this.big.pop());
  }
  this.small.push(val);
};

/**
 * @return {void}
 */
SortedStack.prototype.pop = function() {
  while (this.small.length) {
    this.big.push(this.small.pop());
  }
  if (this.big.length) {
    this.big.pop();
  }
};

/**
 * @return {number}
 */
SortedStack.prototype.peek = function() {
  while (this.small.length) {
    this.big.push(this.small.pop());
  }
  if (this.big.length) {
    return this.big[this.big.length - 1];
  } else {
    return -1;
  }
};

/**
 * @return {boolean}
 */
SortedStack.prototype.isEmpty = function() {
  return this.big.length === 0 && this.small.length === 0
};

/**
 * Your SortedStack object will be instantiated and called as such:
 * var obj = new SortedStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.isEmpty()
 */
// leetcode submit region end(Prohibit modification and deletion)
