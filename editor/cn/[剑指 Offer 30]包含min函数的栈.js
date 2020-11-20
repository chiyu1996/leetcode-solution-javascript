// 定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。
//
//
//
// 示例:
//
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.min();   --> 返回 -3.
// minStack.pop();
// minStack.top();      --> 返回 0.
// minStack.min();   --> 返回 -2.
//
//
//
//
// 提示：
//
//
// 各函数的调用总次数不超过 20000 次
//
//
//
//
// 注意：本题与主站 155 题相同：https://leetcode-cn.com/problems/min-stack/
// Related Topics 栈 设计
// 👍 50 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * initialize your data structure here.
 */

var MinStack = function() {
  this.array1 = [];
  this.minValue = Number.MAX_SAFE_INTEGER;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  if (this.array1.length === 0) {
    this.minValue = x;
    this.array1.push(x);
  } else {
    if (x <= this.minValue) {
      this.array1.push(this.minValue);
      this.minValue = x;
    }
    this.array1.push(x);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  if (this.array1.length === 0) {
    return;
  }
  if (this.minValue === this.array1[this.array1.length - 1]) {
    if (this.array1.length > 1) {
      this.array1.pop();
      this.minValue = this.array1[this.array1.length - 1];
    } else {
      this.minValue = Number.MAX_SAFE_INTEGER;
    }
  }
  this.array1.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  if (this.array1.length === 0) return;
  return this.array1[this.array1.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
  return this.minValue;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
// leetcode submit region end(Prohibit modification and deletion)
