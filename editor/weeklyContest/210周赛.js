// 5535. 括号的最大嵌套深度
//https://leetcode-cn.com/problems/maximum-nesting-depth-of-the-parentheses/
var maxDepth = function (s) {
    let left = 0;
    let cnt = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            left++;
            cnt = Math.max(cnt, left);
        } else if (s[i] === ")") {
            left--;
        }
    }
    return cnt;
};
//5536. 最大网络秩
//https://leetcode-cn.com/problems/maximal-network-rank/
var maximalNetworkRank = function (n, roads) {
    let cnt = 0;
    let city = new Array(n + 1).fill(0);
    let edge = new Array(n + 1).fill(undefined).map(() => {
        return new Array(n + 1).fill(0);
    });
    for (let i = 0; i < roads.length; i++) {
        let [u, v] = roads[i];
        city[u]++;
        city[v]++;
        edge[u][v] = 1;
        edge[v][u] = 1;
    }
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let tmp;
            if (edge[i][j]) {
                tmp = city[i] + city[j] - 1;
            } else {
                tmp = city[i] + city[j];
            }
            cnt = Math.max(tmp, cnt);
        }
    }
    return cnt;
};
//1616. 分割两个字符串得到回文串
//https://leetcode-cn.com/problems/split-two-strings-to-make-palindrome/
var checkPalindromeFormation = function (a, b) {
    const checkPalindrome = (s) => {
        let n = s.length;
        for (let i = 0; i < n / 2; i++) {
            if (s[i] !== s[n - 1 - i]) {
                return false;
            }
        }
        return true;
    };
    const check = (s1, s2) => {
        let i = 0, j = s1.length - 1;
        while (i < j && s1[i] === s2[j]) {
            i++;
            j--;
        }
        return checkPalindrome(s1.slice(i, j + 1)) || checkPalindrome(s2.slice(i, j + 1));
    };
    return check(a, b) || check(b, a);
};
//5538. 统计子树中城市之间最大距离
// https://leetcode-cn.com/problems/count-subtrees-with-max-distance-between-cities/
var countSubgraphsForEachDiameter = function (n, edges) {
    let vis, visAll;
    let d = new Array(n).fill(undefined).map(() => {
        return new Array(n).fill(Infinity);
    });
    let g = new Array(n).fill(undefined).map(() => {
        return [];
    });
    const dfs = (u, fa) => {
        vis |= 1 << u;
        for (let v of g[u]) {
            if ((vis >> v & 1) === 0 && (visAll >> v & 1) === 1 && v !== fa) {
                dfs(v, u);
            }
        }
    };
    for (let i = 0; i < n; i++) {
        d[i][i] = 0;
    }
    for (let edge of edges) {
        let [u, v] = edge;
        u = u - 1;
        v = v - 1;
        d[u][v] = 1;
        d[v][u] = 1;
        g[u].push(v);
        g[v].push(u);
    }
    let ans = new Array(n - 1).fill(0);
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                d[i][j] = Math.min(d[i][j], d[i][k] + d[k][j]);
            }
        }
    }
    for (let s = 2; s < (1 << n); s++) {
        let t = [];
        for (let i = 0; i < n; i++) {
            if ((s >> i) & 1) t.push(i);
        }
        visAll = s;
        vis = 0;
        dfs(t[0], -1);
        if (vis === visAll) {
            let max = 0;
            for (let u of t) {
                for (let v of t) {
                    max = Math.max(max, d[u][v]);
                }
            }
            if (max > 0 && max <= n - 1) ans[max - 1]++;
        }
    }
    return ans;
};
console.log(countSubgraphsForEachDiameter(4,
    [[1, 2], [2, 3], [2, 4]]));