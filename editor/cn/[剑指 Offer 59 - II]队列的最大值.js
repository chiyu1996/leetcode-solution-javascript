// 请定义一个队列并实现函数 max_value 得到队列里的最大值，要求函数max_value、push_back 和 pop_front 的均摊时间复杂度都
// 是O(1)。
//
// 若队列为空，pop_front 和 max_value 需要返回 -1
//
// 示例 1：
//
// 输入:
// ["MaxQueue","push_back","push_back","max_value","pop_front","max_value"]
// [[],[1],[2],[],[],[]]
// 输出: [null,null,null,2,1,2]
//
//
// 示例 2：
//
// 输入:
// ["MaxQueue","pop_front","max_value"]
// [[],[],[]]
// 输出: [null,-1,-1]
//
//
//
//
// 限制：
//
//
// 1 <= push_back,pop_front,max_value的总操作数 <= 10000
// 1 <= value <= 10^5
//
// Related Topics 栈 Sliding Window
// 👍 150 👎 0

// leetcode submit region begin(Prohibit modification and deletion)

var MaxQueue = function() {
  this.queue = [undefined];
  this.deQueue = [undefined];
  this.first = 0;
  this.last = 0;
  this.size = 0;
  this.deFirst = 0;
  this.deLast = 0;
  this.deSize = 0;
};
/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
  if (this.isEmpty(this.deFirst, this.deLast)) {
    return -1;
  }
  return this.deQueue[this.deFirst] || -1;
};

/**
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
  if (this.isEmpty(this.deFirst, this.deLast) || value <= this.deQueue[(this.deLast - 1 + this.deQueue.length) % this.deQueue.length]) {
    if (this.deFirst === (this.deLast + 1) % this.deQueue.length) {
      this.deResize(this.deGetLength() * 2 + 1);
    }
    this.deQueue[this.deLast] = value;
    this.deSize++;
    this.deLast = (this.deLast + 1) % this.deQueue.length;
  } else if (value > this.deQueue[(this.deLast - 1 + this.deQueue.length) % this.deQueue.length]) {
    while (value > this.deQueue[(this.deLast - 1 + this.deQueue.length) % this.deQueue.length] && !this.isEmpty(this.deFirst, this.deLast)) {
      this.deQueue[this.deLast] = null;
      this.deSize--;
      this.deLast = (this.deLast - 1 + this.deQueue.length) % this.deQueue.length;
    }
    if (this.deSize === this.deGetLength() / 4 && this.deGetLength() / 2 !== 0) {
      this.deResize(this.deGetLength() / 2);
    }
    this.deQueue[this.deLast] = value;
    this.deSize++;
    this.deLast = (this.deLast + 1) % this.deQueue.length;
  }

  if (this.first === (this.last + 1) % this.queue.length) {
    this.resize(this.getLength() * 2 + 1);
  }
  this.queue[this.last] = value;
  this.size++;
  this.last = (this.last + 1) % this.queue.length;

  return null;
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
  if (this.isEmpty(this.first, this.last)) {
    return -1;
  }
  const r = this.queue[this.first];
  if (this.deQueue[this.deFirst] === r && !this.isEmpty(this.deFirst, this.deLast)) {
    this.deQueue[this.deFirst] = null;
    this.deFirst = (this.deFirst + 1) % this.deQueue.length;
    this.deSize--;
  }
  this.queue[this.first] = null;
  this.first = (this.first + 1) % this.queue.length;
  this.size--;
  if (this.deSize === this.deGetLength() / 4 && this.deGetLength() / 2 !== 0) {
    this.deResize(this.deGetLength() / 2);
  }
  if (this.size === this.getLength() / 4 && this.getLength() / 2 !== 0) {
    this.resize(this.getLength() / 2);
  }

  return r;
};
MaxQueue.prototype.isEmpty = function(first, last) {
  return first === last;
},
MaxQueue.prototype.resize = function(length) {
  const q = new Array(length);
  for (let i = 0; i < length; i++) {
    q[i] = this.queue[(i + this.first) % this.queue.length];
  }
  this.queue = q;
  this.first = 0;
  this.last = this.size;
},
MaxQueue.prototype.deResize = function(length) {
  const q = new Array(length);
  for (let i = 0; i < length; i++) {
    q[i] = this.deQueue[(i + this.deFirst) % this.deQueue.length];
  }
  this.deQueue = q;
  this.deFirst = 0;
  this.deLast = this.deSize;
},
MaxQueue.prototype.getLength = function() {
  return this.queue.length;
};
MaxQueue.prototype.deGetLength = function() {
  return this.deQueue.length;
};
/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */
// leetcode submit region end(Prohibit modification and deletion)
