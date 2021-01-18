// 给定一个列表 accounts，每个元素 accounts[i] 是一个字符串列表，其中第一个元素 accounts[i][0] 是 名称 (name)，其
// 余元素是 emails 表示该账户的邮箱地址。
//
// 现在，我们想合并这些账户。如果两个账户都有一些共同的邮箱地址，则两个账户必定属于同一个人。请注意，即使两个账户具有相同的名称，它们也可能属于不同的人，因为
// 人们可能具有相同的名称。一个人最初可以拥有任意数量的账户，但其所有账户都具有相同的名称。
//
// 合并账户后，按以下格式返回账户：每个账户的第一个元素是名称，其余元素是按顺序排列的邮箱地址。账户本身可以以任意顺序返回。
//
//
//
// 示例 1：
//
//
// 输入：
// accounts = [["John", "johnsmith@mail.com", "john00@mail.com"], ["John", "johnn
// ybravo@mail.com"], ["John", "johnsmith@mail.com", "john_newyork@mail.com"], ["Ma
// ry", "mary@mail.com"]]
// 输出：
// [["John", 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com'],
// ["John", "johnnybravo@mail.com"], ["Mary", "mary@mail.com"]]
// 解释：
// 第一个和第三个 John 是同一个人，因为他们有共同的邮箱地址 "johnsmith@mail.com"。
// 第二个 John 和 Mary 是不同的人，因为他们的邮箱地址没有被其他帐户使用。
// 可以以任何顺序返回这些列表，例如答案 [['Mary'，'mary@mail.com']，['John'，'johnnybravo@mail.com']，
// ['John'，'john00@mail.com'，'john_newyork@mail.com'，'johnsmith@mail.com']] 也是正确的
// 。
//
//
//
//
// 提示：
//
//
// accounts的长度将在[1，1000]的范围内。
// accounts[i]的长度将在[1，10]的范围内。
// accounts[i][j]的长度将在[1，30]的范围内。
//
// Related Topics 深度优先搜索 并查集
// 👍 185 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
  const emailToName = new Map();
  const emailToIndex = new Map();
  let emailCount = 0;
  for (const [name, ...emails] of accounts) {
    for (const email of emails) {
      emailToIndex.set(email, emailCount++);
      emailToName.set(email, name);
    }
  }
  const unionFind = new UnionFind(emailCount);
  for (const [name, firstEmail, ...nextEmails] of accounts) {
    for (const nextEmail of nextEmails) {
      unionFind.union(emailToIndex.get(firstEmail), emailToIndex.get(nextEmail));
    }
  }
  const indexToEmail = new Map();
  for (const email of emailToIndex.keys()) {
    const index = unionFind.find(emailToIndex.get(email));
    const array = indexToEmail.has(index) ? indexToEmail.get(index) : [];
    array.push(email);
    indexToEmail.set(index, array);
  }
  const result = [];
  for (const emails of indexToEmail.values()) {
    emails.sort();
    const [firstEmail] = emails;
    const name = emailToName.get(firstEmail);
    const array = [];
    array.push(name);
    array.push(...emails);
    result.push(array);
  }
  return result;
};
class UnionFind {
  constructor(n) {
    this.parent = new Array(n).fill(0).map((value, index) => index);
  }

  union(index1, index2) {
    this.parent[this.find(index2)] = this.find(index1);
  }

  find(index) {
    if (this.parent[index] !== index) {
      this.parent[index] = this.find(this.parent[index]);
    }
    return this.parent[index];
  }
}
// leetcode submit region end(Prohibit modification and deletion)
