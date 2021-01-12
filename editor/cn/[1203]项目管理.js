// 公司共有 n 个项目和 m 个小组，每个项目要不无人接手，要不就由 m 个小组之一负责。
//
// group[i] 表示第 i 个项目所属的小组，如果这个项目目前无人接手，那么 group[i] 就等于 -1。（项目和小组都是从零开始编号的）小组可能存
// 在没有接手任何项目的情况。
//
// 请你帮忙按要求安排这些项目的进度，并返回排序后的项目列表：
//
//
// 同一小组的项目，排序后在列表中彼此相邻。
// 项目之间存在一定的依赖关系，我们用一个列表 beforeItems 来表示，其中 beforeItems[i] 表示在进行第 i 个项目前（位于第 i 个
// 项目左侧）应该完成的所有项目。
//
//
// 如果存在多个解决方案，只需要返回其中任意一个即可。如果没有合适的解决方案，就请返回一个 空列表 。
//
//
//
// 示例 1：
//
//
//
//
// 输入：n = 8, m = 2, group = [-1,-1,1,0,0,1,0,-1], beforeItems = [[],[6],[5],[6],[
// 3,6],[],[],[]]
// 输出：[6,3,4,1,5,2,0,7]
//
//
// 示例 2：
//
//
// 输入：n = 8, m = 2, group = [-1,-1,1,0,0,1,0,-1], beforeItems = [[],[6],[5],[6],[
// 3],[],[4],[]]
// 输出：[]
// 解释：与示例 1 大致相同，但是在排序后的列表中，4 必须放在 6 的前面。
//
//
//
//
// 提示：
//
//
// 1 <= m <= n <= 3 * 104
// group.length == beforeItems.length == n
// -1 <= group[i] <= m - 1
// 0 <= beforeItems[i].length <= n - 1
// 0 <= beforeItems[i][j] <= n - 1
// i != beforeItems[i][j]
// beforeItems[i] 不含重复元素
//
// Related Topics 深度优先搜索 图 拓扑排序
// 👍 109 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @param {number} m
 * @param {number[]} group
 * @param {number[][]} beforeItems
 * @return {number[]}
 */
const topSort = (deg, graph, items) => {
  const queue = [];
  const result = [];
  for (const item of items) {
    if (deg[item] === 0) {
      queue.push(item);
    }
  }
  while (queue.length) {
    const u = queue.shift();
    result.push(u);
    for (const v of graph[u]) {
      if (--deg[v] === 0) {
        queue.push(v);
      }
    }
  }
  return result.length === items.length ? result : [];
}
var sortItems = function(n, m, group, beforeItems) {
  const groupItem = new Array(n + m).fill(undefined).map(() => []);// 保存组id
  const groupGraph = new Array(n + m).fill(undefined).map(() => []);// 保存组间领接表
  const groupDeg = new Array(n + m).fill(0);// 保存组间入度
  const itemGraph = new Array(n).fill(undefined).map(() => []);// 保存组内领接表
  const itemDeg = new Array(n).fill(0);// 保存组内入度
  const id = new Array(n + m).fill(undefined).map((val, index) => index);// id映射
  let leftId = m;
  for (let i = 0; i < n; i++) {
    if (group[i] === -1) {
      group[i] = leftId++;
    }
    groupItem[group[i]].push(i);
  }
  for (let i = 0; i < n; i++) {
    const curGroupId = group[i];// 第i个项目属于curGroupId 小组
    for (const item of beforeItems[i]) { // 获取第i个项目之前的项目
      const beforeGroupId = group[item]; // 之前的每个项目分别属于beforeGroupId小组
      if (curGroupId === beforeGroupId) { // 同一组时,他们之间是组内关系
        itemDeg[i]++;
        itemGraph[item].push(i);
      } else { // 非同一组,之间是组间关系
        groupDeg[curGroupId]++;
        groupGraph[beforeGroupId].push(curGroupId);
      }
    }
  }
  const groupResult = topSort(groupDeg, groupGraph, id)
  if (groupResult.length === 0) {
    return [];
  }
  const result = [];
  for (const curGroupId of groupResult) {
    const size = groupItem[curGroupId].length;
    if (size === 0) { // 如果这个组没有一个项目,则跳过
      continue;
    }
    const itemResult = topSort(itemDeg, itemGraph, groupItem[curGroupId]);
    if (itemResult.length === 0) {
      return [];
    }
    for (const item of itemResult) {
      result.push(item);
    }
  }
  return result;
};
// leetcode submit region end(Prohibit modification and deletion)
