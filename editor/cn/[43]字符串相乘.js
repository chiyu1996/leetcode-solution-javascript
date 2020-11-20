// 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。
//
// 示例 1:
//
// 输入: num1 = "2", num2 = "3"
// 输出: "6"
//
// 示例 2:
//
// 输入: num1 = "123", num2 = "456"
// 输出: "56088"
//
// 说明：
//
//
// num1 和 num2 的长度小于110。
// num1 和 num2 只包含数字 0-9。
// num1 和 num2 均不以零开头，除非是数字 0 本身。
// 不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。
//
// Related Topics 数学 字符串
// 👍 493 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0') { return '0'; }
  num1 = num1.split('').reverse();
  num2 = num2.split('').reverse();
  const length1 = num1.length;
  const length2 = num2.length;
  const ans = new Array(length1 + length2).fill(0);
  for (let i = 0; i < length1; i++) {
    for (let j = 0; j < length2; j++) {
      ans[i + j] += Number(num1[i]) * Number(num2[j]);
    }
  }
  for (let i = 0; i < length1 + length2; i++) {
    if (ans[i] >= 10) {
      ans[i + 1] += Math.floor(ans[i] / 10);
      ans[i] = ans[i] % 10;
    }
  }
  let zero = -1;
  for (let i = length1 + length2 - 1; i >= 0; i--) {
    if (ans[i] !== 0) {
      zero = i;
      break;
    }
  }
  ans.splice(zero + 1);
  return ans.reverse().join('');
};
// leetcode submit region end(Prohibit modification and deletion)
