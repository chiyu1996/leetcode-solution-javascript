// 给定一个正整数 n，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。
//
// 示例:
//
// 输入: 3
// 输出:
// [
// [ 1, 2, 3 ],
// [ 8, 9, 4 ],
// [ 7, 6, 5 ]
// ]
// Related Topics 数组
// 👍 257 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  if (n == 1) return [[1]];
  const matrix = new Array(n).fill(undefined).map(() => {
    return new Array(n);
  });
  var maxCount = n * n;
  var T = 0;// 上边界
  var D = n;// 下边界
  var L = 0;// 左边界
  var R = n;// 右边界
  var x = 0;// 列坐标
  var y = 0;// 行坐标
  var state = 'Right';// 定义四个方向，根据不同状态进行切换
  T = 1;// 初始化从第一个，所以要把上边界加1
  for (var i = 1; i <= maxCount; i++) {
    matrix[y][x] = i;
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
  return matrix;
};
// leetcode submit region end(Prohibit modification and deletion)
