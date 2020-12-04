// 给定一个字符串S，检查是否能重新排布其中的字母，使得两相邻的字符不同。
//
// 若可行，输出任意可行的结果。若不可行，返回空字符串。
//
// 示例 1:
//
//
// 输入: S = "aab"
// 输出: "aba"
//
//
// 示例 2:
//
//
// 输入: S = "aaab"
// 输出: ""
//
//
// 注意:
//
//
// S 只包含小写字母并且长度在[1, 500]区间内。
//
// Related Topics 堆 贪心算法 排序 字符串
// 👍 255 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function(S) {
  if (S.length < 2) {
    return S;
  }
  const counts = new Array(26).fill(0);
  let maxCount = 0;
  const length = S.length;
  for (let i = 0; i < length; i++) {
    const c_idx = S.charCodeAt(i) - 97;
    counts[c_idx]++;
    maxCount = Math.max(maxCount, counts[c_idx]);
  }
  if (maxCount > Math.floor((length + 1) / 2)) {
    return '';
  }
  const ans = new Array(length);
  let evenIndex = 0;
  let oddIndex = 1;
  const halfLength = Math.floor(length / 2);
  for (let i = 0; i < 26; i++) {
    const c = String.fromCharCode(97 + i);
    while (counts[i] > 0 && counts[i] <= halfLength && oddIndex < length) {
      ans[oddIndex] = c;
      counts[i]--;
      oddIndex += 2;
    }
    while (counts[i] > 0) {
      ans[evenIndex] = c;
      counts[i]--;
      evenIndex += 2;
    }
  }
  return ans.join('');
};
