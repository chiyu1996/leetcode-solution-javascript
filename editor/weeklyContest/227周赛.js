/**
 * 5672. 检查数组是否经排序和轮转得到-easy
 * https://leetcode-cn.com/problems/check-if-array-is-sorted-and-rotated/
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
  const sorted = [...nums].sort((a, b) => a - b);
  const arr = [...nums, ...nums];
  const n = nums.length;
  for (let i = 0; i < 2 * n; i++) {
    let flag = true;
    for (let j = 0; j < n; j++) {
      if (arr[i + j] !== sorted[j]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      return true;
    }
  }
  return false;
};

/**
 * 5673. 移除石子的最大得分-medium
 * https://leetcode-cn.com/problems/maximum-score-from-removing-stones/
 */

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var maximumScore = function(a, b, c) {
  [a, b, c] = [a, b, c].sort((a, b) => b - a);
  let result = 0;
  while (b + c > a) {
    result++;
    b--;
    c--;
  }
  result += c;
  a = a - c;
  result += a > b ? b : a;
  return result;
};
/**
 * 5674. 构造字典序最大的合并字符串-medium
 * https://leetcode-cn.com/problems/largest-merge-of-two-strings/
 */
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var largestMerge = function(word1, word2) {
  let first = 0;
  let second = 0;
  const l1 = word1.length;
  const l2 = word2.length;
  let result = '';
  while (first < l1 && second < l2) {
    if (word1.charCodeAt(first) > word2.charCodeAt(second)) {
      result += word1[first++];
    } else if (word1.charCodeAt(first) === word2.charCodeAt(second)) {
      if (word1.substring(first, l1).localeCompare(word2.substring(second, l2)) > 0) {
        result += word1[first++];
      } else {
        result += word2[second++];
      }
    } else {
      result += word2[second++];
    }
  }
  if (first < l1) {
    result += word1.substring(first, l1);
  }
  if (second < l2) {
    result += word2.substring(second, l2);
  }
  return result;
};

/**
 * 5675. 最接近目标值的子序列和-hard
 * https://leetcode-cn.com/problems/closest-subsequence-sum/]
 */

/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var minAbsDifference = function(nums, goal) {
  const set = new Set();
  const n = nums.length;
  const m = n >> 1;
  let result = Infinity;
  for (let i = 0; i < 1 << m; i++) {
    let temp = 0;
    for (let j = 0; j < m; j++) {
      if (i & (1 << j)) {
        temp += nums[j];
      }
    }
    result = Math.min(result, Math.abs(temp - goal));
    set.add(temp);
  }
  const sorted = [...set.values()].sort((a, b) => a - b);
  for (let i = 0; i < 1 << (n - m); i++) {
    let temp = 0;
    for (let j = 0; j < n - m; j++) {
      if (i & (1 << j)) {
        temp += nums[j + m];
      }
    }
    result = Math.min(result, Math.abs(temp - goal));
    const find = goal - temp;
    let left = 0;
    let right = sorted.length - 1;
    while (left <= right) {
      const mid = (left + right) >> 1;
      if (sorted[mid] > find) {
        right = mid - 1;
      } else if (sorted[mid] === find) {
        return 0;
      } else {
        left = mid + 1;
      }
    }
    for (let j = left - 1; j <= left + 1; j++) {
      if (j >= 0 && j < sorted.length) {
        result = Math.min(result, Math.abs(sorted[j] + temp - goal));
      }
    }
  }
  return result;
}
