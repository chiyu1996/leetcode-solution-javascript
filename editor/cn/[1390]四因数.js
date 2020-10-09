//给你一个整数数组 nums，请你返回该数组中恰有四个因数的这些整数的各因数之和。 
//
// 如果数组中不存在满足题意的整数，则返回 0 。 
//
// 
//
// 示例： 
//
// 输入：nums = [21,4,7]
//输出：32
//解释：
//21 有 4 个因数：1, 3, 7, 21
//4 有 3 个因数：1, 2, 4
//7 有 2 个因数：1, 7
//答案仅为 21 的所有因数的和。
// 
//
// 
//
// 提示： 
//
// 
// 1 <= nums.length <= 10^4 
// 1 <= nums[i] <= 10^5 
// 
// Related Topics 数学 
// 👍 13 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
let maxN = 1e5, cube = 46;
let p = [];
let nCount = 0;
let a = new Array(maxN + 5).fill(0);
const getPrime = (n) => {
    for (let i = 2; i <= n; i++) {
        if (a[i] === 0) {
            p.push(i);
            ++nCount;
        }
        for (let j = 0, k; (j <= nCount) && (k = i * p[j]) <= n; j++) {
            a[k] = 1;
            if (i % p[j] === 0) break;
        }
    }
};
getPrime(maxN);
let map = new Map();
for (let prime of p) {
    if (prime < cube) {
        map.set(prime ** 3, 1 + prime + prime ** 2 + prime ** 3);
    }
}
for (let i = 0; i < p.length; i++) {
    for (let j = i + 1; p[i] * p[j] < maxN; j++) {
        map.set(p[i] * p[j], 1 + p[i] + p[j] + p[i] * p[j]);
    }
}
var sumFourDivisors = function (nums) {

    let ans = 0;
    for (let i = 0; i < nums.length; i++) {
        if (map.get(nums[i])) {
            ans += map.get(nums[i]);
        }
    }
    return ans;

};
//leetcode submit region end(Prohibit modification and deletion)
