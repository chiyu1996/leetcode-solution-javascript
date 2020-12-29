// 给定一个单词数组和一个长度 maxWidth，重新排版单词，使其成为每行恰好有 maxWidth 个字符，且左右两端对齐的文本。
//
// 你应该使用“贪心算法”来放置给定的单词；也就是说，尽可能多地往每行中放置单词。必要时可用空格 ' ' 填充，使得每行恰好有 maxWidth 个字符。
//
// 要求尽可能均匀分配单词间的空格数量。如果某一行单词间的空格不能均匀分配，则左侧放置的空格数要多于右侧的空格数。
//
// 文本的最后一行应为左对齐，且单词之间不插入额外的空格。
//
// 说明:
//
//
// 单词是指由非空格字符组成的字符序列。
// 每个单词的长度大于 0，小于等于 maxWidth。
// 输入单词数组 words 至少包含一个单词。
//
//
// 示例:
//
// 输入:
// words = ["This", "is", "an", "example", "of", "text", "justification."]
// maxWidth = 16
// 输出:
// [
//   "This    is    an",
//   "example  of text",
//   "justification.  "
// ]
//
//
// 示例 2:
//
// 输入:
// words = ["What","must","be","acknowledgment","shall","be"]
// maxWidth = 16
// 输出:
// [
//  "What   must   be",
//  "acknowledgment  ",
//  "shall be        "
// ]
// 解释: 注意最后一行的格式应为 "shall be    " 而不是 "shall     be",
//     因为最后一行应为左对齐，而不是左右两端对齐。
//     第二行同样为左对齐，这是因为这行只包含一个单词。
//
//
// 示例 3:
//
// 输入:
// words = ["Science","is","what","we","understand","well","enough","to","explain
// ",
//         "to","a","computer.","Art","is","everything","else","we","do"]
// maxWidth = 20
// 输出:
// [
//  "Science  is  what we",
//  "understand      well",
//  "enough to explain to",
//  "a  computer.  Art is",
//  "everything  else  we",
//  "do                  "
// ]
//
// Related Topics 字符串
// 👍 121 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
  const fillWords = (begin, end, isLast) => {
    const wordCount = end - begin + 1;
    let lengthCount = maxWidth - wordCount + 1;
    for (let i = begin; i <= end; i++) {
      lengthCount -= words[i].length;
    }
    const spaceSuffix = 1;
    const spaceAve = wordCount === 1 ? 1 : Math.floor(lengthCount / (wordCount - 1));
    const spaceExtra = wordCount === 1 ? 0 : lengthCount % (wordCount - 1);
    let string = '';
    for (let i = begin; i < end; i++) {
      string += words[i];
      if (isLast) {
        string += ' '.repeat(1);
        continue;
      }
      string += ' '.repeat(spaceSuffix + spaceAve + ((i - begin) < spaceExtra ? 1 : 0));
    }
    string += words[end];
    string += ' '.repeat(maxWidth - string.length);
    return string;
  };
  let begin = 0;
  const ans = [];
  const length = words.length;
  let cnt = 0;
  for (let i = 0; i < length; i++) {
    cnt += words[i].length + 1;
    if (i + 1 === length || cnt + words[i + 1].length > maxWidth) {
      ans.push(fillWords(begin, i, i + 1 === length));
      begin = i + 1;
      cnt = 0;
    }
  }
  return ans;
};
// leetcode submit region end(Prohibit modification and deletion)
