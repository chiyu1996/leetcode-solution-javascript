//还记得童话《卖火柴的小女孩》吗？现在，你知道小女孩有多少根火柴，请找出一种能使用所有火柴拼成一个正方形的方法。不能折断火柴，可以把火柴连接起来，并且每根火柴
//都要用到。 
//
// 输入为小女孩拥有火柴的数目，每根火柴用其长度表示。输出即为是否能用所有的火柴拼成正方形。 
//
// 示例 1: 
//
// 
//输入: [1,1,2,2,2]
//输出: true
//
//解释: 能拼成一个边长为2的正方形，每边两根火柴。
// 
//
// 示例 2: 
//
// 
//输入: [3,3,3,3,4]
//输出: false
//
//解释: 不能用所有火柴拼成一个正方形。
// 
//
// 注意: 
//
// 
// 给定的火柴长度和在 0 到 10^9之间。 
// 火柴数组的长度不超过15。 
// 
// Related Topics 深度优先搜索 
// 👍 135 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var makesquare = function (nums) {
    if (!nums || nums.length < 4) return false;
    let side = new Int32Array(4);
    const dfs = (start, target) => {
        if (start === nums.length) {
            return side[0] === side[1] && side[0] === side[2] && side[0] === side[3];
        }
        if (nums[start] > target) {
            return false;
        }
        for (let i = 0; i < 4; i++) {
            if (side[i] + nums[start] > target) {
                continue;
            }
            side[i] += nums[start];
            if (dfs(start + 1, target)) {
                return true;
            }
            side[i] -= nums[start];
        }
        return false;
    };
    let sum = nums.reduce((prev, val) => {
        return prev + val;
    }, 0);
    nums.sort((a, b) => b - a);
    if (sum % 4) {
        return false;
    }
    let target = sum / 4;
    return dfs(0, target);

};
//leetcode submit region end(Prohibit modification and deletion)
