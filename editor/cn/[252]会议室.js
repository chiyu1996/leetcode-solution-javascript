//给定一个会议时间安排的数组，每个会议时间都会包括开始和结束的时间 [[s1,e1],[s2,e2],...] (si < ei)，请你判断一个人是否能够参加
//这里面的全部会议。 
//
// 示例 1: 
//
// 输入: [[0,30],[5,10],[15,20]]
//输出: false
// 
//
// 示例 2: 
//
// 输入: [[7,10],[2,4]]
//输出: true
// 
// Related Topics 排序 
// 👍 44 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function (intervals) {
    intervals.sort((a, b) => {
        return a[0] - b[0];
    });
    for (let i = 0; i < intervals.length - 1; i++) {
        if (intervals[i][1] > intervals[i + 1][0]) {
            return false;
        }
    }
    return true;
};
//leetcode submit region end(Prohibit modification and deletion)
