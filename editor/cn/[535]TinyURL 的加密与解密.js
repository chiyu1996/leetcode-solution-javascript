// TinyURL是一种URL简化服务， 比如：当你输入一个URL https://leetcode.com/problems/design-tinyurl 时
// ，它将返回一个简化的URL http://tinyurl.com/4e9iAk.
//
// 要求：设计一个 TinyURL 的加密 encode 和解密 decode 的方法。你的加密和解密算法如何设计和运作是没有限制的，你只需要保证一个URL可
// 以被加密成一个TinyURL，并且这个TinyURL可以用解密方法恢复成原本的URL。
// Related Topics 哈希表 数学
// 👍 100 👎 0

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
const map = new Map();
var hash = (() => {
  const str = 'abcdefghijklimnopqrstuvwxyz123456789';
  function random(longUrl) {
    let hashUrl = 'http://tinyurl.com/'
    for (let i = 0; i < 10; i++) {
      hashUrl = hashUrl + str[Math.floor(Math.random() * 36)];
    }
    if (map.has(hashUrl)) {
      return random();
    } else {
      map.set(hashUrl, longUrl);
      return hashUrl;
    }
  }
  return random;
})();
var encode = function(longUrl) {
  return hash(longUrl);
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
  return map.get(shortUrl);
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
// leetcode submit region end(Prohibit modification and deletion)
