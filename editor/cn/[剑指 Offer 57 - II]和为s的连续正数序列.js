//输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。 
//
// 序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。 
//
// 
//
// 示例 1： 
//
// 输入：target = 9
//输出：[[2,3,4],[4,5]]
// 
//
// 示例 2： 
//
// 输入：target = 15
//输出：[[1,2,3,4,5],[4,5,6],[7,8]]
// 
//
// 
//
// 限制： 
//
// 
// 1 <= target <= 10^5 
// 
//
// 
// 👍 160 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
    let right = 2;
    let left = 1;
    let ans = [];
    while (left < right) {
        let sum = (left + right) * (right - left + 1) / 2;
        if (sum === target) {
            let tmp = [];
            for (let i = left; i <= right; i++) {
                tmp.push(i);
            }
            left++;
            ans.push(tmp);
        } else if (sum < target) {
            right++;
        } else {
            left++;
        }
    }
    return ans;

};
//leetcode submit region end(Prohibit modification and deletion)
