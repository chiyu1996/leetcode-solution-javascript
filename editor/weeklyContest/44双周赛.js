// 1732. 找到最高海拔 easy-贪心
// https://leetcode-cn.com/problems/find-the-highest-altitude/
var largestAltitude = function(gain) {
  let now = 0;
  let result = 0;
  for (const g of gain) {
    now += g;
    result = Math.max(result, now);
  }
  return result;
};

// 1733. 需要教语言的最少人数 medium-贪心
// https://leetcode-cn.com/problems/minimum-number-of-people-to-teach/
var minimumTeachings = function(n, languages, friendships) {
  const m = languages.length;
  let arr = new Array(m + 1).fill(undefined).map(() => []);
  for (let i = 0; i < m; i++) {
    for (const language of languages[i]) {
      arr[i + 1].push(language);
    }
  }
  const union = new Array(m + 1).fill(undefined).map(() => []);
  for (const [from, to] of friendships) {
    const set = new Set([...arr[from], ...arr[to]]);
    union[from][to] = set.size === arr[from].length + arr[to].length;
  }
  let result = Infinity;
  for (let i = 1; i <= n; i++) {
    const temp = arr.map(item => {
      return [...item];
    });
    let count = 0;
    for (const [from, to] of friendships) {
      if (union[from][to]) {
        if (!arr[from].includes(i)) {
          count++;
          arr[from].push(i);
        }
        if (!arr[to].includes(i)) {
          count++;
          arr[to].push(i);
        }
      }
    }
    arr = temp;
    result = Math.min(result, count);
  }
  return result;
};
// 1734. 解码异或后的排列 medium-前缀和+位运算
// https://leetcode-cn.com/problems/decode-xored-permutation/
/**
 * @param {number[]} encoded
 * @return {number[]}
 */
var decode = function(encoded) {
  const n = encoded.length + 1;
  const pre = [];
  pre[1] = encoded[0];
  for (let i = 1; i < n - 1; i++) {
    pre[i + 1] = pre[i] ^ encoded[i];
  }
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum ^= i;
  }
  let left = 0;
  let right = n - 1;
  while (left !== right) {
    sum ^= pre[right] ^ pre[left];
    left++;
    right--;
  }
  const result = new Array(n);
  result[left] = sum;
  for (let i = left + 1; i < n; i++) {
    result[i] = result[i - 1] ^ encoded[i - 1];
  }
  for (let i = right - 1; i >= 0; i--) {
    result[i] = result[i + 1] ^ encoded[i];
  }
  return result;
};
