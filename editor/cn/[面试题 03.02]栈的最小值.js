// 请设计一个栈，除了常规栈支持的pop与push函数以外，还支持min函数，该函数返回栈元素中的最小值。执行push、pop和min操作的时间复杂度必须为O(
// 1)。 示例： MinStack minStack = new MinStack(); minStack.push(-2); minStack.push(0);
// minStack.push(-3); minStack.getMin();   --> 返回 -3. minStack.pop(); minStack.top
// ();      --> 返回 0. minStack.getMin();   --> 返回 -2. Related Topics 栈
// 👍 36 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * initialize your data structure here.
 */

var MinStack = function() {
  this.stack = [];
  this.minStack = [Infinity]
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x);
  if (x < this.minStack[this.minStack.length - 1]) {
    this.minStack.push(x)
  } else {
    this.minStack.push(this.minStack[this.minStack.length - 1])
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.pop();
  this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// leetcode submit region end(Prohibit modification and deletion)
