// 请设计并实现一个能够展开二维向量的迭代器。该迭代器需要支持 next 和 hasNext 两种操作。
//
//
//
// 示例：
//
//
// Vector2D iterator = new Vector2D([[1,2],[3],[4]]);
//
// iterator.next(); // 返回 1
// iterator.next(); // 返回 2
// iterator.next(); // 返回 3
// iterator.hasNext(); // 返回 true
// iterator.hasNext(); // 返回 true
// iterator.next(); // 返回 4
// iterator.hasNext(); // 返回 false
//
//
//
//
// 注意：
//
//
// 请记得 重置 在 Vector2D 中声明的类变量（静态变量），因为类变量会 在多个测试用例中保持不变，影响判题准确。请 查阅 这里。
// 你可以假定 next() 的调用总是合法的，即当 next() 被调用时，二维向量总是存在至少一个后续元素。
//
//
//
//
// 进阶：尝试在代码中仅使用 C++ 提供的迭代器 或 Java 提供的迭代器。
// Related Topics 设计
// 👍 28 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} v
 */
var Vector2D = function(v) {
  const flatten = function(arr) {
    return arr.reduce((pre, val) => {
      return pre.concat(Array.isArray(val) ? flatten(val) : val);
    }, []);
  };
  this.v = flatten(v);
  this.curr = 0;
};

/**
 * @return {number}
 */
Vector2D.prototype.next = function() {
  return this.v[this.curr++];
};

/**
 * @return {boolean}
 */
Vector2D.prototype.hasNext = function() {
  return this.curr < this.v.length;
};

/**
 * Your Vector2D object will be instantiated and called as such:
 * var obj = new Vector2D(v)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
// leetcode submit region end(Prohibit modification and deletion)
