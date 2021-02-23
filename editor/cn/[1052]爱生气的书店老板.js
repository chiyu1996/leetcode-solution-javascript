// 今天，书店老板有一家店打算试营业 customers.length 分钟。每分钟都有一些顾客（customers[i]）会进入书店，所有这些顾客都会在那一分
// 钟结束后离开。
//
// 在某些时候，书店老板会生气。 如果书店老板在第 i 分钟生气，那么 grumpy[i] = 1，否则 grumpy[i] = 0。 当书店老板生气时，那一
// 分钟的顾客就会不满意，不生气则他们是满意的。
//
// 书店老板知道一个秘密技巧，能抑制自己的情绪，可以让自己连续 X 分钟不生气，但却只能使用一次。
//
// 请你返回这一天营业下来，最多有多少客户能够感到满意的数量。
//
//
// 示例：
//
// 输入：customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], X = 3
// 输出：16
// 解释：
// 书店老板在最后 3 分钟保持冷静。
// 感到满意的最大客户数量 = 1 + 1 + 1 + 1 + 7 + 5 = 16.
//
//
//
//
// 提示：
//
//
// 1 <= X <= customers.length == grumpy.length <= 20000
// 0 <= customers[i] <= 1000
// 0 <= grumpy[i] <= 1
//
// Related Topics 数组 Sliding Window
// 👍 109 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, X) {
  let result = 0;
  let window = 0;
  let extra = 0;
  const n = customers.length;
  for (let i = 0; i < n; i++) {
    if (!grumpy[i]) {

    }
  }
  let left = 0; let right = 0;
  while (right < n) {
    result += (1 - grumpy[right]) * customers[right];
    window += grumpy[right] * customers[right];
    right++;
    extra = Math.max(window, extra);
    if (right - left === X) {
      window -= grumpy[left] * customers[left];
      left++;
    }
  }
  return result + extra;
};
// leetcode submit region end(Prohibit modification and deletion)
