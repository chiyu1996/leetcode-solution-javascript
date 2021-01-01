// 给一非空的单词列表，返回前 k 个出现次数最多的单词。
//
// 返回的答案应该按单词出现频率由高到低排序。如果不同的单词有相同出现频率，按字母顺序排序。
//
// 示例 1：
//
//
// 输入: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
// 输出: ["i", "love"]
// 解析: "i" 和 "love" 为出现次数最多的两个单词，均为2次。
//    注意，按字母顺序 "i" 在 "love" 之前。
//
//
//
//
// 示例 2：
//
//
// 输入: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k
// = 4
// 输出: ["the", "is", "sunny", "day"]
// 解析: "the", "is", "sunny" 和 "day" 是出现次数最多的四个单词，
//    出现次数依次为 4, 3, 2 和 1 次。
//
//
//
//
// 注意：
//
//
// 假定 k 总为有效值， 1 ≤ k ≤ 集合元素数。
// 输入的单词均由小写字母组成。
//
//
//
//
// 扩展练习：
//
//
// 尝试以 O(n log k) 时间复杂度和 O(n) 空间复杂度解决。
//
// Related Topics 堆 字典树 哈希表
// 👍 190 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  const map = new Map();
  words.map(word => {
    const cnt = map.get(word) || 0;
    map.set(word, cnt + 1);
  })
  const arr = [...map.keys()];
  arr.sort((a, b) => {
    if (map.get(a) === map.get(b)) {
      return a > b ? 1 : -1;// 因为 sort是按-1/0/1来处理 直接 a>b 会把boolean结果转成数字 即永远不会出现 -1 这个比较结果
      // return a.localeCompare(b);  使用localeCompare函数也可完成比较
    } else {
      return map.get(b) - map.get(a);
    }
  })
  return arr.slice(0, k);
};
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

var topKFrequent = function(words, k) {
  const map = new Map();
  words.map(word => {
    const cnt = map.get(word) || 0;
    map.set(word, cnt + 1);
  });
  const pq = new PriorityQueue((a, b) => {
    if (map.get(a) === map.get(b)) {
      return a > b;
    } else {
      return map.get(a) < map.get(b);
    }
  });
  const arr = [...map.keys()];
  arr.map((keyword) => {
    pq.push(keyword);
    if (pq.size() > k) {
      pq.pop();
    }
  });
  const result = [];
  while (!pq.empty()) {
    result.push(pq.pop());
  }
  return result.reverse();
};
// leetcode submit region end(Prohibit modification and deletion)
