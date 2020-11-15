// 5601. 设计有序流 easy 设计题
// https://leetcode-cn.com/contest/weekly-contest-215/problems/design-an-ordered-stream/
/**
 * @param {number} n
 */
var OrderedStream = function(n) {
  this.map = new Map();
  this.size = n;
  this.ptr = 1;
};

/**
 * @param {number} id
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(id, value) {
  this.map.set(id, value);
  const ans = [];
  if (this.ptr === id) {
    ans.push(value);
    let i;
    for (i = id + 1; i <= this.size; i++) {
      const val = this.map.get(i);
      if (val === undefined) {
        break;
      }
      ans.push(val);
    }
    this.ptr = i;
  }
  return ans;
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(id,value)
 */

// 5603. 确定两个字符串是否接近 medium 贪心
//  https://leetcode-cn.com/problems/determine-if-two-strings-are-close/
var closeStrings = function(word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }
  const count1 = new Int32Array(26);
  const count2 = new Int32Array(26);
  for (let i = 0; i < word1.length; i++) {
    count1[word1.charCodeAt(i) - 97]++;
    count2[word2.charCodeAt(i) - 97]++;
  }
  for (let i = 0; i < 26; i++) {
    if (count1[i] === 0 && count2[i] > 0) {
      return false;
    } else if (count1[i] > 0 && count2[i] === 0) {
      return false;
    }
  }
  count1.sort((a, b) => a - b);
  count2.sort((a, b) => a - b);
  for (let i = 0; i < 26; i++) {
    if (count1[i] !== count2[i]) {
      return false;
    }
  }
  return true;
};
// 5602. 将 x 减到 0 的最小操作数 medium 前缀和+二分
// https://leetcode-cn.com/problems/minimum-operations-to-reduce-x-to-zero/
/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
  if (!nums.length) {
    if (x === 0) {
      return 0;
    } else {
      return -1;
    }
  }
  if (x === 0) {
    return 0;
  }
  let n = nums.length;
  const sumPre = new Int32Array(n + 2);
  const sumSuf = new Int32Array(n + 2);
  n += 2;
  for (let i = 0; i < n; i++) {
    sumPre[i + 1] = nums[i];
  }
  for (let i = 0; i < n; i++) {
    sumSuf[i + 1] = nums[i];
  }
  for (let i = 1; i < n; i++) {
    sumPre[i] += sumPre[i - 1];
  }
  sumSuf.reverse();
  for (let i = 1; i < n; i++) {
    sumSuf[i] += sumSuf[i - 1];
  }
  let ans = Infinity;
  for (let i = 0; i < n; i++) {
    const g = x - sumPre[i];
    let left = 0;
    let right = n - 1;
    while (left < right) {
      const mid = (left + right) >> 1;
      if (sumSuf[mid] < g) {
        left = mid + 1;
      } else if (sumSuf[mid] === g) {
        left = mid;
        break;
      } else {
        right = mid - 1;
      }
    }
    if (left < n && sumSuf[left] === g && (left + i + 2) <= n) {
      ans = Math.min(ans, left + i);
    }
  }
  if (ans === Infinity) {
    return -1;
  }
  return ans;
};
