// 给定一个字符串，对该字符串可以进行 “移位” 的操作，也就是将字符串中每个字母都变为其在字母表中后续的字母，比如："abc" -> "bcd"。这样，我们可
// 以持续进行 “移位” 操作，从而生成如下移位序列：
//
// "abc" -> "bcd" -> ... -> "xyz"
//
// 给定一个包含仅小写字母字符串的列表，将该列表中所有满足 “移位” 操作规律的组合进行分组并返回。
//
//
//
// 示例：
//
// 输入：["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"]
// 输出：
// [
//  ["abc","bcd","xyz"],
//  ["az","ba"],
//  ["acef"],
//  ["a","z"]
// ]
// 解释：可以认为字母表首尾相接，所以 'z' 的后续为 'a'，所以 ["az","ba"] 也满足 “移位” 操作规律。
// Related Topics 哈希表 字符串
// 👍 30 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function(strings) {
  const map = new Map();
  for (let i = 0; i < strings.length; i++) {
    const len = strings[i].length;
    const diff = strings[i].charCodeAt(0) - 97;
    const arr = len === 1 ? [] : [0];
    for (let j = 1; j < strings[i].length; j++) {
      arr.push((strings[i].charCodeAt(j) - 97 - diff + 26) % 26);
    }
    const hash = `${len}#` + arr.join('#');
    if (map.has(hash)) {
      map.get(hash).push(strings[i]);
    } else {
      map.set(hash, [strings[i]]);
    }
  }
  return [...map.values()];
};
// leetcode submit region end(Prohibit modification and deletion)
