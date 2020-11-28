// T1 5557. 最大重复子字符串 - easy
var maxRepeating = function(sequence, word) {
  let ans = 0;
  let w = word;
  while (true) {
    if (sequence.includes(w)) {
      ans++;
      w += word;
    } else {
      break;
    }
  }
  return ans;
};
// T2 5558. 合并两个链表 - medium
// 写的比较乱,将就看吧，保存第a个节点之前的节点和第b个节点之后的节点，然后用next接起来
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
  let cnt = 0;
  const ans = new ListNode();
  ans.next = list1;
  let head = list1;
  let left = head;
  let right = null;
  let last = null;
  while (head) {
    if (cnt === a) {
      left = last;
    }
    if (cnt === b) {
      right = head.next;
    }
    cnt++;
    last = head;
    head = head.next;
  }
  left.next = list2;
  while (list2) {
    if (list2.next === null) {
      list2.next = right;
      break;
    }
    list2 = list2.next;
  }
  return ans.next;
};
// T3 5560. 设计前中后队列 - medium
// 操作只有1000次,用Array随便搞搞就好了,就是popMiddle的时候需要注意奇偶情况
var FrontMiddleBackQueue = function() {
  this.left = 0;
  this.right = 0;
  this.queue = [];
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function(val) {
  this.queue.unshift(val);
  return this.queue;
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function(val) {
  const len = this.queue.length;
  this.queue.splice((len >> 1), 0, val);
  return this.queue;
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function(val) {
  this.queue.push(val);
  return this.queue;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function() {
  const len = this.queue.length;
  if (len === 0) return -1;
  return this.queue.shift();
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function() {
  const len = this.queue.length;
  if (len === 0) return -1;
  if (len % 2 === 1) {
    return this.queue.splice((len >> 1), 1);
  } else {
    return this.queue.splice((len >> 1) - 1, 1);
  }
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function() {
  const len = this.queue.length;
  if (len === 0) return -1;
  return this.queue.pop();
};

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */

// T4 5559. 得到山形数组的最少删除次数
// 正反求一次最长上升子序列
var minimumMountainRemovals = function(nums) {
  const n = nums.length;
  const dp = new Array(2).fill(undefined).map(() => {
    return new Int32Array(n + 5);
  })
  for (let i = 0; i < n; i++) {
    dp[0][i] = 1;
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[0][i] = Math.max(dp[0][i], dp[0][j] + 1);
      }
    }
  }
  for (let i = n - 1; i >= 0; i--) {
    dp[1][i] = 1;
    for (let j = n - 1; j > i; j--) {
      if (nums[j] < nums[i]) {
        dp[1][i] = Math.max(dp[1][i], dp[1][j] + 1);
      }
    }
  }
  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (dp[0][i] > 1 && dp[1][i] > 1) {
      ans = Math.max(ans, dp[0][i] + dp[1][i] - 1);
    }
  }
  return n - ans;
};
