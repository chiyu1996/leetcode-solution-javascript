//输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。 
//
// 
//
// 示例 1： 
//
// 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
//输出：[1,2,3,6,9,8,7,4,5]
// 
//
// 示例 2： 
//
// 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
//输出：[1,2,3,4,8,12,11,10,9,5,6,7]
// 
//
// 
//
// 限制： 
//
// 
// 0 <= matrix.length <= 100 
// 0 <= matrix[i].length <= 100 
// 
//
// 注意：本题与主站 54 题相同：https://leetcode-cn.com/problems/spiral-matrix/ 
// Related Topics 数组 
// 👍 138 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (!matrix || matrix.length < 1) return [];
    let m = matrix.length;//行数
    let n = matrix[0].length;//列数
    if (n === 1) return [...matrix];
    let maxCount = m * n;
    let backArr = new Array(maxCount);
    let T = 0;//上边界
    let D = m;//下边界
    let L = 0;//左边界
    let R = n;//右边界
    let x = 0;//列坐标
    let y = 0;//行坐标
    let state = "Right";//定义四个方向，根据不同状态进行切换
    T = 1;//初始化从第一个，所以要把上边界加1
    for (var i = 0; i < maxCount; i++) {
        backArr[i] = matrix[y][x];
        switch (state) {
            case "Right":
                x++;
                if (x === R - 1) {//向右判断是否到边界
                    state = "Down";
                    R--;
                }
                break;
            case "Left":
                x--;
                if (x === L) {//向左判断是否到边界
                    state = "Up";
                    L++;
                }
                break;
            case "Up":
                y--;
                if (y === T) {//向上判断是否到边界
                    state = "Right";
                    T++;
                }
                break;
            case "Down":
                y++;
                if (y === D - 1) {//向下判断是否到边界
                    state = "Left";
                    D--;
                }
                break;
        }
    }
    return backArr;
};
//leetcode submit region end(Prohibit modification and deletion)
