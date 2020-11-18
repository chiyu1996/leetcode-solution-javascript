// 给定一个机票的字符串二维数组 [from, to]，子数组中的两个成员分别表示飞机出发和降落的机场地点，对该行程进行重新规划排序。所有这些机票都属于一个从
// JFK（肯尼迪国际机场）出发的先生，所以该行程必须从 JFK 开始。
//
//
//
// 提示：
//
//
// 如果存在多种有效的行程，请你按字符自然排序返回最小的行程组合。例如，行程 ["JFK", "LGA"] 与 ["JFK", "LGB"] 相比就更小，排序
// 更靠前
// 所有的机场都用三个大写字母表示（机场代码）。
// 假定所有机票至少存在一种合理的行程。
// 所有的机票必须都用一次 且 只能用一次。
//
//
//
//
// 示例 1：
//
// 输入：[["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
// 输出：["JFK", "MUC", "LHR", "SFO", "SJC"]
//
//
// 示例 2：
//
// 输入：[["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
// 输出：["JFK","ATL","JFK","SFO","ATL","SFO"]
// 解释：另一种有效的行程是 ["JFK","SFO","ATL","JFK","ATL","SFO"]。但是它自然排序更大更靠后。
// Related Topics 深度优先搜索 图
// 👍 287 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
  const map = {};
  for (const path of tickets) {
    if (!map[path[0]]) {
      map[path[0]] = [];
    }
    map[path[0]].push(path[1]);
  }
  for (const city in map) {
    map[city].sort();
  }
  const ans = ['JFK'];
  const dfs = (node, used) => {
    if (used === tickets.length) {
      return true;
    }
    const nextNodes = map[node];
    if (!nextNodes || nextNodes.length === 0) {
      return false;
    }
    for (let i = 0; i < nextNodes.length; i++) {
      const next = nextNodes[i];
      nextNodes.splice(i, 1);
      ans.push(next);
      if (dfs(next, used + 1)) {
        return true;
      }
      nextNodes.splice(i, 0, next);
      ans.pop();
    }
  };
  dfs('JFK', 0);
  return ans;
};
// leetcode submit region end(Prohibit modification and deletion)
