//1636. 按照频率将数组升序排序-easy-排序
//https://leetcode-cn.com/problems/sort-array-by-increasing-frequency/
var frequencySort = function (nums) {
    let map = new Map();
    for (let item of nums) {
        if (map.has(item)) {
            map.set(item, map.get(item) + 1);
        } else {
            map.set(item, 1);
        }
    }
    nums.sort((a, b) => {
        if (map.get(a) !== map.get(b)) {
            return map.get(a) - map.get(b);
        } else {
            return b - a;
        }

    });
    return nums;
};
//1637. 两点之间不包含任何点的最宽垂直面积-medium-排序
//https://leetcode-cn.com/problems/widest-vertical-area-between-two-points-containing-no-points/
var maxWidthOfVerticalArea = function (points) {
    points.sort((a, b) => {
        return a[0] - b[0];
    });
    let max = 0;
    for (let i = 0; i < points.length - 1; i++) {
        max = Math.max(max, points[i + 1][0] - points[i][0]);
    }
    return max;
};
//1638. 统计只差一个字符的子串数目-medium-暴力枚举
//https://leetcode-cn.com/problems/count-substrings-that-differ-by-one-character/
var countSubstrings = function (s, t) {
    const diff = (left1, right1, left2, right2) => {
        let cnt = 0;
        for (let i = left1; i < right1; i++) {
            if (s[i] !== t[left2 + i - left1]) {
                cnt++;
                if (cnt >= 2) {
                    break;
                }
            }
        }
        return cnt === 1 ? 1 : 0;
    };
    let ans = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = 1; j <= s.length; j++) {
            if (i + j > s.length) {
                break;
            }
            for (let k = 0; k < t.length; k++) {
                if (k + j > t.length) {
                    break;
                }
                ans += diff(i, i + j, k, k + j);
            }
        }
    }
    return ans;
};
//1639. 通过给定词典构造目标字符串的方案数-hard-动态规划
//https://leetcode-cn.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/
var numWays = function (words, target) {
    if (words === null || words.length === 0) return 0;
    let m = target.length;
    let n = words[0].length;
    let mod = 1e9 + 7;
    let dp = new Array(m + 1).fill(undefined).map(() => {
        return new Int32Array(n + 1);
    });
    let pre = new Array(1005).fill(undefined).map(() => {
        return new Int32Array(26);
    });
    for (let word of words) {
        for (let i = 0; i < n; i++) {
            let char_index = word.charCodeAt(i) - 97;
            pre[i + 1][char_index]++;
        }
    }
    dp[0][0] = 1;
    let ans = 0;
    for (let i = 1; i <= target.length; i++) {
        for (let j = 1; j <= n; j++) {
            dp[i - 1][j] += dp[i - 1][j - 1];
            dp[i - 1][j] %= mod;

        }
        for (let j = i; j <= n; j++) {
            let char_index = target.charCodeAt(i - 1) - 97;
            if (pre[j][char_index]) {
                dp[i][j] += ((dp[i - 1][j - 1] % mod) * (pre[j][char_index] % mod)) % mod;
                dp[i][j] %= mod;
            }
        }
    }
    for (let i = 0; i <= n; i++) {
        ans += dp[m][i];
        ans %= mod;
    }
    return ans;
};
