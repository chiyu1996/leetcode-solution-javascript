// 给你一个变量对数组 equations 和一个实数值数组 values 作为已知条件，其中 equations[i] = [Ai, Bi] 和 values
// [i] 共同表示等式 Ai / Bi = values[i] 。每个 Ai 或 Bi 是一个表示单个变量的字符串。
//
// 另有一些以数组 queries 表示的问题，其中 queries[j] = [Cj, Dj] 表示第 j 个问题，请你根据已知条件找出 Cj / Dj =
// ? 的结果作为答案。
//
// 返回 所有问题的答案 。如果存在某个无法确定的答案，则用 -1.0 替代这个答案。
//
//
//
// 注意：输入总是有效的。你可以假设除法运算中不会出现除数为 0 的情况，且不存在任何矛盾的结果。
//
//
//
// 示例 1：
//
//
// 输入：equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"]
//, ["b","a"],["a","e"],["a","a"],["x","x"]]
// 输出：[6.00000,0.50000,-1.00000,1.00000,-1.00000]
// 解释：
// 条件：a / b = 2.0, b / c = 3.0
// 问题：a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ?
// 结果：[6.0, 0.5, -1.0, 1.0, -1.0 ]
//
//
// 示例 2：
//
//
// 输入：equations = [["a","b"],["b","c"],["bc","cd"]], values = [1.5,2.5,5.0], quer
// ies = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]
// 输出：[3.75000,0.40000,5.00000,0.20000]
//
//
// 示例 3：
//
//
// 输入：equations = [["a","b"]], values = [0.5], queries = [["a","b"],["b","a"],["a
// ","c"],["x","y"]]
// 输出：[0.50000,2.00000,-1.00000,-1.00000]
//
//
//
//
// 提示：
//
//
// 1 <= equations.length <= 20
// equations[i].length == 2
// 1 <= Ai.length, Bi.length <= 5
// values.length == equations.length
// 0.0 < values[i] <= 20.0
// 1 <= queries.length <= 20
// queries[i].length == 2
// 1 <= Cj.length, Dj.length <= 5
// Ai, Bi, Cj, Dj 由小写英文字母与数字组成
//
// Related Topics 并查集 图
// 👍 365 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
  const map = new Map();
  let total = 0;
  equations.map(([A,B])=>{
    if (!map.has(A)) {
      map.set(A,total++);
    }
    if (!map.has(B)) {
      map.set(B,total++);
    }
  })
  const graph = new Array(total).fill(undefined).map(()=> new Array(total).fill(-1.0));
  const n = equations.length;
  for (let i = 0; i < n; i++) {
    const [A,B] = equations[i];
    const indexA = map.get(A);
    const indexB = map.get(B);
    graph[indexA][indexB] = values[i];
    graph[indexB][indexA] = 1/values[i];
  }
  for (let k = 0; k < total; k++) {
    for (let i = 0; i < total; i++) {
      for (let j = 0; j < total; j++) {
        if(graph[i][k] > 0 && graph[k][j] > 0){
          graph[i][j] = Math.max(graph[i][j], graph[i][k] * graph[k][j]);
        }
      }
    }
  }
  const ans = [];
  queries.map(([C,D])=>{
    let result = -1
    const indexC = map.get(C);
    const indexD = map.get(D);
    if(indexC !==undefined && indexD !== undefined) {
      if(graph[indexC][indexD]>0){
        result=graph[indexC][indexD];
      }
    }
    ans.push(result);
  })
  return ans;
};
// leetcode submit region end(Prohibit modification and deletion)
