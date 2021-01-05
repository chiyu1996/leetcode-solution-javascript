// 给定一个形如 “HH:MM” 表示的时刻，利用当前出现过的数字构造下一个距离当前时间最近的时刻。每个出现数字都可以被无限次使用。
//
// 你可以认为给定的字符串一定是合法的。例如，“01:34” 和 “12:09” 是合法的，“1:34” 和 “12:9” 是不合法的。
//
//
//
// 样例 1:
//
// 输入: "19:34"
// 输出: "19:39"
// 解释: 利用数字 1, 9, 3, 4 构造出来的最近时刻是 19:39，是 5 分钟之后。结果不是 19:33 因为这个时刻是 23 小时 59 分钟之后
// 。
//
//
//
//
// 样例 2:
//
// 输入: "23:59"
// 输出: "22:22"
// 解释: 利用数字 2, 3, 5, 9 构造出来的最近时刻是 22:22。 答案一定是第二天的某一时刻，所以选择可构造的最小时刻。
//
//
//
// Related Topics 字符串
// 👍 38 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} time
 * @return {string}
 */
var nextClosestTime = function(time) {
  let [a, b, _, c, d] = time;
  a = +a;
  b = +b;
  c = +c;
  d = +d;
  const set = new Set([a, b, c, d])
  const start = (a * 10 + b) * 60 + c * 10 + d;
  const total = 24 * 60;
  for (let i = start + 1; i <= total; i = (i + 1) % total) {
    const h1 = Math.floor(Math.floor(i / 60) / 10);
    const h2 = Math.floor(Math.floor(i / 60) % 10);
    const m1 = Math.floor((i % 60) / 10);
    const m2 = i % 60 % 10;
    if (set.has(h1) && set.has(h2) && set.has(m1) && set.has(m2)) {
      return `${h1}${h2}:${m1}${m2}`;
    }
  }
};
// leetcode submit region end(Prohibit modification and deletion)
