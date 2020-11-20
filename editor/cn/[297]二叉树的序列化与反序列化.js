// 序列化是将一个数据结构或者对象转换为连续的比特位的操作，进而可以将转换后的数据存储在一个文件或者内存中，同时也可以通过网络传输到另一个计算机环境，采取相反方
// 式重构得到原数据。
//
// 请设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串
// 反序列化为原始的树结构。
//
// 示例:
//
// 你可以将以下二叉树：
//
//    1
//   / \
//  2   3
//     / \
//    4   5
//
// 序列化为 "[1,2,3,null,null,4,5]"
//
// 提示: 这与 LeetCode 目前使用的方式一致，详情请参阅 LeetCode 序列化二叉树的格式。你并非必须采取这种方式，你也可以采用其他的方法解决这
// 个问题。
//
// 说明: 不要使用类的成员 / 全局 / 静态变量来存储状态，你的序列化和反序列化算法应该是无状态的。
// Related Topics 树 设计
// 👍 367 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  if (root === null) return 'X,';
  const left = serialize(root.left);
  const right = serialize(root.right);
  return root.val + ',' + left + right;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  const list = data.split(',');
  const buildTree = (list) => {
    const rootVal = list.shift();
    if (rootVal === 'X') {
      return null;
    }
    const root = new TreeNode(rootVal);
    root.left = buildTree(list);
    root.right = buildTree(list);
    return root;
  };
  return buildTree(list);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// leetcode submit region end(Prohibit modification and deletion)
