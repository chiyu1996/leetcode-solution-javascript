// 1763. 最长的美好子字符串 easy 枚举
// https://leetcode-cn.com/problems/longest-nice-substring/
var longestNiceSubstring = function(s) {
  const n = s.length;
  let result = '';
  const check = (s) => {
    const set = new Set();
    for (const c of s) {
      set.add(c);
    }
    for (const c of set) {
      if (c >= 'a' && c <= 'z' && !set.has(c.toUpperCase())) {
        return false;
      }
      if (c >= 'A' && c <= 'Z' && !set.has(c.toLowerCase())) {
        return false;
      }
    }
    return true;
  };
  for (let i = 0; i < n; i++) {
    for (let j = 1; j + i <= n; j++) {
      if (j > result.length && check(s.substr(i, j))) {
        result = s.substr(i, j);
      }
    }
  }
  return result;
};
// 1764. 通过连接另一个数组的子数组得到一个数组 medium 枚举
// https://leetcode-cn.com/problems/form-array-by-concatenating-subarrays-of-another-array/
var canChoose = function(groups, nums) {
  let start = 0;
  const m = nums.length;
  for (const v of groups) {
    const n = v.length;
    while (1) {
      if (n > m - start) {
        return false;
      }
      let found = true;
      for (let i = start; i - start < n && i < m; i++) {
        if (v[i - start] !== nums[i]) {
          found = false;
        }
      }
      if (found) {
        start += v.length;
        break;
      } else {
        start++;
      }
    }
  }
  return true;
};
// 1765. 地图中的最高点 medium bfs
// https://leetcode-cn.com/problems/map-of-highest-peak/
/**
 * @param {number[][]} isWater
 * @return {number[][]}
 */
var MyQueue = function() {
  this.stack1 = [];
  this.stack2 = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.stack1.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  if (this.stack2.length === 0) {
    while (this.stack1.length !== 0) {
      this.stack2.push(this.stack1.pop());
    }
  }
  return this.stack2.pop() || -1;
};
MyQueue.prototype.empty = function() {
  return this.stack1.length === 0 && this.stack2.length === 0
};
var highestPeak = function(isWater) {
  const n = isWater.length;
  const m = isWater[0].length;
  const ans = new Array(n).fill(undefined).map(() => new Array(m).fill(-1));
  const dirs = [[-1, 0], [0, -1], [1, 0], [0, 1]];
  const q = new MyQueue();
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (isWater[i][j]) {
        ans[i][j] = 0;
        q.push([i, j]);
      }
    }
  }
  while (!q.empty()) {
    const [x, y] = q.pop();
    for (const [offsetX, offsetY] of dirs) {
      const newX = x + offsetX;
      const newY = y + offsetY;
      if (newX < 0 || newX >= n || newY < 0 || newY >= m) {
        continue;
      }
      if (ans[newX][newY] === -1) {
        ans[newX][newY] = ans[x][y] + 1;
        q.push([newX, newY]);
      }
    }
  }
  return ans;
};

// 1766. 互质树 hard dfs + 数学
// https://leetcode-cn.com/problems/tree-of-coprimes/
/**
 * @param {number[]} nums
 * @param {number[][]} edges
 * @return {number[]}
 */
var getCoprimes = function(nums, edges) {
  const n = nums.length;
  const edge = new Array(n).fill(undefined).map(() => []);
  const result = new Array(n);
  const prime = new Array(55).fill(undefined).map(() => []);
  const stack = new Array(55).fill(undefined).map(() => []);
  for (const [u, v] of edges) {
    edge[u].push(v);
    edge[v].push(u);
  }
  const gcd = (a, b) => {
    if (a % b === 0) { return b; }
    return gcd(b, a % b);
  };
  const dfs = (u, depth, fa) => {
    let ans = [-1, -1];
    for (const c of prime[nums[u]]) {
      const temp = stack[c];
      if (temp.length) {
        ans = ans[0] > temp[temp.length - 1][0] ? [...ans] : [...temp[temp.length - 1]];
      }
    }
    result[u] = ans[1];
    stack[nums[u]].push([depth, u]);
    for (const v of edge[u]) {
      if (v === fa) {
        continue;
      }
      dfs(v, depth + 1, u);
    }
    stack[nums[u]].pop();
  };
  for (let i = 1; i <= 50; i++) {
    for (let j = 1; j <= 50; j++) {
      if (gcd(i, j) === 1) {
        prime[i].push(j);
      }
    }
  }
  dfs(0, 1, -1);
  return result;
};
