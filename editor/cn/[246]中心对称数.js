//中心对称数是指一个数字在旋转了 180 度之后看起来依旧相同的数字（或者上下颠倒地看）。 
//
// 请写一个函数来判断该数字是否是中心对称数，其输入将会以一个字符串的形式来表达数字。 
//
// 
//
// 示例 1: 
//
// 输入: num = "69"
//输出: true
// 
//
// 示例 2: 
//
// 输入: num = "88"
//输出: true 
//
// 示例 3: 
//
// 输入: num = "962"
//输出: false 
//
// 示例 4： 
//
// 输入：num = "1"
//输出：true
// 
// Related Topics 哈希表 数学 
// 👍 21 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
    let n = num.length
    for(let i = 0;i < n/2 ;i++){
        if(num[i] === num[n-i-1]){
            if(num[i] !== '1' && num[i] !=='0' && num[i] !=='8'){
                return false
            }
        }else if(num[i] !== num[n-i-1]){
            if(!((num[i]==='6'&& num[n-i-1] ==='9')||(num[i]==='9'&&num[n-i-1]==='6'))){
                return false
            }
        }
    }
    return true;
};
//leetcode submit region end(Prohibit modification and deletion)
