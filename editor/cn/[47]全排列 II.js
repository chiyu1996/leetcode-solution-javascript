//给定一个可包含重复数字的序列，返回所有不重复的全排列。 
//
// 示例: 
//
// 输入: [1,1,2]
//输出:
//[
//  [1,1,2],
//  [1,2,1],
//  [2,1,1]
//] 
// Related Topics 回溯算法 
// 👍 480 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    let res = [];
    nums = nums.sort((a, b) => a - b);

    function binary(start, array, length) {
        if (start === length) {
            res.push([...array]);
            return;
        }
        const map = new Map();
        for (let j = start; j < length; j++) {
            if (!map[array[j]]) {
                map[array[j]] = 1;
                array.splice(start, 1, ...array.splice(j, 1, array[start]));
                binary(start + 1, array, length);
                array.splice(start, 1, ...array.splice(j, 1, array[start]));

            }
        }
    }

    binary(0, nums, nums.length);
    return res;
};
//leetcode submit region end(Prohibit modification and deletion)
