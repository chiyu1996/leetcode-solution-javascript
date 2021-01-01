//你被给定一个 m × n 的二维网格，网格中有以下三种可能的初始化值：
//
//
// -1 表示墙或是障碍物
// 0 表示一扇门
// INF 无限表示一个空的房间。然后，我们用 231 - 1 = 2147483647 代表 INF。你可以认为通往门的距离总是小于 2147483647
//的。
//
//
// 你要给每个空房间位上填上该房间到 最近 门的距离，如果无法到达门，则填 INF 即可。
//
// 示例：
//
// 给定二维网格：
//
// INF  -1  0  INF
//INF INF INF  -1
//INF  -1 INF  -1
//  0  -1 INF INF
//
//
// 运行完你的函数后，该网格应该变成：
//
//   3  -1   0   1
//  2   2   1  -1
//  1  -1   2  -1
//  0  -1   3   4
//
// Related Topics 广度优先搜索
// 👍 112 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
  if(!rooms.length) {
    return rooms;
  }
  const n = rooms.length;
  const m = rooms[0].length;
  const INF = 2**31 -1;
  const dirs = [[-1, 0], [0, -1], [1, 0], [0, 1]];
  const vis = new Array(n).fill(undefined).map(()=>{
    return new Int32Array(m);
  })
  const bfs = (x,y) => {
    for (const [offsetX, offsetY] of dirs) {
      const newX = x + offsetX;
      const newY = y + offsetY;
      if (newX >= 0 && newX < n && newY >=0 && newY < m && rooms[x][y] + 1 < rooms[newX][newY] && rooms[newX][newY] !== -1 && vis[newX][newY] === 0) {
        vis[newX][newY] = 1;
        rooms[newX][newY] = rooms[x][y] + 1;
        bfs(newX,newY);
        vis[newX][newY] = 0;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if(rooms[i][j]===0){
        vis[i][j] = 1;
        bfs(i,j);
        vis[i][j] = 0;
      }
    }
  }
  return rooms;
};
//leetcode submit region end(Prohibit modification and deletion)
