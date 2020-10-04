//给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。 
//
// candidates 中的每个数字在每个组合中只能使用一次。 
//
// 说明： 
//
// 
// 所有数字（包括目标数）都是正整数。 
// 解集不能包含重复的组合。 
// 
//
// 示例 1: 
//
// 输入: candidates = [10,1,2,7,6,1,5], target = 8,
//所求解集为:
//[
//  [1, 7],
//  [1, 2, 5],
//  [2, 6],
//  [1, 1, 6]
//]
// 
//
// 示例 2: 
//
// 输入: candidates = [2,5,2,1,2], target = 5,
//所求解集为:
//[
//  [1,2,2],
//  [5]
//] 
// Related Topics 数组 回溯算法 
// 👍 414 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    let ans = [];
    let path = [];
    candidates.sort((a, b) => a - b);

    function dfs(start, value) {
        if (value === 0) {
            ans.push([...path]);
            return;
        }
        for (let i = start; i < candidates.length && value >= candidates[i]; i++) {
            if (i > start && candidates[i] === candidates[i - 1])
                continue;
            path.push(candidates[i]);
            dfs(i + 1, value - candidates[i]);
            path.pop();
        }
    }

    dfs(0, target);
    return ans;
};
//leetcode submit region end(Prohibit modification and deletion)
