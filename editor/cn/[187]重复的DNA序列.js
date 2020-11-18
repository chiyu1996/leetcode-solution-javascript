// 所有 DNA 都由一系列缩写为 A，C，G 和 T 的核苷酸组成，例如：“ACGAATTCCG”。在研究 DNA 时，识别 DNA 中的重复序列有时会对研究
// 非常有帮助。
//
// 编写一个函数来查找目标子串，目标子串的长度为 10，且在 DNA 字符串 s 中出现次数超过一次。
//
//
//
// 示例：
//
// 输入：s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
// 输出：["AAAAACCCCC", "CCCCCAAAAA"]
// Related Topics 位运算 哈希表
// 👍 122 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
  const map = {}
  const ans = []
  for (let i = 0; i < s.length; i++) {
    const w = s.slice(i, i + 10)

    if (map[w]) {
      if (map[w] === 1) {
        ans.push(w);
      }
      map[w] += 1;
    } else {
      map[w] = 1;
    }
  }
  return ans;
};
// leetcode submit region end(Prohibit modification and deletion)
