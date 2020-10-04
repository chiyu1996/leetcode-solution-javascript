//给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。 
//
// 
//
// 在杨辉三角中，每个数是它左上方和右上方的数的和。 
//
// 示例: 
//
// 输入: 5
//输出:
//[
//     [1],
//    [1,1],
//   [1,2,1],
//  [1,3,3,1],
// [1,4,6,4,1]
//] 
// Related Topics 数组 
// 👍 357 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (!numRows) return [];
    const loop = (lastarr) => {
        if (lastarr.length < numRows) {
            let newarr = [];
            newarr[0] = 1;
            newarr[lastarr.length] = 1;
            for (var i = 0; i < lastarr.length - 1; i++) {
                newarr[i + 1] = lastarr[i] + lastarr[i + 1];
            }
            arr.push(newarr);
            loop(newarr);
        }
    };
    let arr = [];
    arr.push([1]);
    loop([1]);
    return arr;
};
//leetcode submit region end(Prohibit modification and deletion)
