// 给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。
//
// 示例 1:
//
// 输入:
// [
// [ 1, 2, 3 ],
// [ 4, 5, 6 ],
// [ 7, 8, 9 ]
// ]
// 输出: [1,2,3,6,9,8,7,4,5]
//
//
// 示例 2:
//
// 输入:
// [
//  [1, 2, 3, 4],
//  [5, 6, 7, 8],
//  [9,10,11,12]
// ]
// 输出: [1,2,3,4,8,12,11,10,9,5,6,7]
//
// Related Topics 数组
// 👍 507 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (!matrix || matrix.length < 1) return [];
  var m = matrix.length;// 行数
  var n = matrix[0].length;// 列数
  if (n === 1) return [...matrix];
  var maxCount = m * n;
  var backArr = new Array(maxCount);
  var T = 0;// 上边界
  var D = m;// 下边界
  var L = 0;// 左边界
  var R = n;// 右边界
  var x = 0;// 列坐标
  var y = 0;// 行坐标
  var state = 'Right';// 定义四个方向，根据不同状态进行切换
  T = 1;// 初始化从第一个，所以要把上边界加1
  for (var i = 0; i < maxCount; i++) {
    // console.log(y,x,state)
    backArr[i] = matrix[y][x];
    switch (state) {
      case 'Right':
        x++;
        if (x === R - 1) { // 向右判断是否到边界
          state = 'Down';
          R--;
        }
        break;
      case 'Left':
        x--;
        if (x === L) { // 向左判断是否到边界
          state = 'Up';
          L++;
        }
        break;
      case 'Up':
        y--;
        if (y === T) { // 向上判断是否到边界
          state = 'Right';
          T++;
        }
        break;
      case 'Down':
        y++;
        if (y === D - 1) { // 向下判断是否到边界
          state = 'Left';
          D--;
        }
        break;
    }
  }
  return backArr;
};
// leetcode submit region end(Prohibit modification and deletion)
