// 给你一份工作时间表 hours，上面记录着某一位员工每天的工作小时数。
//
// 我们认为当员工一天中的工作小时数大于 8 小时的时候，那么这一天就是「劳累的一天」。
//
// 所谓「表现良好的时间段」，意味在这段时间内，「劳累的天数」是严格 大于「不劳累的天数」。
//
// 请你返回「表现良好时间段」的最大长度。
//
//
//
// 示例 1：
//
// 输入：hours = [9,9,6,0,6,6,9]
// 输出：3
// 解释：最长的表现良好时间段是 [9,9,6]。
//
//
//
// 提示：
//
//
// 1 <= hours.length <= 10000
// 0 <= hours[i] <= 16
//
// Related Topics 栈
// 👍 118 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function(hours) {
  const n = hours.length;
  const arr = hours.map(hour => {
    if (hour > 8) {
      return 1;
    } else {
      return -1;
    }
  })
  const preSum = new Int32Array(n + 1);
  for (let i = 1; i <= n; i++) {
    preSum[i] = preSum[i - 1] + arr[i - 1];
  }
  const stack = [];
  for (let i = 0; i < n; i++) {
    if (!stack.length || preSum[stack[stack.length - 1]] > preSum[i]) {
      stack.push(i);
    }
  }
  let i = n;
  let ans = 0;
  while (i >= 0) {
    while (stack.length && preSum[stack[stack.length - 1]] < preSum[i]) {
      ans = Math.max(ans, i - stack[stack.length - 1]);
      stack.pop();
    }
    i -= 1;
  }
  return ans;
};
// leetcode submit region end(Prohibit modification and deletion)
