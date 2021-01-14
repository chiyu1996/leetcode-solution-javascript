// 三合一。描述如何只用一个数组来实现三个栈。
//
// 你应该实现push(stackNum, value)、pop(stackNum)、isEmpty(stackNum)、peek(stackNum)方法。s
// tackNum表示栈下标，value表示压入的值。
//
// 构造函数会传入一个stackSize参数，代表每个栈的大小。
//
// 示例1:
//
//  输入：
// ["TripleInOne", "push", "push", "pop", "pop", "pop", "isEmpty"]
// [[1], [0, 1], [0, 2], [0], [0], [0], [0]]
// 输出：
// [null, null, null, 1, -1, -1, true]
// 说明：当栈为空时`pop, peek`返回-1，当栈满时`push`不压入元素。
//
//
// 示例2:
//
//  输入：
// ["TripleInOne", "push", "push", "push", "pop", "pop", "pop", "peek"]
// [[2], [0, 1], [0, 2], [0, 3], [0], [0], [0], [0]]
// 输出：
// [null, null, null, null, 2, 1, -1, -1]
//
// Related Topics 设计
// 👍 21 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} stackSize
 */
var TripleInOne = function(stackSize) {
  this.stack = new Array(stackSize * 3);
  this.stackSize = stackSize;
  this.first = 0;
  this.second = stackSize;
  this.third = stackSize * 2;
};

/**
 * @param {number} stackNum
 * @param {number} value
 * @return {void}
 */
TripleInOne.prototype.push = function(stackNum, value) {
  if (this.isFull(stackNum)) {
    return null;
  }
  if (stackNum === 0) {
    this.stack[this.first++] = value;
  } else if (stackNum === 1) {
    this.stack[this.second++] = value;
  } else {
    this.stack[this.third++] = value;
  }
};

/**
 * @param {number} stackNum
 * @return {number}
 */
TripleInOne.prototype.pop = function(stackNum) {
  if (this.isEmpty(stackNum)) {
    return -1;
  }
  if (stackNum === 0) {
    return this.stack[--this.first];
  } else if (stackNum === 1) {
    return this.stack[--this.second];
  } else {
    return this.stack[--this.third];
  }
};

/**
 * @param {number} stackNum
 * @return {number}
 */
TripleInOne.prototype.peek = function(stackNum) {
  if (this.isEmpty(stackNum)) {
    return -1;
  }
  if (stackNum === 0) {
    return this.stack[this.first - 1];
  } else if (stackNum === 1) {
    return this.stack[this.second - 1];
  } else {
    return this.stack[this.third - 1];
  }
};

/**
 * @param {number} stackNum
 * @return {boolean}
 */
TripleInOne.prototype.isEmpty = function(stackNum) {
  if (stackNum === 0) {
    return this.first === 0;
  } else if (stackNum === 1) {
    return this.second === this.stackSize;
  } else {
    return this.third === this.stackSize * 2;
  }
};
TripleInOne.prototype.isFull = function(stackNum) {
  if (stackNum === 0) {
    return this.first === this.stackSize;
  } else if (stackNum === 1) {
    return this.second === this.stackSize * 2;
  } else {
    return this.third === this.stackSize * 3;
  }
  return true;
};
/**
 * Your TripleInOne object will be instantiated and called as such:
 * var obj = new TripleInOne(stackSize)
 * obj.push(stackNum,value)
 * var param_2 = obj.pop(stackNum)
 * var param_3 = obj.peek(stackNum)
 * var param_4 = obj.isEmpty(stackNum)
 */
// leetcode submit region end(Prohibit modification and deletion)
