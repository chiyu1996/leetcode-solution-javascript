// 有 n 个城市通过 m 个航班连接。每个航班都从城市 u 开始，以价格 w 抵达 v。
//
// 现在给定所有的城市和航班，以及出发城市 src 和目的地 dst，你的任务是找到从 src 到 dst 最多经过 k 站中转的最便宜的价格。 如果没有这样
// 的路线，则输出 -1。
//
//
//
// 示例 1：
//
//
// 输入:
// n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
// src = 0, dst = 2, k = 1
// 输出: 200
// 解释:
// 城市航班图如下
//
//
// 从城市 0 到城市 2 在 1 站中转以内的最便宜价格是 200，如图中红色所示。
//
// 示例 2：
//
//
// 输入:
// n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
// src = 0, dst = 2, k = 0
// 输出: 500
// 解释:
// 城市航班图如下
//
//
// 从城市 0 到城市 2 在 0 站中转以内的最便宜价格是 500，如图中蓝色所示。
//
//
//
// 提示：
//
//
// n 范围是 [1, 100]，城市标签从 0 到 n - 1
// 航班数量范围是 [0, n * (n - 1) / 2]
// 每个航班的格式 (src, dst, price)
// 每个航班的价格范围是 [1, 10000]
// k 范围是 [0, n - 1]
// 航班没有重复，且不存在自环
//
// Related Topics 堆 广度优先搜索 动态规划
// 👍 223 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
class PriorityQueue {
  // 构造函数，传入优先级比较函数
  constructor(cmp_func) {
    if (cmp_func) {
      this._cmp_func = cmp_func;
    } else {
      this._cmp_func = (a, b) => {
        return a > b;
      };
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
var findCheapestPrice = function(n, flights, src, dst, K) {
  const graph = [];
  for (const [from, to, value] of flights) {
    if (graph[from] === undefined) {
      graph[from] = [];
    }
    graph[from].push([to, value]);
  }
  const pq = new PriorityQueue((a, b) => a[0] < b[0]);
  pq.push([0, 0, src]);
  const dis = [];
  dis[src] = 0;
  while (!pq.empty()) {
    const [cost, k, curr] = pq.pop();
    if (k > K + 1 || cost > (dis[k * 100 + curr] || Infinity)) {
      continue;
    }

    if (curr === dst) {
      return cost;
    }
    const nexts = graph[curr] || [];
    for (let i = 0; i < nexts.length; i++) {
      const [next, value] = nexts[i];
      if (cost + value < (dis[(k + 1) * 100 + next] || Infinity)) {
        pq.push([cost + value, k + 1, next]);
        dis[(k + 1) * 100 + next] = cost + value;
      }
    }
  }
  return -1;
};
// leetcode submit region end(Prohibit modification and deletion)
