// 1710. 卡车上的最大单元数-easy-贪心
// https://leetcode-cn.com/problems/maximum-units-on-a-truck/
// 思路：按照单元素大小进行排序，贪心即可
/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
  let result = 0;
  boxTypes.sort((a,b)=>b[1] - a[1]);
  boxTypes.map(([num,unit])=>{
    result += Math.min(truckSize,num)*unit;
    truckSize = Math.max(0,truckSize - num);
  })
  return result;
};
// 1711. 大餐计数-medium-哈希表+枚举
// https://leetcode-cn.com/problems/count-good-meals/
// 思路与两数之和类似,对2的次方进行枚举即可
/**
 * @param {number[]} deliciousness
 * @return {number}
 */
var countPairs = function(deliciousness) {
  const map = new Map();
  const mod = 1e9+7;
  let result = 0;
  deliciousness.map((val)=>{
    const cnt = map.get(val) || 0;
    for(let j = 0;j < 22;j++){
      const target = 2 ** j;
      if(map.has(target - val)){
        result = (result + map.get(target - val))%mod;
      }
    }
    map.set(val,cnt + 1);
  })
  return result;
};

// 1712. 将数组分成三个子数组的方案数 - medium -  二分
// https://leetcode-cn.com/problems/ways-to-split-array-into-three-subarrays/
// 思路：枚举第一段前缀和位置，然后在右侧两次二分查找使其满足题目要求的前缀和位置上界rr和下界ll,
// 在[ll,rr]之间选任一点作为第二个分割点均可满足要求,所以对答案的贡献为 rr- ll + 1
/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplit = function(nums) {
  const n = nums.length;
  const pre_sum = new Int32Array(n + 1);
  const mod = 1e9 + 7;
  pre_sum[0] = nums[0];
  for (let i = 1; i < n; i++) {
    pre_sum[i] = pre_sum[i - 1] + nums[i];
  }
  const sum = pre_sum[n - 1];
  let result = 0;
  for (let i = 0; i < n - 1; i++) {
    if (pre_sum[i] * 3 > sum) {
      break;
    }
    let [l, r, ll, rr] = [i + 1, n - 2];
    while (l <= r) {
      const mid = (l + r) >> 1;
      if (pre_sum[mid] >= 2 * pre_sum[i]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
    ll = l;
    [l, r] = [i + 1, n - 2];
    while (l <= r) {
      const mid = (l + r) >> 1;
      if (sum - pre_sum[mid] >= pre_sum[mid] - pre_sum[i]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
    rr = r;
    result += (rr - ll + 1) % mod;
  }
  return result % mod;
};

// 1713. 得到子序列的最少操作次数 - hard - LIS
// https://leetcode-cn.com/problems/minimum-operations-to-make-a-subsequence/
// 思路：设target长度为N,假设需要添加x个整数,那么就需要arr 提供N-x个整数,而且这N-x个整数在target中
// 的相对顺序还必须与target的相同,为了使x最小,则需要让N-x最大,即找出arr中满足顺序相同的最长上升子序列
// 因为是最长(严格)递增子序列,所以可以使用O(NlogN)的做法来优化效率
/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {number}
 */
const lower_bound = (arr, left, right, val) => {
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (arr[mid] === val) {
      return mid;
    } else if (arr[mid] < val) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}
const LIS = (arr) => {
  const n = arr.length;
  const res = [];
  for (let i = 0; i < n; i++) {
    if (!res.length || arr[i] > res[res.length - 1]) {
      res.push(arr[i]);
    } else {
      const index = lower_bound(res, 0, res.length - 1, arr[i]);
      res[index] = arr[i];
    }
  }
  return res.length;
}
var minOperations = function(target, arr) {
  const map = new Map();
  const indexs = [];
  for (let i = 0; i < target.length; i++) {
    map.set(target[i], i);
  }
  arr.map(item => {
    if (map.has(item)) {
      indexs.push(map.get(item));
    }
  })
  return target.length - LIS(indexs);
};
