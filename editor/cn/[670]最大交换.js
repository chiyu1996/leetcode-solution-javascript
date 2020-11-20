// 给定一个非负整数，你至多可以交换一次数字中的任意两位。返回你能得到的最大值。
//
// 示例 1 :
//
//
// 输入: 2736
// 输出: 7236
// 解释: 交换数字2和数字7。
//
//
// 示例 2 :
//
//
// 输入: 9973
// 输出: 9973
// 解释: 不需要交换。
//
//
// 注意:
//
//
// 给定数字的范围是 [0, 108]
//
// Related Topics 数组 数学
// 👍 117 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
  num = (num + '').split('');
  const n = num.length;
  const last = new Array(10).fill(-1);
  for (let i = 0; i < num.length; i++) {
    last[num[i].charCodeAt(0) - '0'.charCodeAt(0)] = i;
  }
  for (let i = 0; i < num.length; i++) {
    for (let d = 9; d > num[i].charCodeAt(0) - '0'.charCodeAt(0); d--) {
      if (last[d] > i) {
        [num[i], num[last[d]]] = [num[last[d]], num[i]];
        return +(num.join(''));
      }
    }
  }
  return +(num.join(''));
};
// leetcode submit region end(Prohibit modification and deletion)
