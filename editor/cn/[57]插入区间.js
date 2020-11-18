// 给出一个无重叠的 ，按照区间起始端点排序的区间列表。
//
// 在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。
//
//
//
// 示例 1：
//
// 输入：intervals = [[1,3],[6,9]], newInterval = [2,5]
// 输出：[[1,5],[6,9]]
//
//
// 示例 2：
//
// 输入：intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// 输出：[[1,2],[3,10],[12,16]]
// 解释：这是因为新的区间 [4,8] 与 [3,5],[6,7],[8,10] 重叠。
//
//
//
//
// 注意：输入类型已在 2019 年 4 月 15 日更改。请重置为默认代码定义以获取新的方法签名。
// Related Topics 排序 数组
// 👍 245 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  let [newLeft, newRight] = newInterval;
  let placed = false;
  const ans = [];
  for (const [left, right] of intervals) {
    if (left > newRight) {
      if (!placed) {
        ans.push([newLeft, newRight]);
        placed = true;
      }
      ans.push([left, right]);
    } else if (right < newLeft) {
      ans.push([left, right]);
    } else {
      newLeft = Math.min(newLeft, left);
      newRight = Math.max(newRight, right);
    }
  }
  if (!placed) {
    ans.push([newLeft, newRight]);
  }
  return ans;
};
// leetcode submit region end(Prohibit modification and deletion)
