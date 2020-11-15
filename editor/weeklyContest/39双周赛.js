// 5550. 拆炸弹 easy 数组
// https://leetcode-cn.com/problems/defuse-the-bomb/
var decrypt = function(code, k) {
  const n = code.length;
  const ans = new Uint32Array(n);
  if (k > 0) {
    for (let i = 0; i < code.length; i++) {
      for (let j = 0; j < k; j++) {
        ans[i] += code[(i + 1 + j) % n];
      }
    }
  } else if (k < 0) {
    for (let i = 0; i < code.length; i++) {
      for (let j = 0; j > k; j--) {
        ans[i] += code[(i - 1 + j + n) % n];
      }
    }
  }
  return ans;
};
// 5551. 使字符串平衡的最少删除次数 medium 前缀和
// https://leetcode-cn.com/problems/minimum-deletions-to-make-string-balanced/
var minimumDeletions = function(s) {
  const n = s.length;
  const A = new Int32Array(n);
  const B = new Int32Array(n);
  for (let i = n - 1; i >= 0; i--) {
    A[i] = A[i + 1] || 0;
    B[i] = B[i + 1] || 0;
    if (s[i] === 'a') {
      A[i] += 1;
    } else {
      B[i] += 1;
    }
  }
  let ans = Math.min(A[0], B[0]);
  for (let i = 0; i < n; i++) {
    ans = Math.min(ans, (B[0] - B[i]) + A[i]);
  }
  return ans;
};
// 5552. 到家的最少跳跃次数 medium bfs+剪枝
// https://leetcode-cn.com/problems/minimum-jumps-to-reach-home/
var minimumJumps = function(forbidden, a, b, x) {
  const bfs = () => {
    const queue = [[0, 0, false]];
    while (queue.length !== 0) {
      const [curr, step, back] = queue.shift();
      if (curr === x) {
        return step;
      }
      if (!forbidden.includes(curr - b) && curr - b >= 0 && !back && !set.has(curr - b)) {
        set.add(curr - b);
        queue.push([curr - b, step + 1, true]);
      }
      if (!forbidden.includes(curr + a) && !set.has(curr + a) && curr + a < 2 * (x + a + b)) {
        set.add(curr + a);
        queue.push([curr + a, step + 1, false]);
      }
    }
    return -1;
  };
  const set = new Set();
  return bfs();
};
