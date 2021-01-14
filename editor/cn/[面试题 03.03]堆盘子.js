// 堆盘子。设想有一堆盘子，堆太高可能会倒下来。因此，在现实生活中，盘子堆到一定高度时，我们就会另外堆一堆盘子。请实现数据结构SetOfStacks，模拟这种行
// 为。SetOfStacks应该由多个栈组成，并且在前一个栈填满时新建一个栈。此外，SetOfStacks.push()和SetOfStacks.pop()应该与
// 普通栈的操作方法相同（也就是说，pop()返回的值，应该跟只有一个栈时的情况一样）。 进阶：实现一个popAt(int index)方法，根据指定的子栈，执行p
// op操作。
//
// 当某个栈为空时，应当删除该栈。当栈中没有元素或不存在该栈时，pop，popAt 应返回 -1.
//
// 示例1:
//
//  输入：
// ["StackOfPlates", "push", "push", "popAt", "pop", "pop"]
// [[1], [1], [2], [1], [], []]
// 输出：
// [null, null, null, 2, 1, -1]
//
//
// 示例2:
//
//  输入：
// ["StackOfPlates", "push", "push", "push", "popAt", "popAt", "popAt"]
// [[2], [1], [2], [3], [0], [0], [0]]
// 输出：
// [null, null, null, null, 2, 1, 3]
//
// Related Topics 设计
// 👍 12 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} cap
 */
var StackOfPlates = function(cap) {
  this.setOfStack = [];
  this.cap = cap;
};
/**
 * @param {number} val
 * @return {void}
 */
StackOfPlates.prototype.push = function(val) {
  if (this.cap <= 0) {
    return;
  }
  const len = this.setOfStack.length;
  if (len === 0) {
    this.setOfStack.push([val]);
  } else if (this.setOfStack[len - 1].length === this.cap) {
    this.setOfStack.push([val]);
  } else {
    this.setOfStack[len - 1].push(val);
  }
};

/**
 * @return {number}
 */
StackOfPlates.prototype.pop = function() {
  if (this.cap <= 0) {
    return -1;
  }
  const len = this.setOfStack.length;
  if (len === 0) {
    return -1;
  }
  const result = this.setOfStack[len - 1].pop();
  if (this.setOfStack[len - 1].length === 0) {
    this.setOfStack.pop();
  }
  return result;
};

/**
 * @param {number} index
 * @return {number}
 */
StackOfPlates.prototype.popAt = function(index) {
  if (this.cap <= 0) {
    return -1;
  }
  const len = this.setOfStack.length;
  if (len < index + 1) {
    return -1;
  }
  const result = this.setOfStack[index].pop();
  if (this.setOfStack[index].length === 0) {
    this.setOfStack.splice(index, 1);
  }
  return result;
};

/**
 * Your StackOfPlates object will be instantiated and called as such:
 * var obj = new StackOfPlates(cap)
 * obj.push(val)
 * var param_2 = obj.pop()
 * var param_3 = obj.popAt(index)
 */
// leetcode submit region end(Prohibit modification and deletion)
