// 1768. 交替合并字符串 easy 暴力
// https://leetcode-cn.com/problems/merge-strings-alternately/
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  const n = word1.length;
  const m = word2.length;
  let first = 0;
  let second = 0;
  let result = '';
  while (first < n && second < m) {
    if (first === second) {
      result += word1[first++];
    } else {
      result += word2[second++];
    }
  }
  if (first < n) {
    result += word1.substring(first);
  }
  if (second < m) {
    result += word2.substring(second);
  }
  return result;
};
// 1769. 移动所有球到每个盒子所需的最小操作数 medium 暴力
// https://leetcode-cn.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/
/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
  const n = boxes.length;
  const result = [];
  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (j === i) {
        continue;
      }
      if (boxes[j] === '1') {
        count += Math.abs(j - i);
      }
    }
    result[i] = count;
  }
  return result;
};
// 1770. 执行乘法运算的最大分数 medium dp
// https://leetcode-cn.com/problems/maximum-score-from-performing-multiplication-operations/
var maximumScore = function(nums, multipliers) {
  const n = nums.length;
  const m = multipliers.length;
  const dp = new Array(m + 1).fill(undefined).map(() => new Array(m + 1).fill(-Infinity));
  for (let i = 0; i <= m; i++) {
    dp[m][i] = 0;
  }
  for (let i = m - 1; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      dp[i][j] = Math.max(dp[i + 1][j + 1] + multipliers[i] * nums[j], dp[i + 1][j] + multipliers[i] * nums[n - (i - j) - 1]);
    }
  }
  return dp[0][0];
};
// 1771. 由子序列构造的最长回文串的长度 hard dp
// https://leetcode-cn.com/problems/maximize-palindrome-length-from-subsequences/
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var longestPalindrome = function(word1, word2) {
  const n = word1.length;
  const m = word2.length;
  const lastPos = new Array(128).fill(-1);
  for (let i = m - 1; i >= 0; i--) {
    if (lastPos[word2.charCodeAt(i)] === -1) {
      lastPos[word2.charCodeAt(i)] = i;
    }
  }
  let result = 0;
  const used = new Array(128).fill(false);
  for (let i = 0; i < n; i++) {
    const pos = word1.charCodeAt(i);
    if (used[pos]) {
      continue;
    }
    used[pos] = true;
    if (lastPos[pos] !== -1) {
      result = Math.max(result, 2);
      if (n - i + lastPos[pos] + 2 < result) {
        continue;
      }
      const s1 = word1.substr(i + 1) + word2.substr(0, lastPos[pos]);
      if (s1.length === 0) {
        continue;
      }
      const s2 = s1.split('').reverse().join('');
      result = Math.max(result, 2 + longestCommonSubsequence(s1, s2));
    }
  }

  return result;
};
var longestCommonSubsequence = function(text1, text2) {
  const m = text1.length; const n = text2.length;
  const dp = new Int32Array(n + 1);
  let cur = 0;
  let lastTop = 0;
  for (let i = 1; i <= m; i++) {
    cur = 0;
    for (let j = 1; j <= n; j++) {
      lastTop = cur;
      cur = dp[j];
      if (text1[i - 1] === text2[j - 1]) {
        dp[j] = lastTop + 1;
      } else {
        dp[j] = Math.max(dp[j], dp[j - 1]);
      }
    }
  }
  return dp[n];
};
