// 给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。一个数字可
// 能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。
//
//
//
// 示例 1:
//
// 输入: 12258
// 输出: 5
// 解释: 12258有5种不同的翻译，分别是"bccfi", "bwfi", "bczi", "mcfi"和"mzi"
//
//
//
// 提示：
//
//
// 0 <= num < 231
//
// 👍 138 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function(num) {
  const s = num.toString();
  let p = 0; let q = 0; let r = 1;
  for (let i = 0; i < s.length; i++) {
    p = q;
    q = r;
    r = q;
    if (i === 0) {
      continue;
    }
    const str = s.substr(i - 1, 2);
    if (str >= '10' && str <= '25') {
      r += p;
    }
  }
  return r;
};
// leetcode submit region end(Prohibit modification and deletion)
