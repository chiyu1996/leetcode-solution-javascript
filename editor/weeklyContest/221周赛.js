/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
  const n = s.length;
  s = s.toLowerCase();
  let result1 = 0;
  let result2 = 0;
  for (let i = 0; i < n; i++) {
    if (['a', 'e', 'i', 'o', 'u'].includes(s[i])) {
      if (i < n / 2) {
        result1++;
      } else {
        result2++;
      }
    }
  }
  return result1 === result2;
};

class PriorityQueue {
  // 构造函数，传入优先级比较函数
  constructor(cmp_func) {
    // if (cmp_func) {
    this._cmp_func = (a, b) => a[0] === b[0] ? a[1] < b[1] : a[0] < b[0];
    // } else {
    //     this._cmp_func = (a, b) => {
    //         return a > b
    //     }
    // }

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

var eatenApples = function(apples, days) {
  const priorityQueue = new PriorityQueue();
  const n = apples.length;
  let result = 0;
  for (let i = 0; i < n; i++) {
    priorityQueue.push([i + days[i], apples[i]]);
    while (!priorityQueue.empty() && (priorityQueue.top()[0] <= i || priorityQueue.top()[1] === 0)) {
      priorityQueue.pop();
    }
    if (!priorityQueue.empty() && !!priorityQueue.top()[1]) {
      result++;
      let [day, apple] = priorityQueue.top();
      priorityQueue.pop();
      apple--;
      priorityQueue.push([day, apple]);
    }
  }
  for (let i = n; !priorityQueue.empty(); i++) {
    while (!priorityQueue.empty() && (priorityQueue.top()[0] <= i || priorityQueue.top()[1] === 0)) {
      priorityQueue.pop();
    }
    if (!priorityQueue.empty() && !!priorityQueue.top()[1]) {
      result++;
      let [day, apple] = priorityQueue.top();
      priorityQueue.pop();
      apple--;
      priorityQueue.push([day, apple]);
    }
  }
  return result;
};
/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const result = new Array(n);
  const getNext = (last, now, val, next) => {
    if (last[1] === now[1]) {
      if (last[0] < now[0]) {
        if (val === -1) {
          return false;
        } else {
          next[0] = now[0];
          next[1] = now[1] + 1;
          return true;
        }
      } else {
        if (val === 1) {
          return false;
        } else {
          next[0] = now[0];
          next[1] = now[1] + 1;
          return true;
        }
      }
    } else {
      if (val === 1) {
        next[1] = now[1];
        next[0] = now[0] + 1;
        return true;
      } else {
        next[1] = now[1];
        next[0] = now[0] - 1;
        return true;
      }
    }
  };
  for (let i = 0; i < n; i++) {
    let now = { 0: i, 1: 0 };
    let last = { 0: i, 1: -1 };
    const next = {};
    while (true) {
      if (i === 0) {
        console.log(last, now);
      }
      const hasNext = getNext(last, now, grid[now[1]][now[0]], next);

      if (i === 0) {
        console.log(next);
      }
      if (!hasNext) {
        result[i] = -1;
        break;
      }
      if (next[0] < 0 || next[0] >= n) {
        result[i] = -1;
        break;
      }
      last = { ...now };
      now = { ...next };

      if (next[1] === m) {
        result[i] = next[0];
        break;
      }
    }
  }
  return result;
};
