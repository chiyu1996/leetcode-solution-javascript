// 中位数是有序列表中间的数。如果列表长度是偶数，中位数则是中间两个数的平均值。
//
// 例如，
//
// [2,3,4] 的中位数是 3
//
// [2,3] 的中位数是 (2 + 3) / 2 = 2.5
//
// 设计一个支持以下两种操作的数据结构：
//
//
// void addNum(int num) - 从数据流中添加一个整数到数据结构中。
// double findMedian() - 返回目前所有元素的中位数。
//
//
// 示例：
//
// addNum(1)
// addNum(2)
// findMedian() -> 1.5
// addNum(3)
// findMedian() -> 2
//
// 进阶:
//
//
// 如果数据流中所有整数都在 0 到 100 范围内，你将如何优化你的算法？
// 如果数据流中 99% 的整数都在 0 到 100 范围内，你将如何优化你的算法？
//
// Related Topics 堆 设计
// 👍 344 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
  this.small = new PriorityQueue((a, b) => a > b); // 大顶堆
  this.large = new PriorityQueue((a, b) => a < b); // 小顶堆
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  this.small.push(num);
  this.large.push(this.small.pop());
  if (this.small.size() < this.large.size()) {
    this.small.push(this.large.pop());
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  return this.small.size() > this.large.size() ? this.small.top() : (this.large.top() + this.small.top()) * 0.5;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
class PriorityQueue {
  // 构造函数，传入优先级比较函数
  constructor(cmp_func) {
    if (cmp_func) {
      this._cmp_func = cmp_func;
    } else {
      this._cmp_func = (a, b) => {
        return a > b
      }
    }

    this._heap = [];
    this._size = 0;
  }

  // 获取某个节点的父节点
  _parent(index) {
    const parent = Math.floor((index - 1) / 2);
    if (index > this._size - 1 || parent < 0) return null;
    return parent; // 这里返回的 p 是在数组中的下标，数组是从0开始的
  }

  // 获取某个节点的左孩子
  _leftChild(index) {
    const lt = 2 * index + 1;
    if (lt > this._size - 1) return null;
    return lt;
  }

  // 获取某个节点的右孩子
  _rightChild(index) {
    const rt = 2 * index + 2;
    if (rt > this._size - 1) return null;
    return rt;
  }

  // 元素下沉 对下标为i的元素向下进行调整，使堆保持其性质
  _downward(index) {
    const heap = this._heap;
    const lt = this._leftChild(index);
    const rt = this._rightChild(index);
    let larget = null;
    if (lt != null) { // 左孩子为空则右孩子一定为空
      if (rt == null) {
        larget = lt;
      } else {
        larget = this._cmp_func(heap[lt], heap[rt]) ? lt : rt;
      }
      if (this._cmp_func(heap[index], heap[larget])) {
        return;
      } else {
        const tmp = heap[index];
        heap[index] = heap[larget];
        heap[larget] = tmp;
        this._downward(larget);
      }
    }
  }

  // 元素上浮 对下标为i的元素进行向上调整，使堆保持其性质
  _upward(index) {
    const heap = this._heap;
    let parent = this._parent(index);
    while (index > 0 && this._cmp_func(heap[index], heap[parent])) {
      const tmp = heap[index];
      heap[index] = heap[parent];
      heap[parent] = tmp;
      index = parent;
      parent = this._parent(index);
    }
  }

  empty() {
    return this._size === 0;
  }

  size() {
    return this._size;
  }

  push(item) {
    this._size += 1;
    if (this._heap.length >= this._size) {
      this._heap[this._size - 1] = item;
    } else {
      this._heap.push(item);
    }
    this._upward(this._size - 1);
  }

  top() {
    return this._heap[0];
  }

  pop() {
    const top_item = this._heap[0];
    this._heap[0] = this._heap[this._size - 1];
    this._size -= 1;
    this._downward(0);
    return top_item;
  }
}
// leetcode submit region end(Prohibit modification and deletion)
