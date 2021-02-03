// 中位数是有序序列最中间的那个数。如果序列的长度是偶数，则没有最中间的数；此时中位数是最中间的两个数的平均数。
//
// 例如：
//
//
// [2,3,4]，中位数是 3
// [2,3]，中位数是 (2 + 3) / 2 = 2.5
//
//
// 给你一个数组 nums，有一个长度为 k 的窗口从最左端滑动到最右端。窗口中有 k 个数，每次窗口向右移动 1 位。你的任务是找出每次窗口移动后得到的新窗
// 口中元素的中位数，并输出由它们组成的数组。
//
//
//
// 示例：
//
// 给出 nums = [1,3,-1,-3,5,3,6,7]，以及 k = 3。
//
//
// 窗口位置                      中位数
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       1
// 1 [3  -1  -3] 5  3  6  7      -1
// 1  3 [-1  -3  5] 3  6  7      -1
// 1  3  -1 [-3  5  3] 6  7       3
// 1  3  -1  -3 [5  3  6] 7       5
// 1  3  -1  -3  5 [3  6  7]      6
//
//
// 因此，返回该滑动窗口的中位数数组 [1,-1,-1,3,5,6]。
//
//
//
// 提示：
//
//
// 你可以假设 k 始终有效，即：k 始终小于输入的非空数组的元素个数。
// 与真实值误差在 10 ^ -5 以内的答案将被视作正确答案。
//
// Related Topics Sliding Window
// 👍 209 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function(nums, k) {
  const n = nums.length;
  if (!n) {
    return [];
  }
  const result = [];
  const small = new PriorityQueue((a, b) => a > b); // 大顶堆
  const large = new PriorityQueue((a, b) => a < b); // 小顶堆
  const count = new Map();
  for (let i = 0; i < k; i++) {
    small.push(nums[i]);
  }
  for (let i = 0; i < (k >> 1); i++) {
    large.push(small.pop());
  }
  result.push(getMid(small, large, k));
  for (let i = k; i < n; i++) {
    const index = i - k;
    const left = nums[index];
    let balance = 0;
    count.set(left, (count.get(left) || 0) + 1);
    if (!small.empty() && left <= small.top()) {
      balance--;
    } else {
      balance++;
    }
    if (!small.empty() && nums[i] <= small.top()) {
      small.push(nums[i]);
      balance++;
    } else {
      large.push(nums[i]);
      balance--;
    }
    if (balance > 0) {
      large.push(small.pop());
    }
    if (balance < 0) {
      small.push(large.pop());
    }
    while (!small.empty() && !!count.get(small.top())) {
      const cnt = count.get(small.top());
      count.set(small.top(), cnt - 1);
      small.pop();
    }
    while (!large.empty() && !!count.get(large.top())) {
      const cnt = count.get(large.top());
      count.set(large.top(), cnt - 1);
      large.pop();
    }
    result.push(getMid(small, large, k));
  }
  return result;
};
function getMid(small, large, k) {
  return k % 2 ? small.top() : (small.top() + large.top()) * 0.5;
}
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
