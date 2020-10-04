//给出一个区间的集合，请合并所有重叠的区间。 
//
// 
//
// 示例 1: 
//
// 输入: intervals = [[1,3],[2,6],[8,10],[15,18]]
//输出: [[1,6],[8,10],[15,18]]
//解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
// 
//
// 示例 2: 
//
// 输入: intervals = [[1,4],[4,5]]
//输出: [[1,5]]
//解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。 
//
// 注意：输入类型已于2019年4月15日更改。 请重置默认代码定义以获取新方法签名。 
//
// 
//
// 提示： 
//
// 
// intervals[i][0] <= intervals[i][1] 
// 
// Related Topics 排序 数组 
// 👍 633 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (intervals.length === 0) {
        return [];
    }
    intervals.sort((a, b) => {
        return a[0] - b[0];
    });
    let ans = [[...intervals[0]]];
    for (let i = 1; i < intervals.length; i++) {
        let current = intervals[i];
        let pop = ans.pop();
        if (current[0] >= pop[0] && current[0] <= pop[1]) {
            ans.push([pop[0], Math.max(current[1], pop[1])]);
        } else {
            ans.push([...pop]);
            ans.push([...current]);
        }
    }
    return ans;

};
//leetcode submit region end(Prohibit modification and deletion)
