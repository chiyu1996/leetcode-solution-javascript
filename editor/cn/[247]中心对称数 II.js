// 中心对称数是指一个数字在旋转了 180 度之后看起来依旧相同的数字（或者上下颠倒地看）。
//
// 找到所有长度为 n 的中心对称数。
//
// 示例 :
//
// 输入:  n = 2
// 输出: ["11","69","88","96"]
//
// Related Topics 递归 数学
// 👍 41 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {string[]}
 */
var findStrobogrammatic = function(n) {
  const helper = (n, m) => {
    if (n < 0 || m < 0 || m > n) {
      return [];
    }
    if (m === 0) return [''];
    if (m === 1) return ['0', '1', '8'];
    const tmp = helper(n, m - 2);
    const ans = [];
    for (let i = 0; i < tmp.length; i++) {
      if (n !== m) { ans.push(`0${tmp[i]}0`); }
      ans.push(`1${tmp[i]}1`);
      ans.push(`8${tmp[i]}8`);
      ans.push(`6${tmp[i]}9`);
      ans.push(`9${tmp[i]}6`);
    }
    return ans;
  };
  return helper(n, n);
};
// leetcode submit region end(Prohibit modification and deletion)
