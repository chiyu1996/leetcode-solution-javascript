// 给定一个会议时间安排的数组，每个会议时间都会包括开始和结束的时间 [[s1,e1],[s2,e2],...] (si < ei)，为避免会议冲突，同时要考虑
// 充分利用会议室资源，请你计算至少需要多少间会议室，才能满足这些会议安排。
//
// 示例 1:
//
// 输入: [[0, 30],[5, 10],[15, 20]]
// 输出: 2
//
// 示例 2:
//
// 输入: [[7,10],[2,4]]
// 输出: 1
// Related Topics 堆 贪心算法 排序
// 👍 180 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
  if (!intervals.length) return 0;
  const start = [];
  const end = [];
  intervals.forEach(item => {
    start.push(item[0]);
    end.push(item[1]);
  });
  start.sort((a, b) => a - b);
  end.sort((a, b) => a - b);
  let ans = 0;
  let startPtr = 0; let endPtr = 0;
  while (startPtr < intervals.length) {
    if (start[startPtr] >= end[endPtr]) {
      ans -= 1;
      endPtr += 1;
    }
    ans += 1;
    startPtr += 1;
  }
  return ans;
};
// leetcode submit region end(Prohibit modification and deletion)
