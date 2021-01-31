// 如果交换字符串 X 中的两个不同位置的字母，使得它和字符串 Y 相等，那么称 X 和 Y 两个字符串相似。如果这两个字符串本身是相等的，那它们也是相似的。
//
//
// 例如，"tars" 和 "rats" 是相似的 (交换 0 与 2 的位置)； "rats" 和 "arts" 也是相似的，但是 "star" 不与 "t
// ars"，"rats"，或 "arts" 相似。
//
// 总之，它们通过相似性形成了两个关联组：{"tars", "rats", "arts"} 和 {"star"}。注意，"tars" 和 "arts" 是在同
// 一组中，即使它们并不相似。形式上，对每个组而言，要确定一个单词在组中，只需要这个词和该组中至少一个单词相似。
//
// 给你一个字符串列表 strs。列表中的每个字符串都是 strs 中其它所有字符串的一个字母异位词。请问 strs 中有多少个相似字符串组？
//
//
//
// 示例 1：
//
//
// 输入：strs = ["tars","rats","arts","star"]
// 输出：2
//
//
// 示例 2：
//
//
// 输入：strs = ["omv","ovm"]
// 输出：1
//
//
//
//
// 提示：
//
//
// 1 <= strs.length <= 100
// 1 <= strs[i].length <= 1000
// sum(strs[i].length) <= 2 * 104
// strs[i] 只包含小写字母。
// strs 中的所有单词都具有相同的长度，且是彼此的字母异位词。
//
//
//
//
// 备注：
//
// 字母异位词（anagram），一种把某个字符串的字母的位置（顺序）加以改换所形成的新词。
// Related Topics 深度优先搜索 并查集 图
// 👍 95 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string[]} strs
 * @return {number}
 */
var numSimilarGroups = function(strs) {
  const n = strs.length;
  const m = strs[0].length;
  const uf = new UnionFind(n);
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const fi = uf.find(i);
      const fj = uf.find(j);
      if (check(strs[i], strs[j], m)) {
        uf.union(fi, fj);
      }
    }
  }
  return uf.count;
};
function check(a, b, length) {
  let count = 0;
  for (let i = 0; i < length; i++) {
    if (a[i] !== b[i]) {
      count++;
      if (count > 2) {
        return false;
      }
    }
  }
  return true;
}
class UnionFind {
  constructor(n) {
    this.fa = new Array(n).fill(0).map((value, index) => index);
    this.size = new Array(n).fill(1);
    this.count = n;
  }

  find(index) {
    if (this.fa[index] !== index) {
      this.fa[index] = this.find(this.fa[index])
    }
    return this.fa[index];
  }
  union(index1, index2) {
    let x = this.find(index1);
    let y = this.find(index2);
    if (x === y) {
      return false;
    }
    if (x > y) {
      [x, y] = [y, x];
    }
    this.fa[x] = y;
    this.size[y] += this.size[x];
    this.count--;
    return true;
  }
}
// leetcode submit region end(Prohibit modification and deletion)
