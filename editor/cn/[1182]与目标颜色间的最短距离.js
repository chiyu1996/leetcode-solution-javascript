//给你一个数组 colors，里面有 1、2、 3 三种颜色。 
//
// 我们需要在 colors 上进行一些查询操作 queries，其中每个待查项都由两个整数 i 和 c 组成。 
//
// 现在请你帮忙设计一个算法，查找从索引 i 到具有目标颜色 c 的元素之间的最短距离。 
//
// 如果不存在解决方案，请返回 -1。 
//
// 
//
// 示例 1： 
//
// 输入：colors = [1,1,2,1,3,2,2,3,3], queries = [[1,3],[2,2],[6,1]]
//输出：[3,0,3]
//解释： 
//距离索引 1 最近的颜色 3 位于索引 4（距离为 3）。
//距离索引 2 最近的颜色 2 就是它自己（距离为 0）。
//距离索引 6 最近的颜色 1 位于索引 3（距离为 3）。
// 
//
// 示例 2： 
//
// 输入：colors = [1,2], queries = [[0,3]]
//输出：[-1]
//解释：colors 中没有颜色 3。
// 
//
// 
//
// 提示： 
//
// 
// 1 <= colors.length <= 5*10^4 
// 1 <= colors[i] <= 3 
// 1 <= queries.length <= 5*10^4 
// queries[i].length == 2 
// 0 <= queries[i][0] < colors.length 
// 1 <= queries[i][1] <= 3 
// 
// Related Topics 二分查找 
// 👍 15 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} colors
 * @param {number[][]} queries
 * @return {number[]}
 */
var shortestDistanceColor = function (colors, queries) {
    let map = new Map();
    let ans = [];
    const getClosest = (indexs, target) => {
        let left = 0, right = indexs.length;
        while (left < right) {
            let mid = (left + right) >> 1;
            if (indexs[mid] < target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        if (left === 0) {
            return indexs[0];
        } else if (left === indexs.length) {
            return indexs[left - 1];
        } else if (indexs[left] - target < target - indexs[left - 1]) {
            return indexs[left];
        }
        return indexs[left - 1];
    };
    for (let i = 0; i < colors.length; i++) {
        if (map.has(colors[i])) {
            map.get(colors[i]).push(i);
        } else {
            map.set(colors[i], [i]);
        }
    }
    for (let [target, color] of queries) {
        if (!map.has(color)) {
            ans.push(-1);
            continue;
        }
        let indexs = map.get(color);
        ans.push(Math.abs(target - getClosest(indexs, target)));
    }
    return ans;
};
//leetcode submit region end(Prohibit modification and deletion)
